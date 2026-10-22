// OCR GCSE Geography B (J384) — Practice/Exam-Style Questions
// 12 topics × 40+ written questions with mark schemes

const GEOGRAPHY_OCR_GCSE_PRACTICE = {
  '1.1': {
    name: "Global Hazards: Extreme Weather",
    questions: [
      {
        q: "What is a natural hazard? [1 mark]",
        marks: 1,
        markScheme: "1 mark: a natural process or event that poses a threat to people and property.",
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
        q: "Suggest why the death toll from tropical storms is often higher in LIDCs than ACs. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: poorer quality housing collapses; less effective warning/communication systems; fewer resources for evacuation and shelters; slower emergency response and aid distribution; more people live in exposed coastal areas.",
      },
      {
        q: "Evaluate the effectiveness of the responses to a named tropical storm. [9 marks]",
        marks: 9,
        markScheme: "Level 3 (7–9): detailed evaluation of immediate and long-term responses, strengths and weaknesses, clear supported judgement, named example. Level 2 (4–6): some evaluation, some detail. Level 1 (1–3): basic description. Credit: Haiyan evacuation of 800,000; slow aid to remote areas; poor understanding of storm surge; Build Back Better; controversy of no-build zone.",
      },
      {
        q: "What is meant by the term \"hazard risk\"? [1 mark]",
        marks: 1,
        markScheme: "1 mark: the probability or chance that a natural hazard will take place and affect people.",
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
        q: "Compare the effects of tropical storms in an AC and an LIDC. [4 marks]",
        marks: 4,
        markScheme: "1 mark per comparative point: LIDCs usually have more deaths (weaker buildings, fewer warnings); ACs usually have higher economic costs (more expensive infrastructure); recovery slower in LIDCs; ACs have insurance and government support.",
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
        q: "Explain how landslides can be caused by tropical cyclones. [2 marks]",
        marks: 2,
        markScheme: "1 mark: intense rainfall saturates slopes; 1 mark: increases weight and reduces friction so slopes collapse, especially where vegetation has been removed.",
      },
      {
        q: "Describe the primary and secondary effects of a tropical cyclone in a developing country. [6 marks]",
        marks: 6,
        markScheme: "Level marked, named example (e.g. Haiyan): primary — surge, deaths, homes destroyed; secondary — disease, food shortages, lost livelihoods, landslides.",
      },
      {
        q: "Describe what happens during an El Niño event. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: trade winds weaken/reverse; warm water moves east across Pacific; rain and floods in Peru/Ecuador; drought in Australia/Indonesia; occurs every 2–7 years.",
      },
      {
        q: "Describe the differences between El Niño and La Niña. [4 marks]",
        marks: 4,
        markScheme: "2 x 2 marks: El Niño — weaker trade winds, warm water east, drought in Australia, floods in Peru; La Niña — stronger trade winds, warm water pushed west, floods in Australia, drier Peru.",
      },
      {
        q: "Explain the causes of drought. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: persistent high pressure/sinking air; changes in atmospheric circulation (El Niño); shifts in ITCZ; human factors (over-abstraction, deforestation) worsen effects.",
      },
      {
        q: "Describe the causes of a named drought. [3 marks]",
        marks: 3,
        markScheme: "Named example, e.g. Millennium Drought: repeated El Niño events; persistent high pressure over southern Australia; rising temperatures increased evaporation.",
      },
      {
        q: "Describe the environmental impacts of a named drought. [3 marks]",
        marks: 3,
        markScheme: "Named example, e.g. Millennium Drought: Murray–Darling flows at record lows; wetlands dried; fish and birds declined; dust storms; bushfires.",
      },
      {
        q: "Describe the economic impacts of a named drought. [3 marks]",
        marks: 3,
        markScheme: "Named example: farm output fell; rice and cotton collapsed; billions of dollars cost; jobs lost; water prices rose.",
      },
      {
        q: "Explain how people responded to a named drought. [4 marks]",
        marks: 4,
        markScheme: "Named example: water restrictions (Melbourne 155 litres/person/day); desalination plants; Murray–Darling Basin Plan 2012; recycling and rainwater tanks; efficient irrigation.",
      },
      {
        q: "Compare the impacts of a drought and a tropical storm. [6 marks]",
        marks: 6,
        markScheme: "Level marked: speed of onset; area affected; duration; types of impact (economic/environmental vs deaths and destruction); named examples (Millennium Drought vs Haiyan).",
      },
    ],
  },
  '1.2': {
    name: "Global Hazards: Tectonic Hazards",
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
        markScheme: "Level 1 (1–2): simple statement that poorer countries suffer more. Level 2 (3–4): explains some factors with development. Level 3 (5–6): detailed explanation covering multiple factors: building quality — poor standards mean more collapse; emergency services — insufficient response capacity; early warning systems — LIDCs may lack these; community preparedness; access to healthcare; ability to rebuild. Links to specific examples (Haiti 2010 vs Japan 2011) for full marks.",
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
        markScheme: "1 mark per developed point: cross-bracing — steel framework absorbs shaking; rubber base isolators — building moves independently of ground; counterweights at top (e.g. Taipei 101 damper); open ground floors — absorb collapse; reinforced concrete; automatic gas shut-offs; low-rise buildings safer in LIDCs; retrofitting old buildings.",
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
        q: "Explain what is meant by the term 'natural hazard' and how tectonic events become hazards. [3 marks]",
        marks: 3,
        markScheme: "1 mark for definition: a natural event that poses a threat to human life or property. 1 mark for: tectonic events (earthquakes, volcanic eruptions) become hazards when they occur near human populations. 1 mark for development: the same magnitude earthquake in an uninhabited area is a natural event but not a hazard; vulnerability (population density, building quality, economic capacity) determines hazard level.",
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
        q: "Define the term \"natural hazard\". [1 mark]",
        marks: 1,
        markScheme: "1 mark: a natural process or event that poses a threat to people and property.",
      },
      {
        q: "Explain two factors that affect hazard risk. [4 marks]",
        marks: 4,
        markScheme: "2 x 2 marks: urbanisation (1) — more people exposed in dense, poorly built settlements (1); poverty (1) — vulnerable locations, weak buildings, little preparation (1); farming (1) — fertile volcanic soils/floodplains attract people (1); climate change (1).",
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
  '1.3': {
    name: "Changing Climate",
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
        q: "Suggest why developing countries argue they should not have to reduce emissions as much as ACs. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: ACs industrialised first — responsible for most historical emissions; developing countries have a right to develop; current per capita emissions in LIDCs and EDCs much lower than ACs (e.g. US ~15 tonnes CO₂/person vs India ~2 tonnes); climate injustice — poorest countries suffering most despite contributing least; ACs have financial/technological capacity to transition; principle of common but differentiated responsibilities.",
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
        markScheme: "1 mark each for any four: different countries have different emissions histories and current levels (AC vs LIDC fairness debate); LIDCs argue ACs should pay more as they caused most historical emissions; economic cost of transition seen as uncompetitive; fossil fuel lobbies oppose action; lack of enforcement mechanisms in international law; political changes (e.g. US withdrawals from Paris under Trump in 2017 and again in 2025); differing national priorities; developing nations prioritise growth over emissions cuts.",
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
        q: "Describe the projected changes in global temperature by 2100. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: IPCC projects ~1.4°C to over 4°C above pre-industrial; depends on emissions scenario; 2024 already ~1.5°C; sea level rise of 0.3–1 m or more.",
      },
      {
        q: "Explain why there is uncertainty about future climate change. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: future emissions depend on human choices; natural factors unpredictable; feedback mechanisms; model limitations.",
      },
    ],
  },
  '1.4': {
    name: "Distinctive Landscapes: UK Landscapes and Coasts",
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
  '1.5': {
    name: "Distinctive Landscapes: Rivers",
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
  '1.6': {
    name: "Sustaining Ecosystems: Tropical Rainforests",
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
        q: "Describe the concept of interdependence in the tropical rainforest. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: plants and animals depend on each other; e.g. trees rely on insects for pollination; animals rely on trees for food and shelter; if one species is removed it affects others; trees cycle water (transpiration) affecting local rainfall; shows food web/ecological interdependence.",
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
        markScheme: "1 mark for: an agreement where a country's debt is reduced/cancelled in exchange for protecting areas of natural habitat (e.g. rainforest); 1 mark for: provides economic incentive for LIDC governments to conserve forests rather than develop them.",
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
        markScheme: "1 mark each for: CITES — controls trade in endangered species; REDD+ (UN) — pays LIDCs to reduce emissions from deforestation; Paris Agreement includes forest protection commitments; debt-for-nature swaps — debt cancelled in return for conservation; BUT enforcement is weak, countries may prioritise development, funding often insufficient to offset economic incentives for deforestation.",
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
        q: "Explain what is meant by a food web and how energy flows through it. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: shows feeding relationships between organisms; producers capture sunlight; energy passes to primary, secondary and tertiary consumers; energy lost at each trophic level; decomposers recycle nutrients.",
      },
      {
        q: "Describe the global distribution of tropical rainforests. [2 marks]",
        marks: 2,
        markScheme: "1 mark per point: between the Tropics near the Equator; Amazon, Congo Basin, South-East Asia/Indonesia.",
      },
      {
        q: "Explain why tropical rainforests are important to the rest of the world. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: carbon store and sink; regulate global climate and water cycle; biodiversity and medicines; resources such as timber and food.",
      },
    ],
  },
  '1.7': {
    name: "Sustaining Ecosystems: Polar Environments",
    questions: [
      {
        q: "What is a cold environment? [1 mark]",
        marks: 1,
        markScheme: "1 mark: an area where temperatures are very low for most of the year, dominated by ice, snow and frozen ground (polar, tundra or alpine).",
      },
      {
        q: "Describe the location of tundra environments. [2 marks]",
        marks: 2,
        markScheme: "1 mark per point: roughly 60°–75°N; northern Canada, Alaska, northern Russia, Scandinavia/Greenland coast; between polar ice and coniferous forest.",
      },
      {
        q: "Describe the climate of polar environments. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: extremely cold — winter to −50°C or lower; summer rarely above 0°C; very low precipitation (<250 mm), mostly snow; strong katabatic winds; 24-hour darkness/daylight.",
      },
      {
        q: "Explain why polar areas receive low precipitation. [2 marks]",
        marks: 2,
        markScheme: "1 mark: cold air is sinking, creating high pressure; 1 mark: cold air holds little moisture, so few clouds form.",
      },
      {
        q: "Define the term \"active layer\". [1 mark]",
        marks: 1,
        markScheme: "1 mark: the top layer of ground above the permafrost that thaws in summer and refreezes in winter.",
      },
      {
        q: "Explain why the ground in the tundra is waterlogged in summer. [3 marks]",
        marks: 3,
        markScheme: "1 mark: the active layer thaws; 1 mark: permafrost below is impermeable; 1 mark: meltwater cannot drain so bogs and lakes form; low evaporation in cool conditions.",
      },
      {
        q: "Describe the soils of tundra environments. [2 marks]",
        marks: 2,
        markScheme: "1 mark per point: thin; acidic; infertile; waterlogged in summer; slow decomposition leads to peat build-up.",
      },
      {
        q: "Explain the interdependence of plants and the permafrost. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: permafrost limits root depth so only shallow-rooted, low plants grow; vegetation and peat insulate the ground; removing plants causes permafrost to thaw and ground to subside.",
      },
      {
        q: "Describe two adaptations of plants to cold environments. [4 marks]",
        marks: 4,
        markScheme: "2 x 2 marks: low-growing/cushion shape (1) shelters from wind, insulated by snow (1); shallow roots (1) because only the active layer thaws (1); short life cycle (1) to complete in brief summer (1); dark leaves (1) absorb more heat (1).",
      },
      {
        q: "Describe two adaptations of animals to cold environments. [4 marks]",
        marks: 4,
        markScheme: "2 x 2 marks: thick fur/blubber (1) insulation against cold (1); white coat (1) camouflage (1); small extremities (1) reduce heat loss (1); migration (1) avoids harsh winter (1); hibernation (1).",
      },
      {
        q: "Explain why cold environments have low biodiversity. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: harsh climate — few species can survive; short growing season limits plant growth; low productivity supports few herbivores and predators; simple food webs.",
      },
      {
        q: "Explain one issue affecting biodiversity in cold environments. [2 marks]",
        marks: 2,
        markScheme: "1 mark for issue, 1 for development: e.g. climate change (1) — loss of sea ice reduces polar bear hunting grounds (1); oil spills (1) kill seabirds and marine mammals (1).",
      },
      {
        q: "Describe the location of Alaska. [2 marks]",
        marks: 2,
        markScheme: "1 mark per point: north-west North America; US state; borders Canada; between about 55°N and 71°N; north coast on the Arctic Ocean.",
      },
      {
        q: "Describe the importance of oil to Alaska. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: Prudhoe Bay — largest oilfield in North America; funds most of the state budget; Alaska Permanent Fund pays residents a dividend; jobs in extraction and the pipeline.",
      },
      {
        q: "Describe two development opportunities in a named cold environment. [4 marks]",
        marks: 4,
        markScheme: "2 x 2 marks with named detail: oil (Prudhoe Bay, revenue, Permanent Fund); minerals (gold, Red Dog zinc mine); fishing (60% of US seafood); tourism (2 million visitors, glaciers, Denali).",
      },
      {
        q: "Explain how extreme temperatures create challenges for development. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: below −40°C dangerous for workers; machinery and vehicles freeze/fail; need for heated buildings increases costs; short working seasons.",
      },
      {
        q: "Explain how inaccessibility makes development in Alaska difficult. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: vast distances; mountains and few roads; many communities reached only by air or sea; ice roads only usable in winter; high transport costs for goods and workers.",
      },
      {
        q: "Explain why building on permafrost is a challenge. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: heat from buildings thaws permafrost; ground subsides and buildings crack; need to build on piles/stilts or gravel pads; utilities (water, sewage) must be insulated or above ground (utilidors).",
      },
      {
        q: "Describe how the Trans-Alaska Pipeline was designed to cope with the environment. [4 marks]",
        marks: 4,
        markScheme: "1 mark per feature: raised on supports for about half its length to stop warm oil thawing permafrost; heat pipes keep ground frozen; zigzag shape to allow movement in earthquakes/temperature change; gaps/raised sections for caribou migration; 1,287 km to ice-free Valdez.",
      },
      {
        q: "Describe the impacts of the Exxon Valdez oil spill. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: 41 million litres of oil spilled in Prince William Sound (1989); hundreds of thousands of seabirds killed; thousands of sea otters killed; damage to fishing industry; long-lasting pollution due to slow breakdown.",
      },
      {
        q: "Define the term \"wilderness area\". [1 mark]",
        marks: 1,
        markScheme: "1 mark: a natural area largely undisturbed by human activity, with few people or buildings.",
      },
      {
        q: "Explain two reasons why cold environments should be protected. [4 marks]",
        marks: 4,
        markScheme: "2 x 2 marks: scientific research (1) — ice cores show past climates (1); climate regulation (1) — permafrost stores huge amounts of carbon, ice reflects sunlight (1); unique wildlife (1); indigenous cultures (1).",
      },
      {
        q: "Explain why cold environments are fragile. [4 marks]",
        marks: 4,
        markScheme: "1 mark per explained point: slow plant growth so slow recovery; slow decomposition so pollution persists; simple food webs; permafrost thaw causes subsidence; sensitive to climate change.",
      },
      {
        q: "Explain how thawing permafrost could make climate change worse. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: permafrost stores large amounts of carbon in frozen peat; thawing allows decomposition; releases methane and CO₂; increases warming — positive feedback.",
      },
      {
        q: "Explain how technology can help balance development and conservation. [4 marks]",
        marks: 4,
        markScheme: "2 x 2 marks: raised pipelines (1) protect permafrost and allow caribou to pass (1); directional drilling from single pads (1) reduces land disturbed (1); ice roads (1) melt in summer leaving little trace (1).",
      },
      {
        q: "Explain the role of governments in protecting cold environments. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: create protected areas by law (e.g. ANWR); set environmental standards and regulations; can approve or refuse drilling leases; enforce clean-up after accidents.",
      },
      {
        q: "Describe the role of international agreements in protecting Antarctica. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: Antarctic Treaty 1959 reserves it for peace and science; no territorial claims enforced; Madrid Protocol 1991 bans mining; regulates tourism and waste.",
      },
      {
        q: "Explain how conservation groups help protect cold environments. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: campaigning and raising public awareness; lobbying governments and companies; monitoring damage; e.g. Greenpeace's \"Save the Arctic\" campaign helped persuade Shell to stop Arctic drilling in 2015.",
      },
      {
        q: "Compare the climate of polar and tundra environments. [4 marks]",
        marks: 4,
        markScheme: "1 mark per comparative point: polar colder (−50°C) than tundra (−30 to −40°C); tundra has short summer above 0°C, polar rarely above 0°C; both low precipitation but tundra slightly higher; polar covered by ice sheets, tundra by permafrost and vegetation.",
      },
      {
        q: "Suggest why Alaska Native peoples may be affected by development. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: disruption to subsistence hunting and fishing (caribou migration, whales); pollution of food sources; benefits from jobs and dividends; loss of traditional culture; land rights issues.",
      },
      {
        q: "Evaluate the strategies used to balance development and conservation in cold environments. [9 marks]",
        marks: 9,
        markScheme: "Level 3 (7–9): detailed evaluation of technology, governments, international agreements and conservation groups with examples and a supported judgement. Level 2 (4–6): some evaluation and examples. Level 1 (1–3): basic description.",
      },
      {
        q: "To what extent do the opportunities for development in a named cold environment outweigh the challenges? [9 marks]",
        marks: 9,
        markScheme: "Level 3 (7–9): balanced, detailed discussion of opportunities (oil, minerals, fishing, tourism) and challenges (temperature, inaccessibility, permafrost, environmental risk) using a named example with a clear judgement. Level 2: some balance. Level 1: basic list.",
      },
      {
        q: "Explain why the Arctic is becoming more accessible for development. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: climate change melting sea ice; new shipping routes (Northern Sea Route/North-West Passage) open in summer; easier access to oil, gas and minerals; longer ice-free seasons.",
      },
      {
        q: "Describe the characteristics of animals living in the tundra. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: few species; mostly migratory (caribou, birds) or hibernating (ground squirrel); thick fur, fat layers; camouflage that changes with seasons (Arctic fox, hare).",
      },
      {
        q: "Describe how the Arctic poppy is adapted to the tundra. [2 marks]",
        marks: 2,
        markScheme: "1 mark each: short life cycle — flowers quickly in brief summer; flowers turn to follow the sun (heliotropism) to absorb warmth; hairy stems trap heat.",
      },
      {
        q: "Explain one reason why tourism in cold environments can be damaging. [2 marks]",
        marks: 2,
        markScheme: "1 mark for reason, 1 for development: e.g. trampling (1) damages slow-growing vegetation that takes decades to recover (1); cruise ships (1) risk fuel spills/disturbing wildlife (1).",
      },
      {
        q: "Explain why the Antarctic Treaty has been successful. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: no permanent population or economy to pressure for development; strong international cooperation for over 60 years; mining banned; science prioritised.",
      },
      {
        q: "Suggest two ways in which climate change may affect wildlife in cold environments. [2 marks]",
        marks: 2,
        markScheme: "1 mark each: loss of sea ice reduces polar bear hunting; species from further south move north and compete; changes in timing of plant growth and migration; habitat loss.",
      },
      {
        q: "Describe the value of cold environments for scientific research. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: ice cores show past climate (800,000 years); early warning of climate change; research into extremophile species; astronomy/meteorite collection in Antarctica.",
      },
      {
        q: "What is the Arctic Council? [1 mark]",
        marks: 1,
        markScheme: "1 mark: an organisation of eight Arctic nations that cooperates on environmental protection and sustainable development in the Arctic.",
      },
      {
        q: "Describe the characteristics of Antarctica. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: ~14 million km²; ice sheet over 2 km thick; ~70% of world's fresh water; coldest, driest, windiest; no permanent population; wildlife on coasts.",
      },
      {
        q: "Explain how people use Antarctica. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: scientific research (ice cores, ozone); tourism (100,000+ visitors); fishing (krill, toothfish).",
      },
      {
        q: "Explain the threats to Antarctica. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: climate change (ice shelf collapse, sea ice loss); tourism impacts (spills, disturbance, invasive species); overfishing; possible future mining.",
      },
      {
        q: "Describe how the Antarctic Treaty protects Antarctica. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: 1959, 50+ countries; peace and science only; territorial claims frozen; Madrid Protocol 1991 bans mining; environmental rules.",
      },
      {
        q: "Evaluate the management of tourism in Antarctica. [6 marks]",
        marks: 6,
        markScheme: "Level marked: IAATO rules (ship size, 100 ashore, distance from wildlife) reduce impacts; but self-regulated; rising visitor numbers; risk of spills. Judgement.",
      },
      {
        q: "Compare sustainable management of the Arctic and Antarctica. [6 marks]",
        marks: 6,
        markScheme: "Level marked: Arctic — permanent population, national laws, development (Alaska oil, ANWR); Antarctica — international treaty, no population, mining ban; which is more effective and why.",
      },
    ],
  },
  '2.1': {
    name: "Urban Futures",
    questions: [
      {
        q: "What is urbanisation? [1 mark]",
        marks: 1,
        markScheme: "1 mark for: the increase in the proportion of a country's population living in urban areas (towns and cities).",
      },
      {
        q: "Describe the global pattern of urbanisation. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: fastest rates of urbanisation occurring in LIDCs and EDCs, especially in Africa and Asia; ACs have slower rates — already highly urbanised (e.g. UK ~83%); some African cities growing by 4–5% per year; global urban population exceeded rural for the first time in 2007/2008.",
      },
      {
        q: "Explain two push factors that cause people to move from rural to urban areas in LIDCs. [4 marks]",
        marks: 4,
        markScheme: "2 marks per factor: rural poverty — limited income from subsistence farming (1 mark), unable to afford basic needs/services (1 mark); lack of services — no schools/hospitals/electricity in rural areas (1 mark), move to cities for better access to education/healthcare (1 mark); environmental hazards — floods/droughts/crop failure in rural areas; land shortages.",
      },
      {
        q: "Explain two pull factors that attract people to urban areas in LIDCs and EDCs. [4 marks]",
        marks: 4,
        markScheme: "2 marks per factor: employment — more job opportunities in industry/services in cities (1 mark), higher wages than rural farming (1 mark); better services — access to schools, hospitals, clean water, electricity (1 mark), improves quality of life/life expectancy (1 mark).",
      },
      {
        q: "Distinguish between natural increase and in-migration as causes of urban population growth. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: natural increase — more births than deaths within the urban population (young migrants have children); 1 mark for: in-migration — people moving from rural areas/other countries into cities; both contribute to rapid urban growth in LIDCs and EDCs.",
      },
      {
        q: "Describe the characteristics of a squatter settlement (shanty town/favela). [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: built illegally/informally on land not owned by residents; built from scavenged/makeshift materials (corrugated iron, wood, cardboard, plastic); lack clean water supply and sanitation; no electricity or irregular connections; overcrowded; limited road access; insecure land tenure (can be demolished).",
      },
      {
        q: "Explain why squatter settlements develop on the outskirts of rapidly growing cities in LIDCs. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: rapid rural-urban migration creates housing demand cities cannot meet; newcomers cannot afford formal housing; build makeshift homes on available land (often steep hillsides, flood plains — land others don't want); governments lack resources to provide housing for all; informal settlement grows quickly as others join family/community members.",
      },
      {
        q: "Describe the social problems faced by residents of squatter settlements. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: lack of clean water — risk of waterborne diseases (cholera, typhoid); no sanitation — open sewers/disease; unemployment/informal economy — low income, no job security; crime and violence — limited policing; lack of access to schools/healthcare; overcrowding — mental health impacts; insecurity of tenure.",
      },
      {
        q: "Explain the environmental problems associated with rapid urbanisation in LIDCs. [4 marks]",
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
        q: "Describe two urban regeneration strategies used in UK cities. [4 marks]",
        marks: 4,
        markScheme: "2 marks per strategy. Accept: waterfront regeneration (e.g. Cardiff Bay, Liverpool docks) — derelict industrial waterfront redeveloped (1 mark), new housing, offices, leisure facilities attract investment and residents (1 mark); enterprise zones — tax incentives and simplified planning rules in deprived areas (1 mark) attract businesses and create jobs (1 mark).",
      },
      {
        q: "Using a named example, explain how an area of an AC city has been regenerated. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Detailed explanation of regeneration with specific named area, describes what was there before, what changed and impact, with data. Level 2 (3–4 marks): Named example described with some specific detail. Level 1 (1–2 marks): Generic regeneration. Accept Cardiff Bay: former coal export dock — derelict; 1987 Cardiff Bay Development Corporation; Senedd, Wales Millennium Centre built; about 5,000 new homes; tens of thousands of jobs claimed (estimates vary from ~17,000 to ~30,000); BUT critics say it cost around £2 billion of public and private money, existing residents displaced, not all benefited.",
      },
      {
        q: "Assess the success of urban regeneration in improving quality of life in deprived areas. [8 marks]",
        marks: 8,
        markScheme: "Level 3 (6–8 marks): Evaluates urban regeneration with specific named examples, considers different perspectives and stakeholders, reaches a supported judgement about overall success. Level 2 (3–5 marks): Describes regeneration with some evaluation. Level 1 (1–2 marks): Basic description. Accept: successes — new housing, jobs, investment, improved environment, better services; limitations — gentrification displaces original residents, benefits not equally shared, expensive, some areas still deprived; conclusion should assess \"success\" considering who benefited.",
      },
      {
        q: "Draw and label a diagram to show the land use zones of a typical LIDC/EDC city. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: CBD at centre labelled; inner industrial zone labelled; residential zones (varying quality) shown; squatter settlements/shanty towns on periphery labelled; newer planned suburbs shown.",
      },
      {
        q: "Explain why squatter settlements are often found on hazardous sites on the edges of LIDC cities. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: land on the urban fringe is often unoccupied and unwanted (government or private); hazardous sites (steep slopes, flood plains, near landfill) are avoided by wealthier people; migrants have no choice — cannot afford formal housing or safer land; proximity to city allows access to informal work; over time settlements become established and difficult to remove.",
      },
      {
        q: "Explain how urban sprawl can cause conflict between different groups. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: urban sprawl involves building on greenfield land (countryside/green belt) on edge of city; conflicts: farmers/landowners lose agricultural land; conservationists argue loss of wildlife habitats/natural beauty; local residents in receiving villages worry about loss of rural character/services being overwhelmed; developers want profit from housing demand; planners try to balance housing need vs environment.",
      },
      {
        q: "Suggest why some people argue that gentrification is not always a successful regeneration strategy. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: gentrification — wealthier newcomers buy/renovate property in deprived areas → rising house prices; original/long-term residents priced out of neighbourhood (displacement); community ties/social capital broken up; local businesses serving original community replaced by expensive cafes/boutiques; deprivation not tackled — it is just moved elsewhere.",
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
        q: "Explain why natural increase is often as important as in-migration in driving urban growth in LIDCs. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: migrants to cities are mostly young people of reproductive age; they have high birth rates; cities in LIDCs often have better access to healthcare than rural areas → lower death rates; natural increase can account for 40–60% of urban population growth; e.g. Lagos — birth rate remains high among urban poor.",
      },
      {
        q: "Assess the social, economic and environmental challenges of rapid urbanisation in LIDC cities. [8 marks]",
        marks: 8,
        markScheme: "Level 3 (6–8 marks): Detailed assessment of all three challenge types with specific evidence from named city/cities, considers which challenges are most significant, reaches a supported judgement. Level 2 (3–5 marks): Covers at least two types of challenge with some development. Level 1 (1–2 marks): Basic challenges listed. Accept: social — housing shortages, lack of clean water/sanitation, crime, poor health; economic — informal economy, unemployment, infrastructure deficit; environmental — pollution, flooding, waste management; conclusion should judge overall most significant or how interlinked they are.",
      },
      {
        q: "Explain how improvements to transport infrastructure can support urban regeneration. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: better transport links (tram, metro, bus rapid transit) reduce congestion; make deprived areas more accessible to employers; attract businesses and investment; reduce commuting times, improving quality of life; link peripheral deprived areas to city centre job opportunities (e.g. new metro lines in UK cities).",
      },
      {
        q: "Suggest how the growth of e-commerce and online retail has changed urban land use in AC cities. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: decline of high street shops as people buy online; vacant retail units in town centres/CBDs; rise of out-of-town distribution warehouses; former shops converted to housing, offices, cafes or arts spaces; town centre regeneration challenges increase; need for new planning approaches (e.g. mixed-use developments).",
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
        q: "Explain two opportunities that rapid urbanisation can create for people living in LIDC/EDC cities. [4 marks]",
        marks: 4,
        markScheme: "1 mark per opportunity + 1 mark development. Any two from: jobs in the formal and informal economy that usually pay more than rural farming; better access to schools, colleges and hospitals; access to piped water, electricity and sanitation (in some areas); a wider range of services, shops and entertainment; chances to start small businesses and send money back to rural families (remittances).",
      },
      {
        q: "Explain why Lagos is important regionally, nationally and internationally. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: Nigeria's main port and commercial/financial centre; 25–30% of GDP; Nollywood film industry; airport hub for West Africa; tech start-ups (Yabacon Valley).",
      },
      {
        q: "Describe the social opportunities created by urban growth in Lagos. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: better access to schools, universities and hospitals; access to water and electricity; cultural and entertainment opportunities.",
      },
      {
        q: "Describe the economic opportunities created by urban growth in Lagos. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: jobs in manufacturing, services, port and finance; tech sector; informal economy provides work for migrants.",
      },
      {
        q: "Evaluate an urban planning scheme designed to improve the quality of life for the urban poor in an LIDC or EDC city. [6 marks]",
        marks: 6,
        markScheme: "Level marked, e.g. Makoko Floating School / Lagos slum upgrading: drains cleared, roads paved, lighting and waste collection; cheap and keeps communities together; small scale, collapse of first floating school, residents fear eviction. Judgement required.",
      },
      {
        q: "Describe the characteristics of the Central Business District (CBD). [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three of: high land values/expensive rents; tall buildings/high-rise; high pedestrian/traffic density; concentration of retail shops/offices/services; limited residential use; highly accessible by public transport; land use changes at night (offices empty).",
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
        q: "Give two advantages of building new housing on brownfield sites. [2 marks]",
        marks: 2,
        markScheme: "1 mark each for any two of: infrastructure already in place; prevents urban sprawl onto greenfield land; brings derelict land back into use; more sustainable use of land; often better connected by public transport; reduces pressure on greenbelt.",
      },
      {
        q: "Give two disadvantages of building on brownfield sites. [2 marks]",
        marks: 2,
        markScheme: "1 mark each for: cost of decontaminating land; demolition costs of existing structures; planning complications; irregular shapes/sizes of sites; may require clearing existing communities; lower desirability compared to greenfield.",
      },
      {
        q: "Explain why there is a housing shortage in the UK. [4 marks]",
        marks: 4,
        markScheme: "Up to 4 marks for well-explained points. Causes: population growth — more people need housing; net migration — increasing demand; smaller household sizes (more single-person households); insufficient new house building since the 1980s; planning restrictions on greenfield/greenbelt; high land costs discouraging developers. 1 mark per cause, 1 mark for development.",
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
        q: "Describe what happened to the London Docklands before regeneration. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three of: docks closed from the 1960s–80s; containerisation made traditional docks obsolete; high unemployment — 30,000+ jobs lost; derelict warehouses; population declined; housing deteriorated; infrastructure neglected; area became associated with poverty.",
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
        q: "Describe the Temple Quarter regeneration project in Bristol. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four of: located near Bristol Temple Meads station; former derelict industrial/railway land; plans for new office space, homes, university campus (UWE/UoB); focus on digital/tech industries; improved walking/cycling links to station; mixed use development; Enterprise Zone status; aim to create 22,000 jobs.",
      },
      {
        q: "Explain how Bristol has developed its cycling infrastructure to improve sustainability. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: segregated cycle lanes on key routes; cycle-friendly road design; Bristol and Bath Railway Path (off-road route); cycle hire scheme; secure cycle parking at stations/offices; investment in cycling as part of transport strategy; Bristol named UK Cycling City; linked to reducing car use and carbon emissions.",
      },
      {
        q: "State one cause and one effect of suburbanisation in UK cities. [2 marks]",
        marks: 2,
        markScheme: "1 mark for cause: improved transport links; car ownership; desire for more space/greenery; cheaper land on the edge; counter-urbanisation trends. 1 mark for effect: urban sprawl; loss of greenfield land; increased car journeys; decline of inner city; pressure on rural-urban fringe services.",
      },
      {
        q: "Describe two negative impacts of urban growth on the environment. [4 marks]",
        marks: 4,
        markScheme: "1 mark for each impact identified, 1 mark for development. Loss of greenfield/agricultural land — reduces biodiversity and food production. Increased surface runoff from impermeable surfaces — flooding risk increases. Air pollution from vehicles/industry — poor air quality, harm to ecosystems. Light pollution — disrupts wildlife habitats. Urban heat island effect — increased energy use for cooling.",
      },
      {
        q: "Suggest how urban planners can make new housing developments more sustainable. [4 marks]",
        marks: 4,
        markScheme: "1 mark per valid suggestion up to 4: use brownfield sites; build energy-efficient homes (insulation, solar); include green spaces/parks; design for walking/cycling not cars; mixed-use zoning to reduce travel; include affordable housing; sustainable drainage systems; community facilities included; connect to public transport.",
      },
      {
        q: "Assess whether building on greenfield land is ever justified to solve the UK housing shortage. [8 marks]",
        marks: 8,
        markScheme: "Level 1 (1–2): simple statements for/against. Level 2 (3–4): explains arguments on one side in more depth. Level 3 (5–6): balanced argument with some evidence; limited conclusion. Level 4 (7–8): evaluates arguments on both sides with evidence, reaches a clear justified conclusion. For: scale of housing shortage; brownfield insufficient; economic growth needs housing; not all greenfield is high-value. Against: biodiversity loss; greenbelt protection; urban sprawl; infrastructure costs; brownfield first policy. Best answers note that context matters — location, quality of land, transport links.",
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
    ],
  },
  '2.2': {
    name: "Dynamic Development",
    questions: [
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
        markScheme: "1 mark each for: world map or recognisable outline; Brandt Line drawn roughly correctly (separating richer North from poorer South, curving south to include Australia/New Zealand in the North); Global North labelled as more developed/ACs; Global South labelled as less developed/LIDCs and EDCs; at least one named example country in each category.",
      },
      {
        q: "Explain one limitation of the Brandt Line as a way of classifying development. [2 marks]",
        marks: 2,
        markScheme: "1 mark for limitation: it is a crude/simplistic division; ignores variation within the Global South; many EDCs (e.g. China, Brazil) are in the Global South but are rapidly developing; Australia and New Zealand are in the geographical south but classed as Global North. 1 mark for development of point.",
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
        markScheme: "1 mark per developed point: LIDCs tend to export raw materials at low prices and import manufactured goods at higher prices — unfavourable terms of trade; price of commodities fluctuates, making income unreliable; tariffs and subsidies in ACs make it hard for LIDC producers to compete; trade agreements often favour ACs; profits from trade often returned to AC shareholders.",
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
        q: "Explain how Foreign Direct Investment (FDI) can promote development in LIDCs and EDCs. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: creates jobs for local population; transfers technology and skills; generates tax revenue for government; builds infrastructure (roads, ports); increases export earnings; stimulates secondary economic activity/multiplier effect.",
      },
      {
        q: "Give two disadvantages of Foreign Direct Investment for developing countries. [2 marks]",
        marks: 2,
        markScheme: "1 mark each for any two: profits often repatriated to AC shareholders; low wages/poor working conditions; environmental damage; exploits cheap labour; dependency on TNCs; race to the bottom on regulations.",
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
        q: "Explain how debt can trap LIDCs in a cycle of poverty. [4 marks]",
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
        markScheme: "1 mark for: countries exist at different stages of development rather than being simply 'developed' or 'developing'. 1 mark for: identified categories — LIDCs, EDCs, ACs (or mention BRICS, MINT etc.) on a continuum.",
      },
      {
        q: "State two development indicators that could be used to classify a country as an LIDC. [2 marks]",
        marks: 2,
        markScheme: "1 mark each for any two: low GDP/GNI per capita (under ~$1,135 World Bank threshold, 2025); low HDI score; high infant mortality rate; low life expectancy; low literacy rate; high birth rate; high % of labour force in agriculture; limited access to clean water/sanitation.",
      },
      {
        q: "Explain the difference between infant mortality rate and life expectancy as development indicators. [4 marks]",
        marks: 4,
        markScheme: "1 mark for IMR definition: number of deaths of children under 1 per 1,000 live births. 1 mark for life expectancy definition: average age a person born today can expect to live to. 1 mark for how each indicates development: high IMR = poor healthcare/nutrition/sanitation; low life expectancy = poor healthcare, disease, poverty. 1 mark for comparison: IMR is a more sensitive indicator of early childhood conditions; life expectancy averages all deaths.",
      },
      {
        q: "To what extent is Fairtrade an effective solution to reducing inequality between ACs and LIDCs? [8 marks]",
        marks: 8,
        markScheme: "Level 1 (1–2): simple points. Level 2 (3–4): some explanation with limited evaluation. Level 3 (5–6): explains effectiveness and limitations with evidence. Level 4 (7–8): evaluates with evidence, compares Fairtrade to other strategies, reaches a clear conclusion. Effective: guaranteed minimum price, community investment, stable livelihoods. Limited: small scale, does not address structural trade rules, producer to benefit varies, consumer awareness/cost premium. Comparison: structural solutions (debt relief, trade reform) may be more effective at scale.",
      },
      {
        q: "Suggest why natural disasters can have a greater impact on LIDCs than on ACs. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: LIDCs have weaker building standards — more deaths from building collapse; limited emergency services/healthcare; less money for early warning systems; slower reconstruction; greater dependence on agriculture — food insecurity after; debt means cannot afford rebuilding; limited insurance. ACs have resources to prepare and recover quickly.",
      },
      {
        q: "Describe the differences in birth rate and death rate between LIDCs and ACs. [4 marks]",
        marks: 4,
        markScheme: "2 marks for LIDCs: high birth rates (often 30–40+ per 1,000); higher death rates (though falling); high natural increase rate; high infant mortality. 2 marks for ACs: low birth rates (10–15 per 1,000); low death rates; low or negative natural increase; low infant mortality.",
      },
      {
        q: "Explain how access to clean water affects development in LIDCs. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: without clean water, waterborne diseases (cholera, typhoid) cause illness and death; children miss school to collect water — reduces educational attainment; women spend hours collecting water — cannot work; agricultural productivity limited; economic activity disrupted; healthcare costs increased. Access to clean water reduces mortality, improves productivity.",
      },
      {
        q: "Explain how the percentage of the labour force employed in agriculture can indicate a country's level of development. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for up to three: LIDCs have higher % in agriculture — subsistence farming, low productivity, low wages; ACs have low % in agriculture — mechanised, high-tech, fewer workers needed; as countries develop, workers move to industry and services (structural transformation); high % in agriculture indicates low industrialisation; limits national income and productivity.",
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
        q: "To what extent have Transnational Corporations (TNCs) helped the development of EDCs? [8 marks]",
        marks: 8,
        markScheme: "Level 1 (1–2): simple statements. Level 2 (3–4): lists benefits and costs with limited evaluation. Level 3 (5–6): explains both sides with named examples. Level 4 (7–8): balanced evaluation with clear judgement. Benefits: FDI/capital investment; creation of jobs (e.g. Foxconn in China, Nike in Vietnam); technology/skills transfer; export earnings; multiplier effect; infrastructure improvements. Drawbacks: profits repatriated to AC HQ; low wages and poor working conditions; environmental damage; cultural erosion; tax avoidance. Conclusion should assess extent — significant role but needs to be combined with strong local governance and worker protections.",
      },
      {
        q: "Describe the Demographic Transition Model. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: shows change in birth rate, death rate and total population over time; stage 1 high BR and DR; stage 2 DR falls; stage 3 BR falls; stage 4 both low; stage 5 BR below DR.",
      },
      {
        q: "Explain how the Demographic Transition Model is linked to a country's level of development. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: LIDCs in stages 2–3 (high BR, falling DR); EDCs in stage 3; ACs in stages 4–5; development brings healthcare (DR falls), then education/contraception (BR falls); limitation — based on Europe.",
      },
      {
        q: "Explain the consequences of uneven development. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: disparities in wealth; disparities in health (life expectancy, infant mortality); international migration — economic migrants and refugees; remittances.",
      },
      {
        q: "Distinguish between ACs, EDCs and LIDCs. [3 marks]",
        marks: 3,
        markScheme: "1 mark each: AC — high income, high HDI (UK); EDC — rapid growth and industrialisation (China, Brazil); LIDC — low income, low HDI, farming-based (Ethiopia).",
      },
      {
        q: "Describe the location of a named LIDC. [2 marks]",
        marks: 2,
        markScheme: "1 mark per point, e.g. Ethiopia: Horn of Africa; landlocked; bordered by Eritrea, Djibouti, Somalia, Kenya, South Sudan, Sudan.",
      },
      {
        q: "Describe the level of development of a named LIDC. [3 marks]",
        marks: 3,
        markScheme: "1 mark per indicator, e.g. Ethiopia: GNI ~$1,000; HDI ~0.49; life expectancy ~65; 60–65% in farming.",
      },
      {
        q: "Explain the obstacles to development in a named LIDC. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point, e.g. Ethiopia: drought and rain-fed farming; landlocked; conflict (Tigray); debt; rapid population growth.",
      },
      {
        q: "Explain how a named LIDC is linked to the wider world. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: trade (coffee, flowers, clothing exports); aid (USA, World Bank, UK); TNCs (Hawassa park); Chinese investment (railway); African Union HQ.",
      },
      {
        q: "Evaluate a top-down development project in a named LIDC. [6 marks]",
        marks: 6,
        markScheme: "Level marked, e.g. GERD: over 5,000 MW; could double electricity and allow exports; self-funded by bonds; tension with Egypt/Sudan; displacement/environment. Judgement.",
      },
      {
        q: "Describe a bottom-up development project in a named LIDC. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point, e.g. PSNP: ~8 million people; cash/food for work; terracing, tree planting, water harvesting; reduces hunger and land degradation.",
      },
      {
        q: "Explain how aid can help development in an LIDC. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: emergency food aid during droughts; health (vaccines, nets); education and water projects; infrastructure; but dependency and corruption risks.",
      },
    ],
  },
  '2.3': {
    name: "UK in the 21st Century",
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
      {
        q: "Describe how the UK population has changed since 2001. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: grown from ~59m to ~69m; growth from natural increase and mainly net migration; ageing — over 18% aged 65+.",
      },
      {
        q: "Explain why the UK population is ageing. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: falling fertility (~1.4–1.5); longer life expectancy; better health care; baby boomers reaching retirement.",
      },
      {
        q: "Explain the challenges and opportunities of an ageing population. [6 marks]",
        marks: 6,
        markScheme: "Level marked: challenges — NHS, care, pensions, dependency; opportunities — volunteering, childcare, grey pound, older workers. Balanced answer.",
      },
      {
        q: "Explain how the media influence the UK's place in the world. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: BBC World Service/news; UK film and TV; music; Premier League; spread of culture and soft power.",
      },
      {
        q: "Describe the UK's political role in the world. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: UN Security Council permanent member; G7/G20; NATO; Commonwealth; COP26 host.",
      },
      {
        q: "Explain how globalisation has influenced UK culture. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: migration brings food, music, religion; American and global media; international brands; social media.",
      },
    ],
  },
  '2.4': {
    name: "Resource Reliance",
    questions: [
      {
        q: "Define the term \"food insecurity\". [1 mark]",
        marks: 1,
        markScheme: "1 mark: when people lack reliable access to enough affordable, nutritious food.",
      },
      {
        q: "Describe the global distribution of areas of food surplus and deficit. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: surplus — North America, Europe, Australia, Argentina/Brazil; deficit — sub-Saharan Africa, parts of South Asia, Yemen, Afghanistan, Haiti; link to wealth/climate.",
      },
      {
        q: "Explain why some areas have a food surplus. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: fertile soils; suitable climate and reliable rainfall; mechanised farming and technology; wealth to invest and import.",
      },
      {
        q: "Explain two reasons for increasing global food consumption. [4 marks]",
        marks: 4,
        markScheme: "2 x 2 marks: population growth (1) — 8 billion in 2022, ~10 billion by 2050 (1); economic development (1) — rising incomes increase meat and dairy consumption (1); biofuels (1); changing diets (1).",
      },
      {
        q: "Explain how climate affects food supply. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: crops need suitable temperature/rainfall; droughts destroy harvests (e.g. Horn of Africa 2020–23); floods damage crops; climate change makes weather less predictable.",
      },
      {
        q: "Explain how technology affects food supply. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: irrigation, fertilisers, pesticides, machinery and high-yield seeds raise yields; storage reduces losses; poorer farmers may not afford technology.",
      },
      {
        q: "Explain how pests and disease affect food supply. [2 marks]",
        marks: 2,
        markScheme: "1 mark: pests (locusts, East Africa 2019–20) and diseases (cassava mosaic virus) destroy crops; 1 mark: animal diseases kill livestock, reducing food and income.",
      },
      {
        q: "Explain how water stress affects food supply. [2 marks]",
        marks: 2,
        markScheme: "1 mark: agriculture uses ~70% of freshwater; 1 mark: shortages limit irrigation and reduce yields.",
      },
      {
        q: "Explain how conflict affects food supply. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: farms destroyed; farmers flee; transport and markets disrupted; aid blocked; e.g. Sudan, Yemen, Ukraine grain exports 2022.",
      },
      {
        q: "Explain how poverty affects food supply. [2 marks]",
        marks: 2,
        markScheme: "1 mark: poor farmers cannot afford seeds/fertiliser/equipment; 1 mark: poor families cannot afford to buy food even when available.",
      },
      {
        q: "Define the term \"famine\". [1 mark]",
        marks: 1,
        markScheme: "1 mark: a widespread, severe shortage of food leading to starvation and death.",
      },
      {
        q: "Describe the impacts of food insecurity. [4 marks]",
        marks: 4,
        markScheme: "1 mark per impact: famine; undernutrition/stunting; soil erosion from overcultivation/overgrazing; rising prices; social unrest.",
      },
      {
        q: "Explain how food insecurity can lead to social unrest. [2 marks]",
        marks: 2,
        markScheme: "1 mark: rising prices and shortages; 1 mark: lead to protests, riots and political instability, e.g. 2008 food riots, Arab Spring 2010–11.",
      },
      {
        q: "Explain how food insecurity can cause soil erosion. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: desperate farmers overcultivate land without fallow; overgraze animals; vegetation removed; bare soil eroded by wind and rain; leads to desertification.",
      },
      {
        q: "Describe the advantages and disadvantages of irrigation. [4 marks]",
        marks: 4,
        markScheme: "2 advantages: farming in dry areas; more harvests per year; higher yields. 2 disadvantages: salinisation; depletes rivers/aquifers; expensive; waterlogging.",
      },
      {
        q: "What is hydroponics? [2 marks]",
        marks: 2,
        markScheme: "1 mark: growing plants without soil; 1 mark: roots placed in nutrient-rich water.",
      },
      {
        q: "Explain the advantages of hydroponics and aeroponics. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: up to 90% less water; no soil pests or weeds; can be done indoors/in cities; year-round production; high yields.",
      },
      {
        q: "Explain the disadvantages of hydroponics and aeroponics. [2 marks]",
        marks: 2,
        markScheme: "1 mark per point: expensive to set up; high energy use for lighting/heating/pumps; requires technical expertise.",
      },
      {
        q: "Describe the Green Revolution. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: from 1960s; high-yield varieties of rice and wheat; fertilisers, pesticides and irrigation; greatly increased yields in Asia (e.g. India).",
      },
      {
        q: "Evaluate the Green Revolution as a strategy for increasing food supply. [6 marks]",
        marks: 6,
        markScheme: "Level marked: benefits — huge yield increases, reduced famine in Asia; problems — expensive inputs favoured richer farmers, debt, salinisation, pollution, loss of crop diversity. Judgement required.",
      },
      {
        q: "What is the \"new Green Revolution\"? [2 marks]",
        marks: 2,
        markScheme: "1 mark: using biotechnology and sustainable methods to increase yields; 1 mark: especially in Africa, e.g. drought-resistant varieties, better soil management.",
      },
      {
        q: "Explain the arguments for and against GM crops. [4 marks]",
        marks: 4,
        markScheme: "2 for: higher yields, pest/drought resistance, added nutrients (Golden Rice). 2 against: biodiversity concerns, cross-contamination, dependence on seed companies, consumer opposition.",
      },
      {
        q: "Define the term \"appropriate technology\". [1 mark]",
        marks: 1,
        markScheme: "1 mark: technology suited to the local environment, skills and economic circumstances of the people using it.",
      },
      {
        q: "Describe a named large-scale agricultural development. [4 marks]",
        marks: 4,
        markScheme: "Named example, e.g. Thanet Earth: Kent, opened 2008; ~90 ha of glasshouses; hydroponic tomatoes, cucumbers, peppers; rainwater collected; own combined heat and power plants.",
      },
      {
        q: "Explain the advantages of a named large-scale agricultural development. [4 marks]",
        marks: 4,
        markScheme: "Named example, e.g. Thanet Earth: year-round production; reduces food miles and imports; 500+ jobs; efficient water use; surplus electricity to grid.",
      },
      {
        q: "Explain the disadvantages of a named large-scale agricultural development. [3 marks]",
        marks: 3,
        markScheme: "Named example, e.g. Thanet Earth: built on greenfield farmland; gas-fired plants emit CO₂; light pollution; supplies supermarkets so small farmers struggle to compete.",
      },
      {
        q: "Describe how organic farming contributes to sustainable food supply. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: no artificial chemicals; protects soil and wildlife; crop rotation maintains fertility; but lower yields and higher prices.",
      },
      {
        q: "What is permaculture? [2 marks]",
        marks: 2,
        markScheme: "1 mark: a system of farming that copies natural ecosystems; 1 mark: e.g. mixing trees, crops and animals so the system maintains its own fertility.",
      },
      {
        q: "Describe urban farming initiatives. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: growing food in cities on rooftops, allotments, vacant land; e.g. Incredible Edible Todmorden, Havana community gardens; reduce food miles; community benefits.",
      },
      {
        q: "Explain how sustainable fish and meat consumption can help food security. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: avoid overfished species (MSC label); maintains fish stocks for future; free-range/lower meat diets reduce land and grain use.",
      },
      {
        q: "Explain why reducing food waste is important for sustainable food supply. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: about a third of food wasted; better storage in LIDCs reduces losses; less waste in ACs; campaigns like Love Food Hate Waste.",
      },
      {
        q: "Explain the benefits of a named local scheme to increase sustainable food supply. [4 marks]",
        marks: 4,
        markScheme: "Named scheme: water available all year; higher crop yields; vegetables and livestock improve diet and income; time saved collecting water allows school attendance.",
      },
      {
        q: "Explain why a named local food scheme is sustainable. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: low cost; local materials and labour; community maintained; no reliance on outside fuel/chemicals; long-lasting.",
      },
      {
        q: "To what extent can new technology solve food insecurity? [9 marks]",
        marks: 9,
        markScheme: "Level 3 (7–9): detailed assessment of technology (Green Revolution, hydroponics, GM, appropriate technology) vs other causes (poverty, conflict, distribution, waste) with examples and judgement. Level 2: some assessment. Level 1: basic.",
      },
      {
        q: "Evaluate the strategies used to increase food supply. [9 marks]",
        marks: 9,
        markScheme: "Level 3: evaluation of irrigation, hydroponics/aeroponics, Green Revolution, GM, appropriate technology, large-scale development, with examples and judgement. Level 2: some evaluation. Level 1: basic.",
      },
      {
        q: "Explain why eating less meat could improve global food security. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: livestock need large areas of land and grain; meat production uses lots of water; land could grow crops for people directly; reduces emissions/climate impacts.",
      },
      {
        q: "Suggest why food insecurity may increase in future. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: population growth; climate change (droughts, floods); water shortages; land degradation; conflict; rising demand for meat and biofuels.",
      },
      {
        q: "Explain how seasonal food consumption contributes to sustainability. [2 marks]",
        marks: 2,
        markScheme: "1 mark: eating food grown locally in season; 1 mark: reduces energy used for transport and heating greenhouses.",
      },
      {
        q: "Explain why water is important for wellbeing. [2 marks]",
        marks: 2,
        markScheme: "1 mark per point: needed for drinking/health; sanitation prevents disease; growing food; industry and energy.",
      },
      {
        q: "Explain why energy is important for development. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: powers industry and jobs; electricity for lighting allows study after dark; refrigeration for food/medicines; transport; heating and cooking.",
      },
      {
        q: "Describe the global inequality in the supply and consumption of food. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: enough food produced overall but unequal distribution; ~700 million undernourished, mainly sub-Saharan Africa and South Asia; ACs >3,400 calories/day, some LIDCs <2,200; a third of food wasted.",
      },
      {
        q: "Suggest two reasons for global inequalities in resource supply. [4 marks]",
        marks: 4,
        markScheme: "2 x 2 marks: wealth (1) — richer countries can afford to buy/import resources (1); climate/physical geography (1) — rainfall, fertile soil, fossil fuel reserves vary (1); conflict (1) disrupts supply (1); technology (1).",
      },
      {
        q: "Describe how the demand for food in the UK has changed. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: more exotic foods; seasonal food all year; more imports (~40–45%); growing demand for organic and locally sourced food.",
      },
      {
        q: "Explain why the UK imports so much food. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: demand for exotic/out-of-season foods; climate limits what can be grown; cheaper to produce abroad; supermarket competition and global supply chains.",
      },
      {
        q: "Define the term \"carbon footprint\". [1 mark]",
        marks: 1,
        markScheme: "1 mark: the total amount of greenhouse gases produced by an activity, product or person.",
      },
      {
        q: "Explain why food miles are not always a reliable measure of environmental impact. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: production methods matter too; e.g. UK heated greenhouses may emit more than Spanish sun-grown produce trucked in; transport mode matters (air vs sea); food miles ignore water and land use.",
      },
      {
        q: "Explain two ways in which UK consumers can reduce the carbon footprint of their food. [4 marks]",
        marks: 4,
        markScheme: "2 x 2 marks: buy local/seasonal (1) to reduce transport and heating (1); eat less meat (1) because livestock produce methane and need land (1); reduce food waste (1); grow own food (1).",
      },
      {
        q: "Describe the trend towards local sourcing of food in the UK. [2 marks]",
        marks: 2,
        markScheme: "1 mark per point: farmers' markets; farm shops; veg box schemes; allotments/grow your own; supermarkets labelling local produce.",
      },
      {
        q: "What is agribusiness? [2 marks]",
        marks: 2,
        markScheme: "1 mark: large-scale intensive commercial farming; 1 mark: using machinery, chemicals and technology to maximise output and profit, often under contract to supermarkets.",
      },
      {
        q: "Describe the environmental impacts of agribusiness. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: loss of hedgerows and habitats; fertiliser/pesticide run-off pollutes rivers; soil degradation/erosion; monoculture reduces biodiversity.",
      },
      {
        q: "Explain why organic food has become more popular in the UK. [2 marks]",
        marks: 2,
        markScheme: "1 mark per point: concerns about chemicals and health; environmental awareness; animal welfare; rising incomes allow paying more.",
      },
      {
        q: "Evaluate the sustainability of the UK's food supply. [9 marks]",
        marks: 9,
        markScheme: "Level 3 (7–9): detailed evaluation — imports, food miles, carbon footprints, agribusiness impacts vs local sourcing, organic, seasonal eating, waste reduction; clear judgement. Level 2 (4–6): some evaluation. Level 1 (1–3): basic points.",
      },
      {
        q: "What is meant by resource security? [1 mark]",
        marks: 1,
        markScheme: "1 mark: having reliable access to enough affordable resources (food, water, energy) to meet needs.",
      },
      {
        q: "Explain why food, water and energy are interlinked. [3 marks]",
        marks: 3,
        markScheme: "1 mark per link: food production needs water (70% of freshwater) and energy (machinery, fertiliser); energy production needs water (cooling, HEP); water treatment and pumping needs energy; biofuels use food crops.",
      },
      {
        q: "Describe food security in a named country. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point, e.g. Tanzania: two-thirds depend on farming; maize main crop; ~a third of under-fives stunted; national maize surpluses in some years.",
      },
      {
        q: "Explain the causes of food insecurity in a named country. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: unreliable rainfall/drought; poverty; poor infrastructure and storage; population growth; soil degradation.",
      },
      {
        q: "Describe a large-scale approach to food security in a named country. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point, e.g. SAGCOT: southern Tanzania; government, investors and TNCs; commercial farming, irrigation, processing.",
      },
      {
        q: "Describe a small-scale approach to food security in a named country. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point, e.g. hermetic storage bags/silos cut losses; conservation agriculture protects soil; mobile phone market information.",
      },
      {
        q: "Evaluate a large-scale approach to food security. [6 marks]",
        marks: 6,
        markScheme: "Level marked: benefits — output, jobs, investment; problems — land grabs, benefits to companies, environmental impacts. Judgement.",
      },
      {
        q: "Explain why reducing post-harvest losses improves food security. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: up to 30–40% of some harvests lost; better storage keeps more food; farmers can sell when prices are higher; more food available year-round.",
      },
    ],
  },
  '3.1': {
    name: "Geographical Exploration and Fieldwork",
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
        q: "Explain why the cheapest option is not always the best. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: may have higher environmental costs; social costs to communities; long-term costs (e.g. clean-up, climate); may not be sustainable.",
      },
      {
        q: "Justify a choice between protecting a forest and allowing sustainable logging. [8 marks]",
        marks: 8,
        markScheme: "Level marked: clear choice; evidence; SEE impacts; stakeholders; compare alternatives; weaknesses and mitigation; sustainability; conclusion.",
      },
      {
        q: "Explain one advantage of using a stakeholder conflict matrix. [2 marks]",
        marks: 2,
        markScheme: "1 mark: shows agreement/disagreement between groups; 1 mark: helps predict support/opposition and find compromise.",
      },
      {
        q: "Explain how you could use your own knowledge in the decision answer. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: link to case studies (Amazon, Alberta oil sands); theories (Malthus/Boserup); concepts (ecosystem services, sustainability).",
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
        q: "Explain why it is important to consider who benefits and who loses from a decision. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: identifies winners and losers; equity and fairness; helps predict conflict; supports sustainable choices.",
      },
      {
        q: "Discuss the view that economic benefits should outweigh environmental costs in developing countries. [8 marks]",
        marks: 8,
        markScheme: "Level marked: need for development, jobs, poverty reduction vs long-term environmental and social costs, sustainability; examples; supported judgement.",
      },
      {
        q: "Describe the structure of OCR B Paper 3. [2 marks]",
        marks: 2,
        markScheme: "1 mark: 1h30, 60 marks; 1 mark: synoptic, based on a resource booklet about a country given in the exam, ending with a decision question.",
      },
      {
        q: "Explain what is meant by synoptic thinking in geography. [2 marks]",
        marks: 2,
        markScheme: "1 mark: linking ideas from different topics; 1 mark: e.g. connecting a country's development to its hazards, climate and resources.",
      },
      {
        q: "Explain how fieldwork is assessed in OCR B. [2 marks]",
        marks: 2,
        markScheme: "1 mark: physical fieldwork questions in Paper 1; 1 mark: human fieldwork questions in Paper 2, including unfamiliar contexts.",
      },
    ],
  },
};

if (typeof window !== 'undefined') window.GEOGRAPHY_OCR_GCSE_PRACTICE = GEOGRAPHY_OCR_GCSE_PRACTICE;
