// ==========================================================================
// AUTOMOBILE & MOTORCYCLE ENGINE ENGINEERING COMPENDIUM
// Deep Dive into Internal Combustion Physics, Architectures & Heritage
// ==========================================================================

const AUTOMOBILE_ENGINES = [
  {
    id: "inline-6-straight-six",
    name: "Inline-6 (Straight-Six)",
    category: "Car Engine Architecture",
    badge: "Naturally Balanced",
    heroImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    summary: "The holy grail of engine balance: six cylinders arranged in a single row that naturally eliminate both primary and secondary vibrational forces.",
    famousVehicles: ["BMW M3 (E46 S54 / G80 S58)", "Toyota Supra (2JZ-GTE)", "Nissan Skyline GT-R (RB26DETT)", "Mercedes-Benz M256", "Jaguar E-Type (XK)"],
    physicsExplained: "Most 4-cylinder engines require weighted balance shafts spinning at twice crankshaft speed because the pistons moving upward accelerate faster than pistons moving downward, creating an inherent 'secondary vertical imbalance'. In an Inline-6, pistons are paired in mirror symmetry (1-6, 2-5, 3-4) with crankpins spaced at 120°. As one piston reaches top dead center, another is moving downward and a third is at mid-stroke. All primary reciprocating forces, secondary forces, and rocking couples cancel each other out completely without needing any parasitic balance shafts.",
    pros: [
      "Inherent, glass-like mechanical smoothness from idle to redline.",
      "Only one cylinder head and two camshafts, reducing valvetrain complexity compared to V6.",
      "Exceptional aftermarket boost tolerance due to thick, continuous cast-iron/aluminum block webbing."
    ],
    cons: [
      "Great physical length makes transverse mounting in front-wheel-drive cars nearly impossible.",
      "Long crankshaft is susceptible to torsional twisting vibrations at very high RPM.",
      "Consumes valuable frontal crumple-zone crash space in engine bays."
    ],
    engineeringFact: "Because the Inline-6 has zero primary and secondary vibrational shaking, engineers at BMW and Toyota can mount the engine on stiffer rubber bushings, transmitting raw mechanical throttle response directly to the chassis without cockpit vibrations."
  },
  {
    id: "v8-crossplane-vs-flatplane",
    name: "V8: Crossplane vs Flatplane",
    category: "Car Engine Architecture",
    badge: "The Dual Soul of the V8",
    heroImage: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=80",
    summary: "Why a Ferrari V8 screams like a musical instrument while a Ford Mustang or AMG V8 rumbles with a chest-thumping growl.",
    famousVehicles: [
      "Crossplane: Ford Mustang GT (5.0 Coyote), Chevrolet Corvette Stingray, Mercedes-AMG C63 (M177)",
      "Flatplane: Ferrari 458 Italia (F136), Ferrari F8 Tributo, Corvette Z06 (LT6), Porsche 918 Spyder"
    ],
    physicsExplained: "A V8 consists of two 4-cylinder banks sharing a single crankshaft at a 90° angle. How the crankpins are arranged dictates its entire acoustic and physical identity:\n\n• Crossplane (90° Pins): Crankpins are arranged in four planes forming a cross. Firing pulses alternate between cylinder banks unevenly (Left-Right-Left-Left-Right-Left-Right-Right). This uneven pulsing causes exhaust gas shockwaves to collide in the exhaust headers, generating the iconic low-frequency 'American rumble'. It requires heavy crankshaft counterweights to balance an end-to-end rocking couple.\n\n• Flatplane (180° Pins): All crankpins sit in a single flat plane (like two 4-cylinder engines fused together). Firing pulses alternate strictly Left-Right-Left-Right every 90°. Because no massive counterweights are needed, the crankshaft is ultra-light, allowing the engine to rev instantaneously to 9,000 RPM with an acoustic, high-frequency exotic scream.",
    pros: [
      "Crossplane: Silky-smooth primary/secondary balance, ideal for luxury cruisers and effortless low-end muscle torque.",
      "Flatplane: Lightning-fast throttle rev response, lighter rotational inertia, and optimal exhaust scavenging for maximum high-RPM horsepower."
    ],
    cons: [
      "Crossplane: Heavy counterweights resist rapid rev changes; exhaust pulse interference requires complex crossover X-pipes.",
      "Flatplane: Suffers severe secondary vibrational shaking that can loosen electronics and rattle steering columns if displacement exceeds 4.5–5.5L."
    ],
    engineeringFact: "When Chevrolet developed the flatplane 5.5L LT6 V8 for the Corvette Z06 (the most powerful naturally aspirated production V8 in history at 670 HP), the secondary vibrations were so intense that test engines literally shook their own oil filters loose until engineers reinforced the mounting brackets."
  },
  {
    id: "flat-6-boxer",
    name: "Flat-6 (Horizontally Opposed Boxer)",
    category: "Car Engine Architecture",
    badge: "Porsche's Signature Center of Gravity",
    heroImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    summary: "Two banks of three cylinders lying flat horizontally, punching toward and away from each other like prize fighters.",
    famousVehicles: ["Porsche 911 GT3 (4.0L 9,000 RPM)", "Porsche 911 Turbo S", "Subaru WRX STI (EJ25/FA24 Flat-4 cousin)", "Porsche Cayman GT4 RS"],
    physicsExplained: "In a Boxer engine, opposing pistons share individual crankpins 180° apart. When piston 1 reaches top dead center moving outward, opposing piston 2 also reaches top dead center moving in the exact opposite direction. Because the pistons mirror each other's movement perfectly, their reciprocating masses cancel each other out completely. Furthermore, the engine is physically flat and sits barely inches off the ground, lowering the vehicle's center of gravity drastically compared to upright inline or tall V engines.",
    pros: [
      "Ultra-low center of gravity drastically reduces body roll in high-speed corners.",
      "Inherent primary and secondary balance eliminates the need for balance shafts.",
      "Short overall length allows rear-engine mounting behind the rear axle in the Porsche 911."
    ],
    cons: [
      "Very wide packaging crowds vehicle suspension width and requires creative steering geometry.",
      "Two separate cylinder heads, two timing chains, and dual exhaust manifolds increase manufacturing cost.",
      "Gravity causes engine oil to pool in lower cylinder walls and valve guides when parked, requiring dry-sump scavenging systems."
    ],
    engineeringFact: "Not all flat engines are Boxers! In a true 'Boxer', opposing pistons reach top dead center at the exact same instant (punching together). In a 180° V-engine (like the Ferrari Testarossa Flat-12), opposing pistons share the same crankpin, meaning as one reaches TDC, the other is at bottom dead center."
  },
  {
    id: "v12-engine",
    name: "The V12 Engine (60° & 65°)",
    category: "Car Engine Architecture",
    badge: "The Pinnacle of Prestige",
    heroImage: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80",
    summary: "Two inherently balanced straight-six engines joined at the hip, delivering uninterrupted power strokes and auditory perfection.",
    famousVehicles: ["Ferrari Daytona SP3 / 812 Superfast", "Lamborghini Aventador / Revuelto", "Aston Martin DBS Superleggera", "McLaren F1 (BMW S70/2)", "Rolls-Royce Phantom"],
    physicsExplained: "A four-stroke engine requires 720° of crankshaft rotation (two full turns) for all cylinders to fire. In a 4-cylinder engine, a power stroke occurs every 180° (leaving gaps between pulses). In an 8-cylinder engine, power occurs every 90°. In a 12-cylinder engine, a fresh combustion stroke fires every 60° of crankshaft rotation. Because each combustion stroke lasts roughly 180°, there are always three cylinders delivering positive power simultaneously! Power delivery is completely continuous, creating seamless turbine-like thrust with zero power valleys.",
    pros: [
      "Flawless primary, secondary, and firing balance: you can balance a coin on edge atop a running V12 engine block.",
      "Continuous power overlap delivers turbine-like, uninterrupted linear acceleration.",
      "The undisputed acoustic gold standard of motorsport: twelve miniature explosions firing every 60° create a symphonic high-pitch howl."
    ],
    cons: [
      "Immense physical size, heavy weight, and extreme thermal radiation.",
      "Astronomical parts count: 48 valves, 4 camshafts, 24 spark plugs (twin-spark), and complex dual ECUs.",
      "High fuel consumption and immense struggle to meet stringent modern Euro 7 / EPA emissions standards."
    ],
    engineeringFact: "Gordon Murray specified the BMW S70/2 6.1L V12 for the legendary McLaren F1 without any flywheel counterweights because the 12-cylinder firing cadence was so smooth that the engine revved from idle to 7,500 RPM in just 0.4 seconds, requiring heat shields lined with pure 24-karat gold foil in the engine bay."
  },
  {
    id: "w16-quad-turbo",
    name: "Bugatti W16 (Quad-Turbocharged 8.0L)",
    category: "Car Engine Architecture",
    badge: "Hypercar Engineering Leviathan",
    heroImage: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    summary: "Two narrow-angle VR8 engines joined on a single crankshaft with four turbochargers, pumping out 1,600 horsepower.",
    famousVehicles: ["Bugatti Chiron Super Sport 300+ (490.48 km/h)", "Bugatti Veyron 16.4", "Bugatti Bolide", "Bugatti Tourbillon (V16 predecessor)"],
    physicsExplained: "If Bugatti had built a traditional V16, the engine would have been nearly 1.5 meters long—impossible to fit inside a passenger car. Visionary engineer Ferdinand Piëch solved this using the 'W' configuration: two VR-style cylinder banks (each containing two staggered rows offset by just 15°) joined at a 90° angle onto a single crankshaft. The resulting 16-cylinder engine is no longer than a standard V12. To feed 8.0 liters of displacement at 1,600 HP, Bugatti fitted four sequential turbochargers, two titanium water-to-air intercoolers, and ten separate radiators.",
    pros: [
      "Produces a staggering 1,600 HP and 1,600 Nm of torque from 2,000 to 7,000 RPM.",
      "Compact length enabled packaging into an all-wheel-drive mid-engine road car.",
      "Shattered the elusive 300 mph (490 km/h) road-car barrier."
    ],
    cons: [
      "Generates colossal thermal energy: at top speed, the engine must reject enough heat to heat 10 family homes in winter.",
      "Consumes 45,000 liters of air per minute and empties its 100-liter fuel tank in 9 minutes at full throttle.",
      "Weighs over 400 kg (880 lbs) for the engine block and turbocharging plumbing alone."
    ],
    engineeringFact: "During early dyno testing of the original 1001-HP Veyron W16 engine in Wolfsburg, Germany, the engine's titanium exhaust gases burned so hot that it caught the factory building's exhaust extraction ventilation system on fire!"
  },
  {
    id: "rotary-wankel",
    name: "Wankel Rotary Engine",
    category: "Car Engine Architecture",
    badge: "Pistonless Revolutions",
    heroImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    summary: "Zero pistons, zero valves, zero camshafts: a triangular rotor orbiting inside an epitrochoid housing.",
    famousVehicles: ["Mazda 787B (1991 24 Hours of Le Mans Winner)", "Mazda RX-7 (FD3S twin-turbo 13B-REW)", "Mazda RX-8 (Renesis 13B-MSP)"],
    physicsExplained: "Instead of reciprocating pistons that must come to a dead stop at top and bottom dead center thousands of times per minute, Felix Wankel designed an eccentric triangular rotor orbiting inside an oval-peanut (epitrochoid) housing. As the rotor spins, the three cavities between its flanks expand and contract, executing Intake, Compression, Power, and Exhaust simultaneously on three different sides. The output eccentric shaft spins three times faster than the rotor, producing one power stroke per rotor revolution with zero reciprocating inertia.",
    pros: [
      "Remarkable power-to-weight ratio: a 1.3L two-rotor engine can generate over 280+ HP while being small enough to fit inside a carry-on suitcase.",
      "Virtually zero reciprocating vibration, allowing effortless revving past 9,000–10,000 RPM.",
      "Has only three primary moving parts (two rotors and an eccentric shaft) compared to hundreds in a piston engine."
    ],
    cons: [
      "Apex seal wear: the seals at the tips of the rotor slide continuously against the housing wall under intense heat, causing compression loss over time.",
      "Low thermal efficiency: the elongated crescent-shaped combustion chamber causes slow flame propagation and high unburnt hydrocarbon emissions.",
      "Consistently consumes motor oil by design via oil-metering pumps that lubricate apex seals."
    ],
    engineeringFact: "The 4-rotor Mazda 787B remains the only rotary-powered car in history to win the 24 Hours of Le Mans (1991). When race inspectors tore down the engine after 24 hours of flat-out 9,000-RPM racing, the internal apex seals showed virtually zero measurable wear."
  }
];

