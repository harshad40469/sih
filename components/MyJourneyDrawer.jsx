// My Journey Drawer / Dashboard Component
function MyJourneyDrawer({ 
  isOpen, 
  onClose, 
  savedMonuments, 
  onRemoveFromJourney, 
  onSelectMonument, 
  onClearAll 
}) {
  // Close on Escape key
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalMinutes = savedMonuments.reduce((acc, m) => acc + (m.durationMinutes || 60), 0);
  const totalHours = (totalMinutes / 60).toFixed(1);

  const handlePrintItinerary = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-md flex justify-end animate-fadeIn">
      
      <div className="w-full max-w-md bg-slate-900 border-l border-amber-500/30 h-full flex flex-col shadow-2xl animate-drawer-in">
        
        {/* Top Header */}
        <div className="p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center font-bold text-base shadow-sm">
              🗺️
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">My Heritage Journey</h3>
              <p className="text-xs text-amber-400/90 font-medium">Personalized Pune Itinerary</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 btn-interactive"
            aria-label="Close drawer"
          >
            ✕
          </button>
        </div>

        {/* Journey Metrics Bar */}
        <div className="p-4 bg-slate-950/60 border-b border-slate-800 grid grid-cols-4 gap-2 text-center shadow-inner">
          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 shadow-sm">
            <p className="text-[10px] text-slate-400 uppercase font-semibold">Saved Sites</p>
            <p className="text-sm font-bold text-amber-400 mt-0.5">{savedMonuments.length}</p>
          </div>
          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 shadow-sm">
            <p className="text-[10px] text-slate-400 uppercase font-semibold">Est. Hours</p>
            <p className="text-sm font-bold text-emerald-400 mt-0.5">{totalHours}</p>
          </div>
          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 shadow-sm">
            <p className="text-[10px] text-slate-400 uppercase font-semibold">Heritage XP</p>
            <p className="text-sm font-bold text-amber-300 mt-0.5 xp-glow-badge">+{savedMonuments.length * 150 + 250}</p>
          </div>
          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 shadow-sm">
            <p className="text-[10px] text-slate-400 uppercase font-semibold">Rank</p>
            <p className="text-sm font-bold text-white mt-0.5">{savedMonuments.length > 3 ? 'Explorer' : 'Novice'}</p>
          </div>
        </div>

        {/* Saved List Content */}
        <div className="p-5 flex-1 overflow-y-auto space-y-4">
          {savedMonuments.length === 0 ? (
            <div className="py-16 text-center space-y-4 animate-fadeIn">
              <p className="text-4xl animate-bounce">🏛️</p>
              <h4 className="font-bold text-white text-base">Your Journey is Empty</h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                Click "+ Add to Journey" on any monument or personalized recommendation to build your custom itinerary.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Planned Stops ({savedMonuments.length})</span>
                <button
                  onClick={onClearAll}
                  className="text-[11px] text-red-400 hover:text-red-300 font-semibold btn-interactive"
                >
                  Clear All
                </button>
              </div>

              {savedMonuments.map((monument, idx) => (
                <div
                  key={monument.id}
                  className="p-3.5 rounded-2xl glass-panel border border-slate-800 flex items-center justify-between gap-3 group hover:border-amber-500/40 transition-all btn-interactive"
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <img
                      src={monument.image}
                      alt={`${monument.name} thumbnail`}
                      loading="lazy"
                      className="w-12 h-12 rounded-xl object-cover shrink-0 shadow-sm"
                    />
                    <div className="min-w-0">
                      <h5 className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-amber-300 transition-colors">
                        {monument.name}
                      </h5>
                      <p className="text-[11px] text-slate-400 flex items-center space-x-1 mt-0.5">
                        <span>⏱️ {monument.estimatedDuration}</span>
                        <span>•</span>
                        <span className="text-amber-400/90">{monument.category}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 shrink-0">
                    <button
                      onClick={() => {
                        onSelectMonument(monument);
                        onClose();
                      }}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-amber-500 text-slate-300 hover:text-slate-950 text-xs font-bold btn-interactive transition-colors"
                      title="View Details"
                      aria-label="View Details"
                    >
                      👁️
                    </button>
                    <button
                      onClick={() => onRemoveFromJourney(monument.id)}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-red-500 text-slate-400 hover:text-white text-xs font-bold btn-interactive transition-colors"
                      title="Remove"
                      aria-label="Remove from journey"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {savedMonuments.length > 0 && (
          <div className="p-4 bg-slate-950 border-t border-slate-800 space-y-2">
            <button
              onClick={handlePrintItinerary}
              className="w-full py-3 rounded-xl bg-gold-gradient text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 btn-interactive btn-shimmer flex items-center justify-center space-x-2"
            >
              <span>🖨️ Export / Print Itinerary</span>
            </button>
            <p className="text-[10px] text-center text-slate-500">
              Ready for offline exploration across Pune
            </p>
          </div>
        )}

      </div>

    </div>
  );
}

window.MyJourneyDrawer = MyJourneyDrawer;

