// AQA GCSE Geography (8035) — Practice/Exam-Style Questions
// 17 topics × 40+ written questions with mark schemes

const GEOGRAPHY_AQA_GCSE_PRACTICE = {
  '1.1': {
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
        markScheme: "Level 1 (1–2): simple statement that poorer countries suffer more. Level 2 (3–4): explains some factors with development. Level 3 (5–6): detailed explanation covering multiple factors: building quality — poor standards mean more collapse; emergency services — insufficient response capacity; early warning systems — LICs may lack these; community preparedness; access to healthcare; ability to rebuild. Links to specific examples (Haiti 2010 vs Japan 2011) for full marks.",
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
        markScheme: "1 mark per developed point: cross-bracing — steel framework absorbs shaking; rubber base isolators — building moves independently of ground; counterweights at top (e.g. Taipei 101 damper); open ground floors — absorb collapse; reinforced concrete; automatic gas shut-offs; low-rise buildings safer in LICs; retrofitting old buildings.",
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
    ],
  },
  '1.2': {
    name: "Weather Hazards",
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
        q: "Describe the immediate responses to a named tropical storm. [4 marks]",
        marks: 4,
        markScheme: "Named example, e.g. Haiyan: 800,000 evacuated before landfall; international aid — UK sent HMS Daring and aircraft, USA sent USS George Washington; field hospitals; food, water and hygiene kits from NGOs; curfew to prevent looting.",
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
        q: "Suggest why the death toll from tropical storms is often higher in LICs than HICs. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: poorer quality housing collapses; less effective warning/communication systems; fewer resources for evacuation and shelters; slower emergency response and aid distribution; more people live in exposed coastal areas.",
      },
      {
        q: "Evaluate the effectiveness of the responses to a named tropical storm. [9 marks]",
        marks: 9,
        markScheme: "Level 3 (7–9): detailed evaluation of immediate and long-term responses, strengths and weaknesses, clear supported judgement, named example. Level 2 (4–6): some evaluation, some detail. Level 1 (1–3): basic description. Credit: Haiyan evacuation of 800,000; slow aid to remote areas; poor understanding of storm surge; Build Back Better; controversy of no-build zone.",
      },
      {
        q: "Describe the types of weather hazard experienced in the UK. [4 marks]",
        marks: 4,
        markScheme: "1 mark per hazard with cause/example: storms and strong winds (Atlantic depressions, Storm Eunice 2022); flooding (Somerset 2014, Storm Desmond 2015); heatwaves and drought (2022); snow and cold (Beast from the East 2018); thunderstorms/hail (Boscastle 2004).",
      },
      {
        q: "Why does the UK experience a range of weather hazards? [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: mid-latitude location; at boundary between warm tropical and cold polar air masses; downwind of the Atlantic so depressions arrive frequently; blocking anticyclones bring prolonged heat/cold.",
      },
      {
        q: "Describe the causes of a named recent extreme weather event in the UK. [4 marks]",
        marks: 4,
        markScheme: "Named event, e.g. Somerset Levels 2013–14: series of deep Atlantic depressions; wettest winter on record (over 350 mm Jan–Feb); flat, low-lying land; clay soils; high tides on River Parrett prevented drainage; rivers not dredged.",
      },
      {
        q: "Describe the social impacts of a named extreme weather event in the UK. [3 marks]",
        marks: 3,
        markScheme: "Named event, e.g. Somerset Levels: over 600 homes flooded; villages such as Muchelney and Moorland cut off for weeks; residents evacuated; stress and disruption to schools and work.",
      },
      {
        q: "Describe the economic impacts of a named extreme weather event in the UK. [3 marks]",
        marks: 3,
        markScheme: "Named event, e.g. Somerset: 65 km² farmland flooded; 16 farms evacuated, ~1,000 livestock moved; damage estimated at up to £147.5 million for the county; roads and railway closed, businesses lost trade.",
      },
      {
        q: "Describe the environmental impacts of a named extreme weather event in the UK. [3 marks]",
        marks: 3,
        markScheme: "Named event, e.g. Somerset: floodwater contaminated with sewage, oil and chemicals; debris on fields; soils waterlogged for months; damage to habitats.",
      },
      {
        q: "Explain how the impacts of a named UK extreme weather event were managed. [4 marks]",
        marks: 4,
        markScheme: "Named event, e.g. Somerset: immediate — boats/emergency services, sandbags, pumps brought in; long-term — £100 million Flood Action Plan; 8 km of rivers Tone and Parrett dredged; pumping stations upgraded; flood banks raised; tidal barrage proposed.",
      },
      {
        q: "Using evidence, suggest whether weather in the UK is becoming more extreme. [6 marks]",
        marks: 6,
        markScheme: "Level marked. Evidence for: temperature records (ten warmest years since 2002, 40.3°C 2022); record rainfall (winter 2013–14, Storm Desmond 341 mm); more frequent floods; named storms. Evidence against/limits: short records; natural variability; increased reporting. Supported conclusion required for top level.",
      },
      {
        q: "Explain why a warming climate could lead to more intense rainfall in the UK. [2 marks]",
        marks: 2,
        markScheme: "1 mark: warmer air can hold more moisture (around 7% per 1°C); 1 mark: so when it rises and condenses, heavier rainfall results.",
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
        q: "Compare the effects of tropical storms in an HIC and an LIC. [4 marks]",
        marks: 4,
        markScheme: "1 mark per comparative point: LICs usually have more deaths (weaker buildings, fewer warnings); HICs usually have higher economic costs (more expensive infrastructure); recovery slower in LICs; HICs have insurance and government support.",
      },
      {
        q: "Explain the role of the Coriolis effect in tropical storms. [2 marks]",
        marks: 2,
        markScheme: "1 mark: caused by the Earth's rotation, it deflects moving air; 1 mark: this makes air drawn into the storm spiral/rotate (anticlockwise in N hemisphere), so storms cannot form close to the Equator where it is too weak.",
      },
      {
        q: "Give one reason why the Met Office began naming storms in 2015. [1 mark]",
        marks: 1,
        markScheme: "1 mark: to raise public awareness of severe weather so people take warnings seriously and prepare.",
      },
    ],
  },
  '1.3': {
    name: "Climate Change",
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
        q: "Suggest why developing countries argue they should not have to reduce emissions as much as HICs. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: HICs industrialised first — responsible for most historical emissions; developing countries have a right to develop; current per capita emissions in LICs/NEEs much lower than HICs (e.g. US ~15 tonnes CO₂/person vs India ~2 tonnes); climate injustice — poorest countries suffering most despite contributing least; HICs have financial/technological capacity to transition; principle of common but differentiated responsibilities.",
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
        markScheme: "1 mark each for any four: different countries have different emissions histories and current levels (HIC vs LIC fairness debate); LICs argue HICs should pay more as they caused most historical emissions; economic cost of transition seen as uncompetitive; fossil fuel lobbies oppose action; lack of enforcement mechanisms in international law; political changes (e.g. US withdrawals from Paris under Trump in 2017 and again in 2025); differing national priorities; developing nations prioritise growth over emissions cuts.",
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
    ],
  },
  '1.4': {
    name: "Ecosystems and Tropical Rainforests",
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
        q: "Explain how ecotourism can support the sustainable management of rainforests. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: small-scale, low-impact tourism to experience natural environment; provides income for local communities; gives economic value to standing forest (incentive to preserve it); raises awareness of rainforest importance; tourists pay for guided tours keeping money in local economy; can fund conservation projects.",
      },
      {
        q: "What is a debt-for-nature swap? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: an agreement where a country's debt is reduced/cancelled in exchange for protecting areas of natural habitat (e.g. rainforest); 1 mark for: provides economic incentive for LIC governments to conserve forests rather than develop them.",
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
        q: "Describe one way in which indigenous people use the tropical rainforest sustainably. [2 marks]",
        marks: 2,
        markScheme: "1 mark for a valid way + 1 mark development. E.g. shifting cultivation — small plots cleared and farmed for a few years, then left fallow for many years so the forest and soil recover; small-scale hunting and gathering that takes only what is needed; use of detailed knowledge of medicinal plants without clearing forest.",
      },
      {
        q: "Explain why clearing a tropical rainforest makes its soils infertile. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: most nutrients are stored in the biomass, so they are removed when trees are cut down or burned; no new leaf litter falls, so the nutrient supply to the soil stops; heavy rainfall leaches remaining nutrients out of the thin soil; bare soil is eroded by rain splash and surface runoff; exposed soil can harden (laterisation); crop yields fall within a few years, so farmers move on to clear more forest.",
      },
      {
        q: "Suggest why ecotourism is considered a sustainable way of managing the rainforest. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: generates income from tourists without cutting down the forest (economic benefit for local communities); provides employment as guides/hosts reducing need for logging/farming; raises awareness of conservation and funds protection; small-scale, low impact; BUT can cause disturbance if poorly managed. E.g. Costa Rica derives significant GDP from ecotourism while protecting >25% of land.",
      },
      {
        q: "Explain the role of international agreements in protecting tropical rainforests. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: CITES — controls trade in endangered species; REDD+ (UN) — pays LICs to reduce emissions from deforestation; Paris Agreement includes forest protection commitments; debt-for-nature swaps — debt cancelled in return for conservation; BUT enforcement is weak, countries may prioritise development, funding often insufficient to offset economic incentives for deforestation.",
      },
      {
        q: "Evaluate the effectiveness of selective logging as a sustainable management strategy in tropical rainforests. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Evaluates strengths and weaknesses with detail, reaches a supported conclusion. Level 2 (3–4 marks): Describes strategy with some evaluation. Level 1 (1–2 marks): Basic points. Accept: only mature trees of specific species cut; forest structure/canopy largely preserved; wildlife habitats retained; regrowth possible; BUT access roads cause damage, machinery compacts/damages surrounding trees, illegal logging often follows legal roads; slow growth of tropical hardwoods means cycle must be long; requires enforcement; more sustainable than clear-felling but not a complete solution.",
      },
      {
        q: "Name a small-scale UK ecosystem you have studied and describe its characteristics. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point with named example, e.g. Kenfig Dunes: sand dunes, dune slacks and pool; succession inland from the beach; rare fen orchid; abiotic controls such as salt spray and low nutrients.",
      },
      {
        q: "Explain how a change to one component of a small-scale ecosystem can affect other components. [4 marks]",
        marks: 4,
        markScheme: "1 mark per link in the chain: e.g. loss of rabbit grazing → coarse plants and scrub spread → bare sand and damp slacks lost → specialist species such as fen orchid decline; nitrogen deposition fertilises sand favouring vigorous plants.",
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
    ],
  },
  '1.5': {
    name: "Hot Deserts",
    questions: [
      {
        q: "Describe the distribution of hot deserts. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: located around 30°N and 30°S of equator (horse latitudes); found in subtropical high pressure belts (descending air); examples — Sahara, Arabian, Namib, Atacama, Australian outback; also in continental interiors far from moisture sources; rain shadow deserts on leeward side of mountains.",
      },
      {
        q: "Explain why hot deserts receive very little precipitation. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: located in areas of descending air (~30°N/S); descending air is compressed and warms; this reduces relative humidity and prevents cloud formation; therefore very little rainfall (< 250mm/year); also: continental interiors far from sea moisture sources; cold ocean currents offshore (e.g. Benguela) chill air reducing precipitation.",
      },
      {
        q: "Describe the climate characteristics of a hot desert. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: very low annual precipitation (< 250mm); very high daytime temperatures (up to 50°C); extreme diurnal (day-night) temperature range (can be 30–40°C difference); low humidity; clear skies; intense solar radiation.",
      },
      {
        q: "Explain why hot deserts have a large diurnal temperature range. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: clear skies — no cloud cover during day allows intense solar heating → very high daytime temperatures; at night, clear skies allow heat to radiate back to space quickly (no greenhouse blanket); dry air has low specific heat capacity — heats and cools quickly; large diurnal range results.",
      },
      {
        q: "Describe the soil characteristics of a hot desert. [2 marks]",
        marks: 2,
        markScheme: "1 mark each for any two: very dry/arid; thin and stony; little organic matter (little vegetation to decompose); often saline (soluble salts remain as water evaporates); infertile; may have hard calcrete/duricrust layer near surface.",
      },
      {
        q: "Explain two plant adaptations to hot desert conditions. [4 marks]",
        marks: 4,
        markScheme: "2 marks per adaptation: cacti — thick, succulent stems store water (1 mark); spines instead of leaves reduce transpiration/water loss (1 mark); waxy cuticle to reduce water loss; shallow but extensive root system to capture rare rainfall quickly; deep tap roots to reach water table; drought-deciduous plants — shed leaves in dry season to reduce water loss (1 mark), grow leaves rapidly after rain (1 mark).",
      },
      {
        q: "Draw and label a diagram of a cactus, showing its adaptations to the desert environment. [3 marks]",
        marks: 3,
        diagram: true,
        markScheme: "1 mark each for: succulent/thick stem labelled (water storage); spines labelled (reduce water loss/protect from grazers); shallow widespread roots labelled (absorb rainwater quickly).",
      },
      {
        q: "Explain two animal adaptations to life in a hot desert. [4 marks]",
        marks: 4,
        markScheme: "2 marks per adaptation: camel — hump stores fat (not water) providing energy (1 mark); can lose up to 30% body water without harm; wide feet for sand; fennec fox — large ears dissipate heat (1 mark) keeping body cool in extreme heat (1 mark); desert rat/jerboa — nocturnal (active at night, avoiding heat) (1 mark); concentrated urine to conserve water (1 mark).",
      },
      {
        q: "What is desertification? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: the process by which fertile/semi-arid land becomes increasingly arid and desert-like; 1 mark for: reducing/destroying its ability to support vegetation and agriculture.",
      },
      {
        q: "Explain two human causes of desertification. [4 marks]",
        marks: 4,
        markScheme: "2 marks per cause: overgrazing — too many animals for land to support (1 mark), remove vegetation, compact/erode soil, remove protective cover (1 mark); deforestation/removal of fuelwood — trees removed for fuel and building (1 mark), exposes soil to wind/rain erosion, reduces transpiration, dries local climate (1 mark); over-cultivation — farming same land repeatedly, exhausts nutrients; over-extraction of groundwater.",
      },
      {
        q: "Explain how climate change is contributing to desertification in the Sahel. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: global warming is shifting climate zones poleward; Sahara Desert is expanding southward into the Sahel; rainfall in Sahel has become more unpredictable/reduced; more frequent droughts; prolonged droughts kill vegetation, making land more vulnerable to desertification.",
      },
      {
        q: "Describe the Sahel region and explain why it is vulnerable to desertification. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: semi-arid strip of land south of Sahara (Senegal to Ethiopia/Eritrea); annual rainfall 200–600mm, highly variable; poor, dry soils; rapidly growing population increases pressure on land; combination of climate change, poverty and population pressure makes it highly vulnerable.",
      },
      {
        q: "Describe the social and economic impacts of desertification on communities in the Sahel. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: food insecurity/famine — crop failures; loss of livelihoods for farmers/pastoralists; forced migration to cities/other countries (environmental refugees); increased poverty; conflict over remaining resources (e.g. Lake Chad water disputes); loss of traditional ways of life.",
      },
      {
        q: "Explain how overgrazing leads to desertification. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: too many animals graze on limited vegetation; vegetation removed faster than it can regenerate; without plant cover, roots no longer bind soil; soil exposed to wind erosion (deflation) and rain splash; compacted by animal hooves — less infiltration; bare, eroded soil becomes desert-like.",
      },
      {
        q: "Explain the use of stone bunds (magic stones) to manage desertification in the Sahel. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: small stone walls/lines built along contours of slope; slow surface runoff, allowing water to infiltrate soil; reduces soil erosion; moisture retained → vegetation can regrow; cheap, appropriate technology using local materials; communities build them collaboratively.",
      },
      {
        q: "What is the \"half-moon\" technique for managing desertification? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: semi-circular shallow pits dug in soil in a pattern; 1 mark for: concentrate rainwater runoff into centre of the half-moon where seeds planted, improving chances of germination and plant growth in arid conditions.",
      },
      {
        q: "Explain how the Great Green Wall project aims to reduce desertification. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: plan to plant a belt of trees 15km wide and 7,775km long across Africa (from Senegal to Djibouti); trees provide wind barriers, reduce erosion, restore soil, provide shade; restores ecosystem functions; provides timber and food (e.g. Acacia gum); creates green jobs/income for local people; only a small fraction of the 2030 target achieved by the early 2020s.",
      },
      {
        q: "Describe how education can help manage desertification. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: teaching sustainable farming practices to local communities; 1 mark for: e.g. training in contour ploughing, crop rotation, water harvesting techniques — reduces overgrazing/over-cultivation.",
      },
      {
        q: "Evaluate the effectiveness of strategies to manage desertification in the Sahel. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Evaluates specific strategies with Sahel examples and data where possible, considers advantages and limitations, reaches a supported conclusion. Level 2 (3–4 marks): Describes strategies with some evaluation. Level 1 (1–2 marks): Basic strategies listed. Accept: stone bunds/magic stones — cheap, effective (crop yields up 50% in Burkina Faso), community-owned; Great Green Wall — large-scale ambition but slow progress, funding issues; appropriate technology vs need for outside funding; conclusion on overall effectiveness.",
      },
      {
        q: "Explain why population growth increases the risk of desertification. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: more people require more food — more land is cultivated; more animals are grazed (overgrazing); more fuelwood is removed; land cannot recover — greater pressure than it can sustain; rapid population growth in Sahel (some of highest rates globally) makes this particularly acute.",
      },
      {
        q: "Draw a map to show the location of the Sahel region in Africa. [2 marks]",
        marks: 2,
        diagram: true,
        markScheme: "1 mark for: Africa outline shown; 1 mark for: Sahel region correctly shaded/indicated — strip across Africa south of Sahara Desert, approximately between 12°N and 20°N.",
      },
      {
        q: "Compare the xerophyte adaptations of a cactus with those of a drought-deciduous plant. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: both adapted to conserve water/survive drought; cactus — permanent structural adaptations (succulence, spines, waxy cuticle) — survives through dry season actively; drought-deciduous — sheds leaves in dry season to prevent water loss through transpiration (1 mark); regrows leaves quickly after rain when water available (1 mark); different strategies — permanent vs seasonal adaptation.",
      },
      {
        q: "Explain how appropriate technology helps communities manage desertification more effectively than large-scale projects. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: appropriate technology uses local materials and knowledge (e.g. stone bunds) — cheap and affordable for poor communities; communities can maintain it themselves without outside expertise; no dependency on imported machinery; builds community capacity and ownership; large-scale projects may require outside funding/expertise that is not sustained; BUT appropriate tech covers smaller areas — combination of both may be most effective.",
      },
      {
        q: "To what extent is desertification a natural or human-caused process? [8 marks]",
        marks: 8,
        markScheme: "Level 3 (6–8 marks): Evaluates natural and human causes with specific evidence from the Sahel or other named areas, reaches a supported judgement on relative importance. Level 2 (3–5 marks): Describes natural and human causes, some comparison. Level 1 (1–2 marks): Basic causes. Accept: natural — climate change, drought cycles (Sahel received above-average rainfall 1950s, then devastating droughts 1970s–80s — partly natural variability); human — overgrazing, deforestation, over-cultivation are primary causes; most scientists argue human factors accelerate and worsen natural vulnerability; conclusion should weigh evidence.",
      },
      {
        q: "Explain how cold ocean currents contribute to the formation of coastal deserts. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: cold currents (e.g. Benguela off Namibia/South Africa; Humboldt off Peru/Chile) chill air above them; cooled air loses ability to hold moisture/become stable; prevents cloud formation and rainfall; fog forms instead of rain; creates extreme coastal deserts (e.g. Namib, Atacama).",
      },
      {
        q: "Describe the features of an erg, reg and hammada desert landscape. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: erg — sandy desert with sand dunes (covers ~25% of Sahara); reg — flat, stony desert pavement (gravel/pebbles); hammada — bare, rocky plateau (wind removes fine material leaving exposed rock).",
      },
      {
        q: "Explain how wind erosion shapes desert landscapes. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: deflation — wind removes loose fine sand and dust leaving stony surfaces (reg/serir); abrasion — sand-laden wind sandblasts exposed rock surfaces at ground level; ventifacts and yardangs (streamlined rock ridges) formed by wind abrasion; sand transported and deposited as dunes (barchan, seif).",
      },
      {
        q: "Explain how the removal of fuelwood causes desertification. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: trees and shrubs cut/collected for cooking/heating fuel (major energy source in rural Sahel); removes plant cover from soil; roots no longer bind soil; soil exposed to wind/rain erosion; loss of tree transpiration may reduce local rainfall; harder to find fuel as trees disappear — positive feedback cycle.",
      },
      {
        q: "Describe the economic opportunities provided by desert environments. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: tourism (safari, desert tours, cultural tourism — e.g. Sahara desert tours); solar energy — high solar radiation ideal for solar power generation; mineral resources (e.g. oil, gas in Sahara; copper in Atacama; precious gems); irrigated agriculture in oases; salt extraction.",
      },
      {
        q: "Assess the challenges of living in a hot desert environment. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Evaluates physical, social and economic challenges with specific examples, reaches a supported conclusion. Level 2 (3–4 marks): Describes a range of challenges with some development. Level 1 (1–2 marks): Basic challenges listed. Accept: physical — extreme heat/cold, lack of water, hostile soils; social — food insecurity, poverty, limited services; economic — limited livelihoods, vulnerability to drought/desertification; BUT some areas overcome these (oil wealth, tourism, technology); conclusion should weigh.",
      },
      {
        q: "Explain how overgrazing leads to a positive feedback cycle of desertification. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: overgrazing removes vegetation; bare soil erodes more easily (wind/water); soil becomes less fertile; less vegetation can grow; more livestock compete for less vegetation → more overgrazing; cycle intensifies until land is completely degraded/desertified (positive feedback = self-reinforcing).",
      },
      {
        q: "Draw and label a diagram to show a barchan (crescent-shaped) sand dune. [3 marks]",
        marks: 3,
        diagram: true,
        markScheme: "1 mark each for: crescent/horseshoe shape shown; horns pointing downwind; gentle windward slope and steep lee face labelled; wind direction arrow shown.",
      },
      {
        q: "Draw and annotate a diagram to show how the Hadley cell leads to hot deserts forming at about 30°N and 30°S. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: warm air rising at the equator/ITCZ (low pressure, heavy rain) labelled; air moving polewards at high altitude labelled; air sinking at about 30°N/S labelled as high pressure; sinking air warms, so clouds do not form and there is little rain — hot desert location labelled. Diagram must be labelled.",
      },
      {
        q: "Explain why hot deserts experience flash floods when it does rain. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three: rain often falls as short, intense convectional storms; soils are baked hard/crusted and there is little vegetation, so infiltration is very low; most rain becomes rapid surface runoff; runoff is channelled into dry valleys (wadis), where water levels rise suddenly; little warning is given.",
      },
      {
        q: "Explain why hot deserts are located around 30° north and south of the equator. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: air rises at equator (ITCZ), cools and releases rainfall as tropical rainforest; this air travels polewards at high altitude, cools and sinks at around 30° N/S (Hadley cell descending limb); sinking air warms adiabatically, holds more moisture, so very little cloud or rainfall forms; creates arid subtropical high-pressure belt where hot deserts form.",
      },
      {
        q: "Suggest two ways in which camels are adapted to survive in hot desert conditions. [4 marks]",
        marks: 4,
        markScheme: "1 mark for each adaptation + 1 mark development. Any two from: hump stores fat (metabolised for energy and water); can drink 100+ litres at once and go weeks without water; wide padded feet prevent sinking in sand; long eyelashes and closable nostrils keep out sand; thick fur insulates against heat and cold nights; concentrated urine/dry dung conserves water; body temperature fluctuates to reduce sweating.",
      },
      {
        q: "Explain how irrigation can create economic opportunities in hot desert areas. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: irrigation allows cultivation of high-value crops (e.g. dates, citrus, vegetables in California's Imperial Valley or Israel's Negev); creates farming jobs and export income; supports food supply for growing populations; centre-pivot irrigation using fossil aquifers increases productivity (e.g. Ogallala aquifer, US); Israel uses drip irrigation to reduce water loss — highly productive. BUT unsustainable water use leads to aquifer depletion.",
      },
      {
        q: "Describe how zai pits help farmers in the Sahel to reduce the effects of desertification. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four: small pits (about 20–30 cm across) dug in hard, degraded soil; filled with compost or manure; collect and concentrate rainwater runoff and nutrients around plant roots; allow crops such as millet and sorghum to grow on land that was too degraded to farm; cheap and use local labour and knowledge (e.g. popularised by farmer Yacouba Sawadogo in Burkina Faso); improve soil fertility and crop yields over time.",
      },
      {
        q: "Suggest why the population of hot desert areas is often sparse. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: lack of water limits settlement and agriculture; extreme temperatures make life difficult and unhealthy; poor soils/lack of vegetation limits food production; isolation from major infrastructure/markets; frequent sandstorms and droughts damage settlements and livelihoods.",
      },
      {
        q: "Evaluate the impacts of climate change on hot desert environments and their populations. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Evaluates environmental and human impacts with named examples, reaches a supported conclusion. Level 2 (3–4 marks): Describes impacts with some development. Level 1 (1–2 marks): Basic points. Accept: rising temperatures increase evaporation and reduce already-scarce water; droughts more frequent/severe (e.g. Sahel); desertification accelerates — pushes desert margins outwards; crop failure, food insecurity, forced migration (climate refugees); some areas may see increased rainfall variability/flash floods; wildlife species at risk; BUT desert solar energy potential may increase. Conclusion should judge overall severity.",
      },
    ],
  },
  '1.6': {
    name: "Cold Environments",
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
    ],
  },
  '1.7': {
    name: "Coastal Landscapes in the UK",
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
    ],
  },
  '1.8': {
    name: "River Landscapes in the UK",
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
  '1.9': {
    name: "Glacial Landscapes in the UK",
    questions: [
      {
        q: "What is meant by the glacial budget? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: the balance between accumulation (snowfall adding to glacier) and ablation (melting/evaporation removing ice); 1 mark for: positive budget = glacier advances; negative budget = glacier retreats.",
      },
      {
        q: "Explain the difference between basal sliding and internal deformation as mechanisms of glacial movement. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: basal sliding — meltwater at base of glacier acts as lubricant, glacier slides over bedrock; internal deformation — ice crystals within glacier deform/recrystallise under pressure and gravity, causing slow flow; basal sliding faster than internal deformation.",
      },
      {
        q: "Describe the process of freeze-thaw (frost shattering) weathering. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: water enters cracks/joints in rock and freezes; 1 mark for: water expands by ~9% on freezing, widening cracks; repeated cycles break off angular fragments of rock.",
      },
      {
        q: "Explain how abrasion and plucking erode the landscape under a glacier. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: abrasion — rock fragments embedded in base of glacier grind against bedrock (like sandpaper), smoothing and scratching it (striations); plucking/quarrying — meltwater freezes around fragments of bedrock; as glacier moves forward it pulls/plucks these fragments away from the bedrock surface.",
      },
      {
        q: "Draw and label a diagram to show the formation of a corrie (cirque). [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: north-facing/sheltered hollow shown; snow accumulates and compresses to ice; rotational sliding of ice shown (rotational movement arrows); steep back wall from plucking; rock lip/threshold at front; tarn shown if present.",
      },
      {
        q: "Explain how a corrie is formed. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: snow collects in north/east-facing hollow (less sun); snow compresses to form glacier ice; glacier erodes backward and downward by rotational sliding; plucking steepens back wall; abrasion deepens floor; rock lip at front formed by reduced erosion; tarn forms in hollow after glacier melts.",
      },
      {
        q: "What is an arête? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: a narrow, knife-edged ridge between two corries; 1 mark for: formed as two adjacent corries erode backward into a mountain from opposite sides.",
      },
      {
        q: "Explain how a pyramidal peak is formed. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: three or more corries form on different sides of a mountain; they erode back into the mountain from multiple directions; the central summit is left as a steep-sided pyramid shape (e.g. Snowdon/The Matterhorn).",
      },
      {
        q: "Describe the differences between a V-shaped valley and a U-shaped valley. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three: V-shaped — formed by river erosion, narrow, steep sides, river at bottom; U-shaped — formed by glacial erosion, wide flat floor, very steep sides, often contains a misfit stream; U-shaped wider and deeper; U-shaped has truncated spurs (cut off by glacier).",
      },
      {
        q: "Draw and label a diagram to show a U-shaped valley with a hanging valley and ribbon lake. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: U-shape of main valley clearly shown; truncated spurs labelled; hanging valley shown entering main valley from height (with waterfall); ribbon lake on valley floor labelled.",
      },
      {
        q: "Explain how truncated spurs are formed by glacial erosion. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: before glaciation, river valley has interlocking spurs; glacier moves down valley and cannot wind around spurs; glacier erodes and cuts off ends of spurs leaving steep cliff faces (truncated spurs).",
      },
      {
        q: "What is a hanging valley? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: a tributary valley that joins a main U-shaped valley at a higher level than the main valley floor; 1 mark for: formed because the smaller tributary glacier eroded less deeply than the larger main glacier; often has a waterfall where it meets the main valley.",
      },
      {
        q: "Explain how ribbon lakes form in glaciated valleys. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: glacier erodes valley floor unevenly; softer rock or areas of compression eroded more deeply; after glacier melts these depressions fill with water; moraine may dam the valley helping to create lake.",
      },
      {
        q: "Describe the features of a roche moutonnée. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: smoothed, gently sloping upstream (stoss) face — polished by abrasion; rough, jagged, steep downstream (lee) face — caused by plucking; asymmetric shape showing direction of ice movement.",
      },
      {
        q: "Explain the difference between till and outwash. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: till (boulder clay) — unsorted, unstratified sediment deposited directly by glacier; 1 mark for: outwash — sorted, stratified sediment deposited by meltwater streams beyond snout of glacier.",
      },
      {
        q: "What is a drumlin? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: a smooth, elongated hill made of glacial till; 1 mark for: formed under a moving glacier — steep blunt end (stoss) faces direction ice came from; tapers in direction of ice flow (lee end).",
      },
      {
        q: "Describe the four types of moraine. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: terminal moraine — ridge of till at maximum advance of glacier; lateral moraine — deposited along sides of glacier (from weathered valley walls); medial moraine — ridge in middle of glacier where two glaciers merge; ground moraine — till deposited beneath glacier as it moves.",
      },
      {
        q: "Draw and label a diagram to show the different types of moraine associated with a glacier. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: glacier outline shown; lateral moraine on both sides labelled; medial moraine in middle (from tributary) labelled; terminal moraine at snout labelled.",
      },
      {
        q: "What is an erratic? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: a rock/boulder that has been transported by a glacier; 1 mark for: the rock is of a different type from the bedrock on which it now rests (e.g. limestone boulder on granite).",
      },
      {
        q: "Explain how eskers and kames are formed by fluvioglacial processes. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: eskers — ridges of sorted sand and gravel deposited by meltwater streams flowing in tunnels under glacier; kames — hills/mounds of stratified sand and gravel deposited at margin/front of glacier by meltwater; both feature sorted/stratified material (unlike till); kames may also form in crevasses.",
      },
      {
        q: "Describe the features of a periglacial environment. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: area around edge of glacier/ice sheet; permanently frozen ground (permafrost); freeze-thaw weathering very active; solifluction; patterned ground (ice wedge polygons, stone circles); little precipitation (polar desert).",
      },
      {
        q: "What is permafrost? [1 mark]",
        marks: 1,
        markScheme: "1 mark for: permanently frozen ground/subsoil that remains at or below 0°C for at least two consecutive years.",
      },
      {
        q: "Explain how solifluction occurs in periglacial areas. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: active layer (surface) thaws in summer; water cannot drain through permafrost beneath; waterlogged soil/sediment slowly flows downslope under gravity; creates lobes of sediment (solifluction lobes).",
      },
      {
        q: "Explain how patterned ground forms in periglacial areas. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: freeze-thaw sorts sediment by size; repeated freezing pushes larger stones outward/upward; stones arranged in circles, polygons or stripes on slopes; ice wedge polygons form as ground contracts in cold, cracks fill with water which freezes.",
      },
      {
        q: "Describe one conflict between tourism and conservation in a glaciated upland area. [3 marks]",
        marks: 3,
        markScheme: "1 mark for: identifying conflict (e.g. footpath erosion, litter, overcrowding); 1 mark for: explaining cause (tourism pressure on fragile landscape); 1 mark for: impact on landscape/ecosystem (erosion of paths, disturbance of wildlife, damage to habitats). Accept Snowdonia example.",
      },
      {
        q: "Using Snowdonia as an example, describe the opportunities that glaciated landscapes provide for tourism. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: dramatic scenery (U-shaped valleys, arêtes, peaks) attracts walkers/climbers; Snowdon most visited mountain in Wales/UK; mountain railway; water sports on ribbon lakes; walking/cycling trails; brings income to local economy (approximately 4 million visitors/year).",
      },
      {
        q: "Explain how tourism in Snowdonia/glaciated uplands can damage the environment. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: footpath erosion — vegetation worn away, soil compacted/eroded on popular routes (e.g. Snowdon path); littering; car park/road building disrupts habitats; noise pollution disturbs wildlife; water pollution from visitor numbers.",
      },
      {
        q: "Evaluate the strategies used to manage tourism in a glaciated upland area. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Evaluates strategies with specific examples, considers effectiveness and drawbacks, reaches a supported conclusion. Level 2 (3–4 marks): Describes strategies with some evaluation. Level 1 (1–2 marks): Basic strategies listed. Accept Snowdonia: footpath repair using stone pitching; visitor management (car park charges); Snowdon mountain railway reduces walkers on summit path; wardening; information centres; BUT hard to enforce without restricting access, expensive to maintain.",
      },
      {
        q: "What is an outwash plain (sandur)? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: a flat plain of sorted sand and gravel beyond the snout/terminus of a glacier; 1 mark for: deposited by meltwater streams flowing out from the glacier — material is sorted/layered by size.",
      },
      {
        q: "Explain why glacial landscapes are important for water supply. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: glaciers store large amounts of freshwater; meltwater feeds rivers (important in dry seasons); reservoirs built in glaciated valleys (e.g. Thirlmere in the Lake District supplies water to Manchester); permeable glacial sediments store groundwater.",
      },
      {
        q: "Describe the glacial budget and explain how it affects glacier advance or retreat. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: budget = difference between accumulation (snow gain) and ablation (melting loss); equilibrium line separates zones; positive budget (more accumulation than ablation) → glacier advances; negative budget (more ablation than accumulation) → glacier retreats; currently most glaciers have negative budgets due to climate change.",
      },
      {
        q: "Explain how meltwater channels are formed. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: channels carved by meltwater flowing under, through or beside glaciers; 1 mark for: often left as dry/misfit valleys in landscape after glacier retreats.",
      },
      {
        q: "To what extent has human activity increased the threats to glaciated landscapes? [8 marks]",
        marks: 8,
        markScheme: "Level 3 (6–8 marks): Evaluates human threats with named evidence, compares to natural threats, reaches a supported judgement with consideration of relative importance. Level 2 (3–5 marks): Describes human and natural threats, some comparison. Level 1 (1–2 marks): Basic threats listed. Accept: human — climate change (glacier retreat), tourism damage, quarrying/mining, overgrazing; natural — tectonic activity, climate variability; conclusion should judge extent human vs natural, using evidence.",
      },
      {
        q: "Draw a diagram to show the cross-section of a corrie after the glacier has melted, including the tarn. [3 marks]",
        marks: 3,
        diagram: true,
        markScheme: "1 mark each for: steep back wall shown; over-deepened basin/hollow; rock lip/threshold at front; tarn (lake) filling the hollow labelled.",
      },
      {
        q: "Explain why glaciated areas are used for farming and how this might conflict with conservation. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: glacial till is fertile — good for pastoral farming (sheep/cattle); flat valley floors good for arable farming; overgrazing removes vegetation, causes soil erosion, reduces biodiversity; hedgerow/wall removal changes landscape character. Conflict: farmers want to maximise land use, conservationists want to protect natural habitats.",
      },
      {
        q: "What evidence suggests that Snowdonia was glaciated in the past? [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three: U-shaped valleys (e.g. Nant Ffrancon); corries with tarns (e.g. Glaslyn); arêtes (e.g. Crib Goch); pyramidal peak (Snowdon); ribbon lakes (e.g. Llyn Tegid/Bala Lake); erratics; moraines; striations on rock.",
      },
      {
        q: "Explain how quarrying in glaciated areas can conflict with tourism and conservation. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: quarrying provides jobs and materials (economic benefit); large open-cast quarries visible in landscape (e.g. Penrhyn, Dinorwic slate quarries in Snowdonia); noise, dust and lorry traffic deters tourists; destroys habitats and glacial landforms; creates conflict between economic and environmental interests.",
      },
      {
        q: "Describe the characteristics of glacial till. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: unsorted — mixture of all particle sizes from boulders to clay; 1 mark for: unstratified — no distinct layers (unlike fluvioglacial material).",
      },
      {
        q: "Suggest why corries in the UK are typically found on north or east-facing slopes. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: north/east-facing slopes receive less direct sunlight (in northern hemisphere); 1 mark for: snow accumulates and is preserved for longer, allowing compaction into glacier ice and hollow enlargement through rotational erosion.",
      },
      {
        q: "Compare the characteristics of glacial till and fluvioglacial outwash deposits. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three: till is unsorted whereas outwash is sorted by size; till is unstratified whereas outwash shows clear layering/stratification; till has angular fragments whereas outwash particles are rounded/smoother (worked by water); till deposited directly by ice, outwash deposited by meltwater streams; till found beneath and at glacier margins, outwash found beyond the snout on the sandur.",
      },
    ],
  },
  '2.1': {
    name: "Urban Issues in LICs and NEEs",
    questions: [
      {
        q: "What is urbanisation? [1 mark]",
        marks: 1,
        markScheme: "1 mark for: the increase in the proportion of a country's population living in urban areas (towns and cities).",
      },
      {
        q: "Describe the global pattern of urbanisation. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: fastest rates of urbanisation occurring in LICs and NEEs, especially in Africa and Asia; HICs have slower rates — already highly urbanised (e.g. UK ~83%); some African cities growing by 4–5% per year; global urban population exceeded rural for the first time in 2007/2008.",
      },
      {
        q: "Explain two push factors that cause people to move from rural to urban areas in LICs. [4 marks]",
        marks: 4,
        markScheme: "2 marks per factor: rural poverty — limited income from subsistence farming (1 mark), unable to afford basic needs/services (1 mark); lack of services — no schools/hospitals/electricity in rural areas (1 mark), move to cities for better access to education/healthcare (1 mark); environmental hazards — floods/droughts/crop failure in rural areas; land shortages.",
      },
      {
        q: "Explain two pull factors that attract people to urban areas in LICs/NEEs. [4 marks]",
        marks: 4,
        markScheme: "2 marks per factor: employment — more job opportunities in industry/services in cities (1 mark), higher wages than rural farming (1 mark); better services — access to schools, hospitals, clean water, electricity (1 mark), improves quality of life/life expectancy (1 mark).",
      },
      {
        q: "Distinguish between natural increase and in-migration as causes of urban population growth. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: natural increase — more births than deaths within the urban population (young migrants have children); 1 mark for: in-migration — people moving from rural areas/other countries into cities; both contribute to rapid urban growth in LICs/NEEs.",
      },
      {
        q: "What is a megacity? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: a city with a population of more than 10 million people; 1 mark for: examples: Tokyo, Delhi, Shanghai, Mumbai, São Paulo, Lagos, Mexico City (accept any correct example).",
      },
      {
        q: "Describe the distribution of megacities globally. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: increasing number — over 30 megacities by the mid-2020s (the UN counted 33 in 2025); majority located in Asia (e.g. Tokyo, Delhi, Shanghai, Beijing, Mumbai); growing number in Africa (Lagos, Kinshasa) and Latin America (São Paulo, Mexico City); fewer in HICs/Europe (Tokyo is exception as HIC megacity); concentrated in LICs and NEEs.",
      },
      {
        q: "Describe the characteristics of a squatter settlement (shanty town/favela). [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: built illegally/informally on land not owned by residents; built from scavenged/makeshift materials (corrugated iron, wood, cardboard, plastic); lack clean water supply and sanitation; no electricity or irregular connections; overcrowded; limited road access; insecure land tenure (can be demolished).",
      },
      {
        q: "Explain why squatter settlements develop on the outskirts of rapidly growing cities in LICs. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: rapid rural-urban migration creates housing demand cities cannot meet; newcomers cannot afford formal housing; build makeshift homes on available land (often steep hillsides, flood plains — land others don't want); governments lack resources to provide housing for all; informal settlement grows quickly as others join family/community members.",
      },
      {
        q: "Describe the social problems faced by residents of squatter settlements. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: lack of clean water — risk of waterborne diseases (cholera, typhoid); no sanitation — open sewers/disease; unemployment/informal economy — low income, no job security; crime and violence — limited policing; lack of access to schools/healthcare; overcrowding — mental health impacts; insecurity of tenure.",
      },
      {
        q: "Explain the environmental problems associated with rapid urbanisation in LICs. [4 marks]",
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
        q: "Using Mumbai, Lagos or another named LIC/NEE city, describe the challenges of managing rapid urban growth. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Detailed description of specific urban management challenges with named examples/data for chosen city. Level 2 (3–4 marks): Describes challenges with some specific detail. Level 1 (1–2 marks): Generic challenges. Accept Mumbai: Dharavi slum (1 million people, 2.1 km²); lack of sanitation/clean water; air pollution; traffic congestion; housing shortage; rapid population growth; need for investment in infrastructure.",
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
        q: "Describe two urban regeneration strategies used in UK cities. [4 marks]",
        marks: 4,
        markScheme: "2 marks per strategy. Accept: waterfront regeneration (e.g. Cardiff Bay, Liverpool docks) — derelict industrial waterfront redeveloped (1 mark), new housing, offices, leisure facilities attract investment and residents (1 mark); enterprise zones — tax incentives and simplified planning rules in deprived areas (1 mark) attract businesses and create jobs (1 mark).",
      },
      {
        q: "Using a named example, explain how an area of an HIC city has been regenerated. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Detailed explanation of regeneration with specific named area, describes what was there before, what changed and impact, with data. Level 2 (3–4 marks): Named example described with some specific detail. Level 1 (1–2 marks): Generic regeneration. Accept Cardiff Bay: former coal export dock — derelict; 1987 Cardiff Bay Development Corporation; Senedd, Wales Millennium Centre built; about 5,000 new homes; tens of thousands of jobs claimed (estimates vary from ~17,000 to ~30,000); BUT critics say it cost around £2 billion of public and private money, existing residents displaced, not all benefited.",
      },
      {
        q: "Assess the success of urban regeneration in improving quality of life in deprived areas. [8 marks]",
        marks: 8,
        markScheme: "Level 3 (6–8 marks): Evaluates urban regeneration with specific named examples, considers different perspectives and stakeholders, reaches a supported judgement about overall success. Level 2 (3–5 marks): Describes regeneration with some evaluation. Level 1 (1–2 marks): Basic description. Accept: successes — new housing, jobs, investment, improved environment, better services; limitations — gentrification displaces original residents, benefits not equally shared, expensive, some areas still deprived; conclusion should assess \"success\" considering who benefited.",
      },
      {
        q: "Draw and label a diagram to show the land use zones of a typical LIC/NEE city. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: CBD at centre labelled; inner industrial zone labelled; residential zones (varying quality) shown; squatter settlements/shanty towns on periphery labelled; newer planned suburbs shown.",
      },
      {
        q: "Explain why squatter settlements are often found on hazardous sites on the edges of LIC cities. [3 marks]",
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
        q: "Suggest why some people argue that gentrification is not always a successful regeneration strategy. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: gentrification — wealthier newcomers buy/renovate property in deprived areas → rising house prices; original/long-term residents priced out of neighbourhood (displacement); community ties/social capital broken up; local businesses serving original community replaced by expensive cafes/boutiques; deprivation not tackled — it is just moved elsewhere.",
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
        q: "Explain why natural increase is often as important as in-migration in driving urban growth in LICs. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: migrants to cities are mostly young people of reproductive age; they have high birth rates; cities in LICs often have better access to healthcare than rural areas → lower death rates; natural increase can account for 40–60% of urban population growth; e.g. Lagos — birth rate remains high among urban poor.",
      },
      {
        q: "Assess the social, economic and environmental challenges of rapid urbanisation in LIC cities. [8 marks]",
        marks: 8,
        markScheme: "Level 3 (6–8 marks): Detailed assessment of all three challenge types with specific evidence from named city/cities, considers which challenges are most significant, reaches a supported judgement. Level 2 (3–5 marks): Covers at least two types of challenge with some development. Level 1 (1–2 marks): Basic challenges listed. Accept: social — housing shortages, lack of clean water/sanitation, crime, poor health; economic — informal economy, unemployment, infrastructure deficit; environmental — pollution, flooding, waste management; conclusion should judge overall most significant or how interlinked they are.",
      },
      {
        q: "Explain how improvements to transport infrastructure can support urban regeneration. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: better transport links (tram, metro, bus rapid transit) reduce congestion; make deprived areas more accessible to employers; attract businesses and investment; reduce commuting times, improving quality of life; link peripheral deprived areas to city centre job opportunities (e.g. new metro lines in UK cities).",
      },
      {
        q: "Draw and label a sketch map to show the location and land uses of a named squatter settlement. [3 marks]",
        marks: 3,
        diagram: true,
        markScheme: "1 mark for: named settlement shown in relation to city (e.g. Dharavi, Mumbai); 1 mark for: position shown (e.g. central location, surrounded by commercial district); 1 mark for: at least two different land use areas labelled (e.g. residential, recycling industry, small workshops).",
      },
      {
        q: "Suggest how the growth of e-commerce and online retail has changed urban land use in HIC cities. [4 marks]",
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
        q: "Explain two opportunities that rapid urbanisation can create for people living in LIC/NEE cities. [4 marks]",
        marks: 4,
        markScheme: "1 mark per opportunity + 1 mark development. Any two from: jobs in the formal and informal economy that usually pay more than rural farming; better access to schools, colleges and hospitals; access to piped water, electricity and sanitation (in some areas); a wider range of services, shops and entertainment; chances to start small businesses and send money back to rural families (remittances).",
      },
      {
        q: "Assess the social and environmental challenges of rapid urbanisation in a named LIC/NEE city. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Assesses both social and environmental challenges using specific named examples, reaches a supported judgement. Level 2 (3–4 marks): Describes challenges with some development. Level 1 (1–2 marks): Basic list. Accept Lagos/Mumbai/Rio/Rio de Janeiro: social — housing shortage/favelas (e.g. Rocinha), inadequate sanitation (40%+ of Mumbai population in slums), health inequalities, crime, water supply issues; environmental — air pollution, traffic congestion, water pollution (e.g. Guanabara Bay), waste management, loss of green space. Conclusion should weigh significance of each.",
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
        q: "Evaluate an urban planning scheme designed to improve the quality of life for the urban poor in an LIC or NEE city. [6 marks]",
        marks: 6,
        markScheme: "Level marked, e.g. Makoko Floating School / Lagos slum upgrading: drains cleared, roads paved, lighting and waste collection; cheap and keeps communities together; small scale, collapse of first floating school, residents fear eviction. Judgement required.",
      },
    ],
  },
  '2.2': {
    name: "Urban Change in the UK",
    questions: [
      {
        q: "Describe the characteristics of the Central Business District (CBD). [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three of: high land values/expensive rents; tall buildings/high-rise; high pedestrian/traffic density; concentration of retail shops/offices/services; limited residential use; highly accessible by public transport; land use changes at night (offices empty).",
      },
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
        q: "Explain two causes of traffic congestion in UK cities. [4 marks]",
        marks: 4,
        markScheme: "1 mark for each cause identified, 1 mark for each explanation: increased car ownership — more households own multiple cars, roads cannot cope; urban sprawl — people live further from work and must commute; inadequate public transport — people rely on cars; road freight — lorries/delivery vans increasing; school run — parents driving children adds to peak-time traffic.",
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
        q: "Describe the key features of the Hulme regeneration in Manchester. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four of: Hulme was dominated by failed 1960s deck-access tower blocks/crescents; high crime, social problems; City Challenge funding used from 1992; crescents demolished; replaced with lower-density housing; mix of tenures (social, private, owner-occupied); Moss Side and Hulme improved together; new Asda store/retail; community involvement in planning.",
      },
      {
        q: "Compare the approaches to regeneration used in London Docklands and Hulme, Manchester. [6 marks]",
        marks: 6,
        markScheme: "Level 1 (1–2): describes one area only. Level 2 (3–4): describes both areas but limited comparison. Level 3 (5–6): direct comparison of approaches — Docklands: top-down, LDDC, enterprise zone, large-scale commercial; Hulme: City Challenge, community-led, housing-focused, smaller scale. Both involved demolition and rebuilding. Contrasts: Docklands prioritised business/financial; Hulme prioritised community needs. Valid comparison must be made for Level 3.",
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
    ],
  },
  '2.3': {
    name: "The Changing Economic World",
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
        markScheme: "1 mark each for: world map or recognisable outline; Brandt Line drawn roughly correctly (separating richer North from poorer South, curving south to include Australia/New Zealand in the North); Global North labelled as more developed/HICs; Global South labelled as less developed/LICs/NEEs; at least one named example country in each category.",
      },
      {
        q: "Explain one limitation of the Brandt Line as a way of classifying development. [2 marks]",
        marks: 2,
        markScheme: "1 mark for limitation: it is a crude/simplistic division; ignores variation within the Global South; many NEEs (e.g. China, Brazil) are in the Global South but are rapidly developing; Australia and New Zealand are in the geographical south but classed as Global North. 1 mark for development of point.",
      },
      {
        q: "What is the difference between a Low Income Country (LIC) and a Newly Emerging Economy (NEE)? [2 marks]",
        marks: 2,
        markScheme: "1 mark for LIC: a country with a low GDP/GNI per capita; limited industrialisation; often dependent on primary industries. 1 mark for NEE: a country that has begun to industrialise rapidly; growing economy; increasing GDP; examples include China, India, Brazil, Nigeria.",
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
        markScheme: "1 mark per developed point: LICs tend to export raw materials at low prices and import manufactured goods at higher prices — unfavourable terms of trade; price of commodities fluctuates, making income unreliable; tariffs and subsidies in HICs make it hard for LIC producers to compete; trade agreements often favour HICs; profits from trade often returned to HIC shareholders.",
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
        q: "Explain how Foreign Direct Investment (FDI) can promote development in LICs and NEEs. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: creates jobs for local population; transfers technology and skills; generates tax revenue for government; builds infrastructure (roads, ports); increases export earnings; stimulates secondary economic activity/multiplier effect.",
      },
      {
        q: "Give two disadvantages of Foreign Direct Investment for developing countries. [2 marks]",
        marks: 2,
        markScheme: "1 mark each for any two: profits often repatriated to HIC shareholders; low wages/poor working conditions; environmental damage; exploits cheap labour; dependency on TNCs; race to the bottom on regulations.",
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
        q: "Explain how debt can trap LICs in a cycle of poverty. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: countries borrowed money from World Bank/IMF; high interest payments reduce money available for health/education; structural adjustment conditions (privatisation, cutting public services) can worsen poverty; debt grows faster than ability to repay; cycle: need more loans to service existing debt; HIPC initiative sought to address this.",
      },
      {
        q: "Describe how tourism can be used as a strategy for development. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three of: creates jobs (hotels, guides, transport); generates foreign exchange earnings; stimulates local food/craft industries; multiplier effect; funds infrastructure development; can fund conservation; ecotourism can benefit rural communities directly.",
      },
      {
        q: "Suggest two disadvantages of relying on tourism as a development strategy. [2 marks]",
        marks: 2,
        markScheme: "1 mark each for any two: seasonal — income not year-round; vulnerable to external shocks (terrorism, pandemics, natural disasters); profits leakage to foreign-owned companies; environmental damage; cultural disruption; dependency on foreign tourists; low wages in hospitality.",
      },
      {
        q: "Describe Nigeria's economic growth since the 1990s. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four of: GDP has grown significantly; oil industry major contributor; Lagos is a major financial/commercial hub; growing manufacturing sector; ICT and banking growing; one of Africa's largest economies; annual growth rates averaging 5–7% in the 2000s and early 2010s (much slower since 2015); classified as NEE.",
      },
      {
        q: "Explain how oil extraction has both benefited and harmed Nigeria. [6 marks]",
        marks: 6,
        markScheme: "Level 1 (1–2): simple statements. Level 2 (3–4): describes benefits and harms with some development. Level 3 (5–6): detailed, balanced explanation. Benefits: oil revenues fund government spending, major export earner, jobs in oil sector, infrastructure investment. Harms: Shell oil spills in Niger Delta — Ogoniland pollution; water/soil contamination; harm to local livelihoods (fishing, farming); conflict over resources; corruption in oil revenues; resource curse — manufacturing neglected; inequality.",
      },
      {
        q: "Describe the pattern of inequality within Nigeria. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four of: north-south divide — south richer due to oil/industry; Lagos vs rural areas; urban-rural inequality; Muslim north has lower literacy/development indicators; south-south region (Niger Delta) suffers despite oil wealth; Gini coefficient high; wealth concentrated among elite; large informal economy.",
      },
      {
        q: "Compare the level of development of Nigeria (NEE) with that of a named LIC. [6 marks]",
        marks: 6,
        markScheme: "Level 1 (1–2): describes one country. Level 2 (3–4): compares with limited development. Level 3 (5–6): detailed comparison using statistics/data, covering multiple indicators (GDP, life expectancy, literacy, HDI). Accept any valid LIC (e.g. Zambia, Ethiopia, Niger). Must include direct comparison language (\"whereas\", \"in contrast\") for Level 3.",
      },
      {
        q: "Explain the Fairtrade chocolate/coffee commodity chain and how value is distributed. [6 marks]",
        marks: 6,
        markScheme: "Level 1 (1–2): describes the chain simply. Level 2 (3–4): explains the chain with some analysis of who benefits. Level 3 (5–6): traces the full chain — farmer → co-operative → exporter → processor → manufacturer → retailer → consumer; explains that farmers receive smallest share; middlemen/processors/retailers take largest margins; Fairtrade attempts to shift more value to farmers through minimum price and premium; gives approximate value distribution. Example: cocoa farmer in Ghana receives ~6% of value of chocolate bar.",
      },
      {
        q: "Describe what is meant by the development spectrum. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: countries exist at different stages of development rather than being simply 'developed' or 'developing'. 1 mark for: identified categories — LICs, NEEs, HICs (or mention BRICS, MINT etc.) on a continuum.",
      },
      {
        q: "State two development indicators that could be used to classify a country as an LIC. [2 marks]",
        marks: 2,
        markScheme: "1 mark each for any two: low GDP/GNI per capita (under ~$1,135 World Bank threshold, 2025); low HDI score; high infant mortality rate; low life expectancy; low literacy rate; high birth rate; high % of labour force in agriculture; limited access to clean water/sanitation.",
      },
      {
        q: "Explain the difference between infant mortality rate and life expectancy as development indicators. [4 marks]",
        marks: 4,
        markScheme: "1 mark for IMR definition: number of deaths of children under 1 per 1,000 live births. 1 mark for life expectancy definition: average age a person born today can expect to live to. 1 mark for how each indicates development: high IMR = poor healthcare/nutrition/sanitation; low life expectancy = poor healthcare, disease, poverty. 1 mark for comparison: IMR is a more sensitive indicator of early childhood conditions; life expectancy averages all deaths.",
      },
      {
        q: "To what extent is Fairtrade an effective solution to reducing inequality between HICs and LICs? [8 marks]",
        marks: 8,
        markScheme: "Level 1 (1–2): simple points. Level 2 (3–4): some explanation with limited evaluation. Level 3 (5–6): explains effectiveness and limitations with evidence. Level 4 (7–8): evaluates with evidence, compares Fairtrade to other strategies, reaches a clear conclusion. Effective: guaranteed minimum price, community investment, stable livelihoods. Limited: small scale, does not address structural trade rules, producer to benefit varies, consumer awareness/cost premium. Comparison: structural solutions (debt relief, trade reform) may be more effective at scale.",
      },
      {
        q: "Suggest why natural disasters can have a greater impact on LICs than on HICs. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: LICs have weaker building standards — more deaths from building collapse; limited emergency services/healthcare; less money for early warning systems; slower reconstruction; greater dependence on agriculture — food insecurity after; debt means cannot afford rebuilding; limited insurance. HICs have resources to prepare and recover quickly.",
      },
      {
        q: "Describe the differences in birth rate and death rate between LICs and HICs. [4 marks]",
        marks: 4,
        markScheme: "2 marks for LICs: high birth rates (often 30–40+ per 1,000); higher death rates (though falling); high natural increase rate; high infant mortality. 2 marks for HICs: low birth rates (10–15 per 1,000); low death rates; low or negative natural increase; low infant mortality.",
      },
      {
        q: "Explain how access to clean water affects development in LICs. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: without clean water, waterborne diseases (cholera, typhoid) cause illness and death; children miss school to collect water — reduces educational attainment; women spend hours collecting water — cannot work; agricultural productivity limited; economic activity disrupted; healthcare costs increased. Access to clean water reduces mortality, improves productivity.",
      },
      {
        q: "Assess whether economic growth alone is sufficient to reduce poverty in NEEs. [8 marks]",
        marks: 8,
        markScheme: "Level 1 (1–2): simple points. Level 2 (3–4): some explanation with limited balance. Level 3 (5–6): explains role of economic growth and its limitations with evidence. Level 4 (7–8): balanced evaluation with named evidence (e.g. Nigeria — rapid GDP growth but persistent inequality; China — growth has lifted millions but inequality has also grown); reaches justified conclusion. Growth necessary but not sufficient — distribution matters; social investment (health, education) required; governance and corruption reduction important; environmental sustainability.",
      },
      {
        q: "Describe the global pattern of literacy rates. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three of: lowest literacy in sub-Saharan Africa and parts of South Asia; highest in HICs (near 100%); gender gap in literacy in many LICs/NEEs; improving globally but inequalities persist; rural areas have lower literacy than urban within countries; literacy correlates strongly with HDI.",
      },
      {
        q: "Explain how the percentage of the labour force employed in agriculture can indicate a country's level of development. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for up to three: LICs have higher % in agriculture — subsistence farming, low productivity, low wages; HICs have low % in agriculture — mechanised, high-tech, fewer workers needed; as countries develop, workers move to industry and services (structural transformation); high % in agriculture indicates low industrialisation; limits national income and productivity.",
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
        q: "To what extent have Transnational Corporations (TNCs) helped the development of NEEs? [8 marks]",
        marks: 8,
        markScheme: "Level 1 (1–2): simple statements. Level 2 (3–4): lists benefits and costs with limited evaluation. Level 3 (5–6): explains both sides with named examples. Level 4 (7–8): balanced evaluation with clear judgement. Benefits: FDI/capital investment; creation of jobs (e.g. Foxconn in China, Nike in Vietnam); technology/skills transfer; export earnings; multiplier effect; infrastructure improvements. Drawbacks: profits repatriated to HIC HQ; low wages and poor working conditions; environmental damage; cultural erosion; tax avoidance. Conclusion should assess extent — significant role but needs to be combined with strong local governance and worker protections.",
      },
      {
        q: "Describe the Demographic Transition Model. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: shows change in birth rate, death rate and total population over time; stage 1 high BR and DR; stage 2 DR falls; stage 3 BR falls; stage 4 both low; stage 5 BR below DR.",
      },
      {
        q: "Explain how the Demographic Transition Model is linked to a country's level of development. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: LICs in stages 2–3 (high BR, falling DR); NEEs in stage 3; HICs in stages 4–5; development brings healthcare (DR falls), then education/contraception (BR falls); limitation — based on Europe.",
      },
      {
        q: "Explain the consequences of uneven development. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: disparities in wealth; disparities in health (life expectancy, infant mortality); international migration — economic migrants and refugees; remittances.",
      },
      {
        q: "Using a named example, explain how tourism can help reduce the development gap. [6 marks]",
        marks: 6,
        markScheme: "Level marked, e.g. Jamaica: 4 million visitors; ~30% of GDP; jobs and multiplier effect; infrastructure; but leakage, seasonal low-paid jobs, environmental damage, vulnerability to hurricanes/recession. Judgement for top level.",
      },
      {
        q: "Describe the location and importance of a named NEE. [4 marks]",
        marks: 4,
        markScheme: "Named NEE, e.g. Nigeria: West Africa, Gulf of Guinea; largest population in Africa (220 million+); one of Africa's largest economies; major oil producer, OPEC member; Nollywood; ECOWAS leader.",
      },
      {
        q: "Describe how the industrial structure of a named NEE has changed. [4 marks]",
        marks: 4,
        markScheme: "Named NEE, e.g. Nigeria: agriculture still employs about a third but share of GDP fallen; oil ~90% of exports; manufacturing growing (Dangote Cement); services now over half of GDP (banking, telecoms, film, IT).",
      },
      {
        q: "Explain how changing trading relationships have affected a named NEE. [4 marks]",
        marks: 4,
        markScheme: "Named NEE, e.g. Nigeria: trade historically with UK/Europe; now China largest source of imports; Chinese investment in railways and Lekki port; AfCFTA increasing trade within Africa.",
      },
      {
        q: "Describe the environmental impacts of economic development in a named NEE. [4 marks]",
        marks: 4,
        markScheme: "Named NEE, e.g. Nigeria: oil spills in Niger Delta; gas flaring; air and water pollution in Lagos; deforestation; desertification in the north.",
      },
      {
        q: "Explain the causes of economic change in the UK. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: deindustrialisation (decline of coal, steel, shipbuilding); globalisation and the global shift of manufacturing; government policies (privatisation, regeneration, Brexit).",
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
        q: "Explain the social and economic changes in a rural area of the UK experiencing population decline. [4 marks]",
        marks: 4,
        markScheme: "Named area, e.g. Outer Hebrides: young people leave; ageing population; schools and shops close; services unviable; reliance on ferries and subsidies; Gaelic culture under pressure.",
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
    ],
  },
  '2.4': {
    name: "Resource Management",
    questions: [
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
        markScheme: "1 mark per point: enough food produced overall but unequal distribution; ~700 million undernourished, mainly sub-Saharan Africa and South Asia; HICs >3,400 calories/day, some LICs <2,200; a third of food wasted.",
      },
      {
        q: "Describe the global inequality in water consumption. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: ~2 billion lack safe water; USA 300–400 litres/person/day; UK ~140; parts of sub-Saharan Africa <20 litres; linked to wealth and climate.",
      },
      {
        q: "Describe the global inequality in energy consumption. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: ~700 million have no electricity, mostly sub-Saharan Africa; HICs consume many times more per person; China, USA, India largest overall consumers.",
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
        q: "Explain why the demand for water in the UK is rising. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: population growth (especially SE England); more, smaller households; more water-using appliances; hotter summers increase use.",
      },
      {
        q: "Describe the sources of water pollution in the UK. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: fertilisers and pesticides from farms; sewage overflows; industrial discharge; plastic waste; oil from roads.",
      },
      {
        q: "Explain how water quality in the UK is managed. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: Environment Agency monitoring; water treatment works; laws limiting farm run-off (Nitrate Vulnerable Zones); Thames Tideway Tunnel captures sewage overflows; fines for polluters.",
      },
      {
        q: "Describe the distribution of areas of water surplus and deficit in the UK. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: surplus in north and west (Scotland, Wales, N England) — high rainfall, low population; deficit in south and east (London, SE, East Anglia) — low rainfall, high population.",
      },
      {
        q: "Explain why there are areas of water deficit in the UK. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: low rainfall in south/east (~600 mm, rain shadow); high population density; high demand from homes and industry; aquifers over-abstracted.",
      },
      {
        q: "Describe one example of a water transfer scheme in the UK. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: e.g. Elan Valley — reservoirs in mid-Wales; 118 km aqueduct to Birmingham; gravity-fed since 1904; or Kielder Water — transfers to Tees, Wear, Tyne.",
      },
      {
        q: "Explain the advantages and disadvantages of water transfer schemes. [4 marks]",
        marks: 4,
        markScheme: "2 advantages + 2 disadvantages: supply deficit areas; uses surplus water; vs high cost of pumping/pipelines; environmental impact of mixing river basins; flooding of land for reservoirs; political opposition.",
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
        q: "Describe the location of areas of water surplus in the UK. [2 marks]",
        marks: 2,
        markScheme: "1 mark per point: north and west; Scotland/Highlands; Wales; Lake District/Pennines/N England; upland areas.",
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
        q: "To what extent can the UK meet its future water needs? [9 marks]",
        marks: 9,
        markScheme: "Level 3: rising demand, climate change, regional mismatch; strategies — transfers, new reservoirs, metering, leakage reduction, recycling; judgement. Level 2: some discussion. Level 1: basic.",
      },
      {
        q: "Evaluate the economic and environmental issues associated with the exploitation of energy sources in the UK. [9 marks]",
        marks: 9,
        markScheme: "Level 3: detailed comparison of at least two sources (e.g. fracking, nuclear, wind, North Sea) with economic and environmental issues and a judgement. Level 2: some comparison. Level 1: basic.",
      },
      {
        q: "What is meant by resource security? [1 mark]",
        marks: 1,
        markScheme: "1 mark: having reliable access to enough affordable resources (food, water, energy) to meet needs.",
      },
      {
        q: "Explain why the south-east of England is likely to face increasing water stress. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: population growth and new housing; low rainfall; climate change — hotter, drier summers; over-abstraction of chalk aquifers.",
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
        q: "Describe how the Thames Tideway Tunnel helps manage water pollution. [2 marks]",
        marks: 2,
        markScheme: "1 mark: a 25 km \"super sewer\" under the Thames; 1 mark: captures sewage overflows that previously entered the river during heavy rain.",
      },
      {
        q: "Explain why food, water and energy are interlinked. [3 marks]",
        marks: 3,
        markScheme: "1 mark per link: food production needs water (70% of freshwater) and energy (machinery, fertiliser); energy production needs water (cooling, HEP); water treatment and pumping needs energy; biofuels use food crops.",
      },
    ],
  },
  '2.5': {
    name: "Food",
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
        q: "Give two examples of appropriate technology used to increase food supply. [2 marks]",
        marks: 2,
        markScheme: "1 mark each: treadle pumps; drip irrigation from recycled bottles; improved grain stores; sand dams; zai pits; terracing.",
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
        markScheme: "1 mark per point: about a third of food wasted; better storage in LICs reduces losses; less waste in HICs; campaigns like Love Food Hate Waste.",
      },
      {
        q: "Describe a named local scheme in an LIC or NEE to increase sustainable food supply. [4 marks]",
        marks: 4,
        markScheme: "Named scheme, e.g. Makueni, Kenya: semi-arid, droughts; sand dams across seasonal rivers store water; terracing and drought-resistant crops; community self-help groups.",
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
    ],
  },
  '2.6': {
    name: "Water",
    questions: [
      {
        q: "State the percentage of the world's water that is accessible fresh water. [1 mark]",
        marks: 1,
        markScheme: "1 mark for: less than 1% (accept 0.3% or \"under 1%\").",
      },
      {
        q: "Describe the global distribution of fresh water. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three: 97% of all water is saline (in oceans); approximately 2% is frozen in ice caps, glaciers and permafrost; less than 1% is accessible fresh water; of accessible fresh water, most is groundwater; surface water (rivers, lakes) is a small fraction; uneven distribution — some regions have water surplus, others water deficit.",
      },
      {
        q: "Draw and label a diagram to show the main processes of the water cycle. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for any four processes correctly shown and labelled: evaporation (from ocean/lake/land); transpiration (from vegetation) / evapotranspiration; condensation (forming clouds); precipitation (rain/snow); surface runoff; infiltration (into soil); percolation (to groundwater); groundwater flow; interception. Diagram must show water moving through the system.",
      },
      {
        q: "Explain how geology affects water availability. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for up to three: permeable rocks allow water to infiltrate and be stored in aquifers (underground water stores); impermeable rocks cause more surface runoff, less groundwater storage; limestone/chalk aquifers in SE England supply much of the water; areas with impermeable rock (e.g. upland Wales/Scotland) have more rivers/surface water; aquifer depletion is a major issue in some regions.",
      },
      {
        q: "Describe the global pattern of water surplus and water deficit. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four: water surplus regions — equatorial (Amazon, Congo), northern Europe, SE Asia, monsoonal regions; water deficit regions — North Africa, Middle East, central Asia, SW USA, Australia interior; deficit often results from high evaporation exceeding precipitation; tropical areas have high precipitation but may have uneven seasonal distribution; population distribution does not match water availability.",
      },
      {
        q: "Explain four reasons why global demand for water has increased in recent decades. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for four valid reasons: population growth — more people need water; urbanisation — urban residents use more water than rural; economic development — industry uses large quantities; changing diet — more meat consumption (livestock requires large amounts of water — virtual water); irrigation for agriculture — feeds growing population; climate change altering precipitation patterns; rising living standards — more domestic appliances, gardens.",
      },
      {
        q: "What is meant by water stress? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: a situation where demand for water exceeds available supply / where available water drops below 1,700 m³ per person per year. 1 mark for: or a situation where water quality is poor/unreliable. Accept: water withdrawal exceeds 40% of renewable freshwater resources.",
      },
      {
        q: "Distinguish between physical water scarcity and economic water scarcity. [4 marks]",
        marks: 4,
        markScheme: "2 marks for physical: there is not enough water in the environment to meet demand; arid/semi-arid regions; e.g. North Africa, Arabian Peninsula; precipitation is low; examples: Saudi Arabia, Libya. 2 marks for economic: water exists in the environment but people cannot access it due to lack of infrastructure, poverty, or investment; e.g. sub-Saharan Africa; countries have rainfall but lack pipes, treatment plants, storage.",
      },
      {
        q: "Describe how waterborne diseases are linked to water insecurity. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three: where clean water is unavailable, people drink from contaminated sources; waterborne diseases include cholera, typhoid, dysentery, hepatitis A, diarrhoea; cause millions of deaths annually — mainly children; in LICs, poor sanitation contaminates water supply; diarrhoea kills over 400,000 children under 5 per year (WHO); reduces economic productivity.",
      },
      {
        q: "Explain how conflict can arise over shared water resources. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: rivers crossing multiple national boundaries create tension when upstream users take more water; Nile Basin: Ethiopia building Grand Ethiopian Renaissance Dam — Egypt fears reduced flow; Nile Agreement of 1929 gives Egypt most rights — contested by upstream countries; Colorado River: US states in conflict over water allocation; Aral Sea: Soviet-era irrigation drained the sea; water scarcity can lead to military conflict (\"water wars\").",
      },
      {
        q: "Describe the benefits of the Three Gorges Dam in China. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four: hydroelectric power — world's largest HEP station (22,500 MW); flood control — protects millions from Yangtze River flooding; improved navigation — allows larger ships; water supply for cities and agriculture; economic development of central China; reduced reliance on coal-fired power; tourism revenue.",
      },
      {
        q: "Evaluate the costs and benefits of the Three Gorges Dam. [8 marks]",
        marks: 8,
        markScheme: "Level 1 (1–2): simple points. Level 2 (3–4): describes some costs and benefits with limited balance. Level 3 (5–6): explains both sides with evidence. Level 4 (7–8): evaluates with data, weighs costs against benefits, reaches a justified conclusion. Benefits: HEP (22,500 MW), flood control, navigation, water supply. Costs: 1.3 million displaced from homes; loss of cultural heritage sites; ecosystem damage (Yangtze sturgeon near extinction, loss of wetlands); sedimentation reduces reservoir capacity; reservoir-induced seismicity; changes to river downstream. Conclusion must make a judgement.",
      },
      {
        q: "Describe how the China South-North Water Transfer Project works. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four: moves water from water-surplus south (Yangtze River basin) to water-deficit north (Yellow River/Beijing region); three routes: Eastern, Central, Western; Eastern route completed 2013; Central route 2014; transfers billions of cubic metres annually; Western route still under planning; thousands of km of canals/tunnels/pipes; one of world's largest water engineering projects.",
      },
      {
        q: "Explain how desalination can increase water supply and suggest two limitations of this method. [4 marks]",
        marks: 4,
        markScheme: "1 mark for how: removes salt from seawater (or brackish water) using reverse osmosis or distillation; produces fresh water. 1 mark for example: Saudi Arabia, UAE, Israel. 1 mark for each limitation: extremely energy-intensive — high carbon footprint and cost; concentrated brine by-product damages marine ecosystems when discharged; only viable near coast; too expensive for most LICs.",
      },
      {
        q: "Draw and label a diagram to show how a check dam works to conserve water in a rural area. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: stream/drainage channel shown; small dam/barrier across channel; water pool/reservoir behind dam labelled; benefits labelled (e.g. recharges groundwater, reduces erosion, available for irrigation). Diagram must show the key feature — small-scale water storage.",
      },
      {
        q: "Describe how drip/trickle irrigation can reduce water use in agriculture. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three: delivers water directly to plant roots via pipes/emitters; minimises evaporation; reduces waterlogging; uses up to 70% less water than surface irrigation; increases crop yield; suitable for arid areas; used in Israel, India, sub-Saharan Africa; can be combined with fertigation (adding fertiliser).",
      },
      {
        q: "Explain how WaterAid or a similar NGO contributes to solving water insecurity in LICs. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: WaterAid provides safe water, sanitation and hygiene (WASH) programmes; works with local communities to install boreholes/hand pumps; trains local technicians to maintain systems; advocates for government investment; fog nets in coastal/highland areas collect moisture; rainwater harvesting systems built; empowers communities — sustainable long-term. Reference to any named NGO project accepted.",
      },
      {
        q: "Explain how rainwater harvesting can help communities in water-scarce areas. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: collects rainwater from rooftops into tanks or pits; can be used for drinking (with treatment), irrigation, domestic use; reduces dependency on unreliable mains or river water; cheap and low-tech — accessible to poor communities; India (rajasthan) traditional step wells and tanka cisterns; Bangladesh floods and drought — rooftop systems; gives communities control over water supply.",
      },
      {
        q: "Describe the north-south imbalance in water supply and demand in the UK. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four: north and west receive more rainfall (upland areas, prevailing westerly winds, orographic effect); south and east are drier; but most of the population lives in the south (especially SE England); demand is highest in the south due to population and agriculture; reservoirs mainly in north and Wales; water transferred via aqueducts but complex and expensive; Thames Water catchment area under pressure.",
      },
      {
        q: "Suggest reasons why leakage from water pipes is a significant problem in the UK. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: old Victorian pipe infrastructure in many cities; Thames Water loses approximately 25% of water to leakage; estimated 3 billion litres/day lost across UK; pipes not replaced fast enough; expensive to locate and repair leaks; underground pipes difficult to access in built-up areas; regulatory pressure on water companies to reduce leakage; offsetting investment in new reservoirs.",
      },
      {
        q: "Evaluate water metering as a strategy to reduce water demand in the UK. [6 marks]",
        marks: 6,
        markScheme: "Level 1 (1–2): simple statements. Level 2 (3–4): describes advantages and disadvantages with some development. Level 3 (5–6): balanced evaluation with evidence, reaches a conclusion. Advantages: reduces consumption — evidence shows metered households use ~10–15% less water; fairer — pay for what you use; signals water as scarce resource; reduces demand pressure. Disadvantages: disproportionate impact on large families with low income; elderly on fixed incomes; some areas lack metering infrastructure; does not address leakage; behaviour change limited. Conclusion.",
      },
      {
        q: "Explain why agriculture is the largest consumer of fresh water globally. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: agriculture uses approximately 70% of global freshwater withdrawals; irrigation is the dominant use; large areas of food production are in semi-arid or arid regions requiring supplementary irrigation; inefficient surface irrigation methods cause high evaporation losses; growing demand for food as population rises; water-intensive crops (rice, cotton, sugarcane) dominant; virtual water concept — food exports carry embedded water.",
      },
      {
        q: "Describe the impacts of drought on people and the environment. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four: crop failure leading to food insecurity; livestock deaths; reduction in river/reservoir levels; water rationing; increased food prices; health impacts — malnutrition, dehydration; migration from affected areas; wildfires; soil erosion and desertification; economic losses to farmers; aquifer depletion when groundwater heavily relied on.",
      },
      {
        q: "Describe two small-scale, sustainable approaches to improving water supply in LICs. [4 marks]",
        marks: 4,
        markScheme: "1 mark for each approach + 1 mark development. Any two from: rainwater harvesting — collects and stores rainwater, low-cost, community controlled; fog nets — fine mesh collects fog/cloud moisture in coastal highlands (e.g. Chile, Morocco); check dams — small barriers slow runoff, recharge groundwater; hand pumps/boreholes — WaterAid projects, locally maintained; rope pumps — simple low-tech pumps used in Central America; biosand filters — clean drinking water at household level.",
      },
      {
        q: "Explain how groundwater (aquifer) abstraction can cause problems if not managed sustainably. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: overpumping lowers the water table; aquifer depletion — takes thousands of years to recharge; subsidence — ground sinks as water removed (e.g. Mexico City, Jakarta); saltwater intrusion into coastal aquifers when freshwater depleted; wells run dry — rural communities lose water source; unsustainable for irrigation (e.g. Ogallala Aquifer, USA).",
      },
      {
        q: "Draw and label a diagram to show how a dam and reservoir system provides water supply to a city. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: river shown flowing into reservoir; dam labelled; pipeline from reservoir to water treatment works; treatment works labelled; distribution network to city/consumers. All four stages must be labelled.",
      },
      {
        q: "Assess whether large-scale water transfer schemes are an effective solution to water insecurity. [8 marks]",
        marks: 8,
        markScheme: "Level 1 (1–2): simple statements. Level 2 (3–4): describes some aspects with limited evaluation. Level 3 (5–6): explains effectiveness and problems with evidence. Level 4 (7–8): balanced evaluation with named examples, weighs effectiveness against alternatives, reaches a justified conclusion. Effective: China SNWT moves vast volumes, relieves northern deficit; established technology. Problems: extremely expensive; disrupts river ecosystems; political tensions (cross-boundary); may encourage wasteful use; does not address demand management; disproportionate impacts on communities near diversion. Alternatives: demand management, desalination, efficiency. Conclusion must weigh evidence.",
      },
      {
        q: "Explain how climate change is likely to worsen water insecurity in many parts of the world. [6 marks]",
        marks: 6,
        markScheme: "Level 1 (1–2): simple statement. Level 2 (3–4): explains how climate change affects water with some development. Level 3 (5–6): detailed explanation with multiple mechanisms and examples. Mechanisms: changing precipitation patterns — wet areas wetter, dry areas drier; glacier melt — short-term increase in meltwater then long-term loss (Himalayas supply 2 billion people); more extreme droughts; increased evaporation rates; sea level rise contaminating coastal aquifers; shifting monsoon timing; more intense rainfall events cause runoff not infiltration. Examples from specific regions.",
      },
      {
        q: "Describe the role of virtual water in the global trade of food and water security. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four: virtual water is the water embedded in/used to produce traded goods; 1 kg of beef requires ~15,000 litres; 1 kg of wheat ~1,300 litres; countries import water-intensive goods effectively importing water; water-scarce countries can conserve water by importing food; Jordan imports 80%+ of food — imports virtual water; allows water redistribution through trade; concern: water-exporting LICs may deplete their own resources.",
      },
      {
        q: "Suggest why water insecurity disproportionately affects women and girls in LICs. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: women and girls are traditionally responsible for water collection in many LIC communities; walk hours per day to fetch water — miss school/work; physical labour causes health problems; time poverty reduces economic and educational opportunities; sexual violence risk at water sources; women have less political power to demand water investment. UN data: women spend 200 million hours per day collecting water.",
      },
      {
        q: "To what extent can sustainable management solve the global water crisis? [8 marks]",
        marks: 8,
        markScheme: "Level 1 (1–2): simple statements. Level 2 (3–4): describes some strategies with limited evaluation. Level 3 (5–6): evaluates sustainable approaches and their limitations. Level 4 (7–8): compares sustainable with large-scale approaches, considers equity and feasibility, reaches a justified conclusion. Sustainable approaches: drip irrigation, rainwater harvesting, WaterAid, check dams, water metering, recycling greywater. Effective in local contexts but: scale — cannot supply billions alone; relies on funding and political will; inequity — HICs implement faster; climate change undermines gains. Large-scale: dams and transfers provide volume but have costs. Conclusion: sustainable management necessary but insufficient alone — needs combination of approaches and global cooperation.",
      },
      {
        q: "Describe the impacts of water insecurity on food production in a named region. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four (referencing a named region): Sub-Saharan Africa/Middle East/SW USA/Aral Sea region — reduced river flow reduces irrigation; crop yields decline; farmers cannot afford alternative water sources; land abandonment; food prices rise; malnutrition increases; people migrate from rural to urban areas; loss of traditional farming practices; Aral Sea — fishing industry collapsed, 60,000 fishing jobs lost, dust storms from dried seabed harm crops. Accept any relevant named region with accurate detail.",
      },
      {
        q: "Explain why water is considered a geopolitical resource and give an example of water-related tension between countries. [4 marks]",
        marks: 4,
        markScheme: "1 mark for geopolitical: water crosses national boundaries, is scarce, is essential for life and economic activity — makes it a resource over which countries compete and negotiate politically. 1 mark for any example + 1 mark explanation + 1 mark development: Nile Basin — Ethiopia vs Egypt over Grand Ethiopian Renaissance Dam; Colorado River — US states + Mexico dispute; Indus Waters Treaty between India and Pakistan (1960 — landmark agreement); Mekong River — China dams affecting downstream SE Asia.",
      },
      {
        q: "Draw and annotate a diagram to show how a household rainwater harvesting system works. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: roof acting as the catchment surface; gutters and downpipes carrying water; filter or first-flush device removing debris; storage tank; outlet/tap for uses such as washing, flushing toilets or irrigation (drinking only after treatment). Diagram must be labelled.",
      },
      {
        q: "Define the term 'water stress'. [1 mark]",
        marks: 1,
        markScheme: "1 mark for: when annual water supply is less than 1,700 m³ per person, or when demand for water exceeds the available amount during a certain period.",
      },
      {
        q: "Explain two physical causes of water insecurity. [4 marks]",
        marks: 4,
        markScheme: "1 mark per cause + 1 mark development. Any two: climate — low rainfall in arid regions (e.g. Middle East, North Africa); climate change reducing glacier meltwater affecting river supplies (e.g. Himalayas feed 2 billion people); geology — lack of permeable rock means limited groundwater storage; salt water incursion where coastal aquifers over-pumped; drought cycles; evaporation rates exceeding precipitation.",
      },
      {
        q: "Describe the environmental impacts of dam construction. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four: reservoir flooding destroys habitats (e.g. Three Gorges flooded 1,300 archaeological sites and thousands of hectares); disruption to fish migration (e.g. salmon); sediment trapped behind dam, downstream erosion of deltas (e.g. Aswan Dam on Nile delta); changes to river flow regime; methane released from rotting vegetation in reservoirs; water quality changes (stratification, eutrophication); potentially triggers earthquakes.",
      },
      {
        q: "Suggest how rainwater harvesting can improve water security at a local scale. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: collects rainwater from roofs/surfaces into storage tanks; provides water for domestic use (washing, cooking, irrigation) during dry periods; reduces pressure on groundwater and piped supplies; appropriate low-cost technology for LICs; e.g. WaterAid projects in Africa/South Asia; reduces flood risk by capturing runoff.",
      },
      {
        q: "Compare hard and soft engineering approaches to water management. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: hard engineering involves large-scale built structures (dams, reservoirs, pipelines, desalination plants, water transfer schemes); expensive, high-impact; provides large volumes of water; soft engineering uses sustainable/small-scale approaches (rainwater harvesting, drip irrigation, xeriscaping, greywater recycling, water metering); low cost, community-led; emphasises demand management rather than supply increase; hard engineering often better for national scale, soft better for local/household scale.",
      },
      {
        q: "Assess the sustainability of water transfer schemes as a solution to water insecurity. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Evaluates benefits and drawbacks with specific examples, reaches supported conclusion on sustainability. Level 2 (3–4 marks): Describes with some evaluation. Level 1 (1–2 marks): Basic points. Accept: benefits — redistributes water from surplus to deficit areas (e.g. China South-North Water Transfer Project; California State Water Project); supports agriculture/industry in arid regions; Spanish Tagus-Segura transfer. Drawbacks: high energy cost (pumping against gravity — high carbon footprint); damages donor region ecosystems; expensive to build/maintain; political disputes between regions; climate change may reduce donor region supply; encourages continued over-use in deficit region. Conclusion: effective short-term but not truly sustainable — must combine with demand management.",
      },
      {
        q: "Explain how climate change is affecting global water security. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: rising temperatures increase evaporation — reducing surface water and soil moisture; changing rainfall patterns — some areas wetter, others drier (e.g. Mediterranean drying); glacier retreat reduces meltwater for rivers (Himalayas, Andes) — threatens water for ~2 billion people; rising sea levels cause saltwater intrusion into coastal aquifers; more extreme droughts and floods; increasing competition for water between countries/sectors.",
      },
      {
        q: "Explain the factors affecting water availability. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: climate; geology (aquifers); pollution of supply; over-abstraction (Aral Sea); limited infrastructure; poverty.",
      },
      {
        q: "Evaluate a named large-scale water transfer scheme. [6 marks]",
        marks: 6,
        markScheme: "Level marked, e.g. China's SNWTP: supplies over 100 million people, majority of Beijing's water, aquifers recovering vs cost $60–80bn+, 330,000 relocated, reduced Han River flow, pollution risk, energy use. Judgement required.",
      },
      {
        q: "Describe a local scheme in an LIC or NEE to increase sustainable water supplies. [4 marks]",
        marks: 4,
        markScheme: "Named scheme, e.g. Wakel River Basin, Rajasthan: semi-arid, falling groundwater; taankas collect rainwater; johads hold back run-off to recharge groundwater; drip irrigation; community management.",
      },
      {
        q: "Explain why a named local water scheme is sustainable. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point, e.g. Wakel: low-cost traditional technology; built and maintained by community; works with natural processes; recharges rather than depletes groundwater.",
      },
    ],
  },
  '2.7': {
    name: "Energy",
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
        markScheme: "1 mark per point: HICs consume most per person (USA several times global average); China, USA, India largest total consumers; ~700 million (mostly sub-Saharan Africa) have no electricity.",
      },
      {
        q: "Explain two reasons for increasing global energy consumption. [4 marks]",
        marks: 4,
        markScheme: "2 x 2 marks: economic development (1) — industrialisation in NEEs (China's use tripled 2000–20) (1); population growth (1); technology/more devices (1); rising living standards (1).",
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
        q: "Describe a named local renewable energy scheme in an LIC or NEE. [4 marks]",
        marks: 4,
        markScheme: "Named scheme, e.g. Chambamontera micro-hydro, Peru: remote Andes community; Practical Action; stream diverted through pipe to turbine; powers ~80 homes, school, health post.",
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
        q: "Compare the energy use of an HIC and an LIC. [4 marks]",
        marks: 4,
        markScheme: "1 mark per comparative point: HICs use far more per person; HICs mostly electricity/fossil fuels, LICs more traditional fuels (wood, dung); many in LICs lack electricity; HIC use for transport, appliances, industry.",
      },
      {
        q: "To what extent can renewable energy meet future global energy demand? [9 marks]",
        marks: 9,
        markScheme: "Level 3 (7–9): detailed assessment — falling costs, growth of wind/solar, local schemes vs intermittency, storage, cost of grids, rising demand from NEEs, fossil fuel dependence; clear judgement. Level 2: some assessment. Level 1: basic.",
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
        q: "Suggest why many LICs have low energy consumption. [3 marks]",
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
    ],
  },
  '3.1': {
    name: "Issue Evaluation and Fieldwork",
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
        q: "Describe what the Paper 3 pre-release booklet contains. [2 marks]",
        marks: 2,
        markScheme: "1 mark per point: resources about a geographical issue — maps, graphs, photos, data, text; issued 12 weeks before the exam.",
      },
      {
        q: "Explain how you would prepare for the issue evaluation section of Paper 3. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: annotate figures; learn key terms and location; identify stakeholders and views; link to topics studied; practise decision questions.",
      },
      {
        q: "Explain why identifying stakeholders is important in issue evaluation. [2 marks]",
        marks: 2,
        markScheme: "1 mark: different groups affected in different ways/have conflicting views; 1 mark: helps evaluate who benefits and loses from each option.",
      },
      {
        q: "Explain what is meant by a \"sustainable\" option in issue evaluation. [2 marks]",
        marks: 2,
        markScheme: "1 mark: meets the needs of present without compromising future generations; 1 mark: balances economic, social and environmental factors.",
      },
      {
        q: "Explain how you would plan and structure an answer to the 9-mark decision question in the issue evaluation section. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6): explains stating a clear choice, justifying it with evidence from several figures, considers economic, social and environmental impacts, compares with alternatives, acknowledges disadvantages. Level 2 (3–4): some relevant points about structure and evidence. Level 1 (1–2): basic ideas. Remember 3 SPaG marks.",
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
    ],
  },
};

if (typeof window !== 'undefined') window.GEOGRAPHY_AQA_GCSE_PRACTICE = GEOGRAPHY_AQA_GCSE_PRACTICE;
