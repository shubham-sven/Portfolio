import React from 'react';
import { 
  FileText, Sparkles, Code, Compass, Heart, ArrowUpRight, 
  Terminal, ShieldCheck, Cpu, CheckCircle2
} from 'lucide-react';
import { UserProfile } from '../types';
import { ProfilePortrait } from './ProfilePortrait';

interface AboutSectionProps {
  profile: UserProfile;
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile, onNavigate }) => {
  const handleDownloadResume = () => {
    const resumeText = `SHUBHAM KUMAR
Email: ${profile.email} | Phone: ${profile.phone || '+91-6204157565'}
GitHub: ${profile.githubUrl} | LinkedIn: ${profile.linkedinUrl}
Instagram: ${profile.instagramUrl || 'https://www.instagram.com/_only__sven?igsi=emxjcHF4OW02bncz'}
Facebook: ${profile.facebookUrl || 'https://www.facebook.com/share/1ML7N89drB/'}

ADDRESS DETAILS:
- Present Address: ${profile.presentAddress || "Vignan's Foundation for Science, Technology & Research (VFSTR), Vadlamudi, Guntur, Andhra Pradesh — 522213, India"}
- Permanent Address: ${profile.permanentAddress || "Line Par, Mirzapur, Nawada, Bihar, India"}

CAREER OBJECTIVE
To secure a challenging position as a Software Developer in a growth-oriented organization where I can apply my skills in JavaScript, Node.js, and Express.js to build efficient, scalable web applications, while continuously learning and contributing to the company's success through REST API design, CRUD operations, and responsive web development.

TECHNICAL SKILLS
- Languages: Python, Java, JavaScript (ES6+), HTML5, CSS3
- Backend: Node.js, Express.js, MongoDB, REST APIs, JWT Auth, Socket.IO, Nodemailer, Twilio
- Frontend: React.js, HTML5, CSS3, JavaScript (ES6+), Dynamic DOM Rendering, Responsive UI
- Tools & Concepts: Object-Oriented Programming (OOP), DBMS, Data Structures & Algorithms (DSA), Git, GitHub

PROJECTS
1. Women Safety App – Live Tracking & SOS System | React.js, Node.js, Express.js, MongoDB
- Built a full-stack MERN safety platform with real-time GPS tracking, SOS alerts, and Google Maps live tracking via Socket.IO.
- Implemented JWT authentication, emergency contact management, and Email/SMS alerting using Nodemailer and Twilio.
- Added AI-powered voice sentiment analysis for real-time panic detection and a QR-based safety card for police/medical info sharing.

2. Digital Art Marketplace | JavaScript, HTML5, CSS3
- Developed a 5-page web app (Home, Browse, Artists, Collections, Upload) for discovering and showcasing digital artworks.
- Implemented file upload via upload.js with dynamic DOM rendering and input validation.
- Built responsive UI with shared CSS stylesheet ensuring cross-device compatibility.

PUBLICATIONS
- "Cryptoanalysis of Vigenere Cipher using Kasiski Examination and Frequency Analysis Techniques"
  5th International Conference on Computer Networks, Big Data and IoT (ICCBI 2026) — Manipal Academy of Higher Education, Dubai, UAE | June 2026
  IEEE Xplore Compliant • ISBN: 979-8-3315-6380-6

EDUCATION
- B.Tech — Computer Science & Engineering (Expected: May 2027, Pursuing)
  Vignan's Foundation for Science, Technology and Research | Autonomous University
- Class XII (Intermediate), 2023 | Kanhai +2 School, Nawada | Bihar State Board (64%)
- Class X (Matriculation), 2021 | B.I.G.B.P. School, Arun Nagar, Pakri Warama, Nawada | CBSE (54%)

STRENGTHS
Problem Solving • Quick Learner • Team Collaboration • Clean Code Practices • Attention to Detail • Time Management

WEAKNESSES & GROWTH
- Perfectionism: Spend extra time polishing code/UI; timeboxing tasks to balance quality with deadlines.
- Overcommitting: Learning to prioritize and manage task scope effectively.
- New Technologies: Actively upskilling through hands-on projects and documentation.
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Shubham_Kumar_Resume.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="about" className="py-24 lg:py-32 bg-[var(--bg-main)] relative border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[1px] bg-[var(--accent-yellow)]" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-[var(--accent-yellow)] font-bold">
            About
          </span>
        </div>

        {/* Section Heading & Statement with Profile Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight mb-6">
              I design, develop and experiment with digital products that solve real problems.
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              Software Developer specializing in the MERN stack, Node.js RESTful APIs, real-time WebSocket systems, and cryptographic algorithm analysis. Committed to clean code, performance, and responsive UI engineering.
            </p>
          </div>

          <div className="lg:col-span-4 max-w-[280px] sm:max-w-[320px] mx-auto lg:mx-0 w-full">
            <ProfilePortrait profile={profile} size="md" showBadges={true} />
          </div>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Col 1: Background & Journey */}
          <div className="bg-[var(--bg-secondary)] p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)] space-y-4 flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--bg-main)] flex items-center justify-center text-[var(--accent-yellow)] border border-[var(--border-subtle)]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">The Journey</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Currently pursuing B.Tech in Computer Science &amp; Engineering at Vignan's Foundation for Science, Technology and Research (Autonomous University).
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Focused on full-stack MERN engineering, RESTful API architecture, real-time Socket.IO systems, and research in algorithmic cryptanalysis published in IEEE ICCBI 2026.
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)]">
              <span className="text-xs font-mono text-[var(--accent-yellow)] font-bold">B.Tech CSE • Expected May 2027</span>
            </div>
          </div>

          {/* Col 2: Engineering Philosophy */}
          <div className="bg-[var(--bg-secondary)] p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)] space-y-4 flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--bg-main)] flex items-center justify-center text-emerald-500 border border-[var(--border-subtle)]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">Core Philosophy</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Clean code practices, modular backend architectures, and deep attention to responsive UX detail.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                I believe software should be fast, scalable under real-world loads, secure by design, and built to solve critical human needs with empathy.
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)]">
              <span className="text-xs font-mono text-emerald-500 font-bold">Clean Code &amp; Scalability</span>
            </div>
          </div>

          {/* Col 3: Resume & Connect Action */}
          <div className="bg-[var(--card-surface)] p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)] space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--bg-main)] flex items-center justify-center text-[var(--accent-yellow)] border border-[var(--border-subtle)]">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">Credentials &amp; CV</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Download a clean, structured copy of my professional resume containing complete historical client achievements, leadership milestones, and publications.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[var(--border-subtle)]">
              <button
                onClick={handleDownloadResume}
                className="w-full py-3 rounded-xl bg-[var(--accent-yellow)] hover:bg-[var(--accent-hover)] text-[var(--text-inverse)] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm focus:outline-none cursor-pointer"
                data-cursor="view"
              >
                <span>Download Resume (TXT)</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('experience')}
                className="w-full py-2.5 rounded-xl bg-[var(--bg-main)] hover:bg-[var(--card-hover)] text-[var(--text-primary)] text-xs font-mono border border-[var(--border-subtle)] transition-all flex items-center justify-center gap-1.5 focus:outline-none cursor-pointer"
              >
                <span>View Full Timeline</span>
                <span className="text-xs">→</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
