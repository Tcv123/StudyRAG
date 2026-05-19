/*
 * OCR A-level Geography (H481) — AI Feedback Question Bank
 * Worded essay-style questions only, suitable for AI examiner-style marking.
 * Mark allocations: 6, 9, 12, 16, 20, 25. Command words: Describe / Explain /
 * Compare / Discuss / Assess / Evaluate / To what extent.
 * Model answers are generated on demand by the AI marker — they are not
 * stored here.
 */

const GEOGRAPHY_OCR_AI_FEEDBACK = {

  /* ─────────────────────── 1.1 Landscape Systems ─────────────────────── */
  '1.1': [
    { q: 'Describe how a coastal landscape operates as an open system in terms of inputs, outputs, stores and flows.', marks: 6, command: 'Describe' },
    { q: 'Explain the differences between constructive and destructive waves and their respective effects on a beach profile.', marks: 6, command: 'Explain' },
    { q: 'Explain the formation of a wave-cut platform on a high-energy rocky coast.', marks: 9, command: 'Explain' },
    { q: 'Explain how a former V-shaped river valley is transformed into a U-shaped glacial trough by glacial processes.', marks: 9, command: 'Explain' },
    { q: 'Describe the characteristic processes and landforms of a dryland (arid or semi-arid) landscape such as the Sahara.', marks: 9, command: 'Describe' },
    { q: 'Compare the erosional landforms produced in a glaciated landscape with those produced along a coastal landscape.', marks: 12, command: 'Compare' },
    { q: 'Discuss the relative strengths and weaknesses of hard engineering compared with soft engineering for coastal protection.', marks: 12, command: 'Discuss' },
    { q: 'Discuss the role of periglacial processes (such as freeze-thaw, solifluction and patterned ground) in shaping high-latitude landscapes today.', marks: 12, command: 'Discuss' },
    { q: 'Assess the extent to which rapid coastal retreat along the Holderness coast reflects underlying geology rather than human management decisions.', marks: 16, command: 'Assess' },
    { q: 'Assess the significance of physical landscape processes operating in dryland environments such as the Sahara or Atacama.', marks: 16, command: 'Assess' },
    { q: 'Assess the role of glacial-interglacial cycles in shaping the contemporary landscapes of upland Britain.', marks: 16, command: 'Assess' },
    { q: 'Evaluate the Medmerry managed realignment scheme as a sustainable response to accelerating sea-level rise.', marks: 20, command: 'Evaluate' },
    { q: 'Evaluate the relative importance of physical and human factors in determining the coastal vulnerability of low-lying nations such as Bangladesh and the Maldives.', marks: 20, command: 'Evaluate' },
    { q: 'To what extent have UK landscapes become human-dominated systems rather than systems shaped predominantly by natural processes?', marks: 25, command: 'To what extent' },
    { q: 'To what extent can physical landscape change in coastal, glacial and dryland systems be reliably predicted for long-term management?', marks: 25, command: 'To what extent' },
  ],

  /* ─────────────────────── 1.2 Earth's Life Support Systems ─────────────────────── */
  '1.2': [
    { q: 'Describe the main global stores of water and carbon, with reference to their relative size and turnover times.', marks: 6, command: 'Describe' },
    { q: 'Explain why a drainage basin is best understood as an open system rather than a closed system.', marks: 6, command: 'Explain' },
    { q: 'Explain how the biological pump and the carbonate pump transfer carbon between the surface and deep oceans.', marks: 9, command: 'Explain' },
    { q: 'Explain how positive feedback in the Arctic tundra (involving permafrost methane release) can amplify climate change.', marks: 9, command: 'Explain' },
    { q: 'Describe how soil water budgets typically vary through the year in a temperate UK drainage basin.', marks: 9, command: 'Describe' },
    { q: 'Compare the operation of the water and carbon cycles in the Amazon tropical rainforest with their operation in the Arctic tundra.', marks: 12, command: 'Compare' },
    { q: 'Discuss the physical and human factors that influence the shape of a storm hydrograph for a small UK drainage basin.', marks: 12, command: 'Discuss' },
    { q: 'Discuss the importance of thermohaline (oceanic conveyor) circulation in transferring carbon between surface and deep ocean stores.', marks: 12, command: 'Discuss' },
    { q: 'Assess the extent to which Amazon rainforest deforestation has disrupted both the water cycle and the carbon cycle at local and global scales.', marks: 16, command: 'Assess' },
    { q: 'Assess the relative significance of land-use change compared with fossil fuel combustion in altering the global carbon balance since 1850.', marks: 16, command: 'Assess' },
    { q: 'Assess the role of fieldwork techniques (such as infiltration tests, discharge measurement and soil carbon sampling) in understanding the operation of life-support cycles within a drainage basin.', marks: 16, command: 'Assess' },
    { q: 'Evaluate the effectiveness of carbon sequestration strategies (including afforestation, soil management and Carbon Capture and Storage) as a response to anthropogenic climate change.', marks: 20, command: 'Evaluate' },
    { q: 'Evaluate the view that short-term, seasonal changes in the water cycle present a greater management challenge than long-term, climate-driven changes.', marks: 20, command: 'Evaluate' },
    { q: 'To what extent has human activity transformed the global water and carbon cycles from natural systems into systems dominated by anthropogenic forcing?', marks: 25, command: 'To what extent' },
    { q: 'To what extent is large-scale carbon sequestration a credible long-term strategy for meeting Paris Agreement temperature targets?', marks: 25, command: 'To what extent' },
  ],

  /* ─────────────────────── 1.3 Hazardous Earth ─────────────────────── */
  '1.3': [
    { q: 'Describe the global distribution of major earthquakes and volcanic eruptions in relation to plate boundaries and hotspots.', marks: 6, command: 'Describe' },
    { q: 'Explain how magma is generated at constructive plate boundaries compared with destructive plate boundaries.', marks: 6, command: 'Explain' },
    { q: 'Explain the primary and secondary hazards that can arise from an explosive composite volcanic eruption.', marks: 9, command: 'Explain' },
    { q: 'Explain how a tsunami is generated by submarine seismic activity at a destructive plate boundary.', marks: 9, command: 'Explain' },
    { q: 'Describe the main stages of Park\'s disaster response curve and what each represents.', marks: 9, command: 'Describe' },
    { q: 'Compare the physical magnitude and human impact of the 2010 Haiti earthquake with those of the 2011 Tōhoku earthquake.', marks: 12, command: 'Compare' },
    { q: 'Discuss the relative effectiveness of prediction strategies for volcanic eruptions compared with earthquakes.', marks: 12, command: 'Discuss' },
    { q: 'Discuss the role of governance and level of development in shaping the human impacts of a major tectonic disaster.', marks: 12, command: 'Discuss' },
    { q: 'Assess the usefulness of the hazard-risk equation (Risk = Hazard × Vulnerability ÷ Capacity to Cope) in explaining differential disaster outcomes.', marks: 16, command: 'Assess' },
    { q: 'Assess the significance of multi-hazard environments (such as the Philippines or Iceland) for hazard management strategies.', marks: 16, command: 'Assess' },
    { q: 'Assess the extent to which trends in deaths and economic losses from tectonic disasters reflect physical processes rather than changing human exposure and vulnerability.', marks: 16, command: 'Assess' },
    { q: 'Evaluate the effectiveness of international aid in reducing the long-term impacts of a major earthquake, with reference to Nepal 2015 or Haiti 2010.', marks: 20, command: 'Evaluate' },
    { q: 'Evaluate the view that preparedness is the most important phase of the hazard management cycle.', marks: 20, command: 'Evaluate' },
    { q: 'To what extent is vulnerability a more important determinant of tectonic disaster outcomes than the physical magnitude of the event itself?', marks: 25, command: 'To what extent' },
    { q: 'To what extent can technological advances ever eliminate the risk posed by tectonic hazards to human populations?', marks: 25, command: 'To what extent' },
  ],

  /* ─────────────────────── 2.1 Changing Spaces, Making Places ─────────────────────── */
  '2.1': [
    { q: 'Describe the difference between endogenous and exogenous factors in shaping the character of a place.', marks: 6, command: 'Describe' },
    { q: 'Explain what is meant by insider and outsider perspectives on place, with brief examples.', marks: 6, command: 'Explain' },
    { q: 'Explain how shifting flows of people, money and ideas have changed the character of a named UK urban place over time.', marks: 9, command: 'Explain' },
    { q: 'Explain the role played by external agencies (government, transnational corporations and community groups) in shaping the identity of a contemporary place.', marks: 9, command: 'Explain' },
    { q: 'Describe how media representations of a place can differ from the lived experience of its residents, using a named example.', marks: 9, command: 'Describe' },
    { q: 'Compare the character of a near (local) place with a contrasting far place at a distance.', marks: 12, command: 'Compare' },
    { q: 'Discuss the extent to which globalisation has eroded distinctive local place identity in UK cities.', marks: 12, command: 'Discuss' },
    { q: 'Discuss the value and limitations of qualitative sources (such as literature, art, film and photography) for the geographical study of place.', marks: 12, command: 'Discuss' },
    { q: 'Assess the extent to which the regeneration of Cardiff Bay or Stratford has benefited its established communities.', marks: 16, command: 'Assess' },
    { q: 'Assess the significance of rebranding in transforming the identity of a deindustrialised place such as Detroit or Liverpool.', marks: 16, command: 'Assess' },
    { q: 'Assess the role of place attachment in shaping community responses to controversial planning or development decisions.', marks: 16, command: 'Assess' },
    { q: 'Evaluate the usefulness of statistical, photographic and digital representations of place in geographical investigation.', marks: 20, command: 'Evaluate' },
    { q: 'Evaluate the effectiveness of community-led approaches to place regeneration compared with top-down, state- or developer-led approaches.', marks: 20, command: 'Evaluate' },
    { q: 'To what extent has the meaning of "place" been transformed by digital media, the internet and online communities?', marks: 25, command: 'To what extent' },
    { q: 'To what extent does place still matter in shaping personal identity in an increasingly mobile and globalised world?', marks: 25, command: 'To what extent' },
  ],

  /* ─────────────────────── 2.2 Trade in the Contemporary World ─────────────────────── */
  '2.2': [
    { q: 'Describe the main features of the contemporary pattern of global trade.', marks: 6, command: 'Describe' },
    { q: 'Explain David Ricardo\'s concept of comparative advantage, with a worked example.', marks: 6, command: 'Explain' },
    { q: 'Explain the role of the World Trade Organization (WTO) in governing global trade and resolving disputes.', marks: 9, command: 'Explain' },
    { q: 'Explain the significance of containerisation in the growth of global trade since the 1960s.', marks: 9, command: 'Explain' },
    { q: 'Describe the operation of the Fair Trade movement and its impacts on producers in countries such as Ghana and Ecuador.', marks: 9, command: 'Describe' },
    { q: 'Compare the benefits brought by globalised trade to China with those brought to sub-Saharan African economies.', marks: 12, command: 'Compare' },
    { q: 'Discuss the impacts of the ongoing USA-China trade war on patterns of contemporary global trade.', marks: 12, command: 'Discuss' },
    { q: 'Discuss the extent to which trade blocs (such as the EU, USMCA and ASEAN) shape contemporary global trade patterns.', marks: 12, command: 'Discuss' },
    { q: 'Assess the extent to which globalisation has produced clear winners and losers in global trade since 1990.', marks: 16, command: 'Assess' },
    { q: 'Assess the role of transnational corporations in shaping trade flows in low- and middle-income countries.', marks: 16, command: 'Assess' },
    { q: 'Assess the significance of e-commerce and digital trade in transforming patterns of global commerce.', marks: 16, command: 'Assess' },
    { q: 'Evaluate Fair Trade as a model for delivering ethical and sustainable global trade.', marks: 20, command: 'Evaluate' },
    { q: 'Evaluate the impact of Brexit on UK trade and on the wider economic geography of Europe.', marks: 20, command: 'Evaluate' },
    { q: 'To what extent has the expansion of free trade since 1990 genuinely benefited developing countries?', marks: 25, command: 'To what extent' },
    { q: 'To what extent is the contemporary global trading system fundamentally unfair to producers in low-income countries?', marks: 25, command: 'To what extent' },
  ],

  /* ─────────────────────── 2.3 Global Migration ─────────────────────── */
  '2.3': [
    { q: 'Describe the main types of migration (voluntary, forced, internal and international), with brief examples.', marks: 6, command: 'Describe' },
    { q: 'Explain the Lee model of push and pull factors as a framework for understanding international migration.', marks: 6, command: 'Explain' },
    { q: 'Explain the distinction in international law between economic migrants, refugees and asylum seekers.', marks: 9, command: 'Explain' },
    { q: 'Explain the role of remittance flows in the development of source countries such as the Philippines and Bangladesh.', marks: 9, command: 'Explain' },
    { q: 'Describe the causes and key features of the 2015 Syrian refugee crisis.', marks: 9, command: 'Describe' },
    { q: 'Compare large-scale internal rural-to-urban migration in China with international migration patterns across the European Union.', marks: 12, command: 'Compare' },
    { q: 'Discuss the geopolitical implications of contemporary Mexico-USA border migration tensions.', marks: 12, command: 'Discuss' },
    { q: 'Discuss the impacts of EU enlargement (such as the 2004 A8 accession) on UK migration patterns.', marks: 12, command: 'Discuss' },
    { q: 'Assess the significance of climate refugees (from Tuvalu, the Maldives and Bangladesh) for the future of global migration.', marks: 16, command: 'Assess' },
    { q: 'Assess the impacts of brain drain and brain gain on the long-term development of India and the Philippines.', marks: 16, command: 'Assess' },
    { q: 'Assess the role of irregular Mediterranean migration in shaping European political responses to migration.', marks: 16, command: 'Assess' },
    { q: 'Evaluate the net economic and social impacts of recent immigration on host populations in the UK and Germany.', marks: 20, command: 'Evaluate' },
    { q: 'Evaluate the effectiveness of "hostile environment" policies as a strategy for managing international migration.', marks: 20, command: 'Evaluate' },
    { q: 'To what extent do wealthy nations have a moral obligation to accept climate refugees displaced by environmental change they did not cause?', marks: 25, command: 'To what extent' },
    { q: 'To what extent is global migration becoming more managed and restricted rather than more open in the 21st century?', marks: 25, command: 'To what extent' },
  ],

  /* ─────────────────────── 2.4 Human Rights ─────────────────────── */
  '2.4': [
    { q: 'Describe the main provisions of the 1948 Universal Declaration of Human Rights (UDHR).', marks: 6, command: 'Describe' },
    { q: 'Explain the distinction between civil and political rights and economic, social and cultural rights.', marks: 6, command: 'Explain' },
    { q: 'Explain the role of the Geneva Conventions in protecting civilians and combatants during armed conflict.', marks: 9, command: 'Explain' },
    { q: 'Explain the Responsibility to Protect (R2P) doctrine and its main applications in international politics.', marks: 9, command: 'Explain' },
    { q: 'Describe the role and jurisdiction of the International Criminal Court (ICC).', marks: 9, command: 'Describe' },
    { q: 'Compare the relative effectiveness of the United Nations and non-governmental organisations (such as Amnesty International and Médecins Sans Frontières) in defending human rights.', marks: 12, command: 'Compare' },
    { q: 'Discuss the significance of women\'s rights as a contemporary battleground for human rights, with reference to Afghanistan, Saudi Arabia or Iran.', marks: 12, command: 'Discuss' },
    { q: 'Discuss the position of indigenous rights in the 21st century, with reference to the Amazon or Standing Rock.', marks: 12, command: 'Discuss' },
    { q: 'Assess the effectiveness of the International Criminal Court in holding states and individuals to account for human rights violations.', marks: 16, command: 'Assess' },
    { q: 'Assess the extent to which the 2003 US-UK invasion of Iraq can be justified as a humanitarian intervention.', marks: 16, command: 'Assess' },
    { q: 'Assess the significance of LGBTQ+ rights as a battleground for human rights globally.', marks: 16, command: 'Assess' },
    { q: 'Evaluate the international response to the 1994 Rwandan genocide and what it reveals about the limits of R2P.', marks: 20, command: 'Evaluate' },
    { q: 'Evaluate the effectiveness of corporate accountability mechanisms in protecting human rights along global supply chains.', marks: 20, command: 'Evaluate' },
    { q: 'To what extent are human rights genuinely universal rather than culturally and historically contingent?', marks: 25, command: 'To what extent' },
    { q: 'To what extent can military intervention ever genuinely promote, rather than undermine, the protection of human rights?', marks: 25, command: 'To what extent' },
  ],

  /* ─────────────────────── 2.5 Power & Borders ─────────────────────── */
  '2.5': [
    { q: 'Describe the main features of the nation-state and the concept of sovereignty in international relations.', marks: 6, command: 'Describe' },
    { q: 'Explain Joseph Nye\'s distinction between hard power and soft power, with brief examples of each.', marks: 6, command: 'Explain' },
    { q: 'Explain the historic role of European colonialism in shaping the contemporary borders of Africa and the Middle East.', marks: 9, command: 'Explain' },
    { q: 'Explain the role of the UN Security Council in international governance and the limits of its authority.', marks: 9, command: 'Explain' },
    { q: 'Describe the main characteristics that define the United States as a contemporary global superpower.', marks: 9, command: 'Describe' },
    { q: 'Compare the economic and political power of the United States with that of China today.', marks: 12, command: 'Compare' },
    { q: 'Discuss the geopolitical importance of disputes in the South China Sea for regional and global stability.', marks: 12, command: 'Discuss' },
    { q: 'Discuss the implications of the Russia-Ukraine conflict for the security of European borders and the post-1989 European order.', marks: 12, command: 'Discuss' },
    { q: 'Assess the extent to which China\'s Belt and Road Initiative represents a new form of economic imperialism.', marks: 16, command: 'Assess' },
    { q: 'Assess the significance of soft power (Hollywood, K-pop, the Premier League and US universities) in shaping global influence.', marks: 16, command: 'Assess' },
    { q: 'Assess the role of transnational corporations as players in contemporary power and border politics.', marks: 16, command: 'Assess' },
    { q: 'Evaluate the extent to which the European Union functions as a superpower bloc in a multipolar world.', marks: 20, command: 'Evaluate' },
    { q: 'Evaluate the effectiveness of UN peacekeeping operations (such as MONUSCO in DRC or UNAMID in Darfur) in stabilising contested borders.', marks: 20, command: 'Evaluate' },
    { q: 'To what extent is global power becoming more multipolar and less concentrated in a single superpower?', marks: 25, command: 'To what extent' },
    { q: 'To what extent must the continuing rise of China inevitably lead to direct conflict with the United States?', marks: 25, command: 'To what extent' },
  ],

};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GEOGRAPHY_OCR_AI_FEEDBACK };
}
