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
    <section id="recommendations" className="py-20 relative bg-[#FAF8F3] border-t border-[#E8DED0]">
      
      {/* Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B88746]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#E8DED0] pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#B88746]/10 border border-[#B88746]/30 text-[#B88746] text-xs font-semibold mb-3 shadow-sm">
              <span>🎯 AI PERSONALIZED PICKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2F2A24]">
              Recommended <span className="text-gold-gradient">for You</span>
            </h2>
            <p className="text-[#6B6258] text-sm sm:text-base mt-2 max-w-2xl font-normal">
              Based on your interest in <strong className="text-[#B88746] font-semibold">{interestLabels.slice(0, 2).join(" & ") || "Pune Heritage"}</strong> and a <strong className="text-[#B88746] font-semibold">{timeLabel}</strong>, here are your top matches:
            </p>
          </div>

          <div className="flex items-center space-x-2 bg-[#FFFFFF] p-2.5 rounded-2xl border border-[#E8DED0] text-xs text-[#6B6258] shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3D8B5A] animate-pulse"></span>
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
                data-tilt="true"
                className={`glass-panel rounded-3xl overflow-hidden border border-[#E8DED0] bg-[#FFFFFF] flex flex-col justify-between group shadow-md transition-all duration-300 hover:border-[#B88746] hover:shadow-xl stagger-${mIdx + 1}`}
              >
                <div>
                  {/* Image Container with zoom */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F5EFE4]">
                    <img
                      src={monument.image}
                      alt={`${monument.name} (${monument.marathiName}) - Pune Heritage`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F3]/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Match Score Badge with Glow */}
                    <div className="absolute top-3 left-3 glass-pill px-2.5 py-1 rounded-full text-xs font-bold text-[#B88746] border border-[#B88746]/40 bg-[#FFFFFF]/90 flex items-center space-x-1 shadow-sm">
                      <span className="animate-pulse">⚡</span>
                      <span>{monument.matchScore}% Match</span>
                    </div>

                    {/* Category Pill */}
                    <div className="absolute top-3 right-3 glass-pill px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#2F2A24] border border-[#E8DED0] bg-[#FFFFFF]/90 shadow-sm">
                      {monument.category}
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 left-3 glass-pill px-2 py-0.5 rounded text-[11px] text-[#6B6258] bg-[#FFFFFF]/90 border border-[#E8DED0] flex items-center space-x-1 shadow-sm">
                      <span>⏱️</span>
                      <span>{monument.estimatedDuration}</span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#2F2A24] group-hover:text-[#B88746] transition-colors">
                        {monument.name}
                      </h3>
                      <p className="text-xs text-[#6B6258] font-medium">{monument.marathiName} • {monument.period}</p>
                    </div>

                    {/* Crucial SIH Demonstration Feature: "WHY IT WAS RECOMMENDED" */}
                    <div className="p-2.5 rounded-xl bg-[#F5EFE4] border border-[#E8DED0] transition-colors group-hover:border-[#B88746]/40">
                      <p className="text-[11px] text-[#B88746] font-medium leading-snug">
                        💡 <span className="font-semibold">{monument.recommendationReason}</span>
                      </p>
                    </div>

                    <p className="text-xs text-[#6B6258] line-clamp-2 leading-relaxed">
                      {monument.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-5 pt-0 flex items-center space-x-2">
                  <button
                    onClick={() => onSelectMonument(monument)}
                    className="flex-1 py-2.5 rounded-xl bg-[#FAF8F3] hover:bg-[#B88746] text-[#2F2A24] hover:text-white font-bold text-xs border border-[#B88746] transition-all btn-interactive flex items-center justify-center space-x-1"
                  >
                    <span>Explore Place</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>

                  <button
                    onClick={() => onAddToJourney(monument)}
                    className={`p-2.5 rounded-xl border transition-all btn-interactive ${
                      isSaved 
                        ? 'bg-[#3D8B5A]/15 text-[#3D8B5A] border-[#3D8B5A]/40 shadow-sm' 
                        : 'glass-pill text-[#2F2A24] hover:text-[#B88746] hover:border-[#B88746] bg-[#FFFFFF] border-[#E8DED0]'
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
