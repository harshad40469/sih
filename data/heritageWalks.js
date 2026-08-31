// Curated Pune Heritage Trails & Itineraries with Local Real Images
const HERITAGE_WALKS = [
  {
    id: "peshwa-trail-2hr",
    title: "The Peshwa Maratha Heritage Trail",
    subtitle: "Experience the seat of the Maratha Empire and historic core in 2 hours",
    durationBadge: "2 Hours",
    durationMinutes: 120,
    distanceKm: "1.8 km",
    locationsCount: 4,
    idealFor: ["Maratha Heritage", "History Buffs", "Architecture"],
    coverImage: "./public/images/monuments/shaniwar-wada.webp",
    themeColor: "from-amber-600 to-orange-700",
    summary: "Walk through the golden era of the 18th-century Peshwas, starting at young Shivaji's home, moving to the fortress of Shaniwar Wada, paying respects at Dagdusheth, and concluding at the wooden palace of Vishrambaug.",
    stops: [
      {
        order: 1,
        monumentId: "lal-mahal",
        name: "Lal Mahal",
        allocatedTime: "25 min",
        walkingToNext: "3 min walk (200m)",
        highlight: "Birthplace of Maratha Swarajya dream and Shaista Khan raid site."
      },
      {
        order: 2,
        monumentId: "shaniwar-wada",
        name: "Shaniwar Wada",
        allocatedTime: "45 min",
        walkingToNext: "5 min walk (350m)",
        highlight: "Massive Dilli Darwaza, lotus fountain, and seat of Peshwa prime ministers."
      },
      {
        order: 3,
        monumentId: "dagdusheth-temple",
        name: "Dagdusheth Halwai Ganpati",
        allocatedTime: "20 min",
        walkingToNext: "7 min walk (450m)",
        highlight: "Cultural epicentre of Lokmanya Tilak's freedom movement & gold idol."
      },
      {
        order: 4,
        monumentId: "vishrambaug-wada",
        name: "Vishrambaug Wada",
        allocatedTime: "30 min",
        walkingToNext: "Trail End",
        highlight: "Intricately carved Suru cypress columns and Peshwa Bajirao II's retreat."
      }
    ]
  },
  {
    id: "ancient-rock-caves-1hr",
    title: "1-Hour Ancient Roots & Cave Trail",
    subtitle: "Quick dive into Pune's oldest monolithic 8th-century sanctuary",
    durationBadge: "1 Hour",
    durationMinutes: 60,
    distanceKm: "0.8 km",
    locationsCount: 2,
    idealFor: ["Architecture", "Photography", "Quick Visit"],
    coverImage: "./public/images/monuments/pataleshwar-cave-temple.webp",
    themeColor: "from-emerald-700 to-teal-800",
    summary: "Perfect for travelers with limited time who want to touch 1,200 years of living history right in central Pune.",
    stops: [
      {
        order: 1,
        monumentId: "pataleshwar-caves",
        name: "Pataleshwar Cave Temple",
        allocatedTime: "40 min",
        walkingToNext: "4 min walk (250m)",
        highlight: "Circular Nandi pavilion hand-carved from a single basalt rock."
      },
      {
        order: 2,
        monumentId: "kelkar-museum",
        name: "Jangali Maharaj Heritage Courtyard",
        allocatedTime: "20 min",
        walkingToNext: "Trail End",
        highlight: "Quiet gardens and ancient banyan trees of Shivajinagar."
      }
    ]
  },
  {
    id: "freedom-struggle-halfday",
    title: "Independence & Valour Half-Day Trail",
    subtitle: "From Gandhian philosophy to royal Maratha bravery",
    durationBadge: "Half Day (4 Hours)",
    durationMinutes: 240,
    distanceKm: "12 km (Cab + Walk)",
    locationsCount: 3,
    idealFor: ["History", "Educational", "Family Friendly"],
    coverImage: "./public/images/monuments/aga-khan-palace.webp",
    themeColor: "from-blue-700 to-indigo-900",
    summary: "A journey bridging the Quit India Movement at Aga Khan Palace, the cenotaph of Mahadji Shinde in Wanowrie, and the panoramic views atop Parvati Hill.",
    stops: [
      {
        order: 1,
        monumentId: "aga-khan-palace",
        name: "Aga Khan Palace",
        allocatedTime: "90 min",
        walkingToNext: "15 min drive (6 km)",
        highlight: "Gandhi Smarak, Kasturba Gandhi Samadhi, and Italian verandas."
      },
      {
        order: 2,
        monumentId: "shinde-chhatri",
        name: "Shinde Chhatri",
        allocatedTime: "60 min",
        walkingToNext: "15 min drive (7 km)",
        highlight: "Ornate Rajasthani sandstone carvings and stained-glass hall."
      },
      {
        order: 3,
        monumentId: "parvati-hill",
        name: "Parvati Hill & Peshwa Museum",
        allocatedTime: "75 min",
        walkingToNext: "Trail End",
        highlight: "Sunset view over Pune from 103 gentle royal stone steps."
      }
    ]
  },
  {
    id: "sinhagad-warrior-fullday",
    title: "Sahyadri Forts & Peshwa Zenith (Full Day)",
    subtitle: "The ultimate Pune & Maratha Empire expedition",
    durationBadge: "Full Day (7 Hours)",
    durationMinutes: 420,
    distanceKm: "35 km (Vehicle + Trek)",
    locationsCount: 4,
    idealFor: ["Maratha Heritage", "Trekking & Adventure", "Photography"],
    coverImage: "./public/images/monuments/sinhagad-fort.webp",
    themeColor: "from-amber-700 to-red-900",
    summary: "Conquer the historic Sinhagad fortress in the morning mist, feast on authentic pitla bhakri, and explore the classic wadas of old Pune in the afternoon.",
    stops: [
      {
        order: 1,
        monumentId: "sinhagad-fort",
        name: "Sinhagad Mountain Fort",
        allocatedTime: "180 min",
        walkingToNext: "45 min drive back to city (30 km)",
        highlight: "Tanaji Malusare memorial, Kalyan Darwaza, and authentic Kanda Bhaji."
      },
      {
        order: 2,
        monumentId: "kelkar-museum",
        name: "Raja Dinkar Kelkar Museum",
        allocatedTime: "90 min",
        walkingToNext: "8 min walk (600m)",
        highlight: "Mastani Mahal room and 20,000 vintage artifacts."
      },
      {
        order: 3,
        monumentId: "shaniwar-wada",
        name: "Shaniwar Wada",
        allocatedTime: "75 min",
        walkingToNext: "10 min walk",
        highlight: "Historic fortress bastions at dusk."
      }
    ]
  }
];

window.HERITAGE_WALKS = HERITAGE_WALKS;
