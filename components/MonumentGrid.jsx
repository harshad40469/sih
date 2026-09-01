// MonumentGrid Component
function MonumentGrid({ 
  monuments, 
  onSelectMonument, 
  onAddToJourney, 
  journeyIds 
}) {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [sortBy, setSortBy] = React.useState('featured');

  const categories = ['All', 'Forts', 'Palaces', 'Temples', 'Museums', 'Historic Sites'];

  const filteredMonuments = React.useMemo(() => {
    return monuments
      .filter((m) => {
        const matchesCategory = selectedCategory === 'All' || m.category === selectedCategory;
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch = 
          !q ||
          m.name.toLowerCase().includes(q) ||
          m.marathiName.toLowerCase().includes(q) ||
          m.period.toLowerCase().includes(q) ||
          m.shortDescription.toLowerCase().includes(q) ||
          m.tags.some(t => t.toLowerCase().includes(q));
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'duration-asc') return a.durationMinutes - b.durationMinutes;
        if (sortBy === 'duration-desc') return b.durationMinutes - a.durationMinutes;
        return 0; // default featured order
      });
  }, [monuments, selectedCategory, searchQuery, sortBy]);

  return (
    <section id="explore" className="py-20 bg-[#090D16] relative">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold shadow-sm">
            <span>PUNE HERITAGE REPOSITORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Explore Pune's <span className="text-heritage-gradient">Living Monuments</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            From 8th-century rock-cut Rashtrakuta caves to impregnable Sahyadri hill fortresses and Peshwa palaces.
          </p>
        </div>

        {/* Search Bar & Category Filters Container */}
        <div className="glass-panel p-4 sm:p-6 rounded-3xl border border-slate-800/90 mb-10 space-y-4 shadow-xl">
          
          {/* Top Row: Search and Sort */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md group">
              <input
                type="text"
                placeholder="Search monuments, eras, Maratha history..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900/90 border border-slate-700/80 rounded-2xl pl-11 pr-10 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-all shadow-inner"
              />
              <svg className="w-5 h-5 text-slate-400 group-focus-within:text-amber-400 transition-colors absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 text-xs transition-colors"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
              <span className="text-xs text-slate-400 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold text-slate-200 focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
              >
                <option value="featured">Featured (Default)</option>
                <option value="rating">Highest Rated ★</option>
                <option value="duration-asc">Duration (Shortest first)</option>
                <option value="duration-desc">Duration (Longest first)</option>
              </select>
            </div>

          </div>

          {/* Bottom Row: Category Filter Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 pt-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 btn-interactive ${
                  selectedCategory === cat
                    ? 'bg-gold-gradient text-slate-950 shadow-md shadow-amber-500/20 font-bold'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Monument Grid */}
        {filteredMonuments.length === 0 ? (
          <div className="glass-panel p-12 rounded-3xl text-center border border-slate-800 space-y-4 animate-fadeIn">
            <p className="text-4xl animate-bounce">🔍</p>
            <h3 className="text-lg font-bold text-white">No monuments found</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              We couldn't find any monuments matching "{searchQuery}". Try resetting filters or searching for "Fort", "Peshwa", or "Shivaji".
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold btn-interactive hover:bg-amber-500 hover:text-slate-950"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMonuments.map((monument, idx) => {
              const isSaved = journeyIds.includes(monument.id);

              return (
                <div
                  key={monument.id}
                  className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-slate-800/80 flex flex-col justify-between group shadow-xl transition-all duration-300 hover:border-amber-500/40"
                >
                  <div>
                    {/* Image Area with 3-5% Zoom */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                      <img
                        src={monument.image}
                        alt={`${monument.name} (${monument.marathiName}) - Pune`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 glass-pill px-2.5 py-1 rounded-full text-xs font-semibold text-amber-300 border border-amber-400/30 shadow-sm">
                        {monument.category}
                      </div>

                      <div className="absolute top-3 right-3 glass-pill px-2.5 py-1 rounded-full text-xs font-bold text-amber-400 border border-slate-700 flex items-center space-x-1 shadow-sm">
                        <span>★</span>
                        <span>{monument.rating}</span>
                      </div>

                      {/* Bottom Info inside image */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
                        <span className="glass-pill px-2 py-0.5 rounded text-[11px] flex items-center space-x-1 shadow-sm">
                          <span>⏱️</span>
                          <span>{monument.estimatedDuration}</span>
                        </span>

                        <span className="glass-pill px-2 py-0.5 rounded text-[11px] text-amber-300 border border-amber-500/30 shadow-sm">
                          {monument.period}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-3">
                      <div>
                        <h3 className="font-display font-bold text-xl text-white group-hover:text-amber-300 transition-colors">
                          {monument.name}
                        </h3>
                        <p className="text-xs text-amber-400/90 font-medium">{monument.marathiName}</p>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                        {monument.shortDescription}
                      </p>

                      {/* Tag chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {monument.tags.slice(0, 3).map((tag, tIdx) => (
                          <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800 transition-colors group-hover:border-slate-700">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-6 pt-0 flex items-center space-x-2 border-t border-slate-800/60 mt-2">
                    <button
                      onClick={() => onSelectMonument(monument)}
                      className="flex-1 py-3 rounded-xl bg-gold-gradient text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 btn-interactive btn-shimmer transition-all flex items-center justify-center space-x-1.5"
                    >
                      <span>Explore Place</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>

                    <button
                      onClick={() => onAddToJourney(monument)}
                      className={`p-3 rounded-xl border transition-all btn-interactive ${
                        isSaved
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 shadow-sm shadow-emerald-500/20'
                          : 'glass-pill text-slate-300 hover:text-amber-400 hover:border-amber-500/40'
                      }`}
                      title={isSaved ? "Remove from My Journey" : "Save to My Journey"}
                    >
                      {isSaved ? (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      )}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}

window.MonumentGrid = MonumentGrid;

