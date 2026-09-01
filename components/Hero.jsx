// Hero Component
function Hero({ onExploreClick, onPlanWalkClick, onStartPersonalize }) {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-heritage-radial overflow-hidden">
      {/* Background ambient lighting with subtle aura pulse */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-orange-600/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Action CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* SIH Tagline Pill with subtle pulse */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>Smart India Hackathon Innovation • AI Heritage Engine</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.15]">
              Discover Pune <br />
              <span className="text-heritage-gradient">Beyond the Guidebook</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              A personalized AI heritage guide that helps you experience Pune's history your way. Transform generic facts into vivid stories, custom walking trails, and real-time historical insights.
            </p>

            {/* Buttons with Premium Shimmer & Micro-Lift */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={onStartPersonalize}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gold-gradient text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 btn-interactive btn-shimmer flex items-center justify-center space-x-2.5 group"
              >
                <span>✨ Explore Pune</span>
                <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <button
                onClick={onPlanWalkClick}
                className="w-full sm:w-auto px-7 py-4 rounded-xl glass-panel text-amber-300 font-semibold text-base border border-amber-500/30 hover:border-amber-400 hover:bg-slate-800/80 hover:text-white btn-interactive flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5 text-amber-400 group-hover:rotate-6 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span>Plan My Heritage Walk</span>
              </button>
            </div>

            {/* Quick Feature Highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <span className="flex items-center space-x-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Zero Generic Descriptions</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Time-Aware Routes (1h – Full Day)</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Interactive AI Chat Guide</span>
              </span>
            </div>

          </div>

          {/* Right Column: Cinematic Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Monument Hero Card */}
              <div className="relative rounded-3xl overflow-hidden glass-panel border border-amber-500/30 shadow-2xl group transition-all duration-500 hover:border-amber-400/60 hover:shadow-amber-500/20">
                <div className="aspect-[4/3] w-full relative overflow-hidden bg-slate-950">
                  <img
                    src="/images/monuments/shaniwar-wada.webp"
                    alt="Shaniwar Wada - Delhi Gate Pune"
                    loading="lazy"
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 brightness-95 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0 scale-95'
                    }`}
                    onError={(e) => {
                      e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Pune_ShaniwarWada_DelhiGate.jpg/800px-Pune_ShaniwarWada_DelhiGate.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
                  
                  {/* Floating Era Tag */}
                  <div className="absolute top-4 left-4 glass-pill px-3 py-1 rounded-full text-xs font-semibold text-amber-300 border border-amber-400/30 flex items-center space-x-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>Peshwa Zenith • 1732 CE</span>
                  </div>

                  {/* Audio Guide Badge */}
                  <div className="absolute top-4 right-4 glass-pill px-2.5 py-1 rounded-full text-xs font-medium text-slate-200 border border-slate-700 flex items-center space-x-1.5 shadow-md">
                    <span className="text-amber-400">🎧</span>
                    <span>AI Audio Story</span>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-5 bg-slate-900/90 border-t border-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-display text-xl font-bold text-white group-hover:text-amber-200 transition-colors">Shaniwar Wada</h2>
                      <p className="text-xs text-amber-400/90 font-medium">शनिवार वाडा • Seat of Maratha Power</p>
                    </div>
                    <button 
                      onClick={() => onExploreClick('shaniwar-wada')}
                      className="px-3.5 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold hover:bg-amber-500 hover:text-slate-950 btn-interactive transition-colors"
                    >
                      Explore →
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Insight Card 1: AI Prompt Snippet */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 glass-panel p-3.5 rounded-2xl border border-amber-500/30 shadow-xl max-w-xs animate-float">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 font-bold text-sm shrink-0 shadow-md">
                    AI
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-amber-300">Smart Recommendation Match</p>
                    <p className="text-xs text-slate-200 font-medium">"Matched: Maratha Heritage + 2-Hour Walk"</p>
                  </div>
                </div>
              </div>

              {/* Floating Insight Card 2: Audio Story Indicator */}
              <div className="hidden sm:flex absolute -top-4 -right-4 glass-panel p-2.5 rounded-xl border border-emerald-500/30 shadow-xl items-center space-x-2 animate-float-subtle">
                <div className="flex items-end space-x-0.5 h-4">
                  <div className="w-1 bg-amber-400 sound-bar"></div>
                  <div className="w-1 bg-amber-400 sound-bar"></div>
                  <div className="w-1 bg-amber-400 sound-bar"></div>
                  <div className="w-1 bg-amber-400 sound-bar"></div>
                </div>
                <span className="text-[11px] font-semibold text-emerald-400">Stories in Marathi & English</span>
              </div>

            </div>
          </div>

        </div>

        {/* Trust & Stats Section with Micro-interaction */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="p-4 rounded-2xl glass-panel border border-slate-800/60 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 shadow-md">
              <p className="font-display text-3xl font-bold text-gold-gradient">25+</p>
              <p className="text-sm font-semibold text-slate-200 mt-1">Heritage Sites</p>
              <p className="text-xs text-slate-400 mt-0.5">Forts, Palaces, Temples & Wadas</p>
            </div>

            <div className="p-4 rounded-2xl glass-panel border border-slate-800/60 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 shadow-md">
              <p className="font-display text-3xl font-bold text-gold-gradient">100%</p>
              <p className="text-sm font-semibold text-slate-200 mt-1">Personalized Stories</p>
              <p className="text-xs text-slate-400 mt-0.5">Tailored to your exact interests</p>
            </div>

            <div className="p-4 rounded-2xl glass-panel border border-slate-800/60 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 shadow-md">
              <p className="font-display text-3xl font-bold text-gold-gradient">Smart</p>
              <p className="text-sm font-semibold text-slate-200 mt-1">Recommendations</p>
              <p className="text-xs text-slate-400 mt-0.5">Filtered by your available time</p>
            </div>

            <div className="p-4 rounded-2xl glass-panel border border-slate-800/60 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 shadow-md">
              <p className="font-display text-3xl font-bold text-gold-gradient">Interactive</p>
              <p className="text-sm font-semibold text-slate-200 mt-1">AI Assistant</p>
              <p className="text-xs text-slate-400 mt-0.5">Instant historical Q&A answers</p>
            </div>

          </div>
        </div>

        {/* Subtle Animated Scroll Indicator */}
        <div className="flex justify-center pt-10">
          <div className="flex flex-col items-center space-y-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer animate-scroll-bounce" onClick={onStartPersonalize}>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Scroll to explore</span>
            <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}

window.Hero = Hero;

