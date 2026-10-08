/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrandConfig, ModalType } from './types';
import { DEFAULT_BRAND_CONFIG } from './constants';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ChannelPreview } from './components/ChannelPreview';
import { SocialProof } from './components/SocialProof';
import { CtaSection } from './components/CtaSection';
import { Disclaimer } from './components/Disclaimer';
import { Footer } from './components/Footer';
import { BrandCustomizerModal } from './components/BrandCustomizerModal';
import { QrCodeModal } from './components/QrCodeModal';
import { LegalModal } from './components/LegalModal';
import { Toast } from './components/Toast';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [brand, setBrand] = useState<BrandConfig>(() => {
    try {
      const saved = localStorage.getItem('tg_landing_brand_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.channelName || parsed.channelName === 'Apex Alpha Signals' || parsed.telegramLink !== 'https://t.me/+zHOa4twaCLoyNmY1' || !parsed.logoUrl || parsed.logoUrl !== DEFAULT_BRAND_CONFIG.logoUrl) {
          return DEFAULT_BRAND_CONFIG;
        }
        return { ...DEFAULT_BRAND_CONFIG, ...parsed };
      }
    } catch {
      // ignore
    }
    return DEFAULT_BRAND_CONFIG;
  });

  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3000);
  };

  const handleSaveBrand = (newConfig: BrandConfig) => {
    setBrand(newConfig);
    try {
      localStorage.setItem('tg_landing_brand_config', JSON.stringify(newConfig));
    } catch {
      // ignore
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050914] text-slate-100 selection:bg-sky-500/30 selection:text-white flex flex-col font-sans">
      {/* Sticky Header */}
      <Header
        brand={brand}
        onOpenCustomizer={() => setActiveModal('customize')}
        onOpenQr={() => setActiveModal('qrcode')}
      />

      {/* Main Page Flow */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-2 sm:px-4">
        {/* Hero Section */}
        <Hero
          brand={brand}
          onShowToast={showToast}
          onOpenQr={() => setActiveModal('qrcode')}
        />

        {/* Features Section */}
        <Features brand={brand} />

        {/* Social Proof Section */}
        <SocialProof brand={brand} />

        {/* Channel Feed Live Preview */}
        <ChannelPreview
          brand={brand}
          onShowToast={showToast}
        />

        {/* CTA Section */}
        <CtaSection
          brand={brand}
          onOpenQr={() => setActiveModal('qrcode')}
        />

        {/* Risk & Compliance Disclaimer */}
        <Disclaimer />
      </main>

      {/* Footer */}
      <Footer
        brand={brand}
        onOpenModal={(type) => setActiveModal(type)}
      />

      {/* Mobile Sticky CTA Bar */}
      <MobileStickyBar brand={brand} />

      {/* Interactive Modals */}
      <BrandCustomizerModal
        isOpen={activeModal === 'customize'}
        onClose={() => setActiveModal(null)}
        brand={brand}
        onSave={handleSaveBrand}
        onShowToast={showToast}
      />

      <QrCodeModal
        isOpen={activeModal === 'qrcode'}
        onClose={() => setActiveModal(null)}
        brand={brand}
        onShowToast={showToast}
      />

      <LegalModal
        type={activeModal}
        onClose={() => setActiveModal(null)}
        brand={brand}
      />

      {/* Floating Feedback Toast */}
      <Toast message={toastMessage} />
    </div>
  );
}
