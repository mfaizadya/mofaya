import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, MapPin } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  const { name, contacts } = PORTFOLIO_DATA.hero;

  return (
    <footer id="contact" className="border-t border-[#4A4A4A]/50 bg-[#0D0E10] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 font-mono text-sm text-[#CBCBCB]">
            <div className="flex items-center gap-2">
              <Terminal size={16} className="text-[#6D8196]" />
              <span>{name} &copy; {new Date().getFullYear()}</span>
            </div>
            <span className="text-[#4A4A4A] hidden sm:inline">&bull;</span>
            <div className="flex items-center gap-1.5 text-[#6D8196]">
              <MapPin size={15} />
              <span>Jakarta &amp; Bandung, ID</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-lg bg-[#141518] border border-[#4A4A4A] text-[#CBCBCB] hover:text-[#FFFFE3] hover:border-[#6D8196] transition-all"
            >
              <GithubIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
