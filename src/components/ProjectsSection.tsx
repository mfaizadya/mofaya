import React, { useState } from 'react';
import { PORTFOLIO_DATA, type ProjectItem } from '../data/portfolioData';
import { ExternalLink, Terminal, X, CheckCircle2, GitCommit, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';
import { ContentReveal } from './ContentReveal';
import { ScrollStack, ScrollStackItem } from './ScrollStack';

const categories = ['Semua', 'AI/ML', 'Fullstack', 'Game Dev', 'Web Dev'] as const;

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = selectedCategory === 'Semua'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#141518] border border-[#4A4A4A] mb-4">
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-[#8DA4BE]" />
            <span className="text-sm sm:text-base md:text-lg font-mono font-bold text-[#FFFFE3] tracking-wide">FEATURED WORK &amp; CAPSTONE</span>
          </div>
          <ScrollReveal
            as="h2"
            baseOpacity={0.05}
            baseRotation={5}
            blurStrength={10}
            textClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#FFFFE3] tracking-tight leading-none mt-1"
          >
            Proyek Unggulan
          </ScrollReveal>
        </div>

        {/* Filter Pills */}
        <ContentReveal delay={0.15}>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                    isActive
                      ? 'bg-[#8DA4BE] text-[#FFFFE3] shadow-md shadow-[#8DA4BE]/20'
                      : 'bg-[#141518] border border-[#4A4A4A] text-[#CBCBCB] hover:text-[#FFFFE3] hover:border-[#8DA4BE]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </ContentReveal>
      </div>

      {/* Projects Stack — self-contained scrollable area */}
      <div className="w-full max-w-5xl mx-auto" style={{ height: '88vh', minHeight: '760px' }}>
        <ScrollStack
          itemDistance={60}
          itemScale={0.03}
          itemStackDistance={20}
          stackPosition="10%"
          scaleEndPosition="4%"
          baseScale={0.92}
        >
          {filteredProjects.map((project) => (
            <ScrollStackItem
              key={project.id}
              itemClassName="group bg-[#141518] border border-[#4A4A4A]/70 hover:border-[#8DA4BE] overflow-hidden cursor-pointer transition-colors duration-300 shadow-xl hover:shadow-2xl"
            >
              <div onClick={() => setSelectedProject(project)}>
                {/* Top color-coded accent strip */}
                <div
                  className="h-2 w-full"
                  style={{ backgroundColor: project.accentStrip }}
                />

                {/* Optional Project Banner / Screenshot */}
                {project.imageUrl && (
                  <div className="w-full h-36 sm:h-44 overflow-hidden border-b border-[#4A4A4A]/50 relative group/img">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141518] via-[#141518]/20 to-transparent opacity-80" />
                  </div>
                )}

                <div className="px-6 py-5 sm:px-8 sm:py-6">
                  {/* Meta & Category tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1.5 rounded-md bg-[#1D1E22] text-[#A1B8D6] text-xs sm:text-sm font-mono font-bold border border-[#4A4A4A]/50">
                      {project.category}
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-semibold text-[#FFFFE3]/90">
                      {project.period}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h3 className="text-2xl sm:text-3xl font-black text-[#FFFFE3] group-hover:text-[#A1B8D6] transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base font-mono font-bold text-[#A1B8D6] mb-4">
                    {project.role}
                  </p>

                  {/* Summary */}
                  <p className="text-sm sm:text-base font-medium text-[#FFFFE3]/90 leading-relaxed mb-5 line-clamp-2">
                    {project.summary}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-[#0D0E10] text-[#CBCBCB] text-xs font-mono border border-[#4A4A4A]/40"
                      >
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2.5 py-1 rounded bg-[#0D0E10] text-[#CBCBCB] text-xs font-mono">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-[#4A4A4A]/40 flex items-center justify-between text-xs font-mono text-[#CBCBCB]">
                    <div className="flex items-center gap-1.5">
                      {project.metrics && (
                        <span className="flex items-center gap-1 text-[#FFFFE3]">
                          <GitCommit size={14} className="text-[#8DA4BE]" />
                          {project.metrics}
                        </span>
                      )}
                    </div>
                    <span className="text-[#A1B8D6] group-hover:underline flex items-center gap-1 font-semibold">
                      Detail Spesifikasi &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#141518] border border-[#4A4A4A] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Color Accent */}
            <div
              className="h-2 w-full rounded-t-2xl"
              style={{ backgroundColor: selectedProject.accentStrip }}
            />

            {/* Optional Modal Image Banner */}
            {selectedProject.imageUrl && (
              <div className="w-full h-60 sm:h-80 overflow-hidden border-b border-[#4A4A4A]/60 relative">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141518] via-transparent to-transparent opacity-60" />
              </div>
            )}

            <div className="p-6 sm:p-8">
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded-md bg-[#1D1E22] text-[#A1B8D6] text-xs sm:text-sm font-mono font-bold">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-semibold text-[#FFFFE3]/90">
                      {selectedProject.period}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FFFFE3]">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm sm:text-base font-mono font-bold text-[#A1B8D6] mt-1">
                    {selectedProject.role}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg bg-[#1D1E22] border border-[#4A4A4A] text-[#CBCBCB] hover:text-[#FFFFE3]"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Summary */}
              <div className="mb-6 p-4 rounded-xl bg-[#0D0E10] border border-[#4A4A4A]/50">
                <p className="text-sm sm:text-base md:text-lg font-medium text-[#FFFFE3] leading-relaxed">
                  {selectedProject.summary}
                </p>
              </div>

              {/* Contributions list */}
              <div className="mb-6">
                <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#FFFFE3] mb-3 flex items-center gap-1.5">
                  <Layers size={15} className="text-[#8DA4BE]" />
                  Kontribusi &amp; Dampak Teknis
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.contributions.map((c, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base font-medium text-[#FFFFE3]/90">
                      <CheckCircle2 size={16} className="text-[#8DA4BE] shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Technologies list */}
              <div className="mb-8">
                <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#FFFFE3] mb-3">
                  Tech Stack &amp; Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg bg-[#1D1E22] border border-[#4A4A4A] text-[#FFFFE3] text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#4A4A4A]">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFFFE3] text-[#0D0E10] font-mono font-bold text-xs hover:bg-[#FFFFE3]/90 transition-all"
                  >
                    <GithubIcon size={15} />
                    <span>Lihat Repository</span>
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8DA4BE] text-[#FFFFE3] font-mono font-bold text-xs hover:bg-[#8DA4BE]/90 transition-all"
                  >
                    <ExternalLink size={15} />
                    <span>Live Demo Website</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="ml-auto px-4 py-2.5 rounded-xl bg-[#1D1E22] text-[#CBCBCB] font-mono text-xs hover:text-[#FFFFE3]"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
