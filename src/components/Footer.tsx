import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, MapPin } from 'lucide-react';
import { GithubIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const { name, contacts } = PORTFOLIO_DATA[lang].hero;

  return (
    <footer id="contact" className="border-t border-ink-charcoal/50 bg-ink-bg py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 font-mono text-sm text-ink-silver">
            <div className="flex items-center gap-2">
              <Terminal size={16} className="text-ink-blue" />
              <span>{name} &copy; {new Date().getFullYear()}</span>
            </div>
            <span className="text-ink-charcoal hidden sm:inline">&bull;</span>
            <div className="flex items-center gap-1.5 text-ink-blue">
              <MapPin size={15} className="text-ink-blue" />
              <span>Jakarta &amp; Bandung, ID</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-lg bg-ink-surface border border-ink-charcoal text-ink-silver hover:text-ink-ivory hover:border-ink-blue transition-all"
            >
              <GithubIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
