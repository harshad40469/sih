# 🏛️ Pune Varsa — AI-Powered Personalized Pune Heritage Explorer

> **Smart India Hackathon (SIH) Project**  
> *Transforming fragmented monument facts into personalized, interactive heritage journeys.*

---

## 📌 Problem Statement

> *"Visitors often receive limited or generic information about Pune's historical monuments. Information is spread across multiple sources and is not personalized according to the user's interests."*

---

## 💡 What Pune Varsa Solves

1. **Context & Personalization Gap**: Traditional guidebooks provide static, identical paragraphs to everyone. Pune Varsa dynamically adapts stories, routes, and recommendations according to each visitor's interests (Maratha heritage, 8th-century architecture, religious shrines, art & museums, photography viewpoints) and available time window (1 hour to full day).
2. **Scattered Information**: Aggregates comprehensive historical backgrounds, architectural breakdowns, entry tickets, timings, and interesting folklore into a unified interactive platform.
3. **Interactive AI Guidance**: Offers an instant conversational AI heritage assistant (**Punya AI**) and on-demand audio narration for every monument.

---

## ✨ Main Features

- 🎯 **3-Step AI Personalization Wizard**: Tailors visit recommendations by matching interests, available time, and exploration style.
- 💡 **Transparent "Why Recommended" Engine**: Explains why each landmark was selected with dynamic match scoring.
- 🏛️ **Deep Monument Explorer**: High-res imagery, historical period, "Why It Matters", architectural highlights, and fun facts.
- 🎧 **Web Speech AI Narration**: Listen to historical chronicles on any device with one click.
- 🤖 **Interactive Monument AI Q&A**: Ask questions such as *"Why does Dilli Darwaza have elephant spikes?"* or *"Tell me the story of Sinhagad Fort"*.
- 🗺️ **Curated Heritage Walks**: Step-by-step itineraries with interactive SVG route timeline visualization and walking distance calculations.
- 📌 **"My Journey" Dashboard**: Save spots, calculate total travel hours, and export/print custom itineraries.
- 🚀 **1-Click SIH Judge Demo Tour**: Guided walkthrough mode for hackathon jury evaluation.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vanilla JavaScript (ES6+), Babel Standalone
- **Styling**: Tailwind CSS, Custom Heritage Design System (`styles/main.css`), Glassmorphism & Animations
- **Icons & Effects**: Lucide Icons, Canvas Confetti
- **Audio**: Web Speech Synthesis API
- **Data & AI Engine**: Curated JSON repository & rule-based NLP knowledge classifier (`data/monuments.js`, `data/aiKnowledge.js`, `data/heritageWalks.js`)

---

## 🚀 How to Run Locally

### Option 1: Quick Run (Any Browser)
Simply double click or open `index.html` in your web browser:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Option 2: Using Local HTTP Server (Recommended)
```bash
# Clone the repository
git clone https://github.com/harshad40469/sih.git
cd sih

# Run using simple static server
npx serve .
# or
python -m http.server 3000
```
Open your browser at `http://localhost:3000`.

---

## 🎬 Complete SIH Demo Flow

1. **Landing Page**: View cinematic hero, live metrics (25+ Heritage Sites, 100% Personalized Stories).
2. **Explore Pune**: Click "Explore Pune" to launch the 3-step Personalization Wizard.
3. **Select Interests & Time**: Choose *Maratha Heritage* + *Architecture*, select *2 Hours*, choose *Historical Deep Dive*.
4. **Personalized Recommendations**: View real-time scored picks with **"Why Recommended"** badges.
5. **Monument Details**: Click **Explore Place** on *Shaniwar Wada* to view architecture, "Why It Matters", and listen to audio narration.
6. **Ask AI Guide**: Click pre-populated questions or type custom prompts to test instant AI responses.
7. **Add to My Journey**: Bookmark monuments and calculate total itinerary time.
8. **Heritage Walk**: Open *The Peshwa Maratha Heritage Trail (2 Hours)* to inspect the route timeline map.

---

## 🔮 Future Scope

- Integration with live Gemini / OpenAI multimodal vision API for camera-based monument scanning.
- Turn-by-turn GPS audio-augmented reality walking navigation.
- Multilingual regional voice support (Marathi, Hindi, Gujarati, German, French, Japanese).
- Ticketing & ASI entry pass booking integration.

---

## 📄 License

MIT License • Developed for Smart India Hackathon.
