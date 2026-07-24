import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowRight, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ContentReveal } from './ContentReveal';
import { TextPressure } from './TextPressure';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { lang } = useLanguage();
  const { name, role, bio, statusPill, ctaExplore, contacts } = PORTFOLIO_DATA[lang].hero;
  const { theme } = useTheme();

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Status Pill */}
        <ContentReveal delay={0.1}>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-ink-surface border border-ink-charcoal mb-8 shadow-lg hover:border-ink-blue transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-ink-ivory animate-pulse" />
            <span className="text-sm sm:text-base md:text-lg font-mono font-bold tracking-wide text-ink-ivory">
              {statusPill}
            </span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-ink-blue" />
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
                gradient={true}
                gradientColors={
                  theme === 'light'
                    ? 'linear-gradient(90deg, #0D0E10 0%, #3D5A80 40%, #0D0E10 75%, #5A6270 100%)'
                    : 'linear-gradient(90deg, #FFFFE3 0%, #8DA4BE 40%, #FFFFE3 75%, #A1B8D6 100%)'
                }
                textColor={theme === 'light' ? '#0D0E10' : '#FFFFE3'}
                minFontSize={36}
              />
            </div>
          </div>
        </ContentReveal>

        {/* Role */}
        <ContentReveal delay={0.3}>
          <p className="text-base sm:text-lg md:text-xl font-mono font-bold text-ink-blue mb-6 tracking-tight">
            {role}
          </p>
        </ContentReveal>

        {/* Bio */}
        <ContentReveal delay={0.4}>
          <p className="text-base sm:text-lg md:text-xl font-medium text-ink-ivory max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-sm">
            {bio}
          </p>
        </ContentReveal>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-ink-ivory text-ink-surface font-mono font-bold text-sm hover:bg-ink-ivory/90 hover:shadow-lg hover:shadow-ink-ivory/10 transition-all"
          >
            <span>{ctaExplore}</span>
            <ArrowRight size={16} />
          </a>
          <a
            href={contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-ink-surface border border-ink-charcoal text-ink-ivory font-mono font-medium text-sm hover:border-ink-blue transition-all"
          >
            <LinkedinIcon size={16} className="text-ink-blue" />
            <span>Connect &amp; Message Me</span>
          </a>

          {/* Icon links */}
          <div className="flex items-center gap-2 pl-2 border-l border-ink-charcoal/60">
            <a
              href={contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl bg-ink-surface border border-ink-charcoal text-ink-silver hover:text-ink-ivory hover:border-ink-blue transition-all"
            >
              <GithubIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
