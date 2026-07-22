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
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-ink-surface border border-ink-charcoal mb-4">
          <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-ink-blue" />
          <span className="text-sm sm:text-base md:text-lg font-mono font-bold text-ink-ivory tracking-wide">CAREER &amp; APPRENTICESHIP TIMELINE</span>
        </div>
        <ScrollReveal
          as="h2"
          baseOpacity={0.05}
          baseRotation={5}
          blurStrength={10}
          textClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-ink-ivory tracking-tight leading-none mt-1"
        >
          Pengalaman & Apprenticeship
        </ScrollReveal>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-ink-charcoal space-y-6 mb-10">
        {experiences.map((exp, index) => (
          <ContentReveal key={exp.id} delay={index * 0.12}>
            <div className="relative group">
              {/* Timeline Dot */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-ink-surface border-2 border-ink-blue group-hover:bg-ink-blue transition-colors" />

              <div className="bg-ink-surface border border-ink-charcoal/70 hover:border-ink-blue rounded-2xl p-6 sm:p-8 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-ink-card text-ink-blue text-xs sm:text-sm font-mono font-bold border border-ink-charcoal/40">
                      {exp.type}
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-semibold text-ink-ivory/90 flex items-center gap-1">
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-ink-ivory mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm sm:text-base font-mono font-bold text-ink-blue mb-4">
                  {exp.organization}
                </p>

                <p className="text-sm sm:text-base font-medium text-ink-ivory/90 leading-relaxed mb-5">
                  {exp.description}
                </p>

                {exp.highlights && (
                  <ul className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base font-medium text-ink-ivory/90">
                        <CheckCircle2 size={16} className="text-ink-blue shrink-0 mt-0.5" />
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
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-ink-surface border border-ink-charcoal mb-4">
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-ink-blue" />
            <span className="text-sm sm:text-base md:text-lg font-mono font-bold text-ink-ivory tracking-wide">ACADEMIC BACKGROUND</span>
          </div>
          <ScrollReveal
            as="h3"
            baseOpacity={0.05}
            baseRotation={5}
            blurStrength={10}
            textClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-ink-ivory tracking-tight leading-none mt-1"
          >
            Pendidikan
          </ScrollReveal>
        </div>

        <ContentReveal delay={0.15}>
          <div className="bg-ink-surface border border-ink-charcoal hover:border-ink-blue rounded-2xl p-6 sm:p-8 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-ink-ivory">
                {education.institution}
              </h4>
              <span className="text-xs sm:text-sm font-mono text-ink-blue font-bold px-3 py-1 rounded bg-ink-card border border-ink-charcoal/40">
                IPK {education.gpa}
              </span>
            </div>
            <p className="text-sm sm:text-base font-mono font-bold text-ink-ivory mb-2">
              {education.degree}
            </p>
            <p className="text-xs sm:text-sm font-mono font-semibold text-ink-ivory/90 mb-4 flex items-center gap-1.5">
              <Calendar size={13} />
              {education.period}
            </p>
            <div className="pt-4 border-t border-ink-charcoal/50">
              <span className="text-xs sm:text-sm font-mono font-bold text-ink-blue uppercase tracking-wider block mb-1">
                Aktivitas &amp; Kontribusi
              </span>
              <p className="text-sm sm:text-base font-medium text-ink-ivory/90">
                {education.activities}
              </p>
            </div>
          </div>
        </ContentReveal>
      </div>
    </section>
  );
};
