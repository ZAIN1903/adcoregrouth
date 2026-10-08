import React, { useState } from 'react';
import { BrandConfig } from '../types';
import { QrCodeSvg } from './QrCodeSvg';
import { X, Copy, Check, ExternalLink, Smartphone } from 'lucide-react';
import { TelegramIcon } from './TelegramIcon';

interface QrCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  brand: BrandConfig;
  onShowToast: (msg: string) => void;
}

export const QrCodeModal: React.FC<QrCodeModalProps> = ({
  isOpen,
  onClose,
  brand,
  onShowToast,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(brand.telegramLink);
    setCopied(true);
    onShowToast('Telegram link copied!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-sm rounded-3xl bg-[#0A1224] border border-sky-400/30 shadow-2xl p-6 text-white text-center glow-blue">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon & Title */}
        <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/30 text-sky-400 flex items-center justify-center mx-auto mb-3">
          <Smartphone className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-white tracking-tight mb-1">
          Scan to Join on Phone
        </h3>
        <p className="text-xs text-slate-400 mb-6">
          Open your camera app or Telegram to scan
        </p>

        {/* High Precision QR Code */}
        <div className="flex justify-center mb-6">
          <QrCodeSvg url={brand.telegramLink} size={210} />
        </div>

        {/* Channel Details */}
        <div className="text-xs text-slate-300 font-medium mb-4">
          <span className="text-white font-bold">{brand.channelName}</span>
          <span className="text-sky-400 font-mono ml-1.5">{brand.channelHandle}</span>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <a
            href={brand.telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-md shadow-sky-500/25 transition-all"
          >
            <TelegramIcon className="w-4 h-4 text-white" />
            <span>Open Directly in App</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
          </a>

          <button
            onClick={handleCopy}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Link Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy Invite Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
