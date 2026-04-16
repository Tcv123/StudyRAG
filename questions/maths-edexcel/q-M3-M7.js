// Edexcel A-Level Mathematics — Mechanics MCQ Bank: M3–M7
// Format: { q, options: [correct, wrong1, wrong2, wrong3], answer: 0 }
// 12 green + 12 amber + 6 red per topic = 30 per topic, 150 total
// g = 9.8 m/s² throughout

const EDEXCEL_MCQ_M3_M7 = {

  // ─────────────────────────────────────────
  // M3: Forces and Newton's Laws
  // ─────────────────────────────────────────
  M3: [
    // GREEN (12)
    {
      q: "A particle of mass 4 kg accelerates at 3 m/s². What is the resultant force acting on it?",
      options: ["12 N", "0.75 N", "7 N", "43.2 N"],
      answer: 0, tier: "green"
    },
    {
      q: "A particle of mass 5 kg hangs in equilibrium from a string. What is the tension in the string? (g = 9.8 m/s²)",
      options: ["49 N", "5 N", "9.8 N", "44.1 N"],
      answer: 0, tier: "green"
    },
    {
      q: "Which of the following is the correct vector form of Newton's Second Law?",
      options: ["F_net = ma", "F_net = m/a", "F_net = a/m", "F_net = m + a"],
      answer: 0, tier: "green"
    },
    {
      q: "A force of 10 N acts at 60° to the horizontal. What is its horizontal component?",
      options: ["5 N", "8.66 N", "10 N", "5.77 N"],
      answer: 0, tier: "green"
    },
    {
      q: "A particle rests on a smooth horizontal surface. A horizontal force of 20 N is applied. If the mass is 4 kg, what is the acceleration?",
      options: ["5 m/s²", "20 m/s²", "80 m/s²", "0.2 m/s²"],
      answer: 0, tier: "green"
    },
    {
      q: "In an Atwood machine, both masses are equal (m₁ = m₂). What is the acceleration of the system?",
      options: ["0 m/s²", "g m/s²", "g/2 m/s²", "2g m/s²"],
      answer: 0, tier: "green"
    },
    {
      q: "A 3 kg particle is in equilibrium. The sum of vertical forces on it must equal:",
      options: ["0 N", "29.4 N upward", "29.4 N downward", "9.8 N"],
      answer: 0, tier: "green"
    },
    {
      q: "A force F acts at angle θ to the horizontal. Its vertical component is:",
      options: ["F sinθ", "F cosθ", "F tanθ", "F/sinθ"],
      answer: 0, tier: "green"
    },
    {
      q: "A particle of mass 2 kg sits on a smooth horizontal surface. A vertical force of 19.6 N acts upward. What is the normal reaction?",
      options: ["0 N", "19.6 N", "39.2 N", "9.8 N"],
      answer: 0, tier: "green"
    },
    {
      q: "Two horizontal forces of 6 N and 8 N act at right angles on a particle. What is the magnitude of the resultant?",
      options: ["10 N", "14 N", "2 N", "7 N"],
      answer: 0, tier: "green"
    },
    {
      q: "A particle of mass 6 kg is on a smooth surface. Two forces act: 30 N east and 24 N west. What is the acceleration?",
      options: ["1 m/s² east", "9 m/s² east", "54 m/s² east", "1 m/s² west"],
      answer: 0, tier: "green"
    },
    {
      q: "In a connected particle problem (smooth table, pulley at edge), a 3 kg mass on the table is connected to a 2 kg hanging mass. The tension in the string is:",
      options: ["11.76 N", "9.8 N", "19.6 N", "5.88 N"],
      answer: 0, tier: "green"
    },

    // AMBER (12)
    {
      q: "A particle of mass 5 kg is in a lift accelerating upward at 2 m/s². What is the normal reaction from the floor on the particle?",
      options: ["59 N", "49 N", "39 N", "10 N"],
      answer: 0, tier: "amber"
    },
    {
      q: "Two particles m₁ = 8 kg and m₂ = 2 kg are connected by a light inextensible string over a smooth pulley. What is the acceleration of the system?",
      options: ["5.88 m/s²", "9.8 m/s²", "3.92 m/s²", "7.84 m/s²"],
      answer: 0, tier: "amber"
    },
    {
      q: "A particle is on a smooth inclined plane at 30° to the horizontal, mass 4 kg. What is the component of weight along the slope (down the slope)?",
      options: ["19.6 N", "33.9 N", "39.2 N", "9.8 N"],
      answer: 0, tier: "amber"
    },
    {
      q: "A 4 kg particle in a lift decelerates at 3 m/s² while moving upward. What is the apparent weight (normal reaction)?",
      options: ["27.2 N", "51.2 N", "39.2 N", "12 N"],
      answer: 0, tier: "amber"
    },
    {
      q: "Two forces act on a particle: 12 N at 0° and 5 N at 90°. What is the direction of the resultant from the horizontal?",
      options: ["22.6°", "67.4°", "30°", "45°"],
      answer: 0, tier: "amber"
    },
    {
      q: "Particle A (5 kg) on a smooth table is connected by a string over a pulley to hanging particle B (3 kg). What is the acceleration of the system?",
      options: ["3.675 m/s²", "9.8 m/s²", "4.9 m/s²", "5.88 m/s²"],
      answer: 0, tier: "amber"
    },
    {
      q: "A particle of mass 3 kg is pulled up a smooth incline of 40° by a force parallel to the incline. Given acceleration 2 m/s², find the applied force.",
      options: ["24.9 N", "18.9 N", "6 N", "31.3 N"],
      answer: 0, tier: "amber"
    },
    {
      q: "In an Atwood machine with m₁ = 6 kg and m₂ = 4 kg, what is the tension in the string?",
      options: ["47.04 N", "58.8 N", "39.2 N", "19.6 N"],
      answer: 0, tier: "amber"
    },
    {
      q: "A particle of mass m is in a lift in free fall. What is the normal reaction on the particle?",
      options: ["0 N", "mg", "2mg", "mg/2"],
      answer: 0, tier: "amber"
    },
    {
      q: "Forces 5 N north, 12 N east, and 9 N south act on a particle. What is the magnitude of the resultant?",
      options: ["12.65 N", "16 N", "26 N", "8 N"],
      answer: 0, tier: "amber"
    },
    {
      q: "A 2 kg block and a 3 kg block are connected by a string on a smooth surface. A 25 N force pulls the 3 kg block. What is the tension in the string between them?",
      options: ["10 N", "15 N", "25 N", "5 N"],
      answer: 0, tier: "amber"
    },
    {
      q: "A particle of mass 5 kg rests on a smooth plane inclined at 30°. It is held by a horizontal force H. What is H?",
      options: ["28.3 N", "24.5 N", "49 N", "14.1 N"],
      answer: 0, tier: "amber"
    },

    // RED (6)
    {
      q: "Particles A (3 kg) on a smooth incline of 30° and B (4 kg) hanging freely are connected by a light inextensible string over a smooth pulley at the top of the incline. Find the acceleration of the system.",
      options: ["3.50 m/s²", "9.8 m/s²", "1.40 m/s²", "5.60 m/s²"],
      answer: 0, tier: "red"
    },
    {
      q: "A particle of mass 2 kg is acted on by forces (3i + 4j) N and (−1i + 2j) N. What is the magnitude of the acceleration?",
      options: ["3 m/s²", "5 m/s²", "6.5 m/s²", "√29 m/s²"],
      answer: 0, tier: "red"
    },
    {
      q: "A particle in a lift of mass 60 kg has an apparent weight of 528 N. What is the acceleration of the lift and its direction?",
      options: ["−1.0 m/s² (downward)", "1.0 m/s² (upward)", "8.8 m/s² (downward)", "0 m/s²"],
      answer: 0, tier: "red"
    },
    {
      q: "Three forces act on a particle in equilibrium: 10 N east, 6 N north, and force F. What is F?",
      options: ["(−10i − 6j) N, magnitude ≈ 11.7 N", "(10i + 6j) N, magnitude ≈ 11.7 N", "(−10i + 6j) N", "(10i − 6j) N"],
      answer: 0, tier: "red"
    },
    {
      q: "On a smooth incline of 25°, particle A (mass 5 kg) is connected by a string over a pulley to particle B (mass 2 kg) hanging freely. What is the acceleration (taking down the slope as positive for A)?",
      options: ["−1.32 m/s² (A moves up)", "1.32 m/s² (A moves down)", "4.9 m/s²", "0 m/s²"],
      answer: 0, tier: "red"
    },
    {
      q: "A particle of mass 4 kg is on a smooth horizontal surface. Forces (6i + 3j) N and (2i − 5j) N act on it. What is the acceleration vector?",
      options: ["(2i − 0.5j) m/s²", "(8i − 2j) m/s²", "(1.5i + 0.75j) m/s²", "(8i + 2j) m/s²"],
      answer: 0, tier: "red"
    }
  ],

  // ─────────────────────────────────────────
  // M4: Moments
  // ─────────────────────────────────────────
  M4: [
    // GREEN (12)
    {
      q: "What is the moment of a 12 N force acting 3 m from a pivot (perpendicular to the rod)?",
      options: ["36 N·m", "4 N·m", "9 N·m", "15 N·m"],
      answer: 0, tier: "green"
    },
    {
      q: "What are the SI units of a moment of a force?",
      options: ["N·m", "N/m", "kg·m/s²", "N·m²"],
      answer: 0, tier: "green"
    },
    {
      q: "A uniform rod of length 2 m and mass 5 kg is balanced at its midpoint. What moment does the weight exert about the midpoint?",
      options: ["0 N·m", "49 N·m", "24.5 N·m", "9.8 N·m"],
      answer: 0, tier: "green"
    },
    {
      q: "For a rigid body in static equilibrium, the sum of clockwise moments about any point must equal:",
      options: ["The sum of anticlockwise moments about that point", "Zero", "The weight of the body", "The sum of all forces"],
      answer: 0, tier: "green"
    },
    {
      q: "A 10 N force acts 4 m from a pivot. A 20 N force is on the same side. How far from the pivot must the 20 N force act to balance?",
      options: ["2 m", "4 m", "8 m", "10 m"],
      answer: 0, tier: "green"
    },
    {
      q: "A uniform beam AB of length 4 m and weight 60 N rests on a support at its midpoint. A 20 N load hangs at A. What additional load at B would restore equilibrium?",
      options: ["20 N", "40 N", "60 N", "80 N"],
      answer: 0, tier: "green"
    },
    {
      q: "For a body in equilibrium, how many conditions must be satisfied?",
      options: ["Two: ΣF = 0 and ΣM = 0", "One: ΣF = 0 only", "One: ΣM = 0 only", "Three: ΣFx = 0, ΣFy = 0, ΣFz = 0"],
      answer: 0, tier: "green"
    },
    {
      q: "A 5 kg mass hangs 1 m from the left end of a light horizontal rod. A 3 kg mass hangs 2 m from the left end. The rod rests on a support. Taking moments, about which type of point is it most useful to eliminate one unknown?",
      options: ["The point where an unknown reaction acts", "The midpoint of the rod", "The point of maximum moment", "The centre of mass"],
      answer: 0, tier: "green"
    },
    {
      q: "A uniform plank of length 6 m and weight W rests on a pivot 2 m from one end. A child of weight 3W stands at the near end. What reaction force does the pivot exert?",
      options: ["4W", "3W", "W", "2W"],
      answer: 0, tier: "green"
    },
    {
      q: "A uniform rod AB of length 3 m is supported at A and B. A 100 N weight acts at 1 m from A. Ignoring the rod's weight, what is the reaction at B?",
      options: ["33.3 N", "66.7 N", "50 N", "100 N"],
      answer: 0, tier: "green"
    },
    {
      q: "A see-saw is balanced at its midpoint. A 40 kg child sits 1.5 m from the pivot. How far from the pivot should a 60 kg child sit on the other side to balance?",
      options: ["1 m", "1.5 m", "2.25 m", "0.67 m"],
      answer: 0, tier: "green"
    },
    {
      q: "A horizontal force of 8 N acts at the end of a 0.5 m horizontal rod attached to a wall. What is the moment about the wall attachment?",
      options: ["4 N·m", "16 N·m", "8 N·m", "0.0625 N·m"],
      answer: 0, tier: "green"
    },

    // AMBER (12)
    {
      q: "A non-uniform rod AB of length 5 m and mass 8 kg rests on supports at A and B. The reaction at A is 42 N and at B is 36.4 N. How far is the centre of mass from A? (g = 9.8)",
      options: ["2.3 m", "2.5 m", "1.9 m", "3.1 m"],
      answer: 0, tier: "amber"
    },
    {
      q: "A uniform beam AB, length 6 m, mass 20 kg, rests on supports at A and at C (where C is 4 m from A). A 50 N load hangs at B. Find the reaction at C.",
      options: ["152.6 N", "96.4 N", "248 N", "49 N"],
      answer: 0, tier: "amber"
    },
    {
      q: "A uniform plank, length 4 m and mass 10 kg, overhangs a table by 1.5 m. A 5 kg child stands on the overhanging end. Will the plank tip? (Pivot is the table edge.)",
      options: ["Yes, it tips — clockwise moment exceeds anticlockwise", "No, it is stable", "Cannot determine without more information", "It tips only if the child moves further out"],
      answer: 0, tier: "amber"
    },
    {
      q: "A non-uniform rod AB, length 4 m, has its centre of mass 1.5 m from A. The rod (mass 6 kg) rests on a support at the midpoint. What additional mass at A would balance it?",
      options: ["3 kg", "6 kg", "1.5 kg", "4 kg"],
      answer: 0, tier: "amber"
    },
    {
      q: "A uniform rod AB, mass 4 kg, length 3 m, rests on supports at A and B. A 6 kg load hangs 1 m from A. What is the reaction at A?",
      options: ["45.1 N", "34.3 N", "78.4 N", "58.8 N"],
      answer: 0, tier: "amber"
    },
    {
      q: "A body is about to tilt about support B. What is the contact force at the other support A at this instant?",
      options: ["Zero", "Equal to the weight", "Equal to the reaction at B", "Undefined"],
      answer: 0, tier: "amber"
    },
    {
      q: "A uniform ladder, length 4 m, mass 15 kg, leans against a smooth vertical wall, making 70° with the horizontal. What is the horizontal reaction from the wall?",
      options: ["26.6 N", "19.2 N", "53.2 N", "73.5 N"],
      answer: 0, tier: "amber"
    },
    {
      q: "A uniform rod is in equilibrium under three forces: its weight W downward, and two reactions R₁ and R₂. Which equation is NOT sufficient alone to solve the problem?",
      options: ["Taking moments about the midpoint only", "ΣF = 0 and ΣM = 0 together", "Taking moments about R₁'s point of action", "Taking moments about R₂'s point of action"],
      answer: 0, tier: "amber"
    },
    {
      q: "A non-uniform beam AB of length 5 m, mass 12 kg, rests on a pivot 3 m from A. When a 4 kg mass is placed at A, the beam is in equilibrium. Find the distance of the centre of mass from A.",
      options: ["2.0 m from A", "3.0 m from A", "2.5 m from A", "1.5 m from A"],
      answer: 0, tier: "amber"
    },
    {
      q: "A particle rests on a rough ladder. The friction from the ground on the base of the ladder acts in which direction?",
      options: ["Horizontal, toward the wall", "Vertical, upward", "Horizontal, away from the wall", "Along the ladder, downward"],
      answer: 0, tier: "amber"
    },
    {
      q: "A uniform beam of length 2L rests on two supports at distance d from each end. As a load moves from centre to one end, what happens to the reaction at the nearer support?",
      options: ["It increases", "It decreases", "It stays constant", "It becomes zero"],
      answer: 0, tier: "amber"
    },
    {
      q: "A 60 N force acts at 30° to a rod at a point 2 m from the pivot. What is the moment about the pivot?",
      options: ["60 N·m", "103.9 N·m", "30 N·m", "69.3 N·m"],
      answer: 0, tier: "amber"
    },

    // RED (6)
    {
      q: "A uniform rod AB of length 6 m and mass 10 kg rests on a support at C (2 m from B). A particle of mass m is placed at A. The rod is on the verge of tilting about C. Find m.",
      options: ["5 kg", "10 kg", "7.5 kg", "2.5 kg"],
      answer: 0, tier: "red"
    },
    {
      q: "A non-uniform rod AB, length 8 m, mass 20 kg, rests on supports at A and B. Reaction at A = 98 N, reaction at B = 98 N. Where is the centre of mass?",
      options: ["4 m from A (midpoint)", "2 m from A", "6 m from A", "3 m from A"],
      answer: 0, tier: "red"
    },
    {
      q: "A ladder of mass 20 kg and length 6 m rests against a smooth wall, making angle 65° with the horizontal. A man of mass 75 kg stands 4 m up the ladder. Find the normal reaction from the wall.",
      options: ["176 N", "147 N", "254 N", "98 N"],
      answer: 0, tier: "red"
    },
    {
      q: "A beam AB (mass 15 kg, length 5 m, uniform) has a hinge at A and is held horizontal by a cable attached at B at 40° to the beam. Find the tension T in the cable.",
      options: ["56.9 N", "73.5 N", "113.8 N", "95.0 N"],
      answer: 0, tier: "red"
    },
    {
      q: "A uniform rod of weight 40 N and length 1.2 m rests with one end on the floor and the other against a smooth vertical wall, making angle θ with the floor where tanθ = 4/3. Find the friction at the floor.",
      options: ["15 N", "20 N", "26.7 N", "30 N"],
      answer: 0, tier: "red"
    },
    {
      q: "A beam AB of length 4 m is supported at A (pin) and at C (0.5 m from B, roller). Uniform beam, mass 8 kg. A 30 kg load hangs at B. Find the reaction at A.",
      options: ["135.2 N downward", "58.8 N upward", "370.6 N upward", "135.2 N upward"],
      answer: 0, tier: "red"
    }
  ],

  // ─────────────────────────────────────────
  // M5: Variable Acceleration
  // ─────────────────────────────────────────
  M5: [
    // GREEN (12)
    {
      q: "A particle's displacement is s = 3t² + 2t − 1. What is the velocity at t = 2?",
      options: ["14 m/s", "16 m/s", "6 m/s", "13 m/s"],
      answer: 0, tier: "green"
    },
    {
      q: "A particle's velocity is v = 4t − 6. At what time is the particle at rest?",
      options: ["t = 1.5 s", "t = 6 s", "t = 4 s", "t = 0 s"],
      answer: 0, tier: "green"
    },
    {
      q: "A particle's velocity is v = 6t². What is its acceleration at t = 3?",
      options: ["36 m/s²", "54 m/s²", "18 m/s²", "162 m/s²"],
      answer: 0, tier: "green"
    },
    {
      q: "If s = t³ − 3t + 2, what formula gives the velocity?",
      options: ["v = 3t² − 3", "v = t³ − 3", "v = 3t² − 3t", "v = t² − 3"],
      answer: 0, tier: "green"
    },
    {
      q: "To find displacement from velocity, you should:",
      options: ["Integrate v with respect to t", "Differentiate v with respect to t", "Divide v by t", "Multiply v by t"],
      answer: 0, tier: "green"
    },
    {
      q: "A particle's acceleration is a = 2t. Its velocity is 5 m/s when t = 0. Find v when t = 3.",
      options: ["14 m/s", "18 m/s", "9 m/s", "11 m/s"],
      answer: 0, tier: "green"
    },
    {
      q: "The maximum displacement from the starting point occurs when:",
      options: ["v = 0", "a = 0", "s is largest numerically", "t is largest"],
      answer: 0, tier: "green"
    },
    {
      q: "A particle starts from rest at the origin. Its acceleration is a = 4. Find s when t = 3.",
      options: ["18 m", "36 m", "12 m", "6 m"],
      answer: 0, tier: "green"
    },
    {
      q: "Velocity v = 5t − t². At what time is the acceleration zero?",
      options: ["t = 2.5 s", "t = 5 s", "t = 0 s", "t = 10 s"],
      answer: 0, tier: "green"
    },
    {
      q: "A particle has position vector r = (2t)i + (t²)j. What is the speed when t = 3?",
      options: ["√40 ≈ 6.32 m/s", "8 m/s", "10 m/s", "6 m/s"],
      answer: 0, tier: "green"
    },
    {
      q: "If v = 3t² − 12t + 9, at what values of t is the particle at rest?",
      options: ["t = 1 and t = 3", "t = 0 and t = 4", "t = 2 only", "t = 3 only"],
      answer: 0, tier: "green"
    },
    {
      q: "The area under a v–t graph represents:",
      options: ["Displacement", "Acceleration", "Distance (always)", "Speed"],
      answer: 0, tier: "green"
    },

    // AMBER (12)
    {
      q: "A particle's velocity is v = 3t² − 12t + 9. Find the displacement from t = 0 to t = 3 (s = 0 at t = 0).",
      options: ["0 m", "4 m", "8 m", "9 m"],
      answer: 0, tier: "amber"
    },
    {
      q: "For v = 3t² − 12t + 9, find the total distance travelled from t = 0 to t = 3.",
      options: ["8 m", "0 m", "4 m", "12 m"],
      answer: 0, tier: "amber"
    },
    {
      q: "A particle's position is r = (t³ − 4t)i + (2t²)j. Find the speed when t = 2.",
      options: ["8 m/s", "√80 ≈ 8.94 m/s", "√16 m/s", "4√2 m/s"],
      answer: 0, tier: "amber"
    },
    {
      q: "A particle has acceleration a = 6t − 4. It starts with v = 2 m/s at t = 0. Find v at t = 2.",
      options: ["10 m/s", "14 m/s", "6 m/s", "8 m/s"],
      answer: 0, tier: "amber"
    },
    {
      q: "Velocity v = t² − 4t + 3. For what values of t is the particle moving in the negative direction?",
      options: ["1 < t < 3", "t < 1 or t > 3", "t > 3 only", "t < 1 only"],
      answer: 0, tier: "amber"
    },
    {
      q: "A particle starts at s = 2 m with velocity 0 at t = 0. Acceleration a = 3t. Find position at t = 2.",
      options: ["6 m", "4 m", "8 m", "10 m"],
      answer: 0, tier: "amber"
    },
    {
      q: "Using a = v dv/ds, if a = 2s and v = 3 when s = 0, find v when s = 4.",
      options: ["√41 ≈ 6.40 m/s", "√25 = 5 m/s", "√(9+16) = 5 m/s", "7 m/s"],
      answer: 0, tier: "amber"
    },
    {
      q: "A particle's velocity is v = sin(t). What is its acceleration at t = π/2?",
      options: ["0 m/s²", "1 m/s²", "−1 m/s²", "π/2 m/s²"],
      answer: 0, tier: "amber"
    },
    {
      q: "A particle moves in 2D with r = (3t²)i + (t³ − 3t)j. At what time is the j-component of velocity zero (after t = 0)?",
      options: ["t = 1 s", "t = 2 s", "t = 3 s", "t = √3 s"],
      answer: 0, tier: "amber"
    },
    {
      q: "A particle starts at origin with velocity 4 m/s and has acceleration a = −2t. When does the particle first return to the origin?",
      options: ["t = 6 s", "t = 2 s", "t = 4 s", "t = 3 s"],
      answer: 0, tier: "amber"
    },
    {
      q: "A particle's velocity is v = e^(2t). What is the acceleration when t = 0?",
      options: ["2 m/s²", "1 m/s²", "e² m/s²", "0.5 m/s²"],
      answer: 0, tier: "amber"
    },
    {
      q: "For motion with v = 4 − t², the particle reverses direction at t = 2. What is the total distance from t = 0 to t = 4?",
      options: ["21.33 m", "10.67 m", "16 m", "5.33 m"],
      answer: 0, tier: "amber"
    },

    // RED (6)
    {
      q: "A particle of mass 3 kg has velocity v = (2t²)i + (6t − 1)j m/s. Find the magnitude of the force on it at t = 1.",
      options: ["√(144 + 324) ≈ 21.6 N", "12 N", "18 N", "30 N"],
      answer: 0, tier: "red"
    },
    {
      q: "A particle moves along the x-axis with a = 3 − v (where v is the velocity). Given v = 0 at t = 0, find v as a function of t.",
      options: ["v = 3(1 − e^(−t))", "v = 3e^(−t)", "v = 3t − t²/2", "v = 3 − e^(−t)"],
      answer: 0, tier: "red"
    },
    {
      q: "Given v = 3t² − 12t + 9, find the total distance from t = 0 to t = 4.",
      options: ["12 m", "8 m", "16 m", "4 m"],
      answer: 0, tier: "red"
    },
    {
      q: "A particle has position r = (t³ − 6t)i + (t² − 4)j. Find the speed at the instant the particle is moving parallel to the i-direction.",
      options: ["4 m/s", "6 m/s", "2 m/s", "√20 m/s"],
      answer: 0, tier: "red"
    },
    {
      q: "A particle moves with a = v dv/ds = ks where k = 2. Given v = 4 when s = 1, find v when s = 3.",
      options: ["√24 ≈ 4.90 m/s", "√32 ≈ 5.66 m/s", "6 m/s", "√20 ≈ 4.47 m/s"],
      answer: 0, tier: "red"
    },
    {
      q: "A particle's velocity (m/s) changes as v = 12t − 3t² for 0 ≤ t ≤ 4, then v = 0. What is the total distance from t = 0 to t = 5?",
      options: ["64 m", "48 m", "32 m", "80 m"],
      answer: 0, tier: "red"
    }
  ],

  // ─────────────────────────────────────────
  // M6: Projectiles
  // ─────────────────────────────────────────
  M6: [
    // GREEN (12)
    {
      q: "A ball is thrown horizontally at 15 m/s from a height of 20 m. What is the horizontal velocity throughout the flight (ignoring air resistance)?",
      options: ["15 m/s", "0 m/s", "It decreases with time", "9.8 m/s"],
      answer: 0, tier: "green"
    },
    {
      q: "A projectile is fired at 45° to the horizontal. At maximum height, what is the vertical component of velocity?",
      options: ["0 m/s", "u sin 45°", "u cos 45°", "g m/s"],
      answer: 0, tier: "green"
    },
    {
      q: "A ball is thrown with initial speed 20 m/s at 30° above horizontal. What is the initial vertical component of velocity?",
      options: ["10 m/s", "17.3 m/s", "20 m/s", "5 m/s"],
      answer: 0, tier: "green"
    },
    {
      q: "Using g = 9.8 m/s², a projectile is fired horizontally at 10 m/s from a height of 5 m. How long does it take to reach the ground?",
      options: ["1.01 s", "0.51 s", "2.02 s", "0.71 s"],
      answer: 0, tier: "green"
    },
    {
      q: "The range formula for a projectile launched at speed u and angle θ on level ground is:",
      options: ["R = u²sin2θ/g", "R = u²sinθ/g", "R = u²sin²θ/g", "R = 2u sinθ/g"],
      answer: 0, tier: "green"
    },
    {
      q: "At which angle to the horizontal is the range of a projectile on level ground maximised?",
      options: ["45°", "30°", "60°", "90°"],
      answer: 0, tier: "green"
    },
    {
      q: "A ball is thrown at 25 m/s at 60° to the horizontal. What is the initial horizontal velocity component?",
      options: ["12.5 m/s", "21.7 m/s", "25 m/s", "14.4 m/s"],
      answer: 0, tier: "green"
    },
    {
      q: "The vertical component of a projectile's velocity at time t, launched at u sinθ initially, is:",
      options: ["u sinθ − gt", "u sinθ + gt", "u cosθ − gt", "−gt"],
      answer: 0, tier: "green"
    },
    {
      q: "A ball is kicked at 20 m/s horizontally. After 3 s, what is its vertical speed? (g = 9.8)",
      options: ["29.4 m/s", "20 m/s", "9.8 m/s", "60 m/s"],
      answer: 0, tier: "green"
    },
    {
      q: "What does the trajectory equation y = x tanθ − gx²/(2u²cos²θ) represent?",
      options: ["The parabolic path of the projectile (y as a function of x)", "The time of flight", "The maximum height", "The speed at any point"],
      answer: 0, tier: "green"
    },
    {
      q: "A projectile has the same range for launch angles of 30° and 60°. This is because:",
      options: ["sin(2×30°) = sin(2×60°) = sin 60°", "Both angles give the same height", "The horizontal velocities are equal", "The times of flight are equal"],
      answer: 0, tier: "green"
    },
    {
      q: "A ball is launched at 10 m/s at 90° (straight up). What is its maximum height? (g = 9.8)",
      options: ["5.10 m", "10 m", "9.8 m", "20 m"],
      answer: 0, tier: "green"
    },

    // AMBER (12)
    {
      q: "A projectile is launched at 30 m/s at 40° to the horizontal. Find the maximum height reached. (g = 9.8)",
      options: ["19.0 m", "30.4 m", "15.2 m", "45.0 m"],
      answer: 0, tier: "amber"
    },
    {
      q: "A ball is thrown from ground level at 20 m/s at 60° above horizontal. Find the time of flight. (g = 9.8)",
      options: ["3.53 s", "1.77 s", "4.08 s", "2.04 s"],
      answer: 0, tier: "amber"
    },
    {
      q: "Find the range of a projectile launched at 25 m/s at 45° on level ground. (g = 9.8)",
      options: ["63.8 m", "127.6 m", "31.9 m", "51.0 m"],
      answer: 0, tier: "amber"
    },
    {
      q: "A ball is projected from the top of a 40 m cliff at 15 m/s horizontally. How far from the base of the cliff does it land? (g = 9.8)",
      options: ["43.0 m", "86.0 m", "61.2 m", "21.5 m"],
      answer: 0, tier: "amber"
    },
    {
      q: "A projectile passes through the point (60, 20) m where x is horizontal and y is vertical (origin at launch). Given it was launched at 30° to horizontal, find the initial speed.",
      options: ["30.5 m/s", "40.0 m/s", "24.0 m/s", "35.3 m/s"],
      answer: 0, tier: "amber"
    },
    {
      q: "A ball is thrown at 15 m/s at 50° above horizontal from the ground. What is the speed of the ball at maximum height?",
      options: ["9.64 m/s", "11.49 m/s", "0 m/s", "15 m/s"],
      answer: 0, tier: "amber"
    },
    {
      q: "A stone is thrown at 20 m/s at 35° above horizontal from a cliff 30 m high. How long does it take to hit the sea below? (g = 9.8)",
      options: ["3.21 s", "2.35 s", "4.08 s", "1.87 s"],
      answer: 0, tier: "amber"
    },
    {
      q: "A projectile is launched from the ground at angle θ and speed u. Its time to reach maximum height is T/2. Which expression gives T/2?",
      options: ["u sinθ / g", "u cosθ / g", "2u sinθ / g", "u / g"],
      answer: 0, tier: "amber"
    },
    {
      q: "A ball is launched at 40 m/s at 30° above horizontal. Find the horizontal range on level ground. (g = 9.8)",
      options: ["141.4 m", "163.3 m", "81.6 m", "70.7 m"],
      answer: 0, tier: "amber"
    },
    {
      q: "Two projectiles are launched simultaneously at 20 m/s: one at 25° and one at 65°. Which hits the ground first?",
      options: ["The one at 25°", "The one at 65°", "They land at the same time", "Cannot determine without more information"],
      answer: 0, tier: "amber"
    },
    {
      q: "A ball launched at 30° from the ground clears a wall of height 4 m at horizontal distance 20 m. Find the minimum launch speed. (g = 9.8)",
      options: ["16.6 m/s", "20.0 m/s", "12.3 m/s", "23.1 m/s"],
      answer: 0, tier: "amber"
    },
    {
      q: "A projectile's horizontal component of velocity is 12 m/s and its vertical component is −9 m/s (downward) at some point. What is the speed at this instant?",
      options: ["15 m/s", "21 m/s", "3 m/s", "√(144+81) = 15 m/s"],
      answer: 0, tier: "amber"
    },

    // RED (6)
    {
      q: "A projectile is fired from a cliff top 60 m above sea level at 20 m/s at angle 25° below horizontal. Find the time to hit the sea. (g = 9.8)",
      options: ["2.62 s", "1.87 s", "3.50 s", "4.15 s"],
      answer: 0, tier: "red"
    },
    {
      q: "A ball is thrown from a point O at angle 40° above horizontal with speed u. It lands on a slope that falls at angle 15° below horizontal from O. Find u if the ball hits the slope 80 m from O (along slope). (g = 9.8)",
      options: ["23.8 m/s", "30.2 m/s", "18.5 m/s", "27.4 m/s"],
      answer: 0, tier: "red"
    },
    {
      q: "A ball is struck so that it just clears a vertical wall 3 m high placed 15 m horizontally from the launch point, then lands 10 m beyond the wall on the same level as the launch. Find the launch angle. (g = 9.8)",
      options: ["38.7°", "30°", "45°", "52.1°"],
      answer: 0, tier: "red"
    },
    {
      q: "Prove that the trajectory is a parabola: for a projectile launched at speed u and angle θ, show that the trajectory equation is quadratic in x. The coefficient of x² is:",
      options: ["−g / (2u²cos²θ)", "g / (2u²cos²θ)", "−g / (u²cos²θ)", "−g / (2u²)"],
      answer: 0, tier: "red"
    },
    {
      q: "A particle is projected at 50 m/s at angle α above horizontal. It passes through the point (200, 50) measured from the launch point. Using the trajectory equation, find tan α. (g = 9.8)",
      options: ["2.28", "1.00", "0.70", "3.45"],
      answer: 0, tier: "red"
    },
    {
      q: "Two balls are thrown simultaneously from the same point: ball A at 20 m/s at 60°, ball B at 20 m/s at 30° to horizontal. Find the horizontal distance between them when ball A is at its maximum height. (g = 9.8)",
      options: ["17.3 m", "10.0 m", "20.0 m", "34.6 m"],
      answer: 0, tier: "red"
    }
  ],

  // ─────────────────────────────────────────
  // M7: Further Forces (Friction and Inclines)
  // ─────────────────────────────────────────
  M7: [
    // GREEN (12)
    {
      q: "A particle of mass 5 kg rests on a rough horizontal surface. The coefficient of friction is 0.3. What is the maximum friction force? (g = 9.8)",
      options: ["14.7 N", "49 N", "5 N", "1.5 N"],
      answer: 0, tier: "green"
    },
    {
      q: "A particle of mass 4 kg is on a slope of angle 30°. What is the normal reaction? (g = 9.8)",
      options: ["33.9 N", "19.6 N", "39.2 N", "17.0 N"],
      answer: 0, tier: "green"
    },
    {
      q: "A particle is on a rough surface with μ = 0.5. The normal reaction is 20 N. What is the maximum friction force?",
      options: ["10 N", "20 N", "0.5 N", "40 N"],
      answer: 0, tier: "green"
    },
    {
      q: "Friction on a moving particle always acts:",
      options: ["Opposing the direction of motion", "In the direction of motion", "Perpendicular to motion", "Downward"],
      answer: 0, tier: "green"
    },
    {
      q: "A 6 kg particle on a rough slope of angle α has normal reaction R = 6g cosα. If μ = 0.4, what is the friction force at limiting equilibrium?",
      options: ["0.4 × 6g cosα", "0.4 × 6g sinα", "6g cosα", "6g sinα"],
      answer: 0, tier: "green"
    },
    {
      q: "A particle is in limiting equilibrium on a slope of angle 25°. What is the coefficient of friction?",
      options: ["tan 25° ≈ 0.466", "sin 25° ≈ 0.423", "cos 25° ≈ 0.906", "1/tan 25° ≈ 2.14"],
      answer: 0, tier: "green"
    },
    {
      q: "A particle of mass 3 kg slides down a smooth slope of angle 20°. What is the acceleration? (g = 9.8)",
      options: ["3.35 m/s²", "9.8 m/s²", "9.21 m/s²", "1.22 m/s²"],
      answer: 0, tier: "green"
    },
    {
      q: "On a slope at angle α, the component of weight along the slope (downward) is:",
      options: ["mg sinα", "mg cosα", "mg tanα", "mg / sinα"],
      answer: 0, tier: "green"
    },
    {
      q: "A particle moves up a rough slope with friction F = μR. Compared to sliding down the same slope, the deceleration when moving up is:",
      options: ["Greater (friction adds to gravity component)", "Less (friction opposes gravity component)", "The same", "Zero"],
      answer: 0, tier: "green"
    },
    {
      q: "A particle on a horizontal rough surface has μ = 0.6 and weight 50 N. What horizontal force is needed to keep it moving at constant velocity?",
      options: ["30 N", "50 N", "83.3 N", "0 N"],
      answer: 0, tier: "green"
    },
    {
      q: "A particle of mass 2 kg rests on a rough slope of angle 30°. The friction force necessary for equilibrium (particle about to slide down) is:",
      options: ["9.8 N", "16.97 N", "19.6 N", "4.9 N"],
      answer: 0, tier: "green"
    },
    {
      q: "A force P is applied up a slope at limiting equilibrium. If the slope angle doubles, does the required P increase or decrease (assuming same μ and mass)?",
      options: ["Increases (larger component of weight along slope)", "Decreases (friction increases more)", "Stays the same", "Cannot determine"],
      answer: 0, tier: "green"
    },

    // AMBER (12)
    {
      q: "A particle of mass 5 kg is on a rough slope of 35°. μ = 0.3. Find the acceleration when the particle slides down. (g = 9.8)",
      options: ["3.22 m/s²", "5.62 m/s²", "8.03 m/s²", "1.47 m/s²"],
      answer: 0, tier: "amber"
    },
    {
      q: "A particle of mass 8 kg is pushed up a rough slope of 20° by a force P parallel to the slope. μ = 0.25. If P = 60 N, find the acceleration. (g = 9.8)",
      options: ["2.87 m/s²", "7.50 m/s²", "0.93 m/s²", "5.21 m/s²"],
      answer: 0, tier: "amber"
    },
    {
      q: "A horizontal force of 20 N acts on a 5 kg block on a rough horizontal surface (μ = 0.4). Find the acceleration. (g = 9.8)",
      options: ["0.08 m/s²", "4 m/s²", "1.96 m/s²", "2.04 m/s²"],
      answer: 0, tier: "amber"
    },
    {
      q: "A 10 kg particle on a rough slope of 25° is in equilibrium. The friction force is 14.6 N (up the slope). What is μ?",
      options: ["0.161", "0.476", "0.423", "0.340"],
      answer: 0, tier: "amber"
    },
    {
      q: "A particle of mass 4 kg is pulled up a rough slope of 30° by a force parallel to the slope. μ = 0.2. Find the minimum force P to move the particle. (g = 9.8)",
      options: ["26.2 N", "19.6 N", "6.6 N", "33.0 N"],
      answer: 0, tier: "amber"
    },
    {
      q: "A force of 30 N at 20° above horizontal is applied to a 5 kg block on a rough horizontal surface (μ = 0.35). Find the normal reaction. (g = 9.8)",
      options: ["38.8 N", "49 N", "59.2 N", "30 N"],
      answer: 0, tier: "amber"
    },
    {
      q: "Using the result from above (R = 38.8 N), find the acceleration of the block when the 30 N force at 20° is applied. (g = 9.8)",
      options: ["2.29 m/s²", "6.0 m/s²", "1.56 m/s²", "3.48 m/s²"],
      answer: 0, tier: "amber"
    },
    {
      q: "A particle on a slope of angle α is in limiting equilibrium. If μ = 0.6, find α.",
      options: ["30.96°", "45°", "53.1°", "36.87°"],
      answer: 0, tier: "amber"
    },
    {
      q: "Two particles: A (4 kg) on a rough slope of 30° (μ = 0.2) and B (3 kg) hanging vertically, connected by string over smooth pulley. Does the system accelerate? Which way?",
      options: ["Yes, B descends (drives A up slope)", "Yes, A slides down (drives B up)", "No, system is in equilibrium", "Cannot determine"],
      answer: 0, tier: "amber"
    },
    {
      q: "A particle is projected at 5 m/s up a rough slope of 20°, μ = 0.3. How far up the slope does it travel before stopping? (g = 9.8)",
      options: ["2.07 m", "3.54 m", "1.27 m", "4.16 m"],
      answer: 0, tier: "amber"
    },
    {
      q: "A particle of mass 3 kg is on a rough horizontal surface (μ = 0.5). A force of P N is applied at angle 30° below the horizontal. Find the range of P for the particle to remain in equilibrium.",
      options: ["0 ≤ P ≤ 13.0 N", "0 ≤ P ≤ 14.7 N", "0 ≤ P ≤ 8.5 N", "0 ≤ P ≤ 25.5 N"],
      answer: 0, tier: "amber"
    },
    {
      q: "A particle on a rough slope (μ = 0.4, angle 30°) is acted on by a horizontal force H. The particle is in limiting equilibrium about to move up the slope. Find H (mass = 3 kg, g = 9.8).",
      options: ["41.0 N", "19.6 N", "27.7 N", "13.3 N"],
      answer: 0, tier: "amber"
    },

    // RED (6)
    {
      q: "Particle A (5 kg) on a rough slope of 35° (μ = 0.3) is connected over a smooth pulley at the top to particle B (4 kg) hanging freely. Find the acceleration and state which way A moves. (g = 9.8)",
      options: ["a ≈ 0.38 m/s², A moves up", "a ≈ 0.38 m/s², A moves down", "a ≈ 2.45 m/s², A moves up", "System is in equilibrium"],
      answer: 0, tier: "red"
    },
    {
      q: "A particle of mass m slides down a rough slope of angle 45° with μ = 1/√2. What is the acceleration?",
      options: ["0 m/s²", "g/√2 m/s²", "g m/s²", "g(1 − 1/√2) m/s²"],
      answer: 0, tier: "red"
    },
    {
      q: "A 10 kg block is on a rough slope (angle α, μ = 0.3). A force of 60 N parallel to and up the slope gives acceleration 2 m/s² up the slope. Find α. (g = 9.8)",
      options: ["23.6°", "35.0°", "17.2°", "30.0°"],
      answer: 0, tier: "red"
    },
    {
      q: "A particle is projected up a rough slope of 30° with initial speed 8 m/s (μ = 0.4). Find the speed when it returns to the starting point. (g = 9.8)",
      options: ["4.10 m/s", "5.64 m/s", "6.86 m/s", "8.00 m/s"],
      answer: 0, tier: "red"
    },
    {
      q: "A particle rests on a rough slope of angle α. A force P is applied horizontally into the slope. Resolving perpendicular to slope gives R = mg cosα + P sinα. Along slope (limiting equilibrium, about to slide up): P cosα = mg sinα + μR. Express μ in terms of P, m, g and α.",
      options: ["μ = (P cosα − mg sinα) / (mg cosα + P sinα)", "μ = (P sinα + mg cosα) / (P cosα)", "μ = (mg sinα) / (P cosα)", "μ = P/(mg)"],
      answer: 0, tier: "red"
    },
    {
      q: "A 6 kg block on a rough horizontal surface (μ = 0.35) is connected by a horizontal string to a 4 kg block hanging over a smooth pulley at the table edge. Find the acceleration and tension. (g = 9.8)",
      options: ["a = 1.848 m/s², T = 32.4 N", "a = 3.92 m/s², T = 23.5 N", "a = 2.45 m/s², T = 27.3 N", "a = 0 m/s², T = 39.2 N"],
      answer: 0, tier: "red"
    }
  ]
};
