/*
 * Eduqas GCSE Geography — Written / Short-Answer Question Bank
 * 10 questions per topic: 4 green + 4 amber + 2 red
 * tier: 'green' (state/identify 2-3 marks), 'amber' (explain/describe 4-5 marks), 'red' (evaluate/discuss 6-8 marks)
 * Student self-marks against model answer: Full / Partial / Missed
 * diagram: true on any question requiring students to draw/sketch/annotate diagrams, maps, graphs, cross-sections.
 */

const GEOGRAPHY_EDUQAS_WRITTEN = {

  /* ─────────────────────────────────────────────────────────── 1.1 Coastal Landscapes */
  '1.1': {
    green: [
      {
        q: 'State two processes of coastal erosion.',
        marks: 2, tier: 'green',
        modelAnswer: `• Hydraulic action — the force of waves compressing air into cracks in rocks, breaking them apart (1).\n• Abrasion — waves hurl sediment against the cliff face, wearing it away like sandpaper (1).\n(Also accept: attrition — rocks colliding and becoming smaller and rounder; corrosion/solution — weak acids in seawater dissolving rock such as limestone.)`
      },
      {
        q: 'Identify two landforms created by coastal deposition.',
        marks: 2, tier: 'green',
        modelAnswer: `• Beach — an accumulation of sand or shingle deposited between the low-tide and high-tide marks (1).\n• Spit — a long narrow ridge of sand or shingle extending from the coast, formed where longshore drift continues past a change in the coastline direction (1).\n(Also accept: bar, tombolo, sand dune system.)`
      },
      {
        q: 'State what is meant by longshore drift.',
        marks: 2, tier: 'green',
        modelAnswer: `Longshore drift is the movement of sediment along a coastline (1), caused by waves approaching the shore at an angle — swash carries material up the beach at the wave angle, while backwash returns it perpendicular to the shore due to gravity, gradually moving material along the coast (1).`
      },
      {
        q: 'Name and describe one hard engineering coastal management strategy.',
        marks: 2, tier: 'green',
        modelAnswer: `• Sea wall — a concrete or rock barrier built at the base of cliffs or at the top of a beach to reflect wave energy and prevent erosion (1). It protects settlements directly behind it but can be expensive (£5,000–£10,000 per metre) and may increase erosion elsewhere (1).\n(Also accept: groynes, rock armour/rip-rap, revetments.)`
      },
    ],
    amber: [
      {
        q: 'Explain how a headland and bay are formed.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Where a coastline has alternating bands of hard and soft rock running perpendicular to the sea, differential erosion occurs (1).\n• Soft rock (e.g. clay, sandstone) is eroded more quickly than hard rock (e.g. chalk, granite), forming indentations called bays (1).\n• The harder rock is left protruding into the sea, forming a headland (1).\n• Headlands become exposed to more wave energy from three sides, concentrating erosion, while bays accumulate deposited sediment forming beaches (1).`
      },
      {
        q: 'Explain the formation of a wave-cut platform. You may use a diagram.',
        marks: 4, tier: 'amber',
        diagram: true,
        modelAnswer: `• Waves attack the base of a cliff between the high and low tide marks, creating a wave-cut notch through hydraulic action and abrasion (1).\n• The notch deepens, undermining the cliff above until it becomes unsupported and collapses (1).\n• The collapsed material is gradually removed by further wave action (1).\n• As the cliff retreats, a gently sloping rocky platform is left exposed at low tide — the wave-cut platform (1).\n(Diagram should show: original cliff line, wave-cut notch, collapsed cliff debris, retreating cliff, and the flat wave-cut platform extending seaward.)`
      },
      {
        q: 'Describe and explain the formation of a spit.',
        marks: 5, tier: 'amber',
        modelAnswer: `• A spit forms where longshore drift transports sediment along a coastline and the coastline suddenly changes direction — for example, at an estuary mouth (1).\n• Sediment continues to be deposited in the same direction as longshore drift, building up a ridge of sand or shingle that extends into the sea (1).\n• The end of the spit may be curved — called a recurved end — due to waves refracting around the spit tip and secondary currents (1).\n• Deposition continues to extend the spit, but it cannot grow across a river estuary because river currents carry sediment away (1).\n• A sheltered lagoon or salt marsh often develops on the landward side of the spit where conditions are calmer (1).\n(Example: Spurn Head, Humber estuary; Blakeney Point, Norfolk.)`
      },
      {
        q: 'Explain why some coastlines are managed using a "managed retreat" or "do nothing" approach.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Managed retreat (coastal realignment) involves allowing the sea to flood low-value land, creating new intertidal habitats such as salt marshes, which act as natural buffers against wave energy (1).\n• It is significantly cheaper than hard engineering — saving millions in long-term maintenance costs for sea walls (1).\n• In some areas the land is of low economic value (e.g. agricultural fields), so the cost of defending it exceeds its worth — a "do nothing" approach is adopted (1).\n• Managed retreat also provides environmental benefits — new habitats for wildlife and carbon storage in salt marshes (1).\n(Example: Medmerry, West Sussex — largest managed retreat scheme in Europe, creating 183 hectares of new intertidal habitat.)`
      },
    ],
    red: [
      {
        q: 'Evaluate the effectiveness of hard engineering strategies to manage coastal erosion. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `• Sea walls are effective at protecting settlements directly behind them and reflecting wave energy, but they are very expensive (up to £10,000/m) and can cause increased erosion at their ends ("terminal groyne syndrome") (1).\n• Groynes trap sediment and build up beaches, which are effective natural buffers; however, they starve beaches down-drift of sediment, causing erosion elsewhere — e.g. Mappleton, Yorkshire (1).\n• Rock armour (rip-rap) is relatively cheap and dissipates wave energy effectively, but it is visually intrusive and can be moved by extreme storms (1).\n• Hard engineering strategies often just transfer the erosion problem elsewhere rather than solving it, creating conflicts between communities (1).\n• Hard structures require ongoing maintenance and have a finite lifespan — sea walls may last 25–50 years before needing replacement, incurring further costs (1).\n• Overall, hard engineering is effective in the short term for protecting high-value assets (towns, infrastructure), but is unsustainable long-term and may not be cost-effective for lower-value coastlines — soft engineering and managed retreat are increasingly preferred (1).`
      },
      {
        q: '"Soft engineering is always a better approach than hard engineering for managing coastlines." Discuss this statement. [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `Arguments in favour:\n• Beach nourishment works with natural processes rather than against them — adding sand to replenish beaches provides a natural buffer, is visually attractive and benefits tourism (1).\n• Dune stabilisation using marram grass is cheap, sustainable and creates valuable habitats (1).\n• Managed retreat is cost-effective and environmentally beneficial, especially for low-value agricultural land (e.g. Medmerry, Sussex — £28 million vs. £100 million+ for hard engineering over 100 years) (1).\n• Soft engineering addresses the cause of erosion rather than just its effects, creating more sustainable long-term solutions (1).\nArguments against:\n• Soft engineering is not always suitable — in high-value urban areas (e.g. Lyme Regis, Dorset), hard engineering such as sea walls is essential to protect homes and businesses (1).\n• Beach nourishment requires repeated applications and relies on a supply of suitable sediment, which may itself be costly to source and transport (1).\n• Managed retreat may be unacceptable to communities who face the loss of homes, farmland, and local heritage — social and political resistance is a major barrier (1).\nConclusion:\n• The best approach is often an integrated coastal management strategy combining both hard and soft engineering, tailored to the specific physical and human geography of each location; the statement is therefore an oversimplification (1).`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 1.2 River Landscapes */
  '1.2': {
    green: [
      {
        q: 'State two processes of river erosion.',
        marks: 2, tier: 'green',
        modelAnswer: `• Hydraulic action — the force of fast-flowing water loosening and dislodging particles from the river bed and banks (1).\n• Abrasion — the river uses its load of rocks and sediment to scrape and wear away the channel (1).\n(Also accept: attrition — particles in the load collide and break into smaller, rounder pieces; corrosion/solution — slightly acidic water dissolves rock such as limestone.)`
      },
      {
        q: 'Identify the four methods by which a river transports its load.',
        marks: 4, tier: 'green',
        modelAnswer: `• Traction — large boulders rolled along the river bed (1).\n• Saltation — medium-sized pebbles bounced along the river bed (1).\n• Suspension — fine silt and clay particles carried within the water (1).\n• Solution — minerals dissolved in the water and carried invisibly (1).`
      },
      {
        q: 'State what is meant by the long profile of a river.',
        marks: 2, tier: 'green',
        modelAnswer: `The long profile is a cross-section of a river from its source to its mouth showing how the gradient changes along its course (1). The gradient is steepest in the upper course and becomes progressively gentler towards the mouth, producing a concave curve — this is the graded profile (1).`
      },
      {
        q: 'Name one landform found in the upper course of a river and describe its appearance.',
        marks: 2, tier: 'green',
        modelAnswer: `• V-shaped valley — a narrow, steep-sided valley formed by vertical erosion cutting down into the bedrock; the sides are steep because mass movement supplies material to the river which carries it away (1).\n(Also accept: waterfall — a sudden, near-vertical drop in a river's course where it flows from hard to soft rock; interlocking spurs — ridges of harder rock that force the river to wind around them in the upper course.)\n(Second mark for a clear, accurate description of the chosen feature.) (1)`
      },
    ],
    amber: [
      {
        q: 'Explain the formation of a waterfall and gorge. You may use a diagram.',
        marks: 4, tier: 'amber',
        diagram: true,
        modelAnswer: `• A waterfall forms where a river flows from a band of hard rock onto softer rock; the softer rock is eroded more rapidly by hydraulic action and abrasion, creating a step in the river's profile (1).\n• The falling water creates a plunge pool at the base; hydraulic action and abrasion undercut the hard rock, forming an overhang (1).\n• Eventually the overhang collapses and the waterfall retreats upstream; over time, repeated collapse creates a steep-sided gorge (1).\n• The river continues to cut downwards and the gorge deepens as the waterfall retreats further upstream (1).\n(Diagram: hard caprock, soft rock beneath, plunge pool, overhang/undercutting, retreating waterfall, gorge left behind.)\n(Example: High Force, River Tees — retreated ~100 m over 10,000 years.)`
      },
      {
        q: 'Explain how a meander develops and may eventually form an ox-bow lake.',
        marks: 5, tier: 'amber',
        modelAnswer: `• In the lower course, the river flows over a gentle gradient; any slight bend causes the fastest flow (thalweg) to be deflected to the outside of the bend (1).\n• Erosion by hydraulic action and abrasion occurs on the outside of the bend, undercutting it to form a river cliff; the meander becomes more pronounced (1).\n• On the inside of the bend, water flows more slowly; reduced energy means deposition of sediment, forming a slip-off slope or point bar (1).\n• Over time, the meander neck narrows as both bends erode towards each other; during a flood, the river may break through the narrow neck, taking a more direct route (1).\n• The old meander bend is cut off from the main channel; deposition seals both ends, forming a crescent-shaped ox-bow lake (1).\n(Example: River Cuckmere, East Sussex; River Mississippi, USA.)`
      },
      {
        q: 'Describe and explain the changes in a river\'s characteristics from its source to its mouth.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Channel width and depth both increase downstream — discharge increases as more tributaries join; the larger channel has less friction relative to its volume (lower hydraulic radius), so the river flows more efficiently (1).\n• Velocity increases downstream despite a gentler gradient because friction is proportionally lower in the wider, deeper channel (1).\n• Sediment load decreases in size from the upper to lower course — attrition rounds and reduces particles over distance; fine silt and clay dominate in the lower course (1).\n• Erosion process changes from predominantly vertical (upper course) to lateral (lower course), widening the flood plain and creating meanders (1).`
      },
      {
        q: 'Explain how a flood plain is formed.',
        marks: 4, tier: 'amber',
        modelAnswer: `• A flood plain is the flat area of land either side of a river in its lower course, formed over thousands of years by a combination of erosion and deposition (1).\n• Lateral erosion by meanders widens the valley floor; as meanders migrate, they cut a broad, flat surface (1).\n• During floods, the river overtops its banks; velocity drops sharply beyond the channel, so the heaviest sediment is deposited first, forming levées along the banks; finer silt is deposited further across the flood plain (1).\n• Repeated flooding builds up a thick layer of fertile alluvium across the flood plain, making it agriculturally valuable (1).`
      },
    ],
    red: [
      {
        q: 'Evaluate the effectiveness of strategies used to manage river flooding. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `Hard engineering:\n• Dams and reservoirs control river flow by storing excess water, protecting settlements downstream (e.g. Kielder Reservoir, River North Tyne) but are very expensive, flood large areas of land, and disrupt river ecosystems and sediment supply (1).\n• Channelisation (straightening, deepening, lining with concrete) increases flow speed, protecting immediate areas — but transfers flood risk further downstream (1).\n• Flood walls and embankments protect urban areas effectively (e.g. Thames Barrier, London) but are costly and can give a false sense of security, encouraging development on flood plains (1).\nSoft engineering:\n• Flood plain zoning restricts development in high-risk areas — sustainable and cheap, but limits economic development and is often politically unpopular (1).\n• Afforestation in catchments increases interception and infiltration, reducing peak discharge — cheap and sustainable but takes decades to mature and requires large land areas (1).\nConclusion:\n• An integrated flood management approach combining hard and soft measures is most effective — hard engineering protects existing high-value assets; soft engineering reduces the risk at source. Context matters: dense urban areas may require hard engineering while rural catchments suit softer approaches (1).`
      },
      {
        q: '"Human activity is the main cause of river flooding." To what extent do you agree with this statement? [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `Human causes of flooding:\n• Urbanisation increases impermeable surfaces (roofs, tarmac), reducing infiltration and increasing surface runoff — lag time is shortened and peak discharge rises, increasing flood risk (e.g. Boscastle, 2004 — drainage unable to cope with rapid runoff) (1).\n• Deforestation removes trees that intercept rainfall and use water through transpiration; runoff reaches rivers faster and in greater volume (1).\n• Floodplain development removes natural storage — building on flood plains leaves nowhere for excess water to go (1).\n• Climate change (human-driven) is intensifying rainfall events, increasing frequency of extreme storms (1).\nPhysical causes:\n• Intense or prolonged rainfall — more precipitation than the drainage basin can absorb (e.g. River Severn floods, 2007 — weeks of above-average rainfall saturated catchment) (1).\n• Impermeable geology (clay, granite) naturally limits infiltration regardless of human activity (1).\n• Snowmelt and frozen ground in spring can cause rapid increases in discharge (1).\nConclusion:\n• Both physical and human factors cause flooding, and they often interact — a flood event may require a physical trigger (extreme rainfall) but human activity amplifies the impact. In many modern cases, human modification of drainage basins has significantly increased flood risk, so the statement has considerable merit; however, physical geography remains an important underlying control — a balanced conclusion is appropriate (1).`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 1.3 Glaciated Landscapes */
  '1.3': {
    green: [
      {
        q: 'State two processes by which glaciers erode the landscape.',
        marks: 2, tier: 'green',
        modelAnswer: `• Plucking — meltwater at the base or sides of a glacier freezes onto bedrock; as the glacier moves forward, it pulls blocks of rock away (1).\n• Abrasion — rock fragments embedded in the base of the glacier act like sandpaper, scratching and grinding the bedrock surface to produce a smooth, striated surface (1).`
      },
      {
        q: 'Identify two features of a glaciated upland landscape.',
        marks: 2, tier: 'green',
        modelAnswer: `• Corrie (cirque) — an armchair-shaped hollow with steep backwall and over-deepened basin, often containing a tarn (1).\n• Arête — a knife-edged ridge formed between two adjacent corries where freeze-thaw weathering and plucking have eroded the rock from both sides (1).\n(Also accept: pyramidal peak, U-shaped valley, hanging valley, ribbon lake, truncated spur, drumlin.)`
      },
      {
        q: 'State what is meant by a terminal moraine.',
        marks: 2, tier: 'green',
        modelAnswer: `A terminal moraine is a ridge of unsorted rock debris (till) deposited at the furthest extent of a glacier's advance (1). It marks the maximum point the glacier reached before it began to retreat or melt, and is typically a crescent-shaped mound of material bulldozed and dumped by the ice snout (1).`
      },
      {
        q: 'Name and describe one upland glacial erosion landform. You may use a diagram.',
        marks: 2, tier: 'green',
        diagram: true,
        modelAnswer: `• Corrie (cirque/cwm) — a steep-sided, armchair-shaped hollow with a concave back wall and an over-deepened rock basin, often containing a corrie lake (tarn) (1).\n• It forms on north-facing slopes (in the northern hemisphere) where snow accumulates, compresses into ice, and erodes through rotational sliding, plucking the back wall and abrading the floor (1).\n(Diagram should show: steep back wall, over-deepened basin, rock lip/threshold, tarn, direction of ice movement.)`
      },
    ],
    amber: [
      {
        q: 'Explain the formation of a corrie (cirque). You may use a diagram.',
        marks: 4, tier: 'amber',
        diagram: true,
        modelAnswer: `• Snow accumulates in a sheltered hollow on a hillside — typically a north or north-east facing slope in the northern hemisphere, where less solar radiation means snow persists (1).\n• Snow is compressed into firn and then glacial ice; the mass of ice begins to move downslope under gravity in a rotational manner (1).\n• Plucking steepens the back wall as ice freezes onto rock and pulls blocks away; abrasion deepens the floor of the hollow by the rock debris embedded in the ice (1).\n• A rock lip or threshold forms where the rotational movement deposits material; when the glacier melts, a tarn (corrie lake) may fill the over-deepened basin (1).\n(Diagram: show hollow with snow, back wall, rotational movement arrows, plucking at back wall, abrasion on floor, rock lip, tarn.)\n(Example: Cwm Idwal, Snowdonia, Wales.)`
      },
      {
        q: 'Explain the difference between a U-shaped valley and a V-shaped valley and explain how each is formed.',
        marks: 4, tier: 'amber',
        diagram: true,
        modelAnswer: `• A V-shaped valley has steep sides meeting at a narrow river channel at the bottom; it is formed by a river vertically eroding downwards into the rock, with the sides shaped by mass movement supplying material which the river removes (1).\n• A U-shaped valley (glacial trough) has near-vertical sides and a wide, flat floor; it is formed when a glacier occupies and modifies a pre-existing river valley through powerful abrasion and plucking on all sides (1).\n• The glacier erodes much more forcefully than a river because of its greater mass and basal debris — it removes the interlocking spurs, creating truncated spurs and widening the valley to the characteristic U shape (1).\n• After glaciation, a much smaller stream (misfit stream) may occupy the oversized valley floor, and tributary valleys may be left hanging high on the valley sides as hanging valleys (1).`
      },
      {
        q: 'Describe the characteristics and formation of drumlins.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Drumlins are smooth, elongated, egg-shaped hills of glacial till (unsorted sediment), typically 250–1000 m long and 10–50 m high (1).\n• They are found in clusters ("swarms") on lowland plains, with their steeper blunt end (stoss end) facing the direction from which the glacier came, and their tapering end (lee end) pointing in the direction of ice flow (1).\n• They form under active glacial ice when till is deposited and then moulded by the moving glacier — the exact mechanism is debated, but may involve deposition around a nucleus of harder rock or the reshaping of pre-existing till (1).\n• Drumlins indicate the former direction of ice flow; their presence suggests the glacier was actively depositing material (1).\n(Example: Vale of Eden, Cumbria; Central Lowlands of Scotland.)`
      },
      {
        q: 'Explain how glaciated upland areas provide opportunities for human activities.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Tourism — dramatic scenery (U-shaped valleys, arêtes, ribbon lakes) attracts millions of visitors for activities including hiking, climbing, and winter sports (e.g. Snowdonia National Park attracts over 4 million visitors per year) (1).\n• Hydroelectric power — ribbon lakes and steep-sided glacial valleys are ideal for HEP schemes; reservoirs are easily created behind natural features (e.g. Dinorwig power station, North Wales, uses glacial lake Marchlyn Mawr) (1).\n• Farming — glacial soils (till) on lowland areas can be fertile; valley floors provide level land for pastoral farming (1).\n• Water storage — glacially formed reservoirs provide drinking water for nearby cities (e.g. Thirlmere and Haweswater supply Manchester) (1).`
      },
    ],
    red: [
      {
        q: 'Evaluate the challenges and opportunities that glaciated landscapes present for people living and working in these areas. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `Opportunities:\n• Tourism is a major economic benefit — e.g. Snowdonia National Park generates over £600 million for the local economy; steep terrain supports skiing, hiking, and climbing industries (1).\n• HEP generation using glacially formed lakes and steep valleys provides sustainable energy — Dinorwig provides 1,800 MW of pumped-storage power (1).\n• Water reservoirs built in glacial valleys supply major cities — Thirlmere (Lake District) supplies Manchester (1).\nChallenges:\n• Remoteness and rugged terrain make infrastructure (roads, communications) expensive to build and maintain — communities can be cut off in winter (1).\n• Limited flat land restricts agriculture; thin, acidic soils on valley sides support only rough grazing (1).\n• Conflicts arise between tourism, conservation, and farming — footpath erosion, traffic congestion, and pressure on natural habitats are significant issues in national parks (1).\nConclusion:\n• Glaciated landscapes offer unique economic opportunities through tourism and energy but pose significant challenges for communities; careful management is needed to balance economic development with environmental conservation (1 for developed conclusion — not required for 6-mark response; credit all well-reasoned points).`
      },
      {
        q: '"Glacial deposition landforms are more important to human activity than glacial erosion landforms." Discuss. [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `Glacial deposition landforms and their importance:\n• Drumlins and moraines create fertile lowland landscapes — till soils support agriculture across large areas (e.g. Central Lowlands of Scotland) (1).\n• Outwash plains of sorted sands and gravels are quarried for construction material — economically important and widespread across many lowland areas (1).\n• Kettle holes (formed by melting ice blocks) create wetland habitats of conservation value (1).\n• Lowland depositional areas allow transport corridors and settlement that is impossible on steep upland terrain (1).\nGlacial erosion landforms and their importance:\n• U-shaped valleys, arêtes, and ribbon lakes attract enormous numbers of tourists — the scenic quality of upland glaciated areas drives major rural economies (e.g. Lake District, Switzerland) (1).\n• Ribbon lakes and steep glacial valleys are ideal for HEP, providing renewable energy (1).\n• Glacially deepened lake basins store freshwater in natural reservoirs, supplying major cities (1).\nConclusion:\n• Both types of landform are economically and socially important, but in different contexts — depositional landforms tend to be more important for agriculture and everyday settlement, while erosional landforms are crucial for tourism and energy; the statement is therefore an oversimplification. Overall importance depends heavily on regional context (1).`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 1.4 Weather and Climate */
  '1.4': {
    green: [
      {
        q: 'State two differences between weather and climate.',
        marks: 2, tier: 'green',
        modelAnswer: `• Weather is the short-term atmospheric conditions at a specific place and time (e.g. today's temperature or rainfall), while climate is the average atmospheric conditions over a long period — typically 30 years — for a region (1).\n• Weather changes from day to day and can be unpredictable; climate is a more consistent long-term pattern and is predictable within certain ranges (1).`
      },
      {
        q: 'Identify two characteristics of a depression (low pressure system) as it passes over the UK.',
        marks: 2, tier: 'green',
        modelAnswer: `• Cloud and rainfall — depressions bring frontal rain as warm, moist air rises over cold air at the warm and cold fronts (1).\n• Wind — low pressure draws in air from surrounding areas, creating strong, often south-westerly winds that increase as the depression approaches (1).\n(Also accept: falling pressure; changing wind direction; temperatures rising behind the warm front; temperatures falling behind the cold front.)`
      },
      {
        q: 'State what is meant by the urban heat island effect.',
        marks: 2, tier: 'green',
        modelAnswer: `The urban heat island effect is where city centres are significantly warmer than surrounding rural areas (1). This is caused by heat released from buildings, vehicles, and industry; the absorption and re-radiation of heat by dark surfaces like tarmac and concrete; and reduced vegetation, which would otherwise cool the air through transpiration (1).`
      },
      {
        q: 'Name the type of rainfall most common in upland areas of the UK and briefly explain how it forms.',
        marks: 2, tier: 'green',
        modelAnswer: `Relief (orographic) rainfall (1). Moist air from the sea is forced to rise over high ground — as it rises it cools, reaches dew point, and water vapour condenses into cloud and falls as rain on the windward side. Drier air descends on the leeward side (rain shadow) (1).`
      },
    ],
    amber: [
      {
        q: 'Explain the differences in climate between the north-west and south-east of the UK.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The north-west (e.g. Welsh/Scottish highlands) receives much more rainfall — typically 1,500–3,000 mm/year compared to 600–700 mm in the south-east — because prevailing south-westerly winds bring moist Atlantic air which rises over western mountains, causing relief rainfall (1).\n• The south-east is warmer — average summer temperatures 3–4°C higher than the north-west — because it is further south, receives more solar radiation at a higher angle, and is further from the cooling influence of the Atlantic (1).\n• The north-west experiences more cloud cover and fewer hours of sunshine annually; the south-east has more anticyclonic (high pressure) conditions bringing settled, sunny weather (1).\n• Winters in the north-west are milder than expected for the latitude due to the warming influence of the North Atlantic Drift (warm ocean current); the south-east has colder winters due to cold easterly winds from continental Europe (1).`
      },
      {
        q: 'Explain how a depression forms and the weather it brings to the UK.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Depressions form along the polar front, where cold polar air meets warm tropical air — the air masses do not mix, creating an unstable boundary (1).\n• A wave develops along the front; warm air rises above cold air (less dense), creating a zone of low pressure at the surface as air is removed from above (1).\n• The depression rotates anticlockwise (in the northern hemisphere) and the system deepens — a warm front (warm air advancing over cold) leads, followed by a cold front (cold air undercutting warm) (1).\n• Warm front: gradual thickening cloud (cirrus → stratus), steady rain and drizzle; warm sector brings milder temperatures and possibly clearer skies (1).\n• Cold front: towering cumulonimbus clouds, heavy rain, thunderstorms, then a rapid clearance with cooler temperatures and brighter conditions (1).`
      },
      {
        q: 'Describe and explain the causes and effects of one recent extreme weather event in the UK.',
        marks: 4, tier: 'amber',
        modelAnswer: `(Example: Storm Desmond, December 2015 / Winter flooding 2013-14 / UK heatwave August 2022 — credit any appropriate example.)\n• Storm Desmond (December 2015): caused by an unusually deep Atlantic depression tracking northwards over the UK, bringing record-breaking rainfall — 341 mm in 24 hours at Honister Pass, Cumbria (1).\n• Caused by a "weather bomb" (explosive cyclogenesis) linked to a strongly negative North Atlantic Oscillation, directing persistent Atlantic storms towards northern Britain (1).\n• Effects: severe flooding in Cumbria, Lancashire, and Yorkshire — 60,000 homes flooded; 500 km of railway line damaged; Carlisle cut off; damage estimated at £5 billion (1).\n• Long-term effects: disruption to businesses, homes rendered uninhabitable for months, mental health impacts on affected communities, and debate about the role of climate change in intensifying such events (1).`
      },
      {
        q: 'Explain why the UK\'s climate is described as temperate maritime.',
        marks: 4, tier: 'amber',
        modelAnswer: `• "Temperate" refers to the UK's moderate temperatures — winters are mild (rarely below -5°C in lowlands) and summers warm but rarely extreme (rarely above 30°C) compared to continental climates at similar latitudes (1).\n• "Maritime" refers to the strong influence of the surrounding seas — the North Atlantic Drift (warm ocean current) keeps temperatures milder than expected for 50–60°N latitude in winter (1).\n• The seas moderate temperature extremes — they warm slowly and cool slowly, keeping adjacent land temperatures mild. Continental interiors at similar latitudes (e.g. Moscow) experience far colder winters and hotter summers (1).\n• The proximity to the Atlantic means the UK receives frequent frontal rainfall throughout the year from depressions tracking in from the west, making the climate wet and cloudy — no clearly dry season (1).`
      },
    ],
    red: [
      {
        q: '"Climate change is the greatest threat to the UK\'s future weather patterns." Evaluate this statement. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `Evidence supporting the statement:\n• The UK has experienced a clear warming trend — UK average temperature has risen by approximately 1°C since the 1970s; 2022 saw the first temperature above 40°C recorded in the UK (Cambridge, 40.3°C) (1).\n• Extreme rainfall events are increasing in frequency and intensity — climate models project a 30% increase in extreme daily rainfall by the 2070s, increasing flood risk (1).\n• Drier summers are projected for southern England, threatening water supply and agriculture — the Environment Agency warns of water shortages by 2050 (1).\nCounterarguments:\n• The UK's weather has always been highly variable and extreme events are not new — attribution of individual events to climate change is complex and debated (1).\n• Natural variability (e.g. the North Atlantic Oscillation) continues to be a major driver of year-to-year changes in UK weather, and its future behaviour is uncertain (1).\nConclusion:\n• Climate change represents a significant and growing threat to UK weather patterns, particularly regarding increased flooding, heatwaves, and water stress; however, the UK's complex interaction of oceanic, atmospheric, and topographic factors means there remains significant uncertainty in projections. It is therefore the most pressing long-term threat, but natural variability remains important in the short term (1).`
      },
      {
        q: 'To what extent are people at risk from extreme weather events able to prepare for them? Refer to examples from both LICs/MICs and HICs in your answer. [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `HICs — greater capacity to prepare:\n• Early warning systems — the UK Met Office provides multi-day storm warnings, allowing evacuations and flood defences to be activated (e.g. Thames Barrier closed in advance of Storm Ciaran, 2023) (1).\n• Flood defences and infrastructure — sea walls, storm drains, and flood barriers protect urban areas; buildings are constructed to withstand extreme events (1).\n• Insurance and disaster recovery funding — HICs can afford insurance and government relief, enabling faster recovery (e.g. UK government flood recovery fund) (1).\nLICs/MICs — more limited capacity:\n• Bangladesh — regularly affected by tropical cyclones and river flooding; despite improvements (e.g. cyclone shelters, early warning systems reducing deaths significantly since the 1991 cyclone killed 138,000), millions remain vulnerable due to poverty and informal settlements in flood-prone delta (1).\n• In the Philippines (MIC), Typhoon Haiyan (2013) killed 6,300 despite warnings — evacuation was incomplete due to poor transport, low trust in authorities, and poverty preventing people leaving livelihoods (1).\n• Climate change is increasing risk faster than LIC adaptation capacity — SIDS (Small Island Developing States) face existential threats from sea-level rise (e.g. Maldives) with limited financial or technological resources (1).\nConclusion:\n• Preparation is possible but highly unequal — wealth is the most important factor determining the capacity to prepare. International aid (e.g. Green Climate Fund) attempts to close this gap, but significant disparities remain; the poorest communities remain most at risk despite some local adaptation measures (1).\nBalance/nuance: Even within HICs, the poorest communities are most vulnerable — e.g. New Orleans (Hurricane Katrina, 2005) showed that wealth inequality within a wealthy country can severely limit effective preparation (1).`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 1.5 Tropical Rainforests */
  '1.5': {
    green: [
      {
        q: 'State two characteristics of the tropical rainforest climate.',
        marks: 2, tier: 'green',
        modelAnswer: `• High temperatures throughout the year — typically 26–28°C with very little seasonal variation, as the equatorial location means the sun is always high in the sky (1).\n• High and reliable rainfall — typically 2,000 mm or more per year, falling throughout the year and often as convectional afternoon storms (1).`
      },
      {
        q: 'Identify two ways in which plants in the tropical rainforest are adapted to the environment.',
        marks: 2, tier: 'green',
        modelAnswer: `• Drip tips — leaves have pointed tips to shed heavy rainfall quickly, preventing the growth of algae and bacteria that would damage the leaf (1).\n• Buttress roots — large flared roots support the tall emergent trees and allow them to access nutrients from the thin surface soil (1).\n(Also accept: smooth bark to shed rain; waxy leaf surfaces; epiphytes growing on branches to reach light; lianas climbing towards the canopy.)`
      },
      {
        q: 'State two reasons why tropical rainforests are important at a global scale.',
        marks: 2, tier: 'green',
        modelAnswer: `• Carbon store — tropical rainforests store approximately 250 billion tonnes of carbon in their biomass and soils; they act as major carbon sinks, absorbing CO₂ and helping regulate global climate (1).\n• Biodiversity — they are home to over 50% of the world's species despite covering only around 6% of Earth's land surface, making them critical reservoirs of biodiversity (1).\n(Also accept: oxygen production; water cycle regulation; medicines derived from rainforest plants.)`
      },
      {
        q: 'Name and describe the layers of the tropical rainforest.',
        marks: 4, tier: 'green',
        modelAnswer: `• Emergent layer — tallest trees (40–60 m) rising above the main canopy, exposed to full sun and wind (1).\n• Canopy layer — dense, continuous layer of branches and leaves at ~20–30 m, intercepting most sunlight and rainfall (1).\n• Understorey — shade-tolerant shrubs and smaller trees below the canopy; little wind, high humidity (1).\n• Forest floor — very little light reaches here; decomposers rapidly recycle nutrients from dead organic matter; ground plants adapted to low light (1).`
      },
    ],
    amber: [
      {
        q: 'Explain how nutrients are cycled in the tropical rainforest ecosystem.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The nutrient cycle in the tropical rainforest is rapid and efficient — almost all nutrients are stored in the biomass (living plants) rather than the soil (1).\n• Leaf litter and dead organic matter fall to the forest floor and are decomposed very quickly by bacteria and fungi in the hot, humid conditions — nutrients are released into the thin topsoil (1).\n• Plant roots near the surface quickly absorb nutrients before they can be washed away (leached) by heavy rainfall — the cycle keeps nutrients in the living system (1).\n• The soil is therefore surprisingly infertile — it is thin, acidic, and nutrient-poor; when the forest is cleared, nutrients are lost rapidly through leaching, making the land unsuitable for farming within a few years (1).`
      },
      {
        q: 'Explain the causes of deforestation in tropical rainforests. Refer to a named example.',
        marks: 4, tier: 'amber',
        modelAnswer: `(Amazon, Brazil / Congo Basin / Borneo — credit any named example with specific data.)\n• Commercial farming — in the Amazon, large-scale soy bean farming and cattle ranching are the leading causes; Brazil exports millions of tonnes of soy annually, driving continued forest clearance (1).\n• Logging — both legal and illegal logging for valuable hardwoods (mahogany, teak) is widespread; Indonesia lost 24 million hectares between 1990 and 2015 (1).\n• Mining — the Amazon contains large deposits of iron ore, gold, and bauxite; open-cast mining clears forest and contaminates rivers with heavy metals (e.g. Serra Pelada, Brazil) (1).\n• Road building — infrastructure projects open up previously inaccessible forest to settlers, loggers, and farmers; the Trans-Amazonian Highway opened large areas to clearance (1).`
      },
      {
        q: 'Explain the effects of deforestation on the local environment and the people who depend on the rainforest.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Loss of biodiversity — deforestation destroys habitat, driving species to extinction before scientists can even identify them; the Amazon is estimated to lose 137 species per day (1).\n• Soil erosion — without tree roots holding soil together and interception reducing raindrop impact, heavy rain rapidly erodes unprotected topsoil; rivers become choked with sediment (1).\n• Disruption of the water cycle — reduced transpiration leads to less moisture in the atmosphere, decreasing regional rainfall and potentially turning cleared areas into savannah (1).\n• Indigenous communities — groups such as the Kayapo in Brazil lose their homeland and traditional way of life; forced displacement causes cultural loss, poverty, and health impacts (1).\n• Local communities who depended on forest products (non-timber forest products, bushmeat, medicines) lose their livelihoods, increasing poverty (1).`
      },
      {
        q: 'Describe and explain one strategy used to manage tropical rainforests sustainably.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Ecotourism — allows visitors to experience the rainforest with minimal environmental impact, providing income for local communities and creating an economic incentive to protect the forest (1).\n• Revenue from ecotourism can fund conservation, ranger patrols to prevent illegal logging and poaching, and education programmes (1).\n• Successful examples include the Amazon jungle lodges of the Peruvian Amazon, where local indigenous guides lead tours — communities earn more from keeping the forest standing than clearing it (1).\n• However, ecotourism can be limited in scale — it cannot replace the economic returns from large-scale farming or mining for many governments — and poorly managed tourism can itself damage sensitive ecosystems (1).`
      },
    ],
    red: [
      {
        q: 'Evaluate the extent to which tropical rainforests can be used sustainably. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `Evidence that sustainable use is possible:\n• Selective logging — removing only mature trees while leaving the structure of the forest intact allows regeneration; certified timber (FSC — Forest Stewardship Council) schemes exist in Brazil and Indonesia (1).\n• REDD+ (Reducing Emissions from Deforestation and Forest Degradation) — international payments to developing countries that protect their forests; Brazil has used REDD+ funding to significantly slow Amazon deforestation (deforestation fell 80% from 2004 peak by 2012) (1).\n• Ecotourism and non-timber forest product harvesting (nuts, fruits, rubber) can generate income without clearing — e.g. Brazil nut industry in the Amazon (1).\nLimitations:\n• Economic pressures are enormous — debt-laden countries like Brazil and Indonesia face strong incentives to convert forest to agricultural land; soy and cattle are far more profitable per hectare than sustainable forestry (1).\n• Enforcement is extremely difficult in remote rainforest regions — illegal logging and land clearance continues despite laws (e.g. Amazon deforestation under Bolsonaro government rose sharply) (1).\nConclusion:\n• Sustainable use is technically possible and examples demonstrate it can work at a local scale, but global economic systems continue to drive unsustainable deforestation; without stronger international frameworks, financial incentives, and enforcement, truly sustainable management of rainforests at scale remains aspirational rather than a reality (1).`
      },
      {
        q: '"The economic development needs of tropical countries outweigh the arguments for conserving rainforests." Discuss. [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `Arguments supporting the statement (development):\n• Countries like Brazil and Indonesia argue that developed nations cleared their own forests for economic growth centuries ago — it is unfair to deny developing countries the same right to use their resources for poverty reduction (1).\n• Agriculture (soy, palm oil, cattle) generates billions in export income and employs millions of people — Brazil's agricultural sector accounts for ~25% of GDP (1).\n• Mining and logging provide government revenue that funds schools, hospitals, and infrastructure in countries where many still lack basic services (1).\nArguments against (conservation):\n• Rainforests provide ecosystem services of incalculable global value — climate regulation, water cycling, biodiversity — that benefit all humanity, not just the host nation (1).\n• Once cleared, rainforests are very difficult to restore — the nutrient cycle breaks down, soils erode, and biodiversity losses are largely irreversible (1).\n• The economic benefits of forest clearance are often short-term — soils exhausted within years, forcing further clearance; sustainable forest use offers longer-term income (1).\n• Indigenous peoples' rights — clearance often violates the rights of communities whose livelihoods and cultures depend on the forest (1).\nConclusion:\n• A binary choice is a false dichotomy; sustainable development models exist that can provide economic growth while protecting forest. The real challenge is creating international financial systems that make conservation more profitable than destruction — until that happens, economic pressures will continue to drive deforestation. Rich nations have a particular responsibility to fund conservation as they benefit most from the ecosystem services rainforests provide (1).`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 1.6 Hot Deserts */
  '1.6': {
    green: [
      {
        q: 'State two characteristics of a hot desert climate.',
        marks: 2, tier: 'green',
        modelAnswer: `• Very low precipitation — most hot deserts receive less than 250 mm of rainfall per year, and this is often unreliable and may fall in a few intense storms (1).\n• Extreme temperature range — daytime temperatures regularly exceed 40°C, while nights can be very cold (below 10°C) because the dry air and lack of cloud cover mean heat is rapidly lost by radiation at night (1).`
      },
      {
        q: 'Identify two ways in which animals in hot deserts are adapted to survive.',
        marks: 2, tier: 'green',
        modelAnswer: `• Nocturnal behaviour — many desert animals (e.g. fennec fox, gerbil) are active only at night when temperatures are lower, avoiding dehydration and overheating during the day (1).\n• Water conservation — animals such as the kangaroo rat obtain all their water from the food they eat and produce very concentrated urine to minimise water loss (1).\n(Also accept: burrowing to escape heat; light colouring to reflect sunlight; large ears for heat dissipation.)`
      },
      {
        q: 'State what is meant by desertification.',
        marks: 2, tier: 'green',
        modelAnswer: `Desertification is the process by which land on the margins of deserts (semi-arid areas) becomes increasingly degraded and dry, losing its vegetation and soil fertility, and increasingly resembling desert conditions (1). It is driven by a combination of climate change (reducing rainfall) and human activities such as overgrazing, deforestation, and over-cultivation (1).`
      },
      {
        q: 'Name one hot desert and state its location.',
        marks: 1, tier: 'green',
        modelAnswer: `• Sahara Desert — North Africa, covering approximately 9 million km² across countries including Algeria, Libya, Egypt, and Morocco (1).\n(Also accept: Arabian Desert — Middle East; Atacama Desert — coastal South America; Namib Desert — coastal south-west Africa; Australian Outback — central and western Australia.)`
      },
    ],
    amber: [
      {
        q: 'Explain why hot deserts form where they do.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Most hot deserts are located around 20–30° north and south of the equator — in the subtropical high-pressure belt (1).\n• At the equator, air heated by intense solar radiation rises, cools, loses moisture as tropical rainfall, then spreads poleward at altitude. At ~30° latitude, this dry air descends (subsides), compressing and warming — any remaining moisture evaporates, creating stable, cloudless conditions (1).\n• Rain shadow deserts form where moist air is forced to rise over mountain ranges, loses moisture on the windward side, then descends as dry air on the leeward side — e.g. Atacama Desert in the lee of the Andes (1).\n• Coastal deserts form where cold ocean currents cool air over the sea, reducing evaporation and moisture — air reaches land too dry for significant rainfall (e.g. Namib Desert, cooled by Benguela Current) (1).`
      },
      {
        q: 'Explain the adaptations of plants (xerophytes) to survive in hot desert environments.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Cacti (e.g. saguaro cactus) have thick, waxy stems to reduce water loss through transpiration; their stems expand accordion-like to store large volumes of water after rainfall (1).\n• Shallow but extensive root systems spread wide to capture moisture from even light rain before it evaporates; some plants also have deep tap roots to reach groundwater (1).\n• Spines replace leaves to reduce surface area for transpiration; spines also provide shade to the stem surface and deter herbivores (1).\n• Some plants (ephemeral annuals) complete their entire life cycle — germinating, flowering, and setting seed — within weeks of rare rainfall, remaining dormant as seeds for years between events (1).`
      },
      {
        q: 'Explain the causes of desertification in the Sahel region of Africa.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Overgrazing — rapidly growing populations mean more livestock per hectare; animals strip vegetation from the surface, exposing bare soil to wind and water erosion (1).\n• Deforestation — trees are cut for fuelwood (the primary energy source for over 80% of rural families in sub-Saharan Africa); without tree roots, soil is no longer held together and is blown or washed away (1).\n• Over-cultivation — soils are cultivated too intensively without allowing fallow periods to recover nutrients; yields decline and eventually the land can no longer support crops (1).\n• Climate change — the Sahel has experienced declining and increasingly unreliable rainfall since the 1970s — droughts are more frequent and severe, reducing vegetation cover and accelerating soil erosion (1).\n(Example: Niger, Burkina Faso, Chad — over 2 million people at risk of food insecurity due to desertification.)`
      },
      {
        q: 'Describe and explain one strategy used to reduce desertification.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The Great Green Wall (Africa) — an ambitious project to plant a 8,000 km wall of trees and vegetation across the Sahel from Senegal to Djibouti to halt the advance of the Sahara (1).\n• Trees are planted to bind soil, reduce wind erosion, and restore the water cycle through increased transpiration and interception; they also provide fuelwood and food (e.g. gum arabic from acacia trees provides income) (1).\n• The programme involves local communities in planting and maintenance, reducing overgrazing pressure and providing sustainable livelihoods, which reduces the poverty that drives overuse of land (1).\n• By 2022, approximately 18 million hectares had been restored; the UN Environment Programme estimates that if completed it could sequester 250 million tonnes of carbon and create 10 million jobs (1).`
      },
    ],
    red: [
      {
        q: 'Evaluate the challenges and opportunities that hot desert environments offer for human development. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `Opportunities:\n• Mineral and energy resources — deserts are rich in oil and gas (Arabian Peninsula — Saudi Arabia's Ghawar oil field, largest in the world) and minerals; the Atacama contains vast lithium reserves critical for EV batteries (1).\n• Solar energy — hot deserts receive more solar radiation than anywhere else on Earth — ideal for large-scale solar farms (e.g. Morocco's Noor Ouarzazate complex, generating 580 MW) (1).\n• Tourism — unique landscapes, extreme experiences (e.g. Dubai desert safaris), and clear skies attract tourists, generating significant income (1).\nChallenges:\n• Extreme heat — working conditions are dangerous; construction, agriculture, and infrastructure require expensive cooling systems and adapted technologies (1).\n• Water scarcity — all human activities require water; desalination is expensive and energy-intensive (e.g. Saudi Arabia spends ~$10 billion/year on desalination) (1).\n• Remote locations — transport infrastructure is costly to build and maintain across vast desert distances, making access to markets difficult (1).\nConclusion:\n• Hot deserts offer significant opportunities particularly for energy-rich countries, but their development depends heavily on available capital — resource-poor developing nations face extreme challenges that the revenue from resources may not offset (1).`
      },
      {
        q: '"Climate change rather than human activity is the main cause of desertification." Discuss this statement. [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `Climate change as a cause:\n• Rainfall in the Sahel has decreased by 25–40% since the 1970s; climate models project further reductions as global temperatures rise, pushing arid zones poleward (1).\n• Increased frequency and severity of droughts reduce vegetation cover, leaving soil exposed and vulnerable to erosion — the 1984 Ethiopian famine was triggered by climate-related drought (1).\n• Rising temperatures increase evaporation rates, further reducing soil moisture and stressing plants even where rainfall is unchanged (1).\nHuman activity as a cause:\n• Overgrazing is widely considered the primary driver in the Sahel — livestock populations have grown faster than the land can support, degrading vegetation far beyond what climate change alone would cause (1).\n• Deforestation removes vegetation that protects and enriches soil; studies show deforested areas in the Sahel experience soil erosion 50–100 times faster than forested areas (1).\n• Unsustainable farming practices — monoculture, over-irrigation causing salinisation — degrade land independently of climate (e.g. Aral Sea basin — Soviet-era irrigation caused severe desertification) (1).\nInteraction:\n• Climate change and human activity are interrelated — drought stress makes land more vulnerable to overgrazing damage; poverty drives unsustainable land use that climate change then amplifies (1).\nConclusion:\n• Neither factor alone adequately explains desertification — they interact and reinforce each other. In the Sahel, human activity (overgrazing, deforestation) appears to be the more proximate cause, but climate change increasingly amplifies vulnerability. Addressing desertification requires tackling both: reducing unsustainable land use while mitigating climate change through global emissions reductions (1).`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 2.1 Urbanisation and Urban Change */
  '2.1': {
    green: [
      {
        q: 'State what is meant by urbanisation.',
        marks: 2, tier: 'green',
        modelAnswer: `Urbanisation is the process by which an increasing proportion of a country's population lives in urban areas (towns and cities) rather than rural areas (1). It is caused by rural-to-urban migration and natural population increase within cities, and it is associated with economic development as countries industrialise (1).`
      },
      {
        q: 'State two differences in the rate of urbanisation between HICs and LICs.',
        marks: 2, tier: 'green',
        modelAnswer: `• HICs (e.g. UK, USA) have slow or stagnant rates of urbanisation as they are already highly urbanised (typically 75–85% urban); LICs and MICs (e.g. Nigeria, India) have rapid urbanisation rates as they are still industrialising (1).\n• In some HICs, counter-urbanisation (movement from cities to rural areas) partially offsets urbanisation; in LICs, strong rural-to-urban migration continues to drive rapid urban growth (1).`
      },
      {
        q: 'Identify two push factors that cause people to migrate from rural to urban areas in developing countries.',
        marks: 2, tier: 'green',
        modelAnswer: `• Poverty and lack of economic opportunity — few jobs available in rural areas; subsistence farming provides an uncertain and low income (1).\n• Natural disasters and environmental change — drought, flooding, and desertification can destroy farming livelihoods, forcing people to seek opportunities in cities (1).\n(Also accept: conflict, lack of services, mechanisation of agriculture reducing farm employment.)`
      },
      {
        q: 'State what is meant by a megacity.',
        marks: 1, tier: 'green',
        modelAnswer: `A megacity is an urban area with a population of more than 10 million people (1). Examples include Tokyo (37 million), Delhi (32 million), Mexico City (22 million), and São Paulo (22 million).`
      },
    ],
    amber: [
      {
        q: 'Explain the differences in urban land use patterns between HICs and LICs.',
        marks: 4, tier: 'amber',
        modelAnswer: `• In HICs, land use typically follows the Burgess concentric zone model — a CBD in the centre, surrounded by inner-city terraced housing (often gentrified), then inter-war suburbs, with newer affluent housing on the urban fringe; the poorest tend to live in inner-city areas (1).\n• In LICs and MICs, the pattern is often reversed — the wealthy live near the city centre or in gated communities on the outskirts, while the poorest live in informal squatter settlements (favelas, barrios) on the urban fringe or in environmentally hazardous areas (1).\n• LIC cities often lack formal planning — informal settlements (shanty towns) grow spontaneously wherever land is unoccupied, often on steep slopes, riverbanks, or near industrial sites (1).\n• HICs have well-defined suburban areas with planned infrastructure; LIC cities have rapidly growing peri-urban zones with limited access to clean water, sanitation, electricity, and roads (1).`
      },
      {
        q: 'Explain why squatter settlements develop in cities in LICs and MICs.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Rapid rural-to-urban migration brings more people to cities than formal housing can accommodate — migrants cannot afford formal housing and so occupy unused land illegally, building makeshift shelters from salvaged materials (1).\n• Governments in LICs lack the resources to build enough affordable housing to keep pace with population growth — urbanisation rates often exceed 5% per year in cities like Lagos and Dhaka (1).\n• Migrants are often attracted by the perceived economic opportunities of the city; on arrival they settle close to industrial or commercial areas where work might be found (1).\n• Land ownership laws are weak or unenforced, making informal occupation possible; over time, settlements may be given legal recognition (e.g. favelas in Rio de Janeiro) (1).`
      },
      {
        q: 'Describe and explain one way in which squatter settlements can be improved.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Site and service schemes — the government provides a basic plot of land with access to essential infrastructure (running water, sanitation, electricity connections, roads); residents build their own homes using their own labour (self-help) (1).\n• This is more affordable for governments than building new housing from scratch, and residents take pride in their homes, maintaining and improving them over time (1).\n• Example: Dharavi, Mumbai — the Indian government has attempted various redevelopment schemes; site and service has been more successful than wholesale clearance, which displaces communities (1).\n• NGO-supported self-help schemes in Kibera, Nairobi have successfully upgraded housing, provided clean water points and improved sanitation — disease rates have fallen and community cohesion improved (1).`
      },
      {
        q: 'Explain how economic development leads to changes in land use in a city.',
        marks: 4, tier: 'amber',
        modelAnswer: `• As cities grow economically, the CBD expands outward — shops, offices, and financial institutions replace older residential housing; land values in the centre rise significantly (1).\n• Deindustrialisation in HICs leads to derelict industrial land becoming available for regeneration — former factory sites are redeveloped as retail, leisure, or housing (e.g. London Docklands) (1).\n• Suburbanisation occurs as higher incomes allow people to move to the urban fringe, creating low-density residential areas; this is facilitated by improved transport links and car ownership (1).\n• In LIC/MIC cities, rapid economic growth attracts foreign investment — new business districts (e.g. Gurgaon, India; Shanghai's Pudong district) are created, often displacing residential and agricultural land on the city edge (1).`
      },
    ],
    red: [
      {
        q: 'Evaluate the success of strategies used to manage urbanisation in either a LIC/MIC or HIC city. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `(Rio de Janeiro, Brazil — MIC example — credit any appropriate named city with specific evidence.)\n• Favela Bairro project (Rio) — upgrading of favelas rather than clearance; paved streets, water and sewage connections, schools, and health centres built in over 70 favelas; 250,000 residents benefited (1). Successes: improved living conditions, tenure security, reduced disease; limitations: only reached a fraction of the 1.4 million favela residents; crime and gang control remained a problem in many upgraded areas (1).\n• UPP (Pacifying Police Units) — police occupied and "pacified" key favelas; initially reduced crime and attracted investment but by 2016 violence had returned to many areas as funding fell (1).\n• Porto Maravilha (Port Revitalisation) — redeveloping the port area; attracted investment and improved infrastructure but criticised for displacing poorer residents through gentrification (1).\n• Overall: strategies have had mixed success — physical improvements have been made but social inequality, crime, and lack of economic opportunity remain severe; the scale of the challenge (over 1 million people in informal settlements) means that individual projects have limited overall impact without broader economic reform (1).\nConclusion: urban management strategies work best when they involve communities in planning, provide long-term funding, and address both physical infrastructure and economic opportunity simultaneously (1).`
      },
      {
        q: '"Rapid urbanisation creates more problems than opportunities." To what extent do you agree? Refer to named examples. [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `Problems of rapid urbanisation:\n• Housing shortages — rapid growth outpaces construction; informal settlements with poor sanitation and overcrowding develop (e.g. Dharavi, Mumbai — 1 million people in 2 km², 1 toilet per 1,440 people) (1).\n• Traffic congestion and poor air quality — Lagos, Nigeria is one of the world's most congested cities; air pollution from vehicles and industry causes serious respiratory health problems (1).\n• Strain on services — schools, hospitals, and clean water supply unable to keep pace with population growth; waterborne disease is widespread in areas without clean water (e.g. cholera in informal settlements in Nairobi) (1).\n• Environmental degradation — deforestation on urban fringes, river pollution from untreated sewage and industrial waste, increased flood risk from impermeable surfaces (1).\nOpportunities of urbanisation:\n• Economic growth — cities drive national economic development; urban workers are on average 3× more productive than rural workers; cities in MICs like China have lifted hundreds of millions out of poverty (1).\n• Better access to services — cities generally offer better hospitals, schools, and employment than rural areas — rural-to-urban migrants typically experience improved incomes and life expectancy (1).\n• Innovation and creativity — cities concentrate educated populations and foster innovation; economic agglomeration effects attract investment (e.g. Silicon Valley, Shenzhen's tech industry) (1).\nConclusion:\n• Whether rapid urbanisation creates more problems or opportunities depends on the pace of change and the capacity of governments to manage it. Where urbanisation is managed with investment in infrastructure and services, it generates enormous benefits; where it outpaces government capacity (most LIC/MIC cities), severe problems dominate. A managed, slower rate of urbanisation with investment in affordable housing and services offers the best outcomes (1).`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 2.2 UK Cities */
  '2.2': {
    green: [
      {
        q: 'State two characteristics of the Central Business District (CBD) of a UK city.',
        marks: 2, tier: 'green',
        modelAnswer: `• High land values — the CBD is the most accessible point of the city; competition for land drives prices up, resulting in high-rise buildings to maximise floor space per unit of land (1).\n• High concentration of retail and commercial functions — major department stores, banks, offices, and entertainment venues cluster in the CBD to benefit from maximum customer accessibility (1).\n(Also accept: traffic congestion; pedestrianised shopping streets; low residential population; high daytime footfall.)`
      },
      {
        q: 'Identify two causes of inner-city deprivation in UK cities.',
        marks: 2, tier: 'green',
        modelAnswer: `• Deindustrialisation — the loss of manufacturing industry in the 20th century left many inner-city areas with high unemployment, derelict land, and declining populations (1).\n• Poor quality housing stock — much inner-city housing dates from the Victorian era; terraced housing is often in poor repair, damp, and overcrowded (1).\n(Also accept: poor educational attainment; high crime rates; out-migration of wealthier residents; poor transport links to suburban employment.)`
      },
      {
        q: 'State what is meant by counter-urbanisation.',
        marks: 2, tier: 'green',
        modelAnswer: `Counter-urbanisation is the movement of people from urban areas to rural areas or smaller towns on the urban fringe (1). It is driven by factors such as lower house prices, improved quality of life, car ownership, and improved transport links that allow commuting, and has led to growth in "commuter belt" villages around major UK cities (1).`
      },
      {
        q: 'Name one area of regeneration in a UK city and state one aim of the regeneration project.',
        marks: 2, tier: 'green',
        modelAnswer: `• London Docklands / Manchester Salford Quays / Birmingham Eastside / Leeds South Bank — credit any named UK urban regeneration area (1).\n• Aim: to transform derelict post-industrial land into a mixed-use area of housing, offices, retail, and leisure, attracting investment and creating employment to reduce deprivation (1).`
      },
    ],
    amber: [
      {
        q: 'Explain the social and economic impacts of deindustrialisation on UK cities.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Mass unemployment — the decline of traditional industries (steel, coal, textiles, shipbuilding) from the 1970s onward caused sudden and large-scale job losses in cities such as Sheffield, Manchester, and Liverpool (e.g. Sheffield lost 60,000 steel industry jobs in the 1980s) (1).\n• Urban deprivation — unemployment drove poverty, poor housing conditions, and declining health; areas such as Toxteth (Liverpool) and Moss Side (Manchester) experienced severe deprivation and social unrest in the 1980s (1).\n• Population decline — wealthier residents left depressed inner-city areas for suburbs or new towns; some UK cities (Liverpool, Glasgow) lost over 30% of their population between 1960 and 1990 (1).\n• Loss of tax base — declining economic activity reduced local government revenue, making it harder to invest in services, housing, and infrastructure — creating a spiral of decline (1).`
      },
      {
        q: 'Explain how urban regeneration has changed one area of a UK city. Refer to named examples.',
        marks: 4, tier: 'amber',
        modelAnswer: `(London Docklands / Salford Quays — credit any named area with specific detail.)\n• London Docklands Development Corporation (LDDC) — established 1981 to regenerate 22 km² of derelict dockland in East London; attracted £7.7 billion of private investment by 1998 (1).\n• Physical changes: Canary Wharf developed as a major financial centre; the DLR extended connectivity; over 24,000 new homes built; 28,000 businesses relocated to the area (1).\n• Economic impacts: 100,000+ jobs created in financial and media sectors; Canary Wharf became the UK's second most important financial district after the City of London (1).\n• Social tensions: rapid gentrification raised house prices and rents, displacing some of the original working-class community; critics argue regeneration benefited wealthy incomers more than existing residents (1).`
      },
      {
        q: 'Describe and explain the challenges of managing urban growth on the rural-urban fringe.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Pressure for new housing — population growth and household formation in and around UK cities creates demand for new homes; the rural-urban fringe is the main available location, but development threatens agricultural land and wildlife habitats (1).\n• Greenbelt policy restricts development around major cities to prevent urban sprawl — this protects open space and countryside but can push house prices up by limiting supply (1).\n• Traffic congestion — new suburban and peri-urban development increases car dependency; rural roads and ring roads become congested, increasing pollution and travel times (1).\n• Loss of services in rural areas — as new commuter suburbs grow, local shops and schools in surrounding villages lose trade; local character changes as urban culture and residents move in (1).`
      },
      {
        q: 'Explain why some parts of UK cities are more deprived than others.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Historical industrial decline — inner-city areas built around Victorian industries (e.g. Sheffield's Lower Don Valley, formerly steel; Manchester's Moss Side) have suffered from deindustrialisation; unemployment, poverty and poor housing have persisted for decades (1).\n• Selective out-migration — better-off residents have moved to suburbs or commuter towns, leaving behind those who cannot afford to move; this concentrates deprivation in specific areas (1).\n• Poor built environment — Victorian terraced housing is often in poor structural condition; high-rise estates built in the 1960s (e.g. Aylesbury Estate, London) have poor design, maintenance issues, and are stigmatised (1).\n• Inequalities in public investment — some areas attract regeneration funding (London Docklands) while others remain neglected, creating stark contrasts within the same city (1).`
      },
    ],
    red: [
      {
        q: 'Evaluate how successful urban regeneration has been in improving the quality of life for residents in UK cities. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `Successes:\n• Physical environment improved dramatically — derelict industrial land converted to offices, apartments, and leisure facilities; cities like Manchester, Leeds, and Birmingham now have vibrant city centres attracting significant investment (1).\n• Employment created — Canary Wharf created 100,000+ jobs; MediaCityUK at Salford Quays created 7,000 media and digital jobs (BBC, ITV) and attracted over £650 million of investment (1).\n• Cultural regeneration — galleries, restaurants, and events venues have made regenerated areas attractive to visitors and the creative economy (e.g. Baltic and Sage Gateshead on the Tyne) (1).\nLimitations:\n• Gentrification and displacement — rising house prices and rents in regenerated areas push out lower-income original residents; London Docklands is often cited as an example of regeneration that benefited wealthy newcomers rather than original communities (1).\n• Uneven distribution — regeneration has concentrated on commercially attractive sites (waterfront, central areas); more deprived neighbourhoods away from these hotspots remain neglected (1).\nConclusion:\n• Urban regeneration has significantly improved the physical environment and economy of many UK cities, but has too often prioritised economic and property-led growth over social justice; improvements in quality of life for the most deprived residents have been less consistent and unequal geographically (1).`
      },
      {
        q: '"The challenges of UK cities are now mainly social rather than economic." Discuss this statement. [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `Social challenges:\n• Deprivation and inequality remain significant — UK cities contain both the wealthiest and most deprived communities in the country; in London, the wealthiest borough (Kensington & Chelsea) has a life expectancy 10 years higher than the most deprived (Tower Hamlets) (1).\n• Housing affordability — the average London house price in 2024 was ~£500,000; average income ~£40,000; millions priced out of ownership and spending 50%+ of income on rent (1).\n• Ethnic and racial inequalities — segregation persists in many UK cities; ethnic minority communities often face higher poverty rates, overcrowded housing, and poorer health outcomes (1).\n• Mental health and loneliness — urban isolation, particularly in high-rise estates and among the elderly, is increasingly recognised as a major public health challenge (1).\nEconomic challenges (still significant):\n• Regional economic inequality — Northern cities continue to lag London and the South-East in wages, productivity, and investment despite decades of regional policy ("Levelling Up") (1).\n• Post-pandemic high street decline — retail closures have accelerated in many city centres; unemployment in some urban areas remains above national average (1).\n• Skills mismatch — deindustrialised cities struggle to retain young talent as graduates move to London; knowledge economy jobs cluster disproportionately in the capital (1).\nConclusion:\n• Economic and social challenges are deeply intertwined — poverty drives poor social outcomes, and social disadvantage limits economic participation. While the nature of economic challenges has shifted from industrial decline to knowledge-economy inequality, economic issues remain fundamental; the statement somewhat overstates the social dimension. True improvement requires addressing both simultaneously (1).`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 2.3 Global Development */
  '2.3': {
    green: [
      {
        q: 'State what is meant by the Human Development Index (HDI).',
        marks: 2, tier: 'green',
        modelAnswer: `The HDI is a composite measure of development combining three indicators: life expectancy (health), mean and expected years of schooling (education), and Gross National Income (GNI) per capita at purchasing power parity (standard of living) (1). It produces a score between 0 and 1; countries above 0.8 are considered "very high development" (e.g. Norway: 0.961), while scores below 0.55 indicate low development (e.g. Niger: 0.394) (1).`
      },
      {
        q: 'Identify two social indicators of development.',
        marks: 2, tier: 'green',
        modelAnswer: `• Life expectancy — the average number of years a person born today can expect to live; generally higher in more developed countries (e.g. Japan: 84 years; Chad: 54 years) (1).\n• Infant mortality rate — the number of children who die before their first birthday per 1,000 live births; inversely correlated with development (e.g. Finland: 2; Sierra Leone: 77 per 1,000) (1).\n(Also accept: literacy rate, years of schooling, access to clean water/sanitation, doctors per 1,000 people.)`
      },
      {
        q: 'State two reasons why GDP per capita may be a limited measure of development.',
        marks: 2, tier: 'green',
        modelAnswer: `• GDP per capita is an average — it conceals enormous inequalities within a country; a high average may mask extreme poverty among the majority while a small elite holds most wealth (e.g. Nigeria has a high GDP but 40% live below the poverty line) (1).\n• GDP measures economic output but not welfare — it includes negative activities (clearing up pollution, treating disease caused by poor conditions) and excludes unpaid work, leisure, and environmental quality (1).`
      },
      {
        q: 'State what is meant by the North-South divide in terms of global development.',
        marks: 2, tier: 'green',
        modelAnswer: `The North-South divide refers to the broad contrast in levels of development between the wealthy, industrialised countries of the "Global North" (Europe, North America, Australia, Japan) and the less developed countries of the "Global South" (much of Africa, Asia, and Latin America) (1). It is a generalisation — some southern countries (e.g. Singapore, UAE) are highly developed, and some northern countries have pockets of severe poverty — but it broadly captures the global pattern of inequality (1).`
      },
    ],
    amber: [
      {
        q: 'Explain how physical geography can influence a country\'s level of development.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Landlocked countries have limited access to international trade without costly overland transport — sub-Saharan Africa contains many landlocked LICs (e.g. Mali, Niger, Chad) that face higher trade costs, reducing economic growth (1).\n• Natural hazard risk — countries in disaster-prone regions (e.g. Bangladesh — flooding; Haiti — earthquakes) face repeated economic setbacks as infrastructure and agricultural land is destroyed; recovery costs divert resources from development investment (1).\n• Climate — tropical countries often have hot, humid climates conducive to disease vectors such as malaria mosquitoes; malaria costs Africa an estimated $12 billion/year in lost productivity and healthcare costs, hindering development (1).\n• Natural resources — countries with abundant resources (oil: Saudi Arabia; minerals: Botswana's diamonds) can generate wealth, but the "resource curse" shows that resource wealth does not always translate to broad development (1).`
      },
      {
        q: 'Explain the role of international trade in causing and maintaining global development inequalities.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Unequal terms of trade — LICs often export raw materials (commodities) and import manufactured goods; commodity prices are volatile and low relative to manufactured products, locking LICs in a pattern of low-value production (1).\n• Trade barriers — HIC tariffs and subsidies protect their own farmers and industries, preventing LICs from competing in valuable markets (e.g. EU agricultural subsidies disadvantage African farmers in EU markets) (1).\n• TNCs and profit repatriation — transnational corporations in LICs extract profits back to HICs; limited economic multiplier effect stays in the host country (1).\n• However, trade has also enabled development — East Asian "Tiger" economies (South Korea, Taiwan, Singapore) used export-led manufacturing to achieve rapid development; China's trade growth lifted 800 million out of poverty since 1980 (1).`
      },
      {
        q: 'Explain how aid can help a country to develop. Refer to a named example.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Emergency/humanitarian aid — provides food, clean water, medicine, and shelter after disasters, preventing loss of life and allowing rapid recovery that maintains development progress (e.g. UN response to 2010 Haiti earthquake, providing emergency aid to 1.5 million people) (1).\n• Tied/bilateral aid — can fund major infrastructure projects (roads, dams, ports) that improve connectivity and economic productivity, though it may benefit donor-country firms rather than local industry (1).\n• Multilateral aid through organisations like the World Bank funds healthcare (e.g. polio eradication — 3 billion children vaccinated; cases reduced 99.9% since 1988) and education, building long-term human capital (1).\n• Microfinance (e.g. Grameen Bank, Bangladesh) provides small loans to entrepreneurs — particularly women — to start businesses, generating income and reducing poverty; 9 million borrowers in Bangladesh alone (1).`
      },
      {
        q: 'Explain why some countries have experienced more rapid development than others since 2000.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Political stability — countries with stable governance and rule of law (e.g. Botswana, Rwanda) attract foreign investment and can implement long-term development plans; countries with conflict or corruption (e.g. DRC, Somalia) struggle to develop (1).\n• Foreign Direct Investment — globalisation has enabled MICs with educated, low-cost workforces to attract TNC manufacturing — China, Vietnam, and Bangladesh have experienced rapid development through export-led industrialisation (1).\n• Good governance and investment in education and health — South Korea and Singapore invested heavily in education from the 1960s onward; their highly skilled workforces attracted high-value industries (1).\n• China's state-led development model — the Chinese government directed investment into infrastructure, manufacturing, and exports; GDP per capita grew from ~$1,000 in 2000 to ~$12,500 by 2023 (1).\n• Debt burden — heavily indebted countries spend large proportions of government revenue on debt repayment, leaving less for health, education, and infrastructure — the World Bank estimates many LICs spend more on debt service than on healthcare (1).`
      },
    ],
    red: [
      {
        q: 'Evaluate the effectiveness of different strategies to reduce the development gap between HICs and LICs. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `Aid:\n• Emergency aid saves lives but does not address structural causes of underdevelopment; long-term aid dependency can undermine local industries (e.g. cheap food aid may undercut local farmers) (1).\n• Well-targeted development aid (microfinance, education, healthcare) can be transformative — PEPFAR (US AIDS programme) saved an estimated 21 million lives in sub-Saharan Africa (1).\nFair Trade:\n• Guarantees higher prices for producers; improves farmers' incomes and community investment in education and healthcare (e.g. Fairtrade coffee in Ethiopia — farmers receive 40% more than commodity price) — but reaches only a tiny fraction of global trade (1).\nDebt relief:\n• HIPC Initiative wrote off $76 billion of debt for 36 countries; freed up government spending for services — Tanzania increased education spending by 50% after debt relief (1) — but many LICs have accumulated new debt, particularly to Chinese lenders (1).\nFDI and trade:\n• Potentially the most powerful driver of development — as shown by China and South-East Asia — but benefits may flow to elites and TNCs rather than the poorest (1).\nConclusion:\n• No single strategy is sufficient; a combination tailored to the specific context of each country, combined with fairer global trade rules and governance improvements, offers the best hope — but fundamental reform of global economic systems is required for sustained reduction in the development gap (1).`
      },
      {
        q: '"Globalisation has widened rather than narrowed global development inequalities." Evaluate this statement. [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `Evidence that globalisation has widened inequalities:\n• While some MICs have benefited enormously (China, India, Vietnam), the poorest LICs — particularly landlocked or conflict-affected nations in sub-Saharan Africa — have been largely bypassed by FDI and trade growth (1).\n• TNC activity concentrates in countries with existing advantages (infrastructure, education, political stability); the least developed countries lack the conditions to attract investment (1).\n• Profit repatriation — TNCs take profits back to HIC headquarters; tax avoidance (e.g. Apple, Google routing profits through Ireland/Netherlands) reduces tax revenues in LICs (1).\n• Unequal terms of trade persist — commodity prices remain depressed relative to manufactured goods; LIC primary exporters remain trapped in low-value chains (1).\nEvidence that globalisation has reduced inequalities:\n• Global extreme poverty (below $2.15/day) fell from 36% in 1990 to under 10% in 2019 — largely due to globalisation-driven growth in China, India, and South-East Asia (800 million lifted out of poverty in China alone) (1).\n• Access to mobile technology, information, and global markets has enabled entrepreneurship and development even in LICs — mobile banking (M-Pesa, Kenya) reached 50 million users, enabling financial inclusion for millions without bank accounts (1).\n• Global health and education outcomes have improved — child mortality has fallen by 60% since 1990; primary school enrollment has risen to over 90% globally (1).\nConclusion:\n• Globalisation has produced a deeply uneven pattern of development — it has undoubtedly narrowed the gap between MICs (particularly in Asia) and HICs, but has left the poorest LICs further behind in relative terms. The statement is partially correct: within-country inequality has increased in many nations even as global averages improve. Globalisation's benefits are real but have been distributed profoundly unequally, reflecting and reinforcing existing power structures in the global economy (1).`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 3.1 Tectonic Hazards */
  '3.1': {
    green: [
      {
        q: 'State two differences between the primary and secondary effects of an earthquake.',
        marks: 2, tier: 'green',
        modelAnswer: `• Primary effects occur immediately as a direct result of the ground shaking — e.g. buildings collapsing, bridges falling, people being killed or injured by structural collapse (1).\n• Secondary effects are indirect consequences that occur in the hours, days, or weeks after the event — e.g. fires caused by ruptured gas mains, tsunamis triggered by offshore quakes, disease outbreaks from contaminated water, homelessness (1).`
      },
      {
        q: 'Identify the two types of plate boundary where earthquakes most commonly occur and give one example of each.',
        marks: 4, tier: 'green',
        modelAnswer: `• Destructive (convergent) boundary — oceanic crust subducts beneath continental or other oceanic crust; the friction as plates move past each other causes powerful earthquakes (e.g. Japan Trench — 2011 Tōhoku earthquake, magnitude 9.0) (1).\n• Conservative (transform) boundary — plates slide past each other horizontally; friction builds up and is released as earthquakes with no volcanic activity (e.g. San Andreas Fault, California — 1906 San Francisco earthquake) (1).\n(Also accept constructive boundaries for some earthquake activity — credit if explained.)`
      },
      {
        q: 'State what is meant by the epicentre and focus of an earthquake.',
        marks: 2, tier: 'green',
        modelAnswer: `• The focus (hypocentre) is the point within the Earth's crust where the earthquake originates — where the rock fractures and seismic energy is first released (1).\n• The epicentre is the point on the Earth's surface directly above the focus; it is where the greatest intensity of shaking is usually felt (1).`
      },
      {
        q: 'Name two types of tectonic plate boundary and state whether they are associated with constructive or destructive activity.',
        marks: 2, tier: 'green',
        modelAnswer: `• Constructive (divergent) boundary — plates move apart; magma rises to fill the gap, creating new oceanic crust and forming volcanic features (e.g. Mid-Atlantic Ridge — Iceland) (1).\n• Destructive (convergent) boundary — plates move together; one (usually oceanic) is subducted into the mantle; creates powerful earthquakes, explosive volcanoes, and ocean trenches (e.g. Pacific Ring of Fire) (1).`
      },
    ],
    amber: [
      {
        q: 'Explain why earthquakes in LICs typically cause more deaths than earthquakes of similar magnitude in HICs.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Poor building quality — LICs lack the resources to construct earthquake-resistant buildings; traditional materials (unreinforced brick, adobe) collapse easily in strong shaking (e.g. 2010 Haiti earthquake, magnitude 7.0: ~230,000 deaths — poor construction; 2010 Chile earthquake, magnitude 8.8: ~500 deaths — strict building codes) (1).\n• Lack of early warning and emergency response capacity — LICs may lack seismograph networks, trained emergency services, and rescue equipment; response relies on local, often overwhelmed resources (1).\n• High population density in vulnerable areas — LIC cities often have dense, informal settlements on unstable ground (e.g. hillsides, reclaimed land) that amplify shaking and are hardest to reach for rescue teams (1).\n• Pre-existing poverty and lack of resilience — communities already suffering from poverty, poor healthcare, and weak infrastructure have less capacity to recover; food shortages, disease, and homelessness persist for years after the event (1).`
      },
      {
        q: 'Explain how a tsunami is formed following an earthquake.',
        marks: 4, tier: 'amber',
        modelAnswer: `• A tsunami is generated when a large earthquake occurs at a subduction zone beneath the ocean, causing a sudden vertical displacement of the seafloor (1).\n• The upward movement of the seafloor displaces an enormous volume of water, creating a series of waves that radiate outward from the epicentre in all directions (1).\n• In deep water the waves travel at speeds up to 800 km/h but have a very long wavelength and low height (less than 1 m), making them almost undetectable at sea (1).\n• As the waves approach shallow coastal water, their speed decreases but their height increases dramatically (shoaling) — waves can reach heights of 30 m or more; they surge inland with devastating force, inundating low-lying coastal areas (1).\n(Example: 2004 Indian Ocean tsunami — triggered by magnitude 9.1 earthquake off Sumatra; killed 230,000 across 14 countries; waves 30 m high in Aceh province.)`
      },
      {
        q: 'Describe and explain the impacts of a volcanic eruption you have studied.',
        marks: 4, tier: 'amber',
        modelAnswer: `(Montserrat 1995–1997 / Mount Pinatubo 1991 / Eyjafjallajökull 2010 — credit any appropriate named example.)\n(Montserrat, 1995–1997):\n• Primary impacts: pyroclastic flows destroyed the capital Plymouth and surrounding villages; 19 people killed; 6,000 of 12,000 population evacuated to the north of the island or emigrated (1).\n• Secondary impacts: ash covered farmland and destroyed crops; the economy collapsed as tourism fell and infrastructure was buried; the southern two-thirds of the island remained a restricted exclusion zone (1).\n• Long-term impacts: the island's population fell from 12,000 to 4,000 by 1998; major UK aid of ~£200 million was provided to rebuild the north of the island; volcanic tourism to view the buried Plymouth now generates some income (1).\n• Environmental impacts: new land created by lava flows; volcanic soils potentially fertile for future agriculture; geothermal energy potential (1).`
      },
      {
        q: 'Explain the immediate and long-term responses to a tectonic hazard you have studied.',
        marks: 4, tier: 'amber',
        modelAnswer: `(Nepal earthquake 2015 / Haiti earthquake 2010 / 2011 Japan tsunami — credit any appropriate example.)\n(Nepal earthquake, April 2015 — magnitude 7.8):\n• Immediate responses: search and rescue teams deployed from Nepal and internationally (UK, USA, India); UN launched a $415 million appeal; field hospitals set up; emergency food, water, and temporary shelters distributed; military used to reach remote Himalayan villages cut off by landslides (1).\n• International aid: over 70 countries provided assistance; $4.4 billion pledged at donor conference; UN helicopter airlifts reached isolated mountain communities (1).\n• Long-term responses: rebuilding of 600,000+ homes with earthquake-resistant designs using local materials; schools rebuilt to stronger standards; National Reconstruction Authority established (1).\n• Challenges: corruption delayed fund distribution; difficult terrain slowed reconstruction; many villages still not fully rebuilt 3 years later; tourist revenue (vital to economy) took 2–3 years to recover fully (1).`
      },
    ],
    red: [
      {
        q: 'Evaluate the extent to which people can be protected from the impacts of tectonic hazards. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `Monitoring and prediction:\n• Volcanic eruptions — scientists can monitor seismic activity, ground deformation, and gas emissions to give hours to weeks of warning; successful evacuations (e.g. Mount Pinatubo, 1991 — 60,000 evacuated, saved thousands of lives) (1).\n• Earthquakes — currently cannot be reliably predicted; only probabilistic hazard mapping identifies high-risk areas over decades; no short-term warning technology exists (1).\nEarly warning systems:\n• Japan's earthquake early warning system provides 30–60 seconds of warning after an earthquake is detected — enough to stop trains, trigger factory shutdowns, warn the public; this limited the additional casualties in the 2011 Tōhoku earthquake (1).\n• Pacific Tsunami Warning System gives hours of warning for distant tsunamis but is ineffective for local tsunamis; community-level education and evacuation routes are critical (1).\nBuilding design:\n• Earthquake-resistant building (e.g. Japan, California) can dramatically reduce casualties — same-magnitude earthquakes kill vastly fewer people in well-prepared HICs (1).\n• However, retrofitting existing buildings is extremely expensive and slow; much of the global urban stock remains vulnerable, particularly in LICs (1).\nConclusion:\n• Protection is much more achievable for volcanic eruptions and distant tsunamis, where monitoring gives useful warning time, than for earthquakes. The protection gap between HICs and LICs is stark and reflects wealth inequality as much as scientific capability — reducing vulnerability in LICs is as important as improving technology (1).`
      },
      {
        q: '"The impacts of tectonic hazards are more to do with human factors than physical factors." Discuss. [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `Physical factors affecting impact:\n• Magnitude — the energy released determines initial destructive power; the 2011 Japan earthquake (9.0) released ~1,000 times more energy than the 2010 Haiti quake (7.0) (1).\n• Depth of focus — shallow earthquakes (< 70 km) cause more surface shaking than deep-focus quakes; the Haiti earthquake had a shallow focus of only 13 km, amplifying destruction (1).\n• Proximity to population centres — the 2011 earthquake occurred offshore under the Pacific; a similar-magnitude onshore earthquake would have been catastrophic even in Japan (1).\nHuman factors affecting impact:\n• Poverty — the most important human factor; Haiti (GDP per capita ~$1,500 in 2010) suffered ~230,000 deaths; Chile (GDP per capita ~$12,000 in 2010) suffered ~500 deaths in a stronger earthquake 7 weeks later (1).\n• Building quality — poor construction (unreinforced concrete, brick) collapses in earthquakes; strict building codes and enforcement in Japan, California, and New Zealand dramatically reduce casualties (1).\n• Population density — dense urban populations in high-risk areas suffer greater total casualties; informal settlements on steep slopes (Port-au-Prince, Haiti) amplify disaster impacts (1).\n• Governance and preparedness — countries that invest in hazard mapping, early warning, emergency planning, and building regulation suffer far fewer deaths regardless of physical hazard level (1).\nConclusion:\n• Human factors are arguably the most significant determinants of impact in most cases — the "disaster gap" between rich and poor countries is primarily a human construct; physical factors set the hazard level but human vulnerability determines the outcome. The statement therefore has considerable merit, though physical factors (especially magnitude and proximity) remain important underlying causes (1).`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 3.2 Climate Change */
  '3.2': {
    green: [
      {
        q: 'State two pieces of evidence that suggest global temperatures are rising.',
        marks: 2, tier: 'green',
        modelAnswer: `• Global average temperature records — the Earth's average surface temperature has increased by approximately 1.1°C since the pre-industrial period (1850–1900); 2023 was the warmest year on record according to the WMO (1).\n• Retreating glaciers and ice sheets — the Greenland ice sheet is losing ~280 billion tonnes of ice per year; virtually all the world's mountain glaciers have retreated significantly since 1950 (e.g. Mer de Glace, France, has retreated over 2 km since 1870) (1).\n(Also accept: sea level rise; declining Arctic sea ice extent; earlier spring migration of species; coral bleaching.)`
      },
      {
        q: 'State two natural causes of climate change.',
        marks: 2, tier: 'green',
        modelAnswer: `• Milankovitch cycles — variations in the Earth's orbit (eccentricity), axial tilt, and wobble (precession) change the amount and distribution of solar radiation received, causing glacial and interglacial periods over tens of thousands of years (1).\n• Volcanic eruptions — major eruptions inject sulfur dioxide (SO₂) into the stratosphere, forming aerosols that reflect solar radiation and cause short-term cooling (e.g. Mount Pinatubo, 1991, caused a global temperature drop of ~0.5°C) (1).\n(Also accept: solar output variation — sunspot cycles; changes in ocean circulation.)`
      },
      {
        q: 'State what is meant by the enhanced greenhouse effect.',
        marks: 2, tier: 'green',
        modelAnswer: `The natural greenhouse effect is essential for life — greenhouse gases (CO₂, methane, water vapour) trap solar radiation re-emitted from the Earth's surface as long-wave radiation, warming the atmosphere (1). The enhanced greenhouse effect refers to the increase in this warming due to rising concentrations of greenhouse gases from human activities (burning fossil fuels, deforestation, agriculture), trapping more heat and raising global temperatures beyond natural levels (1).`
      },
      {
        q: 'Identify two human activities that contribute to climate change and state the greenhouse gas each produces.',
        marks: 4, tier: 'green',
        modelAnswer: `• Burning fossil fuels (coal, oil, gas) — releases carbon dioxide (CO₂) from combustion; power stations, transport, and industry are the largest sources (1).\n• Agriculture — livestock (cattle, sheep) produce methane (CH₄) through enteric fermentation; rice paddies also produce methane; nitrogen fertilisers produce nitrous oxide (N₂O) (1).\n(Also accept: deforestation — reduces CO₂ absorption and releases stored carbon; cement production — releases CO₂ from heating limestone.)`
      },
    ],
    amber: [
      {
        q: 'Explain how climate change is affecting people and environments in different parts of the world.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Arctic and polar regions — warming is 2–4× faster than the global average ("Arctic amplification"); ice loss threatens polar bear habitats; indigenous Arctic communities (e.g. Inuit) face loss of traditional hunting grounds and coastal erosion as permafrost thaws (1).\n• Small Island Developing States (SIDS) — sea-level rise threatens low-lying islands (e.g. Maldives, mean elevation < 1 m; Kiribati) with inundation and salinisation of freshwater supplies; the Maldives government has purchased land in India as a contingency (1).\n• Sub-Saharan Africa — more frequent and severe droughts reduce agricultural yields; the Sahel is experiencing desertification; food insecurity affects millions — the IPCC projects yields could fall 25% by 2050 without adaptation (1).\n• UK/Northern Europe — longer growing seasons and warmer summers bring some agricultural benefits; however, increased flood risk from more intense rainfall events and rising sea levels threatens coastal communities and infrastructure (1).`
      },
      {
        q: 'Explain the mitigation strategies used to reduce the causes of climate change.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Renewable energy transition — replacing fossil fuel power stations with solar, wind, and tidal energy reduces CO₂ emissions; the UK generated over 40% of its electricity from renewables in 2023 (1).\n• Energy efficiency — insulating buildings, improving vehicle fuel standards, and LED lighting reduce overall energy demand and therefore emissions without reducing economic activity (1).\n• Carbon capture and storage (CCS) — capturing CO₂ from power stations and industrial processes and storing it underground in geological formations; currently limited in scale and expensive but potentially significant at large scale (1).\n• International agreements — the Paris Agreement (2015) committed 196 countries to limiting global warming to well below 2°C; countries submit Nationally Determined Contributions (NDCs) to reduce emissions, though current commitments are insufficient to meet the target (1).`
      },
      {
        q: 'Explain the adaptation strategies used to manage the impacts of climate change.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Flood defences — sea walls, flood barriers, and managed retreat protect coastal communities from sea-level rise and increased flooding; the Netherlands' Delta Works is the world's most advanced coastal protection system (1).\n• Crop adaptation — scientists are developing drought- and heat-resistant crop varieties; farmers shift to different crops and adjust planting seasons in response to changing conditions (e.g. wine grapes now grown commercially in southern England) (1).\n• Water management — rainwater harvesting, desalination, and water recycling help communities adapt to reduced rainfall; the Murray-Darling Basin Plan in Australia regulates water use in response to climate-driven drought (1).\n• Emergency planning — countries in high-risk areas develop heatwave action plans, flood early warning systems, and drought contingency plans to protect vulnerable populations (e.g. UK National Adaptation Programme) (1).`
      },
      {
        q: 'Explain why it is difficult to reach international agreements on tackling climate change.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Conflicting national interests — developing countries argue they should not be denied the right to use cheap fossil fuels for economic growth as HICs did; HICs are reluctant to pay the full cost of transition (1).\n• Short-term vs. long-term thinking — democratic governments focus on short election cycles; the costs of reducing emissions are immediate while the benefits (avoiding future warming) are distant and uncertain, making strong action politically difficult (1).\n• Economic costs — fossil fuel industries lobby against regulation; countries dependent on coal, oil, and gas exports (e.g. Saudi Arabia, Russia) resist international agreements that would reduce demand (1).\n• Lack of enforcement — international agreements are voluntary; the Paris Agreement has no binding sanctions for non-compliance; countries that miss targets face no penalties (1).\n• Inequity of responsibility — the richest nations have emitted most greenhouse gases historically but the impacts are felt disproportionately by the poorest, least-responsible nations; disputes over "loss and damage" payments delay agreements (1).`
      },
    ],
    red: [
      {
        q: 'Evaluate how far individual actions can make a difference to climate change. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `Potential impact of individual action:\n• Dietary change — switching from a meat-heavy to a plant-based diet can reduce an individual's food-related carbon footprint by up to 73%; if adopted widely, global food emissions could fall by 50% (1).\n• Transport choices — choosing public transport, cycling, or an electric vehicle over a petrol car can save 1–2 tonnes of CO₂ per year per person; avoiding long-haul flights can reduce personal footprint by 3–5 tonnes (1).\n• Home energy — insulation, switching to renewable electricity, and low-carbon heating (heat pumps) can reduce household emissions by 2–5 tonnes/year (1).\nLimitations:\n• Systemic constraints — individual choices are limited by available infrastructure; without reliable public transport, renewable grids, or affordable EVs, individuals cannot easily reduce emissions (1).\n• Scale — 70% of global emissions come from just 100 companies; individual consumption accounts for a much smaller proportion; systemic economic change is required (1).\n• Inequality — green choices (EVs, heat pumps, organic food) are more expensive; only the affluent can easily adopt low-carbon lifestyles, limiting the potential reach of individual action (1).\nConclusion:\n• Individual action is necessary but not sufficient; it is most effective when enabled and encouraged by government policy (carbon pricing, subsidies for green technology, regulation), which can change the systems within which individuals make choices. The framing of climate change as primarily an individual responsibility has been criticised as deflecting attention from the systemic changes needed (1, for developed, nuanced conclusion).`
      },
      {
        q: '"The impacts of climate change will be felt most severely by the world\'s poorest people." Evaluate this statement. [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `Evidence supporting the statement:\n• Agricultural vulnerability — LIC populations in tropical regions (sub-Saharan Africa, South and South-East Asia) depend on rain-fed subsistence agriculture; even small changes in temperature and rainfall can cause crop failure and food insecurity; the IPCC projects 40–80% of smallholder farmers at risk by 2050 (1).\n• Exposure to climate hazards — LIC communities have lower adaptive capacity; SIDS like Kiribati and Tuvalu face existential threat from sea-level rise with no resources for coastal defence (1).\n• Health impacts — rising temperatures increase malaria, dengue, and cholera risk; LIC health systems lack capacity to respond (1).\n• Climate migration — the World Bank projects 216 million internal climate migrants by 2050, overwhelmingly in sub-Saharan Africa, South Asia, and Latin America; LIC governments cannot easily manage this displacement (1).\nCounterarguments / complexity:\n• HICs are not immune — European heatwaves (2003: ~70,000 deaths; 2022: ~60,000 excess deaths) show that wealthy countries also face severe impacts, particularly for vulnerable elderly populations (1).\n• Some LICs face less severe impacts — sub-polar and mountainous regions may benefit from longer growing seasons and reduced heating costs (1).\n• Arctic indigenous communities (HICs — Canada, Norway) face profound cultural and livelihood impacts from warming despite their countries' wealth (1).\nConclusion:\n• The statement is broadly correct — the injustice of climate change is that those who have contributed least (LICs are responsible for a fraction of historical emissions) face the worst impacts and have the least capacity to adapt. The concept of "climate justice" has entered international negotiations; wealthy nations bear a moral responsibility to support LIC adaptation. However, the impacts of climate change are becoming increasingly universal, and no country will be immune from severe consequences (1).`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 3.3 Water Management */
  '3.3': {
    green: [
      {
        q: 'State two reasons why global demand for water is increasing.',
        marks: 2, tier: 'green',
        modelAnswer: `• Population growth — the global population is projected to reach 9.7 billion by 2050; more people require more water for drinking, sanitation, and food production (1).\n• Economic development — as countries industrialise and living standards rise, per capita water consumption increases significantly — agriculture for export crops, manufacturing, and increased meat consumption all require more water (1).\n(Also accept: climate change reducing availability; urbanisation increasing domestic demand; expansion of irrigated agriculture.)`
      },
      {
        q: 'Identify two areas of the world that face water scarcity and explain why.',
        marks: 4, tier: 'green',
        modelAnswer: `• Middle East and North Africa (e.g. Saudi Arabia, Jordan) — located in arid/semi-arid zones with very low natural rainfall; high rates of population growth and economic development increase demand beyond sustainable supply; groundwater aquifers are being over-extracted (1).\n• Sub-Saharan Africa (e.g. Ethiopia, Kenya) — low rainfall and high variability from climate change; lack of water infrastructure (dams, pipelines, treatment plants) means much rainfall is not captured; 400 million people lack access to safe drinking water (1).`
      },
      {
        q: 'State what is meant by water stress.',
        marks: 2, tier: 'green',
        modelAnswer: `Water stress occurs when demand for water exceeds the available water supply in terms of quantity or quality, or when poor water quality restricts its use (1). A country is considered water stressed when its annual renewable water supply falls below 1,700 m³ per person; below 1,000 m³ is water scarcity; below 500 m³ is absolute scarcity — e.g. Kuwait and Bahrain (1).`
      },
      {
        q: 'State two ways in which water can be managed sustainably.',
        marks: 2, tier: 'green',
        modelAnswer: `• Water conservation — reducing leakage in distribution systems (UK water companies lose ~3 billion litres/day through leaky pipes), installing water-efficient appliances, and metering to encourage reduced consumption (1).\n• Rainwater harvesting — collecting and storing rainwater from roofs and surfaces for domestic use or irrigation, reducing pressure on centralised water supplies and aquifers (1).\n(Also accept: greywater recycling; drought-resistant crops; drip irrigation; restoring wetlands.)`
      },
    ],
    amber: [
      {
        q: 'Explain the causes of water insecurity in LICs.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Physical factors — many LICs are located in semi-arid or arid regions where rainfall is naturally low and unreliable; climate change is making rainfall more variable and droughts more severe (1).\n• Lack of water infrastructure — without dams, reservoirs, pipelines, and water treatment plants, rainfall cannot be captured and stored effectively; groundwater cannot be accessed safely without pumps and equipment (1).\n• Poverty — LIC governments cannot afford to invest in water infrastructure; households cannot afford piped water connections, relying on unsafe surface water or expensive water vendors (1).\n• Population pressure — rapid population growth increases demand faster than supply can be expanded; growing urban areas in LICs often lack the piped water infrastructure to serve new arrivals in informal settlements (1).`
      },
      {
        q: 'Explain the social and environmental impacts of water insecurity.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Health — drinking unsafe water causes ~1.5 million deaths per year from cholera, typhoid, and diarrhoea, mostly affecting children under 5 in LICs; the absence of sanitation linked to water scarcity causes further disease (1).\n• Education — in water-scarce communities, the task of collecting water (often walking 3–5 km to water sources) falls primarily on women and girls, reducing time available for education and economic activity (1).\n• Agriculture — water scarcity reduces irrigation, causing crop failure and food insecurity; desertification linked to over-extraction of groundwater reduces productive land permanently (1).\n• Ecosystem impacts — river water over-extraction depletes flows, damaging wetland habitats, reducing fish populations, and concentrating pollutants; the Aral Sea (Central Asia) was reduced to 10% of its original size by Soviet-era irrigation, causing a major ecological disaster (1).`
      },
      {
        q: 'Describe and evaluate one large-scale water management scheme.',
        marks: 5, tier: 'amber',
        modelAnswer: `(Three Gorges Dam, China / Aswan High Dam, Egypt / Colorado River Compact — credit any appropriate scheme.)\n(Three Gorges Dam, Yangtze River, China):\n• The dam is 185 m high and 2,335 m long; its reservoir extends 600 km upstream; it provides 22,500 MW of hydroelectric power (equivalent to 11 coal-fired power stations) and controls flooding for 15 million people living in the Yangtze flood plain (1).\n• Benefits: China's largest renewable energy source, reducing coal consumption; flood control protecting millions; improved navigation on the Yangtze River (1).\n• Social costs: 1.3 million people were displaced and resettled, many to poorer land; cultural heritage sites flooded (1).\n• Environmental costs: disrupted river sediment supply, damaging downstream ecosystems; blocked fish migration (Yangtze river dolphin now extinct); reservoir-induced landslides and pollution (1).\n• Evaluation: significant economic and flood-control benefits for China's development, but severe social and environmental costs; the resettlement programme was widely criticised for inadequate compensation (1).`
      },
      {
        q: 'Explain why water conflicts are increasing between countries.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Shared river basins — many rivers cross national borders; upstream countries can dam or divert water, reducing supply downstream; e.g. Ethiopia's Grand Ethiopian Renaissance Dam on the Blue Nile is disputed by Egypt and Sudan, who depend on Nile water for 85–90% of their freshwater (1).\n• Growing scarcity — as population growth and climate change increase pressure on limited freshwater resources, competition intensifies; groundwater aquifers shared between countries are increasingly over-exploited (1).\n• Unequal power — upstream countries have geographic advantages; downstream countries (often more dependent on shared water) have less leverage; international law on trans-boundary water rights is weak and contested (1).\n• Historical water agreements — many water-sharing treaties (e.g. the 1929 Nile Waters Treaty) were signed when populations were much lower and do not fairly reflect current needs; renegotiation is politically sensitive (1).`
      },
    ],
    red: [
      {
        q: 'Evaluate the success of strategies used to improve water security in areas of water scarcity. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `Large-scale engineering:\n• Dams and reservoirs store water for year-round use and provide HEP — Three Gorges Dam provides energy for millions; Aswan Dam controls Nile flooding. However, displacement, ecosystem damage, and downstream sediment starvation are major costs (1).\n• Desalination — Saudi Arabia and UAE meet >50% of freshwater needs through desalination of seawater; reliable and high-volume. However, extremely energy-intensive (typically powered by fossil fuels), expensive (~$1/m³ vs. ~$0.01/m³ for groundwater), and produces highly concentrated brine which damages marine ecosystems (1).\nWater transfers:\n• Moving water from water-surplus to water-deficit regions (e.g. China's South-North Water Diversion Project — diverts 44.8 billion m³/year). Highly effective at supplying cities but enormously expensive and controversial — Chinese scheme cost >$80 billion and displaced 345,000 people (1).\nSustainable/small-scale approaches:\n• Rainwater harvesting and drip irrigation — low-cost, community-scale solutions reducing demand and improving efficiency; drip irrigation reduces agricultural water use by 30–50% (e.g. Israel uses 45% less water per unit of food than global average) (1).\n• Community borehole and pump schemes in sub-Saharan Africa — reliable access to clean water at low cost; maintenance challenges and pump failures are a long-term problem, but NGO-supported schemes have significantly improved water access in rural Kenya and Tanzania (1).\nConclusion:\n• Large-scale solutions can be effective at scale but impose severe costs; sustainable, demand-management approaches are often more equitable and environmentally sound but insufficient for rapidly growing urban populations — an integrated approach combining both is most effective (1).`
      },
      {
        q: '"Water scarcity is primarily a political and economic problem rather than a physical one." Discuss this statement. [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `Arguments supporting the statement (political/economic factors):\n• Global water supply is physically sufficient — there is technically enough freshwater on Earth for the current and projected global population; the problem is distribution, access, and management, not total supply (1).\n• Poverty restricts access — 2.2 billion people lack safe drinking water; this is almost entirely a function of poverty and governance rather than physical scarcity — wealthy countries with low rainfall (Israel, UAE, Singapore) have achieved water security through technology and investment (1).\n• Governance failures — water is often priced too cheaply, encouraging waste; agricultural subsidies incentivise water-intensive crops in arid regions (e.g. cotton growing in Uzbekistan contributed to the Aral Sea disaster); corruption means infrastructure is not maintained (1).\n• Political disputes — trans-boundary water conflicts (Nile, Indus, Euphrates) are fundamentally political; technical solutions exist but are blocked by national interests (1).\nArguments against (physical factors are important):\n• Arid and semi-arid regions have genuinely low rainfall — no amount of political will creates water where none falls; sub-Saharan and Middle Eastern aridity is a fundamental physical constraint (1).\n• Climate change is altering physical availability — retreating glaciers reduce river flows in countries like Pakistan and Peru; declining Sahel rainfall is a physical reality beyond political control (1).\n• Remote populations — sparsely populated areas lack the water table depth, river access, or rainfall even for small-scale solutions; physical geography sets real limits (1).\nConclusion:\n• The statement is substantially correct — in most water-stressed regions, political will, economic investment, and fairer governance could dramatically reduce scarcity; the examples of water-secure desert nations prove this is achievable. However, physical geography sets the boundaries within which human agency operates; climate change is increasingly shrinking those boundaries, and no political solution can fully substitute for adequate physical water resources. A combined analysis is essential (1).`
      },
    ],
  },

};

if (typeof module !== 'undefined') module.exports = GEOGRAPHY_EDUQAS_WRITTEN;