const MOTORCYCLE_ENGINES = [
  {
    id: "v4-superbike-engine",
    name: "The 90° & 65° V4 Engine",
    category: "Motorcycle Engine Architecture",
    badge: "MotoGP Masterclass",
    heroImage: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
    summary: "The definitive engine architecture of modern MotoGP: combining the slim frontal profile of a twin with the 220+ HP top end of a four.",
    famousBikes: ["Ducati Panigale V4 / Streetfighter V4", "Aprilia RSV4 Factory 1100", "Honda RC213V-S / VFR800", "Yamaha YZR500 (2-Stroke V4 heritage)"],
    physicsExplained: "An Inline-4 engine is very wide across the frame, forcing the motorcycle's fairing to be broad (hurting aerodynamic drag) and carrying a long crankshaft that resists leaning into corners due to gyroscopic precession. A V4 engine splits the four cylinders into two front and two rear banks. The crankshaft is half as long, meaning the bike can be aggressively narrow and flick from full lean left to full lean right with minimal physical effort. In a 90° V4 (like Ducati's Desmosedici Stradale), primary balance is perfect, while a counter-rotating crankshaft spins backwards relative to the wheels to cancel wheelie inertia.",
    pros: [
      "Narrow engine cross-section enables knife-edge aerodynamics and deep 60°+ lean angles without footpeg scraping.",
      "Short, ultra-stiff crankshaft resists torsional bending and drastically reduces gyroscopic resistance to steering inputs.",
      "Centralizes heavy engine mass directly between the frame rails for razor-sharp handling agility."
    ],
    cons: [
      "Extreme thermal heat: the rear two cylinder heads sit directly beneath the rider's seat and fuel tank, requiring complex heat shielding.",
      "Significantly higher manufacturing complexity: requires two cylinder heads, four camshafts, two exhaust headers, and dual cam-drive gear trains.",
      "Difficult maintenance access: valve clearance checks and spark plug replacements often require dropping the entire engine from the frame."
    ],
    engineeringFact: "Ducati's MotoGP and Panigale V4 engines feature a counter-rotating crankshaft that spins in the opposite direction of the road wheels. By spinning backward, the engine creates reverse gyroscopic torque that actively pushes the front wheel down during full acceleration, helping eliminate wheelies naturally!"
  },
  {
    id: "270-crossplane-parallel-twin",
    name: "270° Crossplane Parallel-Twin",
    category: "Motorcycle Engine Architecture",
    badge: "The Modern Industry Paradigm",
    heroImage: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
    summary: "Why virtually every modern motorcycle manufacturer replaced 180° twins with 270° crankpin offset.",
    famousBikes: ["Yamaha MT-07 / Ténéré 700 / R7 (CP2)", "Honda Africa Twin CRF1100L / Transalp 750", "Suzuki GSX-8S / V-Strom 800DE", "BMW F 900 GS", "Aprilia RS 660 / Tuono 660", "Royal Enfield Interceptor 650"],
    physicsExplained: "For decades, parallel twins used a 180° crankshaft (as one piston rises, the other falls). While easy to balance, this created flat, buzzy exhaust notes and peaky power delivery. In a 270° crankshaft, the second crankpin is rotated 90° out of phase (270° rotation). This reproduces the exact firing interval (270° then 450°) of a 90° V-Twin! The rider gets the booming syncopated exhaust note, immense off-idle traction, and direct rear-tire feedback of a V-Twin, but inside a parallel-twin block that is cheap to cast, lightweight, and leaves huge room behind the engine for rear suspension monoshocks and catalytic converters.",
    pros: [
      "Replicates the rich exhaust sound and tractive rear-wheel grip of a 90° V-Twin.",
      "Significantly cheaper, lighter, and more compact to manufacture than a V-Twin (only 1 cylinder head, 1 cam chain).",
      "Leaves immense packaging space behind the engine for long swingarms and exhaust catalytic converters."
    ],
    cons: [
      "Has an uneven rocking couple that requires a weighted balance shaft to prevent handlebar numbness.",
      "Cannot match the ultimate 14,000+ RPM screaming top-end horsepower of an inline-four of equivalent displacement."
    ],
    engineeringFact: "Between 2014 and 2024, Yamaha, Honda, Suzuki, BMW, Aprilia, and Triumph all introduced brand-new 270° parallel-twin engine platforms. It has officially become the dominant engine configuration of 21st-century middleweight motorcycling."
  },
  {
    id: "inline-four-cp4-screamer",
    name: "Inline-Four (Screamer vs Crossplane CP4)",
    category: "Motorcycle Engine Architecture",
    badge: "15,000 RPM Superbike Standard",
    heroImage: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1200&q=80",
    summary: "The engine architecture that conquered road racing: short stroke, four tiny pistons, and an intoxicating 15,000-RPM redline.",
    famousBikes: [
      "Flatplane Screamer: BMW S 1000 RR, Kawasaki Ninja ZX-10R / ZX-6R, Honda CBR1000RR-R Fireblade, Suzuki GSX-R1000",
      "Crossplane CP4: Yamaha YZF-R1 / R1M, Yamaha MT-10"
    ],
    physicsExplained: "To make enormous horsepower without turbocharging, an engine must breathe immense air volume by spinning at astronomical RPM (\(\text{HP} = \frac{\text{Torque} \times \text{RPM}}{5252}\)). Inline-fours divide 1000cc across four miniature pistons with extreme oversquare bore-to-stroke ratios (e.g. 81mm bore with barely 48mm stroke). The pistons travel barely 1.9 inches per stroke, allowing them to cycle 250 times per second without exceeding metallurgy velocity limits. While standard screamers fire at 180° intervals, Yamaha's Crossplane CP4 staggers crankpins at 90° intervals to cancel inertial torque, letting riders lay down 200 HP mid-corner without tire slide spikes.",
    pros: [
      "Unrivaled naturally aspirated specific output: produces over 215 HP from just 1,000cc of displacement.",
      "Screaming top-end acceleration that pulls relentlessly down racetrack straightaways.",
      "Extremely smooth at cruising speeds with broad, accessible powerbands."
    ],
    cons: [
      "Lacks bottom-end torque below 6,000 RPM, requiring riders to constantly downshift for rapid street overtaking.",
      "Wide engine block across the frame forces wide aerodynamics and larger frontal surface area.",
      "Requires expensive titanium valves and finger-follower valvetrains to survive 15,000-RPM inertia."
    ],
    engineeringFact: "At 14,500 RPM on a Honda Fireblade or BMW S 1000 RR, each titanium intake valve opens and closes in approximately 4 milliseconds. In that blink of an eye, the valve must accelerate from a dead stop, open 11mm, stop, and snap shut without bouncing off the valve seat!"
  },
  {
    id: "boxer-flat-twin-moto",
    name: "BMW Boxer Twin (ShiftCam 1254cc / 1300cc)",
    category: "Motorcycle Engine Architecture",
    badge: "The Trans-Continental Icon",
    heroImage: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
    summary: "Two massive cylinder heads jutting out laterally into the breeze, lowering center of gravity and powering round-the-world expeditions.",
    famousBikes: ["BMW R 1300 GS", "BMW R 1250 GS Adventure", "BMW R 1200 GS", "BMW R 18 (Massive 1800cc cruiser boxer)", "BMW R nineT"],
    physicsExplained: "Introduced originally in 1923 on the BMW R 32, the Boxer flat-twin places two cylinders horizontally opposed across the frame. Because the cylinders stick out into the airstream, they enjoy natural ambient cooling even when crawling through desert sand. The crankshaft lies longitudinally along the length of the motorcycle, aligning directly with the driveshaft without needing energy-wasting 90° bevel gears. Modern versions feature BMW ShiftCam—a sliding camshaft that switches between mild partial-load cam profiles for low-RPM fuel economy and aggressive full-load cam lobes above 5,000 RPM.",
    pros: [
      "Ultra-low center of gravity makes a heavy 250kg adventure bike feel weightless and balanced once rolling.",
      "Opposing pistons cancel primary reciprocating forces, producing a relaxed, fatigue-free long-distance cruise.",
      "Direct shaft-drive integration eliminates messy chain lubrication in mud, gravel, and sand.",
      "Cylinder heads provide natural crash protection, keeping the bike from rolling onto the rider's legs in a tip-over."
    ],
    cons: [
      "Wide cylinder heads limit deep lean angles and can strike rocks or narrow doorframes in tight trail filtering.",
      "Longitudinal crankshaft creates a slight torque-reaction twist (the bike rocks gently to the right when revved in neutral).",
      "Boxer layout forces footpegs slightly asymmetrical (one foot is slightly further forward due to crankpin offset)."
    ],
    engineeringFact: "Because the Boxer's cylinder heads stick out on both sides, they act as built-in pivot points when dropped on trails. A fallen GS rests at a 45° angle instead of lying completely flat on the ground, making it dramatically easier for a lone rider to pick back up in deep African sand!"
  },
  {
    id: "inline-triple-cp3",
    name: "Inline-Triple (3-Cylinder CP3 & Triumph)",
    category: "Motorcycle Engine Architecture",
    badge: "The Best of Both Worlds",
    heroImage: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80",
    summary: "The ultimate Goldilocks engine: combines the meaty low-end punch of a twin with the high-revving howl of a four-cylinder.",
    famousBikes: ["Yamaha MT-09 / Tracer 9 GT / XSR900 (CP3)", "Triumph Street Triple 765 RS (Moto2 Spec Engine)", "Triumph Rocket 3 R (2,500cc)", "MV Agusta F3 800 / Brutale 800"],
    physicsExplained: "A twin has great bottom-end torque but dies up top. A four-cylinder screams up top but is sluggish down low. The inline-three bridges the divide with perfection. Crankpins are spaced at 120° intervals, creating an even power stroke every 240° of crankshaft rotation. The engine is narrower than an inline-four (reducing aerodynamic drag) but significantly smoother and freer-revving than a twin. It produces a distinct, addictive mechanical exhaust warble with an acoustic induction howl that is instantly recognizable.",
    pros: [
      "Linear, fat torque curve from 3,000 RPM all the way to 12,000 RPM.",
      "Narrower engine width than an inline-four provides better aerodynamics and chassis packaging.",
      "Triumph's 765cc triple is so durable and powerful that Dorna selected it as the exclusive engine supplier for the Moto2 World Championship."
    ],
    cons: [
      "Has an inherent rocking couple caused by the outer cylinders pitching, requiring a dedicated balance shaft.",
      "More expensive to machine than a simple parallel-twin."
    ],
    engineeringFact: "When Dorna chose Triumph's 765cc triple to replace Honda's CBR600RR engine in the Moto2 World Championship, lap records fell at virtually every circuit globally. The engine produces 140+ HP in race trim while running over 100,000 racing kilometers with zero major mechanical engine failures."
  }
];

