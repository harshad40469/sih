// SIHDemoModal Component: 1-Click Guided Hackathon Jury Flow
function SIHDemoModal({ 
  isOpen, 
  onClose, 
  onExecuteDemoStep 
}) {
  const [activeStep, setActiveStep] = React.useState(1);

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
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn">
      
      <div className="w-full max-w-2xl bg-slate-900 border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-amber-600/30 via-slate-900 to-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gold-gradient text-slate-950 flex items-center justify-center font-extrabold text-lg shadow-lg">
              🚀
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-display font-bold text-lg text-white">SIH Demo Flow</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 font-bold">Judge Mode</span>
              </div>
              <p className="text-xs text-slate-300">Automated end-to-end evaluation of problem statement flow</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
          >
            ✕
          </button>
        </div>

        {/* Steps List */}
        <div className="p-6 overflow-y-auto max-h-[60vh] space-y-3">
          {demoSteps.map((s) => {
            const isCurrent = activeStep === s.step;

            return (
              <div
                key={s.step}
                className={`p-4 rounded-2xl border transition-all ${
                  isCurrent
                    ? 'bg-amber-500/10 border-amber-500/50 shadow-md'
                    : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className={`text-sm font-bold ${isCurrent ? 'text-amber-300' : 'text-white'}`}>
                      {s.title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{s.desc}</p>
                  </div>

                  <button
                    onClick={() => {
                      setActiveStep(s.step);
                      s.execute();
                      onClose();
                    }}
                    className="px-4 py-2 rounded-xl bg-gold-gradient text-slate-950 font-bold text-xs shadow-md hover:brightness-110 shrink-0 self-start sm:self-auto"
                  >
                    {s.actionLabel} →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <p className="text-xs text-slate-400">
            Click any step above to instantly demonstrate that feature live.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl glass-pill text-xs font-semibold text-slate-300 hover:text-white"
          >
            Close Guide
          </button>
        </div>

      </div>

    </div>
  );
}

window.SIHDemoModal = SIHDemoModal;
