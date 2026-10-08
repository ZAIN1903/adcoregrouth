import React from 'react';
import { AlertCircle } from 'lucide-react';
import { DISCLAIMER_TEXT } from '../constants';

export const Disclaimer: React.FC = () => {
  return (
    <section id="disclaimer" className="relative py-8 bg-[#040711] border-t border-white/[0.05] text-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl p-5 bg-white/[0.02] border border-white/[0.06] flex flex-col items-center text-center">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-2.5">
            <AlertCircle className="w-4 h-4" />
          </div>

          <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
            Risk & Legal Notice
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-normal">
            {DISCLAIMER_TEXT}
          </p>
        </div>
      </div>
    </section>
  );
};