const CAR_VS_MOTO_COMPARISONS = [
  {
    id: "rpm-physics",
    title: "Why Motorcycle Engines Rev to 15,000 RPM (While Cars Redline at 6,500)",
    category: "Physics & Metallurgy",
    icon: "gauge",
    summary: "Understanding the physics of Mean Piston Speed, reciprocating inertia, and short-stroke oversquare geometry.",
    deepDive: "Why can a 1000cc superbike rev to 15,000 RPM every day, while a 2.0L car engine would explode above 7,000 RPM?\n\n1. Mean Piston Speed (\(S_p\)): The limiting factor in engine RPM isn't how fast the crank turns, but how fast the piston travels up and down (\(S_p = 2 \times \text{Stroke} \times \frac{\text{RPM}}{60}\)). The maximum safe metallurgical limit for production pistons is roughly 25 meters per second (90 km/h).\n\n2. Oversquare Bore-to-Stroke Ratio: A passenger car engine typically has a long stroke (e.g. 90mm) for low-RPM torque. At 7,000 RPM, that piston is already traveling at \(21\text{ m/s}\). A superbike engine has an ultra-short stroke (barely 48mm!). At 14,500 RPM, the superbike piston is traveling at only \(23.2\text{ m/s}\)—well within safe limits!\n\n3. Reciprocating Weight: A car piston with its wrist pin and connecting rod can weigh 500–700 grams. A superbike forged piston weighs barely 160 grams (the weight of a smartphone!). Stopping and reversing 160 grams creates a fraction of the mechanical stress compared to a heavy car piston.",
    takeaway: "Bikes don't rev high because they have 'magical' engines; they rev high because their pistons have a tiny stroke and weigh virtually nothing."
  },
  {
    id: "specific-output",
    title: "Specific Output: Why Superbikes Beat Supercars in HP-per-Litre",
    category: "Thermodynamics & Volumetric Efficiency",
    icon: "zap",
    summary: "How naturally aspirated 1000cc bikes make 215+ HP/Litre without turbochargers.",
    deepDive: "Consider this staggering comparison:\n• Porsche 911 GT3 (Naturally Aspirated 4.0L): 502 HP \(\rightarrow\) **125.5 HP per Litre**\n• Ferrari 812 Superfast (Naturally Aspirated 6.5L V12): 789 HP \(\rightarrow\) **121.4 HP per Litre**\n• Ducati Panigale V4 R (Naturally Aspirated 1.0L): 218 HP \(\rightarrow\) **218 HP per Litre!**\n• BMW M 1000 RR (Naturally Aspirated 1.0L): 212 HP \(\rightarrow\) **212 HP per Litre!**\n\nA production superbike makes nearly DOUBLE the horsepower per litre of a Ferrari V12 or Porsche GT3 without any turbochargers. Because horsepower is mathematically tied to RPM (\(\text{HP} \propto \text{Torque} \times \text{RPM}\)), extracting 14,500 RPM allows the bike to ingest and burn twice as much air per minute per unit of displacement as a car engine spinning at 7,500 RPM.",
    takeaway: "Motorcycles achieve racecar horsepower density purely by mastering high-RPM air ingestion and titanium valvetrain control."
  },
  {
    id: "unit-construction",
    title: "Unit Construction: Engine, Gearbox & Oil in One Casting",
    category: "Chassis & Packaging",
    icon: "layers",
    summary: "Why car engines and transmissions are bolted together as separate units, while bikes fuse them into a single block.",
    deepDive: "In an automobile, the engine block, clutch housing, and transmission gearbox are separate mechanical assemblies bolted together with distinct fluid reservoirs (engine oil vs transmission gear oil). In motorcycles, packaging space is at an absolute premium. In the 1950s and 60s, manufacturers perfected 'Unit Construction':\n\n• The engine crankcase, 6-speed sequential gearbox, and wet multi-plate clutch are cast inside the exact same aluminum casing.\n• Both the engine pistons and the transmission gear dogs are lubricated by the EXACT same engine oil!\n• This is why motorcycle motor oil has a special 'JASO MA2' rating: it must lubricate high-revving cylinder walls while having zero friction-modifier additives that would cause the wet clutch plates to slip.",
    takeaway: "A motorcycle's transmission doesn't hang off the back of the engine—it literally sits inside the bottom of the engine crankcase, bathed in the same oil."
  },
  {
    id: "wet-vs-dry-clutch",
    title: "Wet Multi-Plate Clutch vs Single Dry Automotive Clutch",
    category: "Transmission Engineering",
    icon: "shield",
    summary: "Why bikes stack 8-9 tiny friction plates submerged in oil instead of one giant 11-inch dry clutch disc.",
    deepDive: "A car clutch consists of a single large dry friction plate (often 250–300mm in diameter) clamped between the engine flywheel and pressure plate. A motorcycle cannot accommodate an 11-inch diameter clutch disc—it would stick out past the frame and hit the pavement when leaned over! Instead, motorcycle engineers use a 'Multi-Plate' clutch: alternating 7 to 9 small-diameter friction plates and steel drive plates stacked inside a compact clutch basket. Submerging the plates in engine oil ('Wet Clutch') cools the plates under aggressive starts, enables smooth engagement, and lasts for tens of thousands of kilometers.",
    takeaway: "Multi-plate clutches achieve the same friction surface area as a giant car clutch by stacking multiple small discs in series inside an oil bath."
  }
];

