import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Cpu } from 'lucide-react';

export const TechMarquee: React.FC = () => {
  const items = PORTFOLIO_DATA.techMarquee;
  const doubledItems = [...items, ...items];

  return (
    <section className="py-8 border-y border-[#4A4A4A]/40 bg-[#141518]/50 overflow-hidden relative">
      {/* Left/Right fading gradient mask */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0D0E10] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0D0E10] to-transparent z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 flex items-center gap-2.5">
        <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-[#8DA4BE]" />
        <span className="text-sm sm:text-base md:text-lg font-mono font-bold text-[#FFFFE3] uppercase tracking-wider">
          PRIMARY TECHNOLOGY STACK &amp; TOOLS
        </span>
      </div>

      <div className="animate-marquee gap-3 py-1">
        {doubledItems.map((tech, idx) => (
          <div
            key={`${tech}-${idx}`}
            className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-[#141518] border border-[#4A4A4A]/70 hover:border-[#8DA4BE] transition-colors shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8DA4BE]" />
            <span className="text-sm sm:text-base font-mono font-bold text-[#FFFFE3] tracking-tight">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
