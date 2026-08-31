// Intelligent Local AI Knowledge Engine for Pune Heritage Explorer
const AI_KNOWLEDGE_BASE = {
  // Frequently asked monument questions & instant responses
  monumentFAQs: {
    "shaniwar-wada": [
      {
        q: "Why is Shaniwar Wada important?",
        a: "Shaniwar Wada was the nerve center and seat of government of the Peshwa prime ministers of the Maratha Empire from 1732 to 1818. During this era, major geopolitical decisions shaping the Indian subcontinent were orchestrated from this very fortress."
      },
      {
        q: "Tell me the story of Narayan Rao",
        a: "In August 1773, 17-year-old Peshwa Narayan Rao was assassinated inside Shaniwar Wada in a palace conspiracy led by the Gardi guards, allegedly orchestrated through an altered letter written by his aunt Anandibai. The phrase 'Kaka Mala Vachva' (Uncle save me!) entered Pune folklore."
      },
      {
        q: "Why does the Dilli Darwaza have sharp spikes?",
        a: "The Dilli Darwaza features 72 razor-sharp steel spikes positioned exactly at the head-height of charging war elephants to prevent them from ramming the heavy teakwood gates during a siege."
      },
      {
        q: "What happened during the 1828 fire?",
        a: "A catastrophic fire raged through Shaniwar Wada for seven consecutive days in 1828, destroying the magnificent 7-storey wooden residential palaces. Only the heavy stone foundation ramparts and gates survived."
      }
    ],
    "aga-khan-palace": [
      {
        q: "Why was Mahatma Gandhi imprisoned here?",
        a: "Following the launch of the Quit India Movement in August 1942, the British colonial government detained Mahatma Gandhi, his wife Kasturba Gandhi, Sarojini Naidu, and Mahadev Desai at Aga Khan Palace to isolate them from public protests."
      },
      {
        q: "Whose samadhis are located here?",
        a: "The palace grounds contain the marble samadhis of Kasturba Gandhi (who passed away in February 1944) and Mahadev Desai (Gandhi's private secretary who died in August 1942)."
      },
      {
        q: "Why did Aga Khan donate this palace?",
        a: "In 1969, Prince Karim El Hussieni (Aga Khan IV) donated the entire palace complex to the people of India as a mark of deep respect to Mahatma Gandhi and his philosophy of Ahimsa (non-violence)."
      }
    ],
    "sinhagad-fort": [
      {
        q: "What is the story behind 'Gad aala, pan Sinha gela'?",
        a: "In the 1670 Battle of Sinhagad, Subhedar Tanaji Malusare led 300 Mavala soldiers up a sheer 400-meter cliff at midnight to recapture Kondhana from Mughal commander Udaybhan Rathod. When Tanaji fell fighting heroically, Chhatrapati Shivaji Maharaj grieved: 'Gad aala, pan Sinha gela' (The fort is won, but the lion is lost!)."
      },
      {
        q: "What are the Dev Taka cisterns?",
        a: "Dev Taka is a natural rock-cut water cistern carved deep into the basalt mountain. It collects naturally filtered rainwater through rock strata and provides chilled, sweet drinking water throughout the year."
      }
    ],
    "lal-mahal": [
      {
        q: "What was the famous raid on Shaista Khan?",
        a: "In April 1663, Mughal Viceroy Shaista Khan occupied Pune and took over Lal Mahal. Shivaji Maharaj infiltrated the fortified palace with 400 chosen soldiers disguised as a wedding procession, surprised Khan in his bedroom, and severed his fingers as he leapt out of a window to escape."
      }
    ],
    "pataleshwar-caves": [
      {
        q: "How old is Pataleshwar Cave Temple?",
        a: "Pataleshwar is over 1,250 years old, carved in the 8th century CE during the Rashtrakuta dynasty. It is contemporary with the Kailash Temple at Ellora and represents the oldest surviving architecture in Pune."
      }
    ]
  },

  // General query matching rules
  answerGeneralQuery: function(queryText) {
    const q = (queryText || "").toLowerCase().trim();

    // 1. Shaniwar Wada
    if (q.includes("shaniwar") || q.includes("wada") || q.includes("peshwa")) {
      return {
        text: "Shaniwar Wada was the 7-storey seat of the Peshwas built in 1732 by Peshwa Baji Rao I. Renowned for its imposing Dilli Darwaza with elephant spikes, the Hazari Karanje lotus fountain, and its dramatic Maratha history. Would you like to view its detailed architectural guide or add it to your heritage walk?",
        recommendedMonuments: ["shaniwar-wada", "lal-mahal", "vishrambaug-wada"],
        intent: "monument-peshwa"
      };
    }

    // 2. Time based: 2 Hours
    if (q.includes("2 hour") || q.includes("two hour") || q.includes("quick") || q.includes("short trip")) {
      return {
        text: "For a memorable 2-hour visit, I recommend our curated 'Peshwa Maratha Trail' in old Pune! Start at Lal Mahal (25 min), walk 3 minutes to Shaniwar Wada (45 min), visit Dagdusheth Ganpati (20 min), and conclude at Vishrambaug Wada (30 min). Total walking distance is just 1.8 km!",
        recommendedMonuments: ["lal-mahal", "shaniwar-wada", "dagdusheth-temple", "vishrambaug-wada"],
        intent: "itinerary-2hr"
      };
    }

    // 3. Time based: 1 Hour
    if (q.includes("1 hour") || q.includes("one hour")) {
      return {
        text: "With 1 hour, head directly to Pataleshwar Cave Temple on JM Road (40 min) — a breathtaking 8th-century subterranean temple carved from a single basalt rock, plus a peaceful walk through the adjacent heritage courtyard.",
        recommendedMonuments: ["pataleshwar-caves"],
        intent: "itinerary-1hr"
      };
    }

    // 4. Maratha heritage / Shivaji Maharaj
    if (q.includes("maratha") || q.includes("shivaji") || q.includes("fort") || q.includes("warrior")) {
      return {
        text: "Pune is the beating heart of Maratha history! Here are the 3 quintessential Maratha landmarks: 1) Sinhagad Fort (Tanaji Malusare's heroic 1670 battle), 2) Lal Mahal (Shivaji Maharaj's childhood home & Shaista Khan ambush), and 3) Shaniwar Wada (seat of the Peshwa rulers).",
        recommendedMonuments: ["sinhagad-fort", "lal-mahal", "shaniwar-wada", "shinde-chhatri"],
        intent: "maratha-heritage"
      };
    }

    // 5. Family friendly / Kids
    if (q.includes("family") || q.includes("kid") || q.includes("children") || q.includes("easy")) {
      return {
        text: "For a wonderful family-friendly day out, visit: 1) Raja Dinkar Kelkar Museum (fascinating vintage toys, musical instruments, and Mastani Mahal), 2) Aga Khan Palace (sprawling tranquil gardens with Gandhi Smarak), and 3) Parvati Hill (gentle ramp steps with sweeping city panoramas).",
        recommendedMonuments: ["kelkar-museum", "aga-khan-palace", "parvati-hill"],
        intent: "family-spots"
      };
    }

    // 6. Photography / Scenic
    if (q.includes("photo") || q.includes("camera") || q.includes("scenic") || q.includes("instagram") || q.includes("sunset") || q.includes("view")) {
      return {
        text: "Top photography locations in Pune: 1) Parvati Hill at sunrise/sunset for golden 360-degree city views, 2) Shinde Chhatri in Wanowrie for stunning Anglo-Rajasthani sandstone and stained-glass lighting, and 3) Sinhagad Fort for mist-covered cliff bastions.",
        recommendedMonuments: ["parvati-hill", "shinde-chhatri", "sinhagad-fort"],
        intent: "photography-spots"
      };
    }

    // 7. Architecture / Temples
    if (q.includes("architecture") || q.includes("temple") || q.includes("art") || q.includes("carv")) {
      return {
        text: "Pune's architectural evolution spans 1,200 years! Marvel at the 8th-century rock-cut Rashtrakuta monolithic Pataleshwar Caves, the wooden Peshwa Wada craftsmanship of Vishrambaug Wada, and the grand Italian renaissance arches of Aga Khan Palace.",
        recommendedMonuments: ["pataleshwar-caves", "vishrambaug-wada", "aga-khan-palace", "kelkar-museum"],
        intent: "architecture-spots"
      };
    }

    // Default fallback intelligent response
    return {
      text: `Pune offers over 1,200 years of rich history! I can help you explore Maratha forts, Peshwa palaces, rock-cut 8th-century temples, or generate a customized heritage walking route based on your free time. Try asking: "What can I visit in 2 hours?" or "Show me Maratha heritage sites".`,
      recommendedMonuments: ["shaniwar-wada", "aga-khan-palace", "sinhagad-fort"],
      intent: "general-fallback"
    };
  }
};

window.AI_KNOWLEDGE_BASE = AI_KNOWLEDGE_BASE;
