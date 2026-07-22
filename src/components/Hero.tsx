import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowRight, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ContentReveal } from './ContentReveal';
import { TextPressure } from './TextPressure';

export const Hero: React.FC = () => {
  const { name, role, bio, contacts } = PORTFOLIO_DATA.hero;

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Status Pill */}
        <ContentReveal delay={0.1}>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#141518] border border-[#4A4A4A] mb-8 shadow-lg hover:border-[#8DA4BE] transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFFFE3] animate-pulse" />
            <span className="text-sm sm:text-base md:text-lg font-mono font-bold tracking-wide text-[#FFFFE3]">
              AVAILABLE FOR NEW OPPORTUNITIES &amp; APPRENTICESHIP
            </span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#8DA4BE]" />
          </div>
        </ContentReveal>

        {/* Name — TextPressure interactive component */}
        <ContentReveal delay={0.2}>
          <div className="relative h-[90px] sm:h-[130px] md:h-[160px] w-full mb-4 flex items-center justify-center overflow-hidden">
            <div className="w-full text-pressure-flex">
              <TextPressure
                text={name}
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={false}
                textColor="#FFFFE3"
                minFontSize={36}
              />
            </div>
          </div>
        </ContentReveal>

        {/* Role */}
        <ContentReveal delay={0.3}>
          <p className="text-base sm:text-lg md:text-xl font-mono font-bold text-[#A1B8D6] mb-6 tracking-tight">
            {role}
          </p>
        </ContentReveal>

        {/* Bio */}
        <ContentReveal delay={0.4}>
          <p className="text-base sm:text-lg md:text-xl font-medium text-[#FFFFE3] max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-sm">
            {bio}
          </p>
        </ContentReveal>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#FFFFE3] text-[#141518] font-mono font-bold text-sm hover:bg-[#FFFFE3]/90 hover:shadow-lg hover:shadow-[#FFFFE3]/10 transition-all"
          >
            <span>Jelajahi Proyek Unggulan</span>
            <ArrowRight size={16} />
          </a>
          <a
            href={contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#141518] border border-[#4A4A4A] text-[#FFFFE3] font-mono font-medium text-sm hover:border-[#8DA4BE] transition-all"
          >
            <LinkedinIcon size={16} className="text-[#8DA4BE]" />
            <span>Connect &amp; Message Me</span>
          </a>

          {/* Icon links */}
          <div className="flex items-center gap-2 pl-2 border-l border-[#4A4A4A]/60">
            <a
              href={contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl bg-[#141518] border border-[#4A4A4A] text-[#CBCBCB] hover:text-[#FFFFE3] hover:border-[#8DA4BE] transition-all"
            >
              <GithubIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
