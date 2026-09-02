// Features Showcase Section: Pune's History. Your Way.
function FeaturesSection() {
  const features = [
    {
      icon: "🎯",
      title: "Personalized Discovery",
      badge: "Interest Matching",
      description: "Explore heritage based on your exact passions—whether it's Maratha military tactics, 8th-century monolithic architecture, rare museum crafts, or peaceful photography viewpoints.",
      points: ["Adaptive interest weighting", "Zero generic travel blurbs", "Childhood legends & battle chronicles"]
    },
    {
      icon: "📜",
      title: "Stories That Connect",
      badge: "AI Storytelling",
      description: "Understand monuments through thrilling human stories instead of dry dates and textbook paragraphs. Experience the real courage of Tanaji Malusare and the golden age of Peshwas.",
      points: ["Engaging historical narratives", "Interactive AI Q&A for every site", "Audio story narration option"]
    },
    {
      icon: "🗺️",
      title: "Smart Heritage Trails",
      badge: "Time-Optimized",
      description: "Build an unforgettable visit tailored precisely to your schedule. Whether you have 1 quick hour before a train or a full day to trek Sahyadri fortresses, we calculate the ideal route.",
      points: ["1h, 2h, Half-Day & Full-Day trails", "Optimized walking distances", "Save to custom personal journey"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#F2E9DC] relative border-t border-[#E8DED0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#B88746]/10 border border-[#B88746]/30 text-[#B88746] text-xs font-semibold shadow-sm">
            <span>STARTUP INNOVATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2F2A24]">
            Pune's History. <span className="text-gold-gradient">Your Way.</span>
          </h2>
          <p className="text-[#6B6258] text-sm sm:text-base leading-relaxed font-normal">
            Standard travel guides give everyone the same static paragraph. Pune Varsa uses AI context awareness to tailor every story, monument route, and recommendation to who you are.
          </p>
        </div>

        {/* 3 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`glass-panel glass-panel-hover p-8 rounded-3xl border border-[#E8DED0] bg-[#FFFFFF] flex flex-col justify-between relative overflow-hidden group shadow-md hover:border-[#B88746] stagger-${idx + 1}`}
            >
              {/* Subtle gradient corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B88746]/5 rounded-full blur-2xl group-hover:bg-[#B88746]/15 transition-all duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#FAF8F3] border border-[#E8DED0] flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-sm text-[#B88746]">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#FAF8F3] text-[#B88746] border border-[#E8DED0] shadow-sm">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#2F2A24] mb-3 group-hover:text-[#B88746] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#6B6258] text-sm leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bullet points */}
              <div className="pt-4 border-t border-[#EFE6D8] space-y-2">
                {item.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center space-x-2 text-xs text-[#6B6258]">
                    <span className="text-[#3D8B5A] font-bold">✓</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

window.FeaturesSection = FeaturesSection;
