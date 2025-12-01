import React, { useState } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
import { X, Activity, Terminal } from 'lucide-react';
import { Button } from './Button';
import { StressTestInput, StressTestResult } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface StressTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const StressTestModal: React.FC<StressTestModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState<StressTestInput>({
    monthlyBurn: '',
    cashOnHand: '',
    revenue: '',
    teamSize: ''
  });
  const [result, setResult] = useState<StressTestResult | null>(null);
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const languageMap = {
        en: 'English',
        it: 'Italian',
        es: 'Spanish'
      };

      const prompt = `
        Act as a cold, surgical financial operative (GPCS Analyst).
        Analyze the following startup metrics:
        - Monthly Burn: ${inputs.monthlyBurn}
        - Cash on Hand: ${inputs.cashOnHand}
        - Monthly Revenue: ${inputs.revenue}
        - Team Size: ${inputs.teamSize}

        Calculate the runway. Determine the risk level.
        Provide a brutal, honest assessment in ${languageMap[language]}.
        
        Tone: "Shadow Operative", minimal, no fluff, anxiety-inducing but strategic.
        
        Output JSON format only.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              riskLevel: { type: Type.STRING, enum: ['CRITICAL', 'HIGH', 'MODERATE', 'STABLE'] },
              runwayAnalysis: { type: Type.STRING },
              survivalProtocol: { type: Type.STRING },
              gameoverDate: { type: Type.STRING, description: "Estimated month/year of insolvency" }
            }
          }
        }
      });

      if (response.text) {
        setResult(JSON.parse(response.text));
        setStep(2);
      }
    } catch (error) {
      console.error("Analysis failed", error);
      // Fallback mock data if API fails or key missing
      setResult({
        riskLevel: 'HIGH',
        runwayAnalysis: t.modal.fallback.analysis,
        survivalProtocol: t.modal.fallback.protocol,
        gameoverDate: 'Q3 2025'
      });
      setStep(2);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center py-20 space-y-4">
          <Activity className="w-12 h-12 text-white animate-pulse" />
          <p className="font-mono text-sm text-gray-400 animate-pulse">{t.modal.loading}</p>
          <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-white animate-[width_2s_ease-in-out_infinite]" style={{ width: '30%' }}></div>
          </div>
        </div>
      );
    }

    if (step === 2 && result) {
      const colorMap = {
        CRITICAL: 'text-infraredRed border-infraredRed/50',
        HIGH: 'text-orange-500 border-orange-500/50',
        MODERATE: 'text-yellow-500 border-yellow-500/50',
        STABLE: 'text-frozenGreen border-frozenGreen/50'
      };

      return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="border-b border-gray-800 pb-4 mb-4 flex justify-between items-center">
            <h3 className="text-sm font-mono text-gray-400">{t.modal.results.reportId}: {Math.floor(Math.random() * 99999)}X</h3>
            <span className={`font-mono font-bold px-2 py-1 border ${colorMap[result.riskLevel]}`}>
              {t.modal.results.status}: {result.riskLevel}
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-mono text-gray-500 uppercase">{t.modal.results.gameover}</label>
              <div className="text-3xl font-bold text-white font-sans tracking-tight">{result.gameoverDate}</div>
            </div>

            <div>
              <label className="text-xs font-mono text-gray-500 uppercase">{t.modal.results.analysis}</label>
              <p className="text-gray-300 font-light leading-relaxed mt-1">{result.runwayAnalysis}</p>
            </div>

            <div className="bg-white/5 p-4 border-l-2 border-white">
              <label className="text-xs font-mono text-white uppercase flex items-center gap-2 mb-2">
                <Terminal size={12} />
                {t.modal.results.protocol}
              </label>
              <p className="text-sm font-mono text-gray-300">{result.survivalProtocol}</p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-gray-800">
             <Button onClick={onClose} className="w-full">
               {t.modal.results.cta}
             </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="space-y-2 mb-8">
           <h2 className="text-2xl font-bold text-white">{t.modal.title}</h2>
           <p className="text-gray-400 text-sm">{t.modal.subtitle}</p>
        </div>

        <div className="grid gap-6">
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase">{t.modal.labels.cash}</label>
                <input 
                  name="cashOnHand"
                  value={inputs.cashOnHand}
                  onChange={handleChange}
                  type="number"
                  placeholder={t.modal.placeholder.cash}
                  className="w-full bg-black border border-gray-700 p-3 text-white font-mono focus:border-white focus:outline-none transition-colors placeholder:text-gray-800"
                />
             </div>
             <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase">{t.modal.labels.burn}</label>
                <input 
                  name="monthlyBurn"
                  value={inputs.monthlyBurn}
                  onChange={handleChange}
                  type="number"
                  placeholder={t.modal.placeholder.burn}
                  className="w-full bg-black border border-gray-700 p-3 text-white font-mono focus:border-white focus:outline-none transition-colors placeholder:text-gray-800"
                />
             </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase">{t.modal.labels.revenue}</label>
                <input 
                  name="revenue"
                  value={inputs.revenue}
                  onChange={handleChange}
                  type="number"
                  placeholder={t.modal.placeholder.revenue}
                  className="w-full bg-black border border-gray-700 p-3 text-white font-mono focus:border-white focus:outline-none transition-colors placeholder:text-gray-800"
                />
             </div>
             <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase">{t.modal.labels.team}</label>
                <input 
                  name="teamSize"
                  value={inputs.teamSize}
                  onChange={handleChange}
                  type="number"
                  placeholder={t.modal.placeholder.team}
                  className="w-full bg-black border border-gray-700 p-3 text-white font-mono focus:border-white focus:outline-none transition-colors placeholder:text-gray-800"
                />
             </div>
          </div>
        </div>

        <div className="pt-4">
           <Button onClick={handleAnalyze} className="w-full">
             {t.modal.cta}
           </Button>
           <p className="text-[10px] text-gray-600 font-mono text-center mt-4">
             {t.modal.disclaimer}
           </p>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/80">
      <div className="relative w-full max-w-lg bg-panel border border-gray-800 shadow-2xl overflow-hidden">
        {/* Decorative header line */}
        <div className="h-1 w-full bg-white mb-0"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8">
           {renderContent()}
        </div>
      </div>
    </div>
  );
};