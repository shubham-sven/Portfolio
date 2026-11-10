import React, { useState, useId } from 'react';
import { 
  Terminal, Layers, Server, Cpu, Sparkles, Code2, 
  Search, ArrowUpRight, CheckCircle2, Clock, 
  X, ExternalLink, Flame, Info, Briefcase, Filter
} from 'lucide-react';
import { SkillCategory, SkillItem, Project } from '../types';

interface SkillsMatrixProps {
  categories: SkillCategory[];
  projects?: Project[];
  onSelectProject?: (project: Project) => void;
}

export const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ 
  categories, 
  projects = [],
  onSelectProject 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);
  const searchInputId = useId();

  const getCategoryIcon = (iconName: string) => {
    const props = { className: 'w-4 h-4 text-[var(--accent-yellow)]' };
    switch (iconName) {
      case 'Terminal':
        return <Terminal {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'Server':
        return <Server {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      default:
        return <Code2 {...props} />;
    }
  };

  // Filter skills based on selected category & search query
  const filteredCategories = categories.map(cat => {
    const isCategoryMatch = activeCategory === 'all' || cat.title.toLowerCase().includes(activeCategory.toLowerCase());
    if (!isCategoryMatch) return null;

    const filteredSkills = cat.skills.filter(skill => {
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return (
        skill.name.toLowerCase().includes(query) ||
        (skill.tag && skill.tag.toLowerCase().includes(query)) ||
        skill.description.toLowerCase().includes(query) ||
        skill.keyCapabilities.some(cap => cap.toLowerCase().includes(query))
      );
    });

    if (filteredSkills.length === 0 && searchQuery.trim()) return null;

    return {
      ...cat,
      skills: filteredSkills
    };
  }).filter(Boolean) as SkillCategory[];

  const totalFilteredSkills = filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  // Helper to retrieve project objects from IDs
  const getRelatedProjects = (projectIds?: string[]): Project[] => {
    if (!projectIds || projectIds.length === 0) return [];
    return projectIds
      .map(id => projects.find(p => p.id === id))
      .filter((p): p is Project => p !== undefined);
  };

  const handleOpenProject = (project: Project, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onSelectProject) {
      onSelectProject(project);
    }
  };

  // Skill currently active in detail inspector (either clicked or hovered for desktop)
  const activeDetailSkill = selectedSkill || hoveredSkill;

  return (
    <section 
      id="skills" 
      className="py-24 lg:py-32 bg-[var(--bg-main)] relative border-t border-[var(--border-subtle)]"
    >
      {/* Background Watermark */}
      <div 
        aria-hidden="true" 
        className="editorial-watermark absolute top-12 right-6 text-[9vw] font-black pointer-events-none select-none"
      >
        STACK
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[var(--accent-yellow)]" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-[var(--accent-yellow)] font-bold">
                Interactive Stack &amp; Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Tools of the Trade.
            </h2>
          </div>
          <div className="space-y-2 max-w-md">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Hover or select any technology tag to inspect production specializations, architectural mastery, and direct portfolio case studies.
            </p>
          </div>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="mb-10 p-3 sm:p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 custom-scrollbar">
            {[
              { id: 'all', label: 'All Capabilities' },
              { id: 'languages', label: 'Languages' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'backend', label: 'Cloud & Backend' },
              { id: 'ai', label: 'AI & Data' },
              { id: 'design', label: 'Design Systems' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all focus:outline-none ${
                  activeCategory === tab.id
                    ? 'bg-[var(--accent-yellow)] text-[var(--text-inverse)] font-bold shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-main)]'
                }`}
                data-cursor="view"
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id={searchInputId}
              type="text"
              placeholder="Filter by skill, tag or framework..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-yellow)] transition-colors font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter if Filtered */}
        {(activeCategory !== 'all' || searchQuery) && (
          <div className="mb-6 flex items-center justify-between text-xs font-mono text-[var(--text-muted)] px-1">
            <span>
              Showing <strong className="text-[var(--text-primary)]">{totalFilteredSkills}</strong> matched skills
            </span>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-[var(--accent-yellow)] hover:underline flex items-center gap-1"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Skills Group Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCategories.map((group, idx) => (
            <div
              key={idx}
              className="bg-[var(--bg-secondary)] p-6 sm:p-7 rounded-2xl border border-[var(--border-subtle)] space-y-5 hover:border-[var(--border-highlight)] transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[var(--bg-main)] border border-[var(--border-subtle)]">
                      {getCategoryIcon(group.icon)}
                    </div>
                    <h3 className="text-base font-bold text-[var(--text-primary)]">
                      {group.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    {group.skills.length} skills
                  </span>
                </div>

                {/* Skills Interactive Tags List */}
                <div className="space-y-2.5 pt-4">
                  {group.skills.map((skill, sIdx) => {
                    const isSelected = selectedSkill?.name === skill.name;
                    const isHovered = hoveredSkill?.name === skill.name;
                    const related = getRelatedProjects(skill.relatedProjectIds);

                    return (
                      <div
                        key={sIdx}
                        className="relative group/tag"
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <button
                          onClick={() => setSelectedSkill(selectedSkill?.name === skill.name ? null : skill)}
                          className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between group/btn cursor-pointer focus:outline-none ${
                            isSelected || isHovered
                              ? 'bg-[var(--bg-main)] border-[var(--accent-yellow)] shadow-md shadow-[var(--accent-soft)]'
                              : 'bg-[var(--bg-main)] border-[var(--border-subtle)] hover:border-[var(--accent-border)]'
                          }`}
                          aria-expanded={isSelected}
                          data-cursor="view"
                        >
                          <div className="flex items-center gap-2.5 min-w-0 pr-2">
                            <div 
                              className={`w-2 h-2 rounded-full transition-transform shrink-0 ${
                                isSelected || isHovered
                                  ? 'bg-[var(--accent-yellow)] scale-125'
                                  : 'bg-[var(--accent-yellow)]/60 group-hover/btn:bg-[var(--accent-yellow)]'
                              }`} 
                            />
                            <span className={`text-xs sm:text-sm font-semibold truncate transition-colors ${
                              isSelected || isHovered
                                ? 'text-[var(--text-primary)] font-bold'
                                : 'text-[var(--text-primary)] group-hover/btn:text-[var(--accent-yellow)]'
                            }`}>
                              {skill.name}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            {skill.tag && (
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                                {skill.tag}
                              </span>
                            )}
                            <span className="text-[11px] font-mono text-[var(--accent-yellow)] font-bold">
                              {skill.level}
                            </span>
                            {related.length > 0 && (
                              <span 
                                title={`${related.length} featured project(s) utilizing ${skill.name}`}
                                className="w-4 h-4 rounded-full bg-[var(--accent-soft)] text-[var(--accent-yellow)] flex items-center justify-center text-[9px] font-mono font-bold"
                              >
                                {related.length}
                              </span>
                            )}
                          </div>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Category Note */}
              <div className="pt-2 text-[10px] font-mono text-[var(--text-muted)] flex items-center justify-between border-t border-[var(--border-subtle)]">
                <span>Production Standard</span>
                <span className="text-[var(--accent-yellow)]">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* FLOATING CONTEXTUAL POPUP / MODAL INSPECTOR */}
        {activeDetailSkill && (
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[var(--bg-secondary)] border-2 border-[var(--accent-yellow)] shadow-2xl transition-all relative overflow-hidden animate-fade-in">
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-soft)] rounded-bl-full pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-start justify-between gap-6 relative z-10">
              
              {/* Left Column: Skill Metadata & Description */}
              <div className="space-y-4 max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-lg bg-[var(--accent-yellow)] text-[var(--text-inverse)] text-xs font-mono font-extrabold uppercase tracking-wider">
                    {activeDetailSkill.level}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)]">
                    {activeDetailSkill.name}
                  </h4>
                  {activeDetailSkill.years && (
                    <span className="flex items-center gap-1 text-xs font-mono text-[var(--text-secondary)] bg-[var(--bg-main)] px-2.5 py-1 rounded-md border border-[var(--border-subtle)]">
                      <Clock className="w-3.5 h-3.5 text-[var(--accent-yellow)]" />
                      {activeDetailSkill.years}
                    </span>
                  )}
                </div>

                <p className="text-sm text-[var(--text-primary)] leading-relaxed font-normal">
                  {activeDetailSkill.description}
                </p>

                {/* Key Capabilities Pills */}
                {activeDetailSkill.keyCapabilities && activeDetailSkill.keyCapabilities.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-mono font-bold block">
                      Core Technical Competencies:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeDetailSkill.keyCapabilities.map((cap, cIdx) => (
                        <span 
                          key={cIdx}
                          className="px-2.5 py-1 rounded-lg bg-[var(--bg-main)] text-[11px] font-mono text-[var(--text-secondary)] border border-[var(--border-subtle)] flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[var(--accent-yellow)]" />
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Related Projects & Interactive Links */}
              <div className="lg:w-80 w-full space-y-3 shrink-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-[var(--accent-yellow)] font-mono font-bold flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    Utilized in Projects
                  </span>
                  {selectedSkill && (
                    <button
                      onClick={() => setSelectedSkill(null)}
                      className="p-1 rounded bg-[var(--bg-main)] text-[var(--text-muted)] hover:text-[var(--text-primary)] text-xs"
                      title="Dismiss inspector"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {(() => {
                  const related = getRelatedProjects(activeDetailSkill.relatedProjectIds);
                  if (related.length === 0) {
                    return (
                      <div className="p-4 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] font-mono">
                        Active across internal production architecture, proprietary tooling, and open-source packages.
                      </div>
                    );
                  }

                  return (
                    <div className="space-y-2.5">
                      {related.map((proj) => (
                        <button
                          key={proj.id}
                          onClick={(e) => handleOpenProject(proj, e)}
                          className="w-full text-left p-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] hover:border-[var(--accent-yellow)] hover:bg-[var(--card-hover)] transition-all flex items-center justify-between group cursor-pointer focus:outline-none"
                          data-cursor="project"
                        >
                          <div className="min-w-0 pr-2">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono font-bold text-[var(--accent-yellow)]">
                                {proj.number}
                              </span>
                              <span className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)] transition-colors truncate">
                                {proj.title}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-[var(--text-muted)] block truncate mt-0.5">
                              {proj.categoryLabel}
                            </span>
                          </div>

                          <div className="flex items-center gap-1 text-[11px] font-mono text-[var(--accent-yellow)] shrink-0 font-medium group-hover:translate-x-0.5 transition-transform">
                            <span>Case Study</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </div>
                        </button>
                      ))}
                    </div>
                  );
                })()}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
