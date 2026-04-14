/*
 * AQA A-Level Geography — Written / Short-Answer Question Bank
 * 10 questions per topic: 4 green + 4 amber + 2 red
 * tier: 'green' (state/identify 2-3 marks), 'amber' (explain/describe 4-5 marks), 'red' (evaluate/discuss 6-8 marks)
 * Student self-marks against model answer: Full / Partial / Missed
 * diagram: true on any question requiring students to draw/sketch/annotate diagrams, maps, graphs, cross-sections.
 */

const GEOGRAPHY_AQA_WRITTEN = {

  /* ─────────────────────────────────────────────────────────── 1.1 */
  '1.1': {
    green: [
      {
        q: 'State two inputs to a drainage basin water cycle.',
        marks: 2, tier: 'green',
        modelAnswer: `• Precipitation — rain, snow, sleet, or hail entering the basin from the atmosphere (1).\n• Solar energy — drives evaporation and transpiration processes within the basin (1).`
      },
      {
        q: 'State two ways in which carbon is transferred from the atmosphere to the biosphere.',
        marks: 2, tier: 'green',
        modelAnswer: `• Photosynthesis — plants absorb atmospheric CO₂ and convert it into organic compounds (1).\n• Absorption by the oceans — dissolved CO₂ is used by marine organisms (1).`
      },
      {
        q: 'Identify three stores in the water cycle.',
        marks: 3, tier: 'green',
        modelAnswer: `• Oceans — the largest store of water on Earth (1).\n• Ice sheets and glaciers — the largest store of freshwater (1).\n• Groundwater — water stored in pores and cracks in rock below the water table (1).\n(Also accept: atmosphere, soil moisture, vegetation, rivers/lakes.)`
      },
      {
        q: 'State what is meant by a positive feedback loop, with an example from the carbon cycle.',
        marks: 2, tier: 'green',
        modelAnswer: `A positive feedback loop is where an initial change triggers further change in the same direction (1). Example: rising temperatures thaw permafrost, releasing methane, which causes further warming (1).`
      },
    ],
    amber: [
      {
        q: 'Explain how deforestation affects both the water and carbon cycles in a tropical drainage basin.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Reduced interception — without the canopy, more rain reaches the ground directly, increasing surface runoff and reducing infiltration (1).\n• Reduced transpiration — fewer trees mean less water returned to the atmosphere, potentially reducing local rainfall (1).\n• Carbon release — burning or decomposition of felled trees releases stored carbon into the atmosphere as CO₂ (1).\n• Loss of carbon sink — the forest no longer absorbs CO₂ through photosynthesis, increasing atmospheric concentrations (1).`
      },
      {
        q: 'Describe and explain the shape of a storm hydrograph for an urbanised drainage basin.',
        marks: 4, tier: 'amber',
        diagram: true,
        modelAnswer: `• Short lag time — impermeable surfaces (tarmac, concrete) prevent infiltration, so water reaches the river quickly via surface runoff and drains (1).\n• Steep rising limb — rapid transfer of water means discharge increases quickly after rainfall (1).\n• High peak discharge — most rainfall becomes surface runoff rather than being stored, increasing the volume reaching the channel (1).\n• Steep falling/recession limb — little water is stored in the ground to sustain base flow, so discharge falls quickly after the storm (1).\n(Sketch should show a narrow, peaked hydrograph compared to a broader rural one.)`
      },
      {
        q: 'Explain the role of the oceans in the global carbon cycle.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The oceans are the largest active carbon sink, absorbing approximately 25-30% of anthropogenic CO₂ emissions (1).\n• CO₂ dissolves in surface water and is used by phytoplankton in photosynthesis, forming the biological pump (1).\n• Thermohaline circulation transfers dissolved carbon to the deep ocean, storing it for centuries (1).\n• Marine organisms incorporate carbon into shells and skeletons; when they die, carbon settles to the ocean floor and may form sedimentary rock over geological time (1).`
      },
      {
        q: 'Explain how human activity has altered the balance of the global carbon cycle since industrialisation.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Burning fossil fuels — transfers carbon from geological stores to the atmosphere as CO₂, at rates far exceeding natural processes (1).\n• Deforestation — reduces the capacity of the biosphere to absorb CO₂, while also releasing stored carbon through burning and decomposition (1).\n• Agriculture — rice paddies and livestock produce methane; ploughing releases soil carbon (1).\n• Cement production — releases CO₂ from heating limestone (1).\n• The net effect is a significant increase in atmospheric CO₂ from ~280 ppm pre-industrial to over 420 ppm, driving climate change (1).`
      },
    ],
    red: [
      {
        q: 'Evaluate the effectiveness of different strategies to manage the carbon cycle and reduce atmospheric CO₂.',
        marks: 6, tier: 'red',
        modelAnswer: `• Afforestation — creates new carbon sinks but is limited by land availability, takes decades to mature, and is vulnerable to fire and disease (1).\n• Carbon capture and storage (CCS) — can reduce emissions from power stations but is expensive, energy-intensive, and not yet proven at scale (1).\n• Renewable energy transition — reduces fossil fuel emissions but faces challenges of intermittency, infrastructure costs, and political resistance (1).\n• International agreements (Paris Agreement) — set targets but enforcement is weak and compliance varies (1).\n• Reducing consumption — effective but politically difficult and requires global cooperation (1).\n• Conclusion: no single strategy is sufficient; a combination is needed, but the scale and urgency of the challenge mean current efforts are likely insufficient (1).`
      },
      {
        q: 'To what extent is the water cycle a closed system at the global scale? Discuss with reference to human impacts.',
        marks: 6, tier: 'red',
        modelAnswer: `• At the global scale, the water cycle is considered closed because no significant water enters or leaves the Earth system — the total volume remains constant (1).\n• Energy from the sun drives transfers between stores (evaporation, precipitation), but the matter (water) stays within the system boundary (1).\n• However, human activities alter the distribution between stores — dams redistribute storage; abstraction depletes aquifers; urbanisation changes runoff patterns (1).\n• At the drainage basin scale, the system is open — water enters as precipitation and leaves as river discharge or evapotranspiration (1).\n• Climate change alters the balance of stores — ice melt transfers water from the cryosphere to the oceans, changing sea levels (1).\n• Conclusion: while technically closed globally (no water lost to space), human disruption of stores and flows means the cycle's behaviour is increasingly modified by anthropogenic activity (1).`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 1.2 */
  '1.2': {
    green: [
      {
        q: 'State three types of coastal erosion.',
        marks: 3, tier: 'green',
        modelAnswer: `• Hydraulic action — the force of waves compressing air into rock cracks, widening them (1).\n• Abrasion — rocks carried by waves scraping against cliff faces and shore platforms (1).\n• Attrition — rocks carried by waves colliding with each other, becoming smaller and rounder (1).\n(Also accept: corrosion/solution — dissolving of rock by weak acids in seawater.)`
      },
      {
        q: 'State two differences between constructive and destructive waves.',
        marks: 2, tier: 'green',
        modelAnswer: `• Constructive waves have a strong swash and weak backwash, leading to net deposition; destructive waves have a weak swash and strong backwash, leading to net erosion (1).\n• Constructive waves are low, long, and less frequent (6-8 per minute); destructive waves are tall, steep, and more frequent (10-14 per minute) (1).`
      },
      {
        q: 'State what is meant by longshore drift.',
        marks: 2, tier: 'green',
        modelAnswer: `Longshore drift is the movement of sediment along a coastline (1). Waves approach at an angle determined by the prevailing wind, carrying sediment up the beach at that angle (swash), while backwash pulls material straight back down under gravity, resulting in a zigzag movement along the shore (1).`
      },
      {
        q: 'Identify two features of coastal deposition and state where they form.',
        marks: 2, tier: 'green',
        modelAnswer: `• Spit — forms where the coastline changes direction; longshore drift continues to deposit sediment into open water (1).\n• Bar — forms when a spit grows across a bay, connecting two headlands and enclosing a lagoon (1).\n(Also accept: tombolo, beach, salt marsh.)`
      },
    ],
    amber: [
      {
        q: 'Explain the formation of caves, arches, stacks, and stumps from a headland.',
        marks: 4, tier: 'amber',
        diagram: true,
        modelAnswer: `• Weaknesses (joints/faults) in the headland are attacked by hydraulic action and abrasion, forming a cave (1).\n• Continued erosion enlarges the cave until it breaks through the headland to form an arch (1).\n• The roof of the arch is undercut and weakened by erosion and weathering until it collapses, leaving an isolated column of rock — a stack (1).\n• The stack is further eroded at its base and eventually collapses to form a stump, visible only at low tide (1).\n(Diagram should show the sequence from headland → cave → arch → stack → stump.)`
      },
      {
        q: 'Explain why wave refraction concentrates erosion on headlands and deposition in bays.',
        marks: 4, tier: 'amber',
        modelAnswer: `• As waves approach an irregular coastline, they reach the shallower water near headlands first (1).\n• Friction with the seabed slows the wave, causing it to bend (refract) and wrap around the headland (1).\n• This concentrates wave energy on the headland from multiple angles, increasing erosion (1).\n• In the bays between headlands, wave energy is spread over a wider area, reducing its power and allowing deposition to occur, forming beaches (1).`
      },
      {
        q: 'Describe how a coastal sediment cell operates as a system.',
        marks: 4, tier: 'amber',
        modelAnswer: `• A sediment cell is a self-contained section of coast where sediment movement is largely independent of adjacent cells (1).\n• Inputs include sediment from cliff erosion, river deposition, and offshore sources (1).\n• Transfers include longshore drift, tidal currents, and wind transport moving sediment within the cell (1).\n• Outputs include sediment deposited in deep water, permanently stored in landforms, or lost to adjacent cells; the balance between inputs and outputs determines whether the coast is eroding or accreting (1).`
      },
      {
        q: 'Explain the factors that influence the rate of coastal cliff recession.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Rock type — weak rocks like clay erode much faster than resistant rocks like granite (1).\n• Geological structure — joints, faults, and bedding planes provide weaknesses exploited by erosion (1).\n• Wave energy — longer fetch, stronger winds, and exposure to prevailing waves increase erosion rates (1).\n• Sub-aerial processes — weathering and mass movement weaken cliff faces, making them more vulnerable to wave attack (1).\n• Human activity — coastal defences, drainage, and vegetation removal can accelerate or reduce recession (1).`
      },
    ],
    red: [
      {
        q: 'Evaluate the advantages and disadvantages of hard and soft engineering approaches to coastal management.',
        marks: 6, tier: 'red',
        modelAnswer: `Hard engineering:\n• Sea walls provide effective protection but are expensive (£5000-10000/m), can be visually intrusive, and reflect wave energy (1).\n• Groynes trap sediment locally but starve downdrift areas of material, transferring the problem (1).\n• Rock armour absorbs wave energy but is expensive to transport and can be visually unattractive (1).\n\nSoft engineering:\n• Beach nourishment maintains natural appearance and tourism value but requires repeated replenishment and is costly over time (1).\n• Managed retreat works with natural processes and creates habitats but involves loss of land and is politically contentious for affected residents (1).\n• Conclusion: neither approach alone is ideal; integrated coastal zone management combining both, with consideration of the whole sediment cell, offers the most sustainable approach (1).`
      },
      {
        q: 'To what extent is climate change the greatest threat to UK coastal landscapes?',
        marks: 6, tier: 'red',
        modelAnswer: `Arguments for:\n• Sea level rise increases flood risk and accelerates cliff erosion by raising the base of wave attack (1).\n• Increased storm frequency and intensity may increase wave energy and damage from storm surges (1).\n• Changed precipitation patterns may increase sub-aerial weathering and mass movement on coastal cliffs (1).\n\nArguments against:\n• Geological factors (rock type and structure) have always been the primary control on coastal erosion rates (1).\n• Human activities (coastal development, sediment extraction, hard engineering) significantly alter natural coastal processes (1).\n• Conclusion: climate change is a significant and growing threat but operates alongside, and often exacerbates, existing geological and human factors — its relative importance varies along different stretches of coast (1).`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 1.3 */
  '1.3': {
    green: [
      {
        q: 'State two primary effects and two secondary effects of a volcanic eruption.',
        marks: 2, tier: 'green',
        modelAnswer: `Primary effects: pyroclastic flows destroying settlements; lava flows burying land; ash fall collapsing roofs (any 1 for 1 mark).\nSecondary effects: lahars from melting snow/ice mixing with ash; crop failure from ash covering farmland; respiratory illness from ash inhalation; disruption to air travel (any 1 for 1 mark).`
      },
      {
        q: 'State the difference between the focus and epicentre of an earthquake.',
        marks: 2, tier: 'green',
        modelAnswer: `• The focus is the point within the Earth's crust where the earthquake originates — where rock fractures and energy is released (1).\n• The epicentre is the point on the Earth's surface directly above the focus — typically where shaking is strongest (1).`
      },
      {
        q: 'State three conditions necessary for the formation of a tropical cyclone.',
        marks: 3, tier: 'green',
        modelAnswer: `• Sea surface temperatures of at least 26.5°C to a depth of ~60m to provide energy through evaporation (1).\n• Sufficient distance from the equator (typically >5° latitude) so that the Coriolis effect can cause rotation (1).\n• Low wind shear in the upper atmosphere to allow the storm structure to develop vertically (1).\n(Also accept: atmospheric instability, moist air, pre-existing low-pressure disturbance.)`
      },
      {
        q: 'State what is meant by the hazard risk equation.',
        marks: 2, tier: 'green',
        modelAnswer: `Risk = Hazard × Vulnerability ÷ Capacity to cope (1). This means that risk is greater where hazards are severe, populations are vulnerable, and the ability to prepare and respond is limited (1).`
      },
    ],
    amber: [
      {
        q: 'Explain why a magnitude 7 earthquake may cause more deaths in a developing country than in a developed country.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Building quality — developing countries may lack earthquake-resistant building codes, leading to structural collapse (1).\n• Infrastructure — limited emergency services, hospitals, and transport networks slow rescue and recovery (1).\n• Preparedness — less investment in education, early warning systems, and emergency drills means populations are less prepared (1).\n• Economic resources — fewer financial reserves for recovery and reconstruction prolong the disaster's impact (1).\n(Also accept: higher population density in vulnerable areas, corruption, governance issues.)`
      },
      {
        q: 'Explain how the Pressure and Release (PAR) model links vulnerability to disasters.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The PAR model shows that disasters occur when a natural hazard impacts vulnerable people (1).\n• Root causes — underlying political and economic structures (e.g. poverty, inequality, poor governance) create vulnerability (1).\n• Dynamic pressures — urbanisation, deforestation, population growth, and lack of training increase exposure (1).\n• Unsafe conditions — dangerous locations, fragile buildings, low income, and limited preparedness result from these pressures; when the hazard strikes, these conditions turn the event into a disaster (1).`
      },
      {
        q: 'Describe the characteristics and hazards associated with different types of plate boundary.',
        marks: 5, tier: 'amber',
        diagram: true,
        modelAnswer: `• Constructive (divergent) — plates move apart; basaltic magma rises to fill the gap; produces shield volcanoes with effusive eruptions and shallow earthquakes (1).\n• Destructive (convergent) — oceanic plate subducts beneath continental; produces explosive composite volcanoes, deep ocean trenches, and powerful earthquakes at various depths (1).\n• Collision — two continental plates collide; no subduction, so no volcanism; produces fold mountains and powerful shallow earthquakes (1).\n• Conservative (transform) — plates slide past each other; no volcanism; produces shallow but powerful earthquakes (e.g. San Andreas Fault) (1).\n• Hazards: earthquakes, tsunamis, volcanic eruptions (pyroclastic flows, lahars, ash fall, lava flows) depending on boundary type (1).\n(Diagram should show cross-sections of at least two boundary types.)`
      },
      {
        q: 'Explain how monitoring and prediction can reduce the impact of volcanic eruptions.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Seismometers detect increased earthquake activity beneath the volcano, indicating magma movement (1).\n• Tiltmeters and GPS measure ground deformation as the magma chamber swells (1).\n• Gas monitoring detects increases in SO₂ and CO₂ emissions, which often precede eruptions (1).\n• These data allow authorities to issue warnings and evacuate populations, reducing casualties — though the exact timing and scale of eruptions remain difficult to predict precisely (1).`
      },
    ],
    red: [
      {
        q: 'Evaluate the view that human factors are more important than physical factors in determining the impact of natural hazards.',
        marks: 8, tier: 'red',
        modelAnswer: `Arguments for human factors being more important:\n• Development level — wealthier countries invest in resistant infrastructure, early warning systems, and emergency services, dramatically reducing deaths (1).\n• Governance — effective land-use planning, building codes, and corruption-free institutions reduce vulnerability (1).\n• Preparedness — education and training programmes mean populations respond effectively to warnings (1).\n\nArguments for physical factors:\n• Magnitude — extremely powerful events (e.g. 2011 Japan tsunami, magnitude 9) overwhelm even the best-prepared societies (1).\n• Location — proximity to population centres and depth of earthquake focus significantly affect impact (1).\n• Frequency — areas experiencing frequent hazards may develop resilience, while rare but catastrophic events catch populations off guard (1).\n\nConclusion:\n• Both factors interact — the 2010 Haiti earthquake (magnitude 7, ~230,000 deaths) vs the 2011 Christchurch earthquake (magnitude 6.3, 185 deaths) illustrates how human factors amplify or reduce physical impacts (1).\n• Neither set of factors can be considered in isolation; the hazard risk equation (Risk = Hazard × Vulnerability / Capacity) demonstrates their interdependence (1).`
      },
      {
        q: 'Discuss the extent to which it is possible to live safely in areas at risk from tectonic hazards.',
        marks: 6, tier: 'red',
        modelAnswer: `Arguments that safe living is possible:\n• Earthquake-resistant building design (base isolation, cross-bracing) significantly reduces structural collapse and deaths (1).\n• Monitoring technology allows volcanic eruptions to be forecast with increasing accuracy, enabling evacuation (1).\n• Education, drills, and early warning systems (e.g. Japan tsunami warning system) save lives (1).\n\nArguments that risk cannot be eliminated:\n• Earthquakes remain unpredictable in timing and precise location, limiting evacuation options (1).\n• Mega-events can overwhelm any preparation — the 2011 Japan tsunami breached flood defences designed for smaller events (1).\n• Many people live in hazardous areas out of economic necessity, cultural attachment, or lack of alternatives — the choice is not always rational or free (1).\n\n(Credit any well-supported evaluative conclusion.)`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 2.1 */
  '2.1': {
    green: [
      {
        q: 'State two differences between insider and outsider perspectives on a place.',
        marks: 2, tier: 'green',
        modelAnswer: `• Insiders have direct, personal, everyday experience of a place and emotional attachment; outsiders experience it secondarily through media, books, or brief visits (1).\n• Insiders may have more nuanced and detailed knowledge; outsiders may rely on stereotypes or simplified representations (1).`
      },
      {
        q: 'State what is meant by "sense of place".',
        marks: 2, tier: 'green',
        modelAnswer: `Sense of place refers to the subjective, personal feelings, meanings, and emotions that individuals or communities associate with a particular location (1). It is shaped by personal experiences, memories, culture, and the physical characteristics of the environment (1).`
      },
      {
        q: 'Identify three factors that shape the identity of a place.',
        marks: 3, tier: 'green',
        modelAnswer: `• Physical geography — landscape, climate, and natural features (1).\n• Socio-economic characteristics — employment, income levels, housing, and services (1).\n• Cultural factors — ethnicity, religion, traditions, and community networks (1).\n(Also accept: historical events, architecture, political governance, media representation, demographic profile.)`
      },
      {
        q: 'State two types of quantitative data and two types of qualitative data used in place studies.',
        marks: 2, tier: 'green',
        modelAnswer: `Quantitative: census population data; average house prices; unemployment rates; crime statistics (any 2 for 1 mark).\nQualitative: interviews with residents; photographs; artistic representations; oral histories; personal diaries (any 2 for 1 mark).`
      },
    ],
    amber: [
      {
        q: 'Explain how gentrification changes the character and identity of an urban area.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Physical improvement — buildings are renovated, new cafes, shops, and galleries open, changing the visual appearance of the area (1).\n• Demographic change — wealthier, often younger professionals move in, changing the social profile of the neighbourhood (1).\n• Economic change — property values and rents rise, potentially displacing lower-income residents who can no longer afford to live there (1).\n• Cultural identity shift — the area's character shifts from its original identity (e.g. working-class, multicultural) towards a more affluent one, which may be celebrated or contested by different groups (1).`
      },
      {
        q: 'Explain how media representations can create positive or negative perceptions of a place.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Positive media coverage (e.g. highlighting cultural events, scenic beauty, investment) can attract tourists, businesses, and new residents, boosting the local economy (1).\n• Negative media portrayals (e.g. focusing on crime, deprivation, anti-social behaviour) can stigmatise places, discouraging investment and reinforcing stereotypes (1).\n• Social media amplifies representations — viral images or reviews can rapidly shift perceptions for better or worse (1).\n• Media representations are selective and may not reflect the lived reality of residents, creating a gap between external perception and internal experience (1).`
      },
      {
        q: 'Explain why different groups of people may have contrasting experiences of the same place.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Age — younger people may value nightlife and entertainment; older people may prioritise quiet, safety, and services (1).\n• Gender — women may feel less safe in certain areas at night; men may use different spaces more frequently (1).\n• Ethnicity — ethnic minority groups may experience racism or find cultural community, shaping their attachment to a place differently (1).\n• Socio-economic status — wealthy residents access different services and live in different areas than those in deprivation, experiencing contrasting realities in the same city (1).\n• Length of residence — long-term residents have deep attachment and knowledge; newcomers may experience excitement or alienation (1).`
      },
      {
        q: 'Describe how globalisation has changed the character of a named or located place you have studied.',
        marks: 4, tier: 'amber',
        modelAnswer: `(Credit any valid named/located example. Generic answer structure:)\n• Economic globalisation — international investment, chain stores replacing independent shops, new employment patterns (1).\n• Cultural globalisation — increased ethnic diversity, new cuisines, languages, and cultural practices visible in the streetscape (1).\n• Physical change — new buildings, infrastructure, or regeneration projects linked to global investment (1).\n• Social change — migration patterns altering demographic profile, new communities forming alongside existing ones (1).`
      },
    ],
    red: [
      {
        q: 'Evaluate the extent to which globalisation has created "placelessness" in the UK.',
        marks: 6, tier: 'red',
        modelAnswer: `Arguments for placelessness:\n• Identical chain stores and branded environments on high streets across the UK create "clone towns" (1).\n• Standardised architecture, shopping centres, and commercial spaces reduce distinctiveness (1).\n• Edward Relph argued that mass culture and globalisation erode authentic sense of place (1).\n\nArguments against:\n• Local communities actively resist placelessness through markets, festivals, heritage conservation, and independent businesses (1).\n• Doreen Massey's "progressive sense of place" argues that global connections can enrich rather than destroy local identity (1).\n• Many places maintain strong distinctive identities rooted in history, landscape, accent, and local culture despite global influences (1).\n\n(Credit any well-supported evaluative conclusion.)`
      },
      {
        q: 'Discuss the extent to which quantitative data alone can accurately represent the character of a place.',
        marks: 6, tier: 'red',
        modelAnswer: `Strengths of quantitative data:\n• Census data provides objective, comparable information on population, employment, and housing (1).\n• Statistics enable spatial analysis, mapping, and identification of trends over time (1).\n• Quantitative data is replicable and can be statistically tested (1).\n\nLimitations:\n• Numbers cannot capture the emotional, cultural, and experiential dimensions of a place — the "feel" and "atmosphere" (1).\n• Qualitative methods (interviews, photographs, oral histories) reveal diverse lived experiences and contested meanings that statistics miss (1).\n• Conclusion: quantitative data provides an essential foundation but only gives a partial picture; combining it with qualitative approaches creates a more holistic and authentic understanding of place character (1).`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 2.2 */
  '2.2': {
    green: [
      {
        q: 'State two characteristics of the Central Business District (CBD).',
        marks: 2, tier: 'green',
        modelAnswer: `• Highest land values and building density, with many high-rise buildings and offices (1).\n• Major retail, commercial, and entertainment functions, with high pedestrian and traffic flows during working hours (1).`
      },
      {
        q: 'State what is meant by the "urban heat island" effect.',
        marks: 2, tier: 'green',
        modelAnswer: `The urban heat island effect is the phenomenon where urban areas are significantly warmer than surrounding rural areas (1). This is caused by heat-absorbing dark surfaces, heat released by vehicles, industry, and buildings, reduced vegetation, and the canyon effect of buildings trapping heat (1).`
      },
      {
        q: 'Identify three differences between brownfield and greenfield development sites.',
        marks: 3, tier: 'green',
        modelAnswer: `• Brownfield sites are previously developed land; greenfield sites have not been built on before (1).\n• Brownfield sites may require expensive decontamination; greenfield sites are generally cheaper to prepare (1).\n• Brownfield development reuses existing infrastructure and reduces urban sprawl; greenfield development consumes countryside and may increase car dependency (1).`
      },
      {
        q: 'State two causes of urban sprawl.',
        marks: 2, tier: 'green',
        modelAnswer: `• Population growth and increasing demand for housing, particularly larger properties with gardens (1).\n• Improved transport links (motorways, rail) making commuting from the urban fringe viable (1).\n(Also accept: preference for suburban living, land availability, planning policy.)`
      },
    ],
    amber: [
      {
        q: 'Explain how sustainable urban drainage systems (SUDS) can reduce flood risk in cities.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Permeable paving allows rainwater to infiltrate into the ground rather than running off impermeable surfaces (1).\n• Green roofs absorb rainfall, reducing and slowing runoff reaching drains and rivers (1).\n• Swales and retention ponds store excess water temporarily, releasing it slowly to prevent overwhelming drainage systems (1).\n• By mimicking natural drainage processes, SUDS reduce peak flow in urban rivers and drains, lowering flood risk while also filtering pollutants and creating habitats (1).`
      },
      {
        q: 'Explain how the Burgess and Hoyt models describe urban land use patterns.',
        marks: 4, tier: 'amber',
        diagram: true,
        modelAnswer: `• Burgess concentric zone model — cities grow outward from the CBD in concentric rings: inner zone of transition (industry/poor housing), working-class housing, middle-class suburbs, and commuter zone (1).\n• This model assumes equal access in all directions and land values decreasing with distance from the CBD (1).\n• Hoyt sector model — land use develops in sectors (wedges) along transport routes rather than concentric rings; industry follows railways and rivers, while high-income housing extends along preferred routes (1).\n• Both models are simplifications of complex reality and were developed for early 20th-century US/UK cities; modern cities are more varied and polycentric (1).`
      },
      {
        q: 'Explain how urban regeneration can transform a post-industrial area.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Physical transformation — derelict factories and warehouses are demolished or converted into new housing, offices, and cultural venues (1).\n• Economic change — new industries (creative, tech, service sector) replace manufacturing, creating different employment opportunities (1).\n• Social improvement — better housing, public spaces, and services can improve quality of life for residents (1).\n• Flagship projects — iconic buildings or developments (e.g. London Olympic Park, Salford Quays) attract investment and media attention (1).\n• However, regeneration can lead to gentrification, displacing original communities and widening inequality rather than addressing it (1).`
      },
      {
        q: 'Explain how urban areas can reduce their environmental impact through waste management strategies.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Recycling and composting reduce the volume of waste sent to landfill, conserving resources and reducing methane emissions (1).\n• Waste-to-energy incineration can generate electricity while reducing landfill volume, though air pollution must be controlled (1).\n• Reducing consumption and promoting reuse through circular economy initiatives decreases total waste generation (1).\n• Improved collection systems, public education, and producer responsibility schemes (e.g. packaging levies) drive behaviour change and increase recycling rates (1).`
      },
    ],
    red: [
      {
        q: 'Evaluate the extent to which urban regeneration schemes in the UK have successfully reduced socio-economic inequality.',
        marks: 8, tier: 'red',
        modelAnswer: `Arguments for success:\n• Physical environments are improved — new housing, public spaces, and infrastructure replace derelict areas (1).\n• New employment opportunities are created in construction, retail, and service industries (1).\n• Flagship projects like Salford Quays and London Docklands have attracted billions in investment and thousands of jobs (1).\n\nArguments against:\n• Jobs created may not match the skills of existing residents, who may be displaced by rising property values (1).\n• Gentrification can widen inequality — new residents are often wealthier, while original communities are priced out (1).\n• Benefits may be concentrated spatially, with adjacent deprived areas seeing little improvement — a "trickle-down" effect often does not materialise (1).\n• Regeneration is often driven by property developers whose primary motive is profit, not equity (1).\n\nConclusion: regeneration improves physical environments but has a mixed record on inequality — without targeted social policies, it risks reinforcing rather than reducing deprivation (1).`
      },
      {
        q: 'Discuss whether sustainable urban living is achievable in major cities.',
        marks: 6, tier: 'red',
        modelAnswer: `Arguments for achievability:\n• Green transport (cycling, electric buses, metro systems), compact design, and mixed-use development can significantly reduce emissions (1).\n• Green infrastructure (parks, green roofs, SUDS) manages water, reduces heat islands, and supports biodiversity (1).\n• Examples like Freiburg (Germany) and Curitiba (Brazil) demonstrate that sustainable design is possible with political will (1).\n\nArguments against:\n• Major cities face legacy infrastructure, car dependency, and political constraints that slow change (1).\n• Growing populations increase resource demand, waste, and congestion despite efficiency gains (1).\n• True sustainability may be incompatible with the consumption-driven economic models that underpin urban economies (1).\n\n(Credit any well-supported evaluative conclusion.)`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 2.3 */
  '2.3': {
    green: [
      {
        q: 'State two differences between Malthus and Boserup theories of population and resources.',
        marks: 2, tier: 'green',
        modelAnswer: `• Malthus argued that population grows faster than food supply, leading inevitably to famine and population checks; Boserup argued that population growth stimulates innovation to increase food production (1).\n• Malthus saw resources as a fixed limit; Boserup saw human ingenuity as capable of expanding the resource base (1).`
      },
      {
        q: 'State what is meant by "carrying capacity".',
        marks: 2, tier: 'green',
        modelAnswer: `Carrying capacity is the maximum population that an environment or area can sustain indefinitely (1) given the available resources, technology, and waste-absorbing capacity (1).`
      },
      {
        q: 'Identify three characteristics of Stage 1 of the Demographic Transition Model.',
        marks: 3, tier: 'green',
        modelAnswer: `• High birth rate — due to lack of contraception, high infant mortality, and need for child labour (1).\n• High death rate — due to disease, famine, poor sanitation, and lack of medical care (1).\n• Low and fluctuating total population — births and deaths roughly balance with occasional crises (1).`
      },
      {
        q: 'State what is meant by the "dependency ratio".',
        marks: 2, tier: 'green',
        modelAnswer: `The dependency ratio is the proportion of the population that is not of working age (under 15 and over 65) relative to the working-age population (15-64) (1). A high ratio means fewer workers supporting more dependents, putting pressure on services and the economy (1).`
      },
    ],
    amber: [
      {
        q: 'Explain how population growth affects food security in developing countries.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Increased demand — more people require more food, straining agricultural systems that may already be at capacity (1).\n• Land pressure — population growth drives expansion into marginal lands, leading to deforestation, soil degradation, and reduced long-term productivity (1).\n• Water stress — growing populations increase demand for irrigation, depleting aquifers and rivers (1).\n• Economic constraints — developing countries may lack the capital to invest in agricultural technology, storage, and distribution infrastructure needed to feed growing populations (1).`
      },
      {
        q: 'Explain the causes and consequences of an ageing population in a developed country.',
        marks: 5, tier: 'amber',
        diagram: true,
        modelAnswer: `Causes:\n• Declining birth rates — due to contraception, career focus, and high living costs (1).\n• Increasing life expectancy — due to improved healthcare, nutrition, and living standards (1).\n(Population pyramid should show a narrow base and wide top.)\n\nConsequences:\n• Increased healthcare and social care costs — elderly populations require more medical services and residential care (1).\n• Higher pension costs — a smaller working-age population must fund a growing number of retirees (1).\n• Labour shortages — fewer workers may reduce economic output unless offset by immigration, automation, or raising the retirement age (1).`
      },
      {
        q: 'Explain how the ecological footprint measures the sustainability of human activity.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The ecological footprint measures the area of biologically productive land and water required to produce the resources consumed and absorb the waste generated by a population (1).\n• It is compared against biocapacity — the Earth's available biological productive area — to determine sustainability (1).\n• If a population's ecological footprint exceeds available biocapacity, it is living unsustainably and depleting natural capital (1).\n• Wealthy nations typically have much larger per-capita footprints than developing nations, highlighting global inequality in resource consumption (1).`
      },
      {
        q: 'Explain the environmental consequences of intensive agriculture on the global carbon and water cycles.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Carbon emissions — machinery, fertiliser production, and livestock release significant greenhouse gases (CO₂, methane, nitrous oxide) (1).\n• Soil carbon loss — ploughing exposes soil organic matter to oxidation, releasing stored carbon (1).\n• Water cycle disruption — irrigation depletes rivers and aquifers; deforestation for farmland reduces transpiration and changes local rainfall patterns (1).\n• Water pollution — fertiliser runoff causes eutrophication, while pesticides contaminate groundwater and surface water (1).`
      },
    ],
    red: [
      {
        q: 'Evaluate the extent to which Malthusian theory remains relevant to understanding 21st-century population-resource challenges.',
        marks: 8, tier: 'red',
        modelAnswer: `Arguments for relevance:\n• Global population continues to grow (approaching 10 billion by 2050), increasing pressure on finite resources (1).\n• Climate change threatens food production, echoing Malthus's warnings about resource limits (1).\n• Water scarcity, soil degradation, and biodiversity loss suggest environmental limits are being approached (1).\n\nArguments against:\n• The Green Revolution and technological innovation have vastly increased food production, as Boserup predicted (1).\n• Global famine has not occurred on the scale Malthus predicted — distribution problems, not production, cause most food insecurity (1).\n• Demographic transition shows that birth rates fall with development, meaning population growth is slowing in most regions (1).\n\nConclusion:\n• Malthus underestimated human innovation but correctly identified that resources are finite — the question is whether technology can keep pace with consumption (1).\n• The concept is most relevant when considering environmental limits (climate, biodiversity) rather than food production alone (1).`
      },
      {
        q: 'Discuss whether population policies or technological solutions are more effective in addressing the population-resource balance.',
        marks: 6, tier: 'red',
        modelAnswer: `Population policies:\n• Anti-natalist policies (e.g. China's one-child policy) can reduce population growth but raise ethical concerns about reproductive rights and coercion (1).\n• Education and empowerment of women is the most effective and ethical way to reduce birth rates voluntarily (1).\n• Policies take decades to have a significant demographic effect (1).\n\nTechnological solutions:\n• GM crops, precision agriculture, desalination, and renewable energy can expand the resource base (1).\n• Technology addresses symptoms (production) rather than root causes (consumption and inequality) (1).\n• Technological solutions may have unintended environmental consequences (1).\n\n(Credit any well-supported evaluative conclusion comparing the two approaches.)`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 2.4 */
  '2.4': {
    green: [
      {
        q: 'State two differences between renewable and non-renewable energy resources.',
        marks: 2, tier: 'green',
        modelAnswer: `• Renewable resources (e.g. solar, wind, hydro) are naturally replenished and will not run out; non-renewable resources (e.g. coal, oil, gas) are finite and will eventually be exhausted (1).\n• Renewable resources generally produce little or no greenhouse gas emissions during operation; non-renewable fossil fuels release significant CO₂ when burned (1).`
      },
      {
        q: 'State what is meant by "energy security".',
        marks: 2, tier: 'green',
        modelAnswer: `Energy security is the uninterrupted availability of energy sources at an affordable price (1). A country has energy security when it can reliably access sufficient energy to meet current and future demand without excessive dependence on imports or vulnerability to supply disruptions (1).`
      },
      {
        q: 'Identify three factors that affect the global distribution of water resources.',
        marks: 3, tier: 'green',
        modelAnswer: `• Climate — rainfall patterns determine water availability; arid regions receive far less precipitation (1).\n• Physical geography — mountains, aquifer geology, and river systems affect where water is stored and accessible (1).\n• Population and demand — high population density increases demand relative to supply (1).\n(Also accept: economic development, infrastructure, pollution, seasonal variation.)`
      },
      {
        q: 'State what is meant by "virtual water" and give one example.',
        marks: 2, tier: 'green',
        modelAnswer: `Virtual water is the total volume of freshwater used to produce a good or service throughout its supply chain (1). Example: producing 1 kg of beef requires approximately 15,000 litres of virtual water for feed crops, drinking water, and processing (1).`
      },
    ],
    amber: [
      {
        q: 'Explain how geopolitical factors affect energy security.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Concentration of supply — major oil and gas reserves are concentrated in politically unstable regions (Middle East, Russia), creating supply risk (1).\n• Political tensions — sanctions, conflicts, and trade disputes can disrupt supply or restrict access (e.g. EU sanctions on Russian gas after 2022) (1).\n• Transit dependency — pipelines and shipping routes pass through chokepoints (e.g. Strait of Hormuz) that could be disrupted (1).\n• Resource nationalism — governments may restrict exports or nationalise energy industries, reducing availability for importing countries (1).`
      },
      {
        q: 'Explain the environmental impacts of fossil fuel extraction and use.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Climate change — burning fossil fuels releases CO₂ and other greenhouse gases, driving global warming (1).\n• Air pollution — combustion produces particulates, SO₂, and NOx, causing respiratory disease and acid rain (1).\n• Water pollution — oil spills, fracking fluid contamination, and coal mine runoff pollute waterways and groundwater (1).\n• Habitat destruction — mining, drilling, and pipeline construction destroy ecosystems and displace wildlife (1).\n• Landscape scarring — open-cast mining and oil extraction infrastructure permanently alter landscapes (1).`
      },
      {
        q: 'Explain the challenges facing the global transition from fossil fuels to renewable energy.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Intermittency — solar and wind energy are weather-dependent; large-scale storage technology is still developing and expensive (1).\n• Infrastructure — existing energy systems (grids, vehicles, heating) are designed around fossil fuels; transitioning requires massive investment (1).\n• Economic and political resistance — fossil fuel industries employ millions and have significant political influence; transition threatens jobs and profits (1).\n• Scale — global energy demand is enormous and growing; renewables currently supply only a fraction, making full replacement a multi-decade challenge (1).`
      },
      {
        q: 'Explain the concept of the "resource curse" with reference to a named example.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The resource curse (or paradox of plenty) describes how countries rich in natural resources often experience slower economic growth, greater inequality, and weaker governance (1).\n• Revenue from resource extraction can lead to corruption, as elites capture wealth rather than investing in development (1).\n• Resource wealth can cause "Dutch disease" — the resource sector crowds out other industries by inflating the currency, making exports uncompetitive (1).\n• Example: Nigeria — despite vast oil wealth, much of the population lives in poverty due to corruption, environmental degradation in the Niger Delta, and dependence on oil revenues with little economic diversification (1).`
      },
    ],
    red: [
      {
        q: 'Evaluate the extent to which renewable energy can achieve global energy security.',
        marks: 6, tier: 'red',
        modelAnswer: `Arguments for:\n• Renewables are inexhaustible and domestically available, reducing dependence on imports and geopolitical risk (1).\n• Costs have fallen dramatically — solar and wind are now cheaper than fossil fuels in many regions (1).\n• They produce negligible greenhouse gas emissions during operation, addressing climate change (1).\n\nArguments against:\n• Intermittency and storage challenges mean renewables alone cannot currently provide reliable baseload power (1).\n• The scale of transition required is enormous — existing infrastructure, political interests, and investment patterns create inertia (1).\n• Some regions lack suitable renewable resources or the economic capacity to invest in the transition (1).\n\n(Credit any well-supported evaluative conclusion acknowledging that a diversified energy mix is likely needed.)`
      },
      {
        q: 'Discuss whether resource scarcity will inevitably lead to conflict in the 21st century.',
        marks: 6, tier: 'red',
        modelAnswer: `Arguments for inevitable conflict:\n• Competition for water (e.g. Nile Basin, Middle East), energy, and minerals is intensifying as demand grows (1).\n• Climate change is reducing resource availability in already-stressed regions, increasing tensions (1).\n• Historical precedent — resource competition has contributed to many conflicts (1).\n\nArguments against:\n• International cooperation, trade agreements, and institutions (UN, WTO) provide frameworks for peaceful resource sharing (1).\n• Technology can reduce scarcity through efficiency, substitution, and new sources (e.g. desalination, renewables) (1).\n• Many resource-stressed regions have resolved disputes peacefully through negotiation (e.g. Mekong River Commission) (1).\n\n(Credit any well-supported evaluative conclusion.)`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 3.1 */
  '3.1': {
    green: [
      {
        q: 'State two advantages of systematic sampling over random sampling.',
        marks: 2, tier: 'green',
        modelAnswer: `• Systematic sampling ensures even coverage of the study area by selecting samples at regular intervals (1).\n• It is straightforward to carry out in the field and ensures no areas are over- or under-represented (1).`
      },
      {
        q: 'State what is meant by a "hypothesis" in a geographical investigation.',
        marks: 2, tier: 'green',
        modelAnswer: `A hypothesis is a testable statement or prediction about the expected outcome of an investigation (1). It should be clearly linked to geographical theory and state the expected relationship between variables (1).`
      },
      {
        q: 'Identify three types of data presentation technique used in geographical investigations.',
        marks: 3, tier: 'green',
        modelAnswer: `• Choropleth maps — using shading to show spatial variation in data (1).\n• Scatter graphs — showing the relationship between two variables (1).\n• Bar charts — comparing quantities across categories (1).\n(Also accept: line graphs, pie charts, proportional symbols, GIS maps, box plots, histograms.)`
      },
      {
        q: 'State two ways a student can ensure the accuracy of their primary data collection.',
        marks: 2, tier: 'green',
        modelAnswer: `• Calibrating equipment correctly before use and following standardised measurement procedures (1).\n• Taking repeated measurements at each sample point to reduce the impact of individual errors (1).\n(Also accept: using appropriate equipment, recording data carefully, conducting a pilot study.)`
      },
    ],
    amber: [
      {
        q: 'Explain how the choice of sampling strategy can affect the reliability of fieldwork conclusions.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Random sampling avoids researcher bias in site selection but may miss important variations or cluster in unrepresentative areas (1).\n• Systematic sampling provides even coverage but may coincide with patterns that skew results (e.g. sampling every 10m on a regularly-spaced feature) (1).\n• Stratified sampling ensures all sub-groups or zones are proportionally represented, improving representativeness (1).\n• An inappropriate sampling strategy can produce unrepresentative data, leading to inaccurate conclusions that do not reflect the true pattern — selecting the right strategy for the investigation is critical (1).`
      },
      {
        q: 'Explain the purpose and application of the Spearman rank correlation coefficient in geographical fieldwork.',
        marks: 4, tier: 'amber',
        modelAnswer: `• It measures the strength and direction of the relationship between two ranked variables, producing a value between -1 and +1 (1).\n• Values close to +1 indicate a strong positive correlation; close to -1 indicate a strong negative correlation; close to 0 indicate no correlation (1).\n• It is used to test hypotheses about relationships (e.g. does distance from the coast correlate with temperature?) (1).\n• The result is compared against critical values at a chosen significance level (e.g. 0.05) to determine whether the relationship is statistically significant or could have occurred by chance (1).`
      },
      {
        q: 'Explain why evaluating the limitations of a fieldwork investigation is important.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Acknowledging limitations demonstrates understanding of what the data can and cannot show, adding credibility to conclusions (1).\n• It helps identify potential sources of error (equipment, timing, sample size) that may have affected results (1).\n• Evaluation shows critical thinking about methodology and suggests how the investigation could be improved (1).\n• It allows the reader to judge the reliability and validity of findings, and places conclusions in appropriate context rather than over-claiming (1).`
      },
      {
        q: 'Explain how GIS can enhance the presentation and analysis of geographical fieldwork data.',
        marks: 4, tier: 'amber',
        modelAnswer: `• GIS allows multiple data layers to be overlaid on digital maps, revealing spatial patterns and relationships that may not be visible in individual datasets (1).\n• Data can be presented as choropleth maps, dot distribution maps, or heat maps, making patterns clear and visually engaging (1).\n• GIS enables spatial analysis such as proximity analysis, density mapping, and buffering to test hypotheses (1).\n• It allows comparison with secondary data (e.g. census data, land use data) on the same platform, enriching the investigation (1).`
      },
    ],
    red: [
      {
        q: 'Evaluate the extent to which fieldwork evidence can reliably support geographical hypotheses.',
        marks: 6, tier: 'red',
        modelAnswer: `Strengths:\n• First-hand data provides direct evidence of geographical processes in specific locations (1).\n• Systematic methods and statistical testing can demonstrate significant relationships (1).\n• Combining quantitative and qualitative approaches strengthens the evidence base (1).\n\nLimitations:\n• Small sample sizes, limited time, and restricted access may produce unrepresentative data (1).\n• Researcher bias in site selection, data collection, and interpretation can distort findings (1).\n• Conclusions from a single study location cannot necessarily be generalised to wider processes (1).\n\n(Credit any well-supported evaluative conclusion acknowledging that fieldwork provides valuable but necessarily partial evidence.)`
      },
      {
        q: 'Discuss the ethical challenges of conducting human geography fieldwork and how they can be addressed.',
        marks: 6, tier: 'red',
        modelAnswer: `Challenges:\n• Informed consent — participants must understand and agree to involvement, but power dynamics (e.g. student-adult) may complicate this (1).\n• Privacy — questionnaires and interviews may reveal personal or sensitive information that must be protected (1).\n• Representation — the researcher's own background and biases shape what questions are asked and how responses are interpreted (1).\n\nMitigation strategies:\n• Clear consent forms explaining the purpose of research and how data will be used and stored (1).\n• Anonymisation of all data and responsible storage in compliance with data protection principles (1).\n• Reflexivity — the researcher should reflect on how their own positionality affects the investigation and acknowledge this in their write-up (1).`
      },
    ],
  },

};
