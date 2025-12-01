import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'it', label: 'IT' },
    { code: 'es', label: 'ES' }
  ];

  return (
    <div className="flex items-center gap-2 pointer-events-auto">
      {languages.map((lang, index) => (
        <React.Fragment key={lang.code}>
          <button
            onClick={() => setLanguage(lang.code)}
            className={`font-mono text-xs transition-colors ${
              language === lang.code 
                ? 'text-white font-bold' 
                : 'text-gray-600 hover:text-gray-400'
            }`}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && (
            <span className="text-gray-800 text-xs">/</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};