import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Trophy, Sparkles, ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { ContentReveal } from './ContentReveal';

export const AchievementsSection: React.FC = () => {
  const { achievements } = PORTFOLIO_DATA;

  if (!achievements || achievements.length === 0) return null;

  return (
    <section id="achievements" className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#4A4A4A]/40 relative">
      {/* Section Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#141518] border border-[#4A4A4A] mb-4">
          <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[#8DA4BE]" />
          <span className="text-sm sm:text-base md:text-lg font-mono font-bold text-[#FFFFE3] tracking-wide">HONORS &amp; RECOGNITION</span>
        </div>
        <ScrollReveal
          as="h2"
          baseOpacity={0.05}
          baseRotation={5}
          blurStrength={10}
          textClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#FFFFE3] tracking-tight leading-none mt-1"
        >
          Prestasi &amp; Penghargaan
        </ScrollReveal>
      </div>

      {/* Achievements Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item, idx) => (
          <ContentReveal key={item.id} delay={idx * 0.15}>
            <div
              className="group h-full flex flex-col justify-between bg-[#141518] border border-[#4A4A4A]/70 hover:border-[#FFFFE3]/60 rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#FFFFE3]/5 relative overflow-hidden"
            >
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFFFE3]/5 blur-3xl pointer-events-none rounded-full group-hover:bg-[#FFFFE3]/10 transition-all" />

              <div>
                {/* Header tags: Year & Award badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded bg-[#1D1E22] text-[#A1B8D6] text-xs sm:text-sm font-mono font-bold border border-[#4A4A4A]/40">
                    {item.year}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFE3]/10 border border-[#FFFFE3]/20 text-[#FFFFE3] text-xs sm:text-sm font-mono font-bold tracking-wide">
                    <Sparkles size={12} className="text-[#FFFFE3]" />
                    {item.award}
                  </span>
                </div>

                {/* Title & Event */}
                <h3 className="text-xl sm:text-2xl font-black text-[#FFFFE3] group-hover:text-[#A1B8D6] transition-colors mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono font-bold text-[#A1B8D6] mb-4">
                  {item.event}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base font-medium text-[#FFFFE3]/90 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Trophy icon decoration & optional Certificate link */}
              <div className="pt-5 mt-4 border-t border-[#4A4A4A]/30 flex items-center justify-between text-xs font-mono">
                {item.certificateUrl || item.imageUrl ? (
                  <a
                    href={item.certificateUrl || item.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFFFE3]/10 border border-[#FFFFE3]/20 text-[#FFFFE3] hover:bg-[#FFFFE3] hover:text-[#141518] font-bold transition-all shadow-sm"
                  >
                    <span>Lihat Sertifikat</span>
                    <ExternalLink size={13} />
                  </a>
                ) : (
                  <span className="text-[#CBCBCB]/60">Verified Achievement</span>
                )}
                <Trophy size={16} className="text-[#4A4A4A] group-hover:text-[#FFFFE3] transition-colors" />
              </div>
            </div>
          </ContentReveal>
        ))}
      </div>
    </section>
  );
};
