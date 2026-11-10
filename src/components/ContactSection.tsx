import React, { useState } from 'react';
import { 
  Mail, ArrowRight, Send, CheckCircle2, Copy, Check, 
  Sparkles, Linkedin, Github, Instagram, Facebook,
  MapPin, Home, Building2, Phone, ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { UserProfile } from '../types';

interface ContactSectionProps {
  profile: UserProfile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full Stack Development',
    budget: '$25,000 — $50,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const servicesList = [
    'Product Design',
    'Branding & Visuals',
    'Full Stack Development',
    'AI & Cloud Systems',
    'Consulting / Audit'
  ];

  const budgetTiers = [
    '< $15,000',
    '$15,000 — $35,000',
    '$35,000 — $75,000',
    '$75,000+'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Trigger festive celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#F7B52B', '#38BDF8', '#10B981', '#FFFFFF']
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 lg:py-36 bg-[var(--bg-secondary)] relative overflow-hidden border-t border-[var(--border-subtle)]">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--accent-soft)] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Full-Width Dramatic Headline */}
        <div className="mb-16 lg:mb-20 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-4 h-[1px] bg-[var(--accent-yellow)]" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-[var(--accent-yellow)] font-bold">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[var(--text-primary)] tracking-tighter leading-[1.05]">
            LET'S BUILD SOMETHING<br />
            <span className="text-[var(--accent-yellow)]">WORTH REMEMBERING.</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl pt-2">
            Have an ambitious project, high-impact engineering role, or creative design challenge in mind? Let's start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Quick Contact Info & Direct Links (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-subtle)] space-y-6 shadow-sm">
              
              {/* Direct Inquiries & Phone */}
              <div>
                <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-mono block mb-2 font-bold">
                  Direct Inquiries
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="group flex items-center gap-3 text-xl sm:text-2xl font-bold text-[var(--text-primary)] hover:text-[var(--accent-yellow)] transition-colors focus:outline-none cursor-pointer"
                  title="Click to copy email"
                  data-cursor="view"
                >
                  <Mail className="w-5 h-5 text-[var(--accent-yellow)] shrink-0" />
                  <span className="break-all">{profile.email}</span>
                  {copiedEmail ? (
                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  ) : (
                    <Copy className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent-yellow)] shrink-0" />
                  )}
                </button>
                {copiedEmail && (
                  <span className="text-xs text-emerald-500 font-mono mt-1 block">
                    Email copied to clipboard!
                  </span>
                )}
                {profile.phone && (
                  <div className="mt-3 flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Phone:</span>
                    <a href={`tel:${profile.phone}`} className="text-[var(--text-primary)] hover:text-[var(--accent-yellow)] font-semibold transition-colors">
                      {profile.phone}
                    </a>
                  </div>
                )}
              </div>

              {/* SEPARATE ADDRESSES: PRESENT ADDRESS & PERMANENT ADDRESS */}
              <div className="pt-4 border-t border-[var(--border-subtle)] space-y-4">
                <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-mono block font-bold">
                  Address Details
                </span>

                {/* 1. Present Address */}
                <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-1.5 hover:border-[var(--accent-yellow)]/30 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent-yellow)] font-bold flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[var(--accent-yellow)]" />
                      Present Address
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--card-surface)] text-emerald-400 border border-white/5 font-semibold">
                      Current Base
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-primary)] font-medium leading-relaxed">
                    {profile.presentAddress || "Vignan's Foundation for Science, Technology & Research (VFSTR), Vadlamudi, Guntur, Andhra Pradesh — 522213, India"}
                  </p>
                  <span className="text-[10px] font-mono text-[var(--text-muted)] block">
                    Computer Science &amp; Engineering (Autonomous University)
                  </span>
                </div>

                {/* 2. Permanent Address */}
                <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-1.5 hover:border-[var(--accent-yellow)]/30 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#38BDF8] font-bold flex items-center gap-1.5">
                      <Home className="w-3.5 h-3.5 text-[#38BDF8]" />
                      Permanent Address
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--card-surface)] text-[#38BDF8] border border-white/5 font-semibold">
                      Hometown
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-primary)] font-medium leading-relaxed">
                    {profile.permanentAddress || "Line Par, Mirzapur, Nawada, Bihar, India"}
                  </p>
                  <span className="text-[10px] font-mono text-[var(--text-muted)] block">
                    Nawada, Bihar State, India
                  </span>
                </div>

                {/* Status badge */}
                <div className="flex items-center gap-2 text-xs text-emerald-500 font-mono pt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open to Software Developer Roles &amp; Technical Collaborations</span>
                </div>
              </div>

              {/* Socials Connection */}
              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-mono block mb-3 font-bold">
                  Connect on Socials
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-[var(--card-surface)] text-[var(--text-secondary)] hover:text-[var(--text-inverse)] hover:bg-[var(--accent-yellow)] transition-all border border-[var(--border-subtle)] flex items-center justify-center gap-2 text-xs font-mono group"
                    aria-label="GitHub"
                    title="GitHub: shubham-sven"
                    data-cursor="view"
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-[var(--card-surface)] text-[var(--text-secondary)] hover:text-[var(--text-inverse)] hover:bg-[var(--accent-yellow)] transition-all border border-[var(--border-subtle)] flex items-center justify-center gap-2 text-xs font-mono group"
                    aria-label="LinkedIn"
                    title="LinkedIn: shubham-sven"
                    data-cursor="view"
                  >
                    <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={profile.instagramUrl || "https://www.instagram.com/_only__sven?igsi=emxjcHF4OW02bncz"}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-[var(--card-surface)] text-[var(--text-secondary)] hover:text-[var(--text-inverse)] hover:bg-[var(--accent-yellow)] transition-all border border-[var(--border-subtle)] flex items-center justify-center gap-2 text-xs font-mono group"
                    aria-label="Instagram: @_only__sven"
                    title="Instagram: @_only__sven"
                    data-cursor="view"
                  >
                    <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={profile.facebookUrl || "https://www.facebook.com/share/1ML7N89drB/"}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-[var(--card-surface)] text-[var(--text-secondary)] hover:text-[var(--text-inverse)] hover:bg-[var(--accent-yellow)] transition-all border border-[var(--border-subtle)] flex items-center justify-center gap-2 text-xs font-mono group"
                    aria-label="Facebook Profile"
                    title="Facebook Profile"
                    data-cursor="view"
                  >
                    <Facebook className="w-4 h-4 text-[#1877F2] group-hover:text-inherit group-hover:scale-110 transition-transform" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Project Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[var(--card-surface)] p-6 sm:p-10 rounded-2xl border border-[var(--border-subtle)] shadow-xl">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[var(--accent-soft)] text-[var(--accent-yellow)] border border-[var(--accent-border)] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">Message Dispatched!</h3>
                  <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
                    Thank you for reaching out, {formData.name}. I typically respond within 24 hours with an initial scoping review.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', service: 'Full Stack Development', budget: '$25,000 — $50,000', message: '' });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-lg bg-[var(--bg-main)] hover:bg-[var(--card-hover)] text-xs font-semibold text-[var(--text-primary)] transition-colors border border-[var(--border-subtle)] cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Select Service Type */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-mono block font-bold">
                      1. Select Primary Service
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {servicesList.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setFormData({ ...formData, service })}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all focus:outline-none cursor-pointer ${
                            formData.service === service
                              ? 'bg-[var(--accent-yellow)] text-[var(--text-inverse)] font-bold shadow-sm'
                              : 'bg-[var(--bg-main)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Budget Range */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-mono block font-bold">
                      2. Estimated Project Scope / Budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetTiers.map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: tier })}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all focus:outline-none cursor-pointer ${
                            formData.budget === tier
                              ? 'bg-[var(--accent-yellow)] text-[var(--text-inverse)] font-bold shadow-sm'
                              : 'bg-[var(--bg-main)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[var(--text-secondary)] font-bold">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Elena Vance"
                        className="w-full bg-[var(--bg-main)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-yellow)] transition-colors font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[var(--text-secondary)] font-bold">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@company.com"
                        className="w-full bg-[var(--bg-main)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-yellow)] transition-colors font-mono"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[var(--text-secondary)] font-bold">Project Overview &amp; Goals *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your product roadmap, technical constraints, timeline goals, and expectations..."
                      className="w-full bg-[var(--bg-main)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-yellow)] transition-colors resize-none font-mono"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[var(--accent-yellow)] hover:bg-[var(--accent-hover)] text-[var(--text-inverse)] font-extrabold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[var(--accent-soft)] disabled:opacity-50 focus:outline-none cursor-pointer"
                    data-cursor="view"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-pulse">Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Project Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
