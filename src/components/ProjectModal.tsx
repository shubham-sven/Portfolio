import React, { useEffect, useState } from 'react';
import { 
  X, ExternalLink, Github, ArrowUpRight, CheckCircle2, 
  Calendar, User, Layers, Cpu, ShieldCheck, Sparkles, Terminal, Globe
} from 'lucide-react';
import { Project } from '../types';
import { InteractiveLivePreview } from './InteractiveLivePreview';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'case-study' | 'sandbox' | 'architecture'>('case-study');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[var(--bg-deep)]/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl bg-[var(--bg-main)] border border-[var(--border-subtle)] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="p-4 sm:p-6 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-[var(--accent-yellow)] text-[var(--text-inverse)] text-xs font-mono font-bold">
              {project.number}
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] leading-none">
                {project.title}
              </h2>
              <span className="text-xs text-[var(--text-secondary)] font-mono mt-1 block">
                {project.subtitle}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--card-surface)] hover:bg-[var(--card-hover)] text-xs font-semibold text-[var(--text-primary)] border border-[var(--border-subtle)] transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5 text-[var(--accent-yellow)]" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--card-surface)] hover:bg-[var(--card-hover)] text-xs font-semibold text-[var(--text-primary)] border border-[var(--border-subtle)] transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[var(--card-surface)] hover:bg-[var(--accent-yellow)] text-[var(--text-secondary)] hover:text-[var(--text-inverse)] transition-colors focus:outline-none cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Sub-Tabs */}
        <div className="px-6 py-2 bg-[var(--bg-main)] border-b border-[var(--border-subtle)] flex items-center gap-2">
          {[
            { id: 'case-study', label: 'Overview & Case Study' },
            { id: 'sandbox', label: 'Interactive Sandbox' },
            { id: 'architecture', label: 'Tech Stack & Results' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all focus:outline-none cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[var(--accent-yellow)] text-[var(--text-inverse)] font-bold'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body Content */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto custom-scrollbar">
          
          {/* TAB 1: CASE STUDY */}
          {activeTab === 'case-study' && (
            <div className="space-y-8 animate-fade-in">
              {/* Hero Image */}
              <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden bg-[var(--bg-deep)] border border-[var(--border-subtle)]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-deep)]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-primary)]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[var(--accent-yellow)]" />
                      {project.year}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[var(--accent-yellow)]" />
                      {project.role}
                    </span>
                  </div>
                  {project.client && (
                    <span className="px-3 py-1 rounded bg-[var(--bg-main)]/90 text-[var(--accent-yellow)] text-xs font-mono border border-[var(--border-subtle)]">
                      Client: {project.client}
                    </span>
                  )}
                </div>
              </div>

              {/* Overview & Problem / Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[var(--accent-yellow)] font-mono font-bold block">
                    The Challenge
                  </span>
                  <h4 className="text-lg font-bold text-[var(--text-primary)]">Problem Statement</h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.caseStudy.problem}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-2">
                  <span className="text-xs uppercase tracking-widest text-emerald-500 font-mono font-bold block">
                    The Architecture
                  </span>
                  <h4 className="text-lg font-bold text-[var(--text-primary)]">Engineered Solution</h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Key Features List */}
              <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-4">
                <h4 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[var(--accent-yellow)]" />
                  Key Feature Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.caseStudy.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="p-3 bg-[var(--bg-main)] rounded-lg border border-[var(--border-subtle)] space-y-1">
                      <div className="w-5 h-5 rounded-full bg-[var(--accent-soft)] text-[var(--accent-yellow)] flex items-center justify-center text-xs font-bold font-mono">
                        {idx + 1}
                      </div>
                      <p className="text-xs text-[var(--text-primary)] leading-snug pt-1">
                        {feat}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Embed Live Preview Sandbox within Case Study */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[var(--accent-yellow)]" />
                  Live Component Simulation
                </h4>
                <InteractiveLivePreview project={project} />
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE SANDBOX ONLY */}
          {activeTab === 'sandbox' && (
            <div className="space-y-6 animate-fade-in">
              <p className="text-sm text-[var(--text-secondary)]">
                Interact directly with this simulated live module to test real-time state manipulation, latency buffers, and visual response timings.
              </p>
              <InteractiveLivePreview project={project} />
            </div>
          )}

          {/* TAB 3: ARCHITECTURE & RESULTS */}
          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-fade-in">
              {/* Architecture Stack */}
              <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-4">
                <h4 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[var(--accent-yellow)]" />
                  System Architecture Highlights
                </h4>
                <div className="space-y-2.5">
                  {project.caseStudy.architecture.map((arch, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-[var(--bg-main)] rounded-lg border border-[var(--border-subtle)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-yellow)] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[var(--text-primary)]">{arch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Measurable Results */}
              <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-4">
                <h4 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Measurable Impact &amp; Results
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.caseStudy.results.map((res, idx) => (
                    <div key={idx} className="p-4 bg-[var(--bg-main)] rounded-lg border border-emerald-500/20 text-center space-y-1">
                      <span className="text-xs font-mono uppercase text-emerald-500 font-bold block">
                        Milestone {idx + 1}
                      </span>
                      <p className="text-xs text-[var(--text-primary)] font-medium">{res}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Tech Stack */}
              <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-3">
                <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-mono block font-bold">
                  Complete Technology Footprint
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-[var(--bg-main)] text-xs font-mono text-[var(--accent-yellow)] border border-[var(--border-subtle)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Links */}
        <div className="p-4 sm:p-6 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs text-[var(--text-muted)] font-mono">
              Category: {project.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[var(--accent-yellow)] hover:bg-[var(--accent-hover)] text-[var(--text-inverse)] font-bold text-xs rounded-lg transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Launch Live Product</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[var(--card-surface)] hover:bg-[var(--card-hover)] text-[var(--text-primary)] text-xs font-medium rounded-lg transition-all border border-[var(--border-subtle)] cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
