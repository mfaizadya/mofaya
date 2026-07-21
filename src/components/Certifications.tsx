import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { ContentReveal } from './ContentReveal';

export const Certifications: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#4A4A4A]/40">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141518] border border-[#4A4A4A] mb-3">
          <Award size={14} className="text-[#6D8196]" />
          <span className="text-xs font-mono text-[#CBCBCB]">OFFICIAL CREDENTIALS</span>
        </div>
        <ScrollReveal
          as="h2"
          baseOpacity={0.05}
          baseRotation={5}
          blurStrength={10}
          textClassName="text-3xl sm:text-4xl font-extrabold text-[#FFFFE3] tracking-tight"
        >
          Sertifikasi Resmi
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certifications.map((cert, index) => {
          const CardContent = (
            <div
              className={`group flex items-start justify-between gap-4 p-5 rounded-xl bg-[#141518] border border-[#4A4A4A]/60 hover:border-[#FFFFE3]/50 transition-all ${
                cert.credentialUrl ? 'cursor-pointer hover:shadow-lg hover:shadow-[#FFFFE3]/5' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#1D1E22] text-[#6D8196] group-hover:text-[#FFFFE3] transition-colors shrink-0">
                  <Award size={22} />
                </div>
                <div>
                  <span className="inline-block px-2 py-0.5 rounded bg-[#1D1E22] text-[10px] font-mono text-[#6D8196] border border-[#4A4A4A]/40 mb-1.5">
                    {cert.year}
                  </span>
                  <h3 className="text-base font-bold text-[#FFFFE3] group-hover:text-[#6D8196] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-[#CBCBCB] mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>
              {cert.credentialUrl && (
                <div className="text-[#6D8196] group-hover:text-[#FFFFE3] transition-colors shrink-0 pt-1">
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
