import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, GraduationCap, CheckCircle2, Calendar } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { ContentReveal } from './ContentReveal';

export const ExperienceSection: React.FC = () => {
  const { experiences, education } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Experience Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141518] border border-[#4A4A4A] mb-3">
          <Briefcase size={14} className="text-[#6D8196]" />
          <span className="text-xs font-mono text-[#CBCBCB]">CAREER &amp; APPRENTICESHIP TIMELINE</span>
        </div>
        <ScrollReveal
          as="h2"
          baseOpacity={0.05}
          baseRotation={5}
          blurStrength={10}
          textClassName="text-3xl sm:text-4xl font-extrabold text-[#FFFFE3] tracking-tight"
        >
          Pengalaman & Apprenticeship
        </ScrollReveal>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-[#4A4A4A] space-y-6 mb-10">
        {experiences.map((exp, index) => (
          <ContentReveal key={exp.id} delay={index * 0.12}>
            <div className="relative group">
              {/* Timeline Dot */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#141518] border-2 border-[#6D8196] group-hover:bg-[#6D8196] transition-colors" />

              <div className="bg-[#141518] border border-[#4A4A4A]/70 hover:border-[#6D8196] rounded-2xl p-6 sm:p-8 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#1D1E22] text-[#6D8196] text-xs font-mono font-semibold border border-[#4A4A4A]/40">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-[#CBCBCB] flex items-center gap-1">
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#FFFFE3] mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm font-mono text-[#6D8196] font-semibold mb-4">
                  {exp.organization}
                </p>

                <p className="text-sm text-[#CBCBCB] leading-relaxed mb-5">
                  {exp.description}
                </p>

                {exp.highlights && (
                  <ul className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[#CBCBCB]">
                        <CheckCircle2 size={16} className="text-[#6D8196] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </ContentReveal>
        ))}
      </div>

      {/* Education Block */}
      <div className="mt-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141518] border border-[#4A4A4A] mb-3">
            <GraduationCap size={14} className="text-[#6D8196]" />
            <span className="text-xs font-mono text-[#CBCBCB]">ACADEMIC BACKGROUND</span>
          </div>
          <ScrollReveal
            as="h3"
            baseOpacity={0.05}
            baseRotation={5}
            blurStrength={10}
            textClassName="text-2xl sm:text-3xl font-extrabold text-[#FFFFE3]"
          >
            Pendidikan
          </ScrollReveal>
        </div>

        <ContentReveal delay={0.15}>
          <div className="bg-[#141518] border border-[#4A4A4A] hover:border-[#6D8196] rounded-2xl p-6 sm:p-8 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <h4 className="text-xl sm:text-2xl font-bold text-[#FFFFE3]">
                {education.institution}
              </h4>
              <span className="text-xs font-mono text-[#6D8196] font-semibold px-3 py-1 rounded bg-[#1D1E22] border border-[#4A4A4A]/40">
                IPK {education.gpa}
              </span>
            </div>
            <p className="text-sm sm:text-base font-mono text-[#CBCBCB] mb-2">
              {education.degree}
            </p>
            <p className="text-xs font-mono text-[#CBCBCB] mb-4 flex items-center gap-1.5">
              <Calendar size={13} />
              {education.period}
            </p>
            <div className="pt-4 border-t border-[#4A4A4A]/50">
              <span className="text-xs font-mono text-[#6D8196] uppercase tracking-wider block mb-1">
                Aktivitas &amp; Kontribusi
              </span>
              <p className="text-sm text-[#CBCBCB]">
                {education.activities}
              </p>
            </div>
          </div>
        </ContentReveal>
      </div>
    </section>
  );
};
