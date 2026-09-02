// Footer Component
function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#F5EFE4] border-t border-[#E8DED0] pt-16 pb-12 text-[#6B6258] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#E8DED0]">
          
          {/* Col 1: Brand & SIH */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-3 cursor-pointer group select-none" onClick={() => onNavigate('hero')}>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#B88746] via-[#D4A762] to-[#9A6C2F] p-[1.5px] group-hover:scale-105 transition-transform duration-300 shadow-sm">
                <div className="w-full h-full bg-[#FFFFFF] rounded-[9px] flex items-center justify-center font-display font-bold text-[#B88746] group-hover:text-[#9A6C2F] transition-colors border border-[#E8DED0]">
                  पु
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-[#2F2A24] group-hover:text-[#B88746] transition-colors">PUNE</span>
                <span className="font-display font-bold text-lg text-[#B88746] ml-1 group-hover:text-[#9A6C2F] transition-colors">VARSA</span>
                <span className="text-[10px] ml-1.5 px-1.5 py-0.5 rounded bg-[#B88746]/10 text-[#B88746] font-bold border border-[#B88746]/30">AI</span>
              </div>
            </div>
            <p className="text-[#6B6258] leading-relaxed text-xs font-normal">
              AI-Powered Personalized Pune Heritage Explorer built for Smart India Hackathon (SIH). Bridging Pune's 1,200-year history with cutting-edge conversational AI.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-[#2F2A24] font-bold uppercase tracking-wider text-xs">Explore Features</h4>
            <ul className="space-y-2 font-medium">
              <li><button onClick={() => onNavigate('personalize')} className="hover:text-[#B88746] link-underline transition-colors">✨ AI Personalizer</button></li>
              <li><button onClick={() => onNavigate('explore')} className="hover:text-[#B88746] link-underline transition-colors">🏛️ All Monuments</button></li>
              <li><button onClick={() => onNavigate('walks')} className="hover:text-[#B88746] link-underline transition-colors">🗺️ Curated Heritage Walks</button></li>
              <li><button onClick={() => onNavigate('features')} className="hover:text-[#B88746] link-underline transition-colors">💡 Startup Innovation</button></li>
            </ul>
          </div>

          {/* Col 3: Key Pune Monuments */}
          <div className="space-y-3">
            <h4 className="text-[#2F2A24] font-bold uppercase tracking-wider text-xs">Key Pune Heritage</h4>
            <ul className="space-y-2 font-medium">
              <li className="hover:text-[#B88746] transition-colors cursor-default"><span>Shaniwar Wada (Peshwa Citadel)</span></li>
              <li className="hover:text-[#B88746] transition-colors cursor-default"><span>Sinhagad Fort (Maratha Stronghold)</span></li>
              <li className="hover:text-[#B88746] transition-colors cursor-default"><span>Aga Khan Palace (Gandhi Memorial)</span></li>
              <li className="hover:text-[#B88746] transition-colors cursor-default"><span>Pataleshwar Cave Temple (8th Century)</span></li>
            </ul>
          </div>

          {/* Col 4: Hackathon Innovation */}
          <div className="space-y-3">
            <h4 className="text-[#2F2A24] font-bold uppercase tracking-wider text-xs">SIH Problem Statement</h4>
            <div className="p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#E8DED0] space-y-1.5 shadow-sm hover:border-[#B88746]/40 transition-colors">
              <p className="text-[#B88746] font-semibold text-[11px]">Context-Aware Heritage Travel</p>
              <p className="text-[#6B6258] text-[11px] leading-relaxed font-normal">
                Solving fragmented & generic monument information through personalized AI trails and interactive stories.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#8C8479] text-[11px]">
          <p>© 2026 Pune Varsa • Smart India Hackathon Prototype. Crafted with pride for Maharashtra's cultural capital.</p>
          <div className="flex items-center space-x-4 font-medium">
            <span className="hover:text-[#2F2A24] transition-colors cursor-pointer">Privacy</span>
            <span>•</span>
            <span className="hover:text-[#2F2A24] transition-colors cursor-pointer">Terms</span>
            <span>•</span>
            <span className="text-[#B88746] font-semibold">Live Startup Prototype</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

window.Footer = Footer;
