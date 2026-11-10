import React, { useState } from 'react';
import { 
  ArrowUpRight, Github, ExternalLink, Sparkles, Filter, 
  Layers, Terminal, ArrowRight, Code, Eye
} from 'lucide-react';
import { Project } from '../types';

interface ProjectsSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web & Cloud' },
    { id: 'ai', label: 'AI / ML' },
    { id: 'mobile', label: 'Mobile & IoT' },
    { id: 'design', label: 'Design Systems' },
    { id: 'experiments', label: 'Experiments' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="works" className="py-24 lg:py-32 bg-[var(--bg-secondary)] relative border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header matching Dribbble Reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[var(--accent-yellow)]" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-[var(--accent-yellow)] font-bold">
                Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
              All Creative Works,<br />
              <span className="text-[var(--text-secondary)]">Selected projects.</span>
            </h2>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[var(--bg-main)] p-1.5 rounded-xl border border-[var(--border-subtle)]">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-widest transition-all focus:outline-none cursor-pointer ${
                    isActive
                      ? 'bg-[var(--accent-yellow)] text-[var(--text-inverse)] shadow-sm'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                  }`}
                  data-cursor="view"
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0;
            const colSpan = isFeatured 
              ? 'lg:col-span-12' 
              : index % 3 === 1 
              ? 'lg:col-span-7' 
              : 'lg:col-span-5';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`${colSpan} group bg-[var(--card-surface)] hover:bg-[var(--card-hover)] border border-[var(--border-subtle)] hover:border-[var(--accent-yellow)] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between`}
                data-cursor="project"
              >
                {/* Visual Image Preview */}
                <div className={`relative overflow-hidden bg-[var(--bg-deep)] ${isFeatured ? 'h-72 sm:h-96' : 'h-64 sm:h-72'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 contrast-105"
                  />
                  
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-surface)]/80 via-transparent to-transparent opacity-90" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[var(--bg-deep)]/90 border border-[var(--border-subtle)] text-[var(--text-primary)] text-[11px] font-mono backdrop-blur-md">
                      {project.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[var(--bg-deep)]/90 border border-[var(--border-subtle)] text-[var(--accent-yellow)] text-[11px] font-mono font-bold backdrop-blur-md">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Quick Action Preview on Hover */}
                  <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 px-3.5 py-1.5 rounded-full bg-[var(--accent-yellow)] text-[var(--text-inverse)] text-xs font-bold font-mono flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Explore Case Study</span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-[var(--bg-main)] group-hover:bg-[var(--accent-yellow)] text-[var(--text-secondary)] group-hover:text-[var(--text-inverse)] flex items-center justify-center transition-all shrink-0 border border-[var(--border-subtle)]">
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-[var(--bg-main)] text-[11px] font-mono text-[var(--text-primary)] border border-[var(--border-subtle)]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 text-[11px] font-mono text-[var(--text-muted)]">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Interactive Stats If Present */}
                  {project.stats && (
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[var(--border-subtle)]">
                      {project.stats.map((stat, i) => (
                        <div key={i} className="text-left">
                          <span className="text-[10px] uppercase font-mono text-[var(--text-muted)] block truncate">
                            {stat.label}
                          </span>
                          <span className="text-xs font-bold text-[var(--text-primary)] font-mono">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
