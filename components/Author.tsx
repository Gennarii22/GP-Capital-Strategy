import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Author: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 border-t border-gray-900 bg-black">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/3">
           <div className="aspect-[3/4] bg-gray-900 grayscale relative overflow-hidden">
             {/* Placeholder for Gennaro's image */}
             <img 
               src="https://picsum.photos/400/500?grayscale" 
               alt="Gennaro Pancia" 
               className="w-full h-full object-cover opacity-50 hover:opacity-75 transition-opacity duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
             <div className="absolute bottom-4 left-4">
               <p className="font-mono text-xs text-white bg-black/50 backdrop-blur px-2 py-1 inline-block">{t.author.id}</p>
             </div>
           </div>
        </div>
        
        <div className="w-full md:w-2/3 space-y-6">
          <h2 className="text-3xl font-bold text-white">{t.author.name} <span className="text-gray-600 font-light">{t.author.role}</span></h2>
          <div className="space-y-4 text-gray-400 font-light leading-relaxed">
            {t.author.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          
          <div className="pt-4 border-t border-gray-800 grid grid-cols-2 gap-4">
             <div>
               <span className="block text-2xl font-bold text-white">€50M+</span>
               <span className="text-xs font-mono text-gray-500 uppercase">{t.author.stats.capital}</span>
             </div>
             <div>
               <span className="block text-2xl font-bold text-white">12+</span>
               <span className="text-xs font-mono text-gray-500 uppercase">{t.author.stats.exits}</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};