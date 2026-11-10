export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'web' | 'ai' | 'mobile' | 'design' | 'experiments';
  categoryLabel: string;
  description: string;
  longDescription: string;
  tags: string[];
  techStack: string[];
  year: string;
  client?: string;
  role: string;
  featured: boolean;
  accentColor: string;
  image: string;
  secondaryImages: string[];
  liveUrl?: string;
  githubUrl?: string;
  stats?: { label: string; value: string }[];
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    architecture: string[];
    challenges: string[];
    results: string[];
    keyFeatures: string[];
  };
  interactiveType: 'women-safety' | 'art-marketplace' | 'vigenere-crypt' | 'proxy-monitor' | 'tumbler-telemetry' | 'ai-prompt' | 'defi-chart' | 'design-tokens' | 'library-system' | 'event-booking' | 'reading-tracker' | 'atm-simulator' | 'studio-agency';
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  projectCount: number;
  iconName: string;
  deliverables: string[];
  technologies: string[];
}

export interface ExperienceItem {
  id: string;
  year: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  level: 'Mastery' | 'Advanced' | 'Proficient' | string;
  tag?: string;
  description: string;
  years?: string;
  keyCapabilities: string[];
  relatedProjectIds?: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: SkillItem[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  date: string;
  formattedDate: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  content: string[];
}

export interface UserProfile {
  name: string;
  title: string;
  location: string;
  presentAddress?: string;
  permanentAddress?: string;
  tagline: string;
  bioIntro: string;
  bioExtended: string;
  quote: string;
  email: string;
  phone?: string;
  yearsExperience: number;
  clientsCount: number;
  projectsCount: number;
  githubUrl: string;
  linkedinUrl: string;
  instagramUrl?: string;
  facebookUrl?: string;
  dribbbleUrl: string;
  twitterUrl: string;
  avatarUrl?: string;
}
