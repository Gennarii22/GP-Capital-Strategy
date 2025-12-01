import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Protocol } from './components/Protocol';
import { Author } from './components/Author';
import { Footer } from './components/Footer';
import { StressTestModal } from './components/StressTestModal';
import { ShadowAnalyst } from './components/ShadowAnalyst';
import { SectionId } from './types';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';

const MainContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<SectionId>(SectionId.HERO);
  const { t } = useLanguage();

  // Scroll detection for Shadow Analyst
  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(SectionId);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= window.innerHeight / 2) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans selection:bg-white selection:text-black">
      {/* Cinematic Scanline Effect */}
      <div className="scanline fixed inset-0 z-50 pointer-events-none"></div>

      {/* Navigation / Header - Minimal */}
      <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 mix-blend-difference">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white font-bold tracking-tighter text-xl">GPCS</div>
          
          <div className="flex items-center gap-6">
            <div className="text-[10px] font-mono text-white/50 hidden md:block pointer-events-none">{t.nav.status}</div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <main>
        <div id={SectionId.HERO}>
          <Hero onStartTest={() => setIsModalOpen(true)} />
        </div>
        
        <div id={SectionId.PROBLEM}>
          <Problem />
        </div>
        
        <div id={SectionId.SOLUTION}>
          <Solution />
        </div>
        
        <div id={SectionId.PROTOCOL}>
          <Protocol />
        </div>

        <div id={SectionId.AUTHOR}>
          <Author />
        </div>
      </main>

      <Footer />

      <StressTestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      <ShadowAnalyst currentSection={currentSection} />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;