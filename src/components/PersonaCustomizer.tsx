import React, { useState } from 'react';
import { Sliders, X, RotateCcw, Check, Sparkles, User, Mail, MapPin, Camera, Image, Link } from 'lucide-react';
import { UserProfile } from '../types';
import { defaultProfile } from '../data/portfolioData';

interface PersonaCustomizerProps {
  profile: UserProfile;
  onUpdateProfile: (updated: UserProfile) => void;
}

export const PersonaCustomizer: React.FC<PersonaCustomizerProps> = ({
  profile,
  onUpdateProfile,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const presets = [
    {
      id: 'shubham-fullstack',
      label: 'Shubham Kumar (Full-Stack Developer)',
      data: defaultProfile,
    },
    {
      id: 'shubham-backend',
      label: 'Shubham Sven (Backend & REST APIs)',
      data: {
        ...defaultProfile,
        name: 'Shubham Kumar.',
        title: 'Backend Engineer & Node.js/Express Specialist.',
        location: 'Nawada, Bihar & Guntur, Andhra Pradesh',
        tagline: 'REST API Architect, CRUD Data Modeler & Socket.IO Developer.',
        bioIntro: 'Designing modular Express.js servers, robust RESTful APIs, JWT authentication middlewares, and real-time Socket.IO communication pipelines.',
        email: 'shubhamsven@gmail.com',
        phone: '+91-6204157565',
        quote: "Clean, robust backend APIs are the bedrock of reliable and scalable digital applications.",
        yearsExperience: 2,
        clientsCount: 8,
        projectsCount: 12,
      },
    },
    {
      id: 'shubham-research',
      label: 'Shubham Kumar (IEEE Cryptanalysis Researcher)',
      data: {
        ...defaultProfile,
        name: 'Shubham Kumar.',
        title: 'Computer Science Undergraduate & Security Researcher.',
        location: 'Vignan University, Andhra Pradesh, India',
        tagline: 'Algorithm Researcher (IEEE ICCBI 2026), Python & Java Developer.',
        bioIntro: 'Lead author of published research at IEEE ICCBI 2026 on automated polyalphabetic cryptanalysis, Kasiski examination, and statistical frequency distributions.',
        email: 'shubhamsven@gmail.com',
        phone: '+91-6204157565',
        quote: "Mathematical rigor and clean algorithmic code unlock deep solutions to computational problems.",
        yearsExperience: 2,
        clientsCount: 8,
        projectsCount: 12,
      },
    },
  ];

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[var(--bg-secondary)] hover:bg-[var(--card-hover)] text-[var(--accent-yellow)] border border-[var(--border-subtle)] shadow-xl backdrop-blur-md text-xs font-mono transition-all hover:scale-105 cursor-pointer focus:outline-none"
          title="Customize Portfolio Profile & Presets"
          data-cursor="view"
        >
          <Sliders className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Customize Persona</span>
        </button>
      </div>

      {/* Slide-in Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
          <div 
            className="w-full max-w-md h-full bg-[var(--bg-secondary)] border-l border-[var(--border-subtle)] p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[var(--accent-yellow)]" />
                  <h3 className="text-base font-bold text-[var(--text-primary)]">Live Persona Customizer</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg bg-[var(--bg-main)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Presets */}
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-mono block font-bold">
                  Quick Presets
                </span>
                <div className="space-y-2">
                  {presets.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => onUpdateProfile(preset.data)}
                      className={`w-full text-left p-3 rounded-xl text-xs font-mono transition-all border cursor-pointer ${
                        profile.name === preset.data.name
                          ? 'bg-[var(--accent-yellow)] text-[var(--text-inverse)] font-bold border-[var(--accent-yellow)] shadow-sm'
                          : 'bg-[var(--bg-main)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[var(--accent-yellow)]'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Input Fields */}
              <div className="space-y-4 pt-4 border-t border-[var(--border-subtle)]">
                <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-mono block font-bold">
                  Edit Portfolio Details
                </span>

                {/* Profile Photo Control */}
                <div className="space-y-1.5 p-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)]">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-mono font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-[var(--accent-yellow)]" />
                      Profile Picture URL
                    </label>
                    <span className="text-[9px] font-mono text-emerald-400">Bundled /profile.jpg</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="/profile.jpg or https://..."
                      value={profile.avatarUrl || '/profile.jpg'}
                      onChange={(e) => {
                        const val = e.target.value;
                        onUpdateProfile({ ...profile, avatarUrl: val });
                        localStorage.setItem('sven_custom_photo', val);
                      }}
                      className="flex-1 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-lg px-2.5 py-1.5 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-yellow)] font-mono"
                    />
                    <label className="px-2.5 py-1.5 bg-[var(--accent-yellow)] text-[var(--text-inverse)] text-[11px] font-mono font-bold rounded-lg cursor-pointer hover:bg-[var(--accent-hover)] transition-all flex items-center gap-1">
                      <span>Upload</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (evt) => {
                              const res = evt.target?.result as string;
                              onUpdateProfile({ ...profile, avatarUrl: res });
                              localStorage.setItem('sven_custom_photo', res);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        className="hidden"
                      />
                    </label>
                  </div>
                  <p className="text-[10px] text-[var(--text-muted)] font-mono pt-0.5">
                    For permanent Vercel deploys, replace <code className="text-[var(--text-primary)]">public/profile.jpg</code> in your repo.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-[var(--text-secondary)]">Display Name</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => onUpdateProfile({ ...profile, name: e.target.value })}
                    className="w-full bg-[var(--bg-main)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-yellow)] font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-[var(--text-secondary)]">Hero Subtitle &amp; Location</label>
                  <input
                    type="text"
                    value={profile.title}
                    onChange={(e) => onUpdateProfile({ ...profile, title: e.target.value })}
                    className="w-full bg-[var(--bg-main)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-yellow)] font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-[var(--text-secondary)]">Contact Email</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => onUpdateProfile({ ...profile, email: e.target.value })}
                    className="w-full bg-[var(--bg-main)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-yellow)] font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-[var(--text-secondary)]">Editorial Philosophy Quote</label>
                  <textarea
                    rows={3}
                    value={profile.quote}
                    onChange={(e) => onUpdateProfile({ ...profile, quote: e.target.value })}
                    className="w-full bg-[var(--bg-main)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-yellow)] resize-none font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-secondary)]">Years Exp.</label>
                    <input
                      type="number"
                      value={profile.yearsExperience}
                      onChange={(e) => onUpdateProfile({ ...profile, yearsExperience: Number(e.target.value) })}
                      className="w-full bg-[var(--bg-main)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-yellow)] font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-secondary)]">Clients Count</label>
                    <input
                      type="number"
                      value={profile.clientsCount}
                      onChange={(e) => onUpdateProfile({ ...profile, clientsCount: Number(e.target.value) })}
                      className="w-full bg-[var(--bg-main)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-yellow)] font-mono"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Reset & Close */}
            <div className="pt-6 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <button
                onClick={() => onUpdateProfile(defaultProfile)}
                className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Defaults
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-[var(--accent-yellow)] hover:bg-[var(--accent-hover)] text-[var(--text-inverse)] font-bold text-xs rounded-lg cursor-pointer"
              >
                Apply &amp; Close
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
