import React from 'react';
import { TelegramIcon } from './TelegramIcon';
import { BrandConfig } from '../types';
import { trackTelegramJoin } from '../utils/pixel';

interface MobileStickyBarProps {
  brand: BrandConfig;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ brand }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#050914]/90 backdrop-blur-xl border-t border-white/[0.08] px-4 py-2.5 shadow-2xl">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 truncate">
          <div className="w-8 h-8 rounded-lg overflow-hidden bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 border border-sky-400/30">
            {brand.logoUrl ? (
              <img
                src={brand.logoUrl}
                alt={brand.channelName}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            ) : (
              <TelegramIcon className="w-4 h-4 text-sky-400" />
            )}
          </div>
          <div className="truncate">
            <div className="text-xs font-bold text-white truncate">{brand.channelName}</div>
            <div className="text-[10px] text-slate-400 truncate">Free Community</div>
          </div>
        </div>

        <a
          href={brand.telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackTelegramJoin}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-md shadow-sky-500/25 shrink-0"
        >
          <TelegramIcon className="w-3.5 h-3.5 text-white" />
          <span>JOIN NOW</span>
        </a>
      </div>
    </div>
  );
};
