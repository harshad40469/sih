// Personalization Onboarding Component
function PersonalizationSection({ 
  selectedInterests, 
  setSelectedInterests,
  selectedTime, 
  setSelectedTime,
  selectedStyle, 
  setSelectedStyle,
  onGenerateRecommendations 
}) {
  const [currentStep, setCurrentStep] = React.useState(1);

  const interestOptions = [
    { id: "architecture", label: "Architecture", icon: "🏛️", desc: "Rock-cut caves, wadas & arches" },
    { id: "history", label: "History", icon: "📜", desc: "Freedom struggle & Peshwa chronicles" },
    { id: "maratha", label: "Maratha Heritage", icon: "⚔️", desc: "Shivaji Maharaj & Sahyadri forts" },
    { id: "art", label: "Art & Culture", icon: "🎨", desc: "Museums, crafts & Mastani Mahal" },
    { id: "religious", label: "Religious Heritage", icon: "🕉️", desc: "Ancient Ganpati & Shiva shrines" },
    { id: "photography", label: "Photography", icon: "📸", desc: "Scenic viewpoints & sunsets" },
    { id: "family", label: "Family Friendly", icon: "👨‍👩‍👧", desc: "Relaxed, kid-friendly excursions" },
    { id: "educational", label: "Educational", icon: "🎓", desc: "Student tours & artifact collections" }
  ];

  const timeOptions = [
    { id: "1-hour", label: "1 Hour", badge: "Express", desc: "1 nearby iconic site", maxMins: 60 },
    { id: "2-hours", label: "2 Hours", badge: "Popular", desc: "Walking trail of 2-3 landmarks", maxMins: 120 },
    { id: "half-day", label: "Half Day (4h)", badge: "Comprehensive", desc: "3-4 sites + tea break", maxMins: 240 },
    { id: "full-day", label: "Full Day", badge: "Immersion", desc: "Fort trek + city exploration", maxMins: 480 }
  ];

  const styleOptions = [
    { id: "relaxed", label: "Relaxed", icon: "☕", desc: "Leisurely pace with gardens & tea stops" },
    { id: "deep-dive", label: "Historical Deep Dive", icon: "🔍", desc: "Detailed legends, dates & battles" },
    { id: "photography", label: "Photography Focus", icon: "📷", desc: "Golden hour lighting & architectural angles" },
    { id: "family", label: "Family Explorer", icon: "🎈", desc: "Engaging stories for all generations" },
    { id: "student", label: "Student / Budget", icon: "🎒", desc: "High educational value, low cost" }
  ];

  const toggleInterest = (id) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(selectedInterests.filter(i => i !== id));
    } else {
      setSelectedInterests([...selectedInterests, id]);
    }
  };

  const handleGenerate = () => {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#D97706', '#EA580C', '#FFFFFF']
      });
    }
    onGenerateRecommendations();
  };

  return (
    <section id="personalize" className="py-20 relative bg-[#0B101D] border-t border-slate-800/80">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold shadow-sm">
            <span>✨ AI PERSONALIZATION ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Tailor Your <span className="text-heritage-gradient">Pune Experience</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Select your interests, time window, and style. Our AI matches your profile against Pune's heritage dataset in real time.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-amber-500/20 shadow-2xl">
          
          {/* Step Indicator Tabs */}
          <div className="grid grid-cols-3 gap-3 mb-10 pb-6 border-b border-slate-800">
            <button
              onClick={() => setCurrentStep(1)}
              className={`p-3 rounded-2xl flex items-center justify-center space-x-2 transition-all duration-300 btn-interactive ${
                currentStep === 1 
                  ? 'bg-amber-500/20 border border-amber-500/50 text-amber-300 shadow-md shadow-amber-500/10' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform ${
                currentStep === 1 ? 'bg-amber-400 text-slate-950 scale-110' : 'bg-amber-500/30 text-amber-300'
              }`}>1</span>
              <span className="font-semibold text-xs sm:text-sm">Interests ({selectedInterests.length})</span>
            </button>

            <button
              onClick={() => setCurrentStep(2)}
              className={`p-3 rounded-2xl flex items-center justify-center space-x-2 transition-all duration-300 btn-interactive ${
                currentStep === 2 
                  ? 'bg-amber-500/20 border border-amber-500/50 text-amber-300 shadow-md shadow-amber-500/10' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform ${
                currentStep === 2 ? 'bg-amber-400 text-slate-950 scale-110' : 'bg-amber-500/30 text-amber-300'
              }`}>2</span>
              <span className="font-semibold text-xs sm:text-sm">Time Window</span>
            </button>

            <button
              onClick={() => setCurrentStep(3)}
              className={`p-3 rounded-2xl flex items-center justify-center space-x-2 transition-all duration-300 btn-interactive ${
                currentStep === 3 
                  ? 'bg-amber-500/20 border border-amber-500/50 text-amber-300 shadow-md shadow-amber-500/10' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform ${
                currentStep === 3 ? 'bg-amber-400 text-slate-950 scale-110' : 'bg-amber-500/30 text-amber-300'
              }`}>3</span>
              <span className="font-semibold text-xs sm:text-sm">Exploration Style</span>
            </button>
          </div>

          {/* STEP 1: What are you interested in? */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                    <span>What are you interested in?</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">Multi-select</span>
                  </h3>
                  <p className="text-xs text-slate-400">Choose one or more areas that excite you most.</p>
                </div>
                {selectedInterests.length > 0 && (
                  <button
                    onClick={() => setSelectedInterests([])}
                    className="text-xs text-slate-400 hover:text-amber-400 underline self-start sm:self-auto transition-colors"
                  >
                    Clear selection
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {interestOptions.map((opt, oIdx) => {
                  const isSelected = selectedInterests.includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      onClick={() => toggleInterest(opt.id)}
                      className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between btn-interactive select-none ${
                        isSelected
                          ? 'bg-gradient-to-br from-amber-500/30 via-orange-500/15 to-slate-900/90 border-amber-500 shadow-xl shadow-amber-950/50 scale-[1.02]'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-3xl transition-transform group-hover:scale-110">{opt.icon}</span>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          isSelected ? 'bg-amber-400 text-slate-950 scale-110 shadow-md shadow-amber-500/40' : 'border border-slate-700 text-transparent'
                        }`}>
                          ✓
                        </div>
                      </div>
                      <div className="mt-3">
                        <h4 className={`font-semibold text-sm transition-colors ${isSelected ? 'text-amber-300' : 'text-slate-200'}`}>
                          {opt.label}
                        </h4>
                        <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                          {opt.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 rounded-xl bg-gold-gradient text-slate-950 font-bold text-sm flex items-center space-x-2 shadow-lg shadow-amber-500/20 btn-interactive btn-shimmer"
                >
                  <span>Next: Choose Time</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: How much time do you have? */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-xl font-bold text-white">How much time do you have?</h3>
                <p className="text-xs text-slate-400">We'll filter recommendations and walking routes to match your window.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {timeOptions.map((opt) => {
                  const isSelected = selectedTime === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedTime(opt.id)}
                      className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between btn-interactive select-none ${
                        isSelected
                          ? 'bg-gradient-to-br from-amber-500/30 via-orange-500/15 to-slate-900/90 border-amber-500 shadow-xl shadow-amber-950/50 scale-[1.02]'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-400 border border-slate-700">
                          {opt.badge}
                        </span>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          isSelected ? 'bg-amber-400 text-slate-950 scale-110 shadow-md shadow-amber-500/40' : 'border border-slate-700 text-transparent'
                        }`}>
                          ✓
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className={`text-lg font-bold transition-colors ${isSelected ? 'text-amber-300' : 'text-slate-100'}`}>
                          {opt.label}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1">{opt.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-5 py-2.5 rounded-xl glass-pill text-slate-300 hover:text-white text-sm btn-interactive"
                >
                  ← Back to Interests
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-3 rounded-xl bg-gold-gradient text-slate-950 font-bold text-sm flex items-center space-x-2 shadow-lg shadow-amber-500/20 btn-interactive btn-shimmer"
                >
                  <span>Next: Exploration Style</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Choose your exploration style */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-xl font-bold text-white">Choose your exploration style</h3>
                <p className="text-xs text-slate-400">Customizes the tone of the stories, pacing, and visit notes.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {styleOptions.map((opt) => {
                  const isSelected = selectedStyle === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedStyle(opt.id)}
                      className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border flex items-start space-x-3 btn-interactive select-none ${
                        isSelected
                          ? 'bg-gradient-to-br from-amber-500/30 via-orange-500/15 to-slate-900/90 border-amber-500 shadow-xl shadow-amber-950/50 scale-[1.02]'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                      }`}
                    >
                      <span className="text-2xl">{opt.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-semibold text-sm transition-colors ${isSelected ? 'text-amber-300' : 'text-slate-200'}`}>
                            {opt.label}
                          </h4>
                          {isSelected && <span className="text-amber-400 font-bold text-xs animate-bounce">✓</span>}
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1">{opt.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Banner */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 shadow-lg shadow-amber-950/30">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl shrink-0 shadow-sm">
                    ⚡
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Your Profile is Ready!</p>
                    <p className="text-[11px] text-slate-400">
                      {selectedInterests.length} interest(s) selected • {timeOptions.find(t=>t.id===selectedTime)?.label} • {styleOptions.find(s=>s.id===selectedStyle)?.label} style
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-4 py-2.5 rounded-xl glass-pill text-slate-300 text-xs hover:text-white btn-interactive"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleGenerate}
                    className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gold-gradient text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/30 btn-interactive btn-shimmer flex items-center justify-center space-x-2"
                  >
                    <span>Generate Recommendations</span>
                    <span>✨</span>
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}

window.PersonalizationSection = PersonalizationSection;