const ENGINE_ENGINEERING_FACTS = [
  {
    id: "lexus-lfa-tachometer",
    title: "The Digital Tachometer That Yamaha Had to Build for Lexus",
    tag: "Automotive Marvel",
    year: "2010",
    story: "When Lexus teamed up with Yamaha's acoustic and engine division to develop the 4.8L 1LR-GUE V10 for the LFA supercar, the engine was engineered with titanium valves, forged aluminum pistons, and independent throttle bodies. It revved from idle (900 RPM) to its 9,000-RPM redline in an unbelievable 0.6 seconds. During prototype testing, traditional analog mechanical tachometer needles literally could not swing fast enough to keep up with the engine's explosive rev response. Lexus was forced to invent the automotive world's first all-digital high-resolution TFT tachometer display to accurately reflect the V10's RPM in real time.",
    takeaway: "The LFA V10 revved faster than physical needles could mechanically sweep across a dial."
  },
  {
    id: "top-fuel-hydrolock",
    title: "11,000-Horsepower Dragsters: Running with Melted Spark Plugs",
    tag: "Extreme Physics",
    year: "Present Day",
    story: "A Top Fuel dragster engine (an 8.2L supercharged Hemi V8) produces over 11,000 horsepower and accelerates from 0 to 540 km/h in 3.6 seconds. The engine burns nitromethane fuel so fast (11.2 gallons per run) that the fuel pump injects 100 gallons per minute—the flow rate of a fire hose! The air-fuel mixture is compressed so violently that the spark plugs are burned away to nubs halfway down the track. For the remaining 1.5 seconds, the engine runs on pure diesel-effect compression auto-ignition, operating on the ragged brink of hydraulic lockup before crossing the finish line.",
    takeaway: "At 11,000 HP, the spark plugs melt after 2 seconds and the engine survives purely on controlled detonation."
  },
  {
    id: "f1-50-percent-thermal-efficiency",
    title: "Breaking the 50% Thermal Efficiency Barrier in Formula 1",
    tag: "Thermodynamic Miracle",
    year: "2017",
    story: "For over a century, internal combustion engines were notoriously wasteful: roughly 70% of the energy in gasoline was lost as heat through the radiator and exhaust pipe, with typical road cars achieving barely 25% to 30% thermal efficiency. In 2017, Mercedes-AMG High Performance Powertrains announced their 1.6L turbocharged hybrid Formula 1 engine (M08 EQ Power+) surpassed 50% thermal efficiency on the dyno. By utilizing pre-chamber turbulent jet ignition and split-turbo MGU-H exhaust heat energy recovery, more than half of every drop of fuel was converted directly into forward mechanical work.",
    takeaway: "Formula 1 engines extract more usable work from a drop of fuel than modern industrial power stations."
  },
  {
    id: "desmosedici-stradale-counter-crank",
    title: "The Reverse-Spinning Crankshaft That Defies Physics",
    tag: "Motorcycle Dynamics",
    year: "2018",
    story: "On 99% of vehicles, the engine crankshaft spins forward in the same direction as the wheels. When you accelerate hard on a 215-HP superbike, the spinning wheels and forward crankshaft create a massive combined gyroscopic forward momentum that resists leaning into corners, while engine acceleration causes the front wheel to pitch upward into a wheelie. Ducati reversed the rotation of the crankshaft on the Desmosedici Stradale V4. Because the crank spins backward, its gyroscopic force cancels out the forward gyroscopic force of the wheels, allowing the bike to flick into turns with featherweight effort while naturally suppressing acceleration wheelies.",
    takeaway: "Spinning an engine backward can cancel wheelie momentum and make a 215-HP superbike handle like a bicycle."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { AUTOMOBILE_ENGINES, MOTORCYCLE_ENGINES, CAR_VS_MOTO_COMPARISONS, ENGINE_ENGINEERING_FACTS };
}
