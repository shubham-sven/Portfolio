import React, { useState } from 'react';
import { 
  Layout, Sparkles, Code2, Cpu, ArrowUpRight, CheckCircle2, 
  Layers, ChevronRight, Terminal, Palette
} from 'lucide-react';
import { Service, Project } from '../types';

interface ServicesSectionProps {
  services: Service[];
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onNavigate: (sectionId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  projects,
  onSelectProject,
  onNavigate,
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>('product-designer');

  const getServiceIcon = (iconName: string, isYellowActive: boolean) => {
    const props = {
      className: `w-7 h-7 ${isYellowActive ? 'text-[var(--text-inverse)]' : 'text-[var(--accent-yellow)]'} transition-colors`,
    };
    switch (iconName) {
      case 'Layout':
        return <Layout {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Code2':
        return <Code2 {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      default:
        return <Layers {...props} />;
    }
  };

  const currentService = services.find((s) => s.id === activeServiceId) || services[0];

  return (
    <section id="services" className="py-24 lg:py-32 bg-[var(--bg-main)] relative border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[var(--accent-yellow)]" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-[var(--accent-yellow)] font-bold">
                Services &amp; Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Disciplines &amp; Craft.
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] max-w-md leading-relaxed">
            Specialized engineering and design capabilities tailored for modern tech products, venture-backed startups, and high-load web systems.
          </p>
        </div>

        {/* Interactive Highlighted Service Preview Box */}
        <div className="mb-12 p-6 md:p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] transition-all duration-300 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[var(--accent-soft)] text-[var(--accent-yellow)] text-xs font-mono font-bold uppercase tracking-wider border border-[var(--accent-border)]">
                  {currentService.subtitle}
                </span>
                <span className="text-xs text-[var(--text-muted)] font-mono">
                  {currentService.projectCount} Specialized Projects
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                {currentService.title}
              </h3>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {currentService.detailedDescription}
              </p>

              {/* Deliverables Chips */}
              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-mono block mb-2 font-bold">
                  Key Deliverables:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentService.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[var(--bg-main)] text-xs font-medium text-[var(--text-primary)] border border-[var(--border-subtle)] flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-yellow)]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Tech Badges & Action */}
            <div className="lg:col-span-5 bg-[var(--bg-main)] p-6 rounded-xl border border-[var(--border-subtle)] space-y-4">
              <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-mono block font-bold">
                Primary Tooling &amp; Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {currentService.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-md bg-[var(--bg-secondary)] text-xs font-mono text-[var(--text-primary)] border border-[var(--border-subtle)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-xs text-[var(--text-muted)]">
                  Need this expertise?
                </span>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-4 py-2 bg-[var(--accent-yellow)] hover:bg-[var(--accent-hover)] text-[var(--text-inverse)] font-bold text-xs rounded-lg transition-all flex items-center gap-1.5 shadow-sm focus:outline-none cursor-pointer"
                  data-cursor="view"
                >
                  Inquire Service
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Signature 4 Interactive Service Tiles (From Dribbble Screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service) => {
            const isActive = activeServiceId === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`group relative p-6 sm:p-7 rounded-2xl cursor-pointer transition-all duration-300 select-none flex flex-col justify-between min-h-[220px] shadow-sm ${
                  isActive
                    ? 'bg-[var(--accent-yellow)] text-[var(--text-inverse)] shadow-xl shadow-[var(--accent-soft)] scale-[1.02] border-transparent'
                    : 'bg-[var(--card-surface)] hover:bg-[var(--card-hover)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-highlight)]'
                }`}
                data-cursor="view"
              >
                {/* Top Icon and Arrow */}
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[var(--text-inverse)]/10' : 'bg-[var(--bg-main)] border border-[var(--border-subtle)]'
                    }`}
                  >
                    {getServiceIcon(service.iconName, isActive)}
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-[var(--text-inverse)] text-[var(--accent-yellow)]'
                        : 'bg-[var(--bg-main)] text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:bg-[var(--card-hover)] border border-[var(--border-subtle)]'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Bottom Title & Project Count */}
                <div className="mt-8 space-y-1">
                  <h3
                    className={`text-lg sm:text-xl font-bold tracking-tight ${
                      isActive ? 'text-[var(--text-inverse)]' : 'text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)]'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <span
                    className={`text-xs font-mono font-medium block ${
                      isActive ? 'text-[var(--text-inverse)]/80' : 'text-[var(--text-muted)]'
                    }`}
                  >
                    {service.projectCount} Projects
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
