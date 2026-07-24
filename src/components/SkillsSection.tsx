import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Cpu, Wrench, Users } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { ContentReveal } from './ContentReveal';
import { useLanguage } from '../context/LanguageContext';

export const SkillsSection: React.FC = () => {
  const { lang } = useLanguage();
  const currentData = PORTFOLIO_DATA[lang];
  const { skills, labels } = currentData;

  const categories = [
    {
      title: skills.hardSkillsTitle,
      icon: <Cpu className="text-ink-ivory" size={20} />,
      items: skills.hardSkills,
      description: skills.hardSkillsDesc
    },
    {
      title: skills.toolsTitle,
      icon: <Wrench className="text-ink-blue" size={20} />,
      items: skills.toolsAndCloud,
      description: skills.toolsDesc
    },
    {
      title: skills.softSkillsTitle,
      icon: <Users className="text-ink-silver" size={20} />,
      items: skills.softSkills,
      description: skills.softSkillsDesc
    }
  ];

  return (
    <section id="skills" className="py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-ink-surface border border-ink-charcoal mb-4">
          <span className="text-sm sm:text-base md:text-lg font-mono font-bold text-ink-ivory tracking-wide">{labels.skills.badge}</span>
        </div>
        <ScrollReveal
          as="h2"
          baseOpacity={0.05}
          baseRotation={5}
          blurStrength={10}
          textClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-ink-ivory tracking-tight leading-none mt-1"
        >
          {labels.skills.title}
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <ContentReveal key={cat.title} delay={idx * 0.12} className="h-full">
            <div
              className="bg-ink-surface border border-ink-charcoal/70 hover:border-ink-blue rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all h-full"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-ink-card border border-ink-charcoal">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-ink-ivory">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-ink-ivory/90">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-ink-bg border border-ink-charcoal/60 text-ink-ivory text-xs sm:text-sm font-mono font-bold hover:border-ink-blue transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ContentReveal>
        ))}
      </div>
    </section>
  );
};
