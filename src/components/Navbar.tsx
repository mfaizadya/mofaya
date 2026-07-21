import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { ScrambledText } from './ScrambledText';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Prestasi', href: '#achievements' },
  { label: 'Skills', href: '#skills' },
  { label: 'Sertifikasi', href: '#certifications' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('#home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

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
            ? 'bg-[#141518]/90 backdrop-blur-md border border-[#4A4A4A]/80 shadow-2xl py-2.5 px-5'
            : 'bg-[#141518]/60 backdrop-blur-sm border border-[#4A4A4A]/50 py-3 px-6'
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
            <div className="w-8 h-8 rounded-lg bg-[#1D1E22] border border-[#4A4A4A] flex items-center justify-center text-[#FFFFE3] group-hover:border-[#6D8196] transition-colors">
              <Terminal size={16} />
            </div>
            <ScrambledText
              className="text-[#FFFFE3] group-hover:text-[#6D8196] transition-colors font-bold"
              radius={72}
              duration={0.45}
              speed={0.35}
              scrambleChars=".:"
            >
              mofaya.me
            </ScrambledText>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FFFFE3] animate-pulse" />
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
                      ? 'bg-[#FFFFE3] text-[#141518] shadow-md font-bold'
                      : 'text-[#CBCBCB] hover:text-[#FFFFE3] hover:bg-[#1D1E22]'
                    }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-full bg-[#1D1E22] border border-[#4A4A4A] text-[#CBCBCB] hover:text-[#FFFFE3] hover:border-[#6D8196] transition-colors"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-5xl mx-auto rounded-3xl bg-[#141518]/95 backdrop-blur-xl border border-[#4A4A4A] shadow-2xl overflow-hidden p-4 transition-all animate-fadeIn">
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
                      ? 'bg-[#FFFFE3] text-[#141518] font-bold shadow-md'
                      : 'text-[#CBCBCB] hover:text-[#FFFFE3] hover:bg-[#1D1E22]'
                    }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#141518]" />}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
