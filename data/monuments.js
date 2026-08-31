// Comprehensive Pune Heritage Dataset with Local Real Photographs
const PUNE_MONUMENTS = [
  {
    id: "shaniwar-wada",
    name: "Shaniwar Wada",
    marathiName: "शनिवार वाडा",
    category: "Palaces",
    period: "1732 CE (Peshwa Era)",
    builtBy: "Peshwa Baji Rao I",
    estimatedDuration: "1.5 Hours",
    durationMinutes: 90,
    rating: 4.8,
    reviewsCount: "14.2k",
    heroImage: "./public/images/monuments/shaniwar-wada.webp",
    image: "./public/images/monuments/shaniwar-wada.webp",
    gallery: [
      "./public/images/monuments/shaniwar-wada.webp"
    ],
    tags: ["architecture", "history", "maratha", "photography", "educational"],
    shortDescription: "The 7-storey seat of the Peshwa rulers of the Maratha Empire, famed for its towering Dilli Darwaza and tragic historic legends.",
    fullOverview: "Shaniwar Wada was the grand fortified palace and seat of power of the Peshwas (hereditary Prime Ministers) of the Maratha Empire until 1818. Commissioned by Peshwa Baji Rao I in 1730, it once stood seven storeys tall and housed thousands of residents, courtiers, and soldiers before a mysterious fire ravaged it in 1828.",
    whyItMatters: "It served as the nerve center of the Maratha Empire during its zenith, when its influence spanned from Attock to Cuttack. It represents the height of Maratha military architecture and civil engineering.",
    architecture: "A fusion of Maratha and Mughal military architecture. Features granite bastions, teakwood pillars, 5 historic gates (Dilli Darwaza, Mastani Darwaza, Khidki Darwaza, Ganesh Darwaza, and Jambhul Darwaza), and the famous 16-petal lotus fountain (Hazari Karanje).",
    interestingFacts: [
      "The main gate, Dilli Darwaza, is studded with 72 sharp steel spikes to deter charging war elephants.",
      "The Hazari Karanje fountain could shoot a thousand jet sprays of water simultaneously.",
      "Built at an original cost of ₹16,110 — a staggering sum in 1732."
    ],
    bestTimeToVisit: "5:00 PM – 7:30 PM (Evening Light & Sound show time)",
    entryFee: "₹25 for Indians, ₹300 for Foreigners",
    timings: "9:00 AM to 6:30 PM (Open all days)",
    location: "Shaniwar Peth, Pune City Centre",
    mapCoords: { lat: 18.5196, lng: 73.8553 },
    nearbySites: ["Lal Mahal (200m)", "Dagdusheth Halwai Temple (400m)", "Kasba Ganpati (350m)"],
    audioGuideScript: "Welcome to Shaniwar Wada, the majestic seat of the Peshwas. As you stand before the towering Dilli Darwaza, notice the heavy iron spikes positioned at eye-level for war elephants...",
    aiKnowledge: {
      summary: "Shaniwar Wada was the 18th-century palace fortress of the Peshwas, renowned for its Maratha military architecture, Dilli Darwaza, and historical significance in the Maratha Empire.",
      significance: "It symbolizes the political zenith of the Maratha confederacy under Peshwa Baji Rao I and Nana Saheb.",
      story: "On the night of August 30, 1773, 17-year-old Peshwa Narayan Rao was assassinated here amid a conspiracy involving his uncle Raghunathrao and aunt Anandibai, giving rise to many dramatic folklore tales.",
      architectureHighlights: "Massive teakwood brackets, deep defensive moats, intricate stone foundations, and Persian-inspired water fountains."
    }
  },
  {
    id: "aga-khan-palace",
    name: "Aga Khan Palace",
    marathiName: "आगा खान पॅलेस",
    category: "Palaces",
    period: "1892 CE (Colonial & Freedom Movement)",
    builtBy: "Sultan Muhammed Shah Aga Khan III",
    estimatedDuration: "2 Hours",
    durationMinutes: 120,
    rating: 4.7,
    reviewsCount: "11.8k",
    heroImage: "./public/images/monuments/aga-khan-palace.webp",
    image: "./public/images/monuments/aga-khan-palace.webp",
    gallery: [
      "./public/images/monuments/aga-khan-palace.webp"
    ],
    tags: ["architecture", "history", "educational", "photography", "family"],
    shortDescription: "A serene Italian-arched palace in Yerawada where Mahatma Gandhi, Kasturba Gandhi, and Sarojini Naidu were interned during the Quit India Movement.",
    fullOverview: "Built in 1892 as an act of charity to help famine-hit villagers in Pune, this majestic Italianate palace holds a profound place in India's Freedom Movement. During the 1942 Quit India Movement, Mahatma Gandhi was imprisoned here with his wife Kasturba Gandhi and secretary Mahadev Desai, both of whom passed away within these grounds.",
    whyItMatters: "Designated as a Monument of National Importance. Houses Gandhi's personal artifacts, letters, ashes (Gandhi Smarak Samiti), and the sacred Samadhis of Kasturba Gandhi and Mahadev Desai.",
    architecture: "Grand Italian arches, spacious verandas, polished stone corridors, and a sprawling 19-acre lush botanical garden with peaceful fountains.",
    interestingFacts: [
      "Built with an expenditure of ₹1.2 million to provide employment to over 1,000 famine-stricken peasants.",
      "In 1969, Aga Khan IV donated the entire palace to the people of India in tribute to Mahatma Gandhi."
    ],
    bestTimeToVisit: "9:30 AM – 12:00 PM (Peaceful morning atmosphere)",
    entryFee: "₹25 for Indians, ₹300 for Foreigners",
    timings: "9:00 AM to 5:30 PM (All days)",
    location: "Nagar Road, Kalyani Nagar / Yerawada, Pune",
    mapCoords: { lat: 18.5524, lng: 73.9015 },
    nearbySites: ["Osho Garden (3 km)", "Bund Garden (3.5 km)", "Koregaon Park (2.5 km)"],
    audioGuideScript: "Step into the tranquil corridors of Aga Khan Palace. Built in 1892, this Italian-arched sanctuary witnessed pivotal moments of the Quit India movement in 1942...",
    aiKnowledge: {
      summary: "Aga Khan Palace is an 1892 Italian-style mansion that served as the prison for Mahatma Gandhi during the Quit India Movement and houses the samadhis of Kasturba Gandhi and Mahadev Desai.",
      significance: "A national memorial honoring Mahatma Gandhi's philosophy of non-violence and the sacrifices made during the 1942 Quit India struggle.",
      story: "Mahatma Gandhi spent 21 crucial months here under house arrest. Kasturba Gandhi spent her final breaths here in 1944, and a marble samadhi marks her resting place under shaded trees.",
      architectureHighlights: "Italian renaissance arches, wooden staircases, marble memorial rooms, and extensive landscape lawns."
    }
  },
  {
    id: "sinhagad-fort",
    name: "Sinhagad Fort",
    marathiName: "सिंहगड किल्ला",
    category: "Forts",
    period: "14th Century / 1670 CE Battle",
    builtBy: "Rashtrakuta dynasty / Chhatrapati Shivaji Maharaj",
    estimatedDuration: "3.5 Hours",
    durationMinutes: 210,
    rating: 4.9,
    reviewsCount: "25.6k",
    heroImage: "./public/images/monuments/sinhagad-fort.webp",
    image: "./public/images/monuments/sinhagad-fort.webp",
    gallery: [
      "./public/images/monuments/sinhagad-fort.webp"
    ],
    tags: ["maratha", "history", "photography", "architecture"],
    shortDescription: "The iconic mountain stronghold perched at 1,312 meters, immortalized by Tanaji Malusare's heroic 1670 battle where 'Gad aala, pan Sinha gela'.",
    fullOverview: "Perched high on the Sahyadri mountains 30 km southwest of Pune, Sinhagad (The Lion's Fort) is one of the most celebrated Maratha hill forts. Formerly called Kondhana, it was renamed Sinhagad by Chhatrapati Shivaji Maharaj in memory of Subhedar Tanaji Malusare, who made the supreme sacrifice scaling its vertical cliffs at midnight in 1670.",
    whyItMatters: "A symbol of Maratha valor, military grit, and strategic Sahyadri warfare. Provides panoramic views of Pune, Khadakwasla Dam, and surrounding Sahyadri peaks.",
    architecture: "Natural cliff fortifications, Pune Darwaza, Kalyan Darwaza, Tanaji Malusare's Samadhi, rock-cut water cisterns (Dev Taka) with perennial sweet drinking water.",
    interestingFacts: [
      "Legend has it that Tanaji Malusare's commando troops scaled the sheer 400-meter precipice using trained monitor lizards (Ghorpad named Yashwanti).",
      "Lokmanya Bal Gangadhar Tilak had a summer residence atop Sinhagad, where he met Mahatma Gandhi in 1915."
    ],
    bestTimeToVisit: "6:00 AM – 10:00 AM for sunrise or 4:00 PM for sunset (Monsoon & Winter are best)",
    entryFee: "₹50 per vehicle toll, ₹20 forest entry",
    timings: "5:00 AM to 6:00 PM (Daily)",
    location: "Thoptewadi, Haveli Taluka, 30 km from Pune City",
    mapCoords: { lat: 18.3664, lng: 73.7554 },
    nearbySites: ["Khadakwasla Dam (12 km)", "Panshet Dam (22 km)", "National Defence Academy (16 km)"],
    audioGuideScript: "Feel the mountain breeze of Sinhagad, standing 1,312 meters above sea level. This impregnable fort witnessed the legendary 1670 raid led by Tanaji Malusare...",
    aiKnowledge: {
      summary: "Sinhagad Fort is an ancient Sahyadri hill fortress famous for the 1670 Battle of Sinhagad fought by Tanaji Malusare under Chhatrapati Shivaji Maharaj.",
      significance: "The epithet 'Gad aala pan Sinha gela' (The fort is captured, but the lion is lost) immortalized Shivaji Maharaj's tribute to his commander Tanaji.",
      story: "In February 1670, Tanaji led 300 Mavala soldiers up the sheer cliff called Dronagiri, surprised the Mughal garrison led by Udaybhan Rathod, and captured the fort at the cost of his life.",
      architectureHighlights: "Double-layered stone ramparts, rock-cut natural caves, Dev Taka cold water springs, and cliff bastions."
    }
  },
  {
    id: "lal-mahal",
    name: "Lal Mahal (Red Palace)",
    marathiName: "लाल महाल",
    category: "Historic Sites",
    period: "1630 CE (Reconstructed 1988)",
    builtBy: "Shahaji Raje Bhosale for Shivaji Maharaj & Jijabai",
    estimatedDuration: "45 Minutes",
    durationMinutes: 45,
    rating: 4.6,
    reviewsCount: "8.4k",
    heroImage: "./public/images/monuments/lal-mahal.webp",
    image: "./public/images/monuments/lal-mahal.webp",
    gallery: [
      "./public/images/monuments/lal-mahal.webp"
    ],
    tags: ["maratha", "history", "educational", "family"],
    shortDescription: "The childhood home of Chhatrapati Shivaji Maharaj where he grew up under Rajmata Jijabai, and later executed the daring midnight raid on Shaista Khan.",
    fullOverview: "Originally built in 1630 by Shahaji Bhosale for his wife Jijabai and young son Shivaji, Lal Mahal is where the founder of the Maratha Empire spent his formative childhood years. It is also famous as the site of one of Shivaji's most daring guerrilla operations: cutting off the fingers of Mughal governor Shaista Khan during a midnight assault.",
    whyItMatters: "Directly connected to the foundational childhood memories and early military brilliance of Chhatrapati Shivaji Maharaj. Features a statue of young Shivaji plowing Pune's soil with a golden plow.",
    architecture: "Traditional red terracotta facade, wooden carved balconies, pictorial galleries depicting Shivaji Maharaj's life, and a central memorial hall.",
    interestingFacts: [
      "Young Shivaji Maharaj ploughed Pune's devastated soil with a golden plough here in 1630 to revive the cursed land.",
      "In April 1663, Shivaji Maharaj infiltrated the heavily guarded palace disguised as a wedding party to attack Shaista Khan."
    ],
    bestTimeToVisit: "10:00 AM – 1:00 PM or 4:00 PM – 7:00 PM",
    entryFee: "₹10 for Adults, ₹5 for Children",
    timings: "9:00 AM to 1:00 PM & 4:00 PM to 8:00 PM",
    location: "Kasba Peth, near Shaniwar Wada, Pune",
    mapCoords: { lat: 18.5204, lng: 73.8569 },
    nearbySites: ["Shaniwar Wada (200m)", "Kasba Ganpati (150m)", "Dagdusheth Halwai Temple (300m)"],
    audioGuideScript: "Welcome to Lal Mahal, the childhood home of Chhatrapati Shivaji Maharaj. Here, under the mentorship of his mother Rajmata Jijabai, young Shivaji learned governance, warfare, and righteous leadership...",
    aiKnowledge: {
      summary: "Lal Mahal is the historic red residence where Shivaji Maharaj lived with Jijabai as a child, and where he famously ambushed Shaista Khan in 1663.",
      significance: "Birthplace of the Maratha Swarajya dream in Pune city.",
      story: "When Shaista Khan occupied Pune and took over Lal Mahal, Shivaji staged a night infiltration with 400 soldiers, breaching the harem wall and amputating Khan's fingers as he escaped through the window.",
      architectureHighlights: "Terracotta-red brickwork, oil paintings of 17th-century battles, and statues of Jijabai and young Shivaji."
    }
  },
  {
    id: "pataleshwar-caves",
    name: "Pataleshwar Cave Temple",
    marathiName: "पाताळेश्वर लेणी",
    category: "Temples",
    period: "8th Century CE (Rashtrakuta Era)",
    builtBy: "Rashtrakuta Dynasty",
    estimatedDuration: "1 Hour",
    durationMinutes: 60,
    rating: 4.6,
    reviewsCount: "9.1k",
    heroImage: "./public/images/monuments/pataleshwar-cave-temple.webp",
    image: "./public/images/monuments/pataleshwar-cave-temple.webp",
    gallery: [
      "./public/images/monuments/pataleshwar-cave-temple.webp"
    ],
    tags: ["architecture", "religious", "history", "photography"],
    shortDescription: "An 8th-century rock-cut monolithic subterranean temple carved out of a single basalt rock, dedicated to Lord Shiva with a grand circular Nandi mandapa.",
    fullOverview: "Hidden right in the bustling heart of modern Shivaji Nagar, Pataleshwar ('Lord of the Netherworld') is an astonishing 8th-century monolithic rock-cut cave temple reminiscent of the Ellora Caves. The entire sanctum, pillars, and circular Nandi pavilion were hand-chiselled out of a single massive basalt rock formation.",
    whyItMatters: "Pune's oldest surviving monument and an extraordinary example of Rashtrakuta rock-cut craftsmanship contemporaneous with the Kailash Temple of Ellora.",
    architecture: "Monolithic circular Nandi mandapa with massive umbrella-like stone canopy, square pillars, Shiva lingam sanctum, and unfinished underground corridors.",
    interestingFacts: [
      "The temple remains naturally cool inside even during peak 40°C summer heat due to its basalt rock insulation.",
      "The temple excavation was never completely finished because the stone carvers struck a natural fault line in the rock."
    ],
    bestTimeToVisit: "8:00 AM – 11:00 AM (Serene and cool morning lighting)",
    entryFee: "Free Entry (ASI Protected)",
    timings: "8:30 AM to 5:30 PM (Daily)",
    location: "Jangali Maharaj Road, Shivajinagar, Pune",
    mapCoords: { lat: 18.5273, lng: 73.8512 },
    nearbySites: ["Jangali Maharaj Temple (100m)", "Fergusson College (1.2 km)", "FC Road (800m)"],
    audioGuideScript: "Descend into the quiet stone realm of Pataleshwar. Carved more than 1,200 years ago during the Rashtrakuta dynasty, notice the circular Nandi pavilion standing on massive monolithic columns...",
    aiKnowledge: {
      summary: "Pataleshwar Cave Temple is an 8th-century monolithic subterranean temple dedicated to Lord Shiva, carved from a single basalt rock during the Rashtrakuta dynasty.",
      significance: "Oldest surviving structural heritage in Pune, sharing structural parallels with the world-famous Ellora caves.",
      story: "Dedicated to Pataleshwar (God of the Underworld), it was sculpted around 750 CE. Legend mentions a grain of rice containing 5,000 carved letters preserved in the museum on site.",
      architectureHighlights: "Circular Nandi canopy, massive cubic pillar aisles, dark sanctum sanctorum with Shiva Linga, and brass oil lamps."
    }
  },
  {
    id: "kelkar-museum",
    name: "Raja Dinkar Kelkar Museum",
    marathiName: "राजा दिनकर केळकर वस्तुसंग्रहालय",
    category: "Museums",
    period: "1920–1960 Collection (Late Medieval to Modern)",
    builtBy: "Dr. D.G. Kelkar (Kaka Kelkar)",
    estimatedDuration: "2 Hours",
    durationMinutes: 120,
    rating: 4.7,
    reviewsCount: "7.9k",
    heroImage: "./public/images/monuments/kelkar-museum.webp",
    image: "./public/images/monuments/kelkar-museum.webp",
    gallery: [
      "./public/images/monuments/kelkar-museum.webp"
    ],
    tags: ["art", "educational", "history", "family", "architecture"],
    shortDescription: "A treasure trove of 20,000+ rare Indian artifacts, traditional musical instruments, Peshwa textiles, and the breathtaking reconstructed Mastani Mahal.",
    fullOverview: "A labor of pure love, this museum was painstakingly assembled by Dr. Dinkar G. Kelkar over 60 years in memory of his only son, Raja. It holds over 20,000 everyday and royal artifacts from 18th and 19th century India, including carved doors, lamps, betel nut cutters, war instruments, and the complete reconstructed palace wing of Mastani Bai.",
    whyItMatters: "One of India's finest private collections of everyday material culture, folk craftsmanship, and Maratha artistic heritage.",
    architecture: "Traditional Rajasthani and Peshwa wooden architecture, intricately carved teakwood ceilings, jharokhas, and stained glass arches.",
    interestingFacts: [
      "Dr. Kelkar traveled to remote villages and dilapidated palaces across India on foot and bullock cart to salvage artifacts from neglect.",
      "The museum contains a stunning replica of Mastani Mahal, featuring crystal chandeliers, Persian mirrors, and musical instruments."
    ],
    bestTimeToVisit: "10:00 AM – 1:00 PM or 2:30 PM – 5:00 PM",
    entryFee: "₹100 for Adults, ₹30 for Children",
    timings: "10:00 AM to 5:30 PM (All days)",
    location: "Natubaug, Shukrawar Peth, Bajirao Road, Pune",
    mapCoords: { lat: 18.5135, lng: 73.8542 },
    nearbySites: ["Vishrambaug Wada (400m)", "Tulshibaug (600m)", "Mandai Market (500m)"],
    audioGuideScript: "Step into Dr. Kelkar's wondrous world of Indian craftsmanship. Every piece here tells the story of how art lived in everyday objects: from ornate spice boxes to the lavish chandeliers of Mastani Mahal...",
    aiKnowledge: {
      summary: "Raja Dinkar Kelkar Museum houses a 20,000-piece collection of 18th/19th century Indian everyday crafts, utensils, musical instruments, and the Mastani Mahal hall.",
      significance: "Preserves the vanishing material heritage and everyday crafts of Maratha and broader Indian history.",
      story: "Dr. Kelkar gathered items over six decades, saving rare carvings from demolition. In 1975, he gifted the entire collection to the Government of Maharashtra.",
      architectureHighlights: "Carved teak jharokha balconies, gold-foil chandeliers, sitars, veenas, and traditional Peshwa home interiors."
    }
  },
  {
    id: "vishrambaug-wada",
    name: "Vishrambaug Wada",
    marathiName: "विश्रामबाग वाडा",
    category: "Palaces",
    period: "1807 CE (Late Peshwa Period)",
    builtBy: "Peshwa Bajirao II",
    estimatedDuration: "1 Hour",
    durationMinutes: 60,
    rating: 4.5,
    reviewsCount: "6.2k",
    heroImage: "./public/images/monuments/vishrambaug-wada.webp",
    image: "./public/images/monuments/vishrambaug-wada.webp",
    gallery: [
      "./public/images/monuments/vishrambaug-wada.webp"
    ],
    tags: ["architecture", "maratha", "history", "photography"],
    shortDescription: "A magnificent 3-storey mansion celebrated for its ornate wooden facade, handcrafted Suru (cypress tree) pillars, and late Peshwa royal opulence.",
    fullOverview: "Built in 1807 by Peshwa Bajirao II as his luxurious personal residence at a cost of ₹200,000, Vishrambaug Wada stands as the last great architectural masterpiece of the Peshwa era. The three-storey wooden mansion features an iconic ornate balcony where the Peshwa watched court musicians and public gatherings.",
    whyItMatters: "Exemplifies classic Peshwa Wada architecture with its stone foundations, Burma teak pillars, courtyards (chowks), and wooden lattices.",
    architecture: "Teakwood facade, cypress-tree shaped pillars (Suru columns), multi-chowk internal courtyard, and an exhibition gallery on Pune's historical growth.",
    interestingFacts: [
      "Peshwa Bajirao II preferred Vishrambaug Wada over Shaniwar Wada because of its refined, peaceful domestic luxury.",
      "Later served as Pune's Sanskrit College, high school, and municipal corporation headquarters."
    ],
    bestTimeToVisit: "10:30 AM – 1:30 PM or 3:30 PM – 5:30 PM",
    entryFee: "₹10 for heritage exhibition",
    timings: "10:00 AM to 5:00 PM (Closed Mondays)",
    location: "Sadashiv Peth, Thorale Bajirao Road, Pune",
    mapCoords: { lat: 18.5139, lng: 73.8528 },
    nearbySites: ["Kelkar Museum (400m)", "Tulshibaug Temple (350m)", "Bhikardas Maruti (300m)"],
    audioGuideScript: "Admire the wooden elegance of Vishrambaug Wada. Notice the delicate cypress-tree shaped Suru pillars and the famous first-floor balcony from which the last Peshwa observed the city...",
    aiKnowledge: {
      summary: "Vishrambaug Wada is an 1807 luxury residence built by Peshwa Bajirao II, featuring carved teakwood facade and classic Peshwai chowk courtyard layout.",
      significance: "The last grand residential palace built during the Maratha Empire before British takeover in 1818.",
      story: "Bajirao II spent his retirement days here enjoying poetry and music. The building survived British artillery and was restored as a heritage center for Pune's history.",
      architectureHighlights: "Burma teak carvings, Suru columns, terracotta tiled roof, and open internal quadrangles."
    }
  },
  {
    id: "parvati-hill",
    name: "Parvati Hill & Temples",
    marathiName: "पार्वती टेकडी व मंदिरे",
    category: "Temples",
    period: "1749 CE (Peshwa Era)",
    builtBy: "Peshwa Nanasaheb (Balaji Baji Rao)",
    estimatedDuration: "1.5 Hours",
    durationMinutes: 90,
    rating: 4.8,
    reviewsCount: "16.8k",
    heroImage: "./public/images/monuments/parvati-hill.webp",
    image: "./public/images/monuments/parvati-hill.webp",
    gallery: [
      "./public/images/monuments/parvati-hill.webp"
    ],
    tags: ["religious", "history", "photography", "maratha", "family"],
    shortDescription: "A scenic 103-step hillock complex overlooking all of Pune, holding historic Peshwa temples, Peshwa Museum, and the Samadhi of Nanasaheb Peshwa.",
    fullOverview: "Rising 640 meters above sea level in southern Pune, Parvati Hill is reached by 103 broad stone steps designed for royal palanquins. Built in 1749 by Peshwa Nanasaheb, the hilltop houses ancient shrines dedicated to Devdeveshwar (Shiva), Vishnu, Kartikeya, and Vitthal, alongside the Peshwa Museum and Nanasaheb's memorial.",
    whyItMatters: "Highest natural vantage point in core Pune city with 360-degree city views. It was the daily devotional center of the Peshwa dynasty.",
    architecture: "Black stone temple spires (Shikharas), Peshwa stone masonry, broad step ramps without mortar, and traditional dipmal (light towers).",
    interestingFacts: [
      "Peshwa Nanasaheb watched the Battle of Khadki (1817) from this hill using a brass telescope.",
      "The 103 steps were designed so gently that royal elephants and palanquin bearers could ascend without strain."
    ],
    bestTimeToVisit: "6:00 AM – 8:30 AM (Sunrise & morning breeze) or 5:30 PM (Sunset)",
    entryFee: "Free Entry; ₹20 for Peshwa Museum",
    timings: "5:00 AM to 8:00 PM (Daily)",
    location: "Parvati Paytha, Southern Pune",
    mapCoords: { lat: 18.4975, lng: 73.8475 },
    nearbySites: ["Sarasbaug (1.2 km)", "Peshwe Energy Park (1 km)", "Taljai Hills (3.5 km)"],
    audioGuideScript: "Ascend the 103 steps of Parvati Hill. As you climb, observe how each stone was shaped for ease of walking. At the summit awaits a 360-degree vista of Pune and the sacred Devdeveshwar Temple...",
    aiKnowledge: {
      summary: "Parvati Hill is a 2,100-foot hilltop temple complex built in 1749 by Peshwa Nanasaheb, offering historic temples and panoramic views of Pune.",
      significance: "The spiritual heart of the Peshwa rulers and the site of Peshwa Nanasaheb's final resting samadhi.",
      story: "Built following a vow made by Kashibai (mother of Nanasaheb) to cure her foot illness. Nanasaheb expanded it into an expansive sacred fortress.",
      architectureHighlights: "Peshwa nagara-style temple shikharas, octagonal dipmal stone towers, and the Peshwa museum containing coins and swords."
    }
  },
  {
    id: "dagdusheth-temple",
    name: "Shreemant Dagdusheth Halwai Ganpati",
    marathiName: "श्रीमंत दगडूशेठ हलवाई गणपती",
    category: "Temples",
    period: "1893 CE",
    builtBy: "Dagdusheth Gadve (Halwai) & Lakshmibai",
    estimatedDuration: "45 Minutes",
    durationMinutes: 45,
    rating: 4.9,
    reviewsCount: "42.5k",
    heroImage: "./public/images/monuments/dagdusheth-temple.webp",
    image: "./public/images/monuments/dagdusheth-temple.webp",
    gallery: [
      "./public/images/monuments/dagdusheth-temple.webp"
    ],
    tags: ["religious", "art", "family", "history"],
    shortDescription: "One of Maharashtra's most revered shrines, famous for its 7.5-foot gold-adorned Ganesha idol and key role in Lokmanya Tilak's public Ganeshotsav.",
    fullOverview: "Founded in 1893 by a sweet merchant (Halwai) named Dagdusheth and his wife Lakshmibai after losing their son to plague, this temple became the epicenter of Lokmanya Bal Gangadhar Tilak's movement to transform Ganesh Chaturthi into a unified public freedom gathering against British rule.",
    whyItMatters: "A living spiritual and cultural anchor of Pune. Renowned for its intricate gold embellishments, charitable trusts, and world-famous Ganeshotsav pandals.",
    architecture: "Glass and marble sanctum with pure gold ornamentation, silver gates, and decorative festive facade replicas of famous Indian temples.",
    interestingFacts: [
      "The Ganesha idol is adorned with over 40 kilograms of pure gold ornaments gifted by devotees.",
      "Lokmanya Tilak first conceived the Sarvajanik Ganeshotsav public movement after discussions at this very site."
    ],
    bestTimeToVisit: "7:00 AM – 9:00 AM or 7:30 PM (Evening Maha Aarti)",
    entryFee: "Free Entry",
    timings: "6:00 AM to 11:00 PM (Daily)",
    location: "Budhwar Peth, Shivaji Road, Pune",
    mapCoords: { lat: 18.5175, lng: 73.8562 },
    nearbySites: ["Shaniwar Wada (400m)", "Lal Mahal (300m)", "Tulshibaug (250m)"],
    audioGuideScript: "You are at Dagdusheth Halwai Ganpati Temple, a place of intense devotion and freedom history. Notice the radiant 7.5-foot Ganesha idol adorned in pure gold...",
    aiKnowledge: {
      summary: "Dagdusheth Halwai Ganpati Temple is an 1893 shrine central to Pune's religious identity and Lokmanya Tilak's public Ganeshotsav freedom movement.",
      significance: "Played a historical catalyst role in uniting Indian society during the British colonial era through community cultural festivals.",
      story: "Dagdusheth Halwai, devastated by his son's demise in the 1890 plague, built this temple on the advice of his spiritual guru. It quickly grew into Maharashtra's beloved deity.",
      architectureHighlights: "Intricate marble carvings, gold-leaf canopies, silver door panels, and high-security sanctum."
    }
  },
  {
    id: "shinde-chhatri",
    name: "Shinde Chhatri",
    marathiName: "शिंदे छत्री",
    category: "Historic Sites",
    period: "1794 / 1965 CE",
    builtBy: "Mahadji Shinde & Madhavrao Scindia",
    estimatedDuration: "1 Hour",
    durationMinutes: 60,
    rating: 4.6,
    reviewsCount: "5.3k",
    heroImage: "./public/images/monuments/shinde-chhatri.webp",
    image: "./public/images/monuments/shinde-chhatri.webp",
    gallery: [
      "./public/images/monuments/shinde-chhatri.webp"
    ],
    tags: ["architecture", "photography", "maratha", "history"],
    shortDescription: "An Anglo-Rajasthani architectural marvel in Wanowrie dedicated to the great 18th-century Maratha military commander Mahadji Shinde.",
    fullOverview: "Shinde Chhatri is a majestic cenotaph complex in Wanowrie honoring Mahadji Shinde (Scindia), the supreme commander-in-chief of the Maratha Army from 1761 to 1794. The monument blends ornate Rajasthani carvings, European stained glass, and Maratha stone craft.",
    whyItMatters: "Celebrates the warrior who resurrected Maratha power across North India after the Third Battle of Panipat and controlled Delhi's imperial court.",
    architecture: "Rajasthani yellow sandstone carvings, stained glass windows, painted ceilings, European-style iron railings, and an imposing Shiva sanctum.",
    interestingFacts: [
      "Mahadji Shinde was so powerful that the Mughal Emperor Shah Alam II conferred the title of Vakil-i-Mutlaq (Regent of the Empire) upon the Marathas.",
      "The cenotaph follows Rajasthani Rajput funerary architecture rarely found elsewhere in Maharashtra."
    ],
    bestTimeToVisit: "3:00 PM – 5:30 PM (Sunlight streaming through stained glass)",
    entryFee: "₹20 for Indians, ₹100 for Foreigners",
    timings: "8:00 AM to 6:00 PM (Daily)",
    location: "Wanowrie, Pune Cantonment Area",
    mapCoords: { lat: 18.4902, lng: 73.8966 },
    nearbySites: ["Empress Botanical Garden (2.5 km)", "Command Hospital (1.5 km)", "Race Course (2 km)"],
    audioGuideScript: "Welcome to Shinde Chhatri, the grand memorial of Mahadji Shinde. Gaze up at the Rajasthani spire and notice the colorful stained-glass work that creates a breathtaking amber glow inside...",
    aiKnowledge: {
      summary: "Shinde Chhatri is an 18th-century Rajasthani-style memorial cenotaph in Wanowrie dedicated to Maratha military legend Mahadji Shinde.",
      significance: "Honors the commander who dominated 18th-century northern Indian politics and restored Maratha prestige.",
      story: "Mahadji Shinde passed away in Wanowrie in 1794. The Shiva temple was built by him before his death, and the grand three-storey memorial chhatri was added by his descendants in the Scindia dynasty.",
      architectureHighlights: "Rajasthani jali work, colored European stained glass, hand-painted floral ceiling frescoes, and stone pillars."
    }
  }
];

window.PUNE_MONUMENTS = PUNE_MONUMENTS;
