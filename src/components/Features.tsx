import React from 'react';
import { Calendar, Shield, Zap, Users, ArrowUpRight } from 'lucide-react';
import { BrandConfig } from '../types';

interface FeaturesProps {
  brand: BrandConfig;
}

export const Features: React.FC<FeaturesProps> = ({ brand }) => {
  const cards = [
    {
      id: 'daily-updates',
      number: '01',
      title: 'DAILY UPDATES',
      description: 'Stay updated with regular market insights and channel updates.',
      icon: Calendar,
      tag: 'Morning Briefings',
    },
    {
      id: 'exclusive-content',
      number: '02',
      title: 'EXCLUSIVE CONTENT',
      description: 'Access content and posts shared exclusively with our Telegram community.',
      icon: Shield,
      tag: 'Members Only',
    },
    {
      id: 'fast-updates',
      number: '03',
      title: 'FAST UPDATES',
      description: 'Get important updates directly on Telegram without missing announcements.',
      icon: Zap,
      tag: 'Instant Push Alerts',
    },
    {
      id: 'community',
      number: '04',
      title: 'COMMUNITY',
      description: 'Join a growing community and stay connected with the latest information.',
      icon: Users,
      tag: '200+ Members',
    },
  ];

  return (
    <section id="features" className="relative py-12 sm:py-16 text-center">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-sky-400 mb-2">
            <span>CHANNEL HIGHLIGHTS</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2.5"
            style={{ textWrap: 'balance' }}
          >
            Everything You Need In One Channel
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            High-conviction broadcasts built to keep you informed, sharp, and consistently ahead.
          </p>
        </div>

        {/* Centered 2x2 Glass-Style Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group relative flex flex-col text-left p-5 sm:p-6 rounded-2xl bg-[#0A1226]/80 backdrop-blur-xl border border-white/[0.08] hover:border-sky-400/40 hover:bg-[#0E1B3D]/90 transition-all duration-300 shadow-lg hover:shadow-sky-500/15"
              >
                {/* Top Bar with Icon & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-950/80 border border-sky-400/30 flex items-center justify-center text-sky-400 group-hover:text-white group-hover:bg-sky-500 group-hover:border-sky-300 transition-all duration-300 shadow-md group-hover:shadow-[0_0_18px_rgba(56,189,248,0.5)]">
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <span className="text-[11px] font-mono tracking-wider text-sky-400/80 uppercase px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/20">
                    {card.tag}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-sky-300 transition-colors">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 flex-1">
                  {card.description}
                </p>

                {/* Direct Channel Access Link */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors text-[11px]">
                    Included free in Telegram
                  </span>
                  <a
                    href={brand.telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium"
                    aria-label={`Join channel for ${card.title}`}
                  >
                    <span>Join</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
