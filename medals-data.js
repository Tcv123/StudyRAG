// ── Canonical medal definitions ──────────────────────────────────────────
// Single source of truth shared by Dashboard.html and medals.html.
// Edit here only — both pages read from this list.
const ALL_MEDALS = [
  // ── Getting Started ──
  { id: 'first_diagnostic',  icon: '🎯', name: 'First Steps',       desc: 'Complete your first diagnostic',            cat: 'Getting Started' },
  { id: 'first_green',       icon: '🥇', name: 'First Green',       desc: 'Get your first green topic',                cat: 'Getting Started' },
  { id: 'first_amber',       icon: '🟡', name: 'Getting There',     desc: 'Get your first amber topic',                cat: 'Getting Started' },
  { id: 'setup_complete',    icon: '⚙️', name: 'All Set Up',        desc: 'Complete the setup flow',                   cat: 'Getting Started' },
  { id: 'profile_complete',  icon: '👤', name: 'Identity',          desc: 'Set your name and details',                 cat: 'Getting Started' },

  // ── Diagnostic Milestones ──
  { id: 'diag_5',            icon: '📝', name: 'Warming Up',        desc: 'Complete 5 diagnostics',                    cat: 'Diagnostic Milestones' },
  { id: 'diag_10',           icon: '📋', name: 'Getting Serious',   desc: 'Complete 10 diagnostics',                   cat: 'Diagnostic Milestones' },
  { id: 'diag_25',           icon: '📊', name: 'Dedicated',         desc: 'Complete 25 diagnostics',                   cat: 'Diagnostic Milestones' },
  { id: 'diag_50',           icon: '🗂️', name: 'Half Century',      desc: 'Complete 50 diagnostics',                   cat: 'Diagnostic Milestones' },
  { id: 'diag_100',          icon: '💯', name: 'Century',           desc: 'Complete 100 diagnostics',                  cat: 'Diagnostic Milestones' },

  // ── Perfect Scores ──
  { id: 'perfect_score',     icon: '⚡', name: 'Perfect Score',     desc: 'Get every question right in a diagnostic',  cat: 'Perfect Scores' },
  { id: 'perfect_3',         icon: '🌟', name: 'Hat Trick',         desc: 'Get 3 perfect diagnostics',                 cat: 'Perfect Scores' },
  { id: 'perfect_10',        icon: '💎', name: 'Flawless',          desc: 'Get 10 perfect diagnostics',                cat: 'Perfect Scores' },

  // ── Green Topics ──
  { id: 'green_3',           icon: '🌱', name: 'Sprouting',         desc: 'Get 3 topics to green',                     cat: 'Green Topics' },
  { id: 'green_5',           icon: '🌿', name: 'Growing',           desc: 'Get 5 topics to green',                     cat: 'Green Topics' },
  { id: 'green_10',          icon: '🌳', name: 'Flourishing',       desc: 'Get 10 topics to green',                    cat: 'Green Topics' },
  { id: 'green_20',          icon: '🏕️', name: 'Forest',            desc: 'Get 20 topics to green',                    cat: 'Green Topics' },
  { id: 'green_50',          icon: '🌍', name: 'Green Planet',      desc: 'Get 50 topics to green',                    cat: 'Green Topics' },

  // ── Subject Mastery ──
  { id: 'subject_master',    icon: '📚', name: 'Subject Master',    desc: 'Get all topics green in one subject',       cat: 'Subject Mastery' },
  { id: 'subject_master_2',  icon: '🎓', name: 'Double Major',      desc: 'Master 2 subjects',                         cat: 'Subject Mastery' },
  { id: 'subject_master_all',icon: '👑', name: 'Scholar',           desc: 'Master every subject',                      cat: 'Subject Mastery' },
  { id: 'all_clear',         icon: '🏆', name: 'All Clear',         desc: 'Every single topic is green',               cat: 'Subject Mastery' },

  // ── Improvement ──
  { id: 'moving_up',         icon: '📈', name: 'Moving Up',         desc: 'Improve 5 topics by a colour',              cat: 'Improvement' },
  { id: 'moving_up_10',      icon: '🚀', name: 'Rocket Rise',       desc: 'Improve 10 topics by a colour',             cat: 'Improvement' },
  { id: 'red_to_green',      icon: '🔄', name: 'Full Turnaround',   desc: 'Move a topic from red to green',            cat: 'Improvement' },
  { id: 'red_to_green_5',    icon: '🦋', name: 'Transformation',    desc: 'Move 5 topics from red to green',           cat: 'Improvement' },
  { id: 'no_reds',           icon: '🛡️', name: 'No More Reds',      desc: 'Have zero red topics',                      cat: 'Improvement' },

  // ── Streaks ──
  { id: 'streak_3',          icon: '🔥', name: 'Heating Up',        desc: '3-day study streak',                        cat: 'Streaks' },
  { id: 'on_fire',           icon: '🔥', name: 'On Fire',           desc: '7-day study streak',                        cat: 'Streaks' },
  { id: 'streak_14',         icon: '⚡', name: 'Unstoppable',       desc: '14-day study streak',                       cat: 'Streaks' },
  { id: 'streak_30',         icon: '🌋', name: 'Inferno',           desc: '30-day study streak',                       cat: 'Streaks' },
  { id: 'streak_60',         icon: '☀️', name: 'Solar Powered',     desc: '60-day study streak',                       cat: 'Streaks' },
  { id: 'streak_100',        icon: '💫', name: 'Legendary',         desc: '100-day study streak',                      cat: 'Streaks' },

  // ── Speed & Consistency ──
  { id: 'daily_3_diag',      icon: '⏱️', name: 'Power Hour',        desc: 'Complete 3 diagnostics in one day',         cat: 'Speed & Consistency' },
  { id: 'daily_5_diag',      icon: '🏃', name: 'Sprint Session',    desc: 'Complete 5 diagnostics in one day',         cat: 'Speed & Consistency' },
  { id: 'weekend_warrior',   icon: '🗓️', name: 'Weekend Warrior',   desc: 'Study on both Saturday and Sunday',         cat: 'Speed & Consistency' },
  { id: 'early_bird',        icon: '🌅', name: 'Early Bird',        desc: 'Complete a diagnostic before 8am',          cat: 'Speed & Consistency' },
  { id: 'night_owl',         icon: '🦉', name: 'Night Owl',         desc: 'Complete a diagnostic after 10pm',          cat: 'Speed & Consistency' },

  // ── Written Questions ──
  { id: 'first_written_full',icon: '✍️', name: 'Wordsmith',         desc: 'Get full marks on a written question',      cat: 'Written Questions' },
  { id: 'written_5_full',    icon: '📖', name: 'Essay Expert',      desc: 'Get full marks on 5 written questions',     cat: 'Written Questions' },
  { id: 'all_tiers_green',   icon: '🎯', name: 'Tier Conqueror',    desc: 'Answer green, amber & red Qs correctly in one diagnostic', cat: 'Written Questions' },

  // ── Collection ──
  { id: 'medals_10',         icon: '🎖️', name: 'Collector',         desc: 'Earn 10 medals',                            cat: 'Collection' },
  { id: 'medals_25',         icon: '🏅', name: 'Medal Hoarder',     desc: 'Earn 25 medals',                            cat: 'Collection' },
  { id: 'medals_40',         icon: '🥇', name: 'Medal Master',      desc: 'Earn 40 medals',                            cat: 'Collection' },
  { id: 'medals_all',        icon: '👾', name: 'Completionist',     desc: 'Earn every single medal',                   cat: 'Collection' },

  // ── Milestones ──
  { id: 'one_week',          icon: '📅', name: 'One Week In',       desc: 'Use RAG Learning for 7 days',               cat: 'Milestones' },
  { id: 'one_month',         icon: '🗓️', name: 'Monthly Regular',   desc: 'Use RAG Learning for 30 days',              cat: 'Milestones' },
  { id: 'half_topics',       icon: '⚖️', name: 'Halfway There',     desc: 'Test at least half your topics',            cat: 'Milestones' },
  { id: 'all_topics_tested', icon: '✅', name: 'Full Coverage',     desc: 'Test every single topic at least once',     cat: 'Milestones' },

  // ── Subject Firsts ──
  { id: 'first_cs',          icon: '💻', name: 'Code Breaker',      desc: 'Complete your first Computer Science diagnostic', cat: 'Subject Firsts' },
  { id: 'first_physics',     icon: '⚛️', name: 'Force Awakens',     desc: 'Complete your first Physics diagnostic',    cat: 'Subject Firsts' },
  { id: 'first_economics',   icon: '💰', name: 'Market Entry',      desc: 'Complete your first Economics diagnostic',  cat: 'Subject Firsts' },
  { id: 'first_chemistry',   icon: '🧪', name: 'First Reaction',    desc: 'Complete your first Chemistry diagnostic',  cat: 'Subject Firsts' },
  { id: 'first_biology',     icon: '🧬', name: 'Life Begins',       desc: 'Complete your first Biology diagnostic',    cat: 'Subject Firsts' },
  { id: 'first_geography',   icon: '🌍', name: 'Explorer',          desc: 'Complete your first Geography diagnostic',  cat: 'Subject Firsts' },
  { id: 'first_maths',       icon: '🔢', name: 'Number Cruncher',   desc: 'Complete your first Mathematics diagnostic', cat: 'Subject Firsts' },

  // ── Amber Milestones ──
  { id: 'amber_5',           icon: '🟠', name: 'Amber Alert',       desc: 'Get 5 topics to amber',                     cat: 'Amber Milestones' },
  { id: 'amber_10',          icon: '🔶', name: 'Amber Wave',        desc: 'Get 10 topics to amber or better',          cat: 'Amber Milestones' },
  { id: 'amber_clear',       icon: '✨', name: 'No More Ambers',    desc: 'Have zero amber topics — all green!',       cat: 'Amber Milestones' },
  { id: 'amber_to_green_3',  icon: '🔀', name: 'Levelling Up',      desc: 'Move 3 topics from amber to green',         cat: 'Amber Milestones' },

  // ── Diagnostic Depth ──
  { id: 'diag_150',          icon: '📚', name: 'Bookworm',          desc: 'Complete 150 diagnostics',                  cat: 'Diagnostic Depth' },
  { id: 'diag_200',          icon: '🏛️', name: 'Academic',          desc: 'Complete 200 diagnostics',                  cat: 'Diagnostic Depth' },
  { id: 'daily_10_diag',     icon: '💪', name: 'Marathon Runner',   desc: 'Complete 10 diagnostics in one day',        cat: 'Diagnostic Depth' },
  { id: 'all_boards_tested', icon: '🌐', name: 'Board Explorer',    desc: 'Test topics from every exam board you study', cat: 'Diagnostic Depth' },
  { id: 'daily_7_diag',      icon: '🏋️', name: 'Heavy Lifter',      desc: 'Complete 7 diagnostics in one day',         cat: 'Diagnostic Depth' },

  // ── Green Topics Extended ──
  { id: 'green_75',          icon: '🌲', name: 'Evergreen',         desc: 'Get 75 topics to green',                    cat: 'Green Topics' },
  { id: 'green_100',         icon: '💚', name: 'Green Machine',     desc: 'Get 100 topics to green',                   cat: 'Green Topics' },
  { id: 'green_all_one_board', icon: '🎪', name: 'Board Master',    desc: 'All green in one exam board',               cat: 'Green Topics' },

  // ── Practice Questions ──
  { id: 'practice_first',    icon: '✏️', name: 'First Answer',      desc: 'Complete your first practice question',     cat: 'Practice Questions' },
  { id: 'practice_10',       icon: '📝', name: 'Getting Practice',  desc: 'Complete 10 practice questions',            cat: 'Practice Questions' },
  { id: 'practice_25',       icon: '📓', name: 'Practised',         desc: 'Complete 25 practice questions',            cat: 'Practice Questions' },
  { id: 'practice_50',       icon: '📒', name: 'Exam Ready',        desc: 'Complete 50 practice questions',            cat: 'Practice Questions' },
  { id: 'practice_100',      icon: '🏆', name: 'Practice Legend',   desc: 'Complete 100 practice questions',           cat: 'Practice Questions' },

  // ── Time Champions ──
  { id: 'three_months',      icon: '📆', name: 'Quarterly',         desc: 'Use RAG Learning for 90 days',              cat: 'Time Champions' },
  { id: 'six_months',        icon: '🎂', name: 'Half Year Hero',    desc: 'Use RAG Learning for 180 days',             cat: 'Time Champions' },
  { id: 'one_year',          icon: '🎊', name: 'Year One',          desc: 'Use RAG Learning for 365 days',             cat: 'Time Champions' },
  { id: 'lunch_learner',     icon: '🍽️', name: 'Lunch Learner',     desc: 'Study between 12pm and 1pm',                cat: 'Time Champions' },
  { id: 'dawn_grinder',      icon: '🌄', name: 'Dawn Grinder',      desc: 'Study before 6am',                          cat: 'Time Champions' },
  { id: 'after_school',      icon: '🎒', name: 'After School',      desc: 'Study between 4pm and 7pm',                 cat: 'Time Champions' },
  { id: 'weekend_scholar',   icon: '🌞', name: 'Weekend Scholar',   desc: 'Study on a Saturday or Sunday',             cat: 'Time Champions' },

  // ── Comeback & Recovery ──
  { id: 'comeback_kid',      icon: '💪', name: 'Comeback Kid',      desc: 'Return to study after 7+ days away',        cat: 'Comeback & Recovery' },
  { id: 'red_halved',        icon: '📉', name: 'Damage Control',    desc: 'Cut your red topics in half',               cat: 'Comeback & Recovery' },
  { id: 'bounce_back',       icon: '🏀', name: 'Bounce Back',       desc: 'Improve a red topic to amber in one session', cat: 'Comeback & Recovery' },
  { id: 'clean_sweep',       icon: '🧹', name: 'Clean Sweep',       desc: 'Clear all reds in a subject',               cat: 'Comeback & Recovery' },

  // ── Multi-Subject ──
  { id: 'cross_subject_green', icon: '🌈', name: 'Renaissance',     desc: 'Get a green topic in 3 different subjects', cat: 'Multi-Subject' },
  { id: 'all_subjects_tested', icon: '🗺️', name: 'Well Rounded',    desc: 'Test at least one topic in every subject',  cat: 'Multi-Subject' },

  // ── Streak Extended ──
  { id: 'streak_150',        icon: '🌊', name: 'Tidal Force',       desc: '150-day study streak',                      cat: 'Streaks' },
  { id: 'streak_200',        icon: '🗻', name: 'Mountaineer',       desc: '200-day study streak',                      cat: 'Streaks' },
  { id: 'streak_365',        icon: '🌟', name: 'Year-Long Flame',   desc: '365-day study streak',                      cat: 'Streaks' },
  { id: 'weekend_streak_4',  icon: '📅', name: 'Month of Weekends', desc: 'Study 4 consecutive weekends',              cat: 'Streaks' },

  // ── Speed Records ──
  { id: 'two_subj_one_day',  icon: '⚡', name: 'Double Shift',      desc: 'Test topics in 2 subjects in one day',      cat: 'Speed Records' },
  { id: 'three_green_one_day', icon: '🎯', name: 'Green Streak',    desc: 'Get 3 green topics in one day',             cat: 'Speed Records' },
  { id: 'five_green_one_day', icon: '🤩', name: 'Green Blitz',      desc: 'Get 5 green topics in one day',             cat: 'Speed Records' },

  // ── Collection Extended ──
  { id: 'medals_50',         icon: '🏆', name: 'Trophy Room',       desc: 'Earn 50 medals',                            cat: 'Collection' },
  { id: 'medals_75',         icon: '💎', name: 'Diamond Collector', desc: 'Earn 75 medals',                            cat: 'Collection' },
  { id: 'medals_90',         icon: '🌟', name: 'Almost There',      desc: 'Earn 90 medals',                            cat: 'Collection' },

  // ── Secret / Fun ──
  { id: 'friday_night',      icon: '🎉', name: 'Friday Grind',      desc: 'Study on a Friday evening',                 cat: 'Secret' },
  { id: 'new_year',          icon: '🎆', name: 'New Year Scholar',  desc: 'Study on January 1st',                      cat: 'Secret' },
  { id: 'exam_season',       icon: '📋', name: 'Exam Season Warrior', desc: 'Study during May or June',                cat: 'Secret' },
  { id: 'midnight_oil',      icon: '🕯️', name: 'Midnight Oil',      desc: 'Study between midnight and 3am',            cat: 'Secret' },
  { id: 'monday_motivation', icon: '💼', name: 'Monday Motivation', desc: 'Study on a Monday',                         cat: 'Secret' },
];
