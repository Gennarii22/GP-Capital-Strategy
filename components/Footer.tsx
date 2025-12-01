import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-900 bg-black text-center md:text-left">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h4 className="text-white font-bold tracking-tighter text-xl mb-1">GPCS</h4>
          <p className="text-[10px] font-mono text-gray-600 uppercase">© 2025. Los Angeles – Napoli.</p>
        </div>
        
        <div className="flex gap-8 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Email</a>
          <a href="#" className="hover:text-white transition-colors">Legal</a>
        </div>
      </div>
    </footer>
  );
};