import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Copy, Check, Sun, Moon } from 'lucide-react';
import { UserProfile } from '../types';

interface NavbarProps {
  profile: UserProfile;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  activeSection,
  onNavigate,
  theme = 'dark',
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'services', label: 'Services' },
    { id: 'works', label: 'Works' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[var(--header-bg)] backdrop-blur-md border-b border-[var(--header-border)] shadow-lg shadow-black/10'
            : 'py-6 md:py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
            aria-label="Portfolio Home"
          >
            {/* Editorial Monogram Badge */}
            <div className="w-8 h-8 bg-[var(--accent-yellow)] rounded-full flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
              <span className="text-[var(--text-inverse)] font-bold text-xs">
                {profile.name.split(' ').map(n => n[0]).join('').slice(0, 2) || 'CM'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="uppercase tracking-[0.3em] text-[11px] font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)] transition-colors">
                {profile.name.replace(/\.$/, '')}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 uppercase tracking-widest text-[11px] font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`transition-colors relative py-1 focus:outline-none cursor-pointer ${
                    isActive
                      ? 'text-[var(--accent-yellow)] font-bold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--accent-yellow)]'
                  }`}
                  data-cursor="view"
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[var(--accent-yellow)]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Email + Theme Toggle + Get In Touch */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark / Light Mode Toggle Button */}
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="p-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] hover:bg-[var(--card-hover)] text-[var(--text-secondary)] hover:text-[var(--accent-yellow)] transition-all flex items-center justify-center focus:outline-none cursor-pointer"
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                data-cursor="view"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-[var(--accent-yellow)] transition-transform hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 text-[var(--accent-yellow)] transition-transform hover:-rotate-12" />
                )}
              </button>
            )}

            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 border border-[var(--border-subtle)] bg-[var(--bg-secondary)] hover:bg-[var(--card-hover)] text-[10px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all flex items-center gap-1.5 focus:outline-none cursor-pointer"
              title="Copy email address"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3 h-3 text-emerald-500" />
                  <span className="text-emerald-500 font-medium">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-[var(--accent-yellow)]" />
                  <span>{profile.email}</span>
                </>
              )}
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className="uppercase tracking-widest text-[11px] font-bold border border-[var(--accent-yellow)] px-4 py-2 text-[var(--accent-yellow)] hover:bg-[var(--accent-yellow)] hover:text-[var(--text-inverse)] transition-all flex items-center gap-1.5 cursor-pointer focus:outline-none"
              data-cursor="view"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Actions: Theme Toggle + Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="p-2 rounded-lg bg-[var(--bg-secondary)] text-[var(--accent-yellow)] border border-[var(--border-subtle)] transition-colors focus:outline-none"
                aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:text-[var(--accent-yellow)] border border-[var(--border-subtle)] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[var(--bg-deep)]/98 backdrop-blur-xl flex flex-col justify-between p-8 md:hidden animate-fade-in text-[var(--text-primary)]">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[var(--accent-yellow)] flex items-center justify-center text-[var(--text-inverse)] font-extrabold text-sm">
                <span>{profile.name.split(' ').map(n => n[0]).join('').slice(0, 2) || 'CM'}</span>
              </div>
              <span className="text-base font-bold text-[var(--text-primary)]">{profile.name}</span>
            </div>
            <div className="flex items-center gap-2">
              {onToggleTheme && (
                <button
                  onClick={onToggleTheme}
                  className="p-2 rounded-lg bg-[var(--bg-main)] text-[var(--accent-yellow)] border border-[var(--border-subtle)]"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              )}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-[var(--bg-main)] text-[var(--text-primary)] hover:text-[var(--accent-yellow)]"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5 py-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-2xl font-bold text-left tracking-tight transition-colors ${
                  activeSection === link.id
                    ? 'text-[var(--accent-yellow)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-[var(--border-subtle)]">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full py-3.5 rounded-xl bg-[var(--accent-yellow)] text-[var(--text-inverse)] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2"
            >
              Start A Conversation
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-between text-xs text-[var(--text-muted)] font-mono">
              <span>{profile.location}</span>
              <span>{profile.email}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
