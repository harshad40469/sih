// SIHDemoModal Component: 1-Click Guided Hackathon Jury Flow
function SIHDemoModal({ 
  isOpen, 
  onClose, 
  onExecuteDemoStep 
}) {
  const [activeStep, setActiveStep] = React.useState(1);

  // Close on Escape key
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const demoSteps = [
    {
      step: 1,
      title: "1. Landing & Problem Awareness",
      desc: "Hero highlights Pune's historical depth and challenges with fragmented, generic guidebook information.",
      actionLabel: "View Landing Hero",
      execute: () => onExecuteDemoStep('step1-landing')
    },
    {
      step: 2,
      title: "2. Personalization Onboarding",
      desc: "User selects interests (e.g. Maratha Heritage + Architecture) and a 2-Hour time window.",
      actionLabel: "Auto-Fill 2h Maratha Profile",
      execute: () => onExecuteDemoStep('step2-personalize')
    },
    {
      step: 3,
      title: "3. Real-Time Recommendation Engine",
      desc: "AI dynamically scores monuments and provides transparent 'Why this was recommended' badges.",
      actionLabel: "View Personalized Picks",
      execute: () => onExecuteDemoStep('step3-recommendations')
    },
    {
      step: 4,
      title: "4. Monument Deep Dive & Audio Guide",
      desc: "Opens Shaniwar Wada detail modal with architectural breakdown and Web Speech narration.",
      actionLabel: "Open Shaniwar Wada Modal",
      execute: () => onExecuteDemoStep('step4-monument-modal')
    },
    {
      step: 5,
      title: "5. Ask AI Monument Guide",
      desc: "Demonstrates interactive instant answers to historical queries like 'Why does Dilli Darwaza have spikes?'.",
      actionLabel: "Simulate AI Q&A",
      execute: () => onExecuteDemoStep('step5-ai-qa')
    },
    {
      step: 6,
      title: "6. Add to Journey & Custom Trail",
      desc: "Bookmarks monument and generates time-budgeted itinerary timeline with stylized visual map trail.",
      actionLabel: "View 2-Hour Heritage Walk",
      execute: () => onExecuteDemoStep('step6-walk')
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#2F2A24]/60 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      
      <div className="w-full max-w-2xl bg-[#FFFFFF] border border-[#E8DED0] rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-modal-in text-[#2F2A24]">
        
        {/* Header */}
        <div className="p-6 bg-[#F5EFE4] border-b border-[#E8DED0] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#B88746] text-white flex items-center justify-center font-extrabold text-lg shadow-sm">
              🚀
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-display font-bold text-lg text-[#2F2A24]">SIH Demo Flow</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#B88746] text-white font-bold shadow-sm">Judge Mode</span>
              </div>
              <p className="text-xs text-[#6B6258]">Automated end-to-end evaluation of problem statement flow</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#6B6258] hover:text-[#2F2A24] hover:bg-[#E8DED0] btn-interactive"
            aria-label="Close demo guide"
          >
            ✕
          </button>
        </div>

        {/* Steps List */}
        <div className="p-6 overflow-y-auto max-h-[60vh] space-y-3 shadow-inner bg-[#FFFFFF]">
          {demoSteps.map((s) => {
            const isCurrent = activeStep === s.step;

            return (
              <div
                key={s.step}
                className={`p-4 rounded-2xl border transition-all duration-300 btn-interactive ${
                  isCurrent
                    ? 'bg-[#FAF8F3] border-[#B88746] shadow-sm'
                    : 'bg-[#FFFFFF] border-[#E8DED0] hover:border-[#B88746]/40'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className={`text-sm font-bold transition-colors ${isCurrent ? 'text-[#B88746]' : 'text-[#2F2A24]'}`}>
                      {s.title}
                    </h4>
                    <p className="text-xs text-[#6B6258] mt-1 leading-relaxed">{s.desc}</p>
                  </div>

                  <button
                    onClick={() => {
                      setActiveStep(s.step);
                      s.execute();
                      onClose();
                    }}
                    className="px-4 py-2 rounded-xl bg-[#B88746] hover:bg-[#9A6C2F] text-white font-bold text-xs shadow-sm btn-interactive btn-shimmer shrink-0 self-start sm:self-auto flex items-center space-x-1 border border-[#B88746]"
                  >
                    <span>{s.actionLabel}</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F5EFE4] border-t border-[#E8DED0] flex items-center justify-between">
          <p className="text-xs text-[#6B6258]">
            Click any step above to instantly demonstrate that feature live.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#FFFFFF] border border-[#E8DED0] text-xs font-semibold text-[#2F2A24] hover:bg-[#FAF8F3] btn-interactive"
          >
            Close Guide
          </button>
        </div>

      </div>

    </div>
  );
}

window.SIHDemoModal = SIHDemoModal;
