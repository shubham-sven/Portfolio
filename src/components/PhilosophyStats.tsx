import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Award, Users, CheckCircle, Flame } from 'lucide-react';
import { UserProfile } from '../types';

interface PhilosophyStatsProps {
  profile: UserProfile;
  onNavigate: (sectionId: string) => void;
}

export const PhilosophyStats: React.FC<PhilosophyStatsProps> = ({
  profile,
  onNavigate,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    exp: 0,
    clients: 0,
    projects: 0,
    satisfaction: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate counter numbers smoothly
  useEffect(() => {
    if (!isVisible) return;

    const duration = 1400; // ms
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCounts({
        exp: Math.min(profile.yearsExperience, Math.round(profile.yearsExperience * easeProgress)),
        clients: Math.min(profile.clientsCount, Math.round(profile.clientsCount * easeProgress)),
        projects: Math.min(profile.projectsCount, Math.round(profile.projectsCount * easeProgress)),
        satisfaction: Math.min(99, Math.round(99.4 * easeProgress)),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isVisible, profile]);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 lg:py-28 bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Quick Query Prompt from Dribbble Reference (4 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[var(--text-secondary)]" />
              <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-mono">
                Contact & Collaboration
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight">
              Any Type Of Query &amp; Discussion.
            </h3>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Open for technical leadership, high-impact product architecture contracts, and select advisory engagements.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center gap-2 text-base font-bold text-[var(--accent-yellow)] hover:text-[var(--accent-hover)] transition-all hover-underline-animation focus:outline-none cursor-pointer"
                data-cursor="view"
              >
                <span>{profile.email}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </button>
            </div>
          </div>

          {/* RIGHT: Iconic Philosophy Statement + Live Counters (7 Cols) */}
          <div className="lg:col-span-7 space-y-10 lg:pl-6">
            <div>
              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight leading-snug">
                "{profile.quote}"
              </blockquote>

              <p className="text-sm text-[var(--text-secondary)] mt-4 leading-relaxed max-w-xl">
                {profile.bioExtended}
              </p>
            </div>

            {/* Metrics Counters from Dribbble Reference */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-[var(--border-subtle)]">
              
              {/* Metric 1 */}
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-extrabold text-[var(--accent-yellow)] font-display">
                  {counts.exp}
                  <span className="text-2xl font-bold">+</span>
                </div>
                <div className="text-xs text-[var(--text-secondary)] font-medium leading-tight font-mono">
                  Years of<br />Experience.
                </div>
              </div>

              {/* Metric 2 */}
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] font-display">
                  {counts.clients}
                  <span className="text-2xl font-bold text-[var(--accent-yellow)]">+</span>
                </div>
                <div className="text-xs text-[var(--text-secondary)] font-medium leading-tight font-mono">
                  Satisfied<br />Clients.
                </div>
              </div>

              {/* Metric 3 */}
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] font-display">
                  {counts.projects}
                  <span className="text-2xl font-bold text-[var(--accent-yellow)]">+</span>
                </div>
                <div className="text-xs text-[var(--text-secondary)] font-medium leading-tight font-mono">
                  Completed<br />Projects.
                </div>
              </div>

              {/* Metric 4 */}
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-extrabold text-emerald-500 font-display">
                  {counts.satisfaction}
                  <span className="text-xl font-bold">%</span>
                </div>
                <div className="text-xs text-[var(--text-secondary)] font-medium leading-tight font-mono">
                  On-Time<br />Delivery Rate.
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
