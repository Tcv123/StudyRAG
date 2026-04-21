// Geography Eduqas GCSE — Practice/Exam-Style Questions
// 12 topics × 40 written questions with mark schemes

const GEOGRAPHY_EDUQAS_PRACTICE = {
  '1.1': {
    name: 'Coastal Landscapes',
    questions: [
      {
        q: 'Describe the process of hydraulic action. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: waves/water force air into cracks in rock; 1 mark for: compression of air/water pressure weakens and breaks apart rock.',
      },
      {
        q: 'Explain how abrasion erodes a cliff face. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: waves pick up/carry sediment/pebbles/sand; 1 mark for: these are thrown/scraped against cliff face, wearing it away (like sandpaper).',
      },
      {
        q: 'What is attrition? [1 mark]',
        marks: 1,
        markScheme: '1 mark for: rocks/pebbles carried by the sea collide with each other, breaking into smaller, rounder, smoother fragments.',
      },
      {
        q: 'Describe the difference between constructive and destructive waves. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three of: constructive waves have a strong swash and weak backwash; destructive waves have a weak swash and strong backwash; constructive waves are low frequency/long wavelength; destructive waves are high frequency/short wavelength; constructive waves build up beaches; destructive waves erode coastlines.',
      },
      {
        q: 'Draw and label a diagram to show the formation of a headland and bay. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: alternating bands of hard and soft rock shown; soft rock eroded faster (labelled); headland = hard rock protruding into sea (labelled); bay = where soft rock eroded (labelled). Diagram must be labelled.',
        diagram: true,
      },
      {
        q: 'Explain the process of longshore drift. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: waves approach beach at angle (direction of prevailing wind); swash carries sediment up beach at same angle; backwash carries sediment back down beach at right angles (due to gravity); net movement of sediment along coast. Award 3 from these points.',
      },
      {
        q: 'Draw and label a diagram to show how longshore drift transports sediment along a coastline. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: arrows showing swash direction at an angle to beach; arrows showing backwash perpendicular to beach; overall direction of sediment movement indicated; prevailing wind direction labelled.',
        diagram: true,
      },
      {
        q: 'Describe the formation of a cave, arch, stack and stump. [6 marks]',
        marks: 6,
        markScheme: 'Level 3 (5–6 marks): Detailed, accurate explanation of all four features in sequence, using correct terminology throughout. Level 2 (3–4 marks): Explains most stages with some accurate detail; may lack full development. Level 1 (1–2 marks): Basic description of one or two features. Accept: waves erode a weakness/crack in headland → cave formed; continued erosion/two caves on either side join → arch formed; roof of arch collapses due to weathering/weight → stack; stack eroded at base by waves → stump (only visible at low tide).',
      },
      {
        q: 'Explain how a spit is formed. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: longshore drift transports sediment along coast; at a change in coastline direction (e.g. estuary/river mouth) the energy drops; deposition occurs; sediment accumulates above water as a spit; spit may curve due to secondary wind/wave direction (accept any 4).',
      },
      {
        q: 'What is meant by a wave-cut platform? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: a flat/gently sloping rocky surface at base of cliff/at sea level; 1 mark for: formed by erosion of cliff — as cliff retreats, platform is left behind.',
      },
      {
        q: 'Describe the formation of a wave-cut notch and explain how it leads to cliff retreat. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: erosion (hydraulic action/abrasion) concentrated at high tide/wave height; undercutting creates a notch at base of cliff; rock above notch is unsupported and collapses; cliff retreats and wave-cut platform is left behind.',
      },
      {
        q: 'Draw a labelled diagram of a wave-cut platform. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: cliff face shown; wave-cut notch at base of cliff labelled; wave-cut platform at sea level extending outward labelled.',
        diagram: true,
      },
      {
        q: 'Explain what is meant by solution as a process of coastal erosion. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: slightly acidic seawater; 1 mark for: dissolves soluble minerals in rock (e.g. limestone/chalk).',
      },
      {
        q: 'Describe the four main types of coastal transportation. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for correct description of: traction — large boulders rolled along seabed; saltation — pebbles bounce along seabed; suspension — fine sand/silt carried within water; solution — dissolved minerals carried in solution.',
      },
      {
        q: 'What is meant by the term "fetch"? [1 mark]',
        marks: 1,
        markScheme: '1 mark for: the distance of open water over which the wind has blown to generate a wave.',
      },
      {
        q: 'Explain why coasts with a longer fetch have more powerful waves. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: longer fetch means wind acts on water over greater distance; 1 mark for: more energy transferred to water / greater wave height and energy.',
      },
      {
        q: 'Describe the features of a beach. [2 marks]',
        marks: 2,
        markScheme: '1 mark each for any two of: accumulation of sand/shingle/sediment; found in sheltered bays; has a berm/berms (ridges) at high tide mark; backed by sand dunes or cliffs.',
      },
      {
        q: 'Explain how a bar is different from a spit. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: a bar extends all the way across a bay/estuary (connecting two headlands); 1 mark for: a spit is attached to land at one end only and does not seal off a bay.',
      },
      {
        q: 'Explain how a tombolo is formed. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: longshore drift deposits sediment; spit builds outward from land; spit reaches and connects to an offshore island, forming a tombolo.',
      },
      {
        q: 'Describe the difference between hard engineering and soft engineering at the coast. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: hard engineering uses artificial/man-made structures (e.g. sea walls, groynes); 1 mark for: soft engineering works with natural processes (e.g. beach nourishment, managed retreat).',
      },
      {
        q: 'Evaluate the effectiveness of sea walls as a coastal management strategy. [6 marks]',
        marks: 6,
        markScheme: 'Level 3 (5–6 marks): Evaluates advantages and disadvantages, reaches a supported conclusion. Level 2 (3–4 marks): Describes advantages and disadvantages with some development. Level 1 (1–2 marks): Basic points. Accept: advantages — effective at reflecting wave energy, long-lasting, protects property; disadvantages — expensive (£5,000–10,000 per metre), can cause increased erosion at base/flanks, visually intrusive, may reflect wave energy increasing erosion elsewhere.',
      },
      {
        q: 'Explain how groynes reduce coastal erosion. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: groynes are wooden/rock structures built perpendicular to shore; they interrupt longshore drift; sediment accumulates on updrift side building up beach; wider beach absorbs wave energy/protects cliff.',
      },
      {
        q: 'What is beach nourishment? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: adding (imported) sand or shingle to an existing beach; 1 mark for: to replace sediment lost to longshore drift / to widen the beach to absorb wave energy.',
      },
      {
        q: 'Explain what is meant by managed retreat (coastal realignment). [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: allowing low-lying coastal land to be flooded/eroded naturally; sea defences not maintained or removed; land is allowed to return to saltmarsh/intertidal habitat; cheapest option but compensates landowners for loss of land.',
      },
      {
        q: 'Describe the physical geography of the Holderness Coast. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: located on east coast of Yorkshire/England; cliffs made of soft boulder clay/glacial till; one of the fastest eroding coastlines in Europe (up to 2m per year); approximately 50 villages lost since Roman times.',
      },
      {
        q: 'Explain why the Holderness Coast erodes so rapidly. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: cliffs made of soft, easily eroded boulder clay; fetch across North Sea allows powerful destructive waves; long, exposed coastline with few natural protections; waves attack at base, undercutting cliffs (hydraulic action/abrasion); freeze-thaw weakens cliffs; longshore drift removes eroded material quickly.',
      },
      {
        q: 'Assess the impact of coastal erosion on communities along the Holderness Coast. [8 marks]',
        marks: 8,
        markScheme: 'Level 3 (6–8 marks): Detailed assessment, balances social, economic and environmental impacts, uses evidence, reaches supported judgement. Level 2 (3–5 marks): Describes a range of impacts with some development. Level 1 (1–2 marks): Basic impacts listed. Accept: loss of homes/properties (e.g. Easington, Skipsea); loss of farmland; threat to gas terminal at Easington; loss of local businesses/tourism; psychological stress for residents; BUT some areas protected (e.g. Hornsea, Mappleton) while others sacrificed — creates inequality/conflict.',
      },
      {
        q: 'Explain one conflict that arises from coastal management decisions. [3 marks]',
        marks: 3,
        markScheme: '1 mark for identifying a conflict (e.g. protecting one area increases erosion downdrift); 1 mark for explaining why conflict arises; 1 mark for example (e.g. Mappleton protected — erosion increased south of Mappleton, farmers lost land).',
      },
      {
        q: 'What is rock armour (rip rap)? [1 mark]',
        marks: 1,
        markScheme: '1 mark for: large boulders (often imported granite) placed at base of cliff/sea wall to absorb/dissipate wave energy.',
      },
      {
        q: 'Describe the formation of Chesil Beach. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: a tombolo/barrier beach connecting Isle of Portland to mainland Dorset; formed by longshore drift depositing shingle over thousands of years; notable for grading of pebbles from west (pea gravel) to east (cricket ball size).',
      },
      {
        q: 'Explain how revetments protect a coastline. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: sloping wooden/rock structures placed at base of cliff; absorb and dissipate wave energy; reduce hydraulic action on cliff base; allow water to drain through structure (reducing pressure).',
      },
      {
        q: 'Draw a labelled cross-section to show the profile of a destructive wave. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: steep front face shown; high crest; weak swash and strong backwash labelled/indicated.',
        diagram: true,
      },
      {
        q: 'To what extent is soft engineering preferable to hard engineering for managing the coast? [8 marks]',
        marks: 8,
        markScheme: 'Level 3 (6–8 marks): Evaluates both approaches with developed points, uses case study examples, reaches an overall judgement with justification. Level 2 (3–5 marks): Describes advantages of one or both approaches with some comparison. Level 1 (1–2 marks): Basic statements. Accept: soft engineering — cheaper, sustainable, works with nature, creates habitats; BUT may not protect high-value property; hard engineering — reliable, protects specific locations, high value areas; BUT expensive, causes problems elsewhere, visually intrusive. Conclusion should weigh these up.',
      },
      {
        q: 'Describe the characteristics of a constructive wave. [2 marks]',
        marks: 2,
        markScheme: '1 mark each for any two of: low, gentle waves; long wavelength; low frequency (6–8 per minute); strong swash, weak backwash; builds up beaches.',
      },
      {
        q: 'Explain how freeze-thaw weathering contributes to coastal cliff collapse. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: water enters cracks in cliff; freezes and expands (by ~9%), widening cracks; repeated freeze-thaw cycles enlarge cracks; eventually rock breaks off/cliff collapses.',
      },
      {
        q: 'Using a named example, explain the management strategies used to protect a stretch of coastline. [6 marks]',
        marks: 6,
        markScheme: 'Level 3 (5–6 marks): Detailed named example with explanation of at least two strategies, why they were chosen, and their effectiveness. Level 2 (3–4 marks): Named example with description of strategies, limited explanation. Level 1 (1–2 marks): Generic strategies without clear named example. Accept Holderness/Mappleton: rock groynes — reduce longshore drift, protect beach; rock armour — absorb wave energy at cliff base; cost ~£2 million (1991); protected village but increased erosion to south.',
      },
      {
        q: 'What is a corrosion/solution coast erosion process? [1 mark]',
        marks: 1,
        markScheme: '1 mark for: seawater dissolves soluble minerals/carbonate rocks such as limestone or chalk.',
      },
      {
        q: 'Explain how arches and stacks form from headlands. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: waves erode weaknesses/cracks in headland forming a cave; cave deepens and may break through headland forming an arch; continued erosion weakens arch roof; roof collapses leaving an isolated stack.',
      },
      {
        q: 'Draw and label the sequence of formation from headland to stump. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: headland shown with crack/weakness; cave formed at base; arch showing breakthrough; stack and stump shown as separate features. All must be labelled.',
        diagram: true,
      },
      {
        q: 'Assess the social and economic impacts of coastal flooding on low-lying coastlines. [8 marks]',
        marks: 8,
        markScheme: 'Level 3 (6–8 marks): Detailed assessment of both social and economic impacts, uses specific evidence or examples, clearly distinguishes between types of impact, reaches a supported overall judgement. Level 2 (3–5 marks): Describes both types of impact with some development or examples. Level 1 (1–2 marks): Basic listing of impacts. Accept social: displacement of communities, loss of life, psychological trauma, disruption to services; economic: damage to property and infrastructure, agricultural land lost, tourism affected, cost of flood defences.',
      },
    ],
  },
  '1.2': {
    name: 'River Landscapes',
    questions: [
      {
        q: 'What is meant by a drainage basin? [1 mark]',
        marks: 1,
        markScheme: '1 mark for: the area of land drained by a river and its tributaries.',
      },
      {
        q: 'Define the following terms: watershed, confluence, tributary. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: watershed — the boundary/ridge of high land separating two drainage basins; confluence — the point where two rivers/streams join; tributary — a smaller river/stream that flows into a larger river.',
      },
      {
        q: 'Explain the difference between infiltration and surface runoff. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: infiltration is water soaking/moving into the soil from the surface; 1 mark for: surface runoff is water flowing over the land surface (when infiltration rate is exceeded).',
      },
      {
        q: 'Describe how the long profile of a river changes from source to mouth. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: steep gradient in upper course; gradient becomes gentler in middle course; very gentle/almost flat gradient in lower course; overall the profile is concave upward.',
      },
      {
        q: 'Draw and label a diagram to show the long profile and cross-profile of a river in its upper, middle and lower course. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: long profile showing steep-to-gentle gradient; upper course cross-profile — narrow, V-shaped valley; middle course — wider valley, some floodplain; lower course — broad, flat floodplain. All features labelled.',
        diagram: true,
      },
      {
        q: 'Explain how a V-shaped valley and interlocking spurs are formed in the upper course of a river. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: vertical/downward erosion dominates in upper course; river cuts downward into bedrock; valley sides weathered and material falls into river; river lacks energy to erode sideways so valley is V-shaped; river winds around outcrops of hard rock creating interlocking spurs.',
      },
      {
        q: 'Draw and label a diagram of a V-shaped valley with interlocking spurs. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: V-shaped valley profile shown; interlocking spurs on alternating sides labelled; river at base of valley labelled.',
        diagram: true,
      },
      {
        q: 'Describe the process of hydraulic action in a river. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: force/pressure of fast-moving water compresses air in cracks in riverbed/bank; 1 mark for: this weakens and breaks apart the rock.',
      },
      {
        q: 'Explain how a waterfall is formed. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: river flows over a band of hard (resistant) rock overlying softer rock; soft rock erodes faster, undercutting the hard rock; hard rock overhangs and eventually collapses into plunge pool; plunge pool deepens by abrasion from falling water/load; waterfall retreats upstream over time leaving a gorge.',
      },
      {
        q: 'Draw and label a diagram to show the formation of a waterfall and gorge. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: hard rock cap shown above soft rock; plunge pool labelled beneath waterfall; gorge (steep-sided valley) labelled behind waterfall; direction of waterfall retreat indicated.',
        diagram: true,
      },
      {
        q: 'Explain how meanders are formed in the middle and lower course of a river. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: river swings from side to side due to variations in flow; water moves faster on outside bend (erosion by hydraulic action/abrasion → river cliff/steep bank); water moves slower on inside bend (deposition → slip-off slope/point bar); this accentuates the bend over time forming a meander.',
      },
      {
        q: 'Describe the formation of an ox-bow lake. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: meander bends become exaggerated over time; necks of meander narrow as erosion occurs on outer bends; river breaks through the neck during a flood; new straight channel forms; deposition seals off old meander loop forming an ox-bow lake.',
      },
      {
        q: 'What is a flood plain? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: flat area of land either side of a river in its lower course; 1 mark for: formed by deposition of alluvium (fertile sediment) during repeated flooding.',
      },
      {
        q: 'Explain how a levée is formed. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: during a flood, river overflows its banks; velocity decreases as water spreads out over floodplain; heaviest/coarsest material deposited closest to channel; over many floods these deposits build up raised banks (levées) either side of the channel.',
      },
      {
        q: 'Describe the features of a delta and explain how it forms. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: flat, low-lying land at river mouth; river splits into many distributaries; forms when river enters sea/lake and velocity drops suddenly; deposition of sediment faster than it can be removed by waves/tides; sediment builds up above water level.',
      },
      {
        q: 'Draw and annotate a hydrograph for a river in an urban area after a heavy rainstorm. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: axes labelled (discharge/cumecs on y-axis, time on x-axis); rising limb shown as steep; short lag time shown; high peak discharge labelled.',
        diagram: true,
      },
      {
        q: 'Explain what is meant by lag time on a hydrograph. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: the time difference between peak rainfall and peak discharge; 1 mark for: longer lag time = less flood risk / shorter lag time = greater flood risk.',
      },
      {
        q: 'Explain two factors that would increase flood risk in a drainage basin. [4 marks]',
        marks: 4,
        markScheme: '2 marks per factor (1 mark for naming, 1 mark for explanation). Accept: impermeable rock/soil — water cannot infiltrate, more runoff; prolonged/heavy rainfall — ground becomes saturated, more runoff; deforestation — less interception/transpiration, more runoff; urbanisation — tarmac/concrete impermeable, faster runoff; steep slopes — water reaches river faster; snowmelt — large amounts of water released rapidly.',
      },
      {
        q: 'Describe how deforestation affects the storm hydrograph of a river. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: less interception by tree canopy; more water reaches ground directly; increased surface runoff; shorter lag time and higher peak discharge on hydrograph.',
      },
      {
        q: 'Explain how urbanisation increases flood risk. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: buildings and roads create impermeable surfaces; water cannot infiltrate into soil; surface runoff increases; storm drains channel water rapidly into rivers; lag time decreases; peak discharge increases — greater flood risk.',
      },
      {
        q: 'Describe the drainage basin as a system, including inputs, stores and outputs. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: inputs — precipitation (rain, snow); stores — interception, soil moisture, groundwater, channel storage; flows/transfers — infiltration, throughflow, groundwater flow, surface runoff; outputs — evapotranspiration, river discharge to sea.',
      },
      {
        q: 'Explain how a dam and reservoir can be used to manage flooding. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: dam built across river valley; reservoir stores excess water during high rainfall; water released in controlled amounts; reduces peak discharge downstream.',
      },
      {
        q: 'Evaluate the use of hard engineering to manage flooding. [6 marks]',
        marks: 6,
        markScheme: 'Level 3 (5–6 marks): Evaluates both advantages and disadvantages of hard engineering with examples, reaches a supported conclusion. Level 2 (3–4 marks): Describes advantages and disadvantages. Level 1 (1–2 marks): Basic points only. Accept: advantages — reliable, long-lasting protection for settlements; dams provide HEP and water supply; embankments protect large areas; disadvantages — expensive, dams displace communities, trap sediment, alter downstream habitats; channel straightening increases downstream flood risk.',
      },
      {
        q: 'Explain how afforestation can reduce flood risk. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: trees intercept rainfall; roots increase infiltration capacity of soil; transpiration returns water to atmosphere; all reduce surface runoff and lag time is increased.',
      },
      {
        q: 'What is floodplain zoning? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: restricting types of land use in flood-risk areas of the floodplain; 1 mark for: e.g. only parks/sports fields in highest risk zones — reduced property damage when flooding occurs.',
      },
      {
        q: 'Describe the upper course of the River Tees. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: rises in Pennines/Cross Fell; steep gradient; narrow, fast-flowing channel; V-shaped valleys and waterfalls (High Force — tallest waterfall in England at ~21m); hard volcanic rock (whinstone).',
      },
      {
        q: 'Using the River Tees as an example, describe how the river changes from source to mouth. [6 marks]',
        marks: 6,
        markScheme: 'Level 3 (5–6 marks): Detailed description of changes across all three courses with accurate named features/places and correct use of terminology. Level 2 (3–4 marks): Describes changes in two courses, some terminology. Level 1 (1–2 marks): Basic changes. Accept: upper — steep, narrow, V-shaped valleys, High Force waterfall, hard rock; middle — wider valley, meanders, floodplain widens; lower — broad floodplain, levées, Teesside conurbation, industry, mouth at North Sea.',
      },
      {
        q: 'Explain how abrasion and attrition differ as river erosion processes. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: abrasion — sediment carried by river scrapes/grinds against riverbed and banks wearing them away; 1 mark for: attrition — rocks/stones carried by river collide with each other, becoming smaller and more rounded.',
      },
      {
        q: 'What is throughflow? [1 mark]',
        marks: 1,
        markScheme: '1 mark for: water that has infiltrated into the soil and moves laterally through the soil towards the river channel.',
      },
      {
        q: 'Explain how the cross-profile of a river channel changes from source to mouth. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: in upper course — narrow and shallow channel, rough/angular bed; in middle course — wider and deeper, smoother bed due to attrition; in lower course — very wide and deep channel, low gradient, large discharge; channel becomes more efficient downstream.',
      },
      {
        q: 'Describe how a flood warning system can reduce the impacts of flooding. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: monitors rainfall and river levels; gives advance warning to people in flood-risk areas; allows time for evacuation of people/valuables; reduces loss of life and property damage.',
      },
      {
        q: 'To what extent are soft engineering strategies more sustainable than hard engineering for flood management? [8 marks]',
        marks: 8,
        markScheme: 'Level 3 (6–8 marks): Evaluates sustainability of both approaches with specific examples, considers environmental/social/economic dimensions, reaches a supported overall judgement. Level 2 (3–5 marks): Compares both approaches, some development. Level 1 (1–2 marks): Basic description. Accept: soft — cheaper, environmentally friendly, improves habitats, long-term; hard — effective short-term but expensive, can cause downstream problems, harms ecosystems; conclusion should weigh these and reach a judgement.',
      },
      {
        q: 'Explain the processes of traction and saltation in river transportation. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: traction — largest/heaviest boulders rolled along riverbed by force of water; 1 mark for: saltation — smaller pebbles bounced/hopped along riverbed.',
      },
      {
        q: 'Explain why deposition occurs in the lower course of a river. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: river slows as gradient decreases; discharge may decrease (e.g. spread over floodplain during flood); when velocity drops below competency, river cannot carry its load; heaviest/largest particles deposited first.',
      },
      {
        q: 'Describe two ways rivers are used by people that can increase flood risk. [4 marks]',
        marks: 4,
        markScheme: '2 marks per point. Accept: urbanisation — impermeable surfaces increase runoff (1 mark) causing flashier hydrograph/higher peak discharge (1 mark); deforestation — removes interception and transpiration (1 mark) increasing runoff and reducing lag time (1 mark).',
      },
      {
        q: 'What is groundwater flow? [1 mark]',
        marks: 1,
        markScheme: '1 mark for: the slowest transfer in the drainage basin — water moves through pores in rock/saturated rock below the water table towards the river.',
      },
      {
        q: 'Explain how the falling limb of a hydrograph shows the river returning to base flow. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: the falling limb shows discharge decreasing after peak discharge; 1 mark for: as surface runoff ends, river relies on slower throughflow and groundwater — discharge returns gradually to base flow.',
      },
      {
        q: 'Draw and label a cross-section through a meander showing erosion and deposition zones. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: outer bank — river cliff, faster flow, erosion labelled; inner bank — slip-off slope/point bar, slower flow, deposition labelled; arrows indicating water flow pattern across channel.',
        diagram: true,
      },
      {
        q: 'Assess the social, economic and environmental impacts of flooding on a named area. [8 marks]',
        marks: 8,
        markScheme: 'Level 3 (6–8 marks): Detailed assessment of all three types of impact using named evidence, balanced and reaches a supported conclusion. Level 2 (3–5 marks): Covers at least two types of impact with some development. Level 1 (1–2 marks): Basic impacts listed. Accept any recent UK/global flood. Social: loss of life, homelessness, trauma, disruption to services; Economic: property damage, loss of business, cost of repairs; Environmental: contamination of water sources, damage to habitats/ecosystems, soil erosion.',
      },
      {
        q: 'Explain why a river with steep valley sides and impermeable rock has a shorter lag time than one in a gentle, permeable area. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: steep sides mean water reaches river faster; impermeable rock means water cannot infiltrate; surface runoff is rapid; lag time is therefore shorter; permeable rock allows infiltration/throughflow which is slower, increasing lag time.',
      },
    ],
  },
  '1.3': {
    name: 'Glaciated Landscapes',
    questions: [
      {
        q: 'What is meant by the glacial budget? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: the balance between accumulation (snowfall adding to glacier) and ablation (melting/evaporation removing ice); 1 mark for: positive budget = glacier advances; negative budget = glacier retreats.',
      },
      {
        q: 'Explain the difference between basal sliding and internal deformation as mechanisms of glacial movement. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: basal sliding — meltwater at base of glacier acts as lubricant, glacier slides over bedrock; internal deformation — ice crystals within glacier deform/recrystallise under pressure and gravity, causing slow flow; basal sliding faster than internal deformation.',
      },
      {
        q: 'Describe the process of freeze-thaw (frost shattering) weathering. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: water enters cracks/joints in rock and freezes; 1 mark for: water expands by ~9% on freezing, widening cracks; repeated cycles break off angular fragments of rock.',
      },
      {
        q: 'Explain how abrasion and plucking erode the landscape under a glacier. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: abrasion — rock fragments embedded in base of glacier grind against bedrock (like sandpaper), smoothing and scratching it (striations); plucking/quarrying — meltwater freezes around fragments of bedrock; as glacier moves forward it pulls/plucks these fragments away from the bedrock surface.',
      },
      {
        q: 'Draw and label a diagram to show the formation of a corrie (cirque). [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: north-facing/sheltered hollow shown; snow accumulates and compresses to ice; rotational sliding of ice shown (rotational movement arrows); steep back wall from plucking; rock lip/threshold at front; tarn shown if present.',
        diagram: true,
      },
      {
        q: 'Explain how a corrie is formed. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: snow collects in north/east-facing hollow (less sun); snow compresses to form glacier ice; glacier erodes backward and downward by rotational sliding; plucking steepens back wall; abrasion deepens floor; rock lip at front formed by reduced erosion; tarn forms in hollow after glacier melts.',
      },
      {
        q: 'What is an arête? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: a narrow, knife-edged ridge between two corries; 1 mark for: formed as two adjacent corries erode backward into a mountain from opposite sides.',
      },
      {
        q: 'Explain how a pyramidal peak is formed. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: three or more corries form on different sides of a mountain; they erode back into the mountain from multiple directions; the central summit is left as a steep-sided pyramid shape (e.g. Snowdon/The Matterhorn).',
      },
      {
        q: 'Describe the differences between a V-shaped valley and a U-shaped valley. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three: V-shaped — formed by river erosion, narrow, steep sides, river at bottom; U-shaped — formed by glacial erosion, wide flat floor, very steep sides, often contains a misfit stream; U-shaped wider and deeper; U-shaped has truncated spurs (cut off by glacier).',
      },
      {
        q: 'Draw and label a diagram to show a U-shaped valley with a hanging valley and ribbon lake. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: U-shape of main valley clearly shown; truncated spurs labelled; hanging valley shown entering main valley from height (with waterfall); ribbon lake on valley floor labelled.',
        diagram: true,
      },
      {
        q: 'Explain how truncated spurs are formed by glacial erosion. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: before glaciation, river valley has interlocking spurs; glacier moves down valley and cannot wind around spurs; glacier erodes and cuts off ends of spurs leaving steep cliff faces (truncated spurs).',
      },
      {
        q: 'What is a hanging valley? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: a tributary valley that joins a main U-shaped valley at a higher level than the main valley floor; 1 mark for: formed because the smaller tributary glacier eroded less deeply than the larger main glacier; often has a waterfall where it meets the main valley.',
      },
      {
        q: 'Explain how ribbon lakes form in glaciated valleys. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: glacier erodes valley floor unevenly; softer rock or areas of compression eroded more deeply; after glacier melts these depressions fill with water; moraine may dam the valley helping to create lake.',
      },
      {
        q: 'Describe the features of a roche moutonnée. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: smoothed, gently sloping upstream (stoss) face — polished by abrasion; rough, jagged, steep downstream (lee) face — caused by plucking; asymmetric shape showing direction of ice movement.',
      },
      {
        q: 'Explain the difference between till and outwash. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: till (boulder clay) — unsorted, unstratified sediment deposited directly by glacier; 1 mark for: outwash — sorted, stratified sediment deposited by meltwater streams beyond snout of glacier.',
      },
      {
        q: 'What is a drumlin? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: a smooth, elongated hill made of glacial till; 1 mark for: formed under a moving glacier — steep blunt end (stoss) faces direction ice came from; tapers in direction of ice flow (lee end).',
      },
      {
        q: 'Describe the four types of moraine. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: terminal moraine — ridge of till at maximum advance of glacier; lateral moraine — deposited along sides of glacier (from weathered valley walls); medial moraine — ridge in middle of glacier where two glaciers merge; ground moraine — till deposited beneath glacier as it moves.',
      },
      {
        q: 'Draw and label a diagram to show the different types of moraine associated with a glacier. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: glacier outline shown; lateral moraine on both sides labelled; medial moraine in middle (from tributary) labelled; terminal moraine at snout labelled.',
        diagram: true,
      },
      {
        q: 'What is an erratic? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: a rock/boulder that has been transported by a glacier; 1 mark for: the rock is of a different type from the bedrock on which it now rests (e.g. limestone boulder on granite).',
      },
      {
        q: 'Explain how eskers and kames are formed by fluvioglacial processes. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: eskers — ridges of sorted sand and gravel deposited by meltwater streams flowing in tunnels under glacier; kames — hills/mounds of stratified sand and gravel deposited at margin/front of glacier by meltwater; both feature sorted/stratified material (unlike till); kames may also form in crevasses.',
      },
      {
        q: 'Describe the features of a periglacial environment. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: area around edge of glacier/ice sheet; permanently frozen ground (permafrost); freeze-thaw weathering very active; solifluction; patterned ground (ice wedge polygons, stone circles); little precipitation (polar desert).',
      },
      {
        q: 'What is permafrost? [1 mark]',
        marks: 1,
        markScheme: '1 mark for: permanently frozen ground/subsoil that remains at or below 0°C for at least two consecutive years.',
      },
      {
        q: 'Explain how solifluction occurs in periglacial areas. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: active layer (surface) thaws in summer; water cannot drain through permafrost beneath; waterlogged soil/sediment slowly flows downslope under gravity; creates lobes of sediment (solifluction lobes).',
      },
      {
        q: 'Explain how patterned ground forms in periglacial areas. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: freeze-thaw sorts sediment by size; repeated freezing pushes larger stones outward/upward; stones arranged in circles, polygons or stripes on slopes; ice wedge polygons form as ground contracts in cold, cracks fill with water which freezes.',
      },
      {
        q: 'Describe one conflict between tourism and conservation in a glaciated upland area. [3 marks]',
        marks: 3,
        markScheme: '1 mark for: identifying conflict (e.g. footpath erosion, litter, overcrowding); 1 mark for: explaining cause (tourism pressure on fragile landscape); 1 mark for: impact on landscape/ecosystem (erosion of paths, disturbance of wildlife, damage to habitats). Accept Snowdonia example.',
      },
      {
        q: 'Using Snowdonia as an example, describe the opportunities that glaciated landscapes provide for tourism. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: dramatic scenery (U-shaped valleys, arêtes, peaks) attracts walkers/climbers; Snowdon most visited mountain in Wales/UK; mountain railway; water sports on ribbon lakes; walking/cycling trails; brings £$£ to local economy (approximately 4 million visitors/year).',
      },
      {
        q: 'Explain how tourism in Snowdonia/glaciated uplands can damage the environment. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: footpath erosion — vegetation worn away, soil compacted/eroded on popular routes (e.g. Snowdon path); littering; car park/road building disrupts habitats; noise pollution disturbs wildlife; water pollution from visitor numbers.',
      },
      {
        q: 'Evaluate the strategies used to manage tourism in a glaciated upland area. [6 marks]',
        marks: 6,
        markScheme: 'Level 3 (5–6 marks): Evaluates strategies with specific examples, considers effectiveness and drawbacks, reaches a supported conclusion. Level 2 (3–4 marks): Describes strategies with some evaluation. Level 1 (1–2 marks): Basic strategies listed. Accept Snowdonia: footpath repair using stone pitching; visitor management (car park charges); Snowdon mountain railway reduces walkers on summit path; wardening; information centres; BUT hard to enforce without restricting access, expensive to maintain.',
      },
      {
        q: 'What is an outwash plain (sandur)? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: a flat plain of sorted sand and gravel beyond the snout/terminus of a glacier; 1 mark for: deposited by meltwater streams flowing out from the glacier — material is sorted/layered by size.',
      },
      {
        q: 'Explain why glacial landscapes are important for water supply. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: glaciers store large amounts of freshwater; meltwater feeds rivers (important in dry seasons); reservoirs built in glaciated valleys (e.g. Thirlmere, Wales supplies water to Manchester); permeable glacial sediments store groundwater.',
      },
      {
        q: 'Describe the glacial budget and explain how it affects glacier advance or retreat. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: budget = difference between accumulation (snow gain) and ablation (melting loss); equilibrium line separates zones; positive budget (more accumulation than ablation) → glacier advances; negative budget (more ablation than accumulation) → glacier retreats; currently most glaciers have negative budgets due to climate change.',
      },
      {
        q: 'Explain how meltwater channels are formed. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: channels carved by meltwater flowing under, through or beside glaciers; 1 mark for: often left as dry/misfit valleys in landscape after glacier retreats.',
      },
      {
        q: 'To what extent has human activity increased the threats to glaciated landscapes? [8 marks]',
        marks: 8,
        markScheme: 'Level 3 (6–8 marks): Evaluates human threats with named evidence, compares to natural threats, reaches a supported judgement with consideration of relative importance. Level 2 (3–5 marks): Describes human and natural threats, some comparison. Level 1 (1–2 marks): Basic threats listed. Accept: human — climate change (glacier retreat), tourism damage, quarrying/mining, overgrazing; natural — tectonic activity, climate variability; conclusion should judge extent human vs natural, using evidence.',
      },
      {
        q: 'Draw a diagram to show the cross-section of a corrie after the glacier has melted, including the tarn. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: steep back wall shown; over-deepened basin/hollow; rock lip/threshold at front; tarn (lake) filling the hollow labelled.',
        diagram: true,
      },
      {
        q: 'Explain why glaciated areas are used for farming and how this might conflict with conservation. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: glacial till is fertile — good for pastoral farming (sheep/cattle); flat valley floors good for arable farming; overgrazing removes vegetation, causes soil erosion, reduces biodiversity; hedgerow/wall removal changes landscape character. Conflict: farmers want to maximise land use, conservationists want to protect natural habitats.',
      },
      {
        q: 'What evidence suggests that Snowdonia was glaciated in the past? [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three: U-shaped valleys (e.g. Nant Ffrancon); corries with tarns (e.g. Glaslyn); arêtes (e.g. Crib Goch); pyramidal peak (Snowdon); ribbon lakes (e.g. Llyn Tegid/Bala Lake); erratics; moraines; striations on rock.',
      },
      {
        q: 'Explain how quarrying in glaciated areas can conflict with tourism and conservation. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: quarrying provides jobs and materials (economic benefit); large open-cast quarries visible in landscape (e.g. Penrhyn, Dinorwic slate quarries in Snowdonia); noise, dust and lorry traffic deters tourists; destroys habitats and glacial landforms; creates conflict between economic and environmental interests.',
      },
      {
        q: 'Describe the characteristics of glacial till. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: unsorted — mixture of all particle sizes from boulders to clay; 1 mark for: unstratified — no distinct layers (unlike fluvioglacial material).',
      },
      {
        q: 'Suggest why corries in the UK are typically found on north or east-facing slopes. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: north/east-facing slopes receive less direct sunlight (in northern hemisphere); 1 mark for: snow accumulates and is preserved for longer, allowing compaction into glacier ice and hollow enlargement through rotational erosion.',
      },
      {
        q: 'Compare the characteristics of glacial till and fluvioglacial outwash deposits. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three: till is unsorted whereas outwash is sorted by size; till is unstratified whereas outwash shows clear layering/stratification; till has angular fragments whereas outwash particles are rounded/smoother (worked by water); till deposited directly by ice, outwash deposited by meltwater streams; till found beneath and at glacier margins, outwash found beyond the snout on the sandur.',
      },
    ],
  },
  '1.4': {
    name: 'Weather and Climate',
    questions: [
      {
        q: 'State two factors that affect the UK\'s climate. [2 marks]',
        marks: 2,
        markScheme: '1 mark each for any two of: latitude; altitude; distance from the sea (maritime influence); prevailing south-westerly winds; North Atlantic Drift (warm ocean current).',
      },
      {
        q: 'Explain how the North Atlantic Drift affects the UK\'s climate. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: warm ocean current flowing from Gulf of Mexico north-east towards UK; warms air passing over it; brings mild temperatures to west coast of UK in winter; keeps ports ice-free; UK warmer than expected for its latitude.',
      },
      {
        q: 'Explain how altitude affects temperature and precipitation in the UK. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: temperature decreases with altitude (approximately 1°C per 100m); higher land forces air to rise, cool and condense → orographic/relief rainfall; western uplands (e.g. Welsh mountains, Pennines, Scottish Highlands) receive most rainfall; rain shadow on leeward side.',
      },
      {
        q: 'Describe the characteristics of the polar maritime air mass as it affects the UK. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: source region — north Atlantic/Arctic Ocean; characteristics — cool/cold, moist; most common air mass affecting UK; brings cloud, rain and showers; cooler temperatures in summer; less cold in winter than polar continental.',
      },
      {
        q: 'Compare the characteristics of tropical maritime and polar continental air masses. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: tropical maritime — source south Atlantic, warm/mild, moist, brings mild wet weather, affects UK in winter/autumn; polar continental — source Scandinavia/Siberia, cold, dry; brings cold clear conditions in winter, possibly snow from east; may bring warm dry conditions in summer.',
      },
      {
        q: 'Describe the sequence of weather associated with the passage of a depression over the UK. [6 marks]',
        marks: 6,
        markScheme: 'Level 3 (5–6 marks): Detailed description of weather changes in order from warm sector approach to cold front clearance, using correct terminology. Level 2 (3–4 marks): Describes most stages with some accuracy. Level 1 (1–2 marks): Basic description. Accept: ahead of warm front — cirrus then altostratus clouds, pressure falling, wind picking up, temperature falling; at warm front — nimbostratus, steady rain, temperature rises, wind veers; warm sector — stratocumulus, drizzle, mild; at cold front — cumulonimbus, heavy rain/thunder, temperature drops sharply, pressure rises; behind cold front — cumulus, bright spells and showers.',
      },
      {
        q: 'Draw and label a cross-section through a depression showing the warm and cold fronts. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: warm front shown with correct symbol (half circles on leading edge); cold front shown with correct symbol (triangles); warm sector between fronts labelled; cloud types associated with each front shown/labelled (e.g. nimbostratus at warm front, cumulonimbus at cold front).',
        diagram: true,
      },
      {
        q: 'Explain how a depression forms. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: depressions form where warm tropical air meets cold polar air along the polar front; warm air is less dense and rises above cold air; this creates low pressure at the surface; the air masses swirl around the low due to Coriolis effect (anticlockwise in northern hemisphere); warm and cold fronts develop.',
      },
      {
        q: 'Describe the weather typically brought by a summer anticyclone in the UK. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: high pressure; descending air — no clouds/few clouds; very warm/hot temperatures; dry conditions/drought risk; light winds; possibly morning mist/fog.',
      },
      {
        q: 'Compare the weather of summer and winter anticyclones in the UK. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: summer — hot, dry, sunny, light winds, possible heatwave/hosepipe bans; winter — cold, clear skies, frost/fog, ground frost/black ice, possible snow in upland areas; both — high pressure, descending air, dry conditions; winter is cold because clear skies allow heat to escape at night (radiation fog common).',
      },
      {
        q: 'What are isobars on a synoptic chart? [1 mark]',
        marks: 1,
        markScheme: '1 mark for: lines on a weather map connecting places of equal atmospheric pressure.',
      },
      {
        q: 'Explain what closely spaced isobars on a synoptic chart indicate. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: closely spaced isobars indicate a steep pressure gradient; 1 mark for: steep pressure gradient causes strong winds.',
      },
      {
        q: 'Draw and annotate a synoptic chart showing a depression centred over the UK. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: low pressure centre labelled (L); isobars drawn around centre; warm front symbol shown correctly; cold front symbol shown correctly.',
        diagram: true,
      },
      {
        q: 'Describe three pieces of evidence that show the Earth\'s climate is changing. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three: rising global average temperatures (instrumental records show ~1.1°C rise since 1850); rising sea levels (thermal expansion + ice melt); ice cores show increased CO₂ concentrations; retreat of glaciers and ice sheets; shifting seasons (phenology — earlier blossom/migration); reduced Arctic sea ice extent.',
      },
      {
        q: 'Explain how ice cores provide evidence for climate change. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: ice cores drilled from Antarctic/Greenland ice sheets; trapped air bubbles contain samples of ancient atmosphere; analysis shows CO₂ and methane concentrations at different times in the past; also shows temperature variations (from oxygen isotope ratios); provide record going back ~800,000 years.',
      },
      {
        q: 'Explain two natural causes of climate change. [4 marks]',
        marks: 4,
        markScheme: '2 marks per cause: Milankovitch cycles — changes in Earth\'s orbit/tilt/wobble over thousands of years alter the amount of solar radiation reaching Earth (1 mark) changing global temperatures (1 mark); volcanic eruptions — large eruptions eject sulphur dioxide into stratosphere (1 mark) which reflects solar radiation back to space causing cooling (1 mark). Also accept: changes in solar output.',
      },
      {
        q: 'Explain the enhanced greenhouse effect and how it causes global warming. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: sun\'s radiation (short-wave) passes through atmosphere and warms Earth\'s surface; Earth emits long-wave (infrared) radiation back outward; greenhouse gases (CO₂, methane, water vapour, nitrous oxide) absorb and re-emit this long-wave radiation; human activities have increased concentrations of greenhouse gases (burning fossil fuels, deforestation, agriculture); more radiation trapped → enhanced greenhouse effect → rising temperatures.',
      },
      {
        q: 'Describe two impacts of climate change on the UK. [4 marks]',
        marks: 4,
        markScheme: '2 marks per impact. Accept: increased flood risk — more intense rainfall events (1 mark) → more frequent river/coastal flooding (1 mark); heatwaves — more frequent/intense summer heat (1 mark) → health risks, water shortages, crop stress (1 mark); changing seasons — earlier spring, milder winters; coastal erosion — sea level rise increases rate of erosion.',
      },
      {
        q: 'Explain two global impacts of climate change. [4 marks]',
        marks: 4,
        markScheme: '2 marks per impact. Accept: sea level rise — melting ice sheets/thermal expansion (1 mark) → flooding of low-lying islands/coasts e.g. Maldives, Bangladesh (1 mark); food insecurity — changing rainfall patterns/droughts (1 mark) → crop failures in already food-insecure regions (1 mark); extreme weather events; species extinction; desertification.',
      },
      {
        q: 'Distinguish between mitigation and adaptation in the context of climate change. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: mitigation — actions to reduce greenhouse gas emissions/slow the rate of climate change (e.g. renewable energy, reducing deforestation); 1 mark for: adaptation — adjusting to the effects of climate change that are already occurring or expected (e.g. flood defences, drought-resistant crops).',
      },
      {
        q: 'Explain two strategies to mitigate climate change. [4 marks]',
        marks: 4,
        markScheme: '2 marks per strategy: renewable energy (solar/wind/hydro) — replaces fossil fuels (1 mark), reduces CO₂ emissions (1 mark); afforestation — trees absorb CO₂ from atmosphere (1 mark), acts as carbon sink (1 mark). Also accept: carbon capture and storage, improving energy efficiency, electric vehicles, international agreements (e.g. Paris Agreement).',
      },
      {
        q: 'Explain two strategies to adapt to climate change. [4 marks]',
        marks: 4,
        markScheme: '2 marks per strategy. Accept: flood defences (sea walls, flood barriers) — protect coastal/low-lying communities from rising sea levels and flooding (1 mark each); drought-resistant crop varieties — ensure food security in areas experiencing reduced rainfall (1 mark each); managed retreat; early warning systems.',
      },
      {
        q: 'Describe the characteristics of the tropical continental air mass. [2 marks]',
        marks: 2,
        markScheme: '1 mark each for: source region — north Africa/Sahara Desert; warm and dry; brings hot, dry, sunny weather in summer; occasionally brings haze and dust; less common than other air masses affecting UK.',
      },
      {
        q: 'To what extent are human factors more important than natural factors in causing climate change? [8 marks]',
        marks: 8,
        markScheme: 'Level 3 (6–8 marks): Evaluates both human and natural factors with evidence and examples, reaches a supported overall judgement with clear reasoning. Level 2 (3–5 marks): Describes human and natural factors, some evaluation. Level 1 (1–2 marks): Basic description. Accept: human — burning fossil fuels, deforestation, agriculture all increasing greenhouse gas concentrations rapidly; rate of change unprecedented; IPCC 97% scientific consensus; natural — Milankovitch, volcanic, solar variability explain past changes but not current rapid warming; conclusion should judge relative importance with evidence.',
      },
      {
        q: 'Explain how the UK\'s distance from the sea affects its climate. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: sea heats and cools more slowly than land (higher specific heat capacity); coasts have milder winters and cooler summers (maritime climate); areas further inland (e.g. eastern England) have greater temperature extremes (continental influence); western UK more influenced by Atlantic, eastern UK drier.',
      },
      {
        q: 'Describe the weather at a cold front. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: cold air undercuts warm air rapidly; steep front → very heavy, intense rainfall/thunder; cumulonimbus clouds; temperature drops sharply; pressure rises; wind may veer (change direction); short duration of heavy rain.',
      },
      {
        q: 'Explain how phenological evidence shows that climate is changing. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: phenology records timing of biological events (blossom dates, bird migration, first appearance of insects); 1 mark for: records show these events are occurring earlier (e.g. cherry blossom earlier, birds arriving/nesting earlier) indicating earlier/warmer springs — consistent with warming.',
      },
      {
        q: 'What is the difference between weather and climate? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: weather is the day-to-day conditions of the atmosphere (temperature, rainfall, wind speed); 1 mark for: climate is the average weather conditions of a place over a long period (30 years).',
      },
      {
        q: 'Explain how Milankovitch cycles cause long-term climate change. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: Earth\'s orbit around sun changes shape (eccentricity — circular to elliptical, ~100,000 year cycle); Earth\'s axial tilt changes (obliquity — 22.1–24.5°, ~41,000 year cycle); Earth\'s wobble on its axis (precession — ~26,000 year cycle); these cycles change the distribution/amount of solar radiation reaching Earth, causing glacial/interglacial cycles.',
      },
      {
        q: 'Describe two pieces of evidence from temperature records that show climate change is occurring. [4 marks]',
        marks: 4,
        markScheme: '2 marks per piece of evidence. Accept: instrumental temperature records since 1850 — show ~1.1°C average global warming (1 mark), with 19 of 20 hottest years on record occurring since 2000 (1 mark); proxy records (tree rings, pollen, ice cores) — extend record further back (1 mark), show current warming is unprecedented in last 2000 years (1 mark).',
      },
      {
        q: 'Explain why volcanic eruptions can cause short-term cooling of global temperatures. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: large eruptions inject sulphur dioxide (SO₂) into stratosphere; SO₂ combines with water vapour to form sulphate aerosols; these reflect incoming solar radiation back into space; reduces solar radiation reaching Earth\'s surface; cooling effect lasts 1–3 years (e.g. Mount Pinatubo 1991 cooled Earth by ~0.5°C).',
      },
      {
        q: 'Assess the extent to which the UK is prepared to cope with the impacts of climate change. [8 marks]',
        marks: 8,
        markScheme: 'Level 3 (6–8 marks): Evaluates specific UK adaptation and mitigation strategies, considers their effectiveness and limitations, reaches a supported judgement. Level 2 (3–5 marks): Describes UK strategies, some evaluation. Level 1 (1–2 marks): Basic strategies. Accept: Thames Barrier (flood protection); Climate Change Act 2008 (legally binding emission targets); UKCP18 projections informing planning; coastal managed retreat; BUT economic/social cost challenges; unequal vulnerability across UK; need for international cooperation.',
      },
      {
        q: 'Explain how latitude affects the UK\'s climate. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: UK is at approximately 50–60°N — relatively high latitude; 1 mark for: sun\'s rays strike at a lower angle, spread over wider area → less intense solar radiation → cooler temperatures than equatorial regions.',
      },
      {
        q: 'Describe the formation of relief (orographic) rainfall. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: prevailing south-westerly winds bring moist air from Atlantic; air is forced to rise over upland areas (mountains/hills); air cools at dew point, water vapour condenses forming clouds; precipitation falls on windward (west) side; dry rain shadow on leeward (east) side.',
      },
      {
        q: 'Draw and annotate a diagram to show relief rainfall over a mountain range. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: mountain cross-section shown; windward side — arrows showing air rising, cloud forming, rain falling; leeward side — rain shadow, descending air, dry conditions labelled.',
        diagram: true,
      },
      {
        q: 'Explain why sea levels are rising and what impact this has on coastal communities. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: sea levels rising due to thermal expansion of seawater as temperatures increase; melting of ice sheets (Greenland, Antarctica) and glaciers adds freshwater to oceans; impacts: increased coastal flooding (storm surges higher), increased coastal erosion, saltwater intrusion into freshwater/agricultural land, displacement of coastal communities (e.g. Pacific island nations).',
      },
      {
        q: 'What is a tropical storm? [1 mark]',
        marks: 1,
        markScheme: '1 mark for: an intense low-pressure weather system with strong winds (over 74 mph / 119 km/h) and heavy rainfall that forms over warm tropical oceans (also known as hurricane/typhoon/cyclone depending on region).',
      },
      {
        q: 'Explain three conditions needed for a tropical storm to form. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: warm ocean surface temperatures above 26.5°C to a depth of ~50m (provides heat/moisture energy); latitude of 5–30° (sufficient Coriolis effect to cause rotation); low wind shear (winds similar speed at all heights so storm is not torn apart); high humidity in lower/middle atmosphere; unstable atmospheric conditions.',
      },
      {
        q: 'Describe the primary effects of a named tropical storm. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four (named storm e.g. Typhoon Haiyan 2013 Philippines): over 6,300 killed; ~14 million people affected; 1.9 million homeless; 1 million homes damaged/destroyed; storm surge of 5m in Tacloban; winds of 314 km/h; coconut and rice crops destroyed; airports/roads destroyed. Accept Hurricane Katrina or other valid named example with specific detail.',
      },
      {
        q: 'To what extent can the impacts of extreme weather events in the UK be reduced by planning and preparation? [8 marks]',
        marks: 8,
        markScheme: 'Level 3 (6–8 marks): Evaluates a range of preparation strategies with UK named examples (e.g. Somerset Levels floods 2014, Beast from the East 2018, Storm Desmond 2015), considers effectiveness and limitations, reaches a supported conclusion. Level 2 (3–5 marks): Describes strategies with some evaluation. Level 1 (1–2 marks): Basic points. Accept: flood defences (dredging, barriers, SUDS); Environment Agency flood warnings; Met Office weather warnings; improved drainage; building regulations; resilient infrastructure; limitations — cost, climate change increasing severity beyond design limits, human behaviour, rural/remote areas harder to protect.',
      },
    ],
  },
  '1.5': {
    name: 'Tropical Rainforests',
    questions: [
      {
        q: 'Describe the climate of a tropical rainforest. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: located near equator; high temperatures throughout year (~27°C/no seasons); high annual rainfall (~2000mm+); rainfall is convectional (afternoon storms); low pressure (ITCZ); high humidity.',
      },
      {
        q: 'Explain why tropical rainforests receive high levels of rainfall. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: located near equator where sun is overhead/intense heating; air heated and rises (low pressure/ITCZ); rapid evapotranspiration from trees adds moisture; rising air cools and condenses → heavy convectional rainfall most afternoons.',
      },
      {
        q: 'Draw and label a diagram to show the four layers of a tropical rainforest. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: emergent layer (tallest trees ~40m+) labelled; canopy (continuous layer ~20–30m) labelled; understorey (shade-tolerant shrubs, small trees ~5–20m) labelled; forest floor (dark, little vegetation, leaf litter) labelled.',
        diagram: true,
      },
      {
        q: 'Explain the nutrient cycle in a tropical rainforest. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: nutrients stored in three places — biomass (plants), litter (dead matter on floor), soil; rapid decomposition by bacteria/fungi in warm, moist conditions releases nutrients from litter to soil quickly; leaching — heavy rainfall washes nutrients down through soil; most nutrients in biomass store; soils are nutrient-poor (infertile) if trees are removed.',
      },
      {
        q: 'Explain two plant adaptations to the tropical rainforest environment. [4 marks]',
        marks: 4,
        markScheme: '2 marks per adaptation: buttress roots — large fin-like roots extending from trunk (1 mark) provide stability for tall trees in shallow, nutrient-poor soils (1 mark); drip tips — pointed/elongated leaf tips (1 mark) allow excess water to drain off quickly, preventing fungal growth (1 mark). Also accept: lianas (climbing plants reach light), epiphytes (grow on branches to reach light), waxy/large leaves to maximise photosynthesis in low light.',
      },
      {
        q: 'What is meant by biodiversity? [1 mark]',
        marks: 1,
        markScheme: '1 mark for: the variety of plant and animal species in an area/ecosystem.',
      },
      {
        q: 'Explain why tropical rainforests have such high biodiversity. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: consistent warm and wet climate throughout year supports year-round growth; multiple layers provide many different habitats and niches; high primary productivity — abundant food supply; millions of years of evolution without ice ages (stable environment); estimated 50% of world\'s species in rainforests.',
      },
      {
        q: 'Describe the concept of interdependence in the tropical rainforest. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: plants and animals depend on each other; e.g. trees rely on insects for pollination; animals rely on trees for food and shelter; if one species is removed it affects others; trees cycle water (transpiration) affecting local rainfall; shows food web/ecological interdependence.',
      },
      {
        q: 'Explain two causes of deforestation in tropical rainforests. [4 marks]',
        marks: 4,
        markScheme: '2 marks per cause. Accept: commercial logging — valuable hardwood timber (mahogany, teak) exported for profit (1 mark) creates large clearings and access roads for further deforestation (1 mark); cattle ranching — forest cleared for beef production (1 mark) major cause in Amazon — approx 70% of Amazon deforestation (1 mark); mining — mineral extraction requires forest clearance; HEP dams — flood large areas; road building — Amazon highways open up forest.',
      },
      {
        q: 'Using the Amazon Basin as an example, describe the main causes of deforestation. [6 marks]',
        marks: 6,
        markScheme: 'Level 3 (5–6 marks): Detailed explanation of multiple causes with specific Amazon facts/data. Level 2 (3–4 marks): Describes several causes with some Amazon detail. Level 1 (1–2 marks): Basic causes. Accept: cattle ranching (70% of deforestation), soya farming for animal feed, logging (legal/illegal), mining (e.g. iron ore at Carajás), HEP dams (Belo Monte Dam), Trans-Amazon Highway, population pressure/subsistence farming, government development policies.',
      },
      {
        q: 'Explain the impact of deforestation on the hydrological cycle. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: trees intercept rainfall and take up water through roots; transpiration returns water to atmosphere (30–50% of Amazon rainfall recycled through trees); removal of trees reduces transpiration; less cloud formation and rainfall; surface runoff increases (soil has no protection); rivers carry more sediment; local and regional climate may become drier.',
      },
      {
        q: 'Explain the impact of deforestation on biodiversity. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: destruction of habitats for millions of species; estimated 137 species extinct per day globally due to deforestation; specialist species (those with narrow niches) particularly vulnerable; loss of genetic diversity; reduces ecosystem resilience.',
      },
      {
        q: 'Describe the impact of deforestation on indigenous peoples. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: loss of land/homes for tribes who depend on forest; loss of traditional knowledge and ways of life; exposure to western diseases (no immunity); violence and conflict with loggers/farmers; some tribes face extinction (uncontacted tribes); displacement to urban areas with poverty.',
      },
      {
        q: 'Explain how deforestation contributes to climate change. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: trees store carbon (carbon sink); burning/decomposing trees releases stored CO₂ into atmosphere; deforestation accounts for ~10–15% of global CO₂ emissions; loss of trees reduces ability to absorb future CO₂; positive feedback loop.',
      },
      {
        q: 'Explain how deforestation leads to soil erosion. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: tree roots bind/hold soil together; removal of trees leaves soil exposed to heavy rain; no canopy to intercept rainfall (raindrops hit soil directly, breaking it up — splash erosion); nutrients leached from unprotected soil; laterite soils can harden (laterisation) when exposed to sun making land infertile.',
      },
      {
        q: 'What is selective logging? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: only certain (mature/valuable) trees are cut down rather than clearing all trees; 1 mark for: allows forest to regenerate naturally; reduces overall damage to ecosystem compared to clear-felling.',
      },
      {
        q: 'Explain how ecotourism can support the sustainable management of rainforests. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: small-scale, low-impact tourism to experience natural environment; provides income for local communities; gives economic value to standing forest (incentive to preserve it); raises awareness of rainforest importance; tourists pay for guided tours keeping money in local economy; can fund conservation projects.',
      },
      {
        q: 'What is a debt-for-nature swap? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: an agreement where a country\'s debt is reduced/cancelled in exchange for protecting areas of natural habitat (e.g. rainforest); 1 mark for: provides economic incentive for LIC governments to conserve forests rather than develop them.',
      },
      {
        q: 'Explain how international agreements help to protect tropical rainforests. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: e.g. REDD+ (Reducing Emissions from Deforestation and Degradation) — pays countries to protect forests; Paris Agreement — countries commit to reducing emissions including from deforestation; CITES controls trade in endangered species; FSC (Forest Stewardship Council) certification ensures sustainable timber trade.',
      },
      {
        q: 'Describe two characteristics of the emergent layer of a tropical rainforest. [2 marks]',
        marks: 2,
        markScheme: '1 mark each for: tallest trees (40–60m); widely spaced; umbrella-shaped crowns spread to maximise light; exposed to strong winds, rain, intense sunlight; home to eagles, butterflies, some monkeys.',
      },
      {
        q: 'Explain the adaptation of buttress roots in tropical rainforest trees. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: large, flat, fin-like roots extending from base of trunk; 1 mark for: spread weight of very tall trees / anchor trees in shallow, nutrient-poor soils.',
      },
      {
        q: 'Compare the soil characteristics of a tropical rainforest with an area that has been deforested. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: rainforest — nutrient-poor subsoil but rich litter layer on surface; rapid nutrient cycling keeps nutrients in biomass; deep red/laterite soils; thin fertile layer; deforested — litter layer removed/not replenished; soils lose nutrients through leaching and erosion; laterite can harden to impermeable crust; soil degradation within a few years.',
      },
      {
        q: 'Describe the role of decomposers in the nutrient cycle of a tropical rainforest. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: bacteria and fungi break down dead plant/animal material in litter layer; 1 mark for: releases nutrients back into soil quickly (aided by warm, moist conditions) — completing the nutrient cycle.',
      },
      {
        q: 'Using Malaysia or another named example, explain the conflict between development and conservation in a tropical rainforest. [6 marks]',
        marks: 6,
        markScheme: 'Level 3 (5–6 marks): Detailed explanation of specific development pressures and conservation arguments with named evidence from chosen location. Level 2 (3–4 marks): Describes both perspectives with some specific detail. Level 1 (1–2 marks): Generic points. Accept Malaysia/Borneo: palm oil plantations for economic growth vs biodiversity loss (orangutan habitat); logging for timber exports vs deforestation; poverty alleviation through development vs long-term sustainability.',
      },
      {
        q: 'To what extent can tropical rainforests be managed sustainably? [8 marks]',
        marks: 8,
        markScheme: 'Level 3 (6–8 marks): Evaluates a range of sustainable management strategies with specific examples, considers their effectiveness and limitations, reaches a supported judgement. Level 2 (3–5 marks): Describes management strategies, some evaluation. Level 1 (1–2 marks): Basic strategies. Accept: selective logging, replanting, ecotourism, international agreements, protected areas, debt-for-nature swaps; limitations — enforcement difficult, economic pressures for development, corruption, poverty; conclusion should weigh possibilities against challenges.',
      },
      {
        q: 'Draw and annotate a diagram to show the nutrient cycle of a tropical rainforest. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: three stores shown (biomass, litter, soil); arrows showing flows between stores (decomposition from litter to soil; uptake from soil to biomass; leaf fall from biomass to litter); leaching shown (arrow from soil downward); precipitation/weathering inputs shown.',
        diagram: true,
      },
      {
        q: 'Explain one animal adaptation to the tropical rainforest environment. [2 marks]',
        marks: 2,
        markScheme: '1 mark for naming an appropriate adaptation with correct animal; 1 mark for explaining its purpose. Accept: tree frog — sticky pads on feet (1 mark) enable climbing in tree layers to find food/avoid predators (1 mark); toucan — large, colourful bill (1 mark) to reach and break open fruits in dense vegetation (1 mark); sloth — slow movement and green algae on fur (1 mark) as camouflage to avoid predators (1 mark).',
      },
      {
        q: 'Describe the ITCZ and its role in creating the equatorial climate. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: ITCZ = Inter-Tropical Convergence Zone — a band of low pressure near the equator where north-east and south-east trade winds converge; intense solar heating causes warm air to rise constantly; creates persistent cloud and convectional rainfall; moves slightly north and south with seasons following overhead sun.',
      },
      {
        q: 'What is meant by convectional rainfall? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: intense solar heating of ground/surface causes rapid evaporation and rising air; 1 mark for: rising air cools and condenses forming cumulonimbus clouds → heavy afternoon thunderstorms.',
      },
      {
        q: 'Explain the concept of leaching and its importance in the tropical rainforest nutrient cycle. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: heavy rainfall washes (leaches) soluble nutrients downward through soil profile; nutrients are removed from the upper soil horizon; this means soils are naturally infertile; explains why clearing rainforest leads to rapid soil degradation — nutrients go with vegetation, not stored in soil.',
      },
      {
        q: 'Assess the effectiveness of protected areas (national parks/reserves) in conserving tropical rainforests. [6 marks]',
        marks: 6,
        markScheme: 'Level 3 (5–6 marks): Evaluates protected areas with specific examples, considers effectiveness and limitations, reaches a supported conclusion. Level 2 (3–4 marks): Describes advantages and disadvantages. Level 1 (1–2 marks): Basic points. Accept: advantages — legal protection, habitat conservation, enforced boundaries, ecotourism revenue; limitations — illegal logging/poaching difficult to stop, buffer zones needed, local communities may resent exclusion, enforcement requires funding, corruption, total area insufficient.',
      },
      {
        q: 'Describe the characteristics of the canopy layer of a tropical rainforest. [2 marks]',
        marks: 2,
        markScheme: '1 mark each for: forms a continuous (closed) layer of interlocking branches and leaves at 20–30m; intercepts ~80% of sunlight; most animal diversity found here; leaves have waxy surfaces; bromeliads and orchids (epiphytes) grow here.',
      },
      {
        q: 'Explain how subsistence farming contributes to deforestation in the Amazon. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: poor farmers move into forest areas along roads; practice slash-and-burn (clear small areas, burn trees to release nutrients); farm for a few years until soil exhausted; move on to clear more forest — shifting cultivation; small scale individually but large cumulative effect.',
      },
      {
        q: 'Explain how replanting/reforestation can help manage tropical rainforests. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: trees planted to replace those cut down; restores forest cover; can restore habitats and biodiversity over time; BUT monoculture plantations less biodiverse than natural rainforest; takes many decades for mature forest to re-establish; difficult to replicate full ecosystem complexity.',
      },
      {
        q: 'Assess the social, economic and environmental impacts of deforestation in tropical rainforests. [8 marks]',
        marks: 8,
        markScheme: 'Level 3 (6–8 marks): Detailed assessment of all three impact types with specific evidence/examples, reaches a supported overall judgement with consideration of most significant impact. Level 2 (3–5 marks): Covers at least two impact types with some development. Level 1 (1–2 marks): Basic impacts listed. Accept: environmental — species extinction, climate change, soil erosion, hydrological disruption; economic — short-term profit for TNCs/governments but long-term loss of ecosystem services; social — displacement of indigenous peoples, poverty, health risks; judgement on which is most significant.',
      },
      {
        q: 'Describe one adaptation of an animal to life in the tropical rainforest. [2 marks]',
        marks: 2,
        markScheme: '1 mark for naming an animal and adaptation + 1 mark development. E.g. sloth — slow movement and algae in fur for camouflage from predators; toucan — large light bill for reaching fruit on thin branches; spider monkey — prehensile tail for gripping branches in canopy; poison dart frog — bright colours warn predators of toxicity.',
      },
      {
        q: 'Explain how the nutrient cycle operates in a tropical rainforest. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: dead organic matter (leaf litter) falls to forest floor; warm/wet conditions speed up decomposition by bacteria and fungi; nutrients released quickly into the soil; shallow tree roots rapidly absorb nutrients; most nutrients stored in biomass (vegetation) not soil; cycle is rapid and almost closed — if trees removed nutrients are quickly lost through leaching.',
      },
      {
        q: 'Suggest why ecotourism is considered a sustainable way of managing the rainforest. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: generates income from tourists without cutting down the forest (economic benefit for local communities); provides employment as guides/hosts reducing need for logging/farming; raises awareness of conservation and funds protection; small-scale, low impact; BUT can cause disturbance if poorly managed. E.g. Costa Rica derives significant GDP from ecotourism while protecting >25% of land.',
      },
      {
        q: 'Explain the role of international agreements in protecting tropical rainforests. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: CITES — controls trade in endangered species; REDD+ (UN) — pays LICs to reduce emissions from deforestation; Paris Agreement includes forest protection commitments; debt-for-nature swaps — debt cancelled in return for conservation; BUT enforcement is weak, countries may prioritise development, funding often insufficient to offset economic incentives for deforestation.',
      },
      {
        q: 'Evaluate the effectiveness of selective logging as a sustainable management strategy in tropical rainforests. [6 marks]',
        marks: 6,
        markScheme: 'Level 3 (5–6 marks): Evaluates strengths and weaknesses with detail, reaches a supported conclusion. Level 2 (3–4 marks): Describes strategy with some evaluation. Level 1 (1–2 marks): Basic points. Accept: only mature trees of specific species cut; forest structure/canopy largely preserved; wildlife habitats retained; regrowth possible; BUT access roads cause damage, machinery compacts/damages surrounding trees, illegal logging often follows legal roads; slow growth of tropical hardwoods means cycle must be long; requires enforcement; more sustainable than clear-felling but not a complete solution.',
      },
    ],
  },
  '1.6': {
    name: 'Hot Deserts',
    questions: [
      {
        q: 'Describe the distribution of hot deserts. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: located around 30°N and 30°S of equator (horse latitudes); found in subtropical high pressure belts (descending air); examples — Sahara, Arabian, Namib, Atacama, Australian outback; also in continental interiors far from moisture sources; rain shadow deserts on leeward side of mountains.',
      },
      {
        q: 'Explain why hot deserts receive very little precipitation. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: located in areas of descending air (~30°N/S); descending air is compressed and warms; this reduces relative humidity and prevents cloud formation; therefore very little rainfall (< 250mm/year); also: continental interiors far from sea moisture sources; cold ocean currents offshore (e.g. Benguela) chill air reducing precipitation.',
      },
      {
        q: 'Describe the climate characteristics of a hot desert. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: very low annual precipitation (< 250mm); very high daytime temperatures (up to 50°C); extreme diurnal (day-night) temperature range (can be 30–40°C difference); low humidity; clear skies; intense solar radiation.',
      },
      {
        q: 'Explain why hot deserts have a large diurnal temperature range. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: clear skies — no cloud cover during day allows intense solar heating → very high daytime temperatures; at night, clear skies allow heat to radiate back to space quickly (no greenhouse blanket); dry air has low specific heat capacity — heats and cools quickly; large diurnal range results.',
      },
      {
        q: 'Describe the soil characteristics of a hot desert. [2 marks]',
        marks: 2,
        markScheme: '1 mark each for any two: very dry/arid; thin and stony; little organic matter (little vegetation to decompose); often saline (soluble salts remain as water evaporates); infertile; may have hard calcrete/duricrust layer near surface.',
      },
      {
        q: 'Explain two plant adaptations to hot desert conditions. [4 marks]',
        marks: 4,
        markScheme: '2 marks per adaptation: cacti — thick, succulent stems store water (1 mark); spines instead of leaves reduce transpiration/water loss (1 mark); waxy cuticle to reduce water loss; shallow but extensive root system to capture rare rainfall quickly; deep tap roots to reach water table; drought-deciduous plants — shed leaves in dry season to reduce water loss (1 mark), grow leaves rapidly after rain (1 mark).',
      },
      {
        q: 'Draw and label a diagram of a cactus, showing its adaptations to the desert environment. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: succulent/thick stem labelled (water storage); spines labelled (reduce water loss/protect from grazers); shallow widespread roots labelled (absorb rainwater quickly).',
        diagram: true,
      },
      {
        q: 'Explain two animal adaptations to life in a hot desert. [4 marks]',
        marks: 4,
        markScheme: '2 marks per adaptation: camel — hump stores fat (not water) providing energy (1 mark); can lose up to 30% body water without harm; wide feet for sand; fennec fox — large ears dissipate heat (1 mark) keeping body cool in extreme heat (1 mark); desert rat/jerboa — nocturnal (active at night, avoiding heat) (1 mark); concentrated urine to conserve water (1 mark).',
      },
      {
        q: 'What is desertification? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: the process by which fertile/semi-arid land becomes increasingly arid and desert-like; 1 mark for: reducing/destroying its ability to support vegetation and agriculture.',
      },
      {
        q: 'Explain two human causes of desertification. [4 marks]',
        marks: 4,
        markScheme: '2 marks per cause: overgrazing — too many animals for land to support (1 mark), remove vegetation, compact/erode soil, remove protective cover (1 mark); deforestation/removal of fuelwood — trees removed for fuel and building (1 mark), exposes soil to wind/rain erosion, reduces transpiration, dries local climate (1 mark); over-cultivation — farming same land repeatedly, exhausts nutrients; over-extraction of groundwater.',
      },
      {
        q: 'Explain how climate change is contributing to desertification in the Sahel. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: global warming is shifting climate zones poleward; Sahara Desert is expanding southward into the Sahel; rainfall in Sahel has become more unpredictable/reduced; more frequent droughts; prolonged droughts kill vegetation, making land more vulnerable to desertification.',
      },
      {
        q: 'Describe the Sahel region and explain why it is vulnerable to desertification. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: semi-arid strip of land south of Sahara (Senegal to Ethiopia/Eritrea); annual rainfall 200–600mm, highly variable; poor, dry soils; rapidly growing population increases pressure on land; combination of climate change, poverty and population pressure makes it highly vulnerable.',
      },
      {
        q: 'Describe the social and economic impacts of desertification on communities in the Sahel. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: food insecurity/famine — crop failures; loss of livelihoods for farmers/pastoralists; forced migration to cities/other countries (environmental refugees); increased poverty; conflict over remaining resources (e.g. Lake Chad water disputes); loss of traditional ways of life.',
      },
      {
        q: 'Explain how overgrazing leads to desertification. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: too many animals graze on limited vegetation; vegetation removed faster than it can regenerate; without plant cover, roots no longer bind soil; soil exposed to wind erosion (deflation) and rain splash; compacted by animal hooves — less infiltration; bare, eroded soil becomes desert-like.',
      },
      {
        q: 'Explain the use of stone bunds (magic stones) to manage desertification in the Sahel. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: small stone walls/lines built along contours of slope; slow surface runoff, allowing water to infiltrate soil; reduces soil erosion; moisture retained → vegetation can regrow; cheap, appropriate technology using local materials; communities build them collaboratively.',
      },
      {
        q: 'What is the "half-moon" technique for managing desertification? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: semi-circular shallow pits dug in soil in a pattern; 1 mark for: concentrate rainwater runoff into centre of the half-moon where seeds planted, improving chances of germination and plant growth in arid conditions.',
      },
      {
        q: 'Explain how the Great Green Wall project aims to reduce desertification. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: plan to plant a belt of trees 15km wide and 7,775km long across Africa (from Senegal to Djibouti); trees provide wind barriers, reduce erosion, restore soil, provide shade; restores ecosystem functions; provides timber and food (e.g. Acacia gum); creates green jobs/income for local people; only ~15% complete as of 2020s.',
      },
      {
        q: 'Describe how education can help manage desertification. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: teaching sustainable farming practices to local communities; 1 mark for: e.g. training in contour ploughing, crop rotation, water harvesting techniques — reduces overgrazing/over-cultivation.',
      },
      {
        q: 'Evaluate the effectiveness of strategies to manage desertification in the Sahel. [6 marks]',
        marks: 6,
        markScheme: 'Level 3 (5–6 marks): Evaluates specific strategies with Sahel examples and data where possible, considers advantages and limitations, reaches a supported conclusion. Level 2 (3–4 marks): Describes strategies with some evaluation. Level 1 (1–2 marks): Basic strategies listed. Accept: stone bunds/magic stones — cheap, effective (crop yields up 50% in Burkina Faso), community-owned; Great Green Wall — large-scale ambition but slow progress, funding issues; appropriate technology vs need for outside funding; conclusion on overall effectiveness.',
      },
      {
        q: 'Explain why population growth increases the risk of desertification. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: more people require more food — more land is cultivated; more animals are grazed (overgrazing); more fuelwood is removed; land cannot recover — greater pressure than it can sustain; rapid population growth in Sahel (some of highest rates globally) makes this particularly acute.',
      },
      {
        q: 'Draw a map to show the location of the Sahel region in Africa. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: Africa outline shown; 1 mark for: Sahel region correctly shaded/indicated — strip across Africa south of Sahara Desert, approximately between 12°N and 20°N.',
        diagram: true,
      },
      {
        q: 'Compare the xerophyte adaptations of a cactus with those of a drought-deciduous plant. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: both adapted to conserve water/survive drought; cactus — permanent structural adaptations (succulence, spines, waxy cuticle) — survives through dry season actively; drought-deciduous — sheds leaves in dry season to prevent water loss through transpiration (1 mark); regrows leaves quickly after rain when water available (1 mark); different strategies — permanent vs seasonal adaptation.',
      },
      {
        q: 'Explain how appropriate technology helps communities manage desertification more effectively than large-scale projects. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: appropriate technology uses local materials and knowledge (e.g. stone bunds) — cheap and affordable for poor communities; communities can maintain it themselves without outside expertise; no dependency on imported machinery; builds community capacity and ownership; large-scale projects may require outside funding/expertise that is not sustained; BUT appropriate tech covers smaller areas — combination of both may be most effective.',
      },
      {
        q: 'To what extent is desertification a natural or human-caused process? [8 marks]',
        marks: 8,
        markScheme: 'Level 3 (6–8 marks): Evaluates natural and human causes with specific evidence from the Sahel or other named areas, reaches a supported judgement on relative importance. Level 2 (3–5 marks): Describes natural and human causes, some comparison. Level 1 (1–2 marks): Basic causes. Accept: natural — climate change, drought cycles (Sahel received above-average rainfall 1950s, then devastating droughts 1970s–80s — partly natural variability); human — overgrazing, deforestation, over-cultivation are primary causes; most scientists argue human factors accelerate and worsen natural vulnerability; conclusion should weigh evidence.',
      },
      {
        q: 'Explain how cold ocean currents contribute to the formation of coastal deserts. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: cold currents (e.g. Benguela off Namibia/South Africa; Humboldt off Peru/Chile) chill air above them; cooled air loses ability to hold moisture/become stable; prevents cloud formation and rainfall; fog forms instead of rain; creates extreme coastal deserts (e.g. Namib, Atacama).',
      },
      {
        q: 'Describe the features of an erg, reg and hammada desert landscape. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: erg — sandy desert with sand dunes (covers ~25% of Sahara); reg — flat, stony desert pavement (gravel/pebbles); hammada — bare, rocky plateau (wind removes fine material leaving exposed rock).',
      },
      {
        q: 'Explain how wind erosion shapes desert landscapes. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: deflation — wind removes loose fine sand and dust leaving stony surfaces (reg/serir); abrasion — sand-laden wind sandblasts exposed rock surfaces at ground level; ventifacts and yardangs (streamlined rock ridges) formed by wind abrasion; sand transported and deposited as dunes (barchan, seif).',
      },
      {
        q: 'Explain how the removal of fuelwood causes desertification. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: trees and shrubs cut/collected for cooking/heating fuel (major energy source in rural Sahel); removes plant cover from soil; roots no longer bind soil; soil exposed to wind/rain erosion; loss of tree transpiration may reduce local rainfall; harder to find fuel as trees disappear — positive feedback cycle.',
      },
      {
        q: 'Describe the economic opportunities provided by desert environments. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: tourism (safari, desert tours, cultural tourism — e.g. Sahara desert tours); solar energy — high solar radiation ideal for solar power generation; mineral resources (e.g. oil, gas in Sahara; copper in Atacama; precious gems); irrigated agriculture in oases; salt extraction.',
      },
      {
        q: 'Assess the challenges of living in a hot desert environment. [6 marks]',
        marks: 6,
        markScheme: 'Level 3 (5–6 marks): Evaluates physical, social and economic challenges with specific examples, reaches a supported conclusion. Level 2 (3–4 marks): Describes a range of challenges with some development. Level 1 (1–2 marks): Basic challenges listed. Accept: physical — extreme heat/cold, lack of water, hostile soils; social — food insecurity, poverty, limited services; economic — limited livelihoods, vulnerability to drought/desertification; BUT some areas overcome these (oil wealth, tourism, technology); conclusion should weigh.',
      },
      {
        q: 'Explain how overgrazing leads to a positive feedback cycle of desertification. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: overgrazing removes vegetation; bare soil erodes more easily (wind/water); soil becomes less fertile; less vegetation can grow; more livestock compete for less vegetation → more overgrazing; cycle intensifies until land is completely degraded/desertified (positive feedback = self-reinforcing).',
      },
      {
        q: 'Draw and label a diagram to show a barchan (crescent-shaped) sand dune. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: crescent/horseshoe shape shown; horns pointing downwind; gentle windward slope and steep lee face labelled; wind direction arrow shown.',
        diagram: true,
      },
      {
        q: 'Draw and label a diagram to show three adaptations of a cactus to the hot desert environment. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for up to four labelled adaptations: thick waxy cuticle/stem to reduce water loss; spines instead of leaves (reduce transpiration and deter herbivores); shallow widespread roots to capture rare rainfall; fleshy stem stores water; ribbed/concertina stem expands to hold water; white hairs reflect sunlight. Diagram must be recognisably a cactus with labels.',
        diagram: true,
      },
      {
        q: 'Describe the climate of a hot desert. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three: very low annual rainfall (<250 mm/year); rainfall is unpredictable/erratic; very high daytime temperatures (often >40°C in summer); cold nights (can drop below 0°C in winter) due to lack of cloud cover; large diurnal temperature range; high rates of evaporation; dominated by high-pressure systems.',
      },
      {
        q: 'Explain why hot deserts are located around 30° north and south of the equator. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: air rises at equator (ITCZ), cools and releases rainfall as tropical rainforest; this air travels polewards at high altitude, cools and sinks at around 30° N/S (Hadley cell descending limb); sinking air warms adiabatically, holds more moisture, so very little cloud or rainfall forms; creates arid subtropical high-pressure belt where hot deserts form.',
      },
      {
        q: 'Suggest two ways in which camels are adapted to survive in hot desert conditions. [4 marks]',
        marks: 4,
        markScheme: '1 mark for each adaptation + 1 mark development. Any two from: hump stores fat (metabolised for energy and water); can drink 100+ litres at once and go weeks without water; wide padded feet prevent sinking in sand; long eyelashes and closable nostrils keep out sand; thick fur insulates against heat and cold nights; concentrated urine/dry dung conserves water; body temperature fluctuates to reduce sweating.',
      },
      {
        q: 'Explain how irrigation can create economic opportunities in hot desert areas. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: irrigation allows cultivation of high-value crops (e.g. dates, citrus, vegetables in California\'s Imperial Valley or Israel\'s Negev); creates farming jobs and export income; supports food supply for growing populations; centre-pivot irrigation using fossil aquifers increases productivity (e.g. Ogallala aquifer, US); Israel uses drip irrigation to reduce water loss — highly productive. BUT unsustainable water use leads to aquifer depletion.',
      },
      {
        q: 'Describe the Great Green Wall initiative and explain how it aims to reduce desertification. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four: Great Green Wall — African Union-led project launched 2007 to plant belt of trees/vegetation across Sahel (~8,000 km from Senegal to Djibouti); aims to restore 100 million hectares of degraded land by 2030; trees reduce wind erosion and bind soil; roots improve water infiltration; provides fuelwood and fodder for locals; creates jobs; sequesters carbon; progress uneven — about 18% complete but provides replicable model.',
      },
      {
        q: 'Suggest why the population of hot desert areas is often sparse. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: lack of water limits settlement and agriculture; extreme temperatures make life difficult and unhealthy; poor soils/lack of vegetation limits food production; isolation from major infrastructure/markets; frequent sandstorms and droughts damage settlements and livelihoods.',
      },
      {
        q: 'Evaluate the impacts of climate change on hot desert environments and their populations. [6 marks]',
        marks: 6,
        markScheme: 'Level 3 (5–6 marks): Evaluates environmental and human impacts with named examples, reaches a supported conclusion. Level 2 (3–4 marks): Describes impacts with some development. Level 1 (1–2 marks): Basic points. Accept: rising temperatures increase evaporation and reduce already-scarce water; droughts more frequent/severe (e.g. Sahel); desertification accelerates — pushes desert margins outwards; crop failure, food insecurity, forced migration (climate refugees); some areas may see increased rainfall variability/flash floods; wildlife species at risk; BUT desert solar energy potential may increase. Conclusion should judge overall severity.',
      },
    ],
  },
  '2.1': {
    name: 'Urbanisation and Urban Change',
    questions: [
      {
        q: 'What is urbanisation? [1 mark]',
        marks: 1,
        markScheme: '1 mark for: the increase in the proportion of a country\'s population living in urban areas (towns and cities).',
      },
      {
        q: 'Describe the global pattern of urbanisation. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: fastest rates of urbanisation occurring in LICs and NEEs, especially in Africa and Asia; HICs have slower rates — already highly urbanised (e.g. UK ~83%); some African cities growing by 4–5% per year; global urban population exceeded rural for the first time in 2007/2008.',
      },
      {
        q: 'Explain two push factors that cause people to move from rural to urban areas in LICs. [4 marks]',
        marks: 4,
        markScheme: '2 marks per factor: rural poverty — limited income from subsistence farming (1 mark), unable to afford basic needs/services (1 mark); lack of services — no schools/hospitals/electricity in rural areas (1 mark), move to cities for better access to education/healthcare (1 mark); environmental hazards — floods/droughts/crop failure in rural areas; land shortages.',
      },
      {
        q: 'Explain two pull factors that attract people to urban areas in LICs/NEEs. [4 marks]',
        marks: 4,
        markScheme: '2 marks per factor: employment — more job opportunities in industry/services in cities (1 mark), higher wages than rural farming (1 mark); better services — access to schools, hospitals, clean water, electricity (1 mark), improves quality of life/life expectancy (1 mark).',
      },
      {
        q: 'Distinguish between natural increase and in-migration as causes of urban population growth. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: natural increase — more births than deaths within the urban population (young migrants have children); 1 mark for: in-migration — people moving from rural areas/other countries into cities; both contribute to rapid urban growth in LICs/NEEs.',
      },
      {
        q: 'What is a megacity? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: a city with a population of more than 10 million people; 1 mark for: examples: Tokyo, Delhi, Shanghai, Mumbai, São Paulo, Lagos, Mexico City (accept any correct example).',
      },
      {
        q: 'Describe the distribution of megacities globally. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: increasing number — approximately 34+ megacities as of mid-2020s; majority located in Asia (e.g. Tokyo, Delhi, Shanghai, Beijing, Mumbai); growing number in Africa (Lagos, Kinshasa) and Latin America (São Paulo, Mexico City); fewer in HICs/Europe (Tokyo is exception as HIC megacity); concentrated in LICs and NEEs.',
      },
      {
        q: 'Describe the characteristics of a squatter settlement (shanty town/favela). [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: built illegally/informally on land not owned by residents; built from scavenged/makeshift materials (corrugated iron, wood, cardboard, plastic); lack clean water supply and sanitation; no electricity or irregular connections; overcrowded; limited road access; insecure land tenure (can be demolished).',
      },
      {
        q: 'Explain why squatter settlements develop on the outskirts of rapidly growing cities in LICs. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: rapid rural-urban migration creates housing demand cities cannot meet; newcomers cannot afford formal housing; build makeshift homes on available land (often steep hillsides, flood plains — land others don\'t want); governments lack resources to provide housing for all; informal settlement grows quickly as others join family/community members.',
      },
      {
        q: 'Describe the social problems faced by residents of squatter settlements. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: lack of clean water — risk of waterborne diseases (cholera, typhoid); no sanitation — open sewers/disease; unemployment/informal economy — low income, no job security; crime and violence — limited policing; lack of access to schools/healthcare; overcrowding — mental health impacts; insecurity of tenure.',
      },
      {
        q: 'Explain the environmental problems associated with rapid urbanisation in LICs. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: air pollution — vehicle emissions, industrial pollution, burning waste/fuel; water pollution — untreated sewage/industrial waste in rivers; solid waste management problems — open rubbish dumps, disease risk; loss of green space/natural habitats; flooding from impermeable surfaces and blocked drains; noise pollution.',
      },
      {
        q: 'What is a site and service scheme? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: government provides a plot of land (site) with basic services already installed (roads, water pipes, electricity, sanitation); 1 mark for: residents then build/improve their own home incrementally — cheaper than building full housing for government.',
      },
      {
        q: 'Explain how self-help (incremental) schemes improve conditions in squatter settlements. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: government provides building materials, technical advice and/or loans; residents improve their own homes rather than government doing it for them; more affordable than total redevelopment; community involved so more invested; gradual improvement over years; retains community networks/social capital.',
      },
      {
        q: 'Using Mumbai, Lagos or another named LIC/NEE city, describe the challenges of managing rapid urban growth. [6 marks]',
        marks: 6,
        markScheme: 'Level 3 (5–6 marks): Detailed description of specific urban management challenges with named examples/data for chosen city. Level 2 (3–4 marks): Describes challenges with some specific detail. Level 1 (1–2 marks): Generic challenges. Accept Mumbai: Dharavi slum (1 million people, 2.1 km²); lack of sanitation/clean water; air pollution; traffic congestion; housing shortage; rapid population growth; need for investment in infrastructure.',
      },
      {
        q: 'What is deindustrialisation? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: the decline of manufacturing/heavy industry in an area; 1 mark for: leads to factory closures, job losses and economic decline in affected areas (e.g. UK cities like Manchester, Sheffield, Liverpool from 1960s–80s).',
      },
      {
        q: 'Explain how deindustrialisation led to urban deprivation in UK cities. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: closure of factories/mines/docks caused mass unemployment; loss of income → poverty; people moved away leaving areas depopulated; tax base reduced — less money for services; shops/businesses closed; housing fell into disrepair; cycle of deprivation: unemployment → poverty → poor housing → poor health → low educational attainment.',
      },
      {
        q: 'Describe what is meant by the Index of Multiple Deprivation. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: a government measure that ranks areas in England by level of deprivation; 1 mark for: based on seven domains: income, employment, education, health/disability, crime, housing, living environment.',
      },
      {
        q: 'Explain the difference between suburbanisation and counter-urbanisation. [3 marks]',
        marks: 3,
        markScheme: '1 mark for: suburbanisation — movement of people from city centres to suburbs (edge of city) — still within the urban area; 1 mark for: counter-urbanisation — movement from cities to smaller towns and rural areas — outside the city entirely; 1 mark for: both driven by desire for more space/better environment, but counter-urbanisation made possible by better transport/remote working.',
      },
      {
        q: 'Explain two causes of traffic congestion in UK cities. [4 marks]',
        marks: 4,
        markScheme: '2 marks per cause: high car ownership — greater wealth means more people own/use cars (1 mark), particularly for commuting (1 mark); urban sprawl — suburbs/commuter zones farther from city centres (1 mark), longer commutes with limited public transport alternatives (1 mark). Also accept: inadequate public transport, road design, peak-hour commuting.',
      },
      {
        q: 'Describe two urban regeneration strategies used in UK cities. [4 marks]',
        marks: 4,
        markScheme: '2 marks per strategy. Accept: waterfront regeneration (e.g. Cardiff Bay, Liverpool docks) — derelict industrial waterfront redeveloped (1 mark), new housing, offices, leisure facilities attract investment and residents (1 mark); enterprise zones — tax incentives and simplified planning rules in deprived areas (1 mark) attract businesses and create jobs (1 mark).',
      },
      {
        q: 'Using a named example, explain how an area of an HIC city has been regenerated. [6 marks]',
        marks: 6,
        markScheme: 'Level 3 (5–6 marks): Detailed explanation of regeneration with specific named area, describes what was there before, what changed and impact, with data. Level 2 (3–4 marks): Named example described with some specific detail. Level 1 (1–2 marks): Generic regeneration. Accept Cardiff Bay: former coal export dock — derelict; 1987 Cardiff Bay Development Corporation; Senedd, Wales Millennium Centre built; 30,000 new homes; 30,000 jobs; BUT critics say cost £2 billion+, existing residents displaced, not all benefited.',
      },
      {
        q: 'Assess the success of urban regeneration in improving quality of life in deprived areas. [8 marks]',
        marks: 8,
        markScheme: 'Level 3 (6–8 marks): Evaluates urban regeneration with specific named examples, considers different perspectives and stakeholders, reaches a supported judgement about overall success. Level 2 (3–5 marks): Describes regeneration with some evaluation. Level 1 (1–2 marks): Basic description. Accept: successes — new housing, jobs, investment, improved environment, better services; limitations — gentrification displaces original residents, benefits not equally shared, expensive, some areas still deprived; conclusion should assess "success" considering who benefited.',
      },
      {
        q: 'Draw and label a diagram to show the land use zones of a typical LIC/NEE city. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: CBD at centre labelled; inner industrial zone labelled; residential zones (varying quality) shown; squatter settlements/shanty towns on periphery labelled; newer planned suburbs shown.',
        diagram: true,
      },
      {
        q: 'Explain why squatter settlements are often found on hazardous sites on the edges of LIC cities. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: land on the urban fringe is often unoccupied and unwanted (government or private); hazardous sites (steep slopes, flood plains, near landfill) are avoided by wealthier people; migrants have no choice — cannot afford formal housing or safer land; proximity to city allows access to informal work; over time settlements become established and difficult to remove.',
      },
      {
        q: 'Describe one way in which the growth of megacities creates environmental problems. [2 marks]',
        marks: 2,
        markScheme: '1 mark for naming a specific environmental problem (e.g. air pollution, water pollution); 1 mark for developing the point (e.g. millions of vehicles create smog/particulate pollution in cities like Mumbai and Delhi — WHO safe limits regularly exceeded).',
      },
      {
        q: 'Explain how urban sprawl can cause conflict between different groups. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: urban sprawl involves building on greenfield land (countryside/green belt) on edge of city; conflicts: farmers/landowners lose agricultural land; conservationists argue loss of wildlife habitats/natural beauty; local residents in receiving villages worry about loss of rural character/services being overwhelmed; developers want profit from housing demand; planners try to balance housing need vs environment.',
      },
      {
        q: 'Suggest why some people argue that gentrification is not always a successful regeneration strategy. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: gentrification — wealthier newcomers buy/renovate property in deprived areas → rising house prices; original/long-term residents priced out of neighbourhood (displacement); community ties/social capital broken up; local businesses serving original community replaced by expensive cafes/boutiques; deprivation not tackled — it is just moved elsewhere.',
      },
      {
        q: 'Evaluate the extent to which squatter settlements can be improved without relocating residents. [6 marks]',
        marks: 6,
        markScheme: 'Level 3 (5–6 marks): Evaluates in-situ improvement strategies (self-help, site and service) against their limitations, uses named examples, reaches a supported conclusion. Level 2 (3–4 marks): Describes strategies with some evaluation. Level 1 (1–2 marks): Basic points. Accept: self-help schemes (Dharavi, Mumbai; Kibera, Nairobi) — can dramatically improve sanitation, water, housing quality; preserve community; BUT: land tenure insecurity remains; difficult to upgrade on extremely dense/hazardous sites; some argue total relocation needed for full improvement.',
      },
      {
        q: 'Explain why the rate of urbanisation is faster in Africa and Asia than in Europe. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: Africa and Asia have very large rural populations still to urbanise; rapid population growth (high natural increase) means more young people seeking urban employment; rapid industrialisation/economic growth in many Asian cities attracts migrants; Europe already highly urbanised — little rural population left to move to cities; European population also growing slowly.',
      },
      {
        q: 'What is meant by urban deprivation? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: a state of disadvantage affecting groups of urban residents; 1 mark for: characterised by low income, poor housing, unemployment, poor health, limited access to services — concentrated in specific urban areas.',
      },
      {
        q: 'Describe one challenge and one opportunity of living in a megacity. [4 marks]',
        marks: 4,
        markScheme: '2 marks per point: challenge — (name, 1 mark) e.g. traffic congestion — millions of vehicles cause gridlock, pollution, lost productivity (1 mark for development); opportunity — (name, 1 mark) e.g. employment — wide range of formal and informal jobs available, higher wages than rural areas (1 mark for development).',
      },
      {
        q: 'Explain why natural increase is often as important as in-migration in driving urban growth in LICs. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: migrants to cities are mostly young people of reproductive age; they have high birth rates; cities in LICs often have better access to healthcare than rural areas → lower death rates; natural increase can account for 40–60% of urban population growth; e.g. Lagos — birth rate remains high among urban poor.',
      },
      {
        q: 'Assess the social, economic and environmental challenges of rapid urbanisation in LIC cities. [8 marks]',
        marks: 8,
        markScheme: 'Level 3 (6–8 marks): Detailed assessment of all three challenge types with specific evidence from named city/cities, considers which challenges are most significant, reaches a supported judgement. Level 2 (3–5 marks): Covers at least two types of challenge with some development. Level 1 (1–2 marks): Basic challenges listed. Accept: social — housing shortages, lack of clean water/sanitation, crime, poor health; economic — informal economy, unemployment, infrastructure deficit; environmental — pollution, flooding, waste management; conclusion should judge overall most significant or how interlinked they are.',
      },
      {
        q: 'Explain how improvements to transport infrastructure can support urban regeneration. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: better transport links (tram, metro, bus rapid transit) reduce congestion; make deprived areas more accessible to employers; attract businesses and investment; reduce commuting times, improving quality of life; link peripheral deprived areas to city centre job opportunities (e.g. new metro lines in UK cities).',
      },
      {
        q: 'Draw and label a sketch map to show the location and land uses of a named squatter settlement. [3 marks]',
        marks: 3,
        markScheme: '1 mark for: named settlement shown in relation to city (e.g. Dharavi, Mumbai); 1 mark for: position shown (e.g. central location, surrounded by commercial district); 1 mark for: at least two different land use areas labelled (e.g. residential, recycling industry, small workshops).',
        diagram: true,
      },
      {
        q: 'Suggest how the growth of e-commerce and online retail has changed urban land use in HIC cities. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: decline of high street shops as people buy online; vacant retail units in town centres/CBDs; rise of out-of-town distribution warehouses; former shops converted to housing, offices, cafes or arts spaces; town centre regeneration challenges increase; need for new planning approaches (e.g. mixed-use developments).',
      },
      {
        q: 'To what extent is counter-urbanisation a problem for rural areas? [6 marks]',
        marks: 6,
        markScheme: 'Level 3 (5–6 marks): Evaluates both negative and positive effects of counter-urbanisation on rural areas, considers different stakeholders, reaches a supported conclusion. Level 2 (3–4 marks): Describes effects with some evaluation. Level 1 (1–2 marks): Basic points. Accept: problems — house prices rise, local people priced out, loss of community, increased commuter traffic; benefits — more spending in local economy, schools maintained, services retained, renovation of old buildings; conclusion should weigh problems vs benefits and consider "to what extent".',
      },
      {
        q: 'Define the term \'megacity\'. [1 mark]',
        marks: 1,
        markScheme: '1 mark for: a city with a population of 10 million or more people.',
      },
      {
        q: 'Explain two pull factors that cause people to migrate from rural to urban areas in LICs/NEEs. [4 marks]',
        marks: 4,
        markScheme: '1 mark per factor + 1 mark development. Any two from: perceived better paid jobs in factories/services (e.g. Mumbai, Lagos); better education and healthcare in cities; access to electricity/water/sanitation; housing opportunities; escape from rural poverty and drought; family/kinship networks in cities; bright lights syndrome — exposure to media showing city life.',
      },
      {
        q: 'Assess the social and environmental challenges of rapid urbanisation in a named LIC/NEE city. [6 marks]',
        marks: 6,
        markScheme: 'Level 3 (5–6 marks): Assesses both social and environmental challenges using specific named examples, reaches a supported judgement. Level 2 (3–4 marks): Describes challenges with some development. Level 1 (1–2 marks): Basic list. Accept Lagos/Mumbai/Rio/Rio de Janeiro: social — housing shortage/favelas (e.g. Rocinha), inadequate sanitation (40%+ of Mumbai population in slums), health inequalities, crime, water supply issues; environmental — air pollution, traffic congestion, water pollution (e.g. Guanabara Bay), waste management, loss of green space. Conclusion should weigh significance of each.',
      },
    ],
  },
  '2.2': {
    name: 'UK Cities',
    questions: [
      {
        q: 'Describe the characteristics of the Central Business District (CBD). [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three of: high land values/expensive rents; tall buildings/high-rise; high pedestrian/traffic density; concentration of retail shops/offices/services; limited residential use; highly accessible by public transport; land use changes at night (offices empty).',
      },
      {
        q: 'Draw a labelled sketch map to show the typical land use zones of a UK city using the Burgess concentric zone model. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: CBD shown at centre; inner city/transition zone correctly placed around CBD; inner/outer suburbs shown; rural-urban fringe at the edge; accurate labels must be present for marks to be awarded.',
        diagram: true,
      },
      {
        q: 'Explain the difference between the Burgess concentric zone model and the Hoyt sector model. [4 marks]',
        marks: 4,
        markScheme: '1 mark for describing Burgess: concentric rings/circles outward from CBD. 1 mark for describing Hoyt: sectors/wedges along transport routes. 1 mark for explaining a key difference: Hoyt accounts for transport corridors, Burgess does not. 1 mark for development point e.g. Hoyt reflects how industry/high-class housing develops along routes; both are simplifications of reality.',
      },
      {
        q: 'State one limitation of the Burgess concentric zone model. [1 mark]',
        marks: 1,
        markScheme: '1 mark for any valid limitation: does not account for transport routes; based on Chicago (US city) not UK; ignores physical geography; does not reflect modern out-of-town developments; assumes uniform growth in all directions.',
      },
      {
        q: 'Describe the typical housing characteristics of the inner city zone. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three of: terraced housing; Victorian/Edwardian era housing; small rooms/gardens; back-to-back housing; converted to flats/HMOs; close to former industrial sites; often densely packed streets; some areas have been demolished and redeveloped.',
      },
      {
        q: 'Explain why the inner city of many UK cities experienced decline during the late 20th century. [4 marks]',
        marks: 4,
        markScheme: '1 mark for identifying a cause; 1 mark for explaining it. Up to 2 developed points. Causes: deindustrialisation — factories closed, unemployment rose; suburbanisation — wealthier residents moved out; housing deteriorated as landlords did not invest; poverty cycle — area became associated with deprivation; businesses relocated to out-of-town areas; government investment declined. Accept any well-explained points.',
      },
      {
        q: 'Describe the characteristics of the outer suburbs in a UK city. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three of: detached/semi-detached housing; large gardens; newer housing stock; lower population density; good road access/car dependent; near edge of city; good schools/services; quieter; more greenery/parks.',
      },
      {
        q: 'What is meant by the rural-urban fringe? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: the zone/area on the edge of a city where urban and rural land uses mix. 1 mark for example of land use: edge retail parks, business parks, out-of-town shopping centres, golf courses, farms, housing estates, transport hubs.',
      },
      {
        q: 'Draw and label a diagram to show the differences between a brownfield site and a greenfield site. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: brownfield shown as previously developed/urban land; greenfield shown as undeveloped/rural/agricultural land; at least one advantage of brownfield labelled (e.g. infrastructure present, prevents sprawl); at least one advantage of greenfield labelled (e.g. cheaper to build, less contamination). Diagram must be present.',
        diagram: true,
      },
      {
        q: 'Give two advantages of building new housing on brownfield sites. [2 marks]',
        marks: 2,
        markScheme: '1 mark each for any two of: infrastructure already in place; prevents urban sprawl onto greenfield land; brings derelict land back into use; more sustainable use of land; often better connected by public transport; reduces pressure on greenbelt.',
      },
      {
        q: 'Give two disadvantages of building on brownfield sites. [2 marks]',
        marks: 2,
        markScheme: '1 mark each for: cost of decontaminating land; demolition costs of existing structures; planning complications; irregular shapes/sizes of sites; may require clearing existing communities; lower desirability compared to greenfield.',
      },
      {
        q: 'Explain why there is a housing shortage in the UK. [4 marks]',
        marks: 4,
        markScheme: 'Up to 4 marks for well-explained points. Causes: population growth — more people need housing; net migration — increasing demand; smaller household sizes (more single-person households); insufficient new house building since the 1980s; planning restrictions on greenfield/greenbelt; high land costs discouraging developers. 1 mark per cause, 1 mark for development.',
      },
      {
        q: 'Suggest one effect of the housing shortage on people living in UK cities. [2 marks]',
        marks: 2,
        markScheme: '1 mark for effect: rising house prices/rents; overcrowding; homelessness; young people unable to buy. 1 mark for development: explaining the social or economic impact of that effect.',
      },
      {
        q: 'Describe the pattern of traffic congestion in a typical UK city. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three of: worst in CBD/city centre; peak times morning and evening rush hours; ring roads/orbital routes congested; commuter routes from suburbs into centre; worse on weekdays; near schools at start/end of day; near retail parks at weekends.',
      },
      {
        q: 'Explain two causes of traffic congestion in UK cities. [4 marks]',
        marks: 4,
        markScheme: '1 mark for each cause identified, 1 mark for each explanation: increased car ownership — more households own multiple cars, roads cannot cope; urban sprawl — people live further from work and must commute; inadequate public transport — people rely on cars; road freight — lorries/delivery vans increasing; school run — parents driving children adds to peak-time traffic.',
      },
      {
        q: 'Evaluate the effectiveness of integrated transport systems as a solution to traffic congestion. [6 marks]',
        marks: 6,
        markScheme: 'Level 1 (1–2 marks): simple statements about transport systems with no development. Level 2 (3–4 marks): some explanation of how integrated transport reduces congestion and/or limitations, with some evidence. Level 3 (5–6 marks): balanced evaluation with named examples (e.g. Curitiba BRT, Bristol cycling network, London Congestion Charge + TfL), explaining why it works in some contexts and not others; conclusion reached. Credit: park and ride, BRT, cycle lanes, smart ticketing, bus/train integration.',
      },
      {
        q: 'What is meant by urban deprivation? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: a state of poverty/disadvantage affecting people in urban areas. 1 mark for development: multiple overlapping problems e.g. poor housing, unemployment, poor health, low educational attainment, high crime — or mention of Index of Multiple Deprivation (IMD).',
      },
      {
        q: 'Describe how the Index of Multiple Deprivation (IMD) is used to measure urban deprivation. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three of: uses multiple indicators; income, employment, education, health, crime, housing, living environment domains; scores each small area (LSOA); ranks areas nationally; allows comparison between areas; identifies most deprived 10%/20%; updated regularly.',
      },
      {
        q: 'Explain how crime and anti-social behaviour can create a cycle of deprivation in urban areas. [4 marks]',
        marks: 4,
        markScheme: '1 mark for each developed point up to 4. Chain of reasoning rewarded: high crime → businesses leave → unemployment rises → more poverty → more crime. OR: fear of crime → residents leave → area seen as undesirable → house prices fall → wealthier people avoid the area → services decline → deprivation worsens.',
      },
      {
        q: 'Describe two types of urban pollution and their effects. [4 marks]',
        marks: 4,
        markScheme: '1 mark for each type identified, 1 mark for the effect: Air pollution — from vehicles/industry; causes respiratory illness, e.g. asthma; reduces life expectancy. Noise pollution — from traffic/construction/nightlife; causes stress, hearing loss, disturbed sleep. Water pollution — from surface runoff, sewage, industrial discharge; harms aquatic life, contaminates drinking water. Any two well-explained types accepted.',
      },
      {
        q: 'Describe what happened to the London Docklands before regeneration. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three of: docks closed from the 1960s–80s; containerisation made traditional docks obsolete; high unemployment — 30,000+ jobs lost; derelict warehouses; population declined; housing deteriorated; infrastructure neglected; area became associated with poverty.',
      },
      {
        q: 'Explain how the London Docklands Development Corporation (LDDC) regenerated the area from 1981 onwards. [6 marks]',
        marks: 6,
        markScheme: 'Level 1 (1–2): basic description of changes. Level 2 (3–4): explains how specific regeneration strategies improved the area with some reference to the LDDC. Level 3 (5–6): detailed, accurate account covering multiple aspects — new housing (e.g. Butler\'s Wharf), Canary Wharf financial district, Docklands Light Railway (DLR), London City Airport, enterprise zones attracting investment, media/creative industries. Must reference both physical and economic regeneration for Level 3.',
      },
      {
        q: 'Assess the success of the London Docklands regeneration. [8 marks]',
        marks: 8,
        markScheme: 'Level 1 (1–2): simple statements. Level 2 (3–4): explains successes or failures but limited balance. Level 3 (5–6): explains both successes and failures with some evidence. Level 4 (7–8): balanced, evidenced evaluation with a clear judgement. Successes: 25,000+ homes built, 100,000+ jobs created, Canary Wharf major financial hub, DLR connectivity, modern housing. Criticisms: gentrification displaced original communities; housing unaffordable for locals; services for wealthy not poor; inequality remained/worsened; original residents did not benefit. Conclusion must weigh evidence.',
      },
      {
        q: 'Describe the key features of the Hulme regeneration in Manchester. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four of: Hulme was dominated by failed 1960s deck-access tower blocks/crescents; high crime, social problems; City Challenge funding used from 1992; crescents demolished; replaced with lower-density housing; mix of tenures (social, private, owner-occupied); Moss Side and Hulme improved together; new Asda store/retail; community involvement in planning.',
      },
      {
        q: 'Compare the approaches to regeneration used in London Docklands and Hulme, Manchester. [6 marks]',
        marks: 6,
        markScheme: 'Level 1 (1–2): describes one area only. Level 2 (3–4): describes both areas but limited comparison. Level 3 (5–6): direct comparison of approaches — Docklands: top-down, LDDC, enterprise zone, large-scale commercial; Hulme: City Challenge, community-led, housing-focused, smaller scale. Both involved demolition and rebuilding. Contrasts: Docklands prioritised business/financial; Hulme prioritised community needs. Valid comparison must be made for Level 3.',
      },
      {
        q: 'What is BedZED and where is it located? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: Beddington Zero Energy Development. 1 mark for: Sutton, south London / London Borough of Sutton.',
      },
      {
        q: 'Describe three sustainable features of BedZED. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three of: rooftop wind cowls provide natural ventilation; thick insulation to reduce heat loss; solar panels for electricity; rooftop gardens/green roofs; rainwater recycling; built from recycled/sustainable materials; car-free design/car club; mixed use (homes + offices) to reduce commuting; energy from biomass CHP plant.',
      },
      {
        q: 'Explain how Curitiba, Brazil, has become a model of sustainable urban development. [6 marks]',
        marks: 6,
        markScheme: 'Level 1 (1–2): simple points about Curitiba. Level 2 (3–4): explains a few sustainable features with some development. Level 3 (5–6): detailed explanation covering multiple aspects — BRT (Bus Rapid Transit) system with dedicated lanes, tube bus stops, integrated ticketing; linear city growth along transport corridors; parks and green spaces to manage flooding; recycling schemes; social housing programmes; sustainable road design. Must explain WHY these are sustainable (reduce car use, reduce emissions, manage resources) for top marks.',
      },
      {
        q: 'Describe the benefits of urban green spaces. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three of: improve physical and mental health/wellbeing; reduce urban heat island effect; absorb CO₂/improve air quality; manage surface water runoff/reduce flooding; provide biodiversity habitats; increase property values; provide recreational space; reduce noise pollution; community cohesion.',
      },
      {
        q: 'Explain why some urban residents may have limited access to green spaces. [4 marks]',
        marks: 4,
        markScheme: '1 mark per point + 1 mark development. Points: deprived areas have fewer parks; distance/transport barriers; parks feel unsafe (crime, anti-social behaviour); poor maintenance deters use; lack of awareness; disability/mobility barriers; cultural barriers.',
      },
      {
        q: 'Draw and annotate a diagram to show how an integrated transport system works in a city. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: at least two transport modes shown (e.g. bus, train, tram, cycling, walking); connection/interchange points shown; park and ride facility; a label explaining how integration reduces car use or improves accessibility. Diagram must be clear and labelled.',
        diagram: true,
      },
      {
        q: 'Describe the Temple Quarter regeneration project in Bristol. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four of: located near Bristol Temple Meads station; former derelict industrial/railway land; plans for new office space, homes, university campus (UWE/UoB); focus on digital/tech industries; improved walking/cycling links to station; mixed use development; Enterprise Zone status; aim to create 22,000 jobs.',
      },
      {
        q: 'Explain how Bristol has developed its cycling infrastructure to improve sustainability. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: segregated cycle lanes on key routes; cycle-friendly road design; Bristol and Bath Railway Path (off-road route); cycle hire scheme; secure cycle parking at stations/offices; investment in cycling as part of transport strategy; Bristol named UK Cycling City; linked to reducing car use and carbon emissions.',
      },
      {
        q: 'To what extent has regeneration in UK cities benefited all members of the community? [8 marks]',
        marks: 8,
        markScheme: 'Level 1 (1–2): simple statements. Level 2 (3–4): some explanation with limited balance. Level 3 (5–6): explains benefits and drawbacks with evidence, limited conclusion. Level 4 (7–8): evaluates with named evidence (e.g. Docklands, Hulme), reaches a justified conclusion. Benefits: new housing, jobs, improved infrastructure, reduced crime, better services. Drawbacks: gentrification, displacement of original communities, affordability, unequal distribution of benefits. Strong answers will note variation between schemes.',
      },
      {
        q: 'State one cause and one effect of suburbanisation in UK cities. [2 marks]',
        marks: 2,
        markScheme: '1 mark for cause: improved transport links; car ownership; desire for more space/greenery; cheaper land on the edge; counter-urbanisation trends. 1 mark for effect: urban sprawl; loss of greenfield land; increased car journeys; decline of inner city; pressure on rural-urban fringe services.',
      },
      {
        q: 'Explain the concept of counter-urbanisation and suggest two reasons why it occurs. [4 marks]',
        marks: 4,
        markScheme: '1 mark for definition: movement of people from urban areas to rural areas/smaller settlements. 1 mark each for two reasons: improved road/rail links; internet enabling remote working; desire for lower crime/better quality of life; retirement; cheaper house prices in rural areas; perception that rural areas are safer for children.',
      },
      {
        q: 'Describe two negative impacts of urban growth on the environment. [4 marks]',
        marks: 4,
        markScheme: '1 mark for each impact identified, 1 mark for development. Loss of greenfield/agricultural land — reduces biodiversity and food production. Increased surface runoff from impermeable surfaces — flooding risk increases. Air pollution from vehicles/industry — poor air quality, harm to ecosystems. Light pollution — disrupts wildlife habitats. Urban heat island effect — increased energy use for cooling.',
      },
      {
        q: 'Suggest how urban planners can make new housing developments more sustainable. [4 marks]',
        marks: 4,
        markScheme: '1 mark per valid suggestion up to 4: use brownfield sites; build energy-efficient homes (insulation, solar); include green spaces/parks; design for walking/cycling not cars; mixed-use zoning to reduce travel; include affordable housing; sustainable drainage systems; community facilities included; connect to public transport.',
      },
      {
        q: 'Assess whether building on greenfield land is ever justified to solve the UK housing shortage. [8 marks]',
        marks: 8,
        markScheme: 'Level 1 (1–2): simple statements for/against. Level 2 (3–4): explains arguments on one side in more depth. Level 3 (5–6): balanced argument with some evidence; limited conclusion. Level 4 (7–8): evaluates arguments on both sides with evidence, reaches a clear justified conclusion. For: scale of housing shortage; brownfield insufficient; economic growth needs housing; not all greenfield is high-value. Against: biodiversity loss; greenbelt protection; urban sprawl; infrastructure costs; brownfield first policy. Best answers note that context matters — location, quality of land, transport links.',
      },
      {
        q: 'Describe the characteristics of an area in the rural-urban fringe. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three of: mix of urban and rural land uses; out-of-town shopping centres/retail parks; business parks; housing estates; farmland/open countryside; major road junctions; lower density development; golf courses; waste treatment/recycling facilities.',
      },
      {
        q: 'Explain why house prices tend to be highest in the outer suburbs and rural-urban fringe of UK cities. [4 marks]',
        marks: 4,
        markScheme: '1 mark per point + 1 mark development, up to 4: larger properties available — more demand from families; lower crime rates — desirable for families; better schools; more green space; less pollution/noise; further from industrial areas; newer housing stock; good transport links make commuting viable despite distance.',
      },
    ],
  },
  '2.3': {
    name: 'Global Development',
    questions: [
      {
        q: 'Define GDP per capita. [1 mark]',
        marks: 1,
        markScheme: '1 mark for: the total value of goods and services produced in a country in a year, divided by the population / average income per person.',
      },
      {
        q: 'State three components of the Human Development Index (HDI). [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: life expectancy at birth; mean/expected years of schooling / education index; GNI per capita (PPP). All three must be correct for 3 marks.',
      },
      {
        q: 'Explain one advantage of using HDI rather than GDP per capita as a measure of development. [2 marks]',
        marks: 2,
        markScheme: '1 mark for the advantage: HDI is a composite measure — it uses multiple indicators. 1 mark for development: gives a more complete/rounded picture of development than just income; includes social factors (health, education) which GDP misses; a country can have high GDP but poor health/education outcomes (e.g. oil states).',
      },
      {
        q: 'Describe two limitations of using economic indicators alone to measure development. [4 marks]',
        marks: 4,
        markScheme: '1 mark for each limitation + 1 mark development. GDP per capita is an average — masks inequality within the country. Does not measure quality of life, health, education or wellbeing. Does not account for informal economy. Does not reflect environmental sustainability. GNI can be distorted by multinational profits flowing out of country.',
      },
      {
        q: 'Draw a sketch map to show the approximate position of the Brandt Line and the global pattern of development. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: world map or recognisable outline; Brandt Line drawn roughly correctly (separating richer North from poorer South, curving south to include Australia/New Zealand in the North); Global North labelled as more developed/HICs; Global South labelled as less developed/LICs/NEEs; at least one named example country in each category.',
        diagram: true,
      },
      {
        q: 'Explain one limitation of the Brandt Line as a way of classifying development. [2 marks]',
        marks: 2,
        markScheme: '1 mark for limitation: it is a crude/simplistic division; ignores variation within the Global South; many NEEs (e.g. China, Brazil) are in the Global South but are rapidly developing; Australia and New Zealand are in the geographical south but classed as Global North. 1 mark for development of point.',
      },
      {
        q: 'What is the difference between a Low Income Country (LIC) and a Newly Emerging Economy (NEE)? [2 marks]',
        marks: 2,
        markScheme: '1 mark for LIC: a country with a low GDP/GNI per capita; limited industrialisation; often dependent on primary industries. 1 mark for NEE: a country that has begun to industrialise rapidly; growing economy; increasing GDP; examples include China, India, Brazil, Nigeria.',
      },
      {
        q: 'Describe two physical causes of uneven global development. [4 marks]',
        marks: 4,
        markScheme: '1 mark for each cause + 1 mark development. Climate — hot/dry or tropical climates can reduce agricultural productivity, limit food security; increase disease burden (malaria, etc.). Landlocked location — no sea access, higher transport costs, limits trade. Natural hazards — frequent earthquakes/volcanic eruptions/floods destroy infrastructure, divert investment. Poor soils — limited agricultural output, food insecurity.',
      },
      {
        q: 'Explain how colonialism has contributed to uneven development between countries. [6 marks]',
        marks: 6,
        markScheme: 'Level 1 (1–2): simple statement that colonialism caused poverty. Level 2 (3–4): explains how colonialism had negative effects on colonies with some development. Level 3 (5–6): detailed explanation covering multiple mechanisms — extraction of raw materials and wealth; borders drawn without regard for ethnic groups leading to conflict; education/infrastructure built to serve colonisers not local people; cash crop agriculture replacing food production; debt from post-independence loans; cultural disruption; loss of skilled workers. Links to present-day inequality.',
      },
      {
        q: 'Explain how trade inequalities can cause uneven development. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: LICs tend to export raw materials at low prices and import manufactured goods at higher prices — unfavourable terms of trade; price of commodities fluctuates, making income unreliable; tariffs and subsidies in HICs make it hard for LIC producers to compete; trade agreements often favour HICs; profits from trade often returned to HIC shareholders.',
      },
      {
        q: 'Suggest how conflict can prevent a country from developing. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: destroys infrastructure (roads, hospitals, schools); discourages foreign investment; diverts government spending to military; causes displacement of population; kills/injures working-age population; reduces agricultural output; disrupts education; can last for generations.',
      },
      {
        q: 'Describe the difference between short-term emergency aid and long-term development aid. [4 marks]',
        marks: 4,
        markScheme: '2 marks for short-term: immediate response to disaster/crisis; food, water, shelter, medical supplies; e.g. after earthquakes, floods. 2 marks for long-term: sustained projects to improve quality of life; e.g. building schools, wells, training local workers; aims to build self-sufficiency.',
      },
      {
        q: 'Explain the difference between bilateral aid and multilateral aid. [4 marks]',
        marks: 4,
        markScheme: '1 mark for bilateral: aid given directly from one government to another. 1 mark development: can come with conditions ("tied aid") that benefit the donor country. 1 mark for multilateral: aid given through international organisations (UN, World Bank, IMF). 1 mark development: pooled resources; less tied; but can come with structural adjustment conditions.',
      },
      {
        q: 'Assess the arguments for and against aid as a strategy for reducing global inequality. [8 marks]',
        marks: 8,
        markScheme: 'Level 1 (1–2): simple points. Level 2 (3–4): some explanation with limited balance. Level 3 (5–6): explains both sides with some evidence. Level 4 (7–8): balanced evaluation with named evidence, clear justified conclusion. For: saves lives (emergency aid), funds infrastructure, builds capacity, fills funding gaps. Against: creates dependency, tied aid benefits donors, corruption can divert funds, can undermine local markets, does not address structural causes of inequality (trade, debt). Best answers evaluate quality of different aid types.',
      },
      {
        q: 'Explain how Foreign Direct Investment (FDI) can promote development in LICs and NEEs. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: creates jobs for local population; transfers technology and skills; generates tax revenue for government; builds infrastructure (roads, ports); increases export earnings; stimulates secondary economic activity/multiplier effect.',
      },
      {
        q: 'Give two disadvantages of Foreign Direct Investment for developing countries. [2 marks]',
        marks: 2,
        markScheme: '1 mark each for any two: profits often repatriated to HIC shareholders; low wages/poor working conditions; environmental damage; exploits cheap labour; dependency on TNCs; race to the bottom on regulations.',
      },
      {
        q: 'Explain the principles of Fairtrade and how it can benefit farmers in developing countries. [6 marks]',
        marks: 6,
        markScheme: 'Level 1 (1–2): basic description of Fairtrade. Level 2 (3–4): explains some principles and benefits with development. Level 3 (5–6): detailed explanation of Fairtrade premium, guaranteed minimum price, long-term contracts, community investment fund; benefits: stable income, investment in schools/healthcare/infrastructure, farmers not exploited by middlemen, environmental standards; example: cocoa/coffee farmers in Ghana/Ethiopia. Mention of criticisms for full marks not required but accepted.',
      },
      {
        q: 'Suggest one criticism of the Fairtrade system. [2 marks]',
        marks: 2,
        markScheme: '1 mark for criticism: only small percentage of Fairtrade premium reaches farmers; certification costs are high for small farmers; limited to certain products; may create dependency on western consumer goodwill; does not challenge structural trade inequalities. 1 mark for development.',
      },
      {
        q: 'What is microfinance and how can it help people in developing countries? [4 marks]',
        marks: 4,
        markScheme: '1 mark for definition: small loans provided to people who cannot access traditional banking. 1 mark for example: Grameen Bank, Bangladesh (Muhammad Yunus). 1 mark for how it helps: allows people to start small businesses; buy tools/livestock; generate income. 1 mark for development: particularly helps women; increases household income; can break the poverty cycle.',
      },
      {
        q: 'Explain how debt can trap LICs in a cycle of poverty. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: countries borrowed money from World Bank/IMF; high interest payments reduce money available for health/education; structural adjustment conditions (privatisation, cutting public services) can worsen poverty; debt grows faster than ability to repay; cycle: need more loans to service existing debt; HIPC initiative sought to address this.',
      },
      {
        q: 'Describe how tourism can be used as a strategy for development. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three of: creates jobs (hotels, guides, transport); generates foreign exchange earnings; stimulates local food/craft industries; multiplier effect; funds infrastructure development; can fund conservation; ecotourism can benefit rural communities directly.',
      },
      {
        q: 'Suggest two disadvantages of relying on tourism as a development strategy. [2 marks]',
        marks: 2,
        markScheme: '1 mark each for any two: seasonal — income not year-round; vulnerable to external shocks (terrorism, pandemics, natural disasters); profits leakage to foreign-owned companies; environmental damage; cultural disruption; dependency on foreign tourists; low wages in hospitality.',
      },
      {
        q: 'Describe Nigeria\'s economic growth since the 1990s. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four of: GDP has grown significantly; oil industry major contributor; Lagos is a major financial/commercial hub; growing manufacturing sector; ICT and banking growing; one of Africa\'s largest economies; annual growth rates averaging 5–7% in 2000s–2010s; classified as NEE.',
      },
      {
        q: 'Explain how oil extraction has both benefited and harmed Nigeria. [6 marks]',
        marks: 6,
        markScheme: 'Level 1 (1–2): simple statements. Level 2 (3–4): describes benefits and harms with some development. Level 3 (5–6): detailed, balanced explanation. Benefits: oil revenues fund government spending, major export earner, jobs in oil sector, infrastructure investment. Harms: Shell oil spills in Niger Delta — Ogoniland pollution; water/soil contamination; harm to local livelihoods (fishing, farming); conflict over resources; corruption in oil revenues; resource curse — manufacturing neglected; inequality.',
      },
      {
        q: 'Describe the pattern of inequality within Nigeria. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four of: north-south divide — south richer due to oil/industry; Lagos vs rural areas; urban-rural inequality; Muslim north has lower literacy/development indicators; south-south region (Niger Delta) suffers despite oil wealth; Gini coefficient high; wealth concentrated among elite; large informal economy.',
      },
      {
        q: 'Compare the level of development of Nigeria (NEE) with that of a named LIC. [6 marks]',
        marks: 6,
        markScheme: 'Level 1 (1–2): describes one country. Level 2 (3–4): compares with limited development. Level 3 (5–6): detailed comparison using statistics/data, covering multiple indicators (GDP, life expectancy, literacy, HDI). Accept any valid LIC (e.g. Zambia, Ethiopia, Niger). Must include direct comparison language ("whereas", "in contrast") for Level 3.',
      },
      {
        q: 'Explain the Fairtrade chocolate/coffee commodity chain and how value is distributed. [6 marks]',
        marks: 6,
        markScheme: 'Level 1 (1–2): describes the chain simply. Level 2 (3–4): explains the chain with some analysis of who benefits. Level 3 (5–6): traces the full chain — farmer → co-operative → exporter → processor → manufacturer → retailer → consumer; explains that farmers receive smallest share; middlemen/processors/retailers take largest margins; Fairtrade attempts to shift more value to farmers through minimum price and premium; gives approximate value distribution. Example: cocoa farmer in Ghana receives ~6% of value of chocolate bar.',
      },
      {
        q: 'Describe what is meant by the development spectrum. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: countries exist at different stages of development rather than being simply \'developed\' or \'developing\'. 1 mark for: identified categories — LICs, NEEs, HICs (or mention BRICS, MINT etc.) on a continuum.',
      },
      {
        q: 'State two development indicators that could be used to classify a country as an LIC. [2 marks]',
        marks: 2,
        markScheme: '1 mark each for any two: low GDP/GNI per capita (under $1,025 World Bank threshold); low HDI score; high infant mortality rate; low life expectancy; low literacy rate; high birth rate; high % of labour force in agriculture; limited access to clean water/sanitation.',
      },
      {
        q: 'Explain the difference between infant mortality rate and life expectancy as development indicators. [4 marks]',
        marks: 4,
        markScheme: '1 mark for IMR definition: number of deaths of children under 1 per 1,000 live births. 1 mark for life expectancy definition: average age a person born today can expect to live to. 1 mark for how each indicates development: high IMR = poor healthcare/nutrition/sanitation; low life expectancy = poor healthcare, disease, poverty. 1 mark for comparison: IMR is a more sensitive indicator of early childhood conditions; life expectancy averages all deaths.',
      },
      {
        q: 'To what extent is Fairtrade an effective solution to reducing inequality between HICs and LICs? [8 marks]',
        marks: 8,
        markScheme: 'Level 1 (1–2): simple points. Level 2 (3–4): some explanation with limited evaluation. Level 3 (5–6): explains effectiveness and limitations with evidence. Level 4 (7–8): evaluates with evidence, compares Fairtrade to other strategies, reaches a clear conclusion. Effective: guaranteed minimum price, community investment, stable livelihoods. Limited: small scale, does not address structural trade rules, producer to benefit varies, consumer awareness/cost premium. Comparison: structural solutions (debt relief, trade reform) may be more effective at scale.',
      },
      {
        q: 'Suggest why natural disasters can have a greater impact on LICs than on HICs. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: LICs have weaker building standards — more deaths from building collapse; limited emergency services/healthcare; less money for early warning systems; slower reconstruction; greater dependence on agriculture — food insecurity after; debt means cannot afford rebuilding; limited insurance. HICs have resources to prepare and recover quickly.',
      },
      {
        q: 'Describe the differences in birth rate and death rate between LICs and HICs. [4 marks]',
        marks: 4,
        markScheme: '2 marks for LICs: high birth rates (often 30–40+ per 1,000); higher death rates (though falling); high natural increase rate; high infant mortality. 2 marks for HICs: low birth rates (10–15 per 1,000); low death rates; low or negative natural increase; low infant mortality.',
      },
      {
        q: 'Explain how access to clean water affects development in LICs. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: without clean water, waterborne diseases (cholera, typhoid) cause illness and death; children miss school to collect water — reduces educational attainment; women spend hours collecting water — cannot work; agricultural productivity limited; economic activity disrupted; healthcare costs increased. Access to clean water reduces mortality, improves productivity.',
      },
      {
        q: 'Assess whether economic growth alone is sufficient to reduce poverty in NEEs. [8 marks]',
        marks: 8,
        markScheme: 'Level 1 (1–2): simple points. Level 2 (3–4): some explanation with limited balance. Level 3 (5–6): explains role of economic growth and its limitations with evidence. Level 4 (7–8): balanced evaluation with named evidence (e.g. Nigeria — rapid GDP growth but persistent inequality; China — growth has lifted millions but inequality has also grown); reaches justified conclusion. Growth necessary but not sufficient — distribution matters; social investment (health, education) required; governance and corruption reduction important; environmental sustainability.',
      },
      {
        q: 'Describe the global pattern of literacy rates. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three of: lowest literacy in sub-Saharan Africa and parts of South Asia; highest in HICs (near 100%); gender gap in literacy in many LICs/NEEs; improving globally but inequalities persist; rural areas have lower literacy than urban within countries; literacy correlates strongly with HDI.',
      },
      {
        q: 'Explain how the percentage of the labour force employed in agriculture can indicate a country\'s level of development. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for up to three: LICs have higher % in agriculture — subsistence farming, low productivity, low wages; HICs have low % in agriculture — mechanised, high-tech, fewer workers needed; as countries develop, workers move to industry and services (structural transformation); high % in agriculture indicates low industrialisation; limits national income and productivity.',
      },
      {
        q: 'What is the Demographic Transition Model (DTM)? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: a model showing changes in birth rates and death rates over time as countries develop; 1 mark for: consists of 5 stages from high birth/death rates (Stage 1, least developed) to low birth/death rates and possibly declining population (Stage 5, most developed).',
      },
      {
        q: 'Explain how fair trade can help reduce the development gap. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: guarantees a minimum price for producers (protects from market volatility); pays a social premium reinvested in community projects (schools, clean water); improves working conditions and bans child labour; gives small farmers access to global markets; BUT fair trade represents small share of global trade and premium prices limit consumer uptake.',
      },
      {
        q: 'To what extent have Transnational Corporations (TNCs) helped the development of NEEs? [8 marks]',
        marks: 8,
        markScheme: 'Level 1 (1–2): simple statements. Level 2 (3–4): lists benefits and costs with limited evaluation. Level 3 (5–6): explains both sides with named examples. Level 4 (7–8): balanced evaluation with clear judgement. Benefits: FDI/capital investment; creation of jobs (e.g. Foxconn in China, Nike in Vietnam); technology/skills transfer; export earnings; multiplier effect; infrastructure improvements. Drawbacks: profits repatriated to HIC HQ; low wages and poor working conditions; environmental damage; cultural erosion; tax avoidance. Conclusion should assess extent — significant role but needs to be combined with strong local governance and worker protections.',
      },
    ],
  },
  '3.1': {
    name: 'Tectonic Hazards',
    questions: [
      {
        q: 'Draw a labelled diagram of the Earth\'s internal structure. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for correctly labelled: inner core (solid iron/nickel); outer core (liquid iron/nickel); mantle (including asthenosphere/lithosphere); crust (continental and/or oceanic). Layers must be shown in correct order from centre outward.',
        diagram: true,
      },
      {
        q: 'State two differences between continental crust and oceanic crust. [2 marks]',
        marks: 2,
        markScheme: '1 mark each for any two correct differences: continental crust is thicker (30–70 km) vs oceanic (5–10 km); continental crust is less dense (2.7 g/cm³) vs oceanic (3.0 g/cm³); continental crust is made of granite vs oceanic basalt; continental crust is older vs oceanic crust (younger — constantly being created/destroyed).',
      },
      {
        q: 'Explain how convection currents in the mantle drive tectonic plate movement. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: heat from the core heats mantle rock; hot rock becomes less dense and rises; cooler rock sinks; creates circular convection cells; these drag tectonic plates above them; where currents diverge, plates are pulled apart; where currents converge, plates are pushed together; ridge push and slab pull also contribute (1 mark each if mentioned).',
      },
      {
        q: 'Describe the features formed at a constructive plate boundary. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four of: plates move apart/diverge; magma rises to fill the gap; new crust/seafloor created; mid-ocean ridges formed (e.g. Mid-Atlantic Ridge); rift valleys on land (e.g. Great Rift Valley); shield volcanoes; shallow-focus earthquakes; no subduction.',
      },
      {
        q: 'Draw and label a diagram to show the features of a destructive plate boundary (oceanic-continental). [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: oceanic plate shown subducting beneath continental plate; subduction zone/trench labelled (e.g. Peru-Chile Trench); magma rising/volcano on continental plate (e.g. Andes); fold mountains labelled; earthquake foci at depth on subduction zone. Diagram must be recognisable and labelled.',
        diagram: true,
      },
      {
        q: 'Explain why composite (strato) volcanoes are more dangerous than shield volcanoes. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: composite volcanoes have viscous/silica-rich lava that does not flow easily — pressure builds up; cause explosive eruptions; produce pyroclastic density currents — fast-moving, extremely hot, lethal; generate ash falls over wide areas; can collapse catastrophically (e.g. Montserrat). Shield volcanoes: low-viscosity basaltic lava flows; rarely explosive; people can usually evacuate.',
      },
      {
        q: 'Describe the volcanic hazards associated with a major eruption. [6 marks]',
        marks: 6,
        markScheme: 'Level 1 (1–2): names some hazards. Level 2 (3–4): describes several hazards with some development. Level 3 (5–6): detailed description of multiple hazards explaining their impacts: lava flows (destroy property, slow — can be avoided); pyroclastic density currents (fast, >700°C, very dangerous, cannot be outrun); ash falls (disrupts transport, agriculture, health, can cause roof collapse); lahars (volcanic mudflows along river valleys, bury settlements); volcanic gases (SO₂, CO₂ — toxic, acid rain); tsunamis (if eruption is coastal/underwater).',
      },
      {
        q: 'Define the terms focus (hypocentre) and epicentre of an earthquake. [2 marks]',
        marks: 2,
        markScheme: '1 mark for focus/hypocentre: the point underground/within the Earth\'s crust where the earthquake originates/where rocks first fracture. 1 mark for epicentre: the point on the Earth\'s surface directly above the focus.',
      },
      {
        q: 'Explain the difference between the Richter scale and the Mercalli intensity scale. [4 marks]',
        marks: 4,
        markScheme: '1 mark for Richter: measures the magnitude/energy released by an earthquake; logarithmic scale; measured using a seismograph; same value worldwide. 1 mark for Mercalli: measures the intensity/effects of the earthquake at a particular location; based on observations of damage and human experience; varies with distance from epicentre. 1 mark for key difference: magnitude is objective/measured; intensity is subjective/varies by location. 1 mark for development.',
      },
      {
        q: 'Describe three secondary hazards caused by earthquakes. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three: liquefaction — saturated soils lose strength, buildings sink; tsunami — underwater earthquake displaces water; landslides/rockfalls — slopes destabilised; fires — ruptured gas pipes, downed electricity lines; flooding — dam failure; disease outbreak — contaminated water/damaged sanitation.',
      },
      {
        q: 'Draw a labelled diagram to show how a tsunami is generated by a submarine earthquake. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: earthquake shown at subduction zone/undersea; seafloor displacement shown (uplift); water column displaced upward; waves radiating outward; waves shown increasing in height (shoaling) as they approach shore. Diagram must be clear and labelled.',
        diagram: true,
      },
      {
        q: 'Explain how the level of development of a country affects its vulnerability to tectonic hazards. [6 marks]',
        marks: 6,
        markScheme: 'Level 1 (1–2): simple statement that poorer countries suffer more. Level 2 (3–4): explains some factors with development. Level 3 (5–6): detailed explanation covering multiple factors: building quality — poor standards mean more collapse; emergency services — insufficient response capacity; early warning systems — LICs may lack these; community preparedness; access to healthcare; ability to rebuild. Links to specific examples (Haiti 2010 vs Japan 2011) for full marks.',
      },
      {
        q: 'Describe the causes and immediate effects of the Haiti earthquake (2010). [6 marks]',
        marks: 6,
        markScheme: 'Level 1 (1–2): basic facts. Level 2 (3–4): some detail on causes and effects. Level 3 (5–6): detailed and accurate. Causes: magnitude 7.0; 13 January 2010; conservative/transform boundary between Caribbean and North American plates; shallow focus (13 km); near Port-au-Prince. Immediate effects: 230,000+ deaths; 1.5 million homeless; 250,000 homes/30,000 businesses destroyed; government buildings collapsed (including Presidential Palace); roads impassable; hospitals overwhelmed; cholera outbreak later.',
      },
      {
        q: 'Describe the causes and immediate effects of the Japan earthquake and tsunami (2011). [6 marks]',
        marks: 6,
        markScheme: 'Level 1 (1–2): basic facts. Level 2 (3–4): some detail. Level 3 (5–6): detailed and accurate. Causes: magnitude 9.0 (Tōhoku); 11 March 2011; destructive boundary — Pacific Plate subducting under Eurasian Plate; megathrust earthquake. Immediate effects: ~15,900 killed (mostly by tsunami); tsunami waves 10–40 m high; entire coastal towns destroyed; Fukushima Daiichi nuclear disaster; 450,000 displaced; $235 billion damage.',
      },
      {
        q: 'Compare the responses to the Haiti earthquake (2010) and the Japan earthquake (2011). [6 marks]',
        marks: 6,
        markScheme: 'Level 1 (1–2): describes one country. Level 2 (3–4): describes both with limited comparison. Level 3 (5–6): direct comparison of responses. Haiti: slow response due to damaged infrastructure; international aid essential; UN peacekeepers; long-term recovery very slow; political instability; still rebuilding a decade later. Japan: highly organised response; Self-Defence Forces deployed; tsunami warning system gave some warning; nuclear evacuation; faster rebuilding; insurance payouts; government reconstruction funding. Key contrast: GDP/resources, preparedness, governance.',
      },
      {
        q: 'Explain how building design can reduce earthquake deaths. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: cross-bracing — steel framework absorbs shaking; rubber base isolators — building moves independently of ground; counterweights at top (e.g. Taipei 101 damper); open ground floors — absorb collapse; reinforced concrete; automatic gas shut-offs; low-rise buildings safer in LICs; retrofitting old buildings.',
      },
      {
        q: 'Describe how prediction and preparation can reduce the impact of volcanic eruptions. [4 marks]',
        marks: 4,
        markScheme: '1 mark per point: seismometers detect increased seismic activity before eruption; ground deformation measured (tiltmeters); gas emissions monitored (increased SO₂ before eruption); thermal imaging; on this basis, evacuation warnings issued; exclusion zones established; emergency drills; evacuation plans prepared.',
      },
      {
        q: 'To what extent can tectonic hazards ever be effectively managed? [8 marks]',
        marks: 8,
        markScheme: 'Level 1 (1–2): simple statements. Level 2 (3–4): some explanation with limited balance. Level 3 (5–6): explains both effective and ineffective management with evidence. Level 4 (7–8): evaluates effectiveness with named examples, reaches a justified conclusion. Effective: Japan\'s preparedness, early warning systems, building codes. Less effective: Haiti (poverty limits preparation); volcanic eruptions still unpredictable; some hazards (tsunamis) too fast; cannot prevent tectonic events. Conclusion must weigh development level, hazard type, and preparedness.',
      },
      {
        q: 'Describe the features of a conservative (transform) plate boundary and give a named example. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three: plates slide past each other horizontally; no crust created or destroyed; no volcanic activity; causes powerful earthquakes; plates may lock then release (elastic rebound); example: San Andreas Fault, California (North American and Pacific plates); also accept: Caribbean/North American at Haiti.',
      },
      {
        q: 'Explain why people continue to live near active volcanoes despite the risks. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: volcanic soils are extremely fertile — high crop yields; tourism/economic opportunities; geothermal energy; historical/cultural attachment to land; perception that eruption is rare or warning will be given; poverty — cannot afford to move; lack of alternatives; some volcanoes dormant for generations.',
      },
      {
        q: 'Describe the characteristics of the Mid-Atlantic Ridge and explain how it was formed. [4 marks]',
        marks: 4,
        markScheme: '1 mark for characteristics: runs N-S through Atlantic Ocean; 16,000 km long; mid-ocean ridge; forms islands where above sea level (Iceland); deep rift valley along centre. 1 mark for formation explanation: constructive boundary; North American and Eurasian plates diverge; magma rises; new basaltic crust created; ridge built up over millions of years.',
      },
      {
        q: 'Compare the formation of the Himalayas and the Andes. [6 marks]',
        marks: 6,
        markScheme: 'Level 1 (1–2): describes one range. Level 2 (3–4): describes both with limited comparison. Level 3 (5–6): direct comparison. Himalayas: continental-continental collision (India and Eurasian plates); neither plate subducts — both uplift to form fold mountains; highest on Earth. Andes: oceanic-continental destructive boundary (Nazca and South American plates); oceanic plate subducts; fold mountains on overriding plate; also associated with volcanoes. Key differences: Himalayas — no subduction, no volcanoes; Andes — subduction, active volcanoes, earthquakes.',
      },
      {
        q: 'What evidence supports the theory of tectonic plate movement? [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four: matching coastlines (jigsaw fit) of South America and Africa; matching fossil evidence on separated continents (e.g. Mesosaurus); matching rock types/geological structures across ocean basins; paleomagnetism — magnetic striping either side of mid-ocean ridges; GPS measurements showing current plate movement.',
      },
      {
        q: 'Describe the distribution of tectonic hazards at a global scale. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four of: concentrated along plate boundaries; the Ring of Fire (Pacific) has highest frequency; earthquakes along all boundary types; volcanoes mainly at destructive and constructive boundaries; mid-ocean ridges (constructive) are mostly underwater; hotspots (e.g. Hawaii) not at plate boundaries; destructive boundaries along Andes, Japan, SE Asia.',
      },
      {
        q: 'Draw a diagram to show the features of an island arc formed at an oceanic-oceanic destructive boundary. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: two oceanic plates shown; one subducting beneath the other; ocean trench labelled (e.g. Mariana Trench); chain of volcanic islands (island arc) labelled above the subducting plate. All four features must be shown and labelled.',
        diagram: true,
      },
      {
        q: 'Explain why shallow-focus earthquakes tend to cause more damage than deep-focus earthquakes. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for up to three: shallow-focus earthquakes have their focus close to the surface (less than 70 km); less energy is absorbed/dissipated as waves travel upward; stronger shaking felt at the surface; more energy reaches buildings; deep-focus earthquakes (>300 km) lose more energy travelling through rock.',
      },
      {
        q: 'Suggest how land use planning can reduce the risk from tectonic hazards. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: zoning laws prevent building on fault lines or close to volcanoes; exclusion zones around active craters; critical infrastructure (hospitals, schools) built away from high-risk areas; mapped floodplains/lahar channels kept free of development; planning requires earthquake-resistant construction standards in seismic zones.',
      },
      {
        q: 'Compare the volcanic activity at Montserrat and Iceland and explain the differences. [6 marks]',
        marks: 6,
        markScheme: 'Level 1 (1–2): describes one location. Level 2 (3–4): describes both. Level 3 (5–6): direct comparison and explanation. Montserrat: Soufrière Hills; destructive boundary (subduction); composite/strato volcano; andesitic lava; explosive eruptions; pyroclastic flows; 19 deaths (1997); south of island abandoned. Iceland: constructive boundary; Mid-Atlantic Ridge; shield volcanoes and fissure eruptions; basaltic lava; less explosive generally; geothermal energy harnessed. Key: type of boundary explains type of eruption.',
      },
      {
        q: 'Describe the human responses to the Montserrat volcanic eruption (1995–1997). [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four: evacuation of southern half of island; Plymouth (capital) abandoned; exclusion zones established; UK aid provided (Montserrat is UK Overseas Territory); some residents refused to leave; international humanitarian aid; long-term relocation to UK and other islands; population fell from ~11,000 to ~4,000; north of island developed as new safe zone.',
      },
      {
        q: 'Explain how elastic rebound theory explains why earthquakes occur. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: tectonic plates try to move past each other at a fault; friction causes them to lock/stick together; stress/strain energy builds up over years; eventually stress exceeds friction; rocks fracture/slip suddenly; stored energy released as seismic waves/earthquake; process repeats — explains regularity of earthquakes in seismic zones.',
      },
      {
        q: 'Assess the view that earthquake prediction has made earthquake hazards manageable. [8 marks]',
        marks: 8,
        markScheme: 'Level 1 (1–2): simple statements. Level 2 (3–4): some explanation of prediction methods and limitations. Level 3 (5–6): explains both the advances and limitations of prediction with evidence. Level 4 (7–8): evaluates different aspects of management, noting prediction is only one component; references named examples; reaches a justified conclusion. Prediction: seismometers, GPS, radon gas, animal behaviour — none fully reliable. Preparation more important than prediction: Japan building codes, drills, early warning. Conclusion: prediction has limited success but preparation/protection more effective.',
      },
      {
        q: 'Describe the social impacts of the Japan 2011 earthquake and tsunami. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four: ~15,900 killed, 2,500 missing; 450,000+ displaced; entire coastal communities destroyed (e.g. Rikuzentakata); psychological trauma; nuclear evacuation (200,000 people from Fukushima); schools/hospitals destroyed; community bonds broken by displacement; recovery slow for elderly population.',
      },
      {
        q: 'Explain what is meant by the term \'natural hazard\' and how tectonic events become hazards. [3 marks]',
        marks: 3,
        markScheme: '1 mark for definition: a natural event that poses a threat to human life or property. 1 mark for: tectonic events (earthquakes, volcanic eruptions) become hazards when they occur near human populations. 1 mark for development: the same magnitude earthquake in an uninhabited area is a natural event but not a hazard; vulnerability (population density, building quality, economic capacity) determines hazard level.',
      },
      {
        q: 'Describe the differences in the economic impacts of the Haiti 2010 and Japan 2011 earthquakes. [4 marks]',
        marks: 4,
        markScheme: '2 marks for Haiti: very high economic impact relative to GDP; $14 billion damage; 120% of GDP; slower to rebuild due to poverty; international debt relief required. 2 marks for Japan: $235 billion absolute cost but represented about 3% of GDP; ability to fund reconstruction; insurance payouts; economy recovered within years.',
      },
      {
        q: 'Describe what is meant by the \'ring of fire\'. [2 marks]',
        marks: 2,
        markScheme: '1 mark for: a zone around the Pacific Ocean where many earthquakes and volcanic eruptions occur; 1 mark for: marks the boundaries of the Pacific plate with surrounding plates — contains ~75% of world\'s volcanoes and 90% of earthquakes.',
      },
      {
        q: 'Explain the difference between the Richter scale and the Mercalli scale. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: Richter scale — measures magnitude/energy released by an earthquake using seismograph readings; logarithmic scale (each number is 10x stronger); Mercalli scale — measures intensity/impact of earthquake on people and structures; based on observation, ranges I–XII (Roman numerals); Richter objective/instrumental, Mercalli subjective/experiential.',
      },
      {
        q: 'Suggest two primary effects and two secondary effects of a volcanic eruption. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: primary — lava flows destroying buildings/crops; pyroclastic flows killing people; ash fall damaging roofs/crops; volcanic bombs. Secondary — lahars/mudflows when ash mixes with water/snow (e.g. Nevado del Ruiz 1985); tsunamis from underwater eruptions; disruption to air travel (e.g. Eyjafjallajökull 2010 grounded European flights); long-term climate cooling.',
      },
      {
        q: 'Compare the responses to the Haiti 2010 and Japan 2011 earthquakes. [6 marks]',
        marks: 6,
        markScheme: 'Level 3 (5–6 marks): Compares short-term and long-term responses using specific detail from both events, reaches a supported conclusion about effectiveness. Level 2 (3–4 marks): Describes responses with some comparison. Level 1 (1–2 marks): Basic points. Accept Haiti: slow response due to destroyed infrastructure; dependent on international aid (US, UN, NGOs); limited emergency services; cholera outbreak from poor sanitation; 5 years later still 80,000 in tented camps. Japan: rapid self-sufficient response; Self-Defence Forces mobilised; advanced early-warning systems worked; tsunami walls held in places (failed in others); nuclear crisis complicated response; most infrastructure rebuilt within years. Conclusion: HIC vs LIC capacity explains vast difference.',
      },
      {
        q: 'Explain why some people continue to live in areas at high risk from tectonic hazards. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four: fertile volcanic soils excellent for farming (e.g. slopes of Mt Etna, Vesuvius); geothermal energy sources; tourism income (e.g. Iceland); mineral/gemstone deposits; familiar/cultural attachment to home; poverty — cannot afford to move; belief monitoring/defences will protect them; events infrequent — perceived low risk; employment opportunities in the area.',
      },
      {
        q: 'Evaluate the effectiveness of monitoring and prediction in reducing the impacts of tectonic hazards. [6 marks]',
        marks: 6,
        markScheme: 'Level 3 (5–6 marks): Evaluates volcanic and earthquake monitoring with named examples, reaches a supported conclusion. Level 2 (3–4 marks): Describes methods with some evaluation. Level 1 (1–2 marks): Basic methods listed. Accept volcanic — seismometers, gas sampling, tiltmeters, thermal imaging (successful prediction at Mt Pinatubo 1991 saved thousands of lives through evacuation); Mt Etna continuously monitored. Earthquakes — much harder to predict precisely; Japan uses early-warning systems giving seconds of warning; animal behaviour inconclusive. Conclusion: monitoring highly effective for volcanoes, limited for earthquakes — so prediction alone insufficient, must combine with planning/preparation/building design.',
      },
    ],
  },
  '3.2': {
    name: 'Climate Change',
    questions: [
      {
        q: 'State three types of evidence that scientists use to show that the climate has changed in recent decades. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three: instrumental temperature records (NASA/NOAA since 1850 — global average has risen ~1.1°C); ice core data (CO₂ and temperature from Greenland/Antarctic ice); sea level rise measurements (risen ~20 cm since 1900); glacier retreat photographs; Arctic sea ice extent reduction; phenological records (earlier springs, species range shifts).',
      },
      {
        q: 'Explain how ice cores provide evidence for past climate change. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: ice cores drilled from Greenland and Antarctica; ancient air bubbles trapped in ice preserve samples of past atmosphere; CO₂ and methane concentrations measurable; isotopes of oxygen indicate past temperatures; cores can extend back 800,000 years; show correlation between greenhouse gas levels and temperature; show current CO₂ is unprecedented in that record.',
      },
      {
        q: 'Describe three natural causes of climate change. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three: Milankovitch cycles — variations in Earth\'s orbit (eccentricity ~100,000 yrs), axial tilt (~41,000 yrs), precession (~21,000 yrs); volcanic eruptions — aerosols (sulphur dioxide) block sunlight, causing short-term cooling (e.g. Mount Pinatubo 1991); variations in solar output — sunspot cycles, Maunder Minimum (Little Ice Age); changes in ocean circulation.',
      },
      {
        q: 'Explain the Milankovitch cycles and their role in long-term climate change. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: three cycles: eccentricity (shape of orbit changes over ~100,000 years — affects distance from Sun); axial tilt (changes from 22.1° to 24.5° over ~41,000 years — affects seasonality); precession (wobble in Earth\'s axis over ~21,000 years — affects timing of seasons); cycles combine to cause ice ages; these are natural and explain glacial-interglacial cycles over tens of thousands of years — not current rapid warming.',
      },
      {
        q: 'Draw and annotate a diagram to explain the enhanced greenhouse effect. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: solar radiation (short-wave) entering atmosphere shown; some reflected by atmosphere/surface; long-wave (infrared) radiation emitted from surface; greenhouse gases shown absorbing/re-emitting long-wave radiation back to surface; annotation explaining that more GHGs = more heat trapped = global warming.',
        diagram: true,
      },
      {
        q: 'Name four greenhouse gases and give a human source for each. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for correctly matched pair: CO₂ — burning fossil fuels/deforestation; methane (CH₄) — livestock/landfill/rice paddies; nitrous oxide (N₂O) — fertiliser use/agriculture; CFCs — refrigerants/aerosols (now banned under Montreal Protocol); water vapour — indirect (positive feedback); accept any correct pairing.',
      },
      {
        q: 'Explain why deforestation contributes to climate change. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: trees absorb CO₂ during photosynthesis; cutting/burning trees releases stored CO₂; fewer trees means less CO₂ absorbed; burning releases CO₂ directly; clearing for agriculture often involves burning; soil disturbance releases CO₂; reduces albedo if replaced by darker surfaces; positive feedback: less trees → more CO₂ → more warming.',
      },
      {
        q: 'Describe how methane emissions from agriculture contribute to climate change. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three: livestock (cattle, sheep) produce methane through enteric fermentation/digestion; rice paddies are flooded — anaerobic decomposition produces methane; manure management releases methane; methane is ~28 times more potent as a greenhouse gas than CO₂ over 100 years; global livestock farming is a major source; growing demand for meat increases emissions.',
      },
      {
        q: 'Explain the process of positive feedback in the context of melting permafrost. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: permafrost is frozen ground in Arctic regions containing vast stores of organic matter; as temperatures rise, permafrost thaws; decomposition of organic matter releases CO₂ and methane; these greenhouse gases warm the atmosphere further; more warming → more permafrost melts → more GHG released → runaway feedback loop; this makes climate change self-reinforcing.',
      },
      {
        q: 'Describe two consequences of sea level rise for low-lying areas. [4 marks]',
        marks: 4,
        markScheme: '1 mark for each consequence + 1 mark development: Coastal flooding — more frequent storm surges inundate land, damage property, displace people (e.g. Bangladesh). Saltwater intrusion — freshwater aquifers contaminated, agricultural land becomes saline, food/water security threatened. Loss of land — small island states (e.g. Maldives, Tuvalu) at risk of total inundation; forced migration/climate refugees.',
      },
      {
        q: 'Explain the two causes of sea level rise. [4 marks]',
        marks: 4,
        markScheme: '2 marks for thermal expansion: as oceans warm, water expands in volume; this accounts for roughly half of observed sea level rise. 2 marks for ice melt: melting glaciers, ice sheets (Greenland, West Antarctic) add water volume to oceans; ice sheets contain enough water to raise sea levels by metres; accelerating melt due to warming.',
      },
      {
        q: 'Describe the effects of climate change on coral reefs. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four: ocean warming causes coral bleaching — corals expel symbiotic algae (zooxanthellae) and turn white; bleached coral can recover but prolonged bleaching leads to death; Great Barrier Reef has experienced mass bleaching events (2016, 2017, 2020, 2022); ocean acidification (CO₂ dissolved in seawater) weakens coral skeletons; loss of coral destroys habitat for 25% of marine species; economic impact on tourism and fishing.',
      },
      {
        q: 'Suggest how climate change could affect food security. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: changing rainfall patterns alter growing seasons; drought in key agricultural regions (e.g. sub-Saharan Africa, South Asia); flooding destroys crops; rising temperatures reduce yield of staple crops; pests and diseases expand into new areas; sea level rise reduces agricultural land in deltas; shifting seasons disrupt traditional planting times; some areas may benefit (higher latitudes).',
      },
      {
        q: 'Explain the difference between mitigation and adaptation as responses to climate change. [4 marks]',
        marks: 4,
        markScheme: '1 mark for mitigation definition: actions that reduce greenhouse gas emissions or increase carbon sinks to slow/stop climate change. 1 mark for example: renewable energy, energy efficiency, reforestation. 1 mark for adaptation definition: adjusting to the effects of climate change that are already happening or inevitable. 1 mark for example: sea defences, drought-resistant crops, early warning systems.',
      },
      {
        q: 'Describe three renewable energy sources that can help mitigate climate change. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three with brief explanation: solar PV — converts sunlight to electricity, no emissions; wind energy — turbines generate electricity, no direct emissions; hydroelectric power — moving water generates electricity, low lifecycle emissions; tidal/wave — ocean energy; geothermal — heat from Earth\'s interior; bioenergy — burning biomass (though debated).',
      },
      {
        q: 'Explain how Carbon Capture and Storage (CCS) works as a mitigation strategy. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: CO₂ is captured at source (e.g. power station, industrial plant) before it enters the atmosphere; compressed into liquid form; transported via pipeline; injected into deep geological formations (e.g. depleted oil/gas reservoirs, saline aquifers) for permanent storage; prevents emissions reaching atmosphere. Limitations: expensive, energy-intensive, risk of leakage, not yet at scale.',
      },
      {
        q: 'Describe the key aims of the Paris Agreement (2015). [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three: limit global temperature rise to well below 2°C above pre-industrial levels; aim for 1.5°C target; each country submits Nationally Determined Contributions (NDCs) to cut emissions; NDCs reviewed and strengthened every 5 years; financial support for developing countries (Green Climate Fund); loss and damage mechanism.',
      },
      {
        q: 'Assess the effectiveness of international agreements in tackling climate change. [8 marks]',
        marks: 8,
        markScheme: 'Level 1 (1–2): simple statements. Level 2 (3–4): some explanation of agreements with limited evaluation. Level 3 (5–6): explains both achievements and shortcomings with named examples. Level 4 (7–8): evaluates multiple agreements (Kyoto, Paris), considers why they are effective/ineffective, reaches a justified conclusion. Kyoto: binding targets but US pulled out, no targets for China/India. Paris: universal participation, but NDCs insufficient to meet 1.5°C, voluntary nature, some countries not meeting targets. Conclusion should note progress made vs gap between pledges and action.',
      },
      {
        q: 'Explain how reforestation and afforestation can help mitigate climate change. [4 marks]',
        marks: 4,
        markScheme: '1 mark per point: trees absorb CO₂ through photosynthesis and store carbon in biomass; more trees = larger carbon sink; afforestation creates new forests on unforested land; reforestation restores deforested areas; REDD+ scheme pays developing countries to preserve forests; limitations: takes decades for full carbon sequestration; land may be needed for food; monoculture plantations have less carbon/biodiversity benefit than natural forests.',
      },
      {
        q: 'Describe how sea defences can help communities adapt to sea level rise. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: sea walls/flood barriers hold back high tides and storm surges; Thames Barrier (London) example; beach nourishment/replenishment restores natural buffer; managed retreat — allow some land to flood, protect most valuable land; mangrove restoration provides natural coastal protection; flood warning systems; elevating buildings; raised sea defences in Netherlands (Delta Project).',
      },
      {
        q: 'Explain how drought-resistant crops can help communities adapt to climate change. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for up to three: GM or traditionally-bred crops that can survive with less water; reduce crop failure in drought conditions; help maintain food security; examples: drought-tolerant maize in sub-Saharan Africa (CGIAR research); maintains farming livelihoods; allows farmers to adapt without relocating.',
      },
      {
        q: 'Describe the likely climate change impacts on the UK. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four: warmer summers — heatwaves more frequent (e.g. 2022 UK exceeded 40°C); wetter winters — increased flood risk; sea level rise threatening low-lying coasts; coastal erosion (e.g. East Anglia, Yorkshire); changing growing seasons — some crops more viable; new pest species (e.g. mosquitoes potentially spreading disease); increased demand for air conditioning; water stress in southeast England.',
      },
      {
        q: 'Explain how managed retreat works as a UK coastal adaptation strategy. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: some low-value coastal land is deliberately allowed to flood/erode; realignment of sea defences further inland; creates saltmarsh/mudflat habitats that absorb wave energy naturally; reduces maintenance costs; example: Medmerry in Sussex (largest managed realignment in UK); Freiston Shore, Lincolnshire; decisions based on Shoreline Management Plans.',
      },
      {
        q: 'Describe the evidence from phenological records that suggests climate change is occurring. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three: earlier arrival of migrating birds; plants flowering earlier in spring; longer growing seasons; species range shifts northward/to higher altitudes; bud burst earlier; insect emergence earlier; coral bleaching events increasing; polar bear breeding season changing; mismatch between species timing (e.g. insects emerging before bird chicks hatch).',
      },
      {
        q: 'Explain why some scientists argue that current climate change is different from natural climate change in the past. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: rate of change is much faster than previous natural cycles; CO₂ levels have risen from ~280 ppm pre-industrial to over 420 ppm — unprecedented in 800,000 years of ice core data; Milankovitch cycles operate over tens of thousands of years — cannot explain rapid 20th/21st century warming; statistical correlation between industrial emissions and temperature rise; solar output has not significantly increased.',
      },
      {
        q: 'Describe the role of the Intergovernmental Panel on Climate Change (IPCC) in addressing climate change. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three: body of scientists from around the world; reviews and synthesises climate science; produces Assessment Reports (AR6, 2021); provides scientific basis for international negotiations; identifies risks and timelines; does not do original research but assesses existing research; advises governments on urgency and targets.',
      },
      {
        q: 'Suggest why developing countries argue they should not have to reduce emissions as much as HICs. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: HICs industrialised first — responsible for most historical emissions; developing countries have a right to develop; current per capita emissions in LICs/NEEs much lower than HICs (e.g. US ~15 tonnes CO₂/person vs India ~2 tonnes); climate injustice — poorest countries suffering most despite contributing least; HICs have financial/technological capacity to transition; principle of common but differentiated responsibilities.',
      },
      {
        q: 'To what extent are human activities responsible for recent climate change? [8 marks]',
        marks: 8,
        markScheme: 'Level 1 (1–2): simple statements. Level 2 (3–4): some explanation of human causes with limited balance. Level 3 (5–6): explains human and natural causes with evidence. Level 4 (7–8): evaluates evidence for human vs natural causes, shows why scientific consensus points to human causation as dominant factor, reaches a justified conclusion. Human: CO₂ correlation, rate of change, greenhouse gas measurements. Natural: Milankovitch, solar, volcanic — but cannot account for speed of current change. Conclusion: IPCC consensus that human activity is primary driver; natural factors play minor role.',
      },
      {
        q: 'Describe how Arctic sea ice extent has changed and explain what this shows about climate change. [4 marks]',
        marks: 4,
        markScheme: '2 marks for change: summer Arctic sea ice extent has declined by ~40% since 1979; record low minimums regularly broken; multi-year ice (thicker) being replaced by thinner first-year ice. 2 marks for what it shows: reflects warming Arctic temperatures (Arctic is warming 2–3x faster than global average — Arctic amplification); positive feedback: less white ice → more dark ocean absorbs heat → more warming; threat to polar bears and indigenous communities.',
      },
      {
        q: 'Explain how the volcanic eruption of Mount Pinatubo (1991) provides evidence that natural factors can affect climate. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: Mount Pinatubo, Philippines erupted June 1991; largest eruption of 20th century; ejected 20 million tonnes of SO₂ into stratosphere; sulphur dioxide formed aerosols that reflected solar radiation; global average temperature fell by ~0.5°C for 1–2 years; demonstrated that aerosols from volcanoes can cause short-term cooling; used to model geoengineering proposals (stratospheric aerosol injection).',
      },
      {
        q: 'Describe two adaptation strategies used by communities in low-lying coastal countries to cope with sea level rise. [4 marks]',
        marks: 4,
        markScheme: '1 mark for each strategy + 1 mark development. Any two from: floating houses (Bangladesh, Netherlands); raised homesteads/embankments (Bangladesh); cyclone-resistant building (Bangladesh); mangrove planting (natural protection, carbon sequestration); early warning systems; community relocation; Netherlands Delta Works — massive sea defence system; Maldives — building new raised island (Hulhumale); accepting displacement.',
      },
      {
        q: 'Evaluate the view that individuals can make a significant difference in tackling climate change. [8 marks]',
        marks: 8,
        markScheme: 'Level 1 (1–2): simple statements. Level 2 (3–4): lists some individual actions with limited development. Level 3 (5–6): explains both sides — individual impact vs structural change needed. Level 4 (7–8): evaluates scale of individual action vs government/corporate action; uses data/evidence; reaches a clear conclusion. For individuals: reducing diet meat consumption, less flying, energy efficiency at home, green consumerism. Limitations: systemic change needed; fossil fuel companies/governments make bigger decisions; inequality — most emissions from wealthy minority; cognitive dissonance. Conclusion should balance individual responsibility with collective/political action.',
      },
      {
        q: 'Describe the global pattern of temperature change since 1850. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three: global average temperature has risen ~1.1–1.2°C since pre-industrial; most warming since 1980; accelerating rate of warming; Arctic warming fastest (2–4x global average); some areas warming more than others; 2023 was hottest year on record; each decade since 1980s warmer than the last; brief cooling events from volcanic eruptions.',
      },
      {
        q: 'Draw and label a diagram to show the enhanced greenhouse effect. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: sun/short-wave solar radiation arriving at Earth; some radiation reflected back to space; Earth re-emits long-wave/infrared radiation; greenhouse gases (CO₂, CH₄) in atmosphere trapping long-wave radiation; enhanced layer of greenhouse gases shown trapping more heat; warming of Earth\'s surface labelled.',
        diagram: true,
      },
      {
        q: 'State two greenhouse gases and their main sources. [2 marks]',
        marks: 2,
        markScheme: '1 mark per gas with source. Any two: CO₂ — burning fossil fuels (coal, oil, gas), deforestation; methane (CH₄) — livestock (cattle), rice paddies, landfill, natural gas leaks; nitrous oxide (N₂O) — agricultural fertilisers; water vapour — natural, amplified by warming; CFCs/HFCs — aerosols, refrigerants.',
      },
      {
        q: 'Explain how melting permafrost could cause a positive feedback loop in climate change. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: permafrost (in Arctic tundra) contains large stores of frozen organic matter and methane; as temperatures rise, permafrost thaws; decomposition of organic matter and release of trapped methane adds greenhouse gases to atmosphere; this further warms atmosphere, causing more permafrost thaw — positive (self-reinforcing) feedback loop.',
      },
      {
        q: 'Describe two mitigation strategies for climate change. [4 marks]',
        marks: 4,
        markScheme: '1 mark per strategy + 1 mark development. Any two: renewable energy — switching to solar/wind/hydro reduces CO₂ emissions (e.g. UK wind power provides ~30%+ of electricity); carbon capture and storage (CCS) — captures CO₂ from power stations, stores underground; afforestation/reforestation — trees absorb CO₂; international agreements (e.g. Paris Agreement 2015) set emission reduction targets; carbon taxes/cap-and-trade discourage emissions; energy efficiency measures in buildings/transport.',
      },
      {
        q: 'Explain how climate change will impact the UK. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four: warmer average temperatures (UK projected +1 to +4°C by 2100); wetter winters, drier summers; more frequent heatwaves (e.g. 40°C reached in 2022); sea level rise threatens coastal cities (e.g. London, Hull); increased flood risk; agricultural changes — new crops possible (grapevines) but drought stress on traditional crops; biodiversity changes — species shifts; stronger storms.',
      },
      {
        q: 'Suggest why international agreements on climate change can be difficult to achieve. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four: different countries have different emissions histories and current levels (HIC vs LIC fairness debate); LICs argue HICs should pay more as they caused most historical emissions; economic cost of transition seen as uncompetitive; fossil fuel lobbies oppose action; lack of enforcement mechanisms in international law; political changes (e.g. US withdrawal from Paris under Trump 2017); differing national priorities; developing nations prioritise growth over emissions cuts.',
      },
      {
        q: 'Assess the view that adaptation is a more realistic approach to climate change than mitigation. [8 marks]',
        marks: 8,
        markScheme: 'Level 1 (1–2): simple statements. Level 2 (3–4): describes adaptation and mitigation with limited evaluation. Level 3 (5–6): evaluates both approaches with examples. Level 4 (7–8): balanced assessment with justified conclusion. Adaptation: necessary because some warming is already locked in; pragmatic — examples include flood defences (Thames Barrier), drought-resistant crops (Ethiopia), sea walls (Maldives), early warning systems. Mitigation: addresses root cause; required to avoid catastrophic warming (>2°C); but politically difficult and slow. Conclusion: both needed — adaptation deals with inevitable impacts, mitigation prevents worst outcomes; view partially valid as adaptation may be more politically achievable short-term but mitigation essential long-term.',
      },
      {
        q: 'Explain how variations in solar output (sunspot cycles) can affect the Earth\'s climate. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: the sun undergoes 11-year cycles of increased/decreased sunspot activity; more sunspots = slightly more solar radiation reaching Earth (warmer); fewer sunspots = less radiation (cooler); Maunder Minimum (1645–1715) coincided with Little Ice Age in Europe; variation small compared to greenhouse gas effect but natural contributor to climate variability.',
      },
    ],
  },
  '3.3': {
    name: 'Water Management',
    questions: [
      {
        q: 'State the percentage of the world\'s water that is accessible fresh water. [1 mark]',
        marks: 1,
        markScheme: '1 mark for: less than 1% (accept 0.3% or "under 1%").',
      },
      {
        q: 'Describe the global distribution of fresh water. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three: 97% of all water is saline (in oceans); approximately 2% is frozen in ice caps, glaciers and permafrost; less than 1% is accessible fresh water; of accessible fresh water, most is groundwater; surface water (rivers, lakes) is a small fraction; uneven distribution — some regions have water surplus, others water deficit.',
      },
      {
        q: 'Draw and label a diagram to show the main processes of the water cycle. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four processes correctly shown and labelled: evaporation (from ocean/lake/land); transpiration (from vegetation) / evapotranspiration; condensation (forming clouds); precipitation (rain/snow); surface runoff; infiltration (into soil); percolation (to groundwater); groundwater flow; interception. Diagram must show water moving through the system.',
        diagram: true,
      },
      {
        q: 'Explain how geology affects water availability. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for up to three: permeable rocks allow water to infiltrate and be stored in aquifers (underground water stores); impermeable rocks cause more surface runoff, less groundwater storage; limestone/chalk aquifers in SE England supply much of the water; areas with impermeable rock (e.g. upland Wales/Scotland) have more rivers/surface water; aquifer depletion is a major issue in some regions.',
      },
      {
        q: 'Describe the global pattern of water surplus and water deficit. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four: water surplus regions — equatorial (Amazon, Congo), northern Europe, SE Asia, monsoonal regions; water deficit regions — North Africa, Middle East, central Asia, SW USA, Australia interior; deficit often results from high evaporation exceeding precipitation; tropical areas have high precipitation but may have uneven seasonal distribution; population distribution does not match water availability.',
      },
      {
        q: 'Explain four reasons why global demand for water has increased in recent decades. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for four valid reasons: population growth — more people need water; urbanisation — urban residents use more water than rural; economic development — industry uses large quantities; changing diet — more meat consumption (livestock requires large amounts of water — virtual water); irrigation for agriculture — feeds growing population; climate change altering precipitation patterns; rising living standards — more domestic appliances, gardens.',
      },
      {
        q: 'What is meant by water stress? [2 marks]',
        marks: 2,
        markScheme: '1 mark for: a situation where demand for water exceeds available supply / where available water drops below 1,700 m³ per person per year. 1 mark for: or a situation where water quality is poor/unreliable. Accept: water withdrawal exceeds 40% of renewable freshwater resources.',
      },
      {
        q: 'Distinguish between physical water scarcity and economic water scarcity. [4 marks]',
        marks: 4,
        markScheme: '2 marks for physical: there is not enough water in the environment to meet demand; arid/semi-arid regions; e.g. North Africa, Arabian Peninsula; precipitation is low; examples: Saudi Arabia, Libya. 2 marks for economic: water exists in the environment but people cannot access it due to lack of infrastructure, poverty, or investment; e.g. sub-Saharan Africa; countries have rainfall but lack pipes, treatment plants, storage.',
      },
      {
        q: 'Describe how waterborne diseases are linked to water insecurity. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three: where clean water is unavailable, people drink from contaminated sources; waterborne diseases include cholera, typhoid, dysentery, hepatitis A, diarrhoea; cause millions of deaths annually — mainly children; in LICs, poor sanitation contaminates water supply; diarrhoea kills approximately 525,000 children under 5 per year; reduces economic productivity.',
      },
      {
        q: 'Explain how conflict can arise over shared water resources. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: rivers crossing multiple national boundaries create tension when upstream users take more water; Nile Basin: Ethiopia building Grand Ethiopian Renaissance Dam — Egypt fears reduced flow; Nile Agreement of 1929 gives Egypt most rights — contested by upstream countries; Colorado River: US states in conflict over water allocation; Aral Sea: Soviet-era irrigation drained the sea; water scarcity can lead to military conflict ("water wars").',
      },
      {
        q: 'Describe the benefits of the Three Gorges Dam in China. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four: hydroelectric power — world\'s largest HEP station (22,500 MW); flood control — protects millions from Yangtze River flooding; improved navigation — allows larger ships; water supply for cities and agriculture; economic development of central China; reduced reliance on coal-fired power; tourism revenue.',
      },
      {
        q: 'Evaluate the costs and benefits of the Three Gorges Dam. [8 marks]',
        marks: 8,
        markScheme: 'Level 1 (1–2): simple points. Level 2 (3–4): describes some costs and benefits with limited balance. Level 3 (5–6): explains both sides with evidence. Level 4 (7–8): evaluates with data, weighs costs against benefits, reaches a justified conclusion. Benefits: HEP (22,500 MW), flood control, navigation, water supply. Costs: 1.3 million displaced from homes; loss of cultural heritage sites; ecosystem damage (Yangtze sturgeon near extinction, loss of wetlands); sedimentation reduces reservoir capacity; reservoir-induced seismicity; changes to river downstream. Conclusion must make a judgement.',
      },
      {
        q: 'Describe how the China South-North Water Transfer Project works. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four: moves water from water-surplus south (Yangtze River basin) to water-deficit north (Yellow River/Beijing region); three routes: Eastern, Central, Western; Eastern route completed 2013; Central route 2014; transfers billions of cubic metres annually; Western route still under planning; 50,000 km of canals/tunnels/pipes; one of world\'s largest water engineering projects.',
      },
      {
        q: 'Explain how desalination can increase water supply and suggest two limitations of this method. [4 marks]',
        marks: 4,
        markScheme: '1 mark for how: removes salt from seawater (or brackish water) using reverse osmosis or distillation; produces fresh water. 1 mark for example: Saudi Arabia, UAE, Israel. 1 mark for each limitation: extremely energy-intensive — high carbon footprint and cost; concentrated brine by-product damages marine ecosystems when discharged; only viable near coast; too expensive for most LICs.',
      },
      {
        q: 'Draw and label a diagram to show how a check dam works to conserve water in a rural area. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: stream/drainage channel shown; small dam/barrier across channel; water pool/reservoir behind dam labelled; benefits labelled (e.g. recharges groundwater, reduces erosion, available for irrigation). Diagram must show the key feature — small-scale water storage.',
        diagram: true,
      },
      {
        q: 'Describe how drip/trickle irrigation can reduce water use in agriculture. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for any three: delivers water directly to plant roots via pipes/emitters; minimises evaporation; reduces waterlogging; uses up to 70% less water than surface irrigation; increases crop yield; suitable for arid areas; used in Israel, India, sub-Saharan Africa; can be combined with fertigation (adding fertiliser).',
      },
      {
        q: 'Explain how WaterAid or a similar NGO contributes to solving water insecurity in LICs. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: WaterAid provides safe water, sanitation and hygiene (WASH) programmes; works with local communities to install boreholes/hand pumps; trains local technicians to maintain systems; advocates for government investment; fog nets in coastal/highland areas collect moisture; rainwater harvesting systems built; empowers communities — sustainable long-term. Reference to any named NGO project accepted.',
      },
      {
        q: 'Explain how rainwater harvesting can help communities in water-scarce areas. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: collects rainwater from rooftops into tanks or pits; can be used for drinking (with treatment), irrigation, domestic use; reduces dependency on unreliable mains or river water; cheap and low-tech — accessible to poor communities; India (rajasthan) traditional step wells and tanka cisterns; Bangladesh floods and drought — rooftop systems; gives communities control over water supply.',
      },
      {
        q: 'Describe the north-south imbalance in water supply and demand in the UK. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four: north and west receive more rainfall (upland areas, prevailing westerly winds, orographic effect); south and east are drier; but most of the population lives in the south (especially SE England); demand is highest in the south due to population and agriculture; reservoirs mainly in north and Wales; water transferred via aqueducts but complex and expensive; Thames Water catchment area under pressure.',
      },
      {
        q: 'Suggest reasons why leakage from water pipes is a significant problem in the UK. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: old Victorian pipe infrastructure in many cities; Thames Water loses approximately 25% of water to leakage; estimated 3 billion litres/day lost across UK; pipes not replaced fast enough; expensive to locate and repair leaks; underground pipes difficult to access in built-up areas; regulatory pressure on water companies to reduce leakage; offsetting investment in new reservoirs.',
      },
      {
        q: 'Evaluate water metering as a strategy to reduce water demand in the UK. [6 marks]',
        marks: 6,
        markScheme: 'Level 1 (1–2): simple statements. Level 2 (3–4): describes advantages and disadvantages with some development. Level 3 (5–6): balanced evaluation with evidence, reaches a conclusion. Advantages: reduces consumption — evidence shows metered households use ~10–15% less water; fairer — pay for what you use; signals water as scarce resource; reduces demand pressure. Disadvantages: disproportionate impact on large families with low income; elderly on fixed incomes; some areas lack metering infrastructure; does not address leakage; behaviour change limited. Conclusion.',
      },
      {
        q: 'Explain why agriculture is the largest consumer of fresh water globally. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: agriculture uses approximately 70% of global freshwater withdrawals; irrigation is the dominant use; large areas of food production are in semi-arid or arid regions requiring supplementary irrigation; inefficient surface irrigation methods cause high evaporation losses; growing demand for food as population rises; water-intensive crops (rice, cotton, sugarcane) dominant; virtual water concept — food exports carry embedded water.',
      },
      {
        q: 'Describe the impacts of drought on people and the environment. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four: crop failure leading to food insecurity; livestock deaths; reduction in river/reservoir levels; water rationing; increased food prices; health impacts — malnutrition, dehydration; migration from affected areas; wildfires; soil erosion and desertification; economic losses to farmers; aquifer depletion when groundwater heavily relied on.',
      },
      {
        q: 'Describe two small-scale, sustainable approaches to improving water supply in LICs. [4 marks]',
        marks: 4,
        markScheme: '1 mark for each approach + 1 mark development. Any two from: rainwater harvesting — collects and stores rainwater, low-cost, community controlled; fog nets — fine mesh collects fog/cloud moisture in coastal highlands (e.g. Chile, Morocco); check dams — small barriers slow runoff, recharge groundwater; hand pumps/boreholes — WaterAid projects, locally maintained; rope pumps — simple low-tech pumps used in Central America; biosand filters — clean drinking water at household level.',
      },
      {
        q: 'Explain how groundwater (aquifer) abstraction can cause problems if not managed sustainably. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: overpumping lowers the water table; aquifer depletion — takes thousands of years to recharge; subsidence — ground sinks as water removed (e.g. Mexico City, Jakarta); saltwater intrusion into coastal aquifers when freshwater depleted; wells run dry — rural communities lose water source; unsustainable for irrigation (e.g. Ogallala Aquifer, USA).',
      },
      {
        q: 'Draw and label a diagram to show how a dam and reservoir system provides water supply to a city. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: river shown flowing into reservoir; dam labelled; pipeline from reservoir to water treatment works; treatment works labelled; distribution network to city/consumers. All four stages must be labelled.',
        diagram: true,
      },
      {
        q: 'Assess whether large-scale water transfer schemes are an effective solution to water insecurity. [8 marks]',
        marks: 8,
        markScheme: 'Level 1 (1–2): simple statements. Level 2 (3–4): describes some aspects with limited evaluation. Level 3 (5–6): explains effectiveness and problems with evidence. Level 4 (7–8): balanced evaluation with named examples, weighs effectiveness against alternatives, reaches a justified conclusion. Effective: China SNWT moves vast volumes, relieves northern deficit; established technology. Problems: extremely expensive; disrupts river ecosystems; political tensions (cross-boundary); may encourage wasteful use; does not address demand management; disproportionate impacts on communities near diversion. Alternatives: demand management, desalination, efficiency. Conclusion must weigh evidence.',
      },
      {
        q: 'Explain how climate change is likely to worsen water insecurity in many parts of the world. [6 marks]',
        marks: 6,
        markScheme: 'Level 1 (1–2): simple statement. Level 2 (3–4): explains how climate change affects water with some development. Level 3 (5–6): detailed explanation with multiple mechanisms and examples. Mechanisms: changing precipitation patterns — wet areas wetter, dry areas drier; glacier melt — short-term increase in meltwater then long-term loss (Himalayas supply 2 billion people); more extreme droughts; increased evaporation rates; sea level rise contaminating coastal aquifers; shifting monsoon timing; more intense rainfall events cause runoff not infiltration. Examples from specific regions.',
      },
      {
        q: 'Describe the role of virtual water in the global trade of food and water security. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four: virtual water is the water embedded in/used to produce traded goods; 1 kg of beef requires ~15,000 litres; 1 kg of wheat ~1,300 litres; countries import water-intensive goods effectively importing water; water-scarce countries can conserve water by importing food; Jordan imports 80%+ of food — imports virtual water; allows water redistribution through trade; concern: water-exporting LICs may deplete their own resources.',
      },
      {
        q: 'Suggest why water insecurity disproportionately affects women and girls in LICs. [4 marks]',
        marks: 4,
        markScheme: '1 mark per developed point: women and girls are traditionally responsible for water collection in many LIC communities; walk hours per day to fetch water — miss school/work; physical labour causes health problems; time poverty reduces economic and educational opportunities; sexual violence risk at water sources; women have less political power to demand water investment. UN data: women spend 200 million hours per day collecting water.',
      },
      {
        q: 'To what extent can sustainable management solve the global water crisis? [8 marks]',
        marks: 8,
        markScheme: 'Level 1 (1–2): simple statements. Level 2 (3–4): describes some strategies with limited evaluation. Level 3 (5–6): evaluates sustainable approaches and their limitations. Level 4 (7–8): compares sustainable with large-scale approaches, considers equity and feasibility, reaches a justified conclusion. Sustainable approaches: drip irrigation, rainwater harvesting, WaterAid, check dams, water metering, recycling greywater. Effective in local contexts but: scale — cannot supply billions alone; relies on funding and political will; inequity — HICs implement faster; climate change undermines gains. Large-scale: dams and transfers provide volume but have costs. Conclusion: sustainable management necessary but insufficient alone — needs combination of approaches and global cooperation.',
      },
      {
        q: 'Describe the impacts of water insecurity on food production in a named region. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four (referencing a named region): Sub-Saharan Africa/Middle East/SW USA/Aral Sea region — reduced river flow reduces irrigation; crop yields decline; farmers cannot afford alternative water sources; land abandonment; food prices rise; malnutrition increases; people migrate from rural to urban areas; loss of traditional farming practices; Aral Sea — fishing industry collapsed, 60,000 fishing jobs lost, dust storms from dried seabed harm crops. Accept any relevant named region with accurate detail.',
      },
      {
        q: 'Explain why water is considered a geopolitical resource and give an example of water-related tension between countries. [4 marks]',
        marks: 4,
        markScheme: '1 mark for geopolitical: water crosses national boundaries, is scarce, is essential for life and economic activity — makes it a resource over which countries compete and negotiate politically. 1 mark for any example + 1 mark explanation + 1 mark development: Nile Basin — Ethiopia vs Egypt over Grand Ethiopian Renaissance Dam; Colorado River — US states + Mexico dispute; Indus Waters Treaty between India and Pakistan (1960 — landmark agreement); Mekong River — China dams affecting downstream SE Asia.',
      },
      {
        q: 'Draw and label a diagram to show the global hydrological (water) cycle. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for at least four labelled processes: evaporation from oceans/lakes; transpiration from plants; condensation forming clouds; precipitation as rain/snow; surface runoff/overland flow; infiltration into soil; groundwater/percolation; arrows showing the cyclical movement of water. Diagram must clearly show transfer between stores.',
        diagram: true,
      },
      {
        q: 'Define the term \'water stress\'. [1 mark]',
        marks: 1,
        markScheme: '1 mark for: when annual water supply is less than 1,700 m³ per person, or when demand for water exceeds the available amount during a certain period.',
      },
      {
        q: 'Explain two physical causes of water insecurity. [4 marks]',
        marks: 4,
        markScheme: '1 mark per cause + 1 mark development. Any two: climate — low rainfall in arid regions (e.g. Middle East, North Africa); climate change reducing glacier meltwater affecting river supplies (e.g. Himalayas feed 2 billion people); geology — lack of permeable rock means limited groundwater storage; salt water incursion where coastal aquifers over-pumped; drought cycles; evaporation rates exceeding precipitation.',
      },
      {
        q: 'Describe the environmental impacts of dam construction. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for any four: reservoir flooding destroys habitats (e.g. Three Gorges flooded 1,300 archaeological sites and thousands of hectares); disruption to fish migration (e.g. salmon); sediment trapped behind dam, downstream erosion of deltas (e.g. Aswan Dam on Nile delta); changes to river flow regime; methane released from rotting vegetation in reservoirs; water quality changes (stratification, eutrophication); potentially triggers earthquakes.',
      },
      {
        q: 'Suggest how rainwater harvesting can improve water security at a local scale. [3 marks]',
        marks: 3,
        markScheme: '1 mark each for: collects rainwater from roofs/surfaces into storage tanks; provides water for domestic use (washing, cooking, irrigation) during dry periods; reduces pressure on groundwater and piped supplies; appropriate low-cost technology for LICs; e.g. WaterAid projects in Africa/South Asia; reduces flood risk by capturing runoff.',
      },
      {
        q: 'Compare hard and soft engineering approaches to water management. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: hard engineering involves large-scale built structures (dams, reservoirs, pipelines, desalination plants, water transfer schemes); expensive, high-impact; provides large volumes of water; soft engineering uses sustainable/small-scale approaches (rainwater harvesting, drip irrigation, xeriscaping, greywater recycling, water metering); low cost, community-led; emphasises demand management rather than supply increase; hard engineering often better for national scale, soft better for local/household scale.',
      },
      {
        q: 'Assess the sustainability of water transfer schemes as a solution to water insecurity. [6 marks]',
        marks: 6,
        markScheme: 'Level 3 (5–6 marks): Evaluates benefits and drawbacks with specific examples, reaches supported conclusion on sustainability. Level 2 (3–4 marks): Describes with some evaluation. Level 1 (1–2 marks): Basic points. Accept: benefits — redistributes water from surplus to deficit areas (e.g. China South-North Water Transfer Project; California State Water Project); supports agriculture/industry in arid regions; Spanish Tagus-Segura transfer. Drawbacks: high energy cost (pumping against gravity — high carbon footprint); damages donor region ecosystems; expensive to build/maintain; political disputes between regions; climate change may reduce donor region supply; encourages continued over-use in deficit region. Conclusion: effective short-term but not truly sustainable — must combine with demand management.',
      },
      {
        q: 'Explain how climate change is affecting global water security. [4 marks]',
        marks: 4,
        markScheme: '1 mark each for: rising temperatures increase evaporation — reducing surface water and soil moisture; changing rainfall patterns — some areas wetter, others drier (e.g. Mediterranean drying); glacier retreat reduces meltwater for rivers (Himalayas, Andes) — threatens water for ~2 billion people; rising sea levels cause saltwater intrusion into coastal aquifers; more extreme droughts and floods; increasing competition for water between countries/sectors.',
      },
    ],
  },
};

if (typeof window !== 'undefined') window.GEOGRAPHY_EDUQAS_PRACTICE = GEOGRAPHY_EDUQAS_PRACTICE;
