import React from 'react';
import { TelegramIcon } from './TelegramIcon';
import { BrandConfig, ModalType } from '../types';

interface FooterProps {
  brand: BrandConfig;
  onOpenModal: (type: ModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ brand, onOpenModal }) => {
  return (
    <footer className="relative bg-[#03060E] border-t border-white/[0.08] py-10 sm:py-12 text-slate-400 text-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Channel Logo + Channel Name Centered */}
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-8 h-8 rounded-xl overflow-hidden bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-sky-500/20 border border-sky-400/40">
            {brand.logoUrl ? (
              <img
                src={brand.logoUrl}
                alt={brand.channelName}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            ) : (
              <TelegramIcon className="w-4 h-4 text-white" />
            )}
          </div>
          <div className="text-base font-bold text-white tracking-tight">
            {brand.channelName}
          </div>
        </div>

        <div className="text-xs text-slate-500 mb-5">
          Operated by {brand.agencyName}
        </div>

        {/* Small Links Centered */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 mb-5">
          <button
            onClick={() => onOpenModal('privacy')}
            className="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
          >
            Privacy Policy
          </button>
          <span className="text-white/20">•</span>
          <button
            onClick={() => onOpenModal('disclaimer')}
            className="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
          >
            Disclaimer
          </button>
          <span className="text-white/20">•</span>
          <button
            onClick={() => onOpenModal('contact')}
            className="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
          >
            Contact
          </button>
        </div>

        {/* Copyright Centered */}
        <div className="text-xs text-slate-500">
          © 2026 {brand.channelName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
