import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA, type ProjectItem } from '../data/portfolioData';
import { ExternalLink, Terminal, X, CheckCircle2, GitCommit, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';
import { ContentReveal } from './ContentReveal';
import { ScrollStack, ScrollStackItem } from './ScrollStack';
import { useLanguage } from '../context/LanguageContext';

export const ProjectsSection: React.FC = () => {
  const { lang } = useLanguage();
  const currentData = PORTFOLIO_DATA[lang];
  const { projects, labels } = currentData;

  const categories = [labels.projects.allCategory, 'AI/ML', 'Fullstack', 'Game Dev', 'Web Dev'] as const;

  const [selectedCategory, setSelectedCategory] = useState<string>(labels.projects.allCategory);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Sync category state when language switches
  useEffect(() => {
    setSelectedCategory(labels.projects.allCategory);
  }, [lang, labels.projects.allCategory]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const filteredProjects = (selectedCategory === 'Semua' || selectedCategory === 'All')
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-ink-surface border border-ink-charcoal mb-4">
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-ink-blue" />
            <span className="text-sm sm:text-base md:text-lg font-mono font-bold text-ink-ivory tracking-wide">{labels.projects.badge}</span>
          </div>
          <ScrollReveal
            as="h2"
            baseOpacity={0.05}
            baseRotation={5}
            blurStrength={10}
            textClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-ink-ivory tracking-tight leading-none mt-1"
          >
            {labels.projects.title}
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
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-ink-blue text-ink-surface shadow-md shadow-ink-blue/20 font-bold'
                      : 'bg-ink-surface border border-ink-charcoal text-ink-silver hover:text-ink-ivory hover:border-ink-blue'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </ContentReveal>
      </div>

      {/* Projects Stack — tied directly to window scroll */}
      <div className="w-full max-w-5xl mx-auto">
        <ScrollStack
          useWindowScroll={true}
          itemDistance={60}
          itemScale={0.03}
          itemStackDistance={20}
          stackPosition="15%"
          scaleEndPosition="5%"
          baseScale={0.92}
        >
          {filteredProjects.map((project) => (
            <ScrollStackItem
              key={project.id}
              itemClassName="group bg-ink-surface border border-ink-charcoal/70 hover:border-ink-blue overflow-hidden cursor-pointer transition-colors duration-300 shadow-xl hover:shadow-2xl"
            >
              <div onClick={() => setSelectedProject(project)}>
                {/* Top color-coded accent strip */}
                <div
                  className="h-2 w-full"
                  style={{ backgroundColor: project.accentStrip }}
                />

                {/* Optional Project Banner / Screenshot */}
                {project.imageUrl && (
                  <div className="w-full h-36 sm:h-44 overflow-hidden border-b border-ink-charcoal/50 relative group/img">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-surface via-ink-surface/20 to-transparent opacity-80" />
                  </div>
                )}

                <div className="px-6 py-5 sm:px-8 sm:py-6">
                  {/* Meta & Category tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1.5 rounded-md bg-ink-card text-ink-blue text-xs sm:text-sm font-mono font-bold border border-ink-charcoal/50">
                      {project.category}
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-semibold text-ink-ivory/90">
                      {project.period}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h3 className="text-2xl sm:text-3xl font-black text-ink-ivory group-hover:text-ink-blue transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base font-mono font-bold text-ink-blue mb-4">
                    {project.role}
                  </p>

                  {/* Summary */}
                  <p className="text-sm sm:text-base font-medium text-ink-ivory/90 leading-relaxed mb-5 line-clamp-2">
                    {project.summary}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-ink-bg text-ink-silver text-xs font-mono border border-ink-charcoal/40"
                      >
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2.5 py-1 rounded bg-ink-bg text-ink-silver text-xs font-mono">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-ink-charcoal/40 flex items-center justify-between text-xs font-mono text-ink-silver">
                    <div className="flex items-center gap-1.5">
                      {project.metrics && (
                        <span className="flex items-center gap-1 text-ink-ivory">
                          <GitCommit size={14} className="text-ink-blue" />
                          {project.metrics}
                        </span>
                      )}
                    </div>
                    <span className="text-ink-blue group-hover:underline flex items-center gap-1 font-semibold">
                      {labels.projects.viewDetails}
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
            data-lenis-prevent="true"
            className="bg-ink-surface border border-ink-charcoal rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto overscroll-contain shadow-2xl relative animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Color Accent */}
            <div
              className="h-2 w-full rounded-t-2xl"
              style={{ backgroundColor: selectedProject.accentStrip }}
            />

            {/* Optional Modal Image Banner */}
            {selectedProject.imageUrl && (
              <div className="w-full h-60 sm:h-80 overflow-hidden border-b border-ink-charcoal/60 relative">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-surface via-transparent to-transparent opacity-60" />
              </div>
            )}

            <div className="p-6 sm:p-8">
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded-md bg-ink-card text-ink-blue text-xs sm:text-sm font-mono font-bold">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-semibold text-ink-ivory/90">
                      {selectedProject.period}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-ink-ivory">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm sm:text-base font-mono font-bold text-ink-blue mt-1">
                    {selectedProject.role}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg bg-ink-card border border-ink-charcoal text-ink-silver hover:text-ink-ivory cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Summary */}
              <div className="mb-6 p-4 rounded-xl bg-ink-bg border border-ink-charcoal/50">
                <p className="text-sm sm:text-base md:text-lg font-medium text-ink-ivory leading-relaxed">
                  {selectedProject.summary}
                </p>
              </div>

              {/* Contributions list */}
              <div className="mb-6">
                <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-ink-ivory mb-3 flex items-center gap-1.5">
                  <Layers size={15} className="text-ink-blue" />
                  {labels.projects.contributionsHeader}
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.contributions.map((c, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base font-medium text-ink-ivory/90">
                      <CheckCircle2 size={16} className="text-ink-blue shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Technologies list */}
              <div className="mb-8">
                <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-ink-ivory mb-3">
                  {labels.projects.techStackHeader}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg bg-ink-card border border-ink-charcoal text-ink-ivory text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-ink-charcoal">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ink-ivory text-ink-surface font-mono font-bold text-xs hover:bg-ink-ivory/90 transition-all"
                  >
                    <GithubIcon size={15} />
                    <span>{labels.projects.viewRepo}</span>
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ink-blue text-ink-surface font-mono font-bold text-xs hover:bg-ink-blue/90 transition-all"
                  >
                    <ExternalLink size={15} />
                    <span>{labels.projects.liveDemo}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
