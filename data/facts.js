// Motorcycling Fun History Facts
const HISTORY_FACTS = [
  {
    id: "gentlemens-agreement",
    year: "1999",
    title: "The 299 km/h Gentlemen's Agreement",
    tag: "Speed Wars",
    summary: "Why all modern factory superbikes stop their speedometers at exactly 299 km/h (186 mph).",
    story: "In 1999, Suzuki unleashed the Hayabusa GSX1300R, hitting an astronomical 312 km/h (194 mph) and dethroning Honda's CBR1100XX Blackbird. Kawasaki was preparing the ZX-12R rumored to exceed 320 km/h. Fearing that European regulators and insurance agencies would introduce an outright ban on high-performance superbikes, Japanese and European manufacturers convened in secret and forged an informal 'Gentlemen's Agreement': no production motorcycle would ever display or exceed 300 km/h on its speedometer.",
    icon: "speedometer",
    takeaway: "The digital dash of almost every modern litre-class superbike freezes at 299 km/h, even if the engine still has RPM to spare."
  },
  {
    id: "yamaha-tuning-forks",
    year: "1955",
    title: "Why Yamaha Has 3 Tuning Forks on its Fuel Tank",
    tag: "Brand Origin",
    summary: "Yamaha's motorcycle division was born directly out of a grand piano and organ factory.",
    story: "Look closely at any Yamaha motorcycle tank and you won't see wheels or pistons—you will see three interlocking musical tuning forks. Torakusu Yamaha founded the company in 1887 to build reed organs and upright pianos. After World War II, the company repurposed its precision metal casting machinery to manufacture their first motorcycle, the 125cc YA-1 'Red Dragonfly'. To this day, Yamaha's sound engineering division tunes motorcycle intake resonance and exhaust acoustics using the exact same acoustic physics applied to concert halls and musical instruments.",
    icon: "music",
    takeaway: "The engine roar of an R1 crossplane is literally acoustic music crafted by piano engineers."
  },
  {
    id: "desmodromic-breakthrough",
    year: "1956",
    title: "Ducati's War Against Broken Metal Springs",
    tag: "Engineering Triumph",
    summary: "How Fabio Taglioni eliminated valve springs to create Ducati's signature mechanical engine.",
    story: "In the 1950s, motorcycle engines could not rev beyond 8,000–9,000 RPM because the metallurgy of the era was primitive. At high revs, conventional steel valve springs suffered from 'valve float'—they couldn't expand quickly enough, causing pistons to collide with open valves and explode the engine. Ducati's visionary chief engineer Fabio Taglioni bypassed springs completely by inventing a mechanical cam mechanism with two rocker arms: one to push the valve open, and a second to physically pull it shut. This 'Desmodromic' system allowed Ducati engines to rev without fear, creating their legendary racetrack domination.",
    icon: "gear",
    takeaway: "Ducati didn't create Desmodromic valves for marketing—they did it because spring metallurgy literally failed under race stress."
  },
  {
    id: "cafe-racer-origin",
    year: "1960s",
    title: "Doing the Ton: The 45-RPM Record Race",
    tag: "Subculture",
    summary: "How 1960s British youth invented the modern café racer and the quest to hit 100 mph.",
    story: "In post-war London, working-class teenagers known as 'The Ton-Up Boys' or 'Rockers' gathered at 24-hour truck stops like the famous Ace Café. They stripped all non-essential weight from their British Triumphs, BSAs, and Nortons, fitting clip-on handlebars and swept-back exhaust pipes. A legendary dare involved dropping a coin into the jukebox to play a 3-minute rock-and-roll 45-RPM record, jumping onto their bikes, racing along arterial roads to a designated roundabout and returning before the song ended—all while trying to 'do the ton' (exceed 100 mph on public streets).",
    icon: "flame",
    takeaway: "The low handlebars, rearsets, and minimalist single seats on modern retro bikes originated directly from jukebox-timed illegal street sprints."
  },
  {
    id: "soichiro-honda-generator",
    year: "1946",
    title: "Honda's First Bike Ran on Army Radio Surplus",
    tag: "Humble Beginnings",
    summary: "Soichiro Honda started the world's biggest motorcycle empire with 500 war surplus generator engines.",
    story: "In 1946, amidst the ruins of post-war Japan, public transportation was crippled and gasoline was severely rationed. Soichiro Honda discovered a warehouse containing 500 tiny, two-stroke surplus engines originally built to power military wireless radio transmitters. Honda bought the engines, rigged them onto everyday bicycles, and used hot water bottles for temporary fuel tanks. People lined up around the block to buy these cheap motorized bicycles. When the 500 military engines ran out, Honda was forced to design and cast his own engine from scratch, giving birth to the Honda Motor Company.",
    icon: "lightbulb",
    takeaway: "The corporate giant that would build the Fireblade and win 800+ Grand Prix races started with military scrap motors attached to push-bikes."
  },
  {
    id: "isle-of-man-history",
    year: "1907",
    title: "The Mountain Course: 220+ MPH on Country Curbs",
    tag: "Racing Legend",
    summary: "Why the Isle of Man TT remains the world's most terrifying and sacred motorcycle test.",
    story: "When British parliament banned motor racing on public roads on the UK mainland in 1903, the autonomous Isle of Man happily offered its island roads. The Snaefell Mountain Course stretches 37.73 miles (60.7 km) through medieval towns, stone walls, and mountain mist with 264 corners. Riders today clock average lap speeds exceeding 136 mph (219 km/h) and top speeds over 210 mph down Bray Hill, brushing telegraph poles and living room garden walls mere inches away. It remains the ultimate crucible of high-performance bike chassis engineering.",
    icon: "mountain",
    takeaway: "Every supersport brake pad, radiator duct, and chassis rigidity profile is refined using data gathered on the lethal tarmac of the Isle of Man."
  },
  {
    id: "dakar-rally-birth",
    year: "1977",
    title: "Lost in the Sahara: The Birth of the Adventure Bike",
    tag: "Adventure Heritage",
    summary: "How a lost rider in the Libyan desert sparked the global 1200cc adventure touring segment.",
    story: "In 1977, French motorcycle racer Thierry Sabine became disoriented while competing in the Abidjan-Nice rally and was stranded for three days in the remote Tenere desert of the Sahara. Facing dehydration, he fell in love with the sheer immensity of the sand dunes and vowed that if he survived, he would organize an epic race open to all adventurers from Paris down to Dakar, Senegal. The Paris-Dakar Rally was born in 1978, forcing manufacturers like BMW, Yamaha, and Honda to invent heavy, high-capacity dual-sport bikes (like the BMW R80G/S and Yamaha Tenere) that gave birth to the modern adventure powerbike market.",
    icon: "compass",
    takeaway: "The BMW GS and Yamaha Tenere parked outside urban cafes owe their gigantic fuel tanks directly to survival against dehydration in the Sahara."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { HISTORY_FACTS };
}
