import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { ContentReveal } from './ContentReveal';

export const Certifications: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-ink-charcoal/40">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-ink-surface border border-ink-charcoal mb-4">
          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-ink-blue" />
          <span className="text-sm sm:text-base md:text-lg font-mono font-bold text-ink-ivory tracking-wide">OFFICIAL CREDENTIALS</span>
        </div>
        <ScrollReveal
          as="h2"
          baseOpacity={0.05}
          baseRotation={5}
          blurStrength={10}
          textClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-ink-ivory tracking-tight leading-none mt-1"
        >
          Sertifikasi Resmi
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certifications.map((cert, index) => {
          const CardContent = (
            <div
              className={`group flex items-start justify-between gap-4 p-5 rounded-xl bg-ink-surface border border-ink-charcoal/60 hover:border-ink-ivory/50 transition-all ${
                cert.credentialUrl ? 'cursor-pointer hover:shadow-lg hover:shadow-ink-ivory/5' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-ink-card text-ink-blue group-hover:text-ink-ivory transition-colors shrink-0">
                  <Award size={22} />
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded bg-ink-card text-xs sm:text-sm font-mono font-bold text-ink-blue border border-ink-charcoal/40 mb-1.5">
                    {cert.year}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-black text-ink-ivory group-hover:text-ink-blue transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono font-bold text-ink-silver mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>
              {cert.credentialUrl && (
                <div className="text-ink-blue group-hover:text-ink-ivory transition-colors shrink-0 pt-1">
                  <ExternalLink size={16} />
                </div>
              )}
            </div>
          );

          return (
            <ContentReveal key={cert.id} delay={index * 0.1}>
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {CardContent}
                </a>
              ) : (
                CardContent
              )}
            </ContentReveal>
          );
        })}
      </div>
    </section>
  );
};
