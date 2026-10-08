import React, { useState } from 'react';
import { BrandConfig } from '../types';
import { DEFAULT_BRAND_CONFIG } from '../constants';
import { X, RotateCcw, Check, Sparkles, Send } from 'lucide-react';
import { TelegramIcon } from './TelegramIcon';

interface BrandCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  brand: BrandConfig;
  onSave: (newConfig: BrandConfig) => void;
  onShowToast: (msg: string) => void;
}

export const BrandCustomizerModal: React.FC<BrandCustomizerModalProps> = ({
  isOpen,
  onClose,
  brand,
  onSave,
  onShowToast,
}) => {
  const [formData, setFormData] = useState<BrandConfig>(brand);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onShowToast('Brand settings updated!');
    onClose();
  };

  const handleReset = () => {
    setFormData(DEFAULT_BRAND_CONFIG);
    onSave(DEFAULT_BRAND_CONFIG);
    onShowToast('Reset to original default template!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#091122] border border-sky-400/30 shadow-2xl p-6 sm:p-8 text-white overflow-hidden glow-blue">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Customize Channel Details
              </h3>
              <p className="text-xs text-slate-400">
                Update placeholders to match your real Telegram channel
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Channel Name <span className="text-sky-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.channelName}
              onChange={(e) => setFormData({ ...formData, channelName: e.target.value })}
              placeholder="e.g. Ad Core Agency"
              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Telegram Link (URL) <span className="text-sky-400">*</span>
            </label>
            <div className="relative">
              <input
                type="url"
                required
                value={formData.telegramLink}
                onChange={(e) => setFormData({ ...formData, telegramLink: e.target.value })}
                placeholder="https://t.me/+zHOa4twaCLoyNmY1"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm"
              />
              <div className="absolute left-3 top-3 text-slate-400">
                <TelegramIcon className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Channel Handle
              </label>
              <input
                type="text"
                value={formData.channelHandle}
                onChange={(e) => setFormData({ ...formData, channelHandle: e.target.value })}
                placeholder="@adcoreagency"
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Agency / Brand Name
              </label>
              <input
                type="text"
                value={formData.agencyName}
                onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
                placeholder="e.g. Ad Core Agency"
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Logo Image URL
            </label>
            <input
              type="url"
              value={formData.logoUrl}
              onChange={(e) => setFormData({ ...formData, logoUrl: e.target.value })}
              placeholder="https://..."
              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm"
            />
          </div>

          {/* Quick Notice */}
          <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-400/20 text-xs text-sky-200">
            All CTA buttons, links, header wordmarks, QR codes, and footers will automatically sync with these values.
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 mt-6 border-t border-white/[0.08]">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-3 py-2 rounded-lg hover:bg-white/[0.04] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-sky-500 hover:bg-sky-400 transition-colors shadow-md shadow-sky-500/30"
              >
                <Check className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
