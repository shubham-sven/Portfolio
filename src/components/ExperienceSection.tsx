import React, { useState } from 'react';
import { 
  Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, 
  ArrowUpRight, Sparkles, Building2
} from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  const [expandedId, setExpandedId] = useState<string>(experience[0]?.id || '');

  return (
    <section id="experience" className="py-24 lg:py-32 bg-[var(--bg-secondary)] relative border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[var(--accent-yellow)]" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-[var(--accent-yellow)] font-bold">
                Academic &amp; Research Timeline
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Education &amp; Research.
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] max-w-md leading-relaxed">
            A chronological record of academic degree pursuits, IEEE research publications, software engineering milestones, and continuous technical growth.
          </p>
        </div>

        {/* Editorial Timeline Items */}
        <div className="space-y-6">
          {experience.map((item, index) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setExpandedId(isExpanded ? '' : item.id)}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer shadow-sm ${
                  isExpanded
                    ? 'bg-[var(--card-surface)] border-[var(--accent-yellow)] shadow-xl'
                    : 'bg-[var(--card-surface)]/70 hover:bg-[var(--card-surface)] border-[var(--border-subtle)] hover:border-[var(--border-highlight)]'
                }`}
                data-cursor="view"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  
                  {/* Left: Role & Company */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-[var(--accent-soft)] text-[var(--accent-yellow)] border border-[var(--accent-border)] font-semibold">
                        {item.year}
                      </span>
                      <span className="text-xs font-mono text-[var(--text-secondary)] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[var(--text-muted)]" />
                        {item.location}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] pt-1 flex items-center gap-2">
                      {item.role}
                      <span className="text-[var(--accent-yellow)] font-normal text-base sm:text-lg">
                        @ {item.company}
                      </span>
                    </h3>
                  </div>

                  {/* Right: Expand Toggle */}
                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline-block text-xs font-mono text-[var(--text-muted)]">
                      {item.type}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full bg-[var(--bg-main)] flex items-center justify-center text-[var(--text-primary)] transition-transform border border-[var(--border-subtle)] ${
                        isExpanded ? 'rotate-90 bg-[var(--accent-yellow)] text-[var(--text-inverse)] border-[var(--accent-yellow)]' : ''
                      }`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Description & Expanded Details */}
                <div className={`pt-4 space-y-4 ${isExpanded ? 'block' : 'hidden sm:block'}`}>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Achievements List */}
                  {isExpanded && (
                    <div className="pt-2 space-y-2 border-t border-[var(--border-subtle)] animate-fade-in">
                      <span className="text-xs uppercase tracking-widest text-[var(--accent-yellow)] font-mono block mb-2 font-bold">
                        Key Milestones &amp; Impact
                      </span>
                      {item.achievements.map((ach, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-primary)]">
                          <CheckCircle2 className="w-4 h-4 text-[var(--accent-yellow)] shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[var(--bg-main)] text-xs font-mono text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
