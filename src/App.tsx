import React, { useState, useEffect } from 'react';
import { 
  defaultProfile, 
  servicesData, 
  projectsData, 
  experienceData, 
  skillCategories, 
  testimonialsData, 
  blogPostsData 
} from './data/portfolioData';
import { Project, UserProfile } from './types';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhilosophyStats } from './components/PhilosophyStats';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PersonaCustomizer } from './components/PersonaCustomizer';

export default function App() {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');
  
  // Theme state management (Dark / Light)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark';
  });

  // Sync theme with HTML document element attribute & class
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'works', 'about', 'experience', 'skills', 'testimonials', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] relative selection:bg-[var(--selection-bg)] selection:text-[var(--selection-text)] transition-colors duration-200">
      {/* Custom Contextual Cursor */}
      <CustomCursor />

      {/* Floating Sticky Navigation Bar */}
      <Navbar 
        profile={profile}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          profile={profile}
          projects={projectsData}
          onSelectProject={setSelectedProject}
          onNavigate={handleNavigate}
        />

        {/* 2. Philosophy & Live Stats Banner */}
        <PhilosophyStats
          profile={profile}
          onNavigate={handleNavigate}
        />

        {/* 3. Services / Expertise Interactive Tiles */}
        <ServicesSection
          services={servicesData}
          projects={projectsData}
          onSelectProject={setSelectedProject}
          onNavigate={handleNavigate}
        />

        {/* 4. Selected Works / Projects Showcase */}
        <ProjectsSection
          projects={projectsData}
          onSelectProject={setSelectedProject}
        />

        {/* 5. Editorial About Section */}
        <AboutSection
          profile={profile}
          onNavigate={handleNavigate}
        />

        {/* 6. Career Timeline & Experience */}
        <ExperienceSection
          experience={experienceData}
        />

        {/* 7. Skills & Capabilities Matrix (Interactive with hover tooltips, modals, filter search, and linked projects) */}
        <SkillsMatrix
          categories={skillCategories}
          projects={projectsData}
          onSelectProject={setSelectedProject}
        />

        {/* 8. Social Proof & Testimonials */}
        <TestimonialsSection
          testimonials={testimonialsData}
        />

        {/* 9. Writings & Editorial Blog Notes */}
        <BlogSection
          posts={blogPostsData}
        />

        {/* 10. Dramatic Full-Width Contact Section */}
        <ContactSection
          profile={profile}
        />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Full Case Study Modal with Live Sandbox */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Live Persona Customizer */}
      <PersonaCustomizer
        profile={profile}
        onUpdateProfile={setProfile}
      />
    </div>
  );
}
