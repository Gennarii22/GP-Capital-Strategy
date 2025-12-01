import React from 'react';
import { AlertTriangle, TrendingDown, EyeOff, Activity } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Problem: React.FC = () => {
  const { t } = useLanguage();

  const icons = [
    <TrendingDown className="text-red-900" size={32} />,
    <Activity className="text-red-900" size={32} />,
    <EyeOff className="text-red-900" size={32} />
  ];

  return (
    <section className="py-24 px-6 border-t border-gray-900 bg-black relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
           <h2 className="text-sm font-mono text-red-700 tracking-widest mb-4 uppercase flex items-center gap-2">
             <AlertTriangle size={14} />
             {t.problem.badge}
           </h2>
           <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
             {t.problem.titleStart} <br/>
             <span className="text-gray-600">{t.problem.titleEnd}</span>
           </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.problem.cards.map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/5 p-8 hover:border-red-900/30 transition-colors group">
              <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">{icons[idx]}</div>
              <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
              <p className="text-gray-400 leading-relaxed text-sm font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};