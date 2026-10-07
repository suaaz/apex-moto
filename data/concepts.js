// Daily Knowledge: Engineering, Dynamics & Design Concepts in Powerbikes
const BIKE_CONCEPTS = [
  {
    id: "quickshifter-auto-blipper",
    name: "Quickshifters & Auto-Blippers",
    subtitle: "Clutchless shifting in under 50 milliseconds",
    category: "Transmission Engineering",
    icon: "zap",
    summary: "How modern superbikes upshift and downshift seamlessly at full throttle without touching the clutch lever.",
    analogy: "Imagine cutting the engine's heartbeat for the blink of an eye so the gears can slide into place without resisting the load.",
    howItWorks: "When you push up on the foot shift lever, a micro-strain-gauge sensor detects the mechanical pressure before the dogs in the gearbox disengage. In less than 50 milliseconds, the bike's ECU cuts ignition spark or fuel injection. This instantaneously relieves tension from the gearbox transmission shafts, allowing the shift drum to click into the next higher gear seamlessly with zero throttle release. For downshifts, the Auto-Blipper does the opposite: the fly-by-wire electronic throttle body blips the throttle plates open for a fraction of a second to rev-match the engine speed to rear wheel speed.",
    whyItMatters: [
      "Zero drop in acceleration during full-throttle upshifts down straightaways.",
      "Prevents destabilizing chassis pitch caused by manually closing and reopening the throttle.",
      "Allows the rider to keep full grip and braking focus on the handlebars entering tight corners."
    ],
    signatureBikes: ["Yamaha YZF-R1", "BMW S 1000 RR", "Ducati Panigale V4", "Kawasaki ZX-10R", "KTM 1290 Super Duke R"]
  },
  {
    id: "crossplane-crankshaft",
    name: "Crossplane vs Flatplane Crankshaft",
    subtitle: "The secret behind the Yamaha R1's V8 growl & rear tire grip",
    category: "Engine Dynamics",
    icon: "rotate-ccw",
    summary: "Why shifting cylinder firing intervals by 90 degrees transforms how tires grip the asphalt.",
    analogy: "A traditional inline-4 engine is like two sprinters jumping simultaneously, causing jerky pulses. A crossplane is four sprinters jogging in a rhythmic cadence, delivering uninterrupted forward push.",
    howItWorks: "Standard inline-four motorcycles use a 'flatplane' 180° crankshaft where pistons 1 & 4 move together, and pistons 2 & 3 move oppositely. While easy to balance, this creates massive 'inertial torque' fluctuations that mask the rider's throttle connection to the rear tire. In 2004 MotoGP (and 2009 production R1), Yamaha introduced the Crossplane (CP4) crank: crankpins are spaced at 90° intervals in a cross pattern. Firing occurs unevenly at 270°-180°-90°-180°. This cancels inertial crankshaft drag, giving the rider purely combustion-driven torque directly to the rear tire contact patch.",
    whyItMatters: [
      "Provides unmatched rear tire feedback when rolling on the throttle while leaned at high angles.",
      "Creates the signature, intoxicating low-frequency burble and howling exhaust note similar to a racing V8.",
      "Significantly reduces sudden high-side slide risks compared to peaky flatplane rev screamers."
    ],
    signatureBikes: ["Yamaha YZF-R1 / R1M", "Yamaha MT-10", "Yamaha MT-07 (CP2 270° variation)"]
  },
  {
    id: "desmodromic-valves",
    name: "Desmodromic Valve Actuation",
    subtitle: "Why Ducati refuses to use traditional valve springs",
    category: "Valvetrain Mechanics",
    icon: "cpu",
    summary: "A mechanical closing cam system that forces valves open and shut without relying on metal springs.",
    analogy: "Instead of throwing a ball and waiting for gravity or an elastic band to bring it back, you hold a rod firmly attached to the ball and push it up and pull it down by hand.",
    howItWorks: "In a standard internal combustion engine, the camshaft pushes valves open, while coiled steel springs push them closed. At extreme RPM (14,000+), springs suffer from resonance, harmonic lag, and fatigue—causing 'valve float' where the valve stays partially open and gets smashed by the ascending piston. Ducati's Desmodromic valvetrain utilizes two cam lobes and two rocker arms per valve: one cam lobe pushes the valve open, and a second conjugate cam lobe physically pulls it closed. This positive mechanical closure guarantees precise timing regardless of RPM.",
    whyItMatters: [
      "Allows extreme valve lift profiles and aggressive cam grinds impossible with springs.",
      "Completely eliminates high-RPM valve float failure.",
      "Delivers the distinct mechanical acoustic chatter and racing identity that defines Ducati."
    ],
    signatureBikes: ["Ducati Panigale V4 R", "Ducati Streetfighter V4", "Ducati Monster", "Ducati Hypermotard 950"]
  },
  {
    id: "imu-cornering-abs",
    name: "6-Axis IMU & Lean-Sensitive ABS",
    subtitle: "How aerospace gyroscopes keep you upright at 55 degrees of lean",
    category: "Rider Electronics & Safety",
    icon: "activity",
    summary: "The miniature electronic sensor that calculates motorcycle pitch, roll, and yaw 100 times per second.",
    analogy: "Like the inner ear vestibular system in humans that maintains your balance while sprinting around a slippery corner.",
    howItWorks: "An Inertial Measurement Unit (IMU) houses microscopic MEMS accelerometers and gyroscopic sensors measuring acceleration and rotational velocity across three axes: Roll (lean angle), Pitch (acceleration wheelie or braking stoppie), and Yaw (rear wheel drift/slide). When the rider grabs a fistful of front brake while leaned at 50 degrees mid-corner, conventional ABS would cause the bike to stand upright and run off the road. Lean-sensitive ABS (Bosch MSC) uses IMU data to modulate brake line hydraulic pressure, calculating the exact remaining contact patch of the tire so you can brake mid-corner without sliding or low-siding.",
    whyItMatters: [
      "Eliminates the #1 fatal error in amateur superbike riding: panic braking mid-turn.",
      "Enables wheelie control, slide control, and launch control without crude cuts in power.",
      "Transforms a 200+ HP land missile into a manageable, responsive riding machine."
    ],
    signatureBikes: ["BMW S 1000 RR", "Aprilia RSV4 Factory", "KTM 1290 Super Duke R", "Honda Fireblade SP", "Ducati Panigale V4"]
  },
  {
    id: "slipper-clutch",
    name: "Slipper Clutch (Back-Torque Limiter)",
    subtitle: "Preventing rear-wheel lockup during aggressive downshifts",
    category: "Transmission & Drivetrain",
    icon: "shield",
    summary: "How an angled ramp mechanism allows the clutch to slip automatically when engine braking exceeds rear tire traction.",
    analogy: "A ratchet socket wrench that grips when turning one direction to fasten a bolt, but clicks freely when turned in reverse.",
    howItWorks: "When accelerating, engine torque drives the rear wheel through the clutch plates. However, when you stomp down two gears under hard braking for a corner, the rear wheel is suddenly spinning much faster than the engine. The resulting reverse torque (back-torque) tries to drag the engine speed up, creating huge engine braking forces that can lock the rear tire or cause violent 'wheel hop' and chassis instability. A slipper clutch features helical ramps between the inner hub and pressure plate. Under back-torque, the ramps force the pressure plate outward, allowing the clutch friction plates to partially slip until wheel speed and engine speed equalize.",
    whyItMatters: [
      "Prevents terrifying rear wheel chatter and lockup during threshold braking into corners.",
      "Protects transmission gear teeth and timing chains from severe shock loads.",
      "Modern assist-and-slipper clutches also reduce clutch lever pull effort by up to 40%."
    ],
    signatureBikes: ["Kawasaki Ninja ZX-6R", "Yamaha MT-09", "Bajaj Dominar 400", "Honda CBR650R", "Suzuki GSX-R1000"]
  },
  {
    id: "aerodynamic-winglets",
    name: "Aerodynamic Downforce Winglets",
    subtitle: "Using air pressure instead of traction control to kill wheelies",
    category: "Chassis & Aerodynamics",
    icon: "wind",
    summary: "Inverted airfoil wing structures mounted to fairings that generate upward of 35+ kg of downforce at high speed.",
    analogy: "Like airplane wings flipped upside-down—instead of creating lift to take flight, they generate downward thrust to glue the bike to the ground.",
    howItWorks: "Modern 1000cc superbikes produce over 215 horsepower while weighing under 190 kg. In 1st, 2nd, and 3rd gear, full throttle causes the front tire to rise off the ground (wheelie). Electronic wheelie control curbs this by retarding ignition timing or closing throttle valves, which effectively cuts engine acceleration. Aerodynamic winglets produce aerodynamic downforce proportional to the square of velocity (\(F \propto v^2\)). At 250–300 km/h, the winglets press the front wheel into the asphalt with up to 37 kg (81 lbs) of force, keeping the front wheel planted so the engine can deploy 100% full power.",
    whyItMatters: [
      "Riders can stay wide-open throttle out of corner exits without the ECU choking engine power.",
      "Enhances front tire mechanical grip and brake stability during 300+ km/h straightaway braking markers.",
      "Reduces high-speed handlebar head-shake (tank slappers) at top speeds."
    ],
    signatureBikes: ["Ducati Panigale V4 S", "BMW M 1000 RR", "Aprilia RSV4 Xtrenta", "Honda CBR1000RR-R Fireblade SP", "Kawasaki Ninja H2R"]
  },
  {
    id: "usd-forks-vs-conventional",
    name: "Inverted (USD) Forks vs Conventional Forks",
    subtitle: "Why the thickest tube belongs at the top of the suspension",
    category: "Suspension Dynamics",
    icon: "maximize-2",
    summary: "How flipping front suspension tubes upside down drastically reduces unsprung mass and eliminates braking flex.",
    analogy: "Holding a fishing rod by its thick handle versus holding it by the flexible thin tip when trying to pull against a heavy weight.",
    howItWorks: "In a conventional telescopic fork, the heavy outer slider tube is attached to the front wheel axle, while the thinner chrome stanchion is clamped to the steering triple clamp. In an Inverted or Upside-Down (USD) fork, the thick outer aluminum tube is clamped directly into the motorcycle's triple tree clamps, and the thinner inner tube slides down near the wheel. This achieves two crucial engineering feats: it places the strongest, largest diameter tube at the point of highest bending stress (under hard braking), and it keeps the heavier components off the wheel, minimizing 'unsprung weight'.",
    whyItMatters: [
      "Massive reduction in unsprung mass allows the front wheel to follow road ripples with higher frequency and sensitivity.",
      "Resists torsional flex and binding when trail-braking hard into corners.",
      "Provides sharper steering precision and greater rider confidence at lean."
    ],
    signatureBikes: ["Yamaha MT-07 / MT-09", "Bajaj Dominar 400", "Kawasaki ZX-6R", "Triumph Street Triple RS", "Royal Enfield Himalayan 450"]
  },
  {
    id: "bmw-telelever",
    name: "BMW Telelever: Anti-Dive Geometry",
    subtitle: "Separating steering duties from braking forces",
    category: "Chassis & Front-End Engineering",
    icon: "layers",
    summary: "How a central automotive-style A-arm wishbone eliminates front-end dive during emergency braking.",
    analogy: "A car's independent double-wishbone suspension adapted to a motorcycle's front wheel.",
    howItWorks: "When you hit the front brakes on a standard fork motorcycle, the forks compress deeply (dive), steepening the steering angle and consuming all suspension travel. If you hit a bump while diving, the fork can bottom out and lose traction. BMW's Telelever system separates braking force dissipation from steering. The fork stanchions contain no internal damping springs—they merely slide and steer. A triangular trailing A-arm (wishbone) pivots off the engine crankcase to a ball joint at the fork lower bridge, supported by a central monoshock spring. Under braking, forces are transferred directly into the rigid engine casing instead of compressing the front steering head.",
    whyItMatters: [
      "Completely prevents front-end dive, keeping chassis pitch flat and headlights aimed forward.",
      "Preserves 100% of suspension travel even during panic stops over potholes or gravel.",
      "Enables relaxed, fatigue-free long-distance trans-continental touring across rough African and global terrain."
    ],
    signatureBikes: ["BMW R 1250 GS Adventure", "BMW R 1300 GS", "BMW R 1250 RT"]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { BIKE_CONCEPTS };
}
