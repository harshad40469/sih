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
    <section id="walks" className="py-20 bg-[#FAF8F3] relative border-t border-[#E8DED0]">
      
      {/* Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#B88746]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#B88746]/10 border border-[#B88746]/30 text-[#B88746] text-xs font-semibold shadow-sm">
            <span>🗺️ SMART ITINERARY PLANNER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2F2A24]">
            Curated <span className="text-gold-gradient">Pune Heritage Walks</span>
          </h2>
          <p className="text-[#6B6258] text-sm sm:text-base font-normal">
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
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all shrink-0 flex items-center space-x-2 btn-interactive ${
                selectedWalkId === walk.id
                  ? 'bg-[#B88746] text-white shadow-md font-bold scale-[1.02]'
                  : 'glass-panel text-[#6B6258] hover:text-[#2F2A24] hover:bg-[#F5EFE4] border-[#E8DED0] bg-[#FFFFFF]'
              }`}
            >
              <span>{walk.title.split(" ")[0] === "The" ? "⚔️" : "🏛️"}</span>
              <span>{walk.title}</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#FAF8F3] text-[#B88746] border border-[#E8DED0] font-semibold">
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
            <div className="glass-panel p-6 rounded-3xl border border-[#E8DED0] bg-[#FFFFFF] shadow-md space-y-5">
              <div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#B88746]/15 text-[#B88746] border border-[#B88746]/30 shadow-sm">
                  {activeWalk.durationBadge}
                </span>
                <h3 className="font-display text-2xl font-bold text-[#2F2A24] mt-3">
                  {activeWalk.title}
                </h3>
                <p className="text-xs text-[#6B6258] mt-2 leading-relaxed font-normal">
                  {activeWalk.summary}
                </p>
              </div>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#FAF8F3] border border-[#E8DED0] text-center shadow-sm">
                  <p className="text-[10px] text-[#6B6258] font-semibold uppercase">Total Time</p>
                  <p className="text-sm font-bold text-[#B88746] mt-0.5">{activeWalk.durationBadge}</p>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F3] border border-[#E8DED0] text-center shadow-sm">
                  <p className="text-[10px] text-[#6B6258] font-semibold uppercase">Distance</p>
                  <p className="text-sm font-bold text-[#3D8B5A] mt-0.5">{activeWalk.distanceKm}</p>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F3] border border-[#E8DED0] text-center shadow-sm">
                  <p className="text-[10px] text-[#6B6258] font-semibold uppercase">Locations</p>
                  <p className="text-sm font-bold text-[#2F2A24] mt-0.5">{activeWalk.locationsCount} Stops</p>
                </div>
              </div>

              {/* Stylized Visual Route Map (SVG) */}
              <div className="relative rounded-2xl bg-[#F5EFE4] p-4 border border-[#E8DED0] overflow-hidden shadow-inner">
                <div className="flex items-center justify-between text-xs text-[#6B6258] mb-3">
                  <span className="font-bold text-[#B88746] flex items-center space-x-1.5">
                    <span>📍</span>
                    <span>Interactive Route Trail Visualization</span>
                  </span>
                  <span className="text-[10px] text-[#8C8479]">Live Waypoints</span>
                </div>

                <div className="relative h-44 w-full flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 160" fill="none">
                    {/* Background Grid Lines */}
                    <path d="M10 40 H390 M10 80 H390 M10 120 H390" stroke="#E8DED0" strokeWidth="0.75" strokeDasharray="4 4" />
                    
                    {/* Connecting Trail Glow Line */}
                    <path
                      d="M 50 110 C 120 40, 160 130, 240 60 C 290 20, 330 110, 360 80"
                      stroke="url(#routeGradient)"
                      strokeWidth="5"
                      strokeLinecap="round"
                      fill="none"
                      className="animate-route-path"
                    />

                    <defs>
                      <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#B88746" />
                        <stop offset="50%" stopColor="#D4A762" />
                        <stop offset="100%" stopColor="#3D8B5A" />
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
                          className="cursor-pointer group"
                        >
                          {isActive && (
                            <circle cx={pos.x} cy={pos.y} r="16" fill="#B88746" fillOpacity="0.25" className="animate-ping" />
                          )}
                          <circle
                            cx={pos.x}
                            cy={pos.y}
                            r={isActive ? "9" : "7"}
                            fill={isActive ? "#B88746" : "#FFFFFF"}
                            stroke={isActive ? "#FFFFFF" : "#B88746"}
                            strokeWidth="2.5"
                            className="transition-all duration-300"
                          />
                          <text
                            x={pos.x}
                            y={pos.y - 14}
                            textAnchor="middle"
                            fill={isActive ? "#B88746" : "#6B6258"}
                            fontSize="10"
                            fontWeight={isActive ? "bold" : "normal"}
                            className="transition-all"
                          >
                            Stop {stop.order}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                <p className="text-[11px] text-center text-[#6B6258] mt-2 font-medium">
                  Click any stop above or in the timeline to view historical highlights.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Step-by-Step Timeline Itinerary */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <h4 className="font-display text-xl font-bold text-[#2F2A24] flex items-center space-x-2">
                <span>Itinerary Timeline</span>
                <span className="text-xs text-[#B88746] font-normal">({activeWalk.stops.length} locations)</span>
              </h4>

              <button
                onClick={onOpenMyJourney}
                className="text-xs px-3.5 py-1.5 rounded-xl bg-[#FAF8F3] text-[#2F2A24] border border-[#B88746] hover:bg-[#B88746] hover:text-white font-semibold btn-interactive btn-magnetic transition-all shadow-sm"
              >
                + Customize in My Journey
              </button>
            </div>

            {/* Timeline List */}
            <div className="space-y-4 relative">
              
              {/* Vertical connector line */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#B88746] via-[#D4A762] to-[#3D8B5A]" />

              {activeWalk.stops.map((stop, idx) => {
                const isActive = activeStopIndex === idx;

                return (
                  <div
                    key={idx}
                    onClick={() => setActiveStopIndex(idx)}
                    className={`relative pl-14 p-5 rounded-2xl cursor-pointer transition-all duration-300 border btn-interactive ${
                      isActive
                        ? 'glass-panel bg-[#FFFFFF] border-[#B88746] shadow-md scale-[1.01]'
                        : 'bg-[#FAF8F3] border-[#E8DED0] hover:border-[#B88746]/40 hover:bg-[#F5EFE4]'
                    }`}
                  >
                    {/* Circle Stop Number */}
                    <div className={`absolute left-3.5 top-5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold z-10 transition-all ${
                      isActive
                        ? 'bg-[#B88746] text-white shadow-sm ring-4 ring-[#B88746]/20 scale-110'
                        : 'bg-[#FFFFFF] text-[#B88746] border border-[#E8DED0]'
                    }`}>
                      {stop.order}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h5 className={`font-display text-lg font-bold transition-colors ${isActive ? 'text-[#B88746]' : 'text-[#2F2A24]'}`}>
                            {stop.name}
                          </h5>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-[#F5EFE4] text-[#B88746] font-semibold border border-[#E8DED0]">
                            ⏱️ {stop.allocatedTime}
                          </span>
                        </div>
                        <p className="text-xs text-[#6B6258] mt-1 leading-relaxed">
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
                          className="self-start sm:self-auto text-xs px-3 py-1.5 rounded-lg bg-[#FAF8F3] hover:bg-[#B88746] text-[#2F2A24] hover:text-white font-bold border border-[#B88746] transition-all shrink-0 btn-interactive"
                        >
                          View Site →
                        </button>
                      )}
                    </div>

                    {/* Distance / Transition to next stop */}
                    {idx < activeWalk.stops.length - 1 && (
                      <div className="mt-3 pt-3 border-t border-[#EFE6D8] flex items-center space-x-2 text-[11px] text-[#6B6258]">
                        <span>🚶 Next:</span>
                        <span className="font-semibold text-[#B88746]">{stop.walkingToNext}</span>
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
