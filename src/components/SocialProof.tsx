import React, { useEffect, useState } from 'react';
import { TelegramIcon } from './TelegramIcon';
import { BrandConfig } from '../types';
import { Globe2, Radio, ShieldCheck } from 'lucide-react';

interface SocialProofProps {
  brand: BrandConfig;
}

export const SocialProof: React.FC<SocialProofProps> = ({ brand }) => {
  const [onlineCount, setOnlineCount] = useState(48);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount((prev) => {
        const delta = Math.floor(Math.random() * 3) - 1;
        return Math.max(35, Math.min(65, prev + delta));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="community" className="relative py-10 sm:py-14 text-center">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Heading */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-sky-400 mb-2">
          <Globe2 className="w-3.5 h-3.5" />
          <span>JOIN OUR GROWING TELEGRAM COMMUNITY</span>
        </div>

        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6"
          style={{ textWrap: 'balance' }}
        >
          Join Our Growing Telegram Community
        </h2>

        {/* Big Telegram Icon & Dynamic Member Count Card (Centered) */}
        <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#091124]/90 backdrop-blur-2xl border border-sky-400/25 shadow-2xl group hover:border-sky-400/50 transition-all duration-300 glow-blue">
          {/* Subtle electric blue aura */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 via-transparent to-transparent rounded-3xl pointer-events-none" />

          {/* Large Telegram Icon */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#0088cc] via-[#0099ff] to-[#00d2ff] flex items-center justify-center text-white shadow-xl shadow-sky-500/35 group-hover:scale-105 transition-all duration-300">
            <TelegramIcon className="w-8 h-8 sm:w-10 sm:h-10" />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 ring-3 ring-[#091124] flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
          </div>

          {/* Dynamic-looking Member Count */}
          <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-2 tabular-nums">
            <span className="bg-gradient-to-r from-white via-slate-100 to-sky-200 bg-clip-text text-transparent">
              200+
            </span>{' '}
            <span className="text-sky-400">Members</span>
          </div>

          {/* Small text (Exact prompt requirement) */}
          <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto mb-5 leading-relaxed">
            Join thousands of members already connected with our channel.
          </p>

          {/* Live Activity Metrics Grid */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/[0.08] text-center">
            <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-[10px] text-slate-400 mb-0.5 flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
                <span>Active Now</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-white font-mono tabular-nums">
                ~{onlineCount.toLocaleString()}
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-[10px] text-slate-400 mb-0.5 flex items-center justify-center gap-1">
                <Radio className="w-2.5 h-2.5 text-sky-400" />
                <span>Updates</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-white font-mono">
                Real-Time
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-[10px] text-slate-400 mb-0.5 flex items-center justify-center gap-1">
                <ShieldCheck className="w-2.5 h-2.5 text-sky-400" />
                <span>Access</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-white font-mono">
                100% Free
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
