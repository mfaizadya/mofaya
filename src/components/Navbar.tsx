import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sun, Moon, Globe } from 'lucide-react';
import { ScrambledText } from './ScrambledText';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavItem {
  label: string;
  href: string;
}

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('#home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const labels = PORTFOLIO_DATA[lang].labels.nav;

  const navItems: NavItem[] = [
    { label: labels.home, href: '#home' },
    { label: labels.projects, href: '#projects' },
    { label: labels.experience, href: '#experience' },
    { label: labels.achievements, href: '#achievements' },
    { label: labels.skills, href: '#skills' },
    { label: labels.certifications, href: '#certifications' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Check bottom of page first for last section (Sertifikasi)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 150) {
        setActiveSection('#certifications');
        return;
      }

      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 180 && rect.bottom >= 140;
        }
        return false;
      });

      if (current) {
        setActiveSection(`#${current}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto rounded-full transition-all duration-300 ${isScrolled
            ? 'bg-ink-surface/90 backdrop-blur-md border border-ink-charcoal/80 shadow-2xl py-2.5 px-5'
            : 'bg-ink-surface/60 backdrop-blur-sm border border-ink-charcoal/50 py-3 px-6'
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group font-mono font-medium text-sm tracking-tight"
            onClick={() => {
              setActiveSection('#home');
              setIsMobileMenuOpen(false);
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-ink-card border border-ink-charcoal flex items-center justify-center text-ink-ivory group-hover:border-ink-blue transition-colors">
              <Terminal size={16} />
            </div>
            <ScrambledText
              className="text-ink-ivory group-hover:text-ink-blue transition-colors font-bold"
              radius={72}
              duration={0.45}
              speed={0.35}
              scrambleChars=".:"
            >
              mofaya.me
            </ScrambledText>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-ink-ivory animate-pulse" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveSection(item.href)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 ${isActive
                      ? 'bg-ink-ivory text-ink-surface shadow-md font-bold'
                      : 'text-ink-silver hover:text-ink-ivory hover:bg-ink-card'
                    }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Language Toggle, Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              aria-label="Toggle Language"
              className="px-2.5 py-1.5 rounded-full bg-ink-card border border-ink-charcoal text-ink-silver hover:text-ink-ivory hover:border-ink-blue transition-colors flex items-center gap-1.5 font-mono text-xs cursor-pointer"
            >
              <Globe size={14} className="text-ink-blue" />
              <span className="font-bold">{lang === 'id' ? 'ID' : 'EN'}</span>
            </button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-full bg-ink-card border border-ink-charcoal text-ink-silver hover:text-ink-ivory hover:border-ink-blue transition-colors flex items-center justify-center cursor-pointer"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 rounded-full bg-ink-card border border-ink-charcoal text-ink-silver hover:text-ink-ivory hover:border-ink-blue transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-5xl mx-auto rounded-3xl bg-ink-surface/95 backdrop-blur-xl border border-ink-charcoal shadow-2xl overflow-hidden p-4 transition-all animate-fadeIn">
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-2xl text-sm font-mono transition-all flex items-center justify-between ${isActive
                      ? 'bg-ink-ivory text-ink-surface font-bold shadow-md'
                      : 'text-ink-silver hover:text-ink-ivory hover:bg-ink-card'
                    }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-ink-surface" />}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
