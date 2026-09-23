/*
 * Eduqas GCSE Geography B (C112QS) — Written / Short-Answer Question Bank
 * WJEC Eduqas GCSE (9-1) Geography B: 11 key ideas across Themes 1–3
 * 10 questions per topic: 4 green + 4 amber + 2 red
 * tier: 'green' (state/identify 2-3 marks), 'amber' (explain/describe 4-5 marks), 'red' (evaluate/discuss 6-8 marks)
 * Student self-marks against model answer: Full / Partial / Missed
 * diagram: true on any question requiring students to draw/sketch/annotate diagrams, maps, graphs, cross-sections.
 */

const GEOGRAPHY_EDUQAS_WRITTEN = {

  /* ─────────────────────────────────────────────────────────── 1.1 Urbanisation in Contrasting Global Cities */
  '1.1': {
    green: [
      {
        q: 'State what is meant by urbanisation.',
        marks: 2, tier: 'green',
        modelAnswer: `Urbanisation is the process by which an increasing proportion of a country's population lives in urban areas (towns and cities) rather than rural areas (1). It is caused by rural-to-urban migration and natural population increase within cities, and it is associated with economic development as countries industrialise (1).`,
        marks_scheme: '1 mark: urbanisation is increasing proportion of population living in urban areas. 1 mark: caused by rural-to-urban migration and natural increase, associated with industrialisation.'
      },
      {
        q: 'State two differences in the rate of urbanisation between HICs and LICs.',
        marks: 2, tier: 'green',
        modelAnswer: `• HICs (e.g. UK, USA) have slow or stagnant rates of urbanisation as they are already highly urbanised (typically 75–85% urban); LICs and MICs (e.g. Nigeria, India) have rapid urbanisation rates as they are still industrialising (1).\n• In some HICs, counter-urbanisation (movement from cities to rural areas) partially offsets urbanisation; in LICs, strong rural-to-urban migration continues to drive rapid urban growth (1).`,
        marks_scheme: '1 mark: HICs have slow/stagnant urbanisation as already highly urbanised; LICs have rapid rates as still industrialising. 1 mark: counter-urbanisation occurs in some HICs; strong rural-to-urban migration continues in LICs.'
      },
      {
        q: 'Identify two push factors that cause people to migrate from rural to urban areas in developing countries.',
        marks: 2, tier: 'green',
        modelAnswer: `• Poverty and lack of economic opportunity — few jobs available in rural areas; subsistence farming provides an uncertain and low income (1).\n• Natural disasters and environmental change — drought, flooding, and desertification can destroy farming livelihoods, forcing people to seek opportunities in cities (1).\n(Also accept: conflict, lack of services, mechanisation of agriculture reducing farm employment.)`,
        marks_scheme: '1 mark: poverty and lack of economic opportunity — few jobs in rural areas. 1 mark: natural disasters and environmental change destroying farming livelihoods.'
      },
      {
        q: 'State what is meant by a megacity.',
        marks: 1, tier: 'green',
        modelAnswer: `A megacity is an urban area with a population of more than 10 million people (1). Examples include Tokyo (37 million), Delhi (32 million), Mexico City (22 million), and São Paulo (22 million).`,
        marks_scheme: '1 mark: a megacity is an urban area with a population of more than 10 million people.'
      },
    ],
    amber: [
      {
        q: 'Explain the differences in urban land use patterns between HICs and LICs.',
        marks: 4, tier: 'amber',
        modelAnswer: `• In HICs, land use typically follows the Burgess concentric zone model — a CBD in the centre, surrounded by inner-city terraced housing (often gentrified), then inter-war suburbs, with newer affluent housing on the urban fringe; the poorest tend to live in inner-city areas (1).\n• In LICs and MICs, the pattern is often reversed — the wealthy live near the city centre or in gated communities on the outskirts, while the poorest live in informal squatter settlements (favelas, barrios) on the urban fringe or in environmentally hazardous areas (1).\n• LIC cities often lack formal planning — informal settlements (shanty towns) grow spontaneously wherever land is unoccupied, often on steep slopes, riverbanks, or near industrial sites (1).\n• HICs have well-defined suburban areas with planned infrastructure; LIC cities have rapidly growing peri-urban zones with limited access to clean water, sanitation, electricity, and roads (1).`,
        marks_scheme: '1 mark: HICs follow concentric zone model — CBD, inner-city housing, inter-war suburbs, affluent fringe; poorest in inner city. 1 mark: LICs often reversed — wealthy near centre or in gated communities; poorest in informal settlements on urban fringe. 1 mark: LIC cities often lack formal planning — informal settlements grow wherever land is unoccupied. 1 mark: HICs have planned suburban infrastructure; LIC peri-urban zones lack clean water, sanitation, and roads.'
      },
      {
        q: 'Explain why squatter settlements develop in cities in LICs and MICs.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Rapid rural-to-urban migration brings more people to cities than formal housing can accommodate — migrants cannot afford formal housing and so occupy unused land illegally, building makeshift shelters from salvaged materials (1).\n• Governments in LICs lack the resources to build enough affordable housing to keep pace with population growth — urban populations grow by around 3–4% per year in cities like Lagos and Dhaka (1).\n• Migrants are often attracted by the perceived economic opportunities of the city; on arrival they settle close to industrial or commercial areas where work might be found (1).\n• Land ownership laws are weak or unenforced, making informal occupation possible; over time, settlements may be given legal recognition (e.g. favelas in Rio de Janeiro) (1).`,
        marks_scheme: '1 mark: rapid rural-to-urban migration brings more people than formal housing can accommodate; migrants occupy land illegally. 1 mark: LIC governments lack resources to build enough affordable housing to keep pace. 1 mark: migrants attracted by economic opportunities settle near industrial areas where work may be found. 1 mark: weak land ownership laws make informal occupation possible; over time settlements may gain legal recognition.'
      },
      {
        q: 'Describe and explain one way in which squatter settlements can be improved.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Site and service schemes — the government provides a basic plot of land with access to essential infrastructure (running water, sanitation, electricity connections, roads); residents build their own homes using their own labour (self-help) (1).\n• This is more affordable for governments than building new housing from scratch, and residents take pride in their homes, maintaining and improving them over time (1).\n• Example: in Mumbai, wholesale clearance of slums such as Dharavi has often been criticised for displacing communities and livelihoods, which is why in-situ upgrading and site-and-service approaches are often preferred (1).\n• NGO-supported self-help schemes in Kibera, Nairobi have successfully upgraded housing, provided clean water points and improved sanitation — disease rates have fallen and community cohesion improved (1).`,
        marks_scheme: '1 mark: site and service schemes — government provides plot with basic infrastructure; residents build own homes (self-help). 1 mark: more affordable for governments than building from scratch; residents maintain and improve homes over time. 1 mark: named example with specific outcome (e.g. Dharavi, Mumbai or Kibera, Nairobi). 1 mark: improvements include better housing, clean water, improved sanitation, and reduced disease rates.'
      },
      {
        q: 'Explain how economic development leads to changes in land use in a city.',
        marks: 4, tier: 'amber',
        modelAnswer: `• As cities grow economically, the CBD expands outward — shops, offices, and financial institutions replace older residential housing; land values in the centre rise significantly (1).\n• Deindustrialisation in HICs leads to derelict industrial land becoming available for regeneration — former factory sites are redeveloped as retail, leisure, or housing (e.g. London Docklands) (1).\n• Suburbanisation occurs as higher incomes allow people to move to the urban fringe, creating low-density residential areas; this is facilitated by improved transport links and car ownership (1).\n• In LIC/MIC cities, rapid economic growth attracts foreign investment — new business districts (e.g. Gurgaon, India; Shanghai's Pudong district) are created, often displacing residential and agricultural land on the city edge (1).`,
        marks_scheme: '1 mark: as cities grow economically the CBD expands, replacing residential housing; land values rise. 1 mark: deindustrialisation frees derelict industrial land for regeneration as retail, leisure, or housing. 1 mark: suburbanisation occurs as higher incomes allow movement to urban fringe with improved transport. 1 mark: in LIC/MIC cities rapid growth attracts foreign investment creating new business districts, displacing residential and agricultural land.'
      },
    ],
    red: [
      {
        q: 'Evaluate the success of strategies used to manage urbanisation in either a LIC/MIC or HIC city. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `(Rio de Janeiro, Brazil — MIC example — credit any appropriate named city with specific evidence.)\n• Favela Bairro project (Rio) — upgrading of favelas rather than clearance; paved streets, water and sewage connections, schools, and health centres built in dozens of favelas, benefiting hundreds of thousands of residents (1). Successes: improved living conditions, tenure security, reduced disease; limitations: only reached a fraction of the 1.4 million favela residents; crime and gang control remained a problem in many upgraded areas (1).\n• UPP (Pacifying Police Units) — police occupied and "pacified" key favelas; initially reduced crime and attracted investment but by 2016 violence had returned to many areas as funding fell (1).\n• Porto Maravilha (Port Revitalisation) — redeveloping the port area; attracted investment and improved infrastructure but criticised for displacing poorer residents through gentrification (1).\n• Overall: strategies have had mixed success — physical improvements have been made but social inequality, crime, and lack of economic opportunity remain severe; the scale of the challenge (over 1 million people in informal settlements) means that individual projects have limited overall impact without broader economic reform (1).\nConclusion: urban management strategies work best when they involve communities in planning, provide long-term funding, and address both physical infrastructure and economic opportunity simultaneously (1).`,
        marks_scheme: 'Level 3 (5-6 marks): balanced evaluation of named city strategies with specific evidence of successes and limitations, plus an overall conclusion. Level 2 (3-4 marks): some specific detail about strategies but limited evaluation or conclusion. Level 1 (1-2 marks): basic description of one strategy. Credit: Favela Bairro improved 70 favelas benefiting 250,000 residents; UPP initially reduced crime but violence returned; Porto Maravilha attracted investment but displaced residents; scale of challenge limits impact of individual projects.'
      },
      {
        q: '"Rapid urbanisation creates more problems than opportunities." To what extent do you agree? Refer to named examples. [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `Problems of rapid urbanisation:\n• Housing shortages — rapid growth outpaces construction; informal settlements with poor sanitation and overcrowding develop (e.g. Dharavi, Mumbai — 1 million people in 2 km², 1 toilet per 1,440 people) (1).\n• Traffic congestion and poor air quality — Lagos, Nigeria is one of the world's most congested cities; air pollution from vehicles and industry causes serious respiratory health problems (1).\n• Strain on services — schools, hospitals, and clean water supply unable to keep pace with population growth; waterborne disease is widespread in areas without clean water (e.g. cholera in informal settlements in Nairobi) (1).\n• Environmental degradation — deforestation on urban fringes, river pollution from untreated sewage and industrial waste, increased flood risk from impermeable surfaces (1).\nOpportunities of urbanisation:\n• Economic growth — cities drive national economic development; urban workers are on average much more productive than rural workers; cities in MICs like China have lifted hundreds of millions out of poverty (1).\n• Better access to services — cities generally offer better hospitals, schools, and employment than rural areas — rural-to-urban migrants typically experience improved incomes and life expectancy (1).\n• Innovation and creativity — cities concentrate educated populations and foster innovation; economic agglomeration effects attract investment (e.g. Silicon Valley, Shenzhen's tech industry) (1).\nConclusion:\n• Whether rapid urbanisation creates more problems or opportunities depends on the pace of change and the capacity of governments to manage it. Where urbanisation is managed with investment in infrastructure and services, it generates enormous benefits; where it outpaces government capacity (most LIC/MIC cities), severe problems dominate. A managed, slower rate of urbanisation with investment in affordable housing and services offers the best outcomes (1).`,
        marks_scheme: 'Level 3 (7-8 marks): balanced discussion of problems and opportunities with named examples and a conclusion about the role of managed urbanisation. Level 2 (4-6 marks): covers both sides with some specific examples. Level 1 (1-3 marks): basic points on one side. Credit: housing shortages and informal settlements (Dharavi); traffic congestion and air pollution (Lagos); economic growth — urban workers 3× more productive than rural; better access to healthcare, schools, and employment.'
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 1.2 Urban and Rural Processes and Change in the UK */
  '1.2': {
    green: [
      {
        q: 'State two characteristics of the Central Business District (CBD) of a UK city.',
        marks: 2, tier: 'green',
        modelAnswer: `• High land values — the CBD is the most accessible point of the city; competition for land drives prices up, resulting in high-rise buildings to maximise floor space per unit of land (1).\n• High concentration of retail and commercial functions — major department stores, banks, offices, and entertainment venues cluster in the CBD to benefit from maximum customer accessibility (1).\n(Also accept: traffic congestion; pedestrianised shopping streets; low residential population; high daytime footfall.)`,
        marks_scheme: '1 mark: high land values — competition for land drives prices up resulting in high-rise buildings. 1 mark: high concentration of retail and commercial functions — shops, banks, offices cluster for maximum customer accessibility.'
      },
      {
        q: 'Identify two causes of inner-city deprivation in UK cities.',
        marks: 2, tier: 'green',
        modelAnswer: `• Deindustrialisation — the loss of manufacturing industry in the 20th century left many inner-city areas with high unemployment, derelict land, and declining populations (1).\n• Poor quality housing stock — much inner-city housing dates from the Victorian era; terraced housing is often in poor repair, damp, and overcrowded (1).\n(Also accept: poor educational attainment; high crime rates; out-migration of wealthier residents; poor transport links to suburban employment.)`,
        marks_scheme: '1 mark: deindustrialisation — loss of manufacturing left areas with high unemployment and derelict land. 1 mark: poor quality housing stock — much inner-city housing is Victorian era, often in poor repair and damp.'
      },
      {
        q: 'State what is meant by counter-urbanisation.',
        marks: 2, tier: 'green',
        modelAnswer: `Counter-urbanisation is the movement of people from urban areas to rural areas or smaller towns on the urban fringe (1). It is driven by factors such as lower house prices, improved quality of life, car ownership, and improved transport links that allow commuting, and has led to growth in "commuter belt" villages around major UK cities (1).`,
        marks_scheme: '1 mark: counter-urbanisation is movement of people from urban areas to rural areas or smaller towns. 1 mark: driven by lower house prices, improved quality of life, car ownership, and transport links allowing commuting.'
      },
      {
        q: 'Name one area of regeneration in a UK city and state one aim of the regeneration project.',
        marks: 2, tier: 'green',
        modelAnswer: `• London Docklands / Manchester Salford Quays / Birmingham Eastside / Leeds South Bank — credit any named UK urban regeneration area (1).\n• Aim: to transform derelict post-industrial land into a mixed-use area of housing, offices, retail, and leisure, attracting investment and creating employment to reduce deprivation (1).`,
        marks_scheme: '1 mark: name a specific UK urban regeneration area (e.g. London Docklands, Salford Quays). 1 mark: state one aim — to transform derelict post-industrial land into mixed-use area attracting investment and creating employment.'
      },
    ],
    amber: [
      {
        q: 'Explain the social and economic impacts of deindustrialisation on UK cities.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Mass unemployment — the decline of traditional industries (steel, coal, textiles, shipbuilding) from the 1970s onward caused sudden and large-scale job losses in cities such as Sheffield, Manchester, and Liverpool (e.g. Sheffield lost tens of thousands of steel industry jobs in the 1970s–80s) (1).\n• Urban deprivation — unemployment drove poverty, poor housing conditions, and declining health; areas such as Toxteth (Liverpool) and Moss Side (Manchester) experienced severe deprivation and social unrest in the 1980s (1).\n• Population decline — wealthier residents left depressed inner-city areas for suburbs or new towns; some UK cities (Liverpool, Glasgow) lost over 30% of their population between 1960 and 1990 (1).\n• Loss of tax base — declining economic activity reduced local government revenue, making it harder to invest in services, housing, and infrastructure — creating a spiral of decline (1).`,
        marks_scheme: '1 mark: mass unemployment — decline of traditional industries caused large-scale job losses (e.g. Sheffield lost tens of thousands of steel jobs in the 1970s–80s). 1 mark: urban deprivation — unemployment drove poverty, poor housing, declining health, and social unrest. 1 mark: population decline — wealthier residents left inner-city areas; some cities lost over 30% of population. 1 mark: loss of tax base — declining economic activity reduced local government revenue creating a spiral of decline.'
      },
      {
        q: 'Explain how urban regeneration has changed one area of a UK city. Refer to named examples.',
        marks: 4, tier: 'amber',
        modelAnswer: `(London Docklands / Salford Quays — credit any named area with specific detail.)\n• London Docklands Development Corporation (LDDC) — established 1981 to regenerate 22 km² of derelict dockland in East London; attracted £7.7 billion of private investment by 1998 (1).\n• Physical changes: Canary Wharf developed as a major financial centre; the DLR extended connectivity; over 24,000 new homes built; around 2,700 businesses were trading in the area by 1998 (1).\n• Economic impacts: 100,000+ jobs created in financial and media sectors; Canary Wharf became the UK's second most important financial district after the City of London (1).\n• Social tensions: rapid gentrification raised house prices and rents, displacing some of the original working-class community; critics argue regeneration benefited wealthy incomers more than existing residents (1).`,
        marks_scheme: '1 mark: name a specific regeneration area and give a key statistic (e.g. LDDC attracted £7.7 billion private investment). 1 mark: describe physical changes — Canary Wharf, DLR extension, 24,000 new homes. 1 mark: describe economic impacts — 100,000+ jobs in financial and media sectors. 1 mark: describe social tensions — gentrification raised prices and rents, displacing original working-class community.'
      },
      {
        q: 'Describe and explain the challenges of managing urban growth on the rural-urban fringe.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Pressure for new housing — population growth and household formation in and around UK cities creates demand for new homes; the rural-urban fringe is the main available location, but development threatens agricultural land and wildlife habitats (1).\n• Greenbelt policy restricts development around major cities to prevent urban sprawl — this protects open space and countryside but can push house prices up by limiting supply (1).\n• Traffic congestion — new suburban and peri-urban development increases car dependency; rural roads and ring roads become congested, increasing pollution and travel times (1).\n• Loss of services in rural areas — as new commuter suburbs grow, local shops and schools in surrounding villages lose trade; local character changes as urban culture and residents move in (1).`,
        marks_scheme: '1 mark: pressure for new housing threatens agricultural land and wildlife habitats on rural-urban fringe. 1 mark: greenbelt policy restricts development to prevent urban sprawl but can push house prices up. 1 mark: traffic congestion from new suburban development increases pollution and travel times. 1 mark: loss of services in rural areas as new commuter suburbs change local character and reduce trade.'
      },
      {
        q: 'Explain why some parts of UK cities are more deprived than others.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Historical industrial decline — inner-city areas built around Victorian industries (e.g. Sheffield's Lower Don Valley, formerly steel; Manchester's Moss Side) have suffered from deindustrialisation; unemployment, poverty and poor housing have persisted for decades (1).\n• Selective out-migration — better-off residents have moved to suburbs or commuter towns, leaving behind those who cannot afford to move; this concentrates deprivation in specific areas (1).\n• Poor built environment — Victorian terraced housing is often in poor structural condition; high-rise estates built in the 1960s (e.g. Aylesbury Estate, London) have poor design, maintenance issues, and are stigmatised (1).\n• Inequalities in public investment — some areas attract regeneration funding (London Docklands) while others remain neglected, creating stark contrasts within the same city (1).`,
        marks_scheme: '1 mark: historical industrial decline left inner-city areas with unemployment, poverty, and poor housing persisting for decades. 1 mark: selective out-migration of better-off residents concentrates deprivation in specific areas. 1 mark: poor built environment — Victorian housing in poor condition; 1960s high-rise estates with design issues. 1 mark: inequalities in public investment — some areas attract regeneration funding while others remain neglected.'
      },
    ],
    red: [
      {
        q: 'Evaluate how successful urban regeneration has been in improving the quality of life for residents in UK cities. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `Successes:\n• Physical environment improved dramatically — derelict industrial land converted to offices, apartments, and leisure facilities; cities like Manchester, Leeds, and Birmingham now have vibrant city centres attracting significant investment (1).\n• Employment created — Canary Wharf created 100,000+ jobs; MediaCityUK at Salford Quays created thousands of media and digital jobs (BBC, ITV) and attracted over £650 million of investment (1).\n• Cultural regeneration — galleries, restaurants, and events venues have made regenerated areas attractive to visitors and the creative economy (e.g. Baltic and Sage Gateshead — now The Glasshouse — on the Tyne) (1).\nLimitations:\n• Gentrification and displacement — rising house prices and rents in regenerated areas push out lower-income original residents; London Docklands is often cited as an example of regeneration that benefited wealthy newcomers rather than original communities (1).\n• Uneven distribution — regeneration has concentrated on commercially attractive sites (waterfront, central areas); more deprived neighbourhoods away from these hotspots remain neglected (1).\nConclusion:\n• Urban regeneration has significantly improved the physical environment and economy of many UK cities, but has too often prioritised economic and property-led growth over social justice; improvements in quality of life for the most deprived residents have been less consistent and unequal geographically (1).`,
        marks_scheme: 'Level 3 (5-6 marks): balanced evaluation of successes and limitations of regeneration with named examples and specific evidence, and an overall conclusion. Level 2 (3-4 marks): describes successes and limitations with some specific detail. Level 1 (1-2 marks): basic points about regeneration. Credit: Canary Wharf 100,000+ jobs; MediaCityUK 7,000 media jobs; gentrification and displacement of lower-income residents; uneven distribution focusing on commercially attractive sites.'
      },
      {
        q: '"The challenges of UK cities are now mainly social rather than economic." Discuss this statement. [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `Social challenges:\n• Deprivation and inequality remain significant — UK cities contain both the wealthiest and most deprived communities in the country; in London, life expectancy differs by several years between the richest and poorest boroughs, and by over a decade between some wards (1).\n• Housing affordability — the average London house price in 2024 was ~£500,000; average income ~£40,000; millions priced out of ownership and spending 50%+ of income on rent (1).\n• Ethnic and racial inequalities — segregation persists in many UK cities; ethnic minority communities often face higher poverty rates, overcrowded housing, and poorer health outcomes (1).\n• Mental health and loneliness — urban isolation, particularly in high-rise estates and among the elderly, is increasingly recognised as a major public health challenge (1).\nEconomic challenges (still significant):\n• Regional economic inequality — Northern cities continue to lag London and the South-East in wages, productivity, and investment despite decades of regional policy ("Levelling Up") (1).\n• Post-pandemic high street decline — retail closures have accelerated in many city centres; unemployment in some urban areas remains above national average (1).\n• Skills mismatch — deindustrialised cities struggle to retain young talent as graduates move to London; knowledge economy jobs cluster disproportionately in the capital (1).\nConclusion:\n• Economic and social challenges are deeply intertwined — poverty drives poor social outcomes, and social disadvantage limits economic participation. While the nature of economic challenges has shifted from industrial decline to knowledge-economy inequality, economic issues remain fundamental; the statement somewhat overstates the social dimension. True improvement requires addressing both simultaneously (1).`,
        marks_scheme: 'Level 3 (7-8 marks): balanced discussion of social and economic challenges with named examples and a nuanced conclusion about their interconnection. Level 2 (4-6 marks): covers both sides with some development. Level 1 (1-3 marks): basic points about one type of challenge. Credit: London inequality — life expectancy gaps of several years between richest and poorest boroughs; housing affordability (average London house ~£500k); Northern cities lag London in wages and productivity; economic and social challenges are deeply intertwined.'
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 1.3 A Global Perspective on Development Issues */
  '1.3': {
    green: [
      {
        q: 'State what is meant by the Human Development Index (HDI).',
        marks: 2, tier: 'green',
        modelAnswer: `The HDI is a composite measure of development combining three indicators: life expectancy (health), mean and expected years of schooling (education), and Gross National Income (GNI) per capita at purchasing power parity (standard of living) (1). It produces a score between 0 and 1; countries above 0.8 are considered "very high development" (e.g. Norway: 0.966), while scores below 0.55 indicate low development (e.g. Niger: 0.394) (1).`,
        marks_scheme: '1 mark: HDI combines life expectancy, education (mean and expected years of schooling), and GNI per capita. 1 mark: produces score between 0 and 1 — above 0.8 is very high development (e.g. Norway 0.966); below 0.55 is low development.'
      },
      {
        q: 'Identify two social indicators of development.',
        marks: 2, tier: 'green',
        modelAnswer: `• Life expectancy — the average number of years a person born today can expect to live; generally higher in more developed countries (e.g. Japan: 84 years; Chad: 54 years) (1).\n• Infant mortality rate — the number of children who die before their first birthday per 1,000 live births; inversely correlated with development (e.g. Finland: 2; Sierra Leone: 77 per 1,000) (1).\n(Also accept: literacy rate, years of schooling, access to clean water/sanitation, doctors per 1,000 people.)`,
        marks_scheme: '1 mark: life expectancy — average years a person born today can expect to live; generally higher in more developed countries. 1 mark: infant mortality rate — number of children dying before first birthday per 1,000 live births; inversely correlated with development.'
      },
      {
        q: 'State two reasons why GDP per capita may be a limited measure of development.',
        marks: 2, tier: 'green',
        modelAnswer: `• GDP per capita is an average — it conceals enormous inequalities within a country; a high average may mask extreme poverty among the majority while a small elite holds most wealth (e.g. Nigeria has a high GDP but 40% live below the poverty line) (1).\n• GDP measures economic output but not welfare — it includes negative activities (clearing up pollution, treating disease caused by poor conditions) and excludes unpaid work, leisure, and environmental quality (1).`,
        marks_scheme: '1 mark: GDP per capita is an average concealing enormous inequality within a country. 1 mark: GDP measures economic output but not welfare, excluding unpaid work and environmental quality.'
      },
      {
        q: 'State what is meant by the North-South divide in terms of global development.',
        marks: 2, tier: 'green',
        modelAnswer: `The North-South divide refers to the broad contrast in levels of development between the wealthy, industrialised countries of the "Global North" (Europe, North America, Australia, Japan) and the less developed countries of the "Global South" (much of Africa, Asia, and Latin America) (1). It is a generalisation — some southern countries (e.g. Singapore, UAE) are highly developed, and some northern countries have pockets of severe poverty — but it broadly captures the global pattern of inequality (1).`,
        marks_scheme: '1 mark: North-South divide is the broad contrast in development between wealthy Global North and less developed Global South. 1 mark: it is a generalisation as some southern countries are highly developed and some northern countries have pockets of poverty, but broadly captures global inequality.'
      },
    ],
    amber: [
      {
        q: 'Explain how physical geography can influence a country\'s level of development.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Landlocked countries have limited access to international trade without costly overland transport — sub-Saharan Africa contains many landlocked LICs (e.g. Mali, Niger, Chad) that face higher trade costs, reducing economic growth (1).\n• Natural hazard risk — countries in disaster-prone regions (e.g. Bangladesh — flooding; Haiti — earthquakes) face repeated economic setbacks as infrastructure and agricultural land is destroyed; recovery costs divert resources from development investment (1).\n• Climate — tropical countries often have hot, humid climates conducive to disease vectors such as malaria mosquitoes; malaria costs Africa an estimated $12 billion/year in lost productivity and healthcare costs, hindering development (1).\n• Natural resources — countries with abundant resources (oil: Saudi Arabia; minerals: Botswana's diamonds) can generate wealth, but the "resource curse" shows that resource wealth does not always translate to broad development (1).`,
        marks_scheme: '1 mark: landlocked countries face higher trade costs reducing economic growth. 1 mark: natural hazard risk causes repeated economic setbacks diverting resources from development. 1 mark: tropical climate conducive to disease vectors — malaria costs Africa $12 billion/year in lost productivity. 1 mark: natural resources can generate wealth but resource curse shows this does not always translate to broad development.'
      },
      {
        q: 'Explain the role of international trade in causing and maintaining global development inequalities.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Unequal terms of trade — LICs often export raw materials (commodities) and import manufactured goods; commodity prices are volatile and low relative to manufactured products, locking LICs in a pattern of low-value production (1).\n• Trade barriers — HIC tariffs and subsidies protect their own farmers and industries, preventing LICs from competing in valuable markets (e.g. EU agricultural subsidies disadvantage African farmers in EU markets) (1).\n• TNCs and profit repatriation — transnational corporations in LICs extract profits back to HICs; limited economic multiplier effect stays in the host country (1).\n• However, trade has also enabled development — East Asian "Tiger" economies (South Korea, Taiwan, Singapore) used export-led manufacturing to achieve rapid development; China's trade growth lifted 800 million out of poverty since 1980 (1).`,
        marks_scheme: '1 mark: unequal terms of trade — LICs export raw materials and import manufactured goods; commodity prices low relative to manufactured products. 1 mark: trade barriers — HIC tariffs and subsidies protect own farmers preventing LICs competing. 1 mark: TNC profit repatriation — limited economic multiplier stays in host country. 1 mark: trade has also enabled development — East Asian Tigers and China used export-led growth (800 million out of poverty since 1980).'
      },
      {
        q: 'Explain how aid can help a country to develop. Refer to a named example.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Emergency/humanitarian aid — provides food, clean water, medicine, and shelter after disasters, preventing loss of life and allowing rapid recovery that maintains development progress (e.g. UN response to 2010 Haiti earthquake, providing emergency aid to 1.5 million people) (1).\n• Tied/bilateral aid — can fund major infrastructure projects (roads, dams, ports) that improve connectivity and economic productivity, though it may benefit donor-country firms rather than local industry (1).\n• Multilateral aid through organisations like the World Bank funds healthcare (e.g. polio eradication — 3 billion children vaccinated; cases reduced 99.9% since 1988) and education, building long-term human capital (1).\n• Microfinance (e.g. Grameen Bank, Bangladesh) provides small loans to entrepreneurs — particularly women — to start businesses, generating income and reducing poverty; 9 million borrowers in Bangladesh alone (1).`,
        marks_scheme: '1 mark: emergency aid prevents loss of life after disasters allowing rapid recovery. 1 mark: tied/bilateral aid funds major infrastructure projects improving connectivity and productivity. 1 mark: multilateral aid funds healthcare and education building long-term human capital. 1 mark: microfinance (e.g. Grameen Bank) provides small loans to entrepreneurs especially women, generating income and reducing poverty.'
      },
      {
        q: 'Explain why some countries have experienced more rapid development than others since 2000.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Political stability — countries with stable governance and rule of law (e.g. Botswana, Rwanda) attract foreign investment and can implement long-term development plans; countries with conflict or corruption (e.g. DRC, Somalia) struggle to develop (1).\n• Foreign Direct Investment — globalisation has enabled MICs with educated, low-cost workforces to attract TNC manufacturing — China, Vietnam, and Bangladesh have experienced rapid development through export-led industrialisation (1).\n• Good governance and investment in education and health — South Korea and Singapore invested heavily in education from the 1960s onward; their highly skilled workforces attracted high-value industries (1).\n• China's state-led development model — the Chinese government directed investment into infrastructure, manufacturing, and exports; GDP per capita grew from ~$1,000 in 2000 to ~$12,500 by 2023 (1).\n• Debt burden — heavily indebted countries spend large proportions of government revenue on debt repayment, leaving less for health, education, and infrastructure — the World Bank estimates many LICs spend more on debt service than on healthcare (1).`,
        marks_scheme: '1 mark: political stability attracts FDI and enables long-term development plans; conflict and corruption hinder development. 1 mark: FDI — countries with educated low-cost workforces attract TNC manufacturing enabling export-led growth. 1 mark: investment in education and health builds skilled workforces attracting high-value industries. 1 mark: debt burden — heavily indebted countries spend large revenue proportions on repayment leaving less for development. 1 mark: China\'s state-led development model directed investment into infrastructure and exports.'
      },
    ],
    red: [
      {
        q: 'Evaluate the effectiveness of different strategies to reduce the development gap between HICs and LICs. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `Aid:\n• Emergency aid saves lives but does not address structural causes of underdevelopment; long-term aid dependency can undermine local industries (e.g. cheap food aid may undercut local farmers) (1).\n• Well-targeted development aid (microfinance, education, healthcare) can be transformative — PEPFAR (US AIDS programme) is estimated to have saved around 25 million lives, mostly in sub-Saharan Africa, although US aid cuts in 2025 threatened its future (1).\nFair Trade:\n• Guarantees higher prices for producers; improves farmers' incomes and community investment in education and healthcare (e.g. Fairtrade coffee co-operatives in Ethiopia receive a guaranteed minimum price plus a premium) — but reaches only a tiny fraction of global trade (1).\nDebt relief:\n• HIPC Initiative wrote off around $76 billion of debt for over 35 countries; freed up government spending for services — e.g. Tanzania used the savings to help abolish primary school fees (1) — but many LICs have accumulated new debt, particularly to Chinese lenders (1).\nFDI and trade:\n• Potentially the most powerful driver of development — as shown by China and South-East Asia — but benefits may flow to elites and TNCs rather than the poorest (1).\nConclusion:\n• No single strategy is sufficient; a combination tailored to the specific context of each country, combined with fairer global trade rules and governance improvements, offers the best hope — but fundamental reform of global economic systems is required for sustained reduction in the development gap (1).`,
        marks_scheme: 'Level 3 (5-6 marks): evaluates multiple strategies (aid, fair trade, debt relief, FDI) with specific evidence and a conclusion about the need for combined approaches. Level 2 (3-4 marks): discusses some strategies with limited evaluation. Level 1 (1-2 marks): basic description of strategies. Credit: PEPFAR saved an estimated 25 million lives; Fairtrade gives Ethiopian farmers a guaranteed minimum price plus premium; HIPC Initiative wrote off $76 billion debt; FDI most powerful development driver but benefits may not reach poorest.'
      },
      {
        q: '"Globalisation has widened rather than narrowed global development inequalities." Evaluate this statement. [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `Evidence that globalisation has widened inequalities:\n• While some MICs have benefited enormously (China, India, Vietnam), the poorest LICs — particularly landlocked or conflict-affected nations in sub-Saharan Africa — have been largely bypassed by FDI and trade growth (1).\n• TNC activity concentrates in countries with existing advantages (infrastructure, education, political stability); the least developed countries lack the conditions to attract investment (1).\n• Profit repatriation — TNCs take profits back to HIC headquarters; tax avoidance (e.g. Apple, Google routing profits through Ireland/Netherlands) reduces tax revenues in LICs (1).\n• Unequal terms of trade persist — commodity prices remain depressed relative to manufactured goods; LIC primary exporters remain trapped in low-value chains (1).\nEvidence that globalisation has reduced inequalities:\n• Global extreme poverty (below $2.15/day) fell from 36% in 1990 to under 10% in 2019 — largely due to globalisation-driven growth in China, India, and South-East Asia (800 million lifted out of poverty in China alone) (1).\n• Access to mobile technology, information, and global markets has enabled entrepreneurship and development even in LICs — mobile banking (M-Pesa, which began in Kenya) reached over 50 million users across Africa, enabling financial inclusion for millions without bank accounts (1).\n• Global health and education outcomes have improved — child mortality has fallen by 60% since 1990; primary school enrollment has risen to over 90% globally (1).\nConclusion:\n• Globalisation has produced a deeply uneven pattern of development — it has undoubtedly narrowed the gap between MICs (particularly in Asia) and HICs, but has left the poorest LICs further behind in relative terms. The statement is partially correct: within-country inequality has increased in many nations even as global averages improve. Globalisation's benefits are real but have been distributed profoundly unequally, reflecting and reinforcing existing power structures in the global economy (1).`,
        marks_scheme: 'Level 3 (7-8 marks): balanced evaluation of evidence for and against the statement with specific examples and a nuanced conclusion about uneven distribution of globalisation\'s benefits. Level 2 (4-6 marks): covers both sides with some specific evidence. Level 1 (1-3 marks): basic points about globalisation and inequality. Credit: poorest LICs bypassed by FDI; TNC profit repatriation reduces tax revenue in LICs; global extreme poverty fell from 36% to under 10% since 1990; M-Pesa mobile banking reached 50 million users in Kenya.'
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 2.1 Coasts and Coastal Management */
  '2.1': {
    green: [
      {
        q: 'State two processes of coastal erosion.',
        marks: 2, tier: 'green',
        modelAnswer: `• Hydraulic action — the force of waves compressing air into cracks in rocks, breaking them apart (1).\n• Abrasion — waves hurl sediment against the cliff face, wearing it away like sandpaper (1).\n(Also accept: attrition — rocks colliding and becoming smaller and rounder; corrosion/solution — weak acids in seawater dissolving rock such as limestone.)`,
        marks_scheme: '1 mark: hydraulic action — force of waves compressing air into cracks. 1 mark: abrasion — waves hurling sediment against cliff face.'
      },
      {
        q: 'Identify two landforms created by coastal deposition.',
        marks: 2, tier: 'green',
        modelAnswer: `• Beach — an accumulation of sand or shingle deposited between the low-tide and high-tide marks (1).\n• Spit — a long narrow ridge of sand or shingle extending from the coast, formed where longshore drift continues past a change in the coastline direction (1).\n(Also accept: bar, tombolo, sand dune system.)`,
        marks_scheme: '1 mark: beach — accumulation of sand or shingle between tide marks. 1 mark: spit — narrow ridge extending from coast where longshore drift passes a change in direction.'
      },
      {
        q: 'State what is meant by longshore drift.',
        marks: 2, tier: 'green',
        modelAnswer: `Longshore drift is the movement of sediment along a coastline (1), caused by waves approaching the shore at an angle — swash carries material up the beach at the wave angle, while backwash returns it perpendicular to the shore due to gravity, gradually moving material along the coast (1).`,
        marks_scheme: '1 mark: longshore drift is movement of sediment along a coastline. 1 mark: caused by waves approaching at an angle, with swash and backwash moving material progressively along the shore.'
      },
      {
        q: 'Name and describe one hard engineering coastal management strategy.',
        marks: 2, tier: 'green',
        modelAnswer: `• Sea wall — a concrete or rock barrier built at the base of cliffs or at the top of a beach to reflect wave energy and prevent erosion (1). It protects settlements directly behind it but can be expensive (£5,000–£10,000 per metre) and may increase erosion elsewhere (1).\n(Also accept: groynes, rock armour/rip-rap, revetments.)`,
        marks_scheme: '1 mark: name a hard engineering strategy (e.g. sea wall). 1 mark: describe how it works and/or give a cost/effect.'
      },
    ],
    amber: [
      {
        q: 'Explain how a headland and bay are formed.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Where a coastline has alternating bands of hard and soft rock running perpendicular to the sea, differential erosion occurs (1).\n• Soft rock (e.g. clay, sandstone) is eroded more quickly than hard rock (e.g. chalk, granite), forming indentations called bays (1).\n• The harder rock is left protruding into the sea, forming a headland (1).\n• Headlands become exposed to more wave energy from three sides, concentrating erosion, while bays accumulate deposited sediment forming beaches (1).`,
        marks_scheme: '1 mark: alternating hard and soft rock bands perpendicular to sea. 1 mark: soft rock eroded more quickly forming bays. 1 mark: hard rock left protruding as headland. 1 mark: headlands exposed to wave energy from three sides.'
      },
      {
        q: 'Explain the formation of a wave-cut platform. You may use a diagram.',
        marks: 4, tier: 'amber',
        diagram: true,
        modelAnswer: `• Waves attack the base of a cliff between the high and low tide marks, creating a wave-cut notch through hydraulic action and abrasion (1).\n• The notch deepens, undermining the cliff above until it becomes unsupported and collapses (1).\n• The collapsed material is gradually removed by further wave action (1).\n• As the cliff retreats, a gently sloping rocky platform is left exposed at low tide — the wave-cut platform (1).\n(Diagram should show: original cliff line, wave-cut notch, collapsed cliff debris, retreating cliff, and the flat wave-cut platform extending seaward.)`,
        marks_scheme: '1 mark: waves attack cliff base creating wave-cut notch. 1 mark: notch deepens undermining cliff until it collapses. 1 mark: collapsed material removed by wave action. 1 mark: gently sloping rock platform left at low tide.'
      },
      {
        q: 'Describe and explain the formation of a spit.',
        marks: 5, tier: 'amber',
        modelAnswer: `• A spit forms where longshore drift transports sediment along a coastline and the coastline suddenly changes direction — for example, at an estuary mouth (1).\n• Sediment continues to be deposited in the same direction as longshore drift, building up a ridge of sand or shingle that extends into the sea (1).\n• The end of the spit may be curved — called a recurved end — due to waves refracting around the spit tip and secondary currents (1).\n• Deposition continues to extend the spit, but it cannot grow across a river estuary because river currents carry sediment away (1).\n• A sheltered lagoon or salt marsh often develops on the landward side of the spit where conditions are calmer (1).\n(Example: Spurn Head, Humber estuary; Blakeney Point, Norfolk.)`,
        marks_scheme: '1 mark: forms where longshore drift passes a change in coastline direction. 1 mark: sediment deposited building up a ridge extending into the sea. 1 mark: end may be recurved due to wave refraction. 1 mark: cannot cross an estuary as river currents remove sediment. 1 mark: sheltered lagoon or salt marsh forms on landward side.'
      },
      {
        q: 'Explain why some coastlines are managed using a "managed retreat" or "do nothing" approach.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Managed retreat (coastal realignment) involves allowing the sea to flood low-value land, creating new intertidal habitats such as salt marshes, which act as natural buffers against wave energy (1).\n• It is significantly cheaper than hard engineering — saving millions in long-term maintenance costs for sea walls (1).\n• In some areas the land is of low economic value (e.g. agricultural fields), so the cost of defending it exceeds its worth — a "do nothing" approach is adopted (1).\n• Managed retreat also provides environmental benefits — new habitats for wildlife and carbon storage in salt marshes (1).\n(Example: Medmerry, West Sussex — largest managed retreat scheme in Europe, creating 183 hectares of new intertidal habitat.)`,
        marks_scheme: '1 mark: managed retreat allows sea to flood low-value land creating intertidal habitats. 1 mark: significantly cheaper than hard engineering. 1 mark: land of low economic value so cost of defending exceeds its worth. 1 mark: provides environmental benefits — new habitats and carbon storage.'
      },
    ],
    red: [
      {
        q: 'Evaluate the effectiveness of hard engineering strategies to manage coastal erosion. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `• Sea walls are effective at protecting settlements directly behind them and reflecting wave energy, but they are very expensive (up to £10,000/m) and can cause increased erosion at their unprotected ends (outflanking) (1).\n• Groynes trap sediment and build up beaches, which are effective natural buffers; however, they starve beaches down-drift of sediment, causing erosion elsewhere — e.g. Mappleton, Yorkshire (1).\n• Rock armour (rip-rap) is relatively cheap and dissipates wave energy effectively, but it is visually intrusive and can be moved by extreme storms (1).\n• Hard engineering strategies often just transfer the erosion problem elsewhere rather than solving it, creating conflicts between communities (1).\n• Hard structures require ongoing maintenance and have a finite lifespan — sea walls may last 25–50 years before needing replacement, incurring further costs (1).\n• Overall, hard engineering is effective in the short term for protecting high-value assets (towns, infrastructure), but is unsustainable long-term and may not be cost-effective for lower-value coastlines — soft engineering and managed retreat are increasingly preferred (1).`,
        marks_scheme: 'Level 3 (5-6 marks): balanced evaluation of multiple hard engineering strategies with named examples, identifying both effectiveness and limitations, plus overall judgement. Level 2 (3-4 marks): describes effectiveness and limitations of at least two strategies. Level 1 (1-2 marks): basic descriptions of hard engineering strategies. Credit: sea walls reflect wave energy but cause erosion at their ends; groynes trap sediment but starve downdrift beaches; rock armour dissipates energy but is visually intrusive; hard engineering transfers erosion problem elsewhere.'
      },
      {
        q: '"Soft engineering is always a better approach than hard engineering for managing coastlines." Discuss this statement. [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `Arguments in favour:\n• Beach nourishment works with natural processes rather than against them — adding sand to replenish beaches provides a natural buffer, is visually attractive and benefits tourism (1).\n• Dune stabilisation using marram grass is cheap, sustainable and creates valuable habitats (1).\n• Managed retreat is cost-effective and environmentally beneficial, especially for low-value agricultural land (e.g. Medmerry, Sussex — about £28 million, cheaper in the long term than repeatedly rebuilding the old shingle bank) (1).\n• Soft engineering addresses the cause of erosion rather than just its effects, creating more sustainable long-term solutions (1).\nArguments against:\n• Soft engineering is not always suitable — in high-value urban areas (e.g. Lyme Regis, Dorset), hard engineering such as sea walls is essential to protect homes and businesses (1).\n• Beach nourishment requires repeated applications and relies on a supply of suitable sediment, which may itself be costly to source and transport (1).\n• Managed retreat may be unacceptable to communities who face the loss of homes, farmland, and local heritage — social and political resistance is a major barrier (1).\nConclusion:\n• The best approach is often an integrated coastal management strategy combining both hard and soft engineering, tailored to the specific physical and human geography of each location; the statement is therefore an oversimplification (1).`,
        marks_scheme: 'Level 3 (7-8 marks): balanced discussion of both soft and hard engineering with named examples, addressing when each is appropriate, and a nuanced conclusion. Level 2 (4-6 marks): discusses both sides but with limited examples or underdeveloped conclusion. Level 1 (1-3 marks): basic points about soft or hard engineering. Credit: beach nourishment works with natural processes; managed retreat is cost-effective; hard engineering essential for high-value urban areas; integrated coastal management as best approach.'
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 2.2 Rivers and River Management */
  '2.2': {
    green: [
      {
        q: 'State two processes of river erosion.',
        marks: 2, tier: 'green',
        modelAnswer: `• Hydraulic action — the force of fast-flowing water loosening and dislodging particles from the river bed and banks (1).\n• Abrasion — the river uses its load of rocks and sediment to scrape and wear away the channel (1).\n(Also accept: attrition — particles in the load collide and break into smaller, rounder pieces; corrosion/solution — slightly acidic water dissolves rock such as limestone.)`,
        marks_scheme: '1 mark: hydraulic action — force of fast-flowing water dislodging particles. 1 mark: abrasion — river uses load to scrape and wear the channel.'
      },
      {
        q: 'Identify the four methods by which a river transports its load.',
        marks: 4, tier: 'green',
        modelAnswer: `• Traction — large boulders rolled along the river bed (1).\n• Saltation — medium-sized pebbles bounced along the river bed (1).\n• Suspension — fine silt and clay particles carried within the water (1).\n• Solution — minerals dissolved in the water and carried invisibly (1).`,
        marks_scheme: '1 mark: traction — large boulders rolled along bed. 1 mark: saltation — pebbles bounced along bed. 1 mark: suspension — fine particles carried within water. 1 mark: solution — minerals dissolved and carried invisibly.'
      },
      {
        q: 'State what is meant by the long profile of a river.',
        marks: 2, tier: 'green',
        modelAnswer: `The long profile is a cross-section of a river from its source to its mouth showing how the gradient changes along its course (1). The gradient is steepest in the upper course and becomes progressively gentler towards the mouth, producing a concave curve — this is the graded profile (1).`,
        marks_scheme: '1 mark: long profile is a cross-section from source to mouth showing gradient change. 1 mark: gradient is steepest in upper course and becomes progressively gentler towards mouth, forming a concave graded profile.'
      },
      {
        q: 'Name one landform found in the upper course of a river and describe its appearance.',
        marks: 2, tier: 'green',
        modelAnswer: `• V-shaped valley — a narrow, steep-sided valley formed by vertical erosion cutting down into the bedrock; the sides are steep because mass movement supplies material to the river which carries it away (1).\n(Also accept: waterfall — a sudden, near-vertical drop in a river's course where it flows from hard to soft rock; interlocking spurs — ridges of harder rock that force the river to wind around them in the upper course.)\n(Second mark for a clear, accurate description of the chosen feature.) (1)`,
        marks_scheme: '1 mark: name a landform in the upper course (e.g. V-shaped valley). 1 mark: clear accurate description of the chosen feature.'
      },
    ],
    amber: [
      {
        q: 'Explain the formation of a waterfall and gorge. You may use a diagram.',
        marks: 4, tier: 'amber',
        diagram: true,
        modelAnswer: `• A waterfall forms where a river flows from a band of hard rock onto softer rock; the softer rock is eroded more rapidly by hydraulic action and abrasion, creating a step in the river's profile (1).\n• The falling water creates a plunge pool at the base; hydraulic action and abrasion undercut the hard rock, forming an overhang (1).\n• Eventually the overhang collapses and the waterfall retreats upstream; over time, repeated collapse creates a steep-sided gorge (1).\n• The river continues to cut downwards and the gorge deepens as the waterfall retreats further upstream (1).\n(Diagram: hard caprock, soft rock beneath, plunge pool, overhang/undercutting, retreating waterfall, gorge left behind.)\n(Example: High Force, River Tees — retreat over thousands of years has left a gorge about 700 m long.)`,
        marks_scheme: '1 mark: waterfall forms where river flows from hard to soft rock, soft rock eroded more rapidly. 1 mark: falling water creates plunge pool and undercuts hard rock forming overhang. 1 mark: overhang collapses and waterfall retreats upstream. 1 mark: repeated collapse over time creates steep-sided gorge.'
      },
      {
        q: 'Explain how a meander develops and may eventually form an ox-bow lake.',
        marks: 5, tier: 'amber',
        modelAnswer: `• In the lower course, the river flows over a gentle gradient; any slight bend causes the fastest flow (thalweg) to be deflected to the outside of the bend (1).\n• Erosion by hydraulic action and abrasion occurs on the outside of the bend, undercutting it to form a river cliff; the meander becomes more pronounced (1).\n• On the inside of the bend, water flows more slowly; reduced energy means deposition of sediment, forming a slip-off slope or point bar (1).\n• Over time, the meander neck narrows as both bends erode towards each other; during a flood, the river may break through the narrow neck, taking a more direct route (1).\n• The old meander bend is cut off from the main channel; deposition seals both ends, forming a crescent-shaped ox-bow lake (1).\n(Example: River Cuckmere, East Sussex; River Mississippi, USA.)`,
        marks_scheme: '1 mark: slight bend deflects fastest flow to outside, causing erosion forming river cliff. 1 mark: inside of bend has slower flow causing deposition forming slip-off slope. 1 mark: meander neck narrows as bends erode towards each other. 1 mark: river breaks through neck during flood taking direct route. 1 mark: old bend cut off and sealed by deposition forming ox-bow lake.'
      },
      {
        q: 'Describe and explain the changes in a river\'s characteristics from its source to its mouth.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Channel width and depth both increase downstream — discharge increases as more tributaries join; the larger channel has less friction relative to its volume (lower hydraulic radius), so the river flows more efficiently (1).\n• Velocity increases downstream despite a gentler gradient because friction is proportionally lower in the wider, deeper channel (1).\n• Sediment load decreases in size from the upper to lower course — attrition rounds and reduces particles over distance; fine silt and clay dominate in the lower course (1).\n• Erosion process changes from predominantly vertical (upper course) to lateral (lower course), widening the flood plain and creating meanders (1).`,
        marks_scheme: '1 mark: channel width and depth increase downstream as discharge increases from tributaries. 1 mark: velocity increases despite gentler gradient due to lower proportional friction. 1 mark: sediment decreases in size downstream due to attrition. 1 mark: erosion changes from vertical to lateral, creating meanders and widening flood plain.'
      },
      {
        q: 'Explain how a flood plain is formed.',
        marks: 4, tier: 'amber',
        modelAnswer: `• A flood plain is the flat area of land either side of a river in its lower course, formed over thousands of years by a combination of erosion and deposition (1).\n• Lateral erosion by meanders widens the valley floor; as meanders migrate, they cut a broad, flat surface (1).\n• During floods, the river overtops its banks; velocity drops sharply beyond the channel, so the heaviest sediment is deposited first, forming levées along the banks; finer silt is deposited further across the flood plain (1).\n• Repeated flooding builds up a thick layer of fertile alluvium across the flood plain, making it agriculturally valuable (1).`,
        marks_scheme: '1 mark: flood plain is flat area either side of river in lower course. 1 mark: lateral erosion by meanders widens the valley floor. 1 mark: during floods velocity drops beyond channel, depositing sediment as levées and alluvium. 1 mark: repeated flooding builds thick layer of fertile alluvium across the flood plain.'
      },
    ],
    red: [
      {
        q: 'Evaluate the effectiveness of strategies used to manage river flooding. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `Hard engineering:\n• Dams and reservoirs control river flow by storing excess water, protecting settlements downstream (e.g. Kielder Reservoir, River North Tyne) but are very expensive, flood large areas of land, and disrupt river ecosystems and sediment supply (1).\n• Channelisation (straightening, deepening, lining with concrete) increases flow speed, protecting immediate areas — but transfers flood risk further downstream (1).\n• Flood walls and embankments protect urban areas effectively (e.g. Thames Barrier, London) but are costly and can give a false sense of security, encouraging development on flood plains (1).\nSoft engineering:\n• Flood plain zoning restricts development in high-risk areas — sustainable and cheap, but limits economic development and is often politically unpopular (1).\n• Afforestation in catchments increases interception and infiltration, reducing peak discharge — cheap and sustainable but takes decades to mature and requires large land areas (1).\nConclusion:\n• An integrated flood management approach combining hard and soft measures is most effective — hard engineering protects existing high-value assets; soft engineering reduces the risk at source. Context matters: dense urban areas may require hard engineering while rural catchments suit softer approaches (1).`,
        marks_scheme: 'Level 3 (5-6 marks): balanced evaluation of hard and soft engineering flood management strategies with named examples and an overall judgement on effectiveness. Level 2 (3-4 marks): some comparison of strategies with limited examples. Level 1 (1-2 marks): basic descriptions of flood management strategies. Credit: dams control flow but are expensive and disrupt ecosystems; channelisation increases speed but transfers risk downstream; flood plain zoning is sustainable but limits development; afforestation reduces peak discharge but takes decades.'
      },
      {
        q: '"Human activity is the main cause of river flooding." To what extent do you agree with this statement? [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `Human causes of flooding:\n• Urbanisation increases impermeable surfaces (roofs, tarmac), reducing infiltration and increasing surface runoff — lag time is shortened and peak discharge rises, increasing flood risk (e.g. Boscastle, 2004 — narrow bridges and culverts trapped debris and made the flood worse) (1).\n• Deforestation removes trees that intercept rainfall and use water through transpiration; runoff reaches rivers faster and in greater volume (1).\n• Floodplain development removes natural storage — building on flood plains leaves nowhere for excess water to go (1).\n• Climate change (human-driven) is intensifying rainfall events, increasing frequency of extreme storms (1).\nPhysical causes:\n• Intense or prolonged rainfall — more precipitation than the drainage basin can absorb (e.g. River Severn floods, 2007 — weeks of above-average rainfall saturated catchment) (1).\n• Impermeable geology (clay, granite) naturally limits infiltration regardless of human activity (1).\n• Snowmelt and frozen ground in spring can cause rapid increases in discharge (1).\nConclusion:\n• Both physical and human factors cause flooding, and they often interact — a flood event may require a physical trigger (extreme rainfall) but human activity amplifies the impact. In many modern cases, human modification of drainage basins has significantly increased flood risk, so the statement has considerable merit; however, physical geography remains an important underlying control — a balanced conclusion is appropriate (1).`,
        marks_scheme: 'Level 3 (7-8 marks): balanced discussion of both human and physical causes with named examples and a nuanced conclusion about relative importance. Level 2 (4-6 marks): identifies both causes but limited development or examples. Level 1 (1-3 marks): basic points about causes of flooding. Credit: urbanisation reduces infiltration and shortens lag time; deforestation increases runoff volume; intense/prolonged rainfall as physical trigger; impermeable geology naturally limits infiltration.'
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 2.3 Weather and Climate */
  '2.3': {
    green: [
      {
        q: 'State two differences between weather and climate.',
        marks: 2, tier: 'green',
        modelAnswer: `• Weather is the short-term atmospheric conditions at a specific place and time (e.g. today's temperature or rainfall), while climate is the average atmospheric conditions over a long period — typically 30 years — for a region (1).\n• Weather changes from day to day and can be unpredictable; climate is a more consistent long-term pattern and is predictable within certain ranges (1).`,
        marks_scheme: '1 mark: weather is short-term conditions at a specific place and time; climate is average conditions over 30 years for a region. 1 mark: weather changes day to day and is unpredictable; climate is a consistent long-term pattern.'
      },
      {
        q: 'Identify two characteristics of a depression (low pressure system) as it passes over the UK.',
        marks: 2, tier: 'green',
        modelAnswer: `• Cloud and rainfall — depressions bring frontal rain as warm, moist air rises over cold air at the warm and cold fronts (1).\n• Wind — low pressure draws in air from surrounding areas, creating strong, often south-westerly winds that increase as the depression approaches (1).\n(Also accept: falling pressure; changing wind direction; temperatures rising behind the warm front; temperatures falling behind the cold front.)`,
        marks_scheme: '1 mark: cloud and rainfall — depressions bring frontal rain as warm moist air rises over cold air. 1 mark: wind — low pressure draws in air creating strong often south-westerly winds.'
      },
      {
        q: 'State what is meant by the urban heat island effect.',
        marks: 2, tier: 'green',
        modelAnswer: `The urban heat island effect is where city centres are significantly warmer than surrounding rural areas (1). This is caused by heat released from buildings, vehicles, and industry; the absorption and re-radiation of heat by dark surfaces like tarmac and concrete; and reduced vegetation, which would otherwise cool the air through transpiration (1).`,
        marks_scheme: '1 mark: urban heat island is where city centres are significantly warmer than surrounding rural areas. 1 mark: caused by heat from buildings/vehicles/industry, absorption by dark surfaces, and reduced vegetation.'
      },
      {
        q: 'Name the type of rainfall most common in upland areas of the UK and briefly explain how it forms.',
        marks: 2, tier: 'green',
        modelAnswer: `Relief (orographic) rainfall (1). Moist air from the sea is forced to rise over high ground — as it rises it cools, reaches dew point, and water vapour condenses into cloud and falls as rain on the windward side. Drier air descends on the leeward side (rain shadow) (1).`,
        marks_scheme: '1 mark: relief (orographic) rainfall. 1 mark: moist air forced to rise over high ground, cools, reaches dew point, condenses into cloud and falls as rain on windward side.'
      },
    ],
    amber: [
      {
        q: 'Explain the differences in climate between the north-west and south-east of the UK.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The north-west (e.g. Welsh/Scottish highlands) receives much more rainfall — typically 1,500–3,000 mm/year compared to 600–700 mm in the south-east — because prevailing south-westerly winds bring moist Atlantic air which rises over western mountains, causing relief rainfall (1).\n• The south-east is warmer — average summer temperatures 3–4°C higher than the north-west — because it is further south, receives more solar radiation at a higher angle, and is further from the cooling influence of the Atlantic (1).\n• The north-west experiences more cloud cover and fewer hours of sunshine annually; the south-east has more anticyclonic (high pressure) conditions bringing settled, sunny weather (1).\n• Winters in the north-west are milder than expected for the latitude due to the warming influence of the North Atlantic Drift (warm ocean current); the south-east has colder winters due to cold easterly winds from continental Europe (1).`,
        marks_scheme: '1 mark: north-west receives much more rainfall (1500–3000 mm/yr) than south-east (600–700 mm) due to prevailing south-westerly winds and relief rainfall over western mountains. 1 mark: south-east is warmer — average summer temperatures 3–4°C higher, further south with more solar radiation. 1 mark: north-west has more cloud cover and fewer sunshine hours; south-east has more anticyclonic settled weather. 1 mark: north-west winters milder due to North Atlantic Drift; south-east colder due to cold easterly winds from Europe.'
      },
      {
        q: 'Explain how a depression forms and the weather it brings to the UK.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Depressions form along the polar front, where cold polar air meets warm tropical air — the air masses do not mix, creating an unstable boundary (1).\n• A wave develops along the front; warm air rises above cold air (less dense), creating a zone of low pressure at the surface as air is removed from above (1).\n• The depression rotates anticlockwise (in the northern hemisphere) and the system deepens — a warm front (warm air advancing over cold) leads, followed by a cold front (cold air undercutting warm) (1).\n• Warm front: gradual thickening cloud (cirrus → stratus), steady rain and drizzle; warm sector brings milder temperatures and possibly clearer skies (1).\n• Cold front: towering cumulonimbus clouds, heavy rain, thunderstorms, then a rapid clearance with cooler temperatures and brighter conditions (1).`,
        marks_scheme: '1 mark: depressions form along polar front where cold and warm air masses meet, creating unstable boundary. 1 mark: a wave develops with warm air rising, creating low pressure at surface. 1 mark: depression rotates anticlockwise deepening with warm and cold fronts. 1 mark: warm front brings gradual cloud thickening, steady rain, and milder temperatures. 1 mark: cold front brings cumulonimbus, heavy rain or thunderstorms then rapid clearance and cooler temperatures.'
      },
      {
        q: 'Describe and explain the causes and effects of one recent extreme weather event in the UK.',
        marks: 4, tier: 'amber',
        modelAnswer: `(Example: Storm Desmond, December 2015 / Winter flooding 2013-14 / UK heatwave July 2022 — credit any appropriate example.)\n• Storm Desmond (December 2015): caused by an unusually deep Atlantic depression tracking northwards over the UK, bringing record-breaking rainfall — 341 mm in 24 hours at Honister Pass, Cumbria (1).\n• A long plume of very warm, moist sub-tropical air (an "atmospheric river") was directed at northern Britain for over 24 hours and forced to rise over the Cumbrian fells, adding heavy relief rainfall on already saturated ground (1).\n• Effects: severe flooding in Cumbria and Lancashire — about 5,200 homes flooded (including large parts of Carlisle, Keswick and Appleby); bridges destroyed (e.g. Pooley Bridge); over 40,000 homes lost power; damage costs ran to hundreds of millions of pounds (1).\n• Long-term effects: disruption to businesses, homes rendered uninhabitable for months, mental health impacts on affected communities, and debate about the role of climate change in intensifying such events (1).`,
        marks_scheme: '1 mark: name and locate a recent UK extreme weather event. 1 mark: explain physical cause of the event. 1 mark: describe immediate impacts (deaths, flooding, damage). 1 mark: describe longer-term or secondary impacts.'
      },
      {
        q: 'Explain why the UK\'s climate is described as temperate maritime.',
        marks: 4, tier: 'amber',
        modelAnswer: `• "Temperate" refers to the UK's moderate temperatures — winters are mild (rarely below -5°C in lowlands) and summers warm but rarely extreme (rarely above 30°C) compared to continental climates at similar latitudes (1).\n• "Maritime" refers to the strong influence of the surrounding seas — the North Atlantic Drift (warm ocean current) keeps temperatures milder than expected for 50–60°N latitude in winter (1).\n• The seas moderate temperature extremes — they warm slowly and cool slowly, keeping adjacent land temperatures mild. Continental interiors at similar latitudes (e.g. Moscow) experience far colder winters and hotter summers (1).\n• The proximity to the Atlantic means the UK receives frequent frontal rainfall throughout the year from depressions tracking in from the west, making the climate wet and cloudy — no clearly dry season (1).`,
        marks_scheme: '1 mark: temperate — moderate temperatures, mild winters and warm but not extreme summers. 1 mark: maritime — strong influence of surrounding seas, kept mild by North Atlantic Drift. 1 mark: seas moderate temperature extremes — warm and cool slowly. 1 mark: proximity to Atlantic brings frequent frontal rainfall throughout the year with no clearly dry season.'
      },
    ],
    red: [
      {
        q: '"Climate change is the greatest threat to the UK\'s future weather patterns." Evaluate this statement. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `Evidence supporting the statement:\n• The UK has experienced a clear warming trend — UK average temperature has risen by approximately 1°C since the 1970s; 2022 saw the first temperature above 40°C recorded in the UK (Coningsby, Lincolnshire, 40.3°C) (1).\n• Extreme rainfall events are increasing in frequency and intensity — climate models project a 30% increase in extreme daily rainfall by the 2070s, increasing flood risk (1).\n• Drier summers are projected for southern England, threatening water supply and agriculture — the Environment Agency warns of water shortages by 2050 (1).\nCounterarguments:\n• The UK's weather has always been highly variable and extreme events are not new — attribution of individual events to climate change is complex and debated (1).\n• Natural variability (e.g. the North Atlantic Oscillation) continues to be a major driver of year-to-year changes in UK weather, and its future behaviour is uncertain (1).\nConclusion:\n• Climate change represents a significant and growing threat to UK weather patterns, particularly regarding increased flooding, heatwaves, and water stress; however, the UK's complex interaction of oceanic, atmospheric, and topographic factors means there remains significant uncertainty in projections. It is therefore the most pressing long-term threat, but natural variability remains important in the short term (1).`,
        marks_scheme: 'Level 3 (5-6 marks): balanced evaluation supporting and challenging the statement with evidence and a clear conclusion about relative threat of climate change vs. natural variability. Level 2 (3-4 marks): some development of both sides with limited evidence. Level 1 (1-2 marks): basic points about climate change and UK weather. Credit: UK temperature risen ~1°C since 1970s; 40°C recorded 2022; extreme rainfall events increasing; natural variability (NAO) still a major driver.'
      },
      {
        q: 'To what extent are people at risk from extreme weather events able to prepare for them? Refer to examples from both LICs/MICs and HICs in your answer. [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `HICs — greater capacity to prepare:\n• Early warning systems — the UK Met Office provides multi-day storm warnings, allowing evacuations and flood defences to be activated (e.g. the Thames Barrier is closed in advance of forecast tidal surges) (1).\n• Flood defences and infrastructure — sea walls, storm drains, and flood barriers protect urban areas; buildings are constructed to withstand extreme events (1).\n• Insurance and disaster recovery funding — HICs can afford insurance and government relief, enabling faster recovery (e.g. UK government flood recovery fund) (1).\nLICs/MICs — more limited capacity:\n• Bangladesh — regularly affected by tropical cyclones and river flooding; despite improvements (e.g. cyclone shelters, early warning systems reducing deaths significantly since the 1991 cyclone killed 138,000), millions remain vulnerable due to poverty and informal settlements in flood-prone delta (1).\n• In the Philippines (MIC), Typhoon Haiyan (2013) killed 6,300 despite warnings — evacuation was incomplete due to poor transport, low trust in authorities, and poverty preventing people leaving livelihoods (1).\n• Climate change is increasing risk faster than LIC adaptation capacity — SIDS (Small Island Developing States) face existential threats from sea-level rise (e.g. Maldives) with limited financial or technological resources (1).\nConclusion:\n• Preparation is possible but highly unequal — wealth is the most important factor determining the capacity to prepare. International aid (e.g. Green Climate Fund) attempts to close this gap, but significant disparities remain; the poorest communities remain most at risk despite some local adaptation measures (1).\nBalance/nuance: Even within HICs, the poorest communities are most vulnerable — e.g. New Orleans (Hurricane Katrina, 2005) showed that wealth inequality within a wealthy country can severely limit effective preparation (1).`,
        marks_scheme: 'Level 3 (7-8 marks): balanced comparison of HIC and LIC/MIC preparation capacity with named examples and a conclusion addressing inequality. Level 2 (4-6 marks): covers both contexts but with limited comparative analysis. Level 1 (1-3 marks): basic points about preparation. Credit: UK Met Office early warning systems; Bangladesh cyclone shelters reducing deaths; Typhoon Haiyan incomplete evacuation due to poverty; wealth as the key determinant of preparation capacity.'
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 2.4 Climate Change — Cause and Effect */
  '2.4': {
    green: [
      {
        q: 'State two pieces of evidence that suggest global temperatures are rising.',
        marks: 2, tier: 'green',
        modelAnswer: `• Global average temperature records — the Earth's average surface temperature has increased by approximately 1.1°C since the pre-industrial period (1850–1900); 2024 was the warmest year on record according to the WMO, beating 2023 (1).\n• Retreating glaciers and ice sheets — the Greenland ice sheet is losing ~280 billion tonnes of ice per year; virtually all the world's mountain glaciers have retreated significantly since 1950 (e.g. Mer de Glace, France, has retreated over 2 km since 1870) (1).\n(Also accept: sea level rise; declining Arctic sea ice extent; earlier spring migration of species; coral bleaching.)`,
        marks_scheme: '1 mark: global average temperature has risen ~1.1°C since pre-industrial period; 2024 warmest year on record. 1 mark: retreating glaciers and ice sheets — Greenland losing ~280 billion tonnes/year; mountain glaciers retreated significantly.'
      },
      {
        q: 'State two natural causes of climate change.',
        marks: 2, tier: 'green',
        modelAnswer: `• Milankovitch cycles — variations in the Earth's orbit (eccentricity), axial tilt, and wobble (precession) change the amount and distribution of solar radiation received, causing glacial and interglacial periods over tens of thousands of years (1).\n• Volcanic eruptions — major eruptions inject sulfur dioxide (SO₂) into the stratosphere, forming aerosols that reflect solar radiation and cause short-term cooling (e.g. Mount Pinatubo, 1991, caused a global temperature drop of ~0.5°C) (1).\n(Also accept: solar output variation — sunspot cycles; changes in ocean circulation.)`,
        marks_scheme: '1 mark: Milankovitch cycles — variations in Earth\'s orbit and axial tilt change solar radiation distribution over tens of thousands of years. 1 mark: volcanic eruptions — inject SO₂ into stratosphere forming aerosols that reflect solar radiation causing short-term cooling.'
      },
      {
        q: 'State what is meant by the enhanced greenhouse effect.',
        marks: 2, tier: 'green',
        modelAnswer: `The natural greenhouse effect is essential for life — greenhouse gases (CO₂, methane, water vapour) trap solar radiation re-emitted from the Earth's surface as long-wave radiation, warming the atmosphere (1). The enhanced greenhouse effect refers to the increase in this warming due to rising concentrations of greenhouse gases from human activities (burning fossil fuels, deforestation, agriculture), trapping more heat and raising global temperatures beyond natural levels (1).`,
        marks_scheme: '1 mark: natural greenhouse effect — greenhouse gases trap solar radiation re-emitted from Earth warming the atmosphere. 1 mark: enhanced greenhouse effect — rising concentrations of greenhouse gases from human activities trap more heat raising temperatures beyond natural levels.'
      },
      {
        q: 'Identify two human activities that contribute to climate change and state the greenhouse gas each produces.',
        marks: 4, tier: 'green',
        modelAnswer: `• Burning fossil fuels (coal, oil, gas) — releases carbon dioxide (CO₂) from combustion; power stations, transport, and industry are the largest sources (1).\n• Agriculture — livestock (cattle, sheep) produce methane (CH₄) through enteric fermentation; rice paddies also produce methane; nitrogen fertilisers produce nitrous oxide (N₂O) (1).\n(Also accept: deforestation — reduces CO₂ absorption and releases stored carbon; cement production — releases CO₂ from heating limestone.)`,
        marks_scheme: '1 mark: burning fossil fuels — releases carbon dioxide (CO₂) from combustion. 1 mark: agriculture — livestock produce methane (CH₄); nitrogen fertilisers produce nitrous oxide (N₂O).'
      },
    ],
    amber: [
      {
        q: 'Explain how climate change is affecting people and environments in different parts of the world.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Arctic and polar regions — warming is 2–4× faster than the global average ("Arctic amplification"); ice loss threatens polar bear habitats; indigenous Arctic communities (e.g. Inuit) face loss of traditional hunting grounds and coastal erosion as permafrost thaws (1).\n• Small Island Developing States (SIDS) — sea-level rise threatens low-lying islands (e.g. Maldives, mean elevation < 1 m; Kiribati) with inundation and salinisation of freshwater supplies; the Maldives has considered buying land abroad as a contingency and is building raised islands such as Hulhumalé (1).\n• Sub-Saharan Africa — more frequent and severe droughts reduce agricultural yields; the Sahel is experiencing desertification; food insecurity affects millions — yields of some staple crops could fall significantly by 2050 without adaptation (1).\n• UK/Northern Europe — longer growing seasons and warmer summers bring some agricultural benefits; however, increased flood risk from more intense rainfall events and rising sea levels threatens coastal communities and infrastructure (1).`,
        marks_scheme: '1 mark: Arctic regions warming 2–4× faster; ice loss threatens habitats and Inuit communities lose hunting grounds. 1 mark: SIDS face inundation and salinisation of freshwater — Maldives purchased land in India as contingency. 1 mark: sub-Saharan Africa faces more frequent severe droughts — IPCC projects yields could fall 25% by 2050. 1 mark: UK/Northern Europe faces increased flood risk from intense rainfall and sea level rise despite some agricultural benefits.'
      },
      {
        q: 'Explain the mitigation strategies used to reduce the causes of climate change.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Renewable energy transition — replacing fossil fuel power stations with solar, wind, and tidal energy reduces CO₂ emissions; the UK generated over 40% of its electricity from renewables in 2023 (1).\n• Energy efficiency — insulating buildings, improving vehicle fuel standards, and LED lighting reduce overall energy demand and therefore emissions without reducing economic activity (1).\n• Carbon capture and storage (CCS) — capturing CO₂ from power stations and industrial processes and storing it underground in geological formations; currently limited in scale and expensive but potentially significant at large scale (1).\n• International agreements — the Paris Agreement (2015) committed 196 countries to limiting global warming to well below 2°C; countries submit Nationally Determined Contributions (NDCs) to reduce emissions, though current commitments are insufficient to meet the target (1).`,
        marks_scheme: '1 mark: renewable energy — replacing fossil fuel power stations with solar, wind, tidal; UK generated 40%+ from renewables in 2023. 1 mark: energy efficiency — insulating buildings, improving fuel standards, LED lighting reduce energy demand. 1 mark: carbon capture and storage — capturing CO₂ from power stations and storing underground. 1 mark: international agreements — Paris Agreement committed 196 countries to limiting warming to well below 2°C.'
      },
      {
        q: 'Explain the adaptation strategies used to manage the impacts of climate change.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Flood defences — sea walls, flood barriers, and managed retreat protect coastal communities from sea-level rise and increased flooding; the Netherlands' Delta Works is the world's most advanced coastal protection system (1).\n• Crop adaptation — scientists are developing drought- and heat-resistant crop varieties; farmers shift to different crops and adjust planting seasons in response to changing conditions (e.g. wine grapes now grown commercially in southern England) (1).\n• Water management — rainwater harvesting, desalination, and water recycling help communities adapt to reduced rainfall; the Murray-Darling Basin Plan in Australia regulates water use in response to climate-driven drought (1).\n• Emergency planning — countries in high-risk areas develop heatwave action plans, flood early warning systems, and drought contingency plans to protect vulnerable populations (e.g. UK National Adaptation Programme) (1).`,
        marks_scheme: '1 mark: flood defences — sea walls and managed retreat protect coastal communities from sea-level rise. 1 mark: crop adaptation — drought/heat-resistant varieties; farmers shift crops and planting seasons. 1 mark: water management — rainwater harvesting, desalination, and water recycling for communities with reduced rainfall. 1 mark: emergency planning — heatwave action plans, flood early warning systems, drought contingency plans.'
      },
      {
        q: 'Explain why it is difficult to reach international agreements on tackling climate change.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Conflicting national interests — developing countries argue they should not be denied the right to use cheap fossil fuels for economic growth as HICs did; HICs are reluctant to pay the full cost of transition (1).\n• Short-term vs. long-term thinking — democratic governments focus on short election cycles; the costs of reducing emissions are immediate while the benefits (avoiding future warming) are distant and uncertain, making strong action politically difficult (1).\n• Economic costs — fossil fuel industries lobby against regulation; countries dependent on coal, oil, and gas exports (e.g. Saudi Arabia, Russia) resist international agreements that would reduce demand (1).\n• Lack of enforcement — international agreements are voluntary; the Paris Agreement has no binding sanctions for non-compliance; countries that miss targets face no penalties (1).\n• Inequity of responsibility — the richest nations have emitted most greenhouse gases historically but the impacts are felt disproportionately by the poorest, least-responsible nations; disputes over "loss and damage" payments delay agreements (1).`,
        marks_scheme: '1 mark: conflicting national interests — developing countries argue right to use fossil fuels as HICs did; HICs reluctant to pay full transition cost. 1 mark: short-term political thinking — costs of reducing emissions immediate but benefits distant, making strong action politically difficult. 1 mark: economic costs — fossil fuel industries lobby against regulation; resource-dependent countries resist agreements. 1 mark: lack of enforcement — Paris Agreement has no binding sanctions; disputes over loss and damage payments delay agreements. 1 mark: inequity of responsibility — richest nations emitted most but impacts felt by poorest.'
      },
    ],
    red: [
      {
        q: 'Evaluate how far individual actions can make a difference to climate change. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `Potential impact of individual action:\n• Dietary change — switching from a meat-heavy to a plant-based diet can reduce an individual's food-related carbon footprint by up to 73%; if adopted widely, global food emissions could fall by 50% (1).\n• Transport choices — choosing public transport, cycling, or an electric vehicle over a petrol car can save 1–2 tonnes of CO₂ per year per person; avoiding long-haul flights can reduce personal footprint by 3–5 tonnes (1).\n• Home energy — insulation, switching to renewable electricity, and low-carbon heating (heat pumps) can reduce household emissions by 2–5 tonnes/year (1).\nLimitations:\n• Systemic constraints — individual choices are limited by available infrastructure; without reliable public transport, renewable grids, or affordable EVs, individuals cannot easily reduce emissions (1).\n• Scale — a 2017 report linked about 70% of industrial greenhouse gas emissions since 1988 to just 100 fossil fuel producers; individual consumption accounts for a much smaller proportion; systemic economic change is required (1).\n• Inequality — green choices (EVs, heat pumps, organic food) are more expensive; only the affluent can easily adopt low-carbon lifestyles, limiting the potential reach of individual action (1).\nConclusion:\n• Individual action is necessary but not sufficient; it is most effective when enabled and encouraged by government policy (carbon pricing, subsidies for green technology, regulation), which can change the systems within which individuals make choices. The framing of climate change as primarily an individual responsibility has been criticised as deflecting attention from the systemic changes needed (1, for developed, nuanced conclusion).`,
        marks_scheme: 'Level 3 (5-6 marks): balanced evaluation of potential impact of individual actions and their systemic limitations, with a nuanced conclusion about the relationship between individual and structural change. Level 2 (3-4 marks): discusses both sides with some specific examples. Level 1 (1-2 marks): basic points about individual actions. Credit: dietary change can reduce food footprint by 73%; transport choices save 1–2 tonnes CO₂/year; about 70% of industrial emissions since 1988 linked to 100 fossil fuel producers, limiting individual impact; green choices more expensive limiting reach.'
      },
      {
        q: '"The impacts of climate change will be felt most severely by the world\'s poorest people." Evaluate this statement. [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `Evidence supporting the statement:\n• Agricultural vulnerability — LIC populations in tropical regions (sub-Saharan Africa, South and South-East Asia) depend on rain-fed subsistence agriculture; even small changes in temperature and rainfall can cause crop failure and food insecurity; hundreds of millions of smallholder farmers are at risk (1).\n• Exposure to climate hazards — LIC communities have lower adaptive capacity; SIDS like Kiribati and Tuvalu face existential threat from sea-level rise with no resources for coastal defence (1).\n• Health impacts — rising temperatures increase malaria, dengue, and cholera risk; LIC health systems lack capacity to respond (1).\n• Climate migration — the World Bank projects 216 million internal climate migrants by 2050, overwhelmingly in sub-Saharan Africa, South Asia, and Latin America; LIC governments cannot easily manage this displacement (1).\nCounterarguments / complexity:\n• HICs are not immune — European heatwaves (2003: ~70,000 deaths; 2022: ~60,000 excess deaths) show that wealthy countries also face severe impacts, particularly for vulnerable elderly populations (1).\n• Some LICs face less severe impacts — sub-polar and mountainous regions may benefit from longer growing seasons and reduced heating costs (1).\n• Arctic indigenous communities (HICs — Canada, Norway) face profound cultural and livelihood impacts from warming despite their countries' wealth (1).\nConclusion:\n• The statement is broadly correct — the injustice of climate change is that those who have contributed least (LICs are responsible for a fraction of historical emissions) face the worst impacts and have the least capacity to adapt. The concept of "climate justice" has entered international negotiations; wealthy nations bear a moral responsibility to support LIC adaptation. However, the impacts of climate change are becoming increasingly universal, and no country will be immune from severe consequences (1).`,
        marks_scheme: 'Level 3 (7-8 marks): balanced evaluation of evidence supporting and complicating the statement with named examples and a conclusion about climate justice. Level 2 (4-6 marks): covers both supporting and complicating evidence with some specific examples. Level 1 (1-3 marks): basic points about differential impacts. Credit: LIC subsistence farmers face crop failure; SIDS face existential threat from sea-level rise; European heatwaves killed ~70,000 in 2003; World Bank projects 216 million climate migrants by 2050 overwhelmingly in LICs.'
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 3.1 How Ecosystems Function */
  '3.1': {
    green: [
      {
        q: 'State two characteristics of the tropical rainforest climate.',
        marks: 2, tier: 'green',
        modelAnswer: `• High temperatures throughout the year — typically 26–28°C with very little seasonal variation, as the equatorial location means the sun is always high in the sky (1).\n• High and reliable rainfall — typically 2,000 mm or more per year, falling throughout the year and often as convectional afternoon storms (1).`,
        marks_scheme: '1 mark: high temperatures throughout year (~26–28°C) with little seasonal variation. 1 mark: high and reliable rainfall (2000 mm+/year) falling throughout the year, often as convectional afternoon storms.'
      },
      {
        q: 'State two characteristics of hot semi-arid grassland (savanna) climate.',
        marks: 2, tier: 'green',
        modelAnswer: `• Hot all year, with mean temperatures of roughly 25–30°C (1).\n• A single wet season separated by a long dry season of about 5–7 months, with annual rainfall of roughly 500–1,500 mm (1).\n(Also accept: rainfall is unreliable and varies greatly from year to year.)`,
        marks_scheme: '1 mark: hot all year, roughly 25–30°C. 1 mark: one wet season and a long dry season of about 5–7 months, roughly 500–1,500 mm a year.'
      },
      {
        q: 'Identify two ways in which plants in the tropical rainforest are adapted to the environment.',
        marks: 2, tier: 'green',
        modelAnswer: `• Drip tips — leaves have pointed tips to shed heavy rainfall quickly, preventing the growth of algae and bacteria that would damage the leaf (1).\n• Buttress roots — large flared roots support the tall emergent trees and allow them to access nutrients from the thin surface soil (1).\n(Also accept: smooth bark to shed rain; waxy leaf surfaces; epiphytes growing on branches to reach light; lianas climbing towards the canopy.)`,
        marks_scheme: '1 mark: drip tips — leaves have pointed tips to shed heavy rainfall quickly. 1 mark: buttress roots — large flared roots support tall trees and access surface nutrients.'
      },
      {
        q: 'Name and describe the layers of the tropical rainforest.',
        marks: 4, tier: 'green',
        modelAnswer: `• Emergent layer — tallest trees (40–60 m) rising above the main canopy, exposed to full sun and wind (1).\n• Canopy layer — dense, continuous layer of branches and leaves at ~20–30 m, intercepting most sunlight and rainfall (1).\n• Understorey — shade-tolerant shrubs and smaller trees below the canopy; little wind, high humidity (1).\n• Forest floor — very little light reaches here; decomposers rapidly recycle nutrients from dead organic matter; ground plants adapted to low light (1).`,
        marks_scheme: '1 mark: emergent layer — tallest trees 40–60 m rising above canopy, exposed to full sun. 1 mark: canopy layer — dense continuous layer at 20–30 m intercepting most sunlight and rainfall. 1 mark: understorey — shade-tolerant shrubs and smaller trees below canopy, high humidity. 1 mark: forest floor — very little light, decomposers rapidly recycle nutrients from dead matter.'
      },
    ],
    amber: [
      {
        q: 'Explain how nutrients are cycled in the tropical rainforest ecosystem.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The nutrient cycle in the tropical rainforest is rapid and efficient — almost all nutrients are stored in the biomass (living plants) rather than the soil (1).\n• Leaf litter and dead organic matter fall to the forest floor and are decomposed very quickly by bacteria and fungi in the hot, humid conditions — nutrients are released into the thin topsoil (1).\n• Plant roots near the surface quickly absorb nutrients before they can be washed away (leached) by heavy rainfall — the cycle keeps nutrients in the living system (1).\n• The soil is therefore surprisingly infertile — it is thin, acidic, and nutrient-poor; when the forest is cleared, nutrients are lost rapidly through leaching, making the land unsuitable for farming within a few years (1).`,
        marks_scheme: '1 mark: nutrient cycle is rapid — almost all nutrients stored in biomass rather than soil. 1 mark: leaf litter decomposed quickly by bacteria and fungi releasing nutrients into thin topsoil. 1 mark: plant roots near surface quickly absorb nutrients before leaching by heavy rainfall. 1 mark: when forest is cleared nutrients are rapidly lost through leaching making land unsuitable for farming.'
      },
      {
        q: 'Explain how the interdependence of climate, vegetation, animals and soils works in a hot semi-arid grassland.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Seasonal rainfall supports grasses whose growing point sits at the base of the plant, so they can be cropped without being killed (1).\n• Large migrating herds such as wildebeest and zebra graze that grass and move on, following the rain (1).\n• Their dung and urine return nitrogen and other nutrients to the soil, maintaining its fertility (1).\n• That fertility supports the next season of grass growth, and grazing also keeps woody scrub from taking over — so breaking any one link changes the whole system (1).`,
        marks_scheme: '1 mark: seasonal rainfall supports grasses that grow from the base. 1 mark: migrating herds graze the grass and move on. 1 mark: dung returns nutrients to the soil. 1 mark: soil fertility supports the next season of growth / grazing suppresses scrub.'
      },
      {
        q: 'Explain how energy flows through an ecosystem and why food chains are short.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Energy enters the ecosystem as sunlight and is converted into chemical energy by producers through photosynthesis (1).\n• It then passes along a one-way chain from producers to primary, secondary and tertiary consumers — unlike nutrients, energy does not cycle (1).\n• Only about 10% of the energy at one trophic level is passed to the next; the rest is lost in respiration, movement, body heat and waste (1).\n• After four or five links too little energy remains to support another level, which is also why top predators are far less numerous than producers (1).`,
        marks_scheme: '1 mark: energy enters as sunlight and is fixed by producers. 1 mark: it passes one way along trophic levels and does not cycle. 1 mark: about 10% passes to each next level, the rest lost as heat, respiration, movement and waste. 1 mark: too little energy remains after four or five links.'
      },
      {
        q: 'Explain why a small-scale UK ecosystem may need active management. Refer to a named example.',
        marks: 4, tier: 'amber',
        modelAnswer: `• At Kenfig National Nature Reserve in South Wales, the dune system has become too stable — the proportion of bare, mobile sand has fallen sharply (1).\n• Grazing by rabbits and livestock has largely stopped, so vegetation is no longer cropped short and scrub and coarse grasses have spread (1).\n• Nitrogen deposition from vehicle and industrial emissions fertilises naturally poor sand, favouring vigorous coarse plants over specialists (1).\n• Rare species such as the fen orchid need open, damp, low-nutrient ground, so without intervention they are shaded out — management therefore involves scrub clearance, turf stripping and reintroduced grazing (1).\n(Credit any named UK small-scale ecosystem with equivalent detail.)`,
        marks_scheme: '1 mark: name the ecosystem and state the management problem. 1 mark: loss of grazing allows vegetation to build up. 1 mark: nitrogen deposition favours coarse species over specialists. 1 mark: rare species need the earlier successional conditions, so intervention recreates them.'
      },
    ],
    red: [
      {
        q: 'Evaluate the usefulness of comparing two contrasting biomes when studying how ecosystems function. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `Arguments that comparison is useful:\n• It separates what is general from what is particular. Both rainforest and savanna cycle nutrients, but the rainforest holds almost all of them in the biomass while the savanna holds more in the soil — so a student learns that the store, not the process, is what climate controls (2).\n• It makes the role of climate visible. The two biomes sit next to each other in latitude, yet one has rain all year and the other a five to seven month dry season, and almost every difference in soils, vegetation and animal life follows from that (2).\n• It supports evaluation questions, because the contrast supplies ready comparisons of decomposition speed, biodiversity, energy distribution and vulnerability to human use (1).\n\nLimitations:\n• Two biomes cannot represent all of them — tundra and temperate forest behave differently again (1).\n• Comparison can encourage over-simple generalisation, for example treating all rainforest soils as infertile when fertility varies considerably within the biome (1).\n\nJudgement: Comparison is the most efficient way to understand why biomes differ, because it forces attention onto the controlling variable — climate — rather than onto lists of species. Its value depends on choosing two biomes that differ in one major respect rather than in every respect.`,
        marks_scheme: 'Level 3 (5–6): balanced evaluation with specific biome evidence and a supported judgement. Level 2 (3–4): some comparison with limited evidence. Level 1 (1–2): basic points. Credit: comparison isolates the role of climate; shows nutrient stores differ though the process is the same; supplies contrasts in decomposition, biodiversity and energy distribution; limitation that two biomes do not represent all.'
      },
      {
        q: '"Humans should be treated as part of an ecosystem, not as something separate from it." Discuss, using hot semi-arid grassland as your example. [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `Evidence that humans are part of the ecosystem:\n• Pastoralists such as the Maasai and Fulani have grazed livestock in the savanna for centuries, moving between seasonal pastures and water points in a pattern that mirrors the movement of the wild herds (2).\n• Human-set dry season fires are part of the fire regime that clears dead grass, releases nutrients and stops woody scrub invading. Suppress fire entirely and the grassland changes character (2).\n• Livestock grazing performs the same ecological function as wild grazing — cropping the grass and returning nutrients in dung — so removing people can itself degrade the habitat (1).\n\nEvidence that human activity is different in kind:\n• The scale and speed of modern change is unlike anything in the ecosystem's history: fencing, land subdivision, borehole drilling and conversion to cropland alter the system faster than it can adjust (2).\n• Some pressures have no ecological analogue at all — commercial charcoal production for distant urban markets, or poaching driven by international demand for ivory (1).\n\nJudgement: The distinction that matters is not human versus natural but mobile versus fixed. Traditional pastoralism worked because it moved, matching the seasonal and unreliable nature of savanna productivity. Modern pressures mostly involve fixing people, animals or boundaries in place. Treating humans as part of the ecosystem is therefore the more useful framing, because it directs management towards restoring mobility and rotation rather than towards excluding people — which is exactly what community conservancies attempt.`,
        marks_scheme: 'Level 4 (7–8): sustained discussion of both positions with specific savanna evidence and a clear, reasoned judgement. Level 3 (5–6): both sides with some evidence. Level 2 (3–4): mostly one-sided or descriptive. Level 1 (1–2): basic points. Credit: pastoralism and human-set fire as ecosystem processes; grazing as an ecological function; scale and speed of modern change; pressures with no ecological analogue; judgement distinguishing mobility from fixity.'
      },
    ],
  },
  /* ─────────────────────────────────────────────────────────── 3.2 Ecosystems Under Threat */
  '3.2': {
    green: [
      {
        q: 'State two reasons why tropical rainforests are important at a global scale.',
        marks: 2, tier: 'green',
        modelAnswer: `• Carbon store — tropical rainforests store approximately 250 billion tonnes of carbon in their biomass and soils; they act as major carbon sinks, absorbing CO₂ and helping regulate global climate (1).\n• Biodiversity — they are home to over 50% of the world's species despite covering only around 6% of Earth's land surface, making them critical reservoirs of biodiversity (1).\n(Also accept: oxygen production; water cycle regulation; medicines derived from rainforest plants.)`,
        marks_scheme: '1 mark: carbon store — store ~250 billion tonnes of carbon, acting as major carbon sinks. 1 mark: biodiversity — home to over 50% of world species despite covering only 6% of land surface.'
      },
      {
        q: 'State two ways in which people use ecosystems to obtain resources.',
        marks: 2, tier: 'green',
        modelAnswer: `• Food — clearing land for crops and pasture, grazing livestock, hunting, fishing and gathering wild foods (1).\n• Energy — collecting firewood and charcoal, establishing biofuel plantations, or flooding valleys for hydroelectric reservoirs (1).\n(Also accept: water — boreholes, river abstraction for irrigation, dams and transfer schemes; materials — timber, mining and quarrying.)`,
        marks_scheme: '1 mark: one use with a named resource, e.g. food through clearing land for crops or grazing. 1 mark: a second, different use, e.g. energy through firewood, charcoal or HEP.'
      },
      {
        q: 'State two reasons why ecosystems are conserved.',
        marks: 2, tier: 'green',
        modelAnswer: `• Economic — ecosystems produce marketable goods such as timber, grazing and tourism income, and a degraded ecosystem produces less of all of them (1).\n• Environmental — services such as carbon storage, water cycle regulation, flood control and pollination would be extremely expensive to replace artificially (1).\n(Also accept: social and cultural value to the communities who live there; the ethical argument that species have a right to exist; scientific value, including undiscovered medicines.)`,
        marks_scheme: '1 mark: one valid reason with brief development. 1 mark: a second, different reason with brief development.'
      },
      {
        q: 'Identify two human activities that damage hot semi-arid grassland.',
        marks: 2, tier: 'green',
        modelAnswer: `• Overgrazing — more livestock graze the same land than the grass can support, so it is cropped faster than it regrows and the soil is left exposed (1).\n• Fuelwood and charcoal cutting — trees and shrubs are removed for cooking fuel and for urban charcoal markets, taking away shade, deep roots and windbreaks (1).\n(Also accept: conversion of grassland to cropland; fencing and land subdivision; borehole drilling that concentrates livestock; changed fire regimes; poaching and predator removal.)`,
        marks_scheme: '1 mark: one named activity with brief explanation of the damage. 1 mark: a second, different named activity with brief explanation.'
      },
    ],
    amber: [
      {
        q: 'Explain the causes of deforestation in tropical rainforests. Refer to a named example.',
        marks: 4, tier: 'amber',
        modelAnswer: `(Amazon, Brazil / Congo Basin / Borneo — credit any named example with specific data.)\n• Commercial farming — in the Amazon, large-scale soy bean farming and cattle ranching are the leading causes; Brazil exports millions of tonnes of soy annually, driving continued forest clearance (1).\n• Logging — both legal and illegal logging for valuable hardwoods (mahogany, teak) is widespread; Indonesia lost around 25 million hectares of forest between 1990 and 2015 (1).\n• Mining — the Amazon contains large deposits of iron ore, gold, and bauxite; open-cast mining clears forest and contaminates rivers with heavy metals (e.g. Serra Pelada, Brazil) (1).\n• Road building — infrastructure projects open up previously inaccessible forest to settlers, loggers, and farmers; the Trans-Amazonian Highway opened large areas to clearance (1).`,
        marks_scheme: '1 mark: commercial farming — soy and cattle ranching leading causes in Amazon. 1 mark: logging — legal and illegal removal of valuable hardwoods. 1 mark: mining — open-cast mining for iron ore, gold, bauxite clears forest and contaminates rivers. 1 mark: road building — infrastructure projects open up previously inaccessible forest.'
      },
      {
        q: 'Explain the effects of ecosystem damage at the local scale and at the global scale.',
        marks: 4, tier: 'amber',
        modelAnswer: `Local scale:\n• Soil is lost — nutrients held in biomass are removed with the vegetation, surface crusting cuts infiltration, and topsoil is washed into gullies or blown away (1).\n• Biodiversity falls — habitat is fragmented into patches too small to hold viable populations, specialists with narrow niches disappear first, and food webs simplify (1).\n\nGlobal scale:\n• Carbon stored in biomass and soils is released, weakening a major carbon sink and adding to global warming (1).\n• A disproportionate share of the world's species is lost — tropical rainforest alone holds over half of them on about 6% of the land surface — and reduced food production in already food-insecure regions drives displacement and migration (1).`,
        marks_scheme: '1 mark: a local soil or water effect. 1 mark: a local biodiversity effect. 1 mark: a global climate effect through carbon release. 1 mark: a global biodiversity, food security or migration effect.'
      },
      {
        q: 'Explain the effects of deforestation on the local environment and the people who depend on the rainforest.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Loss of biodiversity — deforestation destroys habitat, driving species to extinction before scientists can even identify them; the world's rainforests are estimated to lose up to 137 species per day (1).\n• Soil erosion — without tree roots holding soil together and interception reducing raindrop impact, heavy rain rapidly erodes unprotected topsoil; rivers become choked with sediment (1).\n• Disruption of the water cycle — reduced transpiration leads to less moisture in the atmosphere, decreasing regional rainfall and potentially turning cleared areas into savannah (1).\n• Indigenous communities — groups such as the Kayapo in Brazil lose their homeland and traditional way of life; forced displacement causes cultural loss, poverty, and health impacts (1).\n• Local communities who depended on forest products (non-timber forest products, bushmeat, medicines) lose their livelihoods, increasing poverty (1).`,
        marks_scheme: '1 mark: loss of biodiversity — destroys habitat driving species to extinction. 1 mark: soil erosion — without tree roots heavy rain rapidly erodes unprotected topsoil. 1 mark: disruption of water cycle — reduced transpiration decreases regional rainfall. 1 mark: indigenous communities lose homeland and traditional way of life. 1 mark: local communities lose livelihoods from forest products.'
      },
      {
        q: 'Describe and explain one strategy used to manage tropical rainforests sustainably.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Ecotourism — allows visitors to experience the rainforest with minimal environmental impact, providing income for local communities and creating an economic incentive to protect the forest (1).\n• Revenue from ecotourism can fund conservation, ranger patrols to prevent illegal logging and poaching, and education programmes (1).\n• Successful examples include the Amazon jungle lodges of the Peruvian Amazon, where local indigenous guides lead tours — communities earn more from keeping the forest standing than clearing it (1).\n• However, ecotourism can be limited in scale — it cannot replace the economic returns from large-scale farming or mining for many governments — and poorly managed tourism can itself damage sensitive ecosystems (1).`,
        marks_scheme: '1 mark: ecotourism allows visitors to experience the forest with minimal environmental impact, providing income for local communities. 1 mark: revenue funds conservation, ranger patrols, and education programmes. 1 mark: successful examples where local guides earn more from keeping forest standing than clearing it. 1 mark: limitations — cannot replace returns from large-scale farming; poorly managed tourism can damage ecosystems.'
      },
    ],
    red: [
      {
        q: 'Evaluate the extent to which tropical rainforests can be used sustainably. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `Evidence that sustainable use is possible:\n• Selective logging — removing only mature trees while leaving the structure of the forest intact allows regeneration; certified timber (FSC — Forest Stewardship Council) schemes exist in Brazil and Indonesia (1).\n• REDD+ (Reducing Emissions from Deforestation and Forest Degradation) — international payments to developing countries that protect their forests; Brazil's Amazon Fund, a REDD+-style scheme backed mainly by Norway, rewarded Brazil after deforestation fell by about 80% from the 2004 peak by 2012 (mainly through stronger monitoring and law enforcement) (1).\n• Ecotourism and non-timber forest product harvesting (nuts, fruits, rubber) can generate income without clearing — e.g. Brazil nut industry in the Amazon (1).\nLimitations:\n• Economic pressures are enormous — debt-laden countries like Brazil and Indonesia face strong incentives to convert forest to agricultural land; soy and cattle are far more profitable per hectare than sustainable forestry (1).\n• Enforcement is extremely difficult in remote rainforest regions — illegal logging and land clearance continues despite laws (e.g. Amazon deforestation under Bolsonaro government rose sharply) (1).\nConclusion:\n• Sustainable use is technically possible and examples demonstrate it can work at a local scale, but global economic systems continue to drive unsustainable deforestation; without stronger international frameworks, financial incentives, and enforcement, truly sustainable management of rainforests at scale remains aspirational rather than a reality (1).`,
        marks_scheme: 'Level 3 (5-6 marks): balanced evaluation of evidence that sustainable use is possible and limitations, with named examples, and a realistic overall conclusion. Level 2 (3-4 marks): discusses both possibilities and limitations with some evidence. Level 1 (1-2 marks): basic points about sustainable use. Credit: selective logging and FSC certification; REDD+ international payments (Amazon deforestation fell 80%); ecotourism and non-timber products; economic pressures and enforcement difficulty.'
      },
      {
        q: '"The economic development needs of tropical countries outweigh the arguments for conserving rainforests." Discuss. [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `Arguments supporting the statement (development):\n• Countries like Brazil and Indonesia argue that developed nations cleared their own forests for economic growth centuries ago — it is unfair to deny developing countries the same right to use their resources for poverty reduction (1).\n• Agriculture (soy, palm oil, cattle) generates billions in export income and employs millions of people — Brazil's wider agribusiness sector accounts for around a quarter of GDP (1).\n• Mining and logging provide government revenue that funds schools, hospitals, and infrastructure in countries where many still lack basic services (1).\nArguments against (conservation):\n• Rainforests provide ecosystem services of incalculable global value — climate regulation, water cycling, biodiversity — that benefit all humanity, not just the host nation (1).\n• Once cleared, rainforests are very difficult to restore — the nutrient cycle breaks down, soils erode, and biodiversity losses are largely irreversible (1).\n• The economic benefits of forest clearance are often short-term — soils exhausted within years, forcing further clearance; sustainable forest use offers longer-term income (1).\n• Indigenous peoples' rights — clearance often violates the rights of communities whose livelihoods and cultures depend on the forest (1).\nConclusion:\n• A binary choice is a false dichotomy; sustainable development models exist that can provide economic growth while protecting forest. The real challenge is creating international financial systems that make conservation more profitable than destruction — until that happens, economic pressures will continue to drive deforestation. Rich nations have a particular responsibility to fund conservation as they benefit most from the ecosystem services rainforests provide (1).`,
        marks_scheme: 'Level 3 (7-8 marks): balanced discussion of development needs vs. conservation arguments with named examples and a nuanced conclusion rejecting the binary framing. Level 2 (4-6 marks): covers both sides but limited development or examples. Level 1 (1-3 marks): basic points on one side. Credit: developing countries argue right to use resources for poverty reduction; ecosystem services benefit all humanity; economic benefits of clearance are short-term; indigenous peoples\'s rights.'
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 3.3 Water Resources and Management */
  '3.3': {
    green: [
      {
        q: 'State two reasons why global demand for water is increasing.',
        marks: 2, tier: 'green',
        modelAnswer: `• Population growth — the global population is projected to reach 9.7 billion by 2050; more people require more water for drinking, sanitation, and food production (1).\n• Economic development — as countries industrialise and living standards rise, per capita water consumption increases significantly — agriculture for export crops, manufacturing, and increased meat consumption all require more water (1).\n(Also accept: climate change reducing availability; urbanisation increasing domestic demand; expansion of irrigated agriculture.)`,
        marks_scheme: '1 mark: population growth — global population projected to reach 9.7 billion by 2050 requiring more water. 1 mark: economic development — as living standards rise, per capita consumption increases; agriculture and manufacturing require more water.'
      },
      {
        q: 'Identify two areas of the world that face water scarcity and explain why.',
        marks: 4, tier: 'green',
        modelAnswer: `• Middle East and North Africa (e.g. Saudi Arabia, Jordan) — located in arid/semi-arid zones with very low natural rainfall; high rates of population growth and economic development increase demand beyond sustainable supply; groundwater aquifers are being over-extracted (1).\n• Sub-Saharan Africa (e.g. Ethiopia, Kenya) — low rainfall and high variability from climate change; lack of water infrastructure (dams, pipelines, treatment plants) means much rainfall is not captured; 400 million people lack access to safe drinking water (1).`,
        marks_scheme: '1 mark: Middle East and North Africa — arid zone with low rainfall; rapid population growth and over-extraction of groundwater. 1 mark: sub-Saharan Africa — low and variable rainfall; lack of water infrastructure; 400 million people lack safe drinking water.'
      },
      {
        q: 'State what is meant by water stress.',
        marks: 2, tier: 'green',
        modelAnswer: `Water stress occurs when demand for water exceeds the available water supply in terms of quantity or quality, or when poor water quality restricts its use (1). A country is considered water stressed when its annual renewable water supply falls below 1,700 m³ per person; below 1,000 m³ is water scarcity; below 500 m³ is absolute scarcity — e.g. Kuwait and Bahrain (1).`,
        marks_scheme: '1 mark: water stress occurs when demand exceeds available water supply in quantity or quality. 1 mark: country is water stressed below 1,700 m³ per person/year; water scarcity below 1,000 m³; absolute scarcity below 500 m³.'
      },
      {
        q: 'State two ways in which water can be managed sustainably.',
        marks: 2, tier: 'green',
        modelAnswer: `• Water conservation — reducing leakage in distribution systems (UK water companies lose ~3 billion litres/day through leaky pipes), installing water-efficient appliances, and metering to encourage reduced consumption (1).\n• Rainwater harvesting — collecting and storing rainwater from roofs and surfaces for domestic use or irrigation, reducing pressure on centralised water supplies and aquifers (1).\n(Also accept: greywater recycling; drought-resistant crops; drip irrigation; restoring wetlands.)`,
        marks_scheme: '1 mark: water conservation — reducing pipe leakage, installing water-efficient appliances, and metering. 1 mark: rainwater harvesting — collecting and storing rainwater from roofs to reduce pressure on centralised supplies.'
      },
    ],
    amber: [
      {
        q: 'Explain the causes of water insecurity in LICs.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Physical factors — many LICs are located in semi-arid or arid regions where rainfall is naturally low and unreliable; climate change is making rainfall more variable and droughts more severe (1).\n• Lack of water infrastructure — without dams, reservoirs, pipelines, and water treatment plants, rainfall cannot be captured and stored effectively; groundwater cannot be accessed safely without pumps and equipment (1).\n• Poverty — LIC governments cannot afford to invest in water infrastructure; households cannot afford piped water connections, relying on unsafe surface water or expensive water vendors (1).\n• Population pressure — rapid population growth increases demand faster than supply can be expanded; growing urban areas in LICs often lack the piped water infrastructure to serve new arrivals in informal settlements (1).`,
        marks_scheme: '1 mark: many LICs in semi-arid regions where rainfall is naturally low and climate change increases variability. 1 mark: lack of water infrastructure — without dams, pipelines, and treatment plants rainfall cannot be captured effectively. 1 mark: poverty — LIC governments cannot afford infrastructure; households rely on unsafe surface water or expensive vendors. 1 mark: population pressure — rapid growth increases demand faster than supply can be expanded.'
      },
      {
        q: 'Explain the social and environmental impacts of water insecurity.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Health — drinking unsafe water causes ~1.5 million deaths per year from cholera, typhoid, and diarrhoea, mostly affecting children under 5 in LICs; the absence of sanitation linked to water scarcity causes further disease (1).\n• Education — in water-scarce communities, the task of collecting water (often walking 3–5 km to water sources) falls primarily on women and girls, reducing time available for education and economic activity (1).\n• Agriculture — water scarcity reduces irrigation, causing crop failure and food insecurity; desertification linked to over-extraction of groundwater reduces productive land permanently (1).\n• Ecosystem impacts — river water over-extraction depletes flows, damaging wetland habitats, reducing fish populations, and concentrating pollutants; the Aral Sea (Central Asia) was reduced to 10% of its original size by Soviet-era irrigation, causing a major ecological disaster (1).`,
        marks_scheme: '1 mark: health — unsafe water causes ~1.5 million deaths/year from cholera, typhoid, diarrhoea, mainly children under 5. 1 mark: education — water collection (often 3–5 km) falls on women and girls, reducing time for education. 1 mark: agriculture — water scarcity reduces irrigation causing crop failure and food insecurity. 1 mark: ecosystem impacts — over-extraction depletes river flows, damages wetlands, reduces fish populations (e.g. Aral Sea reduced to 10% of original size).'
      },
      {
        q: 'Describe and evaluate one large-scale water management scheme.',
        marks: 5, tier: 'amber',
        modelAnswer: `(Three Gorges Dam, China / Aswan High Dam, Egypt / Colorado River Compact — credit any appropriate scheme.)\n(Three Gorges Dam, Yangtze River, China):\n• The dam is 185 m high and 2,335 m long; its reservoir extends 600 km upstream; it provides 22,500 MW of hydroelectric power (equivalent to 11 coal-fired power stations) and controls flooding for 15 million people living in the Yangtze flood plain (1).\n• Benefits: China's largest renewable energy source, reducing coal consumption; flood control protecting millions; improved navigation on the Yangtze River (1).\n• Social costs: 1.3 million people were displaced and resettled, many to poorer land; cultural heritage sites flooded (1).\n• Environmental costs: disrupted river sediment supply, damaging downstream ecosystems; blocked fish migration (Yangtze river dolphin now extinct); reservoir-induced landslides and pollution (1).\n• Evaluation: significant economic and flood-control benefits for China's development, but severe social and environmental costs; the resettlement programme was widely criticised for inadequate compensation (1).`,
        marks_scheme: '1 mark: Three Gorges Dam — 185 m high, 2,335 m long reservoir extending 600 km upstream; 22,500 MW HEP and flood control for 15 million people. 1 mark: benefits — China\'s largest renewable energy source; flood control; improved navigation. 1 mark: social costs — 1.3 million people displaced and resettled, many to poorer land; cultural heritage flooded. 1 mark: environmental costs — disrupted sediment supply; blocked fish migration; reservoir-induced landslides. 1 mark: evaluation — significant benefits but severe social and environmental costs; resettlement programme widely criticised.'
      },
      {
        q: 'Explain why water conflicts are increasing between countries.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Shared river basins — many rivers cross national borders; upstream countries can dam or divert water, reducing supply downstream; e.g. Ethiopia's Grand Ethiopian Renaissance Dam on the Blue Nile is disputed by Egypt and Sudan, who depend on Nile water for 85–90% of their freshwater (1).\n• Growing scarcity — as population growth and climate change increase pressure on limited freshwater resources, competition intensifies; groundwater aquifers shared between countries are increasingly over-exploited (1).\n• Unequal power — upstream countries have geographic advantages; downstream countries (often more dependent on shared water) have less leverage; international law on trans-boundary water rights is weak and contested (1).\n• Historical water agreements — many water-sharing treaties (e.g. the 1929 Nile Waters Treaty) were signed when populations were much lower and do not fairly reflect current needs; renegotiation is politically sensitive (1).`,
        marks_scheme: '1 mark: shared river basins — upstream countries can dam/divert water reducing downstream supply (e.g. Grand Ethiopian Renaissance Dam dispute with Egypt). 1 mark: growing scarcity — population growth and climate change intensify competition for limited freshwater. 1 mark: unequal power — upstream countries have geographic advantage; international water rights law is weak. 1 mark: historical agreements do not reflect current population needs; renegotiation is politically sensitive.'
      },
    ],
    red: [
      {
        q: 'Evaluate the success of strategies used to improve water security in areas of water scarcity. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `Large-scale engineering:\n• Dams and reservoirs store water for year-round use and provide HEP — Three Gorges Dam provides energy for millions; Aswan Dam controls Nile flooding. However, displacement, ecosystem damage, and downstream sediment starvation are major costs (1).\n• Desalination — Saudi Arabia and UAE meet >50% of freshwater needs through desalination of seawater; reliable and high-volume. However, extremely energy-intensive (typically powered by fossil fuels), expensive (~$1/m³ vs. ~$0.01/m³ for groundwater), and produces highly concentrated brine which damages marine ecosystems (1).\nWater transfers:\n• Moving water from water-surplus to water-deficit regions (e.g. China's South-North Water Diversion Project — designed to divert 44.8 billion m³/year when complete). Highly effective at supplying cities but enormously expensive and controversial — Chinese scheme cost >$80 billion and displaced 345,000 people (1).\nSustainable/small-scale approaches:\n• Rainwater harvesting and drip irrigation — low-cost, community-scale solutions reducing demand and improving efficiency; drip irrigation reduces agricultural water use by 30–50% (e.g. Israel, where drip irrigation is widely used) (1).\n• Community borehole and pump schemes in sub-Saharan Africa — reliable access to clean water at low cost; maintenance challenges and pump failures are a long-term problem, but NGO-supported schemes have significantly improved water access in rural Kenya and Tanzania (1).\nConclusion:\n• Large-scale solutions can be effective at scale but impose severe costs; sustainable, demand-management approaches are often more equitable and environmentally sound but insufficient for rapidly growing urban populations — an integrated approach combining both is most effective (1).`,
        marks_scheme: 'Level 3 (5-6 marks): evaluates multiple strategies (large engineering, desalination, water transfers, sustainable approaches) with specific evidence and a conclusion about integrated approaches. Level 2 (3-4 marks): discusses some strategies with limited evaluation. Level 1 (1-2 marks): basic points about water management strategies. Credit: Three Gorges Dam 22,500 MW but 1.3 million displaced; Saudi desalination meets 50%+ needs but energy-intensive; China South-North Water Diversion cost $80 billion; drip irrigation reduces agricultural water use by 30–50%.'
      },
      {
        q: '"Water scarcity is primarily a political and economic problem rather than a physical one." Discuss this statement. [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `Arguments supporting the statement (political/economic factors):\n• Global water supply is physically sufficient — there is technically enough freshwater on Earth for the current and projected global population; the problem is distribution, access, and management, not total supply (1).\n• Poverty restricts access — 2.2 billion people lack safe drinking water; this is almost entirely a function of poverty and governance rather than physical scarcity — wealthy countries with low rainfall (Israel, UAE, Singapore) have achieved water security through technology and investment (1).\n• Governance failures — water is often priced too cheaply, encouraging waste; agricultural subsidies incentivise water-intensive crops in arid regions (e.g. cotton growing in Uzbekistan contributed to the Aral Sea disaster); corruption means infrastructure is not maintained (1).\n• Political disputes — trans-boundary water conflicts (Nile, Indus, Euphrates) are fundamentally political; technical solutions exist but are blocked by national interests (1).\nArguments against (physical factors are important):\n• Arid and semi-arid regions have genuinely low rainfall — no amount of political will creates water where none falls; sub-Saharan and Middle Eastern aridity is a fundamental physical constraint (1).\n• Climate change is altering physical availability — retreating glaciers reduce river flows in countries like Pakistan and Peru; declining Sahel rainfall is a physical reality beyond political control (1).\n• Remote populations — sparsely populated areas lack the water table depth, river access, or rainfall even for small-scale solutions; physical geography sets real limits (1).\nConclusion:\n• The statement is substantially correct — in most water-stressed regions, political will, economic investment, and fairer governance could dramatically reduce scarcity; the examples of water-secure desert nations prove this is achievable. However, physical geography sets the boundaries within which human agency operates; climate change is increasingly shrinking those boundaries, and no political solution can fully substitute for adequate physical water resources. A combined analysis is essential (1).`,
        marks_scheme: 'Level 3 (7-8 marks): balanced discussion of political/economic and physical factors with named examples and a conclusion acknowledging both while affirming primacy of governance. Level 2 (4-6 marks): covers both sides with some specific evidence. Level 1 (1-3 marks): basic points about causes of water scarcity. Credit: global water supply physically sufficient but distribution is the problem; poverty restricts access — 2.2 billion lack safe water; arid regions have genuinely low rainfall setting physical limits; climate change is altering physical availability.'
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 3.4 Desertification */
  '3.4': {
    green: [
      {
        q: 'State two characteristics of a hot desert climate.',
        marks: 2, tier: 'green',
        modelAnswer: `• Very low precipitation — most hot deserts receive less than 250 mm of rainfall per year, and this is often unreliable and may fall in a few intense storms (1).\n• Extreme temperature range — daytime temperatures regularly exceed 40°C, while nights can be very cold (below 10°C) because the dry air and lack of cloud cover mean heat is rapidly lost by radiation at night (1).`,
        marks_scheme: '1 mark: very low precipitation — less than 250 mm/year, often unreliable. 1 mark: extreme temperature range — daytime over 40°C, nights cold due to lack of cloud cover.'
      },
      {
        q: 'Identify two ways in which animals in hot deserts are adapted to survive.',
        marks: 2, tier: 'green',
        modelAnswer: `• Nocturnal behaviour — many desert animals (e.g. fennec fox, gerbil) are active only at night when temperatures are lower, avoiding dehydration and overheating during the day (1).\n• Water conservation — animals such as the kangaroo rat obtain all their water from the food they eat and produce very concentrated urine to minimise water loss (1).\n(Also accept: burrowing to escape heat; light colouring to reflect sunlight; large ears for heat dissipation.)`,
        marks_scheme: '1 mark: nocturnal behaviour — active only at night to avoid dehydration and overheating. 1 mark: water conservation — obtaining water from food and producing very concentrated urine.'
      },
      {
        q: 'State what is meant by desertification.',
        marks: 2, tier: 'green',
        modelAnswer: `Desertification is the process by which land on the margins of deserts (semi-arid areas) becomes increasingly degraded and dry, losing its vegetation and soil fertility, and increasingly resembling desert conditions (1). It is driven by a combination of climate change (reducing rainfall) and human activities such as overgrazing, deforestation, and over-cultivation (1).`,
        marks_scheme: '1 mark: desertification is the process by which semi-arid land becomes increasingly degraded and dry. 1 mark: driven by climate change reducing rainfall and human activities such as overgrazing, deforestation, and over-cultivation.'
      },
      {
        q: 'Name one hot desert and state its location.',
        marks: 1, tier: 'green',
        modelAnswer: `• Sahara Desert — North Africa, covering approximately 9 million km² across countries including Algeria, Libya, Egypt, and Morocco (1).\n(Also accept: Arabian Desert — Middle East; Atacama Desert — coastal South America; Namib Desert — coastal south-west Africa; Australian Outback — central and western Australia.)`,
        marks_scheme: '1 mark: name a hot desert. 1 mark: state its correct location.'
      },
    ],
    amber: [
      {
        q: 'Explain why hot deserts form where they do.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Most hot deserts are located around 20–30° north and south of the equator — in the subtropical high-pressure belt (1).\n• At the equator, air heated by intense solar radiation rises, cools, loses moisture as tropical rainfall, then spreads poleward at altitude. At ~30° latitude, this dry air descends (subsides), compressing and warming — any remaining moisture evaporates, creating stable, cloudless conditions (1).\n• Rain shadow deserts form where moist air is forced to rise over mountain ranges, loses moisture on the windward side, then descends as dry air on the leeward side — e.g. Atacama Desert in the lee of the Andes (1).\n• Coastal deserts form where cold ocean currents cool air over the sea, reducing evaporation and moisture — air reaches land too dry for significant rainfall (e.g. Namib Desert, cooled by Benguela Current) (1).`,
        marks_scheme: '1 mark: most hot deserts located around 20–30° N and S of equator in subtropical high-pressure belt. 1 mark: at equator air rises and loses moisture; at 30° it descends, warming and creating stable cloudless conditions. 1 mark: rain shadow deserts form in lee of mountain ranges (e.g. Atacama behind Andes). 1 mark: coastal deserts form where cold ocean currents cool air, reducing evaporation (e.g. Namib).'
      },
      {
        q: 'Explain the adaptations of plants (xerophytes) to survive in hot desert environments.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Cacti (e.g. saguaro cactus) have thick, waxy stems to reduce water loss through transpiration; their stems expand accordion-like to store large volumes of water after rainfall (1).\n• Shallow but extensive root systems spread wide to capture moisture from even light rain before it evaporates; some plants also have deep tap roots to reach groundwater (1).\n• Spines replace leaves to reduce surface area for transpiration; spines also provide shade to the stem surface and deter herbivores (1).\n• Some plants (ephemeral annuals) complete their entire life cycle — germinating, flowering, and setting seed — within weeks of rare rainfall, remaining dormant as seeds for years between events (1).`,
        marks_scheme: '1 mark: thick waxy stems reduce transpiration and expand to store water after rainfall. 1 mark: shallow extensive root systems capture moisture from light rain; some have deep tap roots to groundwater. 1 mark: spines replace leaves reducing surface area for transpiration and deterring herbivores. 1 mark: ephemeral annuals complete life cycle within weeks of rainfall and remain dormant as seeds between events.'
      },
      {
        q: 'Explain the causes of desertification in the Sahel region of Africa.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Overgrazing — rapidly growing populations mean more livestock per hectare; animals strip vegetation from the surface, exposing bare soil to wind and water erosion (1).\n• Deforestation — trees are cut for fuelwood (the primary energy source for over 80% of rural families in sub-Saharan Africa); without tree roots, soil is no longer held together and is blown or washed away (1).\n• Over-cultivation — soils are cultivated too intensively without allowing fallow periods to recover nutrients; yields decline and eventually the land can no longer support crops (1).\n• Climate change — the Sahel has experienced declining and increasingly unreliable rainfall since the 1970s — droughts are more frequent and severe, reducing vegetation cover and accelerating soil erosion (1).\n(Example: Niger, Burkina Faso, Chad — millions of people at risk of food insecurity due to desertification.)`,
        marks_scheme: '1 mark: overgrazing — more livestock strips vegetation exposing soil to erosion. 1 mark: deforestation — trees cut for fuelwood removing root systems that hold soil. 1 mark: over-cultivation — soils too intensively farmed without fallow periods, yields decline. 1 mark: climate change — declining and unreliable rainfall since 1970s, more frequent droughts.'
      },
      {
        q: 'Describe and explain one strategy used to reduce desertification.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The Great Green Wall (Africa) — an ambitious project to plant a 8,000 km wall of trees and vegetation across the Sahel from Senegal to Djibouti to halt the advance of the Sahara (1).\n• Trees are planted to bind soil, reduce wind erosion, and restore the water cycle through increased transpiration and interception; they also provide fuelwood and food (e.g. gum arabic from acacia trees provides income) (1).\n• The programme involves local communities in planting and maintenance, reducing overgrazing pressure and providing sustainable livelihoods, which reduces the poverty that drives overuse of land (1).\n• By 2020, the UNCCD reported about 18 million hectares restored across the wider programme area — well short of the 100 million hectare target; by 2030 it aims to sequester 250 million tonnes of carbon and create 10 million jobs (1).`,
        marks_scheme: '1 mark: Great Green Wall — 8000 km project to plant trees and vegetation across Sahel. 1 mark: trees bind soil, reduce wind erosion and restore water cycle; provide fuelwood and food income. 1 mark: involves local communities in planting, reducing overgrazing and providing sustainable livelihoods. 1 mark: by 2022, ~18 million hectares restored; UN estimates 250 million tonnes carbon sequestered and 10 million jobs created.'
      },
    ],
    red: [
      {
        q: 'Evaluate the challenges and opportunities that hot desert environments offer for human development. [6 marks]',
        marks: 6, tier: 'red',
        modelAnswer: `Opportunities:\n• Mineral and energy resources — deserts are rich in oil and gas (Arabian Peninsula — Saudi Arabia's Ghawar oil field, largest in the world) and minerals; the Atacama contains vast lithium reserves critical for EV batteries (1).\n• Solar energy — hot deserts receive more solar radiation than anywhere else on Earth — ideal for large-scale solar farms (e.g. Morocco's Noor Ouarzazate complex, generating 580 MW) (1).\n• Tourism — unique landscapes, extreme experiences (e.g. Dubai desert safaris), and clear skies attract tourists, generating significant income (1).\nChallenges:\n• Extreme heat — working conditions are dangerous; construction, agriculture, and infrastructure require expensive cooling systems and adapted technologies (1).\n• Water scarcity — all human activities require water; desalination is expensive and energy-intensive (e.g. Saudi Arabia spends billions of dollars a year on desalination) (1).\n• Remote locations — transport infrastructure is costly to build and maintain across vast desert distances, making access to markets difficult (1).\nConclusion:\n• Hot deserts offer significant opportunities particularly for energy-rich countries, but their development depends heavily on available capital — resource-poor developing nations face extreme challenges that the revenue from resources may not offset (1).`,
        marks_scheme: 'Level 3 (5-6 marks): balanced evaluation of opportunities and challenges with named examples and a conclusion linking to available capital. Level 2 (3-4 marks): covers both sides with some specific detail. Level 1 (1-2 marks): basic points. Credit: mineral/energy resources (Arabian oil, Atacama lithium); solar energy (Morocco Noor 580 MW); extreme heat makes working conditions dangerous; water scarcity requires expensive desalination.'
      },
      {
        q: '"Climate change rather than human activity is the main cause of desertification." Discuss this statement. [8 marks]',
        marks: 8, tier: 'red',
        modelAnswer: `Climate change as a cause:\n• Sahel rainfall fell by 25–40% between the wet 1950s–60s and the drought decades of the 1970s–80s; it has partly recovered since the 1990s but is more erratic, and higher temperatures increase drought stress (1).\n• Increased frequency and severity of droughts reduce vegetation cover, leaving soil exposed and vulnerable to erosion — the 1984 Ethiopian famine was triggered by drought (worsened by civil war) (1).\n• Rising temperatures increase evaporation rates, further reducing soil moisture and stressing plants even where rainfall is unchanged (1).\nHuman activity as a cause:\n• Overgrazing is widely considered the primary driver in the Sahel — livestock populations have grown faster than the land can support, degrading vegetation far beyond what climate change alone would cause (1).\n• Deforestation removes vegetation that protects and enriches soil; cleared land in the Sahel erodes much faster than land with tree cover (1).\n• Unsustainable farming practices — monoculture, over-irrigation causing salinisation — degrade land independently of climate (e.g. Aral Sea basin — Soviet-era irrigation caused severe desertification) (1).\nInteraction:\n• Climate change and human activity are interrelated — drought stress makes land more vulnerable to overgrazing damage; poverty drives unsustainable land use that climate change then amplifies (1).\nConclusion:\n• Neither factor alone adequately explains desertification — they interact and reinforce each other. In the Sahel, human activity (overgrazing, deforestation) appears to be the more proximate cause, but climate change increasingly amplifies vulnerability. Addressing desertification requires tackling both: reducing unsustainable land use while mitigating climate change through global emissions reductions (1).`,
        marks_scheme: 'Level 3 (7-8 marks): balanced discussion of climate change and human activity as causes, recognising their interaction, with a nuanced conclusion. Level 2 (4-6 marks): covers both causes but limited integration or examples. Level 1 (1-3 marks): basic points about one cause. Credit: Sahel rainfall fell 25–40% from the 1950s–60s to the 1970s–80s; overgrazing widely considered primary driver; deforestation greatly increases erosion; climate change and human activity interact and reinforce each other.'
      },
    ],
  },

};

if (typeof module !== 'undefined') module.exports = GEOGRAPHY_EDUQAS_WRITTEN;
