import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, ArrowUpRight, Github, Linkedin, Instagram, Dribbble, Twitter, Mail, 
  ExternalLink, Sparkles, Terminal, Activity
} from 'lucide-react';
import { UserProfile, Project } from '../types';
import { ProfilePortrait } from './ProfilePortrait';

interface HeroProps {
  profile: UserProfile;
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  projects,
  onSelectProject,
  onNavigate,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const featuredProjects = projects.slice(0, 2);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-24 md:pt-32 pb-16 overflow-hidden flex flex-col justify-between bg-[var(--bg-main)]"
    >
      {/* Background Editorial Watermark Typography from Theme */}
      <div className="absolute left-6 md:left-20 top-20 editorial-watermark select-none pointer-events-none z-0">
        <h2 className="text-[140px] sm:text-[180px] lg:text-[220px] font-black leading-none tracking-tighter">
          CREATIVE
        </h2>
      </div>

      {/* Ambient subtle warm glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[var(--accent-soft)] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex-grow flex flex-col justify-between">
        
        {/* Main Grid: Left Vertical Nav + Center Headline + Right Featured Works */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start pt-6">
          
          {/* COL 1: Vertical Rotated Social Links (Editorial Signature Layout) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col justify-between h-[480px] pt-4">
            <div className="w-8 h-8 rounded-full border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-yellow)] bg-[var(--bg-secondary)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-yellow)]" />
            </div>

            <div className="[writing-mode:vertical-rl] transform rotate-180 flex items-center space-x-4 space-x-reverse uppercase tracking-[0.4em] text-[10px] text-[var(--text-secondary)] font-mono font-medium">
              <a 
                href={profile.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-[var(--accent-yellow)] transition-colors"
                title="GitHub"
              >
                Github
              </a>
              <div className="h-4 w-[1px] bg-[var(--border-subtle)] my-2" />
              <a 
                href={profile.linkedinUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-[var(--accent-yellow)] transition-colors"
                title="LinkedIn"
              >
                LinkedIn
              </a>
              <div className="h-4 w-[1px] bg-[var(--border-subtle)] my-2" />
              <a 
                href={profile.instagramUrl || "https://www.instagram.com/_only__sven?igsi=emxjcHF4OW02bncz"} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-[var(--accent-yellow)] transition-colors"
                title="Instagram: @_only__sven"
              >
                Instagram
              </a>
              <div className="h-4 w-[1px] bg-[var(--border-subtle)] my-2" />
              <a 
                href={profile.facebookUrl || "https://www.facebook.com/share/1ML7N89drB/"} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-[var(--accent-yellow)] transition-colors"
                title="Facebook"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* COL 2: Central Editorial Headline & Narrative + Portrait (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between relative">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Text & Call-To-Action (7 cols on md+) */}
              <div className="md:col-span-7">
                {/* Introduction Eyebrow */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-4 h-[1px] bg-[var(--accent-yellow)]" />
                  <span className="text-[var(--accent-yellow)] uppercase tracking-[0.5em] text-[10px] font-bold block">
                    Introduction
                  </span>
                </div>

                {/* Main Headline with Stroked Text Effect */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.92] tracking-tighter mb-5 text-[var(--text-primary)]">
                  Shubham <br />
                  <span className="text-stroke-editorial">
                    Sven.
                  </span>
                </h1>

                {/* Lead Paragraph */}
                <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-6">
                  {profile.bioIntro || "Focused on creating high-performance interactive interfaces and scalable backend architectures. I bridge the gap between design systems and engineering excellence."}
                </p>

                {/* Action Buttons & Mini Project Counter */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8">
                  <button 
                    onClick={() => onNavigate('works')}
                    className="bg-[var(--accent-yellow)] text-[var(--text-inverse)] hover:bg-[var(--accent-hover)] px-7 py-3.5 uppercase font-bold tracking-widest text-xs flex items-center gap-3 transition-all cursor-pointer shadow-lg shadow-[var(--accent-soft)] focus:outline-none"
                    data-cursor="view"
                  >
                    <span>View Portfolio</span>
                    <span className="text-base">→</span>
                  </button>

                  <div className="hidden sm:block h-10 w-[1px] bg-[var(--border-subtle)]" />

                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <span className="text-[20px] font-bold leading-none text-[var(--text-primary)]">
                        {profile.projectsCount}+
                      </span>
                      <span className="text-[9px] uppercase tracking-widest text-[var(--text-muted)] font-bold mt-1 font-mono">
                        Projects Built
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center text-xs font-mono text-[var(--accent-yellow)] border border-[var(--border-subtle)]">
                      ★
                    </div>
                  </div>
                </div>
              </div>

              {/* Developer Profile Portrait (5 cols on md+) */}
              <div className="md:col-span-5 max-w-[280px] sm:max-w-[320px] mx-auto md:mx-0 w-full">
                <ProfilePortrait profile={profile} size="md" />
              </div>

            </div>

            {/* Bottom Key Metric Counters Strip */}
            <div className="flex items-center space-x-8 sm:space-x-12 pt-6 border-t border-[var(--border-subtle)]">
              <div className="flex flex-col">
                <span className="text-[var(--accent-yellow)] text-2xl sm:text-3xl font-bold leading-none font-display">
                  {profile.yearsExperience}+ Yrs
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[var(--text-muted)] font-bold mt-1.5 font-mono">
                  Full-Stack Experience
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[var(--accent-yellow)] text-2xl sm:text-3xl font-bold leading-none font-display">
                  MERN
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[var(--text-muted)] font-bold mt-1.5 font-mono">
                  Core Specialization
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[var(--accent-yellow)] text-2xl sm:text-3xl font-bold leading-none font-display">
                  IEEE '26
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[var(--text-muted)] font-bold mt-1.5 font-mono">
                  Research Published
                </span>
              </div>

              <div className="hidden sm:flex flex-col">
                <span className="text-emerald-500 text-2xl sm:text-3xl font-bold leading-none font-display">
                  2027
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[var(--text-muted)] font-bold mt-1.5 font-mono">
                  B.Tech Graduate
                </span>
              </div>
            </div>
          </div>

          {/* COL 3: Editorial Selected Work Cards (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6 pt-4 lg:pt-0">
            <span className="text-[var(--accent-yellow)] uppercase tracking-[0.5em] text-[10px] font-bold block self-start lg:self-end">
              Selected Work
            </span>

            {featuredProjects.map((project, idx) => {
              const isFirst = idx === 0;
              return (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className={`bg-[var(--card-surface)] p-6 rounded-xl border border-[var(--border-subtle)] relative group cursor-pointer transition-all duration-300 shadow-sm ${
                    isFirst ? 'hover:border-[var(--accent-yellow)]' : 'opacity-95 hover:opacity-100 hover:border-[var(--border-highlight)]'
                  }`}
                  data-cursor="project"
                >
                  {/* Offset Corner Badge (01 / 02) */}
                  <div
                    className={`absolute -top-3 -left-3 w-8 h-8 text-xs font-bold flex items-center justify-center rounded-sm shadow-md font-mono ${
                      isFirst
                        ? 'bg-[var(--accent-yellow)] text-[var(--text-inverse)]'
                        : 'bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-subtle)]'
                    }`}
                  >
                    0{idx + 1}
                  </div>

                  <div className="flex justify-between items-start mb-3 gap-2">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)] transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[9px] bg-[var(--badge-bg)] px-2 py-1 uppercase tracking-widest rounded-md text-[var(--text-secondary)] font-mono shrink-0 border border-[var(--border-subtle)]">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <p className="text-[var(--text-secondary)] text-xs leading-relaxed mb-5 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-[var(--border-subtle)]">
                    <span className="text-[10px] font-mono text-[var(--text-muted)] truncate max-w-[200px]">
                      {project.techStack.slice(0, 3).join(' · ')}
                    </span>
                    <span className={`text-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      isFirst ? 'text-[var(--accent-yellow)]' : 'text-[var(--text-secondary)]'
                    }`}>
                      ↗
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Link to All Projects */}
            <button
              onClick={() => onNavigate('works')}
              className="self-start lg:self-end group cursor-pointer flex items-center space-x-3 text-[11px] uppercase tracking-[0.3em] font-bold border-b border-[var(--border-subtle)] pb-2 hover:border-[var(--accent-yellow)] transition-colors text-[var(--text-primary)] focus:outline-none"
              data-cursor="view"
            >
              <span className="group-hover:text-[var(--accent-yellow)] transition-colors">All Projects</span>
              <span className="group-hover:translate-x-1 transition-transform text-[var(--accent-yellow)]">→</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
