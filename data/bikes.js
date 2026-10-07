// Powerbikes Database: Africa & Global Icons (Expanded Edition)
// Comprehensive coverage of GSs, Yamahas, Africa Twin, Superbikes, Nakeds & Adventure Legends

const BIKES_DATABASE = [
  // ==========================================
  // BMW GS FAMILY & ADVENTURE ICONS
  // ==========================================
  {
    id: "bmw-r1300-gs",
    name: "R 1300 GS",
    brand: "BMW Motorrad",
    country: "Germany",
    aliases: ["gs", "bmw gs", "r1300gs", "1300 gs", "r 1300", "boxer"],
    regionGroup: "africa",
    isAfricaFamous: true,
    isGlobalFamous: true,
    category: "Adventure Touring",
    heroImage: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 1300,
      horsepowerHp: 145,
      rpmPeakHp: 7750,
      torqueNm: 149,
      rpmPeakTorque: 6500,
      topSpeedKmh: 225,
      weightKg: 237,
      fuelCapacityL: 19,
      seatHeightMm: 850,
      engineType: "Air/Liquid-cooled 2-cylinder 4-stroke Boxer with BMW ShiftCam",
      transmission: "6-speed claw-shifted with automated Automated Shift Assistant (ASA) option"
    },
    quickHook: "The next-generation Boxer king: 12 kg lighter, 145 HP, Matrix X-LED headlamp, and adaptive chassis ride height.",
    physicalFeatures: {
      frameAndChassis: "Steel sheet metal main frame with die-cast aluminum subframe, completely redesigning the boxer silhouette to be sleeker and narrower.",
      ergonomics: "Adaptive vehicle height control that drops the suspension by 30mm when coming to a stop, making flat-footing accessible for any rider.",
      frontSuspension: "Next-gen EVO Telelever with flexible element to isolate handlebar flex from suspension forces, offering 190mm travel.",
      aerodynamicsAndBody: "Futuristic Matrix LED headlight in a signature X-design, electrically adjustable touring screen, and active radar sensors for front collision warning.",
      brakingAndWheels: "Dual 310mm front discs with 4-piston radial calipers, full integral ABS Pro, and cross-spoke forged tubeless rims."
    },
    economicReasons: {
      title: "Why BMW Built It: Radical Modernization of the Global Market Leader",
      explanation: "The R 1250 GS was the world's best-selling large-displacement motorcycle, but competitors like the Ducati Multistrada V4 and KTM 1290 Super Adventure were threatening BMW with 170+ HP ratings. BMW executed a ground-up redesign: they relocated the gearbox beneath the engine (shortening the drivetrain) and shed 12 kg. BMW maintained its dominance in high-net-worth touring markets across Europe, South Africa, and the Americas while raising base MSRP margins."
    },
    popularityAreas: {
      regions: ["South Africa (Cape Town to Karoo)", "Nigeria (Lagos to Calabar inter-state touring)", "Kenya (Nairobi, Naivasha)", "Germany", "United States"],
      culturalInsight: "In South Africa, the GS is widely dubbed the 'Two-Wheeled Land Cruiser'. Riders rely on its shaft drive and EVO Telelever to conquer unpaved gravel highways where chain-driven sportbikes require frequent cleaning and maintenance."
    }
  },
  {
    id: "bmw-r1250-gs-adventure",
    name: "R 1250 GS Adventure",
    brand: "BMW Motorrad",
    country: "Germany",
    aliases: ["gs", "bmw gs", "r1250gs", "1250 gs", "gsa", "r 1250 gsa"],
    regionGroup: "africa",
    isAfricaFamous: true,
    isGlobalFamous: true,
    category: "Adventure Touring",
    heroImage: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 1254,
      horsepowerHp: 136,
      rpmPeakHp: 7750,
      torqueNm: 143,
      rpmPeakTorque: 6250,
      topSpeedKmh: 205,
      weightKg: 268,
      fuelCapacityL: 30,
      seatHeightMm: 890,
      engineType: "Air/Liquid-cooled 4-stroke Flat-Twin 'Boxer' with ShiftCam VVT",
      transmission: "6-speed shaft drive with Quickshifter Pro"
    },
    quickHook: "The undisputed heavyweight king of cross-continental African expeditions and trans-Sahara overland rallies with a 30L tank.",
    physicalFeatures: {
      frameAndChassis: "Two-section steel tube frame with engine as stressed member, shielded by heavy-duty stainless steel engine and tank protection bars.",
      ergonomics: "High, commanding upright posture with wide tapered aluminum bars, serrated enduro footpegs, and an expansive 2-piece seat for 1,000-km days.",
      frontSuspension: "Proprietary BMW Telelever (37mm stanchions with central spring strut) that decouples steering from braking, completely eliminating front-end dive.",
      aerodynamicsAndBody: "Distinctive asymmetric LED headlight assembly, rugged beak mudguard, tall adjustable touring windscreen, and 30-litre aluminum fuel tank.",
      brakingAndWheels: "Cross-spoke tubeless wheels (19-inch front / 17-inch rear) designed to absorb jagged rocky impacts; dual 305mm front discs with Cornering ABS Pro."
    },
    economicReasons: {
      title: "Why BMW Built It: The Lucrative Overland Travel Boom",
      explanation: "Following the worldwide cultural impact of Ewan McGregor and Charley Boorman's 'Long Way Down' across Africa, BMW capitalized on an immense commercial ecosystem. The GS Adventure is BMW's highest-margin motorcycle, commanding high margins with aluminum luggage cases, navigation brackets, and specialized riding gear."
    },
    popularityAreas: {
      regions: ["South Africa (Western Cape, Kyalami)", "Nigeria (Lagos to Abuja cross-country routes)", "Kenya (Rift Valley to Maasai Mara)", "Europe", "Sahara desert trails"],
      culturalInsight: "In Nigeria and South Africa, the GSA is both a status symbol and a pragmatic powerhouse. Road infrastructure transitions quickly from expressways to deep potholes—terrain effortlessly absorbed by the GSA's 210mm travel."
    }
  },
  {
    id: "bmw-f850-gs-adventure",
    name: "F 850 GS Adventure",
    brand: "BMW Motorrad",
    country: "Germany",
    aliases: ["gs", "bmw gs", "f850gs", "850 gs", "f 850"],
    regionGroup: "africa",
    isAfricaFamous: true,
    isGlobalFamous: true,
    category: "Adventure Touring",
    heroImage: "https://images.unsplash.com/photo-1547549082-6bc09f2049ae?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 853,
      horsepowerHp: 95,
      rpmPeakHp: 8250,
      torqueNm: 92,
      rpmPeakTorque: 6250,
      topSpeedKmh: 197,
      weightKg: 244,
      fuelCapacityL: 23,
      seatHeightMm: 875,
      engineType: "Liquid-cooled 4-stroke Parallel-Twin with 270° firing order and dry-sump lubrication",
      transmission: "6-speed chain drive with Gear Shift Assist Pro"
    },
    quickHook: "The middleweight trans-African explorer: 21-inch front spoked wheel, 550+ km fuel range, and manageable trail agility.",
    physicalFeatures: {
      frameAndChassis: "Steel bridge frame in monocoque construction for increased torsional rigidity and off-road ruggedness.",
      ergonomics: "Narrow waistline with tall touring windscreen and wide enduro footpegs, allowing easy standing over rough trails.",
      frontSuspension: "Upside-down 43mm telescopic fork (230mm travel) and central rear shock with Dynamic ESA electronic damping.",
      aerodynamicsAndBody: "Large 23-litre touring tank extending between the rider's knees, stainless crash bars, and wide aluminum luggage grid.",
      brakingAndWheels: "21-inch wire-spoke front wheel capable of conquering sand ruts and mud tracks with dual Brembo 305mm front discs."
    },
    economicReasons: {
      title: "Why BMW Built It: The Accessible Middleweight Adventure Gateway",
      explanation: "Not every adventure rider wants to wrestle a 270kg 1250cc machine in deep sand. BMW engineered the F 850 GS to capture riders who demand authentic 21-inch front wheel off-road capability at a lower price point and with lower fuel consumption than the flagship Boxer."
    },
    popularityAreas: {
      regions: ["Namibia (Swakopmund to Etosha)", "South Africa", "Kenya (Turkana expeditions)", "Spain", "Australia"],
      culturalInsight: "In East Africa and Namibia, adventure touring tour operators often deploy the F 850 GS as their fleet backbone because its parallel-twin uses regular fuel and navigates rocky riverbeds with ease."
    }
  },

  // ==========================================
  // HONDA AFRICA TWIN & HONDA ICONS
  // ==========================================
  {
    id: "honda-crf1100l-africa-twin",
    name: "CRF1100L Africa Twin Adventure Sports",
    brand: "Honda",
    country: "Japan",
    aliases: ["africa twin", "african twin", "crf1100l", "crf 1100", "honda africa twin", "honda twin"],
    regionGroup: "africa",
    isAfricaFamous: true,
    isGlobalFamous: true,
    category: "Adventure Touring / Rally",
    heroImage: "https://images.unsplash.com/photo-1547549082-6bc09f2049ae?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 1084,
      horsepowerHp: 101,
      rpmPeakHp: 7500,
      torqueNm: 105,
      rpmPeakTorque: 6250,
      topSpeedKmh: 200,
      weightKg: 238, // Manual (248 kg DCT)
      fuelCapacityL: 24.8,
      seatHeightMm: 850,
      engineType: "Liquid-cooled 4-stroke 8-valve Parallel-Twin with 270° crank and Unicam valvetrain",
      transmission: "6-speed manual or Dual Clutch Transmission (DCT) automatic"
    },
    quickHook: "Born from 4 consecutive Paris-Dakar Rally victories: the legendary Africa Twin with 24.8L fuel range and revolutionary DCT.",
    physicalFeatures: {
      frameAndChassis: "Semi-double cradle steel frame with lightweight bolt-on aluminum subframe and CRF450R-derived rigid aluminum swingarm.",
      ergonomics: "Rally-bred upright posture with narrow seat profile, 5-stage height-adjustable windscreen, and heated grips as standard.",
      frontSuspension: "Showa EERA (Electronically Equipped Ride Adjustment) semi-active suspension providing 230mm travel.",
      aerodynamicsAndBody: "Signature dual round-profile LED headlights with cornering lights, 24.8-litre fuel tank, and heavy-duty aluminum sump skidplate.",
      brakingAndWheels: "True off-road 21-inch front and 18-inch rear tubeless spoked wheels with radial-mount 4-piston calipers and off-road ABS mode."
    },
    economicReasons: {
      title: "Why Honda Built It: Reviving the Dakar Legend to Dethrone the BMW GS",
      explanation: "In the 1980s, the original NXR750 won four straight Paris-Dakar rallies. When adventure touring became the world's most profitable motorcycle category in the 2010s, Honda revived the legendary 'Africa Twin' nameplate. Honda differentiated itself by offering the Dual Clutch Transmission (DCT)—an automatic paddle-shift gearbox that eliminates stalling on steep rocky inclines, capturing thousands of riders intimidated by heavy clutch modulation in mud and sand."
    },
    popularityAreas: {
      regions: ["Across Africa (Morocco Sahara, Dakar Senegal, South Africa, Kenya)", "Southern Europe", "North America", "Australia Outbacks"],
      culturalInsight: "Carrying the name of the African continent itself, the Africa Twin has emotional resonance across African riders. Its high ground clearance and bulletproof Unicam engine design make it one of the most trusted bikes for trans-African solo expeditions."
    }
  },
  {
    id: "honda-transalp-xl750",
    name: "XL750 Transalp",
    brand: "Honda",
    country: "Japan",
    aliases: ["transalp", "xl750", "honda transalp", "750 transalp"],
    regionGroup: "africa",
    isAfricaFamous: true,
    isGlobalFamous: true,
    category: "Adventure Touring",
    heroImage: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 755,
      horsepowerHp: 90.5,
      rpmPeakHp: 9500,
      torqueNm: 75,
      rpmPeakTorque: 7250,
      topSpeedKmh: 195,
      weightKg: 208,
      fuelCapacityL: 16.9,
      seatHeightMm: 850,
      engineType: "Liquid-cooled 4-stroke 8-valve Parallel Twin with 270° crank & Unicam",
      transmission: "6-speed with Assist & Slipper clutch and optional Quickshifter"
    },
    quickHook: "The return of a legend: 90.5 HP short-stroke twin, 21-inch front wheel, and light 208kg all-round adventure chassis.",
    physicalFeatures: {
      frameAndChassis: "Steel diamond frame weighing only 18.3 kg (10% lighter than CB500X frame) for agile handling.",
      ergonomics: "Accessible mid-size adventure cockpit with relaxed handlebar reach and roomy dual seat for two-up touring.",
      frontSuspension: "Showa 43mm SFF-CA (Separate Function Fork-Cartridge) inverted forks offering 200mm front travel.",
      aerodynamicsAndBody: "Sleek aerodynamic fairing optimized for low turbulence at highway speeds, classic Transalp graphics, and LED lighting.",
      brakingAndWheels: "Spoked 21-inch front / 18-inch rear wheel setup with dual 310mm front wave discs and switchable rear ABS."
    },
    economicReasons: {
      title: "Why Honda Built It: The Sweet-Spot Middleweight Adventure War",
      explanation: "Honda recognized a massive sales gap between the entry-level CB500X and the $17,000+ Africa Twin. With Yamaha's Ténéré 700 dominating middleweight rally sales, Honda engineered the all-new 755cc Unicam engine (shared with the Hornet 750) to deliver class-leading 90.5 HP, beating the Ténéré's 73 HP on highway straights while keeping pricing highly competitive."
    },
    popularityAreas: {
      regions: ["South Africa", "Nigeria (Growing among dual-sport clubs)", "Europe (Alps tourers)", "Latin America"],
      culturalInsight: "Riders who find the Africa Twin too tall or heavy choose the Transalp. Its high-revving 90 HP parallel twin provides thrilling highway passing power while its 21-inch front wheel effortlessly skips over rough African potholes."
    }
  },
  {
    id: "honda-cbr1000rr-r-fireblade-sp",
    name: "CBR1000RR-R Fireblade SP",
    brand: "Honda",
    country: "Japan",
    aliases: ["fireblade", "cbr1000", "cbr1000rr", "cbr 1000", "honda cbr", "blade"],
    regionGroup: "global",
    isAfricaFamous: false,
    isGlobalFamous: true,
    category: "Supersport / Superbike",
    heroImage: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 1000,
      horsepowerHp: 214,
      rpmPeakHp: 14500,
      torqueNm: 113,
      rpmPeakTorque: 12500,
      topSpeedKmh: 299,
      weightKg: 201,
      fuelCapacityL: 16.1,
      seatHeightMm: 830,
      engineType: "Liquid-cooled 4-stroke 16-valve DOHC Inline-4 with MotoGP RC213V architecture",
      transmission: "6-speed with Quickshifter and titanium connecting rods"
    },
    quickHook: "Honda's most uncompromising track monster: MotoGP bore & stroke screaming to an astonishing 14,500 RPM.",
    physicalFeatures: {
      frameAndChassis: "Diamond-style aluminum twin-spar frame using 2mm wall thickness for tuned flex and razor-sharp front-end feedback.",
      ergonomics: "Radical racing crouch with high rearsets and forward-mounted clip-ons engineered to tuck the rider entirely inside the aerodynamic bubble.",
      frontSuspension: "Second-generation Öhlins Smart EC 43mm NPX inverted forks with titanium nitride coating.",
      aerodynamicsAndBody: "Enclosed multi-tier aerodynamic winglet boxes derived from Marc Márquez's RC213V MotoGP machine that eliminate high-speed wheelies.",
      brakingAndWheels: "Brembo Stylema radial-mount front calipers clamped to 330mm discs with factory Akrapovič titanium exhaust."
    },
    economicReasons: {
      title: "Why Honda Built It: Reclaiming the Racetrack Crown",
      explanation: "For 25 years, Honda prioritized street comfort over pure track brutality. But Ducati and Kawasaki were dominating World Superbike racing. Honda threw out the comfort rulebook, adopted the exact bore and stroke of their multimillion-dollar MotoGP bike (81mm x 48.5mm), and built an unapologetic 214-HP track missile to restore Honda's racing honor."
    },
    popularityAreas: {
      regions: ["Isle of Man TT", "Japan (Suzuka 8 Hours endurance)", "United Kingdom", "United States"],
      culturalInsight: "The Fireblade SP represents Japanese engineering precision pushed to its competitive extreme. Its titanium connecting rods and DLC-coated finger-followers run with zero mechanical failure under 14,000-RPM race abuse."
    }
  },

  // ==========================================
  // YAMAHA COMPLETE POWERBIKE ARSENAL
  // ==========================================
  {
    id: "yamaha-yzf-r1",
    name: "YZF-R1 / R1M",
    brand: "Yamaha",
    country: "Japan",
    aliases: ["r1", "yzf r1", "yamaha r1", "r1m", "yamaha yzf-r1", "crossplane"],
    regionGroup: "global",
    isAfricaFamous: true,
    isGlobalFamous: true,
    category: "Supersport / Superbike",
    heroImage: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 998,
      horsepowerHp: 200,
      rpmPeakHp: 13500,
      torqueNm: 112.4,
      rpmPeakTorque: 11500,
      topSpeedKmh: 299,
      weightKg: 201,
      fuelCapacityL: 17,
      seatHeightMm: 855,
      engineType: "Liquid-cooled 4-cylinder 4-stroke DOHC 16-valve Crossplane CP4",
      transmission: "6-speed with Quick Shift System (QSS) up and down"
    },
    quickHook: "The MotoGP crossplane legend: Valentino Rossi's CP4 firing order delivers intoxicating V8 roar and supernatural rear tire traction.",
    physicalFeatures: {
      frameAndChassis: "Aluminum Deltabox frame with magnesium subframe and long upward-trussed aluminum swingarm for mid-corner stability.",
      ergonomics: "Laser-focused track crouch with narrow tank contours and deep knee pockets for locking in during 60° lean angles.",
      frontSuspension: "43mm KYB fully adjustable inverted forks (Öhlins Electronic Racing Suspension on R1M).",
      aerodynamicsAndBody: "M1 MotoGP-derived aerodynamic cowl that reduces drag by 5.3%, with hidden recessed LED headlights under the front intake.",
      brakingAndWheels: "Dual 320mm front discs with radial monobloc calipers, Brake Control (BC) system, and lightweight cast magnesium wheels."
    },
    economicReasons: {
      title: "Why Yamaha Built It: The Crossplane Revolution",
      explanation: "Standard inline-4 engines suffered from high inertial torque fluctuations at the limit of grip. Yamaha introduced the Crossplane (CP4) crankshaft to eliminate inertial torque, transferring MotoGP technology into a showroom superbike that became the benchmark for track handling and acoustic character."
    },
    popularityAreas: {
      regions: ["Nigeria (Lagos superbike meets & drag events)", "South Africa (Kyalami track days)", "United States", "United Kingdom", "Japan"],
      culturalInsight: "In African superbike clubs, the R1's crossplane exhaust note is revered. It doesn't scream like a standard inline-4; it howls with a deep, menacing V8 timbre that announces its arrival kilometers away."
    }
  },
  {
    id: "yamaha-mt-09",
    name: "MT-09 (CP3 Master of Torque)",
    brand: "Yamaha",
    country: "Japan",
    aliases: ["mt09", "mt-09", "yamaha mt09", "yamaha mt-09", "cp3", "master of torque"],
    regionGroup: "africa",
    isAfricaFamous: true,
    isGlobalFamous: true,
    category: "Hyper-Naked / Streetfighter",
    heroImage: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 890,
      horsepowerHp: 119,
      rpmPeakHp: 10000,
      torqueNm: 93,
      rpmPeakTorque: 7000,
      topSpeedKmh: 245,
      weightKg: 189,
      fuelCapacityL: 14,
      seatHeightMm: 825,
      engineType: "Liquid-cooled DOHC 4-stroke 4-valve In-line 3-Cylinder CP3 Crossplane",
      transmission: "6-speed with 3rd-generation quickshifter and slip-and-assist clutch"
    },
    quickHook: "The torque hooligan: 890cc inline-triple CP3 delivering explosive midrange punch and acoustic acoustic intake resonance.",
    physicalFeatures: {
      frameAndChassis: "CF die-cast aluminum Deltabox frame that is 2.3 kg lighter and 50% more laterally rigid than earlier generations.",
      ergonomics: "Commanding supermoto-inspired upright posture with wide handlebars and adjustable footpeg mounts.",
      frontSuspension: "41mm KYB upside-down front forks with adjustable compression, rebound, and preload damping.",
      aerodynamicsAndBody: "Stripped-back naked aggression with dual acoustic amplifier air intake ducts on the fuel tank directing intake roar to the rider.",
      brakingAndWheels: "SpinForged ultra-light aluminum wheels (shedding 700g of rotational inertia) with Brembo radial master cylinder."
    },
    economicReasons: {
      title: "Why Yamaha Built It: The 3-Cylinder Sweet Spot",
      explanation: "Twins have torque but run out of breath up top; four-cylinders scream up top but have sluggish low-end. Yamaha engineered the CP3 triple to capture the best of both worlds. The MT-09 delivers explosive fun at legal street speeds at half the price of a European hyper-naked."
    },
    popularityAreas: {
      regions: ["Nigeria (Lagos street riders, Lekki-Epe expressway)", "South Africa (Johannesburg, Durban)", "Europe", "United States"],
      culturalInsight: "In city riding, the MT-09's light 189 kg curb weight and instant 93 Nm torque make it a weapon for darting through dense African urban traffic."
    }
  },
  {
    id: "yamaha-mt-07",
    name: "MT-07 (Dark Side of Japan)",
    brand: "Yamaha",
    country: "Japan",
    aliases: ["mt07", "mt-07", "yamaha mt07", "yamaha mt-07", "cp2"],
    regionGroup: "africa",
    isAfricaFamous: true,
    isGlobalFamous: true,
    category: "Hyper-Naked / Streetfighter",
    heroImage: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 689,
      horsepowerHp: 73.4,
      rpmPeakHp: 8750,
      torqueNm: 67,
      rpmPeakTorque: 6500,
      topSpeedKmh: 214,
      weightKg: 184,
      fuelCapacityL: 14,
      seatHeightMm: 805,
      engineType: "Liquid-cooled DOHC 4-valve Parallel-Twin 'CP2' with 270° Crossplane crank",
      transmission: "6-speed constant mesh with wet multiplate clutch"
    },
    quickHook: "The ultra-lightweight torque machine that redefined modern street biking with its punchy CP2 engine.",
    physicalFeatures: {
      frameAndChassis: "Ultra-compact high-tensile steel backbone frame with the engine as stressed member.",
      ergonomics: "Neutral, aggressive upright streetfighter stance with wide handlebars and comfortable mid-mount footpegs.",
      frontSuspension: "41mm conventional telescopic front forks matched with horizontally mounted rear monoshock.",
      aerodynamicsAndBody: "Minimalist street-brawler styling, sculpted air intake scoops, and bi-functional LED projector headlight.",
      brakingAndWheels: "Dual 298mm floating front wave discs with 4-piston calipers and lightweight 10-spoke cast aluminum wheels."
    },
    economicReasons: {
      title: "Why Yamaha Built It: The Post-Recession Middleweight Rescue",
      explanation: "Post-2008, superbikes were too expensive for everyday riders. Yamaha created the CP2 engine—cheap to build, bulletproof in reliability, and engineered for explosive low-end torque between 30 and 100 km/h."
    },
    popularityAreas: {
      regions: ["Nigeria (Lagos urban street riders)", "South Africa", "Europe", "United States"],
      culturalInsight: "In African metropolises with congested traffic jams ('go-slows'), the MT-07 runs cool, weighs barely 184 kg, and filters through traffic effortlessly."
    }
  },
  {
    id: "yamaha-tenere-700",
    name: "Ténéré 700 (T7)",
    brand: "Yamaha",
    country: "Japan",
    aliases: ["tenere", "t7", "yamaha tenere", "tenere 700", "yamaha t7"],
    regionGroup: "africa",
    isAfricaFamous: true,
    isGlobalFamous: true,
    category: "Rally Adventure / Dual-Sport",
    heroImage: "https://images.unsplash.com/photo-1547549082-6bc09f2049ae?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 689,
      horsepowerHp: 72.4,
      rpmPeakHp: 9000,
      torqueNm: 68,
      rpmPeakTorque: 6500,
      topSpeedKmh: 185,
      weightKg: 204,
      fuelCapacityL: 16,
      seatHeightMm: 875,
      engineType: "Liquid-cooled DOHC 4-stroke 8-valve Parallel-Twin CP2",
      transmission: "6-speed chain drive with heavy-duty clutch springs"
    },
    quickHook: "Named after the brutal Sahara desert: a no-nonsense, pure analog Dakar rally weapon that shuns electronic bloat.",
    physicalFeatures: {
      frameAndChassis: "Double-cradle tubular high-tensile steel frame with short wheelbase for agile sand dune hopping.",
      ergonomics: "Tall rally profile with a flat single-piece bench seat allowing easy standing on serrated steel pegs.",
      frontSuspension: "Long-travel (210mm) 43mm inverted adjustable coil-spring front forks offering 240mm ground clearance.",
      aerodynamicsAndBody: "Rally-tower front nose with quad-LED projector headlight cluster and clear vertical Dakar windscreen.",
      brakingAndWheels: "Spoked wheels (21-inch front / 18-inch rear) with dual Brembo calipers and 3-mode switchable ABS."
    },
    economicReasons: {
      title: "Why Yamaha Built It: The Anti-Electronics Adventure Rebellion",
      explanation: "While other brands loaded adventure bikes with heavy computers and $22,000 price tags, Yamaha delivered an analog, affordable, bulletproof Dakar-style rally bike that anyone can repair in the desert."
    },
    popularityAreas: {
      regions: ["Morocco (Atlas Mountains, Merzouga dunes)", "Kenya (Turkana & Rift rallies)", "Namibia (Skeleton Coast)", "South Africa"],
      culturalInsight: "Named after the Ténéré desert region in the south-central Sahara, this bike is deeply intertwined with African rally roots. Any village mechanic can repair its mechanical cables and steel frame."
    }
  },
  {
    id: "yamaha-super-tenere-1200",
    name: "Super Ténéré XT1200Z",
    brand: "Yamaha",
    country: "Japan",
    aliases: ["super tenere", "xt1200z", "yamaha super tenere", "super t", "1200 tenere"],
    regionGroup: "africa",
    isAfricaFamous: true,
    isGlobalFamous: true,
    category: "Adventure Touring",
    heroImage: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 1199,
      horsepowerHp: 112,
      rpmPeakHp: 7250,
      torqueNm: 117,
      rpmPeakTorque: 6000,
      topSpeedKmh: 210,
      weightKg: 265,
      fuelCapacityL: 23,
      seatHeightMm: 845,
      engineType: "Liquid-cooled 4-stroke DOHC 8-valve Parallel-Twin with 270° crank",
      transmission: "6-speed enclosed shaft drive"
    },
    quickHook: "The indestructible trans-continental warhorse: enclosed shaft drive, 23L tank, and bulletproof Japanese reliability.",
    physicalFeatures: {
      frameAndChassis: "High-tensile steel backbone frame designed to take brutal punishment on unpaved African trails.",
      ergonomics: "Expansive touring saddle with relaxed arm reach and heavy vibration damping in bars and footpegs.",
      frontSuspension: "43mm upside-down forks with electronically adjustable suspension (ZE model) offering 190mm travel.",
      aerodynamicsAndBody: "Twin side-mounted radiators keeping the wheelbase compact, with rugged plastic frame protectors.",
      brakingAndWheels: "Tubeless spoked wheels with Unified Braking System (UBS) and intelligent anti-lock braking."
    },
    economicReasons: {
      title: "Why Yamaha Built It: The Zero-Maintenance Shaft-Drive Alternative",
      explanation: "Riders doing trans-continental touring hated lubricating chains every 500 km in dust and mud. Yamaha built the Super Ténéré with an enclosed hypoid gear shaft drive to directly challenge the BMW GS with Japanese low-cost maintenance."
    },
    popularityAreas: {
      regions: ["South Africa (Trans-Karoo expeditions)", "Kenya to Egypt overland corridors", "Australia", "Europe"],
      culturalInsight: "Long-distance overland riders in Africa revere the Super Ténéré because its engine routinely surpasses 250,000 kilometers with only basic oil changes."
    }
  },

  // ==========================================
  // KAWASAKI LEGENDS
  // ==========================================
  {
    id: "kawasaki-klr-650",
    name: "KLR 650",
    brand: "Kawasaki",
    country: "Japan",
    aliases: ["klr", "klr650", "kawasaki klr", "tractor", "thumper"],
    regionGroup: "africa",
    isAfricaFamous: true,
    isGlobalFamous: true,
    category: "Dual-Sport / Overland",
    heroImage: "https://images.unsplash.com/photo-1547549082-6bc09f2049ae?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 652,
      horsepowerHp: 40,
      rpmPeakHp: 6000,
      torqueNm: 53,
      rpmPeakTorque: 4500,
      topSpeedKmh: 150,
      weightKg: 207,
      fuelCapacityL: 23,
      seatHeightMm: 870,
      engineType: "Liquid-cooled 4-stroke 4-valve DOHC Single Cylinder (Thumper) with EFI",
      transmission: "5-speed return with heavy-duty wet multi-plate clutch"
    },
    quickHook: "The immortal Swiss Army knife of motorcycles: simple, indestructible, and famous for conquering remote African roads.",
    physicalFeatures: {
      frameAndChassis: "Semi-double cradle high-tensile steel frame with integrated rear subframe and heavy-duty aluminum rear rack.",
      ergonomics: "High, upright dual-sport posture with thick foam bench seat and wide rubber-cushioned footpegs.",
      frontSuspension: "Beefy 41mm conventional front forks with 200mm travel and Uni-Trak rear shock with 185mm travel.",
      aerodynamicsAndBody: "Frame-mounted rally windscreen, rugged polyethylene body panels that don't shatter when dropped, and large 23L tank.",
      brakingAndWheels: "21-inch front / 17-inch rear steel spoked wheels with 300mm front disc and optional off-road dual-purpose ABS."
    },
    economicReasons: {
      title: "Why Kawasaki Built It: The Unkillable Budget Adventure Tool",
      explanation: "Originally introduced in 1987 and updated with electronic fuel injection in 2022, the KLR650 has survived for decades by offering simple, bulletproof adventure touring at an MSRP under $7,000—a fraction of high-end European adventure bikes."
    },
    popularityAreas: {
      regions: ["Sub-Saharan Africa overland journeys", "South Africa", "United States (Continental Divide)", "South America (Ruta 40)"],
      culturalInsight: "Globetrotters call the KLR the 'Tractor' because it runs on low-grade fuel and can be fixed with zip-ties and basic wrenches anywhere on the continent."
    }
  },
  {
    id: "kawasaki-ninja-zx6r",
    name: "Ninja ZX-6R (636)",
    brand: "Kawasaki",
    country: "Japan",
    aliases: ["ninja", "zx6r", "zx-6r", "636", "kawasaki ninja", "ninja 636"],
    regionGroup: "africa",
    isAfricaFamous: true,
    isGlobalFamous: true,
    category: "Supersport",
    heroImage: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 636,
      horsepowerHp: 128,
      rpmPeakHp: 13000,
      torqueNm: 69,
      rpmPeakTorque: 10800,
      topSpeedKmh: 260,
      weightKg: 198,
      fuelCapacityL: 17,
      seatHeightMm: 830,
      engineType: "Liquid-cooled 4-stroke In-line Four DOHC 16-valve with Ram-Air intake",
      transmission: "6-speed cassette-style with KQS quickshifter and slipper clutch"
    },
    quickHook: "The screaming 13,000-RPM supersport with a 37cc cheater displacement edge that dominates street races and track days.",
    physicalFeatures: {
      frameAndChassis: "Pressed-aluminum twin-spar perimeter chassis connecting the steering head directly to the swingarm pivot.",
      ergonomics: "Aggressive track-focused tuck position with low clip-on handlebars mounted below the upper triple clamp.",
      frontSuspension: "41mm Showa SFF-BP (Separate Function Fork - Big Piston) offering independent preload and damping circuits.",
      aerodynamicsAndBody: "Fierce reverse-slanting LED headlights with central Ram-Air intake duct feeding high-pressure air directly into the airbox.",
      brakingAndWheels: "Dual 310mm petal discs clamped by radially mounted monobloc 4-piston Nissin calipers with KIBS."
    },
    economicReasons: {
      title: "Why Kawasaki Built It: The 636cc Street-Usability Strategy",
      explanation: "International FIM racing limits middleweight supersports to 599cc. But Kawasaki realized 95% of buyers ride on the street. By adding 37cc, Kawasaki delivered punchy midrange passing power that standard 600s lacked."
    },
    popularityAreas: {
      regions: ["Nigeria (Lagos Superbike clubs, Epe highway weekend runs)", "South Africa (Zwartkops and Kyalami track days)", "United States", "Japan"],
      culturalInsight: "In Nigerian superbike culture, the Ninja 636 is considered the ultimate sweet spot: supersport scream and 0-100 km/h in 3.2 seconds without the overwhelming heat of a 1000cc bike."
    }
  },
  {
    id: "kawasaki-ninja-h2-carbon",
    name: "Ninja H2 Carbon",
    brand: "Kawasaki",
    country: "Japan",
    aliases: ["h2", "ninja h2", "h2r", "supercharged", "kawasaki h2"],
    regionGroup: "global",
    isAfricaFamous: false,
    isGlobalFamous: true,
    category: "Hyperbike / Supercharged",
    heroImage: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 998,
      horsepowerHp: 228,
      rpmPeakHp: 11500,
      torqueNm: 141.7,
      rpmPeakTorque: 11000,
      topSpeedKmh: 337,
      weightKg: 238,
      fuelCapacityL: 19,
      seatHeightMm: 825,
      engineType: "Supercharged Liquid-cooled In-line 4 with proprietary planetary-gear centrifugal supercharger",
      transmission: "6-speed dog-ring transmission with KQS bi-directional quickshifter"
    },
    quickHook: "The world's only production supercharged hyperbike, built by aerospace and gas turbine engineers to shatter speed records.",
    physicalFeatures: {
      frameAndChassis: "High-tensile steel trellis frame in metallic green, engineered with open spacing to vent extreme supercharger heat.",
      ergonomics: "High-speed ballistic posture supported by an adjustable hip-support seat bolster.",
      frontSuspension: "KYB AOS-II racing inverted 43mm front forks and Öhlins TTX36 rear gas-charged shock on a single-sided swingarm.",
      aerodynamicsAndBody: "Aerospace-grade carbon-fiber upper cowl, mirror-coated black paint with pure silver ions, and aerodynamic downforce wings.",
      brakingAndWheels: "Brembo Stylema radial-mount 4-piston calipers biting 330mm Brembo discs with cast star-pattern wheels."
    },
    economicReasons: {
      title: "Why Kawasaki Built It: A Demonstration of Heavy Industrial Supremacy",
      explanation: "Kawasaki mobilized its Gas Turbine and Aerospace divisions to build a centrifugal supercharger spinning at 130,000 RPM, demonstrating unmatched technological prowess over European boutique brands."
    },
    popularityAreas: {
      regions: ["United States (Bonneville Salt Flats)", "Japan (Wangan highway)", "Germany (Autobahn)", "UAE"],
      culturalInsight: "The distinct 'chirp' of the H2's supercharger blow-off valve releasing boost between quickshifts has become one of the most recognizable audio signatures in motorsport."
    }
  },

  // ==========================================
  // SUZUKI HAYABUSA & GIXXER
  // ==========================================
  {
    id: "suzuki-hayabusa-gen3",
    name: "Hayabusa GSX1300R",
    brand: "Suzuki",
    country: "Japan",
    aliases: ["hayabusa", "busa", "gsx1300r", "gsx 1300", "suzuki hayabusa"],
    regionGroup: "africa",
    isAfricaFamous: true,
    isGlobalFamous: true,
    category: "Hyper-Sport Tourer",
    heroImage: "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 1340,
      horsepowerHp: 187.7,
      rpmPeakHp: 9700,
      torqueNm: 150,
      rpmPeakTorque: 7000,
      topSpeedKmh: 299,
      weightKg: 264,
      fuelCapacityL: 20,
      seatHeightMm: 800,
      engineType: "Liquid-cooled 4-stroke DOHC 16-valve In-line Four with Suzuki Ram Air Direct (SRAD)",
      transmission: "6-speed with bi-directional quickshifter and Suzuki Clutch Assist System (SCAS)"
    },
    quickHook: "Named after the peregrine falcon that hunts blackbirds: the ultimate aerodynamic speed legend and global cultural icon.",
    physicalFeatures: {
      frameAndChassis: "Massive twin-spar cast aluminum perimeter frame and extruded aluminum swingarm engineered for impervious stability at 300 km/h.",
      ergonomics: "Spacious sports-touring cockpit that stretches the rider over an elongated fuel tank with aerodynamic bubble screen.",
      frontSuspension: "Fully adjustable 43mm KYB inverted cartridge front forks with Diamond-Like Carbon (DLC) coating.",
      aerodynamicsAndBody: "Wind-tunnel sculpted bulbous fairing with integrated turn signal blades, deep Ram-Air nostrils, and dual upswept chrome exhausts.",
      brakingAndWheels: "Top-tier Brembo Stylema 4-piston radial front calipers gripping dual 320mm discs, governed by a 6-axis Bosch IMU."
    },
    economicReasons: {
      title: "Why Suzuki Built It: The Crown of the 300+ km/h Speed Wars",
      explanation: "Suzuki engineered the original GSX1300R in 1999 specifically to defeat Honda's Super Blackbird. Clocking 312 km/h, it cemented Suzuki's prestige and became a legendary platform for drag racing and luxury high-speed cruising."
    },
    popularityAreas: {
      regions: ["Nigeria (Abuja expressways, Lagos luxury showcases)", "South Africa (Gauteng corridors)", "United States", "Middle East"],
      culturalInsight: "Across African superbike culture, the Hayabusa is the undisputed 'Boss Bike'. Its elongated silhouette and booming quad exhaust command unmatched respect."
    }
  },
  {
    id: "suzuki-v-strom-1050xt",
    name: "V-Strom 1050XT",
    brand: "Suzuki",
    country: "Japan",
    aliases: ["vstrom", "v-strom", "vstrom 1050", "suzuki vstrom", "dl1000"],
    regionGroup: "africa",
    isAfricaFamous: true,
    isGlobalFamous: true,
    category: "Adventure Touring",
    heroImage: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 1037,
      horsepowerHp: 106,
      rpmPeakHp: 8500,
      torqueNm: 100,
      rpmPeakTorque: 6000,
      topSpeedKmh: 205,
      weightKg: 247,
      fuelCapacityL: 20,
      seatHeightMm: 855,
      engineType: "90° V-Twin DOHC 8-valve Liquid-Cooled 4-stroke",
      transmission: "6-speed with Suzuki Clutch Assist System and SIRS electronics"
    },
    quickHook: "Inspired by the legendary DR-BIG desert racer: bulletproof 90° V-twin reliability and effortless long-distance touring comfort.",
    physicalFeatures: {
      frameAndChassis: "Twin-spar aluminum alloy frame combining cast and extruded sections for high rigidity and light weight.",
      ergonomics: "Plush two-piece touring seat with tool-less height adjustment and wide aluminum handlebars.",
      frontSuspension: "43mm KYB inverted front forks with adjustable compression and rebound, offering 160mm travel.",
      aerodynamicsAndBody: "Distinctive retro DR-Z beak nose with rectangular LED headlight and aluminum accessory crash bars.",
      brakingAndWheels: "DID wire-spoked tubeless aluminum wheels (19-inch front / 17-inch rear) with dual Tokico 4-piston radial calipers."
    },
    economicReasons: {
      title: "Why Suzuki Built It: Value-Driven Adventure Touring",
      explanation: "While European adventure bikes skyrocketed past $20,000, Suzuki refined their legendary 1037cc 90° V-Twin engine to deliver bulletproof overland reliability at an unbeatable price point."
    },
    popularityAreas: {
      regions: ["South Africa", "Nigeria (Inter-state touring)", "Europe", "North America"],
      culturalInsight: "Riders trust the V-Strom's 90° V-twin because it runs smooth with almost zero vibration, making 8-hour continuous rides effortless on African highways."
    }
  },

  // ==========================================
  // DUCATI, KTM, TRIUMPH & CONTINENTAL ICONS
  // ==========================================
  {
    id: "ducati-panigale-v4s",
    name: "Panigale V4 S",
    brand: "Ducati",
    country: "Italy",
    aliases: ["panigale", "v4", "v4s", "ducati panigale", "ducati v4"],
    regionGroup: "global",
    isAfricaFamous: false,
    isGlobalFamous: true,
    category: "Supersport / Superbike",
    heroImage: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 1103,
      horsepowerHp: 215.5,
      rpmPeakHp: 13000,
      torqueNm: 123.6,
      rpmPeakTorque: 9500,
      topSpeedKmh: 315,
      weightKg: 175,
      fuelCapacityL: 17,
      seatHeightMm: 850,
      engineType: "Desmosedici Stradale 90° V4 with counter-rotating crankshaft & Desmodromic valvetrain",
      transmission: "6-speed with Ducati Quick Shift (DQS) up/down EVO 2"
    },
    quickHook: "Italian racing artistry personified: MotoGP aerodynamics, 215-HP V4 heart, and semi-active Öhlins suspension.",
    physicalFeatures: {
      frameAndChassis: "Cast magnesium subframe and aluminum Front Frame bolting directly to the cylinder heads of the stressed V4 engine.",
      ergonomics: "Uncompromising track ergonomics with sculpted knee cutouts and aerodynamic clip-ons.",
      frontSuspension: "Öhlins NPX 25/30 pressurized 43mm inverted forks with Öhlins Smart EC 2.0 electronic damping.",
      aerodynamicsAndBody: "Double-profile carbon aerodynamic winglets generating 37 kg downforce at 300 km/h, with single-sided aluminum swingarm.",
      brakingAndWheels: "Brembo Stylema Monobloc radial calipers biting 330mm discs with forged aluminum Marchesini wheels."
    },
    economicReasons: {
      title: "Why Ducati Built It: The MotoGP V4 Tech Transfer & Ultra-Luxury Margins",
      explanation: "To win in World Superbike and justify premium retail pricing, Ducati transferred their MotoGP V4 engine platform into showroom production, delivering high profit margins."
    },
    popularityAreas: {
      regions: ["Global tracks (Mugello, Silverstone, Austin)", "Italy", "UK", "US", "Dubai & Monaco private tracks"],
      culturalInsight: "The Panigale V4 S represents the pinnacle of hyper-exotic motorcycling: dry-clutch chatter option, MotoGP V4 acoustics, and breathtaking straightaway speed."
    }
  },
  {
    id: "ducati-multistrada-v4s",
    name: "Multistrada V4 S",
    brand: "Ducati",
    country: "Italy",
    aliases: ["multistrada", "multi v4", "ducati multistrada", "multi", "ducati multi"],
    regionGroup: "global",
    isAfricaFamous: true,
    isGlobalFamous: true,
    category: "Adventure Touring / Sport-Tourer",
    heroImage: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 1158,
      horsepowerHp: 170,
      rpmPeakHp: 10500,
      torqueNm: 125,
      rpmPeakTorque: 8750,
      topSpeedKmh: 250,
      weightKg: 240,
      fuelCapacityL: 22,
      seatHeightMm: 840,
      engineType: "V4 Granturismo 90° liquid-cooled 4-valve with counter-rotating crankshaft",
      transmission: "6-speed with Ducati Quick Shift (DQS) up/down"
    },
    quickHook: "The 170-HP superbike on stilts: Granturismo V4 engine, front/rear radar cruise control, and 60,000-km valve check intervals.",
    physicalFeatures: {
      frameAndChassis: "Aluminum monocoque frame with double-sided aluminum swingarm offering high torsional rigidity.",
      ergonomics: "First-class sports-touring ergonomics with aerodynamic air bypass ducts keeping engine heat off the rider's legs.",
      frontSuspension: "Marzocchi semi-active Ducati Skyhook Suspension (DSS) Evolution with auto-leveling function.",
      aerodynamicsAndBody: "Aerodynamic turning vanes, front radar sensor behind the nose cowl, and rear radar for blind-spot detection.",
      brakingAndWheels: "Brembo Stylema calipers on 330mm discs with Bosch-Brembo 10.3ME Cornering ABS."
    },
    economicReasons: {
      title: "Why Ducati Built It: Breaking the High-Maintenance Stigma",
      explanation: "Ducati replaced traditional Desmodromic valves with spring-valves on the V4 Granturismo, stretching valve maintenance intervals to an unprecedented 60,000 km (37,000 miles), winning over long-distance touring buyers."
    },
    popularityAreas: {
      regions: ["South Africa (Garden Route)", "Europe (Alpine passes)", "North America", "Nigeria (Elite tourers)"],
      culturalInsight: "Riders who refuse to sacrifice 170-HP superbike acceleration while touring choose the Multistrada V4 S. Its front radar adaptive cruise control transforms boring highway slogs into effortless cruises."
    }
  },
  {
    id: "ktm-1290-super-duke-r",
    name: "1290 Super Duke R ('The Beast')",
    brand: "KTM",
    country: "Austria",
    aliases: ["super duke", "the beast", "ktm 1290", "superduke", "1290 r", "ktm beast"],
    regionGroup: "global",
    isAfricaFamous: false,
    isGlobalFamous: true,
    category: "Hyper-Naked",
    heroImage: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 1301,
      horsepowerHp: 180,
      rpmPeakHp: 9500,
      torqueNm: 140,
      rpmPeakTorque: 8000,
      topSpeedKmh: 289,
      weightKg: 189,
      fuelCapacityL: 16,
      seatHeightMm: 835,
      engineType: "75° V-twin LC8 4-stroke DOHC with twin-spark ignition",
      transmission: "6-speed with PANKL racing transmission and Quickshifter+"
    },
    quickHook: "Nicknamed 'The Beast': a raw, unapologetic 1301cc V-twin hyper-naked with 140 Nm of arm-stretching wheelie torque.",
    physicalFeatures: {
      frameAndChassis: "Signature orange chrome-moly space trellis frame using the LC8 engine as structural stress element.",
      ergonomics: "Wide motocross-inspired handlebars giving huge steering leverage with aggressive attack position.",
      frontSuspension: "WP APEX 48mm inverted split-cartridge forks with tool-less damping clickers.",
      aerodynamicsAndBody: "Predatory split LED headlight mask, carbon tank spoilers, and minimalist exposed aluminum subframe.",
      brakingAndWheels: "Brembo Stylema calipers clamping 320mm floating discs with Supermoto ABS mode."
    },
    economicReasons: {
      title: "Why KTM Built It: Exploiting the Aging Superbike Demographics",
      explanation: "KTM realized riders in their 30s and 40s loved superbike power but suffered wrist and back pain from cramped supersports. The Super Duke created the modern 'Hyper-Naked' category."
    },
    popularityAreas: {
      regions: ["European Alps", "South Africa (Cape Town twisties)", "United States", "Australia"],
      culturalInsight: "Celebrated for its hooligan personality: with 140 Nm of torque across the rev range, it lifts the front wheel with ease, earning cult status among torque addicts."
    }
  },
  {
    id: "ktm-1290-super-adventure-r",
    name: "1290 Super Adventure R",
    brand: "KTM",
    country: "Austria",
    aliases: ["super adventure", "ktm 1290 adventure", "1290 sar", "ktm sar"],
    regionGroup: "africa",
    isAfricaFamous: true,
    isGlobalFamous: true,
    category: "Adventure Touring / Rally",
    heroImage: "https://images.unsplash.com/photo-1547549082-6bc09f2049ae?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 1301,
      horsepowerHp: 160,
      rpmPeakHp: 9000,
      torqueNm: 138,
      rpmPeakTorque: 6500,
      topSpeedKmh: 250,
      weightKg: 221,
      fuelCapacityL: 23,
      seatHeightMm: 880,
      engineType: "75° V-twin LC8 liquid-cooled 4-stroke DOHC",
      transmission: "6-speed PANKL with Quickshifter+"
    },
    quickHook: "The Austrian rally missile: 160 HP, 21-inch front wheel, low-slung horseshoe 23L tank, and hardcore WP XPLOR suspension.",
    physicalFeatures: {
      frameAndChassis: "Laser-cut chrome-molybdenum steel trellis frame with steering head moved 15mm rearward for sharper cornering.",
      ergonomics: "One-piece rally stepped bench seat designed for unrestrained rider movement in technical dunes and sand.",
      frontSuspension: "Heavy-duty 48mm WP XPLOR inverted forks with 220mm travel and PDS rear shock absorber.",
      aerodynamicsAndBody: "3-part low-slung horseshoe fuel tank keeping the center of gravity near the crankcase.",
      brakingAndWheels: "Alpina tubeless spoked aluminum wheels (21-inch front / 18-inch rear) with dual 320mm front discs."
    },
    economicReasons: {
      title: "Why KTM Built It: The Ultimate High-Horsepower Off-Road Weapon",
      explanation: "While BMW focused on smooth comfort, KTM engineered the 1290 SAR to be a pure 160-horsepower dirt bike capable of tearing up sand dunes and competing in extreme rallies."
    },
    popularityAreas: {
      regions: ["South Africa (Karoo rally trails)", "Morocco (Merzouga desert)", "Namibia", "United States", "Australia"],
      culturalInsight: "Hardcore off-road riders consider the 1290 SAR the most capable big-bore adventure bike in deep sand due to its low center of gravity and WP XPLOR suspension."
    }
  },
  {
    id: "bmw-s1000rr",
    name: "S 1000 RR",
    brand: "BMW Motorrad",
    country: "Germany",
    aliases: ["s1000rr", "s 1000", "bmw s1000", "s1k", "bmw superbike"],
    regionGroup: "global",
    isAfricaFamous: true,
    isGlobalFamous: true,
    category: "Superbike",
    heroImage: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 999,
      horsepowerHp: 205,
      rpmPeakHp: 13000,
      torqueNm: 113,
      rpmPeakTorque: 11000,
      topSpeedKmh: 303,
      weightKg: 197,
      fuelCapacityL: 16.5,
      seatHeightMm: 824,
      engineType: "Water/oil-cooled 4-cylinder in-line engine with BMW ShiftCam variable valve timing",
      transmission: "6-speed with Shift Assistant Pro"
    },
    quickHook: "German engineering perfection: ShiftCam variable valve timing, M winglets, and unmatched race telemetry.",
    physicalFeatures: {
      frameAndChassis: "Bridge-type aluminum composite Flex Frame that integrates the engine more closely into the chassis.",
      ergonomics: "Laser-focused track ergonomics with deep knee pockets and 6.5-inch TFT displaying real-time lean angles.",
      frontSuspension: "45mm upside-down telescopic forks with Dynamic Damping Control (DDC).",
      aerodynamicsAndBody: "Symmetrical nose cowl with carbon M aerodynamic winglets creating 17.1 kg downforce at top speed.",
      brakingAndWheels: "M Carbon wheels with M Compound radial calipers and Brake Slide Assist."
    },
    economicReasons: {
      title: "Why BMW Built It: Obliterating the 'Old Man' Stigma",
      explanation: "Prior to 2009, BMW had a conservative touring reputation. They built the S 1000 RR from scratch with 193 HP to beat the Japanese Big Four on the first attempt, winning over young superbike riders worldwide."
    },
    popularityAreas: {
      regions: ["Isle of Man TT", "South Africa (Kyalami Championship)", "Nigeria (Superbike club track days)", "Germany", "United States"],
      culturalInsight: "Riders consider the S 1000 RR the easiest 200+ HP superbike to ride fast because ShiftCam gives civil low-RPM road manners with explosive top-end pull."
    }
  },
  {
    id: "bajaj-dominar-400",
    name: "Dominar 400",
    brand: "Bajaj Auto",
    country: "India",
    aliases: ["dominar", "dominar 400", "bajaj dominar", "d400"],
    regionGroup: "africa",
    isAfricaFamous: true,
    isGlobalFamous: false,
    category: "Power Cruiser / Sports Tourer",
    heroImage: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 373.3,
      horsepowerHp: 40,
      rpmPeakHp: 8800,
      torqueNm: 35,
      rpmPeakTorque: 6500,
      topSpeedKmh: 165,
      weightKg: 193,
      fuelCapacityL: 13,
      seatHeightMm: 800,
      engineType: "Single-Cylinder Liquid-Cooled 4-Valve DOHC with Triple-Spark DTS-i",
      transmission: "6-speed gearbox with Assist & Slipper Clutch"
    },
    quickHook: "The accessible, steel-framed highway power-cruiser that democratized 400cc powerbiking across the African continent.",
    physicalFeatures: {
      frameAndChassis: "Heavy-duty beam-type stamped steel perimeter frame engineered for high torsional rigidity under heavy loads.",
      ergonomics: "Relaxed touring posture with open chest stance, wide handlebars, low 800mm seat height, and touring backrest.",
      frontSuspension: "Beefy 43mm Upside-Down (USD) front forks with 135mm wheel travel and rear Nitrox mono-shock.",
      aerodynamicsAndBody: "Muscular sculpted fuel tank with tank-top auxiliary digital display, tall touring windscreen, and knuckle guards.",
      brakingAndWheels: "Large 320mm front petal disc brake clamped by ByBre radial caliper with dual-channel ABS."
    },
    economicReasons: {
      title: "Why Bajaj Built It: The Affordable Emerging-Market Powerbike",
      explanation: "While imported 600cc–1000cc superbikes carry 70% to 100%+ import duties in developing nations, Bajaj partnered with KTM to build the Dominar at a third of the cost, with inexpensive spare parts."
    },
    popularityAreas: {
      regions: ["Nigeria (Interstate touring)", "Kenya (Nairobi to Mombasa)", "Ghana", "Uganda", "Egypt"],
      culturalInsight: "In West and East Africa, the Dominar 400 represents the gateway into brotherhood motorcycle culture, conquering rough roads where delicate sportbike fairings would crack."
    }
  },
  {
    id: "royal-enfield-himalayan-450",
    name: "Himalayan 450 (Sherpa)",
    brand: "Royal Enfield",
    country: "India",
    aliases: ["himalayan", "himalayan 450", "sherpa 450", "enfield himalayan"],
    regionGroup: "africa",
    isAfricaFamous: true,
    isGlobalFamous: true,
    category: "Adventure / Overland",
    heroImage: "https://images.unsplash.com/photo-1547549082-6bc09f2049ae?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 452,
      horsepowerHp: 39.5,
      rpmPeakHp: 8000,
      torqueNm: 40,
      rpmPeakTorque: 5500,
      topSpeedKmh: 155,
      weightKg: 196,
      fuelCapacityL: 17,
      seatHeightMm: 825,
      engineType: "Sherpa 450: Royal Enfield's first Liquid-Cooled DOHC 4-valve Single Cylinder",
      transmission: "6-speed gearbox with slip-and-assist clutch and ride-by-wire"
    },
    quickHook: "Tested in high-altitude Himalayan mountain passes: a rugged, go-anywhere overland tool built for punishing trails.",
    physicalFeatures: {
      frameAndChassis: "Twin-spar steel tubular frame with integrated Jerry-can fuel luggage rails flanking the tank, engineered by Harris Performance.",
      ergonomics: "Natural all-day adventure posture with wide bars and adjustable dual seat.",
      frontSuspension: "43mm Showa upside-down cartridge forks with 200mm travel and 230mm ground clearance.",
      aerodynamicsAndBody: "High-mounted front beak fender, circular Tripper TFT display with Google Maps, and composite tank guards.",
      brakingAndWheels: "21-inch front / 17-inch rear cross-spoke wheels with dual-channel switchable ABS."
    },
    economicReasons: {
      title: "Why Royal Enfield Built It: Modernizing for Global Overlanding",
      explanation: "Royal Enfield developed the liquid-cooled Sherpa 450 engine to undercut expensive European 400cc adventure bikes while offering superior structural durability and round-the-world repair simplicity."
    },
    popularityAreas: {
      regions: ["East Africa (Kenya, Tanzania safaris, Uganda border passes)", "South Africa", "India (Khardung La)", "United Kingdom"],
      culturalInsight: "In African overland travel, riders love the Himalayan 450 because you can mount spare fuel bladders and rugged soft panniers directly to the frame without aftermarket brackets."
    }
  },
  {
    id: "triumph-rocket-3r",
    name: "Rocket 3 R",
    brand: "Triumph",
    country: "United Kingdom",
    aliases: ["rocket 3", "rocket 3 r", "triumph rocket", "rocket iii"],
    regionGroup: "global",
    isAfricaFamous: false,
    isGlobalFamous: true,
    category: "Muscle Roadster / Power Cruiser",
    heroImage: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 2458,
      horsepowerHp: 165,
      rpmPeakHp: 6000,
      torqueNm: 221,
      rpmPeakTorque: 4000,
      topSpeedKmh: 233,
      weightKg: 291,
      fuelCapacityL: 18,
      seatHeightMm: 773,
      engineType: "Inline-3 Cylinder Water-Cooled DOHC Longitudinal Engine (2.5 Litres)",
      transmission: "6-speed shaft-drive with torque-assist hydraulic clutch"
    },
    quickHook: "The world's largest production bike engine: a 2,500cc longitudinal triple with 221 Nm of planet-spinning torque.",
    physicalFeatures: {
      frameAndChassis: "Lightweight all-aluminum spine frame with forward air intake and single-sided swingarm housing shaft drive.",
      ergonomics: "Mid-mount roadster foot controls with adjustable ergonomics and commanding muscle road stance.",
      frontSuspension: "Massive 47mm Showa inverted cartridge front forks with 120mm travel.",
      aerodynamicsAndBody: "Twin signature round LED headlights with hydroformed 3-header exhaust pipes along the engine flank.",
      brakingAndWheels: "Brembo Stylema calipers on 320mm discs holding a gargantuan 240/50 ZR16 rear tire."
    },
    economicReasons: {
      title: "Why Triumph Built It: Undisputed Bragging Rights in Luxury Muscle",
      explanation: "Triumph engineered numbers no other brand in the world could match: 2,458cc and 221 Nm torque, accelerating from 0 to 100 km/h in an unbelievable 2.73 seconds."
    },
    popularityAreas: {
      regions: ["United States (Coast-to-coast cruising)", "United Kingdom", "Germany", "Australia"],
      culturalInsight: "Rolling up on a Rocket 3 is like driving an AC Cobra on two wheels. The engine block is larger than a passenger car motor, drawing crowds wherever it parks."
    }
  },
  {
    id: "aprilia-rsv4-factory-1100",
    name: "RSV4 Factory 1100",
    brand: "Aprilia",
    country: "Italy",
    aliases: ["rsv4", "rsv4 factory", "aprilia rsv4", "aprilia v4"],
    regionGroup: "global",
    isAfricaFamous: false,
    isGlobalFamous: true,
    category: "Superbike",
    heroImage: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1200&q=80",
    specs: {
      displacementCc: 1099,
      horsepowerHp: 217,
      rpmPeakHp: 13000,
      torqueNm: 125,
      rpmPeakTorque: 10500,
      topSpeedKmh: 310,
      weightKg: 202,
      fuelCapacityL: 17.9,
      seatHeightMm: 845,
      engineType: "Aprilia 65° longitudinal V4 4-stroke liquid-cooled with multi-map Ride-by-Wire",
      transmission: "6-speed with Aprilia Quick Shift (AQS) with bi-directional blip"
    },
    quickHook: "The purist's track weapon: a narrow 65-degree V4 engine born from 54 world championships and unmatched chassis feel.",
    physicalFeatures: {
      frameAndChassis: "Dual-beam aluminum chassis that allows the rider to adjust the engine position, swingarm pivot, and headstock angle.",
      ergonomics: "Extreme race cockpit with narrow waistline enabled by the slim 65° V4 cylinder bank.",
      frontSuspension: "Öhlins Smart EC 2.0 electronic semi-active suspension system managing NIX forks and TTX shock.",
      aerodynamicsAndBody: "Integrated double fairing with MotoGP aerodynamic winglets built between the outer and inner walls.",
      brakingAndWheels: "Brembo Stylema monobloc calipers with dual 330mm floating discs and forged aluminum wheels."
    },
    economicReasons: {
      title: "Why Aprilia Built It: The Boutique Brand That Punches Above Giants",
      explanation: "Aprilia's competitive survival depends on building the sharpest handling chassis in racing history, charging top-tier prices to connoisseur track riders."
    },
    popularityAreas: {
      regions: ["Italy (Mugello)", "Germany (Nürburgring)", "United States", "UK (Donington Park)"],
      culturalInsight: "Motorcycle journalists consistently vote the RSV4 as having the greatest chassis balance in superbike history, allowing riders to feel microscopic front tire grip at 60 degrees of lean."
    }
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { BIKES_DATABASE };
}
