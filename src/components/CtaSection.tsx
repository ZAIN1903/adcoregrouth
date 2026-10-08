import React from 'react';
import { TelegramIcon } from './TelegramIcon';
import { BrandConfig } from '../types';
import { QrCode, Sparkles } from 'lucide-react';
import { trackTelegramJoin } from '../utils/pixel';

interface CtaSectionProps {
  brand: BrandConfig;
  onOpenQr: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ brand, onOpenQr }) => {
  return (
    <section className="relative py-12 sm:py-16 text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Large Premium Blue-Gradient CTA Box (Centered) */}
        <div className="relative rounded-3xl p-7 sm:p-12 overflow-hidden bg-gradient-to-br from-[#0c1f4a] via-[#091533] to-[#050c20] border border-sky-400/35 shadow-2xl glow-blue-lg text-center flex flex-col items-center">
          {/* Ambient Lighting */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/30 text-sky-300 text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>DIRECT ACCESS</span>
            </div>

            {/* Heading (Exact prompt requirement) */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3"
              style={{ textWrap: 'balance' }}
            >
              Ready To Join?
            </h2>

            {/* Text (Exact prompt requirement) */}
            <p className="text-sm sm:text-base text-slate-200 max-w-lg mx-auto leading-relaxed mb-8 font-normal">
              Join our Telegram channel and stay connected with all the latest updates.
            </p>

            {/* CTA Button Block */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-5">
              {/* Button: "JOIN TELEGRAM NOW →" */}
              <a
                href={brand.telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackTelegramJoin}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#0088cc] via-[#0099ff] to-[#00c2ff] rounded-2xl shadow-xl shadow-sky-500/40 hover:shadow-sky-400/70 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 overflow-hidden glow-blue whitespace-nowrap"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <TelegramIcon className="w-5 h-5 text-white transition-transform group-hover:rotate-12" />
                <span>JOIN TELEGRAM NOW →</span>
              </a>

              {/* Show QR on Phone */}
              <button
                onClick={onOpenQr}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 text-xs sm:text-sm font-semibold text-slate-200 bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-sky-400/40 rounded-2xl transition-all whitespace-nowrap"
              >
                <QrCode className="w-4 h-4 text-sky-400" />
                <span>Scan Mobile QR</span>
              </button>
            </div>

            {/* Channel Handle Guarantee */}
            <div className="text-[11px] sm:text-xs text-sky-300/80 font-mono text-center">
              Official Telegram Link:{' '}
              <span className="text-white underline underline-offset-4 decoration-sky-400/50">
                {brand.telegramLink}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
