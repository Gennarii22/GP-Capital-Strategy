import React from 'react';
import { Button } from './Button';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onStartTest: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartTest }) => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.05] pointer-events-none"></div>
      
      <div className="max-w-4xl w-full text-center relative z-10 space-y-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-gray-800 rounded-full bg-white/5 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">{t.hero.badge}</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
          {t.hero.titleStart}<br/>
          <span className="text-gray-500">{t.hero.titleEnd}</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
          <Button onClick={onStartTest}>
            {t.hero.cta}
          </Button>
          <span className="text-xs font-mono text-gray-600 flex items-center gap-2">
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            {t.hero.trust[0]}
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            {t.hero.trust[1]}
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            {t.hero.trust[2]}
          </span>
        </div>
      </div>
    </section>
  );
};