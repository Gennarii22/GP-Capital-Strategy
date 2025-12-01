import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Protocol: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-[#050505] border-t border-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center font-mono text-sm text-gray-500 mb-16 uppercase tracking-[0.2em]">{t.protocol.header}</h2>
        
        <div className="grid md:grid-cols-3 gap-0 relative">
          {/* Connector Line */}
          <div className="absolute top-8 left-0 w-full h-[1px] bg-gray-800 hidden md:block"></div>

          {t.protocol.steps.map((item, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center p-6 group">
              <div className="w-16 h-16 bg-black border border-gray-700 text-white font-mono text-xl flex items-center justify-center rounded-full mb-6 z-10 group-hover:border-white transition-colors">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};