/*
 * AQA A-level Geography (7037) — AI Feedback Question Bank
 * Worded essay-style questions only, suitable for AI examiner-style marking.
 * Mark allocations: 6, 9, 12, 16, 20, 25. Command words: Describe / Explain /
 * Compare / Discuss / Assess / Evaluate / To what extent.
 * Model answers are generated on demand by the AI marker — they are not
 * stored here.
 */

const GEOGRAPHY_AQA_AI_FEEDBACK = {

  /* ─────────────────────── 1.1 Water & Carbon Cycles ─────────────────────── */
  '1.1': [
    { q: 'Describe the main global stores of carbon, including their relative size and approximate turnover times.', marks: 6, command: 'Describe' },
    { q: 'Explain why a drainage basin is best understood as an open system rather than a closed system.', marks: 6, command: 'Explain' },
    { q: 'Explain the role of the oceans in the global carbon cycle, with reference to the physical, biological and carbonate pumps.', marks: 9, command: 'Explain' },
    { q: 'Explain how positive feedback in the Arctic tundra can amplify climate change, using thawing permafrost as your example.', marks: 9, command: 'Explain' },
    { q: 'Describe how soil water budgets typically vary through the year in a temperate UK drainage basin.', marks: 9, command: 'Describe' },
    { q: 'Compare the operation of the water and carbon cycles in the Amazon tropical rainforest with their operation in the Arctic tundra.', marks: 12, command: 'Compare' },
    { q: 'Discuss the physical and human factors that influence the shape of a storm hydrograph for a small UK drainage basin.', marks: 12, command: 'Discuss' },
    { q: 'Discuss the importance of the thermohaline (oceanic conveyor) circulation for the long-term transfer of carbon between the surface and deep oceans.', marks: 12, command: 'Discuss' },
    { q: 'Assess the extent to which Amazon rainforest deforestation has disrupted both the water cycle and the carbon cycle at local and global scales.', marks: 16, command: 'Assess' },
    { q: 'Assess the relative significance of land-use change compared with fossil fuel combustion in altering the global carbon balance since 1850.', marks: 16, command: 'Assess' },
    { q: 'Assess the role of fieldwork techniques (such as infiltration tests, discharge measurement and soil carbon sampling) in understanding the operation of cycles within a drainage basin.', marks: 16, command: 'Assess' },
    { q: 'Evaluate the effectiveness of carbon sequestration strategies (including afforestation, soil management and carbon capture and storage) as a response to anthropogenic climate change.', marks: 20, command: 'Evaluate' },
    { q: 'Evaluate the view that short-term, seasonal changes in the water cycle pose a greater management challenge than long-term, climate-driven changes.', marks: 20, command: 'Evaluate' },
    { q: 'To what extent has human activity transformed the global water cycle and global carbon cycle from natural systems into systems dominated by anthropogenic forcing?', marks: 25, command: 'To what extent' },
    { q: 'To what extent is large-scale carbon sequestration a credible long-term strategy for meeting Paris Agreement temperature targets?', marks: 25, command: 'To what extent' },
  ],

  /* ─────────────────────── 1.2 Coastal Systems & Landscapes ─────────────────────── */
  '1.2': [
    { q: 'Describe how the coast operates as an open system in terms of energy and sediment inputs, stores, transfers and outputs.', marks: 6, command: 'Describe' },
    { q: 'Explain the differences between constructive and destructive waves and the resulting impacts on a beach profile.', marks: 6, command: 'Explain' },
    { q: 'Explain the formation of headlands and bays on a discordant coastline, using a named UK example.', marks: 9, command: 'Explain' },
    { q: 'Explain the formation of a spit, with reference to longshore drift, wave refraction and secondary wind direction.', marks: 9, command: 'Explain' },
    { q: 'Describe the concept of a sediment cell and explain why coastal managers operate at the scale of the cell rather than the individual beach.', marks: 9, command: 'Describe' },
    { q: 'Compare the characteristics of emergent coastal landforms (such as raised beaches) with submergent coastal landforms (such as rias and fjords).', marks: 12, command: 'Compare' },
    { q: 'Discuss the relative importance of marine, sub-aerial and biological processes in driving cliff retreat at a named UK coastline.', marks: 12, command: 'Discuss' },
    { q: 'Discuss the strengths and weaknesses of hard engineering compared with soft engineering as approaches to managing coastal erosion.', marks: 12, command: 'Discuss' },
    { q: 'Assess the extent to which rapid coastal retreat along the Holderness coast can be explained by underlying geology rather than by management decisions.', marks: 16, command: 'Assess' },
    { q: 'Assess the effectiveness of Integrated Coastal Zone Management (ICZM) as a strategy for managing conflicting demands on a stretch of coastline.', marks: 16, command: 'Assess' },
    { q: 'Assess the role of post-glacial eustatic and isostatic sea-level change in shaping the contemporary UK coastline.', marks: 16, command: 'Assess' },
    { q: 'Evaluate managed retreat (for example, the Medmerry realignment scheme) as a sustainable response to accelerating sea-level rise.', marks: 20, command: 'Evaluate' },
    { q: 'Evaluate the relative significance of physical and human factors in explaining the coastal vulnerability of low-lying nations such as the Maldives or Bangladesh.', marks: 20, command: 'Evaluate' },
    { q: 'To what extent should decisions about coastal management prioritise the economic value of land and assets over its ecological and cultural value?', marks: 25, command: 'To what extent' },
    { q: 'To what extent has human activity, rather than natural processes, become the dominant driver of coastal change along the UK coastline?', marks: 25, command: 'To what extent' },
  ],

};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GEOGRAPHY_AQA_AI_FEEDBACK };
}
