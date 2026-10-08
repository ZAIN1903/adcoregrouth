import React from 'react';
import { TelegramIcon } from './TelegramIcon';
import { BrandConfig } from '../types';
import { Sliders, QrCode } from 'lucide-react';
import { trackTelegramJoin } from '../utils/pixel';

interface HeaderProps {
  brand: BrandConfig;
  onOpenCustomizer: () => void;
  onOpenQr: () => void;
}

export const Header: React.FC<HeaderProps> = ({ brand, onOpenCustomizer, onOpenQr }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#050914]/85 border-b border-white/[0.07] transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark & Channel Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1 -m-1"
          >
            {/* Channel Logo Image with electric glow */}
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-[#0A1124] flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:shadow-sky-400/40 group-hover:scale-105 transition-all duration-300 border border-sky-400/40">
              {brand.logoUrl ? (
                <img
                  src={brand.logoUrl}
                  alt={brand.channelName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              ) : (
                <TelegramIcon className="w-5 h-5 text-white" />
              )}
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20 pointer-events-none" />
            </div>

            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors whitespace-nowrap">
                {brand.channelName}
              </span>
              <span className="text-[11px] font-mono tracking-wider text-sky-400/80 -mt-0.5">
                {brand.channelHandle}
              </span>
            </div>
          </a>
        </div>

        {/* Zone 2: Clean 1-Row Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a
            href="#features"
            className="hover:text-sky-400 transition-colors hover:underline underline-offset-8 decoration-sky-500/50"
          >
            Features
          </a>
          <a
            href="#preview"
            className="hover:text-sky-400 transition-colors hover:underline underline-offset-8 decoration-sky-500/50"
          >
            Channel Feed
          </a>
          <a
            href="#community"
            className="hover:text-sky-400 transition-colors hover:underline underline-offset-8 decoration-sky-500/50"
          >
            Community
          </a>
          <a
            href="#disclaimer"
            className="hover:text-sky-400 transition-colors hover:underline underline-offset-8 decoration-sky-500/50"
          >
            Disclaimer
          </a>
        </nav>

        {/* Zone 3: Primary Action & Quick Tools */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* QR Code Quick View button */}
          <button
            onClick={onOpenQr}
            title="Scan QR Code to join on phone"
            className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white hover:border-sky-400/40 hover:bg-white/[0.08] transition-all"
            aria-label="Show QR Code"
          >
            <QrCode className="w-4 h-4" />
          </button>

          {/* Brand Customizer toggle */}
          <button
            onClick={onOpenCustomizer}
            title="Edit Channel Details"
            className="inline-flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium text-slate-300 hover:text-white rounded-xl border border-white/10 bg-white/[0.03] hover:border-sky-400/40 hover:bg-white/[0.08] transition-all whitespace-nowrap"
            aria-label="Customize Channel Name and Link"
          >
            <Sliders className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden lg:inline">Edit Details</span>
          </button>

          {/* Primary CTA: JOIN TELEGRAM Button */}
          <a
            href={brand.telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackTelegramJoin}
            className="group relative inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-[#0088cc] via-[#0099ff] to-[#00c2ff] rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 whitespace-nowrap overflow-hidden"
          >
            {/* Soft luminous shimmer highlight */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            <TelegramIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white transition-transform group-hover:rotate-12" />
            <span>JOIN TELEGRAM</span>
          </a>
        </div>
      </div>
    </header>
  );
};
