import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none animate-bounce-short">
      <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-[#091530] border border-sky-400/40 text-white shadow-2xl text-xs sm:text-sm font-medium glow-blue-sm">
        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
        <span>{message}</span>
      </div>
    </div>
  );
};
