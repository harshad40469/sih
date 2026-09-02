// Global Floating AI Heritage Assistant ("Punya AI")
function FloatingAIAssistant({ 
  isOpen, 
  onToggle, 
  onSelectMonumentById 
}) {
  const [messages, setMessages] = React.useState([
    {
      sender: 'ai',
      text: "Namaste! I am **Punya AI**, your Pune Heritage Guide. I can craft personalized itineraries, share Peshwa chronicles, or reveal hidden architectural gems. What would you like to explore today?",
      recommendedMonuments: ["shaniwar-wada", "sinhagad-fort", "pataleshwar-caves"]
    }
  ]);
  const [inputVal, setInputVal] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const messagesEndRef = React.useRef(null);

  const suggestedQuestions = [
    "Tell me the story of Shaniwar Wada",
    "What can I visit in 2 hours?",
    "Show me Maratha heritage sites",
    "Which places are family friendly?",
    "Best spots for photography?"
  ];

  React.useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = (queryText) => {
    const text = queryText || inputVal;
    if (!text.trim()) return;

    // Add user message
    const updated = [...messages, { sender: 'user', text }];
    setMessages(updated);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      // Use local AI knowledge engine
      const aiResponse = window.AI_KNOWLEDGE_BASE 
        ? window.AI_KNOWLEDGE_BASE.answerGeneralQuery(text)
        : { text: "I can help you explore Pune's historic forts, palaces, and wadas!", recommendedMonuments: ["shaniwar-wada"] };

      setMessages([
        ...updated,
        {
          sender: 'ai',
          text: aiResponse.text,
          recommendedMonuments: aiResponse.recommendedMonuments
        }
      ]);
      setIsTyping(false);
    }, 500);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={onToggle}
          className="relative group p-4 rounded-2xl bg-[#B88746] hover:bg-[#9A6C2F] text-white shadow-xl shadow-[#B88746]/20 btn-interactive btn-shimmer btn-magnetic flex items-center space-x-2.5 font-bold border border-[#B88746]"
          aria-label="Open AI Heritage Assistant"
        >
          {/* Animated ping ring */}
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#3D8B5A] rounded-full border-2 border-white animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#3D8B5A] rounded-full border-2 border-white" />

          <span className="text-xl group-hover:rotate-12 transition-transform">🤖</span>
          <span className="text-xs tracking-wide hidden sm:inline font-extrabold text-white">Ask Punya AI</span>
        </button>
      </div>

      {/* Floating Chat Modal / Drawer */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-96 max-h-[580px] bg-[#FFFFFF] border border-[#E8DED0] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-modal-in ai-scanline-container text-[#2F2A24]">
          
          {/* Header */}
          <div className="p-4 bg-[#F5EFE4] border-b border-[#E8DED0] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#B88746] p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-[#FFFFFF] rounded-[9px] flex items-center justify-center text-[#B88746] font-bold text-sm">
                  पु
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <h3 className="font-display font-bold text-sm text-[#2F2A24]">Punya AI Guide</h3>
                  <span className="w-2 h-2 rounded-full bg-[#3D8B5A] animate-pulse"></span>
                </div>
                <p className="text-[10px] text-[#B88746] font-medium">Smart Heritage Assistant • Online</p>
              </div>
            </div>

            <button
              onClick={onToggle}
              className="p-1.5 rounded-lg text-[#6B6258] hover:text-[#2F2A24] hover:bg-[#E8DED0] btn-interactive"
              aria-label="Close Assistant"
            >
              ✕
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="p-4 flex-1 overflow-y-auto space-y-4 max-h-[380px] bg-[#FAF8F3] shadow-inner">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start space-x-2 animate-fadeIn ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-6 h-6 rounded-full bg-[#B88746] text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    AI
                  </div>
                )}
                <div className="space-y-2 max-w-[85%]">
                  <div
                    className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#B88746] text-white font-medium rounded-tr-none shadow-sm'
                        : 'bg-[#FFFFFF] border border-[#E8DED0] text-[#2F2A24] rounded-tl-none shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Attached Monument Action Badges if any */}
                  {msg.recommendedMonuments && msg.recommendedMonuments.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.recommendedMonuments.map((mId) => {
                        const mon = window.PUNE_MONUMENTS ? window.PUNE_MONUMENTS.find(m => m.id === mId) : null;
                        if (!mon) return null;

                        return (
                          <button
                            key={mId}
                            onClick={() => {
                              onSelectMonumentById(mId);
                            }}
                            className="text-[11px] px-2.5 py-1 rounded-xl bg-[#FAF8F3] hover:bg-[#B88746] text-[#B88746] hover:text-white border border-[#B88746]/40 font-semibold btn-interactive transition-all flex items-center space-x-1 shadow-sm"
                          >
                            <span>🏛️</span>
                            <span>{mon.name}</span>
                            <span>→</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-2 text-xs text-[#B88746] pl-8 animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88746] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88746] animate-bounce delay-100" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88746] animate-bounce delay-200" />
                <span className="text-[10px] text-[#6B6258]">Punya AI is thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggested Prompts (Horizontal Chips) */}
          <div className="px-3 py-2 bg-[#F5EFE4] border-t border-[#E8DED0] flex items-center space-x-1.5 overflow-x-auto scrollbar-none">
            {suggestedQuestions.map((q, qIdx) => (
              <button
                key={qIdx}
                onClick={() => handleSendMessage(q)}
                className="text-[10px] px-2.5 py-1 rounded-full bg-[#FFFFFF] text-[#6B6258] hover:text-[#B88746] hover:bg-[#FAF8F3] border border-[#E8DED0] shrink-0 btn-interactive transition-colors"
              >
                "{q}"
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-[#FFFFFF] border-t border-[#E8DED0] flex items-center space-x-2">
            <input
              type="text"
              placeholder="Ask Punya AI anything..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 bg-[#F5EFE4] border border-[#E8DED0] rounded-xl px-3 py-2 text-xs text-[#2F2A24] placeholder-[#8C8479] focus:outline-none focus:border-[#B88746] shadow-inner"
            />
            <button
              onClick={() => handleSendMessage()}
              className="p-2 rounded-xl bg-[#B88746] hover:bg-[#9A6C2F] text-white btn-interactive btn-shimmer font-bold"
              aria-label="Send Message"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>
      )}
    </>
  );
}

window.FloatingAIAssistant = FloatingAIAssistant;
