export const trackTelegramJoin = () => {
  if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
    try {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Join Telegram Channel',
        value: 1,
        currency: 'USD',
      });
    } catch {
      // ignore error
    }
  }
};
