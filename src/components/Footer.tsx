import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import { UserProfile } from '../types';

interface FooterProps {
  profile: UserProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[var(--bg-deep)] border-t border-[var(--border-subtle)] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Monogram & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[var(--accent-yellow)] flex items-center justify-center text-[var(--text-inverse)] font-bold text-xs">
            <span>{profile.name.split(' ').map(n => n[0]).join('').slice(0, 2) || 'SK'}</span>
          </div>
          <span className="text-xs font-mono text-[var(--text-secondary)]">
            © {new Date().getFullYear()} {profile.name} All rights reserved.
          </span>
        </div>

        {/* Center: Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[var(--text-secondary)]">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--accent-yellow)] transition-colors flex items-center gap-1.5"
            title="GitHub"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span className="text-[var(--border-subtle)]">•</span>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--accent-yellow)] transition-colors flex items-center gap-1.5"
            title="LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span className="text-[var(--border-subtle)]">•</span>
          <a
            href={profile.instagramUrl || "https://www.instagram.com/_only__sven?igsi=emxjcHF4OW02bncz"}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--accent-yellow)] transition-colors flex items-center gap-1.5"
            title="Instagram @_only__sven"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>Instagram</span>
          </a>
          <span className="text-[var(--border-subtle)]">•</span>
          <a
            href={profile.facebookUrl || "https://www.facebook.com/share/1ML7N89drB/"}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--accent-yellow)] transition-colors flex items-center gap-1.5"
            title="Facebook"
          >
            <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
            <span>Facebook</span>
          </a>
        </div>

        {/* Right: Back to Top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--bg-main)] hover:bg-[var(--accent-yellow)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-inverse)] transition-all border border-[var(--border-subtle)] focus:outline-none cursor-pointer"
            aria-label="Back to top"
            data-cursor="view"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
