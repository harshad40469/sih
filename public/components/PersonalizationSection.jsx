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
        colors: ['#B88746', '#D4A762', '#9A6C2F', '#FFFFFF']
      });
    }
    onGenerateRecommendations();
  };

  return (
    <section id="personalize" className="py-20 relative bg-[#F2E9DC] border-t border-[#E8DED0]">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#B88746]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4A762]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#B88746]/10 border border-[#B88746]/30 text-[#B88746] text-xs font-semibold shadow-sm">
            <span>✨ AI PERSONALIZATION ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2F2A24]">
            Tailor Your <span className="text-gold-gradient">Pune Experience</span>
          </h2>
          <p className="text-[#6B6258] text-sm sm:text-base font-normal">
            Select your interests, time window, and style. Our AI matches your profile against Pune's heritage dataset in real time.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-[#E8DED0] bg-[#FFFFFF] shadow-lg">
          
          {/* Step Indicator Tabs */}
          <div className="grid grid-cols-3 gap-3 mb-10 pb-6 border-b border-[#E8DED0]">
            <button
              onClick={() => setCurrentStep(1)}
              className={`p-3 rounded-2xl flex items-center justify-center space-x-2 transition-all duration-300 btn-interactive ${
                currentStep === 1 
                  ? 'bg-[#B88746] text-white shadow-sm font-semibold' 
                  : 'text-[#6B6258] hover:text-[#2F2A24] hover:bg-[#F5EFE4]'
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform ${
                currentStep === 1 ? 'bg-white text-[#B88746] scale-110' : 'bg-[#B88746]/20 text-[#B88746]'
              }`}>1</span>
              <span className="font-semibold text-xs sm:text-sm">Interests ({selectedInterests.length})</span>
            </button>

            <button
              onClick={() => setCurrentStep(2)}
              className={`p-3 rounded-2xl flex items-center justify-center space-x-2 transition-all duration-300 btn-interactive ${
                currentStep === 2 
                  ? 'bg-[#B88746] text-white shadow-sm font-semibold' 
                  : 'text-[#6B6258] hover:text-[#2F2A24] hover:bg-[#F5EFE4]'
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform ${
                currentStep === 2 ? 'bg-white text-[#B88746] scale-110' : 'bg-[#B88746]/20 text-[#B88746]'
              }`}>2</span>
              <span className="font-semibold text-xs sm:text-sm">Time Window</span>
            </button>

            <button
              onClick={() => setCurrentStep(3)}
              className={`p-3 rounded-2xl flex items-center justify-center space-x-2 transition-all duration-300 btn-interactive ${
                currentStep === 3 
                  ? 'bg-[#B88746] text-white shadow-sm font-semibold' 
                  : 'text-[#6B6258] hover:text-[#2F2A24] hover:bg-[#F5EFE4]'
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform ${
                currentStep === 3 ? 'bg-white text-[#B88746] scale-110' : 'bg-[#B88746]/20 text-[#B88746]'
              }`}>3</span>
              <span className="font-semibold text-xs sm:text-sm">Exploration Style</span>
            </button>
          </div>

          {/* STEP 1: What are you interested in? */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-[#2F2A24] flex items-center space-x-2">
                    <span>What are you interested in?</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#B88746]/15 text-[#B88746] border border-[#B88746]/30 font-medium">Multi-select</span>
                  </h3>
                  <p className="text-xs text-[#6B6258]">Choose one or more areas that excite you most.</p>
                </div>
                {selectedInterests.length > 0 && (
                  <button
                    onClick={() => setSelectedInterests([])}
                    className="text-xs text-[#6B6258] hover:text-[#B88746] underline self-start sm:self-auto transition-colors"
                  >
                    Clear selection
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {interestOptions.map((opt) => {
                  const isSelected = selectedInterests.includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      onClick={() => toggleInterest(opt.id)}
                      className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between btn-interactive select-none ${
                        isSelected
                          ? 'bg-[#FAF8F3] border-[#B88746] shadow-md scale-[1.02]'
                          : 'bg-[#FFFFFF] border-[#E8DED0] hover:border-[#B88746] hover:bg-[#F5EFE4]'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-3xl transition-transform group-hover:scale-110">{opt.icon}</span>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          isSelected ? 'bg-[#B88746] text-white scale-110 shadow-sm' : 'border border-[#E8DED0] text-transparent'
                        }`}>
                          ✓
                        </div>
                      </div>
                      <div className="mt-3">
                        <h4 className={`font-semibold text-sm transition-colors ${isSelected ? 'text-[#B88746]' : 'text-[#2F2A24]'}`}>
                          {opt.label}
                        </h4>
                        <p className="text-[11px] text-[#6B6258] mt-1 leading-snug">
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
                  className="px-6 py-3 rounded-xl bg-[#B88746] hover:bg-[#9A6C2F] text-white font-bold text-sm flex items-center space-x-2 shadow-sm btn-interactive btn-shimmer"
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
                <h3 className="text-xl font-bold text-[#2F2A24]">How much time do you have?</h3>
                <p className="text-xs text-[#6B6258]">We'll filter recommendations and walking routes to match your window.</p>
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
                          ? 'bg-[#FAF8F3] border-[#B88746] shadow-md scale-[1.02]'
                          : 'bg-[#FFFFFF] border-[#E8DED0] hover:border-[#B88746] hover:bg-[#F5EFE4]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#F5EFE4] text-[#B88746] border border-[#E8DED0]">
                          {opt.badge}
                        </span>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          isSelected ? 'bg-[#B88746] text-white scale-110 shadow-sm' : 'border border-[#E8DED0] text-transparent'
                        }`}>
                          ✓
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className={`text-lg font-bold transition-colors ${isSelected ? 'text-[#B88746]' : 'text-[#2F2A24]'}`}>
                          {opt.label}
                        </h4>
                        <p className="text-xs text-[#6B6258] mt-1">{opt.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E8DED0] text-[#2F2A24] hover:bg-[#F5EFE4] text-sm btn-interactive"
                >
                  ← Back to Interests
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-3 rounded-xl bg-[#B88746] hover:bg-[#9A6C2F] text-white font-bold text-sm flex items-center space-x-2 shadow-sm btn-interactive btn-shimmer"
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
                <h3 className="text-xl font-bold text-[#2F2A24]">Choose your exploration style</h3>
                <p className="text-xs text-[#6B6258]">Customizes the tone of the stories, pacing, and visit notes.</p>
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
                          ? 'bg-[#FAF8F3] border-[#B88746] shadow-md scale-[1.02]'
                          : 'bg-[#FFFFFF] border-[#E8DED0] hover:border-[#B88746] hover:bg-[#F5EFE4]'
                      }`}
                    >
                      <span className="text-2xl">{opt.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-semibold text-sm transition-colors ${isSelected ? 'text-[#B88746]' : 'text-[#2F2A24]'}`}>
                            {opt.label}
                          </h4>
                          {isSelected && <span className="text-[#B88746] font-bold text-xs animate-bounce">✓</span>}
                        </div>
                        <p className="text-[11px] text-[#6B6258] mt-1">{opt.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Banner */}
              <div className="p-4 rounded-2xl bg-[#F5EFE4] border border-[#E8DED0] flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#B88746]/15 text-[#B88746] flex items-center justify-center text-xl shrink-0 shadow-sm border border-[#B88746]/30">
                    ⚡
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#2F2A24]">Your Profile is Ready!</p>
                    <p className="text-[11px] text-[#6B6258]">
                      {selectedInterests.length} interest(s) selected • {timeOptions.find(t=>t.id===selectedTime)?.label} • {styleOptions.find(s=>s.id===selectedStyle)?.label} style
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E8DED0] text-[#2F2A24] hover:bg-[#FAF8F3] text-xs btn-interactive"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleGenerate}
                    className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-[#B88746] hover:bg-[#9A6C2F] text-white font-extrabold text-sm shadow-md btn-interactive btn-shimmer flex items-center justify-center space-x-2"
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
