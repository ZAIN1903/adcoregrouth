import React from 'react';
import { ModalType, BrandConfig } from '../types';
import { X, ShieldCheck, AlertCircle, Mail, Send } from 'lucide-react';
import { TelegramIcon } from './TelegramIcon';
import { DISCLAIMER_TEXT } from '../constants';

interface LegalModalProps {
  type: ModalType;
  onClose: () => void;
  brand: BrandConfig;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose, brand }) => {
  if (!type || type === 'customize' || type === 'qrcode') return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#091122] border border-white/10 shadow-2xl p-6 sm:p-8 text-white overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' && <ShieldCheck className="w-5 h-5 text-sky-400" />}
            {type === 'disclaimer' && <AlertCircle className="w-5 h-5 text-amber-400" />}
            {type === 'contact' && <Mail className="w-5 h-5 text-sky-400" />}

            <h3 className="text-lg font-bold text-white tracking-tight">
              {type === 'privacy' && 'Privacy Policy'}
              {type === 'disclaimer' && 'Disclaimer & Risk Disclosure'}
              {type === 'contact' && 'Contact Support'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="text-sm text-slate-300 space-y-4 max-h-[60vh] overflow-y-auto pr-1">
          {type === 'privacy' && (
            <>
              <p>
                We respect your personal privacy. This website is a landing gateway for the{' '}
                <strong className="text-white">{brand.channelName}</strong> Telegram broadcast channel.
              </p>
              <h4 className="font-semibold text-white text-xs uppercase tracking-wider">Data Collection</h4>
              <p className="text-xs text-slate-400">
                We do not harvest or sell personal identifiable data through this website. Telegram handles your messaging data under Telegram&apos;s own strict privacy and security policies.
              </p>
              <h4 className="font-semibold text-white text-xs uppercase tracking-wider">Cookies & Local Storage</h4>
              <p className="text-xs text-slate-400">
                Local storage is used solely to preserve customized presentation preferences (such as your preview handle or link) directly inside your web browser.
              </p>
            </>
          )}

          {type === 'disclaimer' && (
            <>
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs leading-relaxed">
                {DISCLAIMER_TEXT}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                All communications and publications on {brand.channelName} represent personal opinions, educational demonstrations, and general market research only. Past performance does not guarantee future results. Never risk capital you cannot afford to lose.
              </p>
            </>
          )}

          {type === 'contact' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-300">
                Need direct contact regarding {brand.channelName} or partnerships with {brand.agencyName}?
              </p>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Telegram Direct Admin:</span>
                  <a
                    href={brand.telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 font-mono font-medium"
                  >
                    {brand.channelHandle}
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Agency Operator:</span>
                  <span className="text-white font-medium">{brand.agencyName}</span>
                </div>
              </div>

              <a
                href={brand.telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white bg-sky-500 hover:bg-sky-400 transition-colors shadow-md"
              >
                <TelegramIcon className="w-4 h-4 text-white" />
                <span>Message Admin on Telegram</span>
              </a>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-6 mt-6 border-t border-white/[0.08] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
