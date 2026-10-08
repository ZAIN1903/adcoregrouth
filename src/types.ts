export interface BrandConfig {
  channelName: string;
  agencyName: string;
  telegramLink: string;
  channelHandle: string;
  memberCount: number;
  badgeText: string;
  tagline: string;
  logoUrl: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: 'zap' | 'shield' | 'bell' | 'users' | 'trending-up' | 'lock';
  highlight: string;
}

export interface SamplePost {
  id: string;
  author: string;
  handle: string;
  time: string;
  badge?: string;
  content: string;
  tags: string[];
  metrics: {
    views: string;
    shares: string;
  };
  reactions: {
    fire: number;
    rocket: number;
    lightbulb: number;
    thumbsUp: number;
  };
}

export type ModalType = 'customize' | 'qrcode' | 'privacy' | 'disclaimer' | 'contact' | null;
