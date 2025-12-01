import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Solution: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 border-t border-gray-900 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-midnightBlue/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono text-blue-500 tracking-widest mb-4 uppercase flex items-center gap-2">
              <ShieldCheck size={14} />
              {t.solution.badge}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {t.solution.titleStart} <br/>
              {t.solution.titleEnd}
            </h3>
          </div>
          <p className="text-gray-400 max-w-xs text-sm font-mono border-l border-gray-800 pl-4">
            {t.solution.sidebar}
          </p>
        </div>

        <div className="space-y-4">
          {t.solution.cards.map((item, idx) => (
            <div key={idx} className="group relative border-t border-gray-800 py-10 hover:bg-white/5 transition-colors duration-500 px-4 -mx-4">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                <span className="font-mono text-xs text-blue-900/80 group-hover:text-blue-400 transition-colors">{item.label}</span>
                <h4 className="text-2xl font-bold text-white w-full md:w-1/3">{item.title}</h4>
                <p className="text-gray-400 font-light text-sm w-full md:w-1/3">{item.desc}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-gray-800"></div>
        </div>
      </div>
    </section>
  );
};