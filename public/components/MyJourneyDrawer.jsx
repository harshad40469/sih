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
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#2F2A24]/60 backdrop-blur-md flex justify-end animate-fadeIn">
      
      <div className="w-full max-w-md bg-[#FFFFFF] border-l border-[#E8DED0] h-full flex flex-col shadow-2xl animate-drawer-in text-[#2F2A24]">
        
        {/* Top Header */}
        <div className="p-5 bg-[#F5EFE4] border-b border-[#E8DED0] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-[#B88746]/15 border border-[#B88746]/30 text-[#B88746] flex items-center justify-center font-bold text-base shadow-sm">
              🗺️
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-[#2F2A24]">My Heritage Journey</h3>
              <p className="text-xs text-[#B88746] font-medium">Personalized Pune Itinerary</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#6B6258] hover:text-[#2F2A24] hover:bg-[#E8DED0] btn-interactive"
            aria-label="Close drawer"
          >
            ✕
          </button>
        </div>

        {/* Journey Metrics Bar */}
        <div className="p-4 bg-[#FAF8F3] border-b border-[#E8DED0] grid grid-cols-4 gap-2 text-center shadow-inner">
          <div className="p-2 rounded-xl bg-[#FFFFFF] border border-[#E8DED0] shadow-sm">
            <p className="text-[10px] text-[#6B6258] uppercase font-semibold">Saved Sites</p>
            <p className="text-sm font-bold text-[#B88746] mt-0.5">{savedMonuments.length}</p>
          </div>
          <div className="p-2 rounded-xl bg-[#FFFFFF] border border-[#E8DED0] shadow-sm">
            <p className="text-[10px] text-[#6B6258] uppercase font-semibold">Est. Hours</p>
            <p className="text-sm font-bold text-[#3D8B5A] mt-0.5">{totalHours}</p>
          </div>
          <div className="p-2 rounded-xl bg-[#FFFFFF] border border-[#E8DED0] shadow-sm">
            <p className="text-[10px] text-[#6B6258] uppercase font-semibold">Heritage XP</p>
            <p className="text-sm font-bold text-[#B88746] mt-0.5 xp-glow-badge">+{savedMonuments.length * 150 + 250}</p>
          </div>
          <div className="p-2 rounded-xl bg-[#FFFFFF] border border-[#E8DED0] shadow-sm">
            <p className="text-[10px] text-[#6B6258] uppercase font-semibold">Rank</p>
            <p className="text-sm font-bold text-[#2F2A24] mt-0.5">{savedMonuments.length > 3 ? 'Explorer' : 'Novice'}</p>
          </div>
        </div>

        {/* Saved List Content */}
        <div className="p-5 flex-1 overflow-y-auto space-y-4 bg-[#FFFFFF]">
          {savedMonuments.length === 0 ? (
            <div className="py-16 text-center space-y-4 animate-fadeIn">
              <p className="text-4xl animate-bounce">🏛️</p>
              <h4 className="font-bold text-[#2F2A24] text-base">Your Journey is Empty</h4>
              <p className="text-xs text-[#6B6258] max-w-xs mx-auto leading-relaxed">
                Click "+ Add to Journey" on any monument or personalized recommendation to build your custom itinerary.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-1">
                <span className="text-xs font-bold text-[#6B6258] uppercase tracking-wider">Planned Stops ({savedMonuments.length})</span>
                <button
                  onClick={onClearAll}
                  className="text-[11px] text-[#B94A48] hover:text-red-600 font-semibold btn-interactive"
                >
                  Clear All
                </button>
              </div>

              {savedMonuments.map((monument, idx) => (
                <div
                  key={monument.id}
                  className="p-3.5 rounded-2xl glass-panel bg-[#FFFFFF] border border-[#E8DED0] flex items-center justify-between gap-3 group hover:border-[#B88746] transition-all btn-interactive shadow-sm"
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <span className="w-6 h-6 rounded-full bg-[#B88746]/15 text-[#B88746] text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <img
                      src={monument.image}
                      alt={`${monument.name} thumbnail`}
                      loading="lazy"
                      className="w-12 h-12 rounded-xl object-cover shrink-0 shadow-sm"
                    />
                    <div className="min-w-0">
                      <h5 className="text-xs sm:text-sm font-bold text-[#2F2A24] truncate group-hover:text-[#B88746] transition-colors">
                        {monument.name}
                      </h5>
                      <p className="text-[11px] text-[#6B6258] flex items-center space-x-1 mt-0.5">
                        <span>⏱️ {monument.estimatedDuration}</span>
                        <span>•</span>
                        <span className="text-[#B88746]">{monument.category}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 shrink-0">
                    <button
                      onClick={() => {
                        onSelectMonument(monument);
                        onClose();
                      }}
                      className="p-2 rounded-lg bg-[#FAF8F3] hover:bg-[#B88746] text-[#2F2A24] hover:text-white border border-[#E8DED0] text-xs font-bold btn-interactive transition-colors"
                      title="View Details"
                      aria-label="View Details"
                    >
                      👁️
                    </button>
                    <button
                      onClick={() => onRemoveFromJourney(monument.id)}
                      className="p-2 rounded-lg bg-[#FAF8F3] hover:bg-[#B94A48] text-[#6B6258] hover:text-white border border-[#E8DED0] text-xs font-bold btn-interactive transition-colors"
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
          <div className="p-4 bg-[#F5EFE4] border-t border-[#E8DED0] space-y-2">
            <button
              onClick={handlePrintItinerary}
              className="w-full py-3 rounded-xl bg-[#B88746] hover:bg-[#9A6C2F] text-white font-bold text-xs shadow-md btn-interactive btn-shimmer flex items-center justify-center space-x-2 border border-[#B88746]"
            >
              <span>🖨️ Export / Print Itinerary</span>
            </button>
            <p className="text-[10px] text-center text-[#8C8479]">
              Ready for offline exploration across Pune
            </p>
          </div>
        )}

      </div>

    </div>
  );
}

window.MyJourneyDrawer = MyJourneyDrawer;
