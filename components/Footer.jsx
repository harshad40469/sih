// Footer Component
function Footer({ onNavigate }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Col 1: Brand & SIH */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('hero')}>
              <div className="w-9 h-9 rounded-xl bg-gold-gradient p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-[9px] flex items-center justify-center font-display font-bold text-amber-400">
                  पु
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white">PUNE</span>
                <span className="font-display font-bold text-lg text-amber-400 ml-1">VARSA</span>
                <span className="text-[10px] ml-1.5 px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">AI</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              AI-Powered Personalized Pune Heritage Explorer built for Smart India Hackathon (SIH). Bridging Pune's 1,200-year history with cutting-edge conversational AI.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Explore Features</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('personalize')} className="hover:text-amber-400 transition-colors">✨ AI Personalizer</button></li>
              <li><button onClick={() => onNavigate('explore')} className="hover:text-amber-400 transition-colors">🏛️ All Monuments</button></li>
              <li><button onClick={() => onNavigate('walks')} className="hover:text-amber-400 transition-colors">🗺️ Curated Heritage Walks</button></li>
              <li><button onClick={() => onNavigate('features')} className="hover:text-amber-400 transition-colors">💡 Startup Innovation</button></li>
            </ul>
          </div>

          {/* Col 3: Key Pune Monuments */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Key Pune Heritage</h4>
            <ul className="space-y-2">
              <li><span>Shaniwar Wada (Peshwa Citadel)</span></li>
              <li><span>Sinhagad Fort (Maratha Stronghold)</span></li>
              <li><span>Aga Khan Palace (Gandhi Memorial)</span></li>
              <li><span>Pataleshwar Cave Temple (8th Century)</span></li>
            </ul>
          </div>

          {/* Col 4: Hackathon Innovation */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">SIH Problem Statement</h4>
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
              <p className="text-amber-400 font-semibold text-[11px]">Context-Aware Heritage Travel</p>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Solving fragmented & generic monument information through personalized AI trails and interactive stories.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© 2026 Pune Varsa • Smart India Hackathon Prototype. Crafted with pride for Maharashtra's cultural capital.</p>
          <div className="flex items-center space-x-4">
            <span className="hover:text-slate-300">Privacy</span>
            <span>•</span>
            <span className="hover:text-slate-300">Terms</span>
            <span>•</span>
            <span className="text-amber-400 font-semibold">Live Startup Prototype</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

window.Footer = Footer;
