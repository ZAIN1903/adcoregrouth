import React, { useState } from 'react';
import { TelegramIcon } from './TelegramIcon';
import { BrandConfig } from '../types';
import { CheckCircle2, Copy, Check, Sparkles, QrCode, ShieldCheck, ArrowRight } from 'lucide-react';
import { trackTelegramJoin } from '../utils/pixel';
import heroEmblemImage from '../assets/images/telegram_3d_emblem_1791129570573.jpg';

interface HeroProps {
  brand: BrandConfig;
  onShowToast: (message: string) => void;
  onOpenQr: () => void;
}

export const Hero: React.FC<HeroProps> = ({ brand, onShowToast, onOpenQr }) => {
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleCopyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(brand.telegramLink);
    setCopied(true);
    onShowToast('Telegram invite link copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-16 text-center">
      {/* Ambient background glows */}
      <div className="ambient-glow-top" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-500/15 rounded-full blur-[80px] pointer-events-none" />

      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Centered Small Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-sm shadow-sky-500/10">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
          <span>{brand.badgeText}</span>
          <span className="text-white/30">|</span>
          <span className="text-slate-300 font-normal">Official Channel</span>
        </div>

        {/* Centered Channel Icon / 3D Emblem */}
        <div className="relative mb-6 group cursor-pointer" onClick={onOpenQr} title="Click to view QR code">
          <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0A1124] border-2 border-sky-400/50 shadow-2xl flex items-center justify-center">
            {!imageError ? (
              <img
                src={brand.logoUrl || heroEmblemImage}
                alt={brand.channelName}
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#0088cc] via-[#0099ff] to-[#00c2ff] flex items-center justify-center text-white">
                <TelegramIcon className="w-12 h-12" />
              </div>
            )}
            {/* Verified badge */}
            <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-[#0088cc] border-2 border-[#050914] flex items-center justify-center text-white shadow-md">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Centered Main Headline */}
        <h1
          className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] mb-5 max-w-3xl"
          style={{ textWrap: 'balance' }}
        >
          Grow With{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]">
            {brand.channelName}
          </span>
        </h1>

        {/* Centered Subheading */}
        <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
          Join our Telegram community for daily market insights, educational content, updates and exclusive channel posts.
        </p>

        {/* Centered CTA Buttons Block */}
        <div className="w-full max-w-md flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6">
          {/* Primary CTA */}
          <a
            href={brand.telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackTelegramJoin}
            className="w-full sm:w-auto flex-1 group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#0088cc] via-[#0099ff] to-[#00c2ff] rounded-2xl shadow-xl shadow-sky-500/35 hover:shadow-sky-400/70 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 overflow-hidden whitespace-nowrap glow-blue"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <TelegramIcon className="w-5 h-5 text-white transition-transform group-hover:scale-110 group-hover:rotate-12" />
            <span>JOIN TELEGRAM NOW →</span>
          </a>

          {/* Learn More secondary CTA */}
          <a
            href="#features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-sky-400/40 rounded-2xl transition-all duration-200 whitespace-nowrap"
          >
            <span>LEARN MORE</span>
            <ArrowRight className="w-4 h-4 text-sky-400" />
          </a>
        </div>

        {/* Quick Utility Actions */}
        <div className="flex items-center justify-center gap-4 mb-6 text-xs text-slate-400">
          <button
            onClick={onOpenQr}
            className="inline-flex items-center gap-1.5 hover:text-sky-300 transition-colors py-1 px-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/5"
          >
            <QrCode className="w-3.5 h-3.5 text-sky-400" />
            <span>Scan QR Code</span>
          </button>

          <span className="text-white/20">•</span>

          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 hover:text-sky-300 transition-colors py-1 px-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/5"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-sky-400" />
                <span>Copy Invite Link</span>
              </>
            )}
          </button>
        </div>

        {/* Centered Trust Text Below Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-400 font-medium pb-4">
          <span className="inline-flex items-center gap-1.5 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            Free to Join
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1.5 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            Daily Updates
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1.5 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            Telegram Community
          </span>
        </div>
      </div>
    </section>
  );
};
