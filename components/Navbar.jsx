// Navbar Component
function Navbar({ activeSection, onNavigate, savedCount, onOpenJourney, onStartSIHDemo }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          setIsScrolled(currentScrollY > 20);

          // Smart hide on scroll down (> 90px), show on scroll up
          if (currentScrollY > 90) {
            if (currentScrollY > lastScrollY.current + 6 && !isMobileMenuOpen) {
              setIsVisible(false); // Scrolling down
            } else if (currentScrollY < lastScrollY.current - 6) {
              setIsVisible(true); // Scrolling up
            }
          } else {
            setIsVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: 'explore', label: 'Explore Monuments', icon: 'Compass' },
    { id: 'personalize', label: 'AI Personalizer', icon: 'Sparkles', badge: 'Smart' },
    { id: 'walks', label: 'Heritage Walks', icon: 'Footprints' },
    { id: 'features', label: 'Why Pune Varsa', icon: 'ShieldCheck' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'glass-panel border-b border-[#E8DED0] shadow-md py-3 bg-[#FAF8F3]/90 backdrop-blur-xl' 
          : 'bg-transparent py-5'
      }`}
      style={{ willChange: 'transform' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand with Micro-interaction */}
          <div 
            onClick={() => onNavigate('hero')} 
            className="flex items-center space-x-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#B88746]/40 shadow-sm group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300 shrink-0 bg-[#FFFFFF]">
              <img src="./images/logo.jpg" alt="Pune Chronicles Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-display font-bold text-xl tracking-wider text-[#2F2A24] group-hover:text-[#B88746] transition-colors">PUNE</span>
                <span className="font-display font-bold text-xl tracking-wider text-[#B88746] group-hover:text-[#9A6C2F] transition-colors">VARSA</span>
                <span className="text-xs px-1.5 py-0.5 rounded font-sans font-semibold bg-[#B88746]/10 text-[#B88746] border border-[#B88746]/30">AI</span>
              </div>
              <p className="text-[10px] text-[#6B6258] tracking-widest font-sans font-medium uppercase">AI HERITAGE EXPLORER</p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 glass-pill px-3 py-1.5 rounded-full border border-[#E8DED0] bg-[#F5EFE4]/80 shadow-sm font-sans">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center space-x-2 btn-interactive ${
                    isActive 
                      ? 'bg-[#B88746] text-white shadow-sm font-semibold' 
                      : 'text-[#6B6258] hover:text-[#2F2A24] hover:bg-[#FAF8F3]'
                  }`}
                >
                  <span className="link-underline">{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] px-1.5 py-0.5 bg-[#D4A762] text-white font-bold rounded-full shadow-sm animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3 font-sans">
            {/* SIH 1-Click Demo Button */}
            <button
              onClick={onStartSIHDemo}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#B88746] text-white border border-[#B88746] hover:bg-[#9A6C2F] shadow-sm flex items-center space-x-1.5 btn-interactive btn-shimmer"
              title="Launch Guided Hackathon Demo Tour"
            >
              <span>🚀</span>
              <span>SIH Demo Flow</span>
            </button>

            {/* My Journey Bookmark Button */}
            <button
              onClick={onOpenJourney}
              className="relative p-2.5 rounded-xl glass-pill text-[#2F2A24] hover:text-[#B88746] hover:border-[#B88746] transition-all btn-interactive group border border-[#E8DED0]"
              aria-label="View Saved Monuments"
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              {savedCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#B88746] text-white font-bold text-xs rounded-full flex items-center justify-center shadow-md ring-2 ring-[#FAF8F3] animate-bounce">
                  {savedCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={onOpenJourney}
              className="relative p-2 rounded-lg glass-pill text-[#2F2A24] btn-interactive border border-[#E8DED0]"
              aria-label="View Saved Monuments"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#B88746] text-white font-bold text-[10px] rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg glass-pill text-[#2F2A24] hover:text-[#B88746] btn-interactive border border-[#E8DED0]"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden mt-3 p-4 glass-panel rounded-2xl border border-[#E8DED0] flex flex-col space-y-2 animate-fadeIn bg-[#FFFFFF] shadow-xl text-[#2F2A24] font-sans">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between transition-all ${
                  activeSection === item.id ? 'bg-[#B88746]/15 text-[#B88746] font-semibold' : 'text-[#6B6258] hover:text-[#2F2A24] hover:bg-[#F5EFE4]'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] px-2 py-0.5 bg-[#B88746] text-white font-bold rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
            <div className="pt-2 border-t border-[#E8DED0]">
              <button
                onClick={() => {
                  onStartSIHDemo();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-xl bg-[#B88746] text-white hover:bg-[#9A6C2F] font-semibold text-xs flex items-center justify-center space-x-2 btn-interactive btn-shimmer"
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
