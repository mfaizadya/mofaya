import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Cpu, Wrench, Users } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { ContentReveal } from './ContentReveal';

export const SkillsSection: React.FC = () => {
  const { hardSkills, toolsAndCloud, softSkills } = PORTFOLIO_DATA.skills;

  const categories = [
    {
      title: 'Hard Skills & Languages',
      icon: <Cpu className="text-[#FFFFE3]" size={20} />,
      items: hardSkills,
      description: 'Bahasa pemrograman & framework inti'
    },
    {
      title: 'Tools, Cloud & DevOps',
      icon: <Wrench className="text-[#8DA4BE]" size={20} />,
      items: toolsAndCloud,
      description: 'Infrastruktur cloud, CI/CD, dan alat desain'
    },
    {
      title: 'Soft Skills & Leadership',
      icon: <Users className="text-[#CBCBCB]" size={20} />,
      items: softSkills,
      description: 'Keahlian kolaborasi tim & manajemen proyek'
    }
  ];

  return (
    <section id="skills" className="py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#141518] border border-[#4A4A4A] mb-4">
          <span className="text-sm sm:text-base md:text-lg font-mono font-bold text-[#FFFFE3] tracking-wide">TECHNICAL PROFICIENCY</span>
        </div>
        <ScrollReveal
          as="h2"
          baseOpacity={0.05}
          baseRotation={5}
          blurStrength={10}
          textClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#FFFFE3] tracking-tight leading-none mt-1"
        >
          Keahlian Teknis & Kompetensi
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <ContentReveal key={cat.title} delay={idx * 0.12} className="h-full">
            <div
              className="bg-[#141518] border border-[#4A4A4A]/70 hover:border-[#8DA4BE] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all h-full"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-[#1D1E22] border border-[#4A4A4A]">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#FFFFE3]">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#FFFFE3]/90">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-[#0D0E10] border border-[#4A4A4A]/60 text-[#FFFFE3] text-xs sm:text-sm font-mono font-bold hover:border-[#8DA4BE] transition-colors"
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
