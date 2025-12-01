import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';
import { SectionId } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ShadowAnalystProps {
  currentSection: SectionId;
}

export const ShadowAnalyst: React.FC<ShadowAnalystProps> = ({ currentSection }) => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsTyping(true);
    const text = t.shadow[currentSection];
    let i = 0;
    setMessage('');
    
    const interval = setInterval(() => {
      setMessage(text.substring(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 30); // Typing speed

    return () => clearInterval(interval);
  }, [currentSection, t]);

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden md:flex flex-col gap-2 pointer-events-none mix-blend-difference">
      <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-1">
        <Eye size={12} className={isTyping ? "animate-pulse" : ""} />
        <span>SHADOW_ANALYST_V1.0</span>
      </div>
      <div className="bg-white/5 border-l border-white/30 p-3 max-w-xs backdrop-blur-sm">
        <p className="text-xs font-mono text-white leading-relaxed">
          {message}
          <span className="animate-pulse">_</span>
        </p>
      </div>
    </div>
  );
};