// RecommendedSection Component
function RecommendedSection({ 
  monuments, 
  selectedInterests, 
  selectedTime, 
  selectedStyle, 
  onSelectMonument, 
  onAddToJourney, 
  journeyIds 
}) {
  // Score and rank monuments dynamically based on user profile
  const recommendedList = React.useMemo(() => {
    return monuments.map(monument => {
      let score = 0;
      let matchedReasons = [];

      // 1. Tag matching
      selectedInterests.forEach(interest => {
        if (monument.tags.includes(interest)) {
          score += 30;
          if (interest === "maratha") matchedReasons.push("Maratha Heritage");
          if (interest === "history") matchedReasons.push("Historic Chronicles");
          if (interest === "architecture") matchedReasons.push("Architectural Significance");
          if (interest === "art") matchedReasons.push("Art & Artifacts");
          if (interest === "religious") matchedReasons.push("Sacred Shrines");
          if (interest === "photography") matchedReasons.push("Scenic Views");
          if (interest === "family") matchedReasons.push("Family Friendly");
          if (interest === "educational") matchedReasons.push("Educational Value");
        }
      });

      // 2. Time matching
      if (selectedTime === "1-hour" && monument.durationMinutes <= 60) {
        score += 25;
        matchedReasons.push("Fits 1-Hour Express Window");
      } else if (selectedTime === "2-hours" && monument.durationMinutes <= 120) {
        score += 25;
        matchedReasons.push("Ideal for 2-Hour Visit");
      } else if (selectedTime === "half-day") {
        score += 20;
        matchedReasons.push("Half-Day Schedule");
      } else if (selectedTime === "full-day") {
        score += 20;
        matchedReasons.push("Full-Day Exploration");
      }

      // Default baseline match
      if (matchedReasons.length === 0) {
        matchedReasons.push("Popular Pune Landmark");
        score += 10;
      }

      return {
        ...monument,
        matchScore: Math.min(score, 98),
        recommendationReason: `Recommended because you selected ${matchedReasons.slice(0, 2).join(" + ")}.`
      };
    })
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 4); // Top 4 recommendations
  }, [monuments, selectedInterests, selectedTime, selectedStyle]);

  const interestLabels = selectedInterests.map(i => {
    const map = {
      maratha: "Maratha Heritage",
      history: "History",
      architecture: "Architecture",
      art: "Art & Culture",
      religious: "Religious Heritage",
      photography: "Photography",
      family: "Family Friendly",
      educational: "Educational"
    };
    return map[i] || i;
  });

  const timeLabel = {
    "1-hour": "1-Hour Visit",
    "2-hours": "2-Hour Visit",
    "half-day": "Half-Day Trip",
    "full-day": "Full-Day Tour"
  }[selectedTime] || "Flexible Visit";

  return (
    <section id="recommendations" className="py-20 relative bg-slate-950 border-t border-slate-800/80">
      
      {/* Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-slate-800 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3 shadow-sm">
              <span>🎯 AI PERSONALIZED PICKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Recommended <span className="text-heritage-gradient">for You</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
              Based on your interest in <strong className="text-amber-400 font-semibold">{interestLabels.slice(0, 2).join(" & ") || "Pune Heritage"}</strong> and a <strong className="text-amber-400 font-semibold">{timeLabel}</strong>, here are your top matches:
            </p>
          </div>

          <div className="flex items-center space-x-2 bg-slate-900/80 p-2.5 rounded-2xl border border-slate-800 text-xs text-slate-300 shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Real-time adaptive score active</span>
          </div>
        </div>

        {/* 4 Recommended Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedList.map((monument, mIdx) => {
            const isSaved = journeyIds.includes(monument.id);

            return (
              <div
                key={monument.id}
                className={`glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-amber-500/20 flex flex-col justify-between group shadow-xl transition-all duration-300 hover:border-amber-400/50 stagger-${mIdx + 1}`}
              >
                <div>
                  {/* Image Container with zoom */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={monument.image}
                      alt={`${monument.name} (${monument.marathiName}) - Pune Heritage`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Match Score Badge with Glow */}
                    <div className="absolute top-3 left-3 glass-pill px-2.5 py-1 rounded-full text-xs font-bold text-amber-300 border border-amber-400/40 flex items-center space-x-1 shadow-md shadow-amber-500/20">
                      <span className="animate-pulse">⚡</span>
                      <span>{monument.matchScore}% Match</span>
                    </div>

                    {/* Category Pill */}
                    <div className="absolute top-3 right-3 glass-pill px-2.5 py-1 rounded-full text-[11px] font-semibold text-slate-200 border border-slate-700 shadow-sm">
                      {monument.category}
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 left-3 glass-pill px-2 py-0.5 rounded text-[11px] text-slate-300 flex items-center space-x-1 shadow-sm">
                      <span>⏱️</span>
                      <span>{monument.estimatedDuration}</span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                        {monument.name}
                      </h3>
                      <p className="text-xs text-amber-400/90 font-medium">{monument.marathiName} • {monument.period}</p>
                    </div>

                    {/* Crucial SIH Demonstration Feature: "WHY IT WAS RECOMMENDED" */}
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/25 transition-colors group-hover:border-amber-400/40 group-hover:bg-amber-500/15">
                      <p className="text-[11px] text-amber-300 font-medium leading-snug">
                        💡 <span className="font-semibold">{monument.recommendationReason}</span>
                      </p>
                    </div>

                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {monument.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-5 pt-0 flex items-center space-x-2">
                  <button
                    onClick={() => onSelectMonument(monument)}
                    className="flex-1 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-bold text-xs border border-amber-500/40 transition-all btn-interactive flex items-center justify-center space-x-1"
                  >
                    <span>Explore Place</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>

                  <button
                    onClick={() => onAddToJourney(monument)}
                    className={`p-2.5 rounded-xl border transition-all btn-interactive ${
                      isSaved 
                        ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 shadow-sm shadow-emerald-500/20' 
                        : 'glass-pill text-slate-300 hover:text-amber-400 hover:border-amber-500/40'
                    }`}
                    title={isSaved ? "Saved in My Journey" : "Add to My Journey"}
                  >
                    {isSaved ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

window.RecommendedSection = RecommendedSection;

