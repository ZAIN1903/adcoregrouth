import React, { useState } from 'react';
import { TelegramIcon } from './TelegramIcon';
import { BrandConfig, SamplePost } from '../types';
import { INITIAL_SAMPLE_POST } from '../constants';
import { Pin, Eye, Share2, Volume2, ShieldCheck, Sparkles } from 'lucide-react';

interface ChannelPreviewProps {
  brand: BrandConfig;
  onShowToast: (message: string) => void;
}

export const ChannelPreview: React.FC<ChannelPreviewProps> = ({ brand, onShowToast }) => {
  const [post, setPost] = useState<SamplePost>(INITIAL_SAMPLE_POST);
  const [userReacted, setUserReacted] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleReaction = (type: 'fire' | 'rocket' | 'lightbulb' | 'thumbsUp') => {
    if (userReacted === type) {
      setPost((prev) => ({
        ...prev,
        reactions: {
          ...prev.reactions,
          [type]: prev.reactions[type] - 1,
        },
      }));
      setUserReacted(null);
    } else {
      setPost((prev) => ({
        ...prev,
        reactions: {
          ...prev.reactions,
          ...(userReacted ? { [userReacted]: prev.reactions[userReacted as keyof typeof prev.reactions] - 1 } : {}),
          [type]: prev.reactions[type] + 1,
        },
      }));
      setUserReacted(type);
      onShowToast(`Reacted with ${type === 'fire' ? '🔥' : type === 'rocket' ? '🚀' : type === 'lightbulb' ? '💡' : '👍'}!`);
    }
  };

  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
    onShowToast(isPlayingAudio ? 'Audio briefing paused' : 'Playing 45s audio debrief...');
  };

  return (
    <section id="preview" className="relative py-12 sm:py-16 text-center">
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Section Header */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-sky-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INSIDE THE CHANNEL</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-2"
            style={{ textWrap: 'balance' }}
          >
            See What Members Receive Daily
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            High-signal broadcasts, educational charts, and priority updates formatted for quick action.
          </p>
        </div>

        {/* Telegram Chat Mockup (Centered) */}
        <div className="w-full rounded-3xl p-1 bg-gradient-to-b from-white/10 via-white/5 to-white/5 shadow-2xl backdrop-blur-xl">
          <div className="rounded-[22px] bg-[#0E1628] border border-white/10 overflow-hidden shadow-2xl text-left">
            {/* Mock Channel Top Bar */}
            <div className="px-4 py-3 bg-[#121C33] border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm border border-sky-400/40">
                  {brand.logoUrl ? (
                    <img
                      src={brand.logoUrl}
                      alt={brand.channelName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <TelegramIcon className="w-5 h-5 text-white" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                      {brand.channelName}
                    </span>
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-400 inline" />
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {brand.memberCount.toLocaleString()} subscribers
                  </div>
                </div>
              </div>

              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-400/20">
                LIVE BROADCAST
              </span>
            </div>

            {/* Telegram Message Body */}
            <div className="p-4 sm:p-6 space-y-3.5">
              {/* Pinned notice banner */}
              <div className="flex items-center gap-2 text-xs text-sky-400/90 font-medium pb-2 border-b border-white/[0.06]">
                <Pin className="w-3.5 h-3.5 rotate-45 text-sky-400" />
                <span>Pinned Broadcast: Priority Alpha Briefing</span>
              </div>

              {/* Message bubble */}
              <div className="rounded-2xl bg-[#17233F]/90 border border-white/[0.08] p-4 text-slate-200 shadow-md">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2.5">
                  <span className="font-semibold text-sky-400">{brand.channelName}</span>
                  <span className="font-mono text-[10px]">Today at 08:30 AM</span>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line text-slate-200 font-normal mb-3">
                  {post.content}
                </p>

                {/* Interactive Audio Note Mock */}
                <div
                  onClick={toggleAudio}
                  className="cursor-pointer mb-3 p-2.5 rounded-xl bg-[#0F182E] border border-white/10 flex items-center justify-between hover:border-sky-400/40 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-all">
                      <Volume2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Audio Debrief: Volatility Outlook</div>
                      <div className="text-[10px] text-slate-400">0:45 min • Head Analyst Recording</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-sky-400">
                    {isPlayingAudio ? 'Playing...' : 'Play Audio'}
                  </span>
                </div>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-2 text-[11px] text-sky-400/80 font-mono mb-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="hover:text-sky-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer inside message */}
                <div className="flex items-center justify-between pt-2.5 border-t border-white/[0.06] text-[11px] text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{post.metrics.views}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Share2 className="w-3 h-3" />
                      <span>{post.metrics.shares}</span>
                    </span>
                  </div>

                  <span className="text-[10px] text-slate-500">Official Channel Post</span>
                </div>
              </div>

              {/* Interactive Reactions */}
              <div>
                <div className="text-[11px] text-slate-400 mb-1.5 font-medium">Click to test reaction counter:</div>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => handleReaction('fire')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                      userReacted === 'fire'
                        ? 'bg-orange-500/20 border-orange-400 text-orange-300 ring-2 ring-orange-500/30'
                        : 'bg-white/[0.04] border-white/10 text-slate-300 hover:border-orange-400/40'
                    }`}
                  >
                    <span>🔥</span>
                    <span className="font-mono tabular-nums">{post.reactions.fire}</span>
                  </button>

                  <button
                    onClick={() => handleReaction('rocket')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                      userReacted === 'rocket'
                        ? 'bg-sky-500/20 border-sky-400 text-sky-300 ring-2 ring-sky-500/30'
                        : 'bg-white/[0.04] border-white/10 text-slate-300 hover:border-sky-400/40'
                    }`}
                  >
                    <span>🚀</span>
                    <span className="font-mono tabular-nums">{post.reactions.rocket}</span>
                  </button>

                  <button
                    onClick={() => handleReaction('lightbulb')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                      userReacted === 'lightbulb'
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300 ring-2 ring-amber-500/30'
                        : 'bg-white/[0.04] border-white/10 text-slate-300 hover:border-amber-400/40'
                    }`}
                  >
                    <span>💡</span>
                    <span className="font-mono tabular-nums">{post.reactions.lightbulb}</span>
                  </button>

                  <button
                    onClick={() => handleReaction('thumbsUp')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                      userReacted === 'thumbsUp'
                        ? 'bg-blue-500/20 border-blue-400 text-blue-300 ring-2 ring-blue-500/30'
                        : 'bg-white/[0.04] border-white/10 text-slate-300 hover:border-blue-400/40'
                    }`}
                  >
                    <span>👍</span>
                    <span className="font-mono tabular-nums">{post.reactions.thumbsUp}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Channel Join Bar */}
            <div className="p-3.5 bg-[#0A1122] border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-[11px] text-slate-400">Join to read full post archive</span>
              <a
                href={brand.telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-sky-500 hover:bg-sky-400 transition-colors shadow-md shadow-sky-500/30"
              >
                JOIN TELEGRAM
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
