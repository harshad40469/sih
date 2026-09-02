// Monument Detail Modal with Interactive AI Explorer & Audio Narration
function MonumentDetailModal({ 
  monument, 
  onClose, 
  onAddToJourney, 
  isSaved,
  onOpenAnotherMonument 
}) {
  const [activeTab, setActiveTab] = React.useState('overview');
  const [isPlayingAudio, setIsPlayingAudio] = React.useState(false);
  const [chatMessages, setChatMessages] = React.useState([]);
  const [userInput, setUserInput] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isPlayingAudio) window.speechSynthesis?.cancel();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlayingAudio, onClose]);

  // Initialize monument-specific FAQs
  React.useEffect(() => {
    if (!monument) return;
    
    // Set default initial AI greeting for this monument
    const faqs = (window.AI_KNOWLEDGE_BASE && window.AI_KNOWLEDGE_BASE.monumentFAQs[monument.id]) || [
      {
        q: `Why is ${monument.name} important?`,
        a: monument.aiKnowledge?.significance || monument.whyItMatters
      },
      {
        q: "Tell me the story behind this place",
        a: monument.aiKnowledge?.story || monument.fullOverview
      },
      {
        q: "What are the architectural highlights?",
        a: monument.architecture
      }
    ];

    setChatMessages([
      {
        sender: 'ai',
        text: `Namaste! I am your AI Heritage Guide for **${monument.name}** (${monument.marathiName}). Ask me about its historical battles, architectural secrets, or why it matters to Pune's legacy.`
      }
    ]);
  }, [monument]);

  if (!monument) return null;

  const faqs = (window.AI_KNOWLEDGE_BASE && window.AI_KNOWLEDGE_BASE.monumentFAQs[monument.id]) || [];

  // Handle Speech Narration
  const handleToggleAudio = () => {
    if (!('speechSynthesis' in window)) {
      alert("Audio narration is not supported on this browser.");
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      window.speechSynthesis.cancel();
      const textToRead = `${monument.name}. ${monument.shortDescription}. ${monument.whyItMatters}. Architectural highlights: ${monument.architecture}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  const handleSendQuery = (queryText) => {
    const text = queryText || userInput;
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...chatMessages, { sender: 'user', text }];
    setChatMessages(newMessages);
    setUserInput('');
    setIsTyping(true);

    setTimeout(() => {
      let aiReply = "";
      const q = text.toLowerCase();

      // Check if matches predefined monument FAQs
      const matchedFaq = faqs.find(f => 
        q.includes(f.q.toLowerCase().slice(0, 10)) || 
        f.q.toLowerCase().includes(q)
      );

      if (matchedFaq) {
        aiReply = matchedFaq.a;
      } else if (q.includes("why") && (q.includes("important") || q.includes("matter"))) {
        aiReply = monument.whyItMatters || monument.aiKnowledge?.significance;
      } else if (q.includes("architect") || q.includes("built") || q.includes("pillar") || q.includes("stone")) {
        aiReply = `**Architectural Details**: ${monument.architecture}`;
      } else if (q.includes("story") || q.includes("history") || q.includes("past")) {
        aiReply = monument.aiKnowledge?.story || monument.fullOverview;
      } else if (q.includes("time") || q.includes("visit") || q.includes("when")) {
        aiReply = `**Best Time to Visit**: ${monument.bestTimeToVisit}. Recommended duration is ${monument.estimatedDuration}. Timings are ${monument.timings}.`;
      } else if (q.includes("fee") || q.includes("ticket") || q.includes("cost") || q.includes("entry")) {
        aiReply = `**Entry Details**: ${monument.entryFee}. Timings: ${monument.timings}.`;
      } else {
        aiReply = `${monument.name} (${monument.marathiName}) was established in ${monument.period} by ${monument.builtBy}. ${monument.whyItMatters} It is celebrated for its unique ${monument.category.toLowerCase()} heritage.`;
      }

      setChatMessages([...newMessages, { sender: 'ai', text: aiReply }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2F2A24]/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      {/* Modal Container with Spring Scale Entrance */}
      <div className="relative w-full max-w-5xl bg-[#FFFFFF] border border-[#E8DED0] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] animate-modal-in">
        
        {/* Modal Top Bar */}
        <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden shrink-0 bg-[#F5EFE4]">
          <img
            src={monument.heroImage || monument.image}
            alt={`${monument.name} (${monument.marathiName}) - Pune Heritage Monument`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/30 to-transparent pointer-events-none" />
          
          {/* Close Button */}
          <button
            onClick={() => {
              if (isPlayingAudio) window.speechSynthesis.cancel();
              onClose();
            }}
            className="absolute top-4 right-4 p-2.5 rounded-full glass-panel text-[#2F2A24] hover:text-[#B88746] border border-[#E8DED0] bg-[#FFFFFF]/90 z-10 btn-interactive shadow-sm"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Top Floating Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="glass-pill px-3 py-1 rounded-full text-xs font-bold text-[#B88746] border border-[#E8DED0] bg-[#FFFFFF]/90 shadow-sm">
              {monument.category}
            </span>
            <span className="glass-pill px-3 py-1 rounded-full text-xs font-semibold text-[#2F2A24] border border-[#E8DED0] bg-[#FFFFFF]/90 shadow-sm">
              📍 {monument.location}
            </span>
          </div>

          {/* Monument Title overlay */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <p className="text-xs text-[#B88746] font-semibold tracking-wider">{monument.marathiName} • {monument.period}</p>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#2F2A24] leading-tight">
                {monument.name}
              </h2>
            </div>

            {/* Quick Actions in header */}
            <div className="flex items-center space-x-2 shrink-0">
              <button
                onClick={handleToggleAudio}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 border transition-all btn-interactive ${
                  isPlayingAudio
                    ? 'bg-[#B88746] text-white border-[#B88746] shadow-sm'
                    : 'glass-pill text-[#B88746] border-[#B88746]/40 bg-[#FFFFFF]/90 hover:border-[#B88746]'
                }`}
              >
                {isPlayingAudio ? (
                  <>
                    <div className="flex items-end space-x-0.5 h-3.5">
                      <div className="w-0.5 bg-white sound-bar"></div>
                      <div className="w-0.5 bg-white sound-bar"></div>
                      <div className="w-0.5 bg-white sound-bar"></div>
                    </div>
                    <span>Stop Audio</span>
                  </>
                ) : (
                  <>
                    <span>🎧</span>
                    <span>Listen to Story</span>
                  </>
                )}
              </button>

              <button
                onClick={() => onAddToJourney(monument)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 border transition-all btn-interactive ${
                  isSaved
                    ? 'bg-[#3D8B5A]/15 text-[#3D8B5A] border-[#3D8B5A]/40 shadow-sm'
                    : 'bg-[#B88746] hover:bg-[#9A6C2F] text-white border-[#B88746] shadow-sm btn-shimmer'
                }`}
              >
                <span>{isSaved ? '✓ In Journey' : '+ Add to Journey'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center space-x-2 px-6 py-3 bg-[#F5EFE4] border-b border-[#E8DED0] shrink-0 overflow-x-auto scrollbar-none">
          {[
            { id: 'overview', label: 'Overview & History', icon: '📜' },
            { id: 'architecture', label: 'Architecture', icon: '🏛️' },
            { id: 'facts', label: 'Facts & Tips', icon: '💡' },
            { id: 'ai-guide', label: '🤖 Ask AI Heritage Guide', icon: '✨', highlight: true }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 flex items-center space-x-1.5 btn-interactive ${
                activeTab === tab.id
                  ? 'bg-[#B88746] text-white shadow-sm font-bold' 
                  : 'text-[#6B6258] hover:text-[#2F2A24] hover:bg-[#FAF8F3]'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-[#FFFFFF]">
          
          {/* TAB 1: OVERVIEW & HISTORY */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-2xl bg-[#FAF8F3] border border-[#E8DED0] shadow-sm hover:border-[#B88746]/40 transition-colors">
                  <p className="text-[11px] text-[#6B6258] font-medium">Historical Era</p>
                  <p className="text-xs font-bold text-[#B88746] mt-0.5">{monument.period}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#FAF8F3] border border-[#E8DED0] shadow-sm hover:border-[#B88746]/40 transition-colors">
                  <p className="text-[11px] text-[#6B6258] font-medium">Commissioned By</p>
                  <p className="text-xs font-bold text-[#2F2A24] mt-0.5">{monument.builtBy}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#FAF8F3] border border-[#E8DED0] shadow-sm hover:border-[#B88746]/40 transition-colors">
                  <p className="text-[11px] text-[#6B6258] font-medium">Visit Duration</p>
                  <p className="text-xs font-bold text-[#2F2A24] mt-0.5">{monument.estimatedDuration}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#FAF8F3] border border-[#E8DED0] shadow-sm hover:border-[#B88746]/40 transition-colors">
                  <p className="text-[11px] text-[#6B6258] font-medium">Best Time</p>
                  <p className="text-xs font-bold text-[#3D8B5A] mt-0.5">{monument.bestTimeToVisit}</p>
                </div>
              </div>

              {/* Historical Overview */}
              <div>
                <h3 className="font-display text-lg font-bold text-[#2F2A24] mb-2 flex items-center space-x-2">
                  <span>Historical Overview</span>
                </h3>
                <p className="text-sm text-[#6B6258] leading-relaxed">
                  {monument.fullOverview}
                </p>
              </div>

              {/* Why it Matters (Crucial SIH requirement) */}
              <div className="p-5 rounded-2xl bg-[#F5EFE4] border border-[#E8DED0] shadow-sm">
                <h4 className="text-sm font-bold text-[#B88746] flex items-center space-x-2 mb-2">
                  <span>👑 Why It Matters</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#2F2A24] leading-relaxed">
                  {monument.whyItMatters}
                </p>
              </div>

              {/* Nearby Sites */}
              <div>
                <h4 className="text-xs font-bold text-[#6B6258] uppercase tracking-wider mb-2">Nearby Heritage Sites</h4>
                <div className="flex flex-wrap gap-2">
                  {monument.nearbySites.map((site, sIdx) => (
                    <span key={sIdx} className="text-xs px-3 py-1.5 rounded-xl bg-[#FAF8F3] border border-[#E8DED0] text-[#2F2A24] flex items-center space-x-1.5 shadow-sm hover:border-[#B88746]/40 transition-colors">
                      <span>🏛️</span>
                      <span>{site}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-5 rounded-2xl bg-[#FAF8F3] border border-[#E8DED0] space-y-3 shadow-sm">
                <h3 className="font-display text-lg font-bold text-[#2F2A24] flex items-center space-x-2">
                  <span>🏛️ Architectural Highlights & Craftsmanship</span>
                </h3>
                <p className="text-sm text-[#6B6258] leading-relaxed">
                  {monument.architecture}
                </p>
              </div>

              {monument.aiKnowledge?.architectureHighlights && (
                <div className="p-4 rounded-2xl bg-[#F5EFE4] border border-[#E8DED0] shadow-sm">
                  <p className="text-xs font-semibold text-[#B88746] mb-1">Key Structural Elements:</p>
                  <p className="text-xs text-[#2F2A24] leading-relaxed">{monument.aiKnowledge.architectureHighlights}</p>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: FACTS & VISITOR INFO */}
          {activeTab === 'facts' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="font-display text-lg font-bold text-[#2F2A24] mb-3 flex items-center space-x-2">
                  <span>💡 Fascinating Historical Facts</span>
                </h3>
                <div className="space-y-3">
                  {monument.interestingFacts.map((fact, fIdx) => (
                    <div key={fIdx} className="p-3.5 rounded-xl bg-[#FAF8F3] border border-[#E8DED0] flex items-start space-x-3 shadow-sm hover:border-[#B88746]/40 transition-colors">
                      <span className="w-5 h-5 rounded-full bg-[#B88746]/15 text-[#B88746] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {fIdx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-[#6B6258] leading-relaxed">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Entry & Timings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#FAF8F3] border border-[#E8DED0] shadow-sm">
                  <p className="text-xs text-[#6B6258] font-semibold">Entry Ticket</p>
                  <p className="text-sm font-bold text-[#2F2A24] mt-1">{monument.entryFee}</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF8F3] border border-[#E8DED0] shadow-sm">
                  <p className="text-xs text-[#6B6258] font-semibold">Visiting Timings</p>
                  <p className="text-sm font-bold text-[#2F2A24] mt-1">{monument.timings}</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: INTERACTIVE AI HERITAGE GUIDE PANEL */}
          {activeTab === 'ai-guide' && (
            <div className="space-y-4 animate-fadeIn flex flex-col h-full min-h-[340px]">
              
              {/* Quick AI Chips */}
              <div>
                <p className="text-[11px] font-semibold text-[#6B6258] mb-2">Suggested AI Questions for {monument.name}:</p>
                <div className="flex flex-wrap gap-2">
                  {faqs.map((faq, fIdx) => (
                    <button
                      key={fIdx}
                      onClick={() => handleSendQuery(faq.q)}
                      className="text-xs px-3 py-1.5 rounded-xl bg-[#FAF8F3] border border-[#B88746]/40 text-[#B88746] hover:bg-[#B88746] hover:text-white btn-interactive transition-colors text-left shadow-sm font-medium"
                    >
                      💬 "{faq.q}"
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Thread */}
              <div className="flex-1 bg-[#FAF8F3] rounded-2xl border border-[#E8DED0] p-4 overflow-y-auto space-y-3 max-h-72 shadow-inner">
                {chatMessages.map((msg, mIdx) => (
                  <div
                    key={mIdx}
                    className={`flex items-start space-x-2.5 animate-fadeIn ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.sender === 'ai' && (
                      <div className="w-7 h-7 rounded-full bg-[#B88746] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
                        AI
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-[85%] ${
                        msg.sender === 'user'
                          ? 'bg-[#B88746] text-white font-medium rounded-tr-none shadow-sm'
                          : 'bg-[#FFFFFF] border border-[#E8DED0] text-[#2F2A24] rounded-tl-none shadow-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center space-x-2 text-xs text-[#B88746] animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-[#B88746] animate-ping"></span>
                    <span>AI Guide is formulating answer...</span>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="flex items-center space-x-2 pt-2">
                <input
                  type="text"
                  placeholder={`Ask anything about ${monument.name} (e.g. battles, architecture, stories)...`}
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendQuery()}
                  className="flex-1 bg-[#F5EFE4] border border-[#E8DED0] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#2F2A24] placeholder-[#8C8479] focus:outline-none focus:border-[#B88746] shadow-inner"
                />
                <button
                  onClick={() => handleSendQuery()}
                  className="px-4 py-2.5 rounded-xl bg-[#B88746] hover:bg-[#9A6C2F] text-white font-bold text-xs btn-interactive btn-shimmer shadow-sm border border-[#B88746]"
                >
                  Ask AI
                </button>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

window.MonumentDetailModal = MonumentDetailModal;
