import { BrandConfig, FeatureItem, SamplePost } from './types';

export const DEFAULT_BRAND_CONFIG: BrandConfig = {
  channelName: 'Ad Core Agency',
  agencyName: 'Ad Core Agency',
  telegramLink: 'https://t.me/+zHOa4twaCLoyNmY1',
  channelHandle: '@adcoreagency',
  memberCount: 240,
  badgeText: 'TELEGRAM CHANNEL',
  tagline: '',
  logoUrl: 'https://i.postimg.cc/HnnZT1wH/photo-6201507642841175941-y.jpg',
};

export const FEATURES: FeatureItem[] = [
  {
    id: 'daily-updates',
    title: 'DAILY UPDATES',
    description: 'Stay updated with regular market insights and channel updates delivered straight to your feed every morning.',
    iconName: 'zap',
    highlight: 'Daily at 07:00 UTC',
  },
  {
    id: 'exclusive-content',
    title: 'EXCLUSIVE CONTENT',
    description: 'Access content and posts shared exclusively with our Telegram community that are never published anywhere else.',
    iconName: 'shield',
    highlight: 'Members-Only Feeds',
  },
  {
    id: 'fast-updates',
    title: 'FAST UPDATES',
    description: 'Get important updates directly on Telegram without missing announcements or market-shifting news alerts.',
    iconName: 'bell',
    highlight: 'Instant Push Alerts',
  },
  {
    id: 'community',
    title: 'COMMUNITY',
    description: 'Join a growing community and stay connected with the latest information, strategies, and key milestones.',
    iconName: 'users',
    highlight: '200+ Active Network',
  },
];

export const INITIAL_SAMPLE_POST: SamplePost = {
  id: 'post-1',
  author: 'Ad Core Agency',
  handle: '@adcoreagency',
  time: 'Just now',
  badge: 'PINNED BROADCAST',
  content: '🎯 Market Briefing & Key Trigger Points:\n\n• High timeframe structural support holding steady.\n• Volume surge detected in primary liquidity pools.\n• Risk parameters updated: maintain 1:3 reward ratio.\n\nFull visual breakdown and audio debrief attached below for all members.',
  tags: ['#MarketInsights', '#AlphaBreakdown', '#WeeklyOutlook'],
  metrics: {
    views: '4.8K',
    shares: '312',
  },
  reactions: {
    fire: 142,
    rocket: 98,
    lightbulb: 47,
    thumbsUp: 85,
  },
};

export const CHANNEL_METRICS = [
  { label: 'Verified Community', value: '200+', sublabel: 'Active Telegram subscribers' },
  { label: 'Weekly Signals & Briefs', value: '18+', sublabel: 'High-conviction market notes' },
  { label: 'Avg Notification Latency', value: '< 2s', sublabel: 'Direct to Telegram app' },
  { label: 'Free Access Tier', value: '100%', sublabel: 'No paywalls or hidden fees' },
];

export const DISCLAIMER_TEXT =
  'This channel is for informational and educational purposes only. Nothing on this website or Telegram channel should be considered financial advice. Trading and investing involve risk.';
