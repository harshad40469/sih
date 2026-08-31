// Navbar Component
function Navbar({ activeSection, onNavigate, savedCount, onOpenJourney, onStartSIHDemo }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'explore', label: 'Explore Monuments', icon: 'Compass' },
    { id: 'personalize', label: 'AI Personalizer', icon: 'Sparkles', badge: 'Smart' },
    { id: 'walks', label: 'Heritage Walks', icon: 'Footprints' },
    { id: 'features', label: 'Why Virasaat', icon: 'ShieldCheck' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'glass-panel border-b border-amber-500/20 shadow-2xl py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => onNavigate('hero')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-orange-500 to-amber-400 p-[2px] shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-display font-bold text-lg text-amber-400">पु</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-display font-bold text-xl tracking-wider text-white">VIRASAAT</span>
                <span className="text-xs px-1.5 py-0.5 rounded font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30">PUNE</span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wider">AI HERITAGE EXPLORER</p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 glass-pill px-3 py-1.5 rounded-full border border-slate-800">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 flex items-center space-x-2 ${
                  activeSection === item.id 
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] px-1.5 py-0.2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            {/* SIH 1-Click Demo Button */}
            <button
              onClick={onStartSIHDemo}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-orange-600/90 to-amber-600/90 text-white border border-amber-400/40 hover:brightness-110 shadow-lg shadow-orange-950/40 flex items-center space-x-1.5 animate-pulse"
              title="Launch Guided Hackathon Demo Tour"
            >
              <span>🚀</span>
              <span>SIH Demo Flow</span>
            </button>

            {/* My Journey Bookmark Button */}
            <button
              onClick={onOpenJourney}
              className="relative p-2.5 rounded-xl glass-pill text-slate-200 hover:text-amber-400 hover:border-amber-500/40 transition-all group"
              aria-label="View Saved Monuments"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              {savedCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-amber-500 text-slate-950 font-bold text-xs rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  {savedCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={onOpenJourney}
              className="relative p-2 rounded-lg glass-pill text-slate-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-slate-950 font-bold text-[10px] rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg glass-pill text-slate-200 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 glass-panel rounded-2xl border border-slate-800 flex flex-col space-y-2 animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between ${
                  activeSection === item.id ? 'bg-amber-500/20 text-amber-300' : 'text-slate-300'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] px-2 py-0.5 bg-amber-500 text-slate-950 font-bold rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-800">
              <button
                onClick={() => {
                  onStartSIHDemo();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold text-xs flex items-center justify-center space-x-2"
              >
                <span>🚀</span>
                <span>Launch SIH Demo Flow</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}

window.Navbar = Navbar;
