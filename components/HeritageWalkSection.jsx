// HeritageWalkSection Component with Interactive Route Map & Timeline
function HeritageWalkSection({ 
  walks, 
  onSelectMonumentById, 
  onOpenMyJourney 
}) {
  const [selectedWalkId, setSelectedWalkId] = React.useState(walks[0]?.id || 'peshwa-trail-2hr');
  const [activeStopIndex, setActiveStopIndex] = React.useState(0);

  const activeWalk = walks.find(w => w.id === selectedWalkId) || walks[0];

  return (
    <section id="walks" className="py-20 bg-[#090E1A] relative border-t border-slate-800">
      
      {/* Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <span>🗺️ SMART ITINERARY PLANNER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Curated <span className="text-heritage-gradient">Pune Heritage Walks</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Time-optimized walking trails connecting Pune's historical treasures. Follow the step-by-step timeline or build your own custom trail.
          </p>
        </div>

        {/* Trail Category Selector */}
        <div className="flex items-center justify-center gap-3 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {walks.map((walk) => (
            <button
              key={walk.id}
              onClick={() => {
                setSelectedWalkId(walk.id);
                setActiveStopIndex(0);
              }}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all shrink-0 flex items-center space-x-2 ${
                selectedWalkId === walk.id
                  ? 'bg-gold-gradient text-slate-950 shadow-lg shadow-amber-500/25 scale-[1.02]'
                  : 'glass-panel text-slate-300 hover:text-white border-slate-800'
              }`}
            >
              <span>{walk.title.split(" ")[0] === "The" ? "⚔️" : "🏛️"}</span>
              <span>{walk.title}</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-950/40 font-semibold">
                {walk.durationBadge}
              </span>
            </button>
          ))}
        </div>

        {/* Main Walk Details & Interactive Route Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Route Stats & Stylized Map Canvas */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Trail Overview Card */}
            <div className="glass-panel p-6 rounded-3xl border border-amber-500/25 shadow-xl space-y-5">
              <div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {activeWalk.durationBadge}
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-3">
                  {activeWalk.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {activeWalk.summary}
                </p>
              </div>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                  <p className="text-[10px] text-slate-400 font-semibold uppercase">Total Time</p>
                  <p className="text-sm font-bold text-amber-400 mt-0.5">{activeWalk.durationBadge}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                  <p className="text-[10px] text-slate-400 font-semibold uppercase">Distance</p>
                  <p className="text-sm font-bold text-emerald-400 mt-0.5">{activeWalk.distanceKm}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                  <p className="text-[10px] text-slate-400 font-semibold uppercase">Locations</p>
                  <p className="text-sm font-bold text-white mt-0.5">{activeWalk.locationsCount} Stops</p>
                </div>
              </div>

              {/* Stylized Visual Route Map (SVG) */}
              <div className="relative rounded-2xl bg-slate-950 p-4 border border-slate-800 overflow-hidden">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="font-bold text-amber-400 flex items-center space-x-1.5">
                    <span>📍</span>
                    <span>Interactive Route Trail Visualization</span>
                  </span>
                  <span className="text-[10px] text-slate-500">Live Elevation & Waypoints</span>
                </div>

                <div className="relative h-44 w-full flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 160" fill="none">
                    {/* Background Grid Lines */}
                    <path d="M10 40 H390 M10 80 H390 M10 120 H390" stroke="#1E293B" strokeWidth="0.75" strokeDasharray="4 4" />
                    
                    {/* Connecting Trail Line */}
                    <path
                      d="M 50 110 C 120 40, 160 130, 240 60 C 290 20, 330 110, 360 80"
                      stroke="url(#routeGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                    />

                    <defs>
                      <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#EA580C" />
                        <stop offset="50%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#10B981" />
                      </linearGradient>
                    </defs>

                    {/* Checkpoints */}
                    {activeWalk.stops.map((stop, idx) => {
                      const positions = [
                        { x: 50, y: 110 },
                        { x: 150, y: 85 },
                        { x: 250, y: 55 },
                        { x: 360, y: 80 }
                      ];
                      const pos = positions[idx] || { x: 50 + idx * 70, y: 80 };
                      const isActive = activeStopIndex === idx;

                      return (
                        <g 
                          key={idx} 
                          onClick={() => setActiveStopIndex(idx)}
                          className="cursor-pointer"
                        >
                          {isActive && (
                            <circle cx={pos.x} cy={pos.y} r="14" fill="#F59E0B" fillOpacity="0.2" className="animate-ping" />
                          )}
                          <circle
                            cx={pos.x}
                            cy={pos.y}
                            r={isActive ? "9" : "7"}
                            fill={isActive ? "#F59E0B" : "#1E293B"}
                            stroke={isActive ? "#FFFFFF" : "#F59E0B"}
                            strokeWidth="2.5"
                          />
                          <text
                            x={pos.x}
                            y={pos.y - 12}
                            textAnchor="middle"
                            fill={isActive ? "#FDE68A" : "#94A3B8"}
                            fontSize="10"
                            fontWeight="bold"
                          >
                            Stop {stop.order}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Click any stop above or in the timeline to view historical highlights.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Step-by-Step Timeline Itinerary */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <h4 className="font-display text-xl font-bold text-white flex items-center space-x-2">
                <span>Itinerary Timeline</span>
                <span className="text-xs text-amber-400 font-normal">({activeWalk.stops.length} locations)</span>
              </h4>

              <button
                onClick={onOpenMyJourney}
                className="text-xs px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500 hover:text-slate-950 font-semibold transition-all"
              >
                + Customize in My Journey
              </button>
            </div>

            {/* Timeline List */}
            <div className="space-y-4 relative">
              
              {/* Vertical connector line */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-amber-500 via-orange-500 to-emerald-500" />

              {activeWalk.stops.map((stop, idx) => {
                const isActive = activeStopIndex === idx;

                return (
                  <div
                    key={idx}
                    onClick={() => setActiveStopIndex(idx)}
                    className={`relative pl-14 p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                      isActive
                        ? 'glass-panel bg-slate-900/90 border-amber-500/60 shadow-xl shadow-amber-950/40 scale-[1.01]'
                        : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50'
                    }`}
                  >
                    {/* Circle Stop Number */}
                    <div className={`absolute left-3.5 top-5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold z-10 transition-all ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/40 ring-4 ring-amber-500/20 scale-110'
                        : 'bg-slate-900 text-amber-400 border border-slate-700'
                    }`}>
                      {stop.order}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h5 className={`font-display text-lg font-bold ${isActive ? 'text-amber-300' : 'text-white'}`}>
                            {stop.name}
                          </h5>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-amber-400 font-semibold">
                            ⏱️ {stop.allocatedTime}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          {stop.highlight}
                        </p>
                      </div>

                      {/* Explore Monument Button */}
                      {stop.monumentId && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectMonumentById(stop.monumentId);
                          }}
                          className="self-start sm:self-auto text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-amber-500 text-slate-300 hover:text-slate-950 font-bold border border-slate-700 transition-all shrink-0"
                        >
                          View Site →
                        </button>
                      )}
                    </div>

                    {/* Distance / Transition to next stop */}
                    {idx < activeWalk.stops.length - 1 && (
                      <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center space-x-2 text-[11px] text-slate-400">
                        <span>🚶 Next:</span>
                        <span className="font-semibold text-amber-400/90">{stop.walkingToNext}</span>
                      </div>
                    )}
                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

window.HeritageWalkSection = HeritageWalkSection;
