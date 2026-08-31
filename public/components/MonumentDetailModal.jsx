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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      <div className="relative w-full max-w-5xl bg-slate-900 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden shrink-0">
          <img
            src={monument.heroImage || monument.image}
            alt={`${monument.name} (${monument.marathiName}) - Pune Heritage Monument`}
            loading="lazy"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
          
          {/* Close Button */}
          <button
            onClick={() => {
              if (isPlayingAudio) window.speechSynthesis.cancel();
              onClose();
            }}
            className="absolute top-4 right-4 p-2.5 rounded-full glass-panel text-slate-200 hover:text-white hover:border-amber-400 z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Top Floating Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="glass-pill px-3 py-1 rounded-full text-xs font-bold text-amber-300 border border-amber-500/40">
              {monument.category}
            </span>
            <span className="glass-pill px-3 py-1 rounded-full text-xs font-semibold text-slate-200">
              📍 {monument.location}
            </span>
          </div>

          {/* Monument Title overlay */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <p className="text-xs text-amber-400 font-semibold tracking-wider">{monument.marathiName} • {monument.period}</p>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white leading-tight">
                {monument.name}
              </h2>
            </div>

            {/* Quick Actions in header */}
            <div className="flex items-center space-x-2 shrink-0">
              <button
                onClick={handleToggleAudio}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 border transition-all ${
                  isPlayingAudio
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg animate-pulse'
                    : 'glass-pill text-amber-300 border-amber-500/30 hover:border-amber-400'
                }`}
              >
                <span>{isPlayingAudio ? '⏹ Stop Audio' : '🎧 Listen to Story'}</span>
              </button>

              <button
                onClick={() => onAddToJourney(monument)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 border transition-all ${
                  isSaved
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                    : 'bg-gold-gradient text-slate-950 shadow-md hover:brightness-110'
                }`}
              >
                <span>{isSaved ? '✓ In Journey' : '+ Add to Journey'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center space-x-2 px-6 py-3 bg-slate-950/80 border-b border-slate-800 shrink-0 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview & History', icon: '📜' },
            { id: 'architecture', label: 'Architecture', icon: '🏛️' },
            { id: 'facts', label: 'Facts & Tips', icon: '💡' },
            { id: 'ai-guide', label: '🤖 Ask AI Heritage Guide', icon: '✨', highlight: true }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 flex items-center space-x-1.5 ${
                activeTab === tab.id
                  ? tab.highlight 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md' 
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-slate-900">
          
          {/* TAB 1: OVERVIEW & HISTORY */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <p className="text-[11px] text-slate-400">Historical Era</p>
                  <p className="text-xs font-bold text-amber-400 mt-0.5">{monument.period}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <p className="text-[11px] text-slate-400">Commissioned By</p>
                  <p className="text-xs font-bold text-white mt-0.5">{monument.builtBy}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <p className="text-[11px] text-slate-400">Visit Duration</p>
                  <p className="text-xs font-bold text-white mt-0.5">{monument.estimatedDuration}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <p className="text-[11px] text-slate-400">Best Time</p>
                  <p className="text-xs font-bold text-emerald-400 mt-0.5">{monument.bestTimeToVisit}</p>
                </div>
              </div>

              {/* Historical Overview */}
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-2 flex items-center space-x-2">
                  <span>Historical Overview</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {monument.fullOverview}
                </p>
              </div>

              {/* Why it Matters (Crucial SIH requirement) */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent border border-amber-500/30">
                <h4 className="text-sm font-bold text-amber-300 flex items-center space-x-2 mb-2">
                  <span>👑 Why It Matters</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {monument.whyItMatters}
                </p>
              </div>

              {/* Nearby Sites */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Nearby Heritage Sites</h4>
                <div className="flex flex-wrap gap-2">
                  {monument.nearbySites.map((site, sIdx) => (
                    <span key={sIdx} className="text-xs px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 flex items-center space-x-1.5">
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
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                <h3 className="font-display text-lg font-bold text-white flex items-center space-x-2">
                  <span>🏛️ Architectural Highlights & Craftsmanship</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {monument.architecture}
                </p>
              </div>

              {monument.aiKnowledge?.architectureHighlights && (
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25">
                  <p className="text-xs font-semibold text-amber-300 mb-1">Key Structural Elements:</p>
                  <p className="text-xs text-slate-300">{monument.aiKnowledge.architectureHighlights}</p>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: FACTS & VISITOR INFO */}
          {activeTab === 'facts' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-3 flex items-center space-x-2">
                  <span>💡 Fascinating Historical Facts</span>
                </h3>
                <div className="space-y-3">
                  {monument.interestingFacts.map((fact, fIdx) => (
                    <div key={fIdx} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start space-x-3">
                      <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {fIdx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Entry & Timings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-slate-400 font-semibold">Entry Ticket</p>
                  <p className="text-sm font-bold text-white mt-1">{monument.entryFee}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-slate-400 font-semibold">Visiting Timings</p>
                  <p className="text-sm font-bold text-white mt-1">{monument.timings}</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: INTERACTIVE AI HERITAGE GUIDE PANEL */}
          {activeTab === 'ai-guide' && (
            <div className="space-y-4 animate-fadeIn flex flex-col h-full min-h-[340px]">
              
              {/* Quick AI Chips */}
              <div>
                <p className="text-[11px] font-semibold text-slate-400 mb-2">Suggested AI Questions for {monument.name}:</p>
                <div className="flex flex-wrap gap-2">
                  {faqs.map((faq, fIdx) => (
                    <button
                      key={fIdx}
                      onClick={() => handleSendQuery(faq.q)}
                      className="text-xs px-3 py-1.5 rounded-xl bg-slate-950 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 transition-colors text-left"
                    >
                      💬 "{faq.q}"
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Thread */}
              <div className="flex-1 bg-slate-950/90 rounded-2xl border border-slate-800 p-4 overflow-y-auto space-y-3 max-h-72">
                {chatMessages.map((msg, mIdx) => (
                  <div
                    key={mIdx}
                    className={`flex items-start space-x-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.sender === 'ai' && (
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 font-bold text-xs flex items-center justify-center shrink-0">
                        AI
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-[85%] ${
                        msg.sender === 'user'
                          ? 'bg-amber-500 text-slate-950 font-medium rounded-tr-none'
                          : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center space-x-2 text-xs text-amber-400">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
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
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
                <button
                  onClick={() => handleSendQuery()}
                  className="px-4 py-2.5 rounded-xl bg-gold-gradient text-slate-950 font-bold text-xs hover:brightness-110 shadow-md"
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
