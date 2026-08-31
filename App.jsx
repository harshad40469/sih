// Master App Component
function App() {
  const [monuments, setMonuments] = React.useState(window.PUNE_MONUMENTS || []);
  const [walks, setWalks] = React.useState(window.HERITAGE_WALKS || []);
  
  // Personalization State
  const [selectedInterests, setSelectedInterests] = React.useState(['maratha', 'history', 'architecture']);
  const [selectedTime, setSelectedTime] = React.useState('2-hours');
  const [selectedStyle, setSelectedStyle] = React.useState('deep-dive');
  
  // Selected monument for modal view
  const [selectedMonument, setSelectedMonument] = React.useState(null);
  
  // My Journey State (bookmarked monuments)
  const [journeyItems, setJourneyItems] = React.useState(() => {
    return [monuments[0], monuments[3]].filter(Boolean); // Preload Shaniwar Wada & Lal Mahal for instant great demo
  });

  // UI state
  const [isAiAssistantOpen, setIsAiAssistantOpen] = React.useState(false);
  const [isJourneyDrawerOpen, setIsJourneyDrawerOpen] = React.useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('explore');

  // Add / Remove from My Journey
  const handleToggleJourney = (monument) => {
    const exists = journeyItems.some(item => item.id === monument.id);
    if (exists) {
      setJourneyItems(journeyItems.filter(item => item.id !== monument.id));
    } else {
      setJourneyItems([...journeyItems, monument]);
    }
  };

  const handleRemoveFromJourney = (id) => {
    setJourneyItems(journeyItems.filter(item => item.id !== id));
  };

  const handleClearJourney = () => {
    setJourneyItems([]);
  };

  const handleSelectMonumentById = (id) => {
    const found = monuments.find(m => m.id === id);
    if (found) {
      setSelectedMonument(found);
    }
  };

  // Smooth Navigation
  const scrollToSection = (id) => {
    setActiveSection(id);
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate recommendations scroll
  const handleGenerateRecommendations = () => {
    scrollToSection('recommendations');
  };

  // SIH 1-Click Demo Execution Flow
  const handleExecuteDemoStep = (stepKey) => {
    if (stepKey === 'step1-landing') {
      scrollToSection('hero');
    } else if (stepKey === 'step2-personalize') {
      setSelectedInterests(['maratha', 'history']);
      setSelectedTime('2-hours');
      setSelectedStyle('deep-dive');
      scrollToSection('personalize');
    } else if (stepKey === 'step3-recommendations') {
      setSelectedInterests(['maratha', 'history']);
      setSelectedTime('2-hours');
      scrollToSection('recommendations');
    } else if (stepKey === 'step4-monument-modal') {
      const shaniwar = monuments.find(m => m.id === 'shaniwar-wada');
      if (shaniwar) setSelectedMonument(shaniwar);
    } else if (stepKey === 'step5-ai-qa') {
      setIsAiAssistantOpen(true);
    } else if (stepKey === 'step6-walk') {
      scrollToSection('walks');
    }
  };

  const journeyIds = journeyItems.map(item => item.id);

  return (
    <div className="min-h-screen bg-[#090D16] text-white flex flex-col selection:bg-amber-500 selection:text-slate-950">
      
      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        savedCount={journeyItems.length}
        onOpenJourney={() => setIsJourneyDrawerOpen(true)}
        onStartSIHDemo={() => setIsDemoModalOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        
        {/* 1. Hero Landing */}
        <Hero
          onExploreClick={(id) => handleSelectMonumentById(id)}
          onPlanWalkClick={() => scrollToSection('walks')}
          onStartPersonalize={() => scrollToSection('personalize')}
        />

        {/* 2. Personalization Wizard */}
        <PersonalizationSection
          selectedInterests={selectedInterests}
          setSelectedInterests={setSelectedInterests}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          selectedStyle={selectedStyle}
          setSelectedStyle={setSelectedStyle}
          onGenerateRecommendations={handleGenerateRecommendations}
        />

        {/* 3. Recommended for You (Adaptive Scoring & Explanation) */}
        <RecommendedSection
          monuments={monuments}
          selectedInterests={selectedInterests}
          selectedTime={selectedTime}
          selectedStyle={selectedStyle}
          onSelectMonument={(m) => setSelectedMonument(m)}
          onAddToJourney={handleToggleJourney}
          journeyIds={journeyIds}
        />

        {/* 4. Explore All Monuments (Grid + Filters + Search) */}
        <MonumentGrid
          monuments={monuments}
          onSelectMonument={(m) => setSelectedMonument(m)}
          onAddToJourney={handleToggleJourney}
          journeyIds={journeyIds}
        />

        {/* 5. Curated Heritage Walks & Itinerary Timeline */}
        <HeritageWalkSection
          walks={walks}
          onSelectMonumentById={handleSelectMonumentById}
          onOpenMyJourney={() => setIsJourneyDrawerOpen(true)}
        />

        {/* 6. Feature Showcase: Pune's History. Your Way. */}
        <FeaturesSection />

      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Monument Detail Modal */}
      {selectedMonument && (
        <MonumentDetailModal
          monument={selectedMonument}
          onClose={() => setSelectedMonument(null)}
          onAddToJourney={handleToggleJourney}
          isSaved={journeyIds.includes(selectedMonument.id)}
          onOpenAnotherMonument={handleSelectMonumentById}
        />
      )}

      {/* Floating AI Assistant ("Punya AI") */}
      <FloatingAIAssistant
        isOpen={isAiAssistantOpen}
        onToggle={() => setIsAiAssistantOpen(!isAiAssistantOpen)}
        onSelectMonumentById={(id) => {
          handleSelectMonumentById(id);
          setIsAiAssistantOpen(false);
        }}
      />

      {/* My Journey Drawer */}
      <MyJourneyDrawer
        isOpen={isJourneyDrawerOpen}
        onClose={() => setIsJourneyDrawerOpen(false)}
        savedMonuments={journeyItems}
        onRemoveFromJourney={handleRemoveFromJourney}
        onSelectMonument={(m) => {
          setSelectedMonument(m);
          setIsJourneyDrawerOpen(false);
        }}
        onClearAll={handleClearJourney}
      />

      {/* SIH Hackathon Judge Demo Guided Tour Modal */}
      <SIHDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        onExecuteDemoStep={handleExecuteDemoStep}
      />

    </div>
  );
}

window.App = App;
