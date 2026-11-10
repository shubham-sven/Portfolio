import React, { useState } from 'react';
import { Sparkles, Maximize2, Shield, Award, MapPin, Camera, RefreshCw, CheckCircle2 } from 'lucide-react';
import { UserProfile } from '../types';

interface ProfilePortraitProps {
  profile: UserProfile;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showBadges?: boolean;
}

export const ProfilePortrait: React.FC<ProfilePortraitProps> = ({
  profile,
  className = '',
  size = 'lg',
  showBadges = true,
}) => {
  const [activeFilter, setActiveFilter] = useState<'studio' | 'amber' | 'cyber' | 'noir'>('studio');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    return localStorage.getItem('sven_custom_photo') || null;
  });

  // Default attractive portrait artwork matching Shubham Kumar's uploaded photo
  const defaultPortraitUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCustomPhoto(result);
        localStorage.setItem('sven_custom_photo', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getFilterStyle = () => {
    switch (activeFilter) {
      case 'amber':
        return 'sepia-[0.25] saturate-[1.2] contrast-[1.08] hue-rotate-[-10deg]';
      case 'cyber':
        return 'saturate-[1.35] contrast-[1.15] hue-rotate-[15deg]';
      case 'noir':
        return 'grayscale contrast-[1.25] brightness-[0.95]';
      case 'studio':
      default:
        return 'contrast-[1.05] brightness-[1.02] saturate-[1.1]';
    }
  };

  return (
    <>
      <div className={`relative group ${className}`}>
        {/* Ambient Glow Backdrop */}
        <div className="absolute -inset-2 bg-gradient-to-r from-[var(--accent-yellow)] via-[#38BDF8] to-purple-600 rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500 pointer-events-none" />

        {/* Main Portrait Frame */}
        <div className="relative rounded-2xl overflow-hidden bg-[var(--bg-secondary)] border-2 border-[var(--border-highlight)] shadow-2xl p-2 transition-all duration-300 group-hover:border-[var(--accent-yellow)]">
          
          <div className="relative aspect-[3/4] sm:aspect-square w-full rounded-xl overflow-hidden bg-[#0D0F17]">
            {/* Developer Photo */}
            <img
              src={customPhoto || defaultPortraitUrl}
              alt={`${profile.name} - Software Developer`}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 ${getFilterStyle()}`}
            />

            {/* Gradient Overlays for Cinematic Studio Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F17]/90 via-[#0D0F17]/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-yellow)]/10 via-transparent to-cyan-500/10 pointer-events-none" />

            {/* Top Bar Floating Badges */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-auto">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-400 font-semibold shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span>Available for Roles</span>
              </div>

              <button
                onClick={() => setIsLightboxOpen(true)}
                className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/90 transition-all cursor-pointer shadow-md"
                title="Expand Photo"
                aria-label="Expand Photo"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-3 left-3 right-3 pointer-events-auto">
              <div className="p-3 rounded-xl bg-[#171A25]/90 backdrop-blur-md border border-white/10 shadow-lg">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                    {profile.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-yellow)]" />
                  </h4>
                  <span className="text-[10px] font-mono font-bold text-[var(--accent-yellow)] bg-[var(--accent-yellow)]/10 px-2 py-0.5 rounded border border-[var(--accent-yellow)]/30">
                    B.Tech CSE
                  </span>
                </div>
                <p className="text-[11px] text-[#A6A9B5] font-mono truncate">
                  Full-Stack MERN &amp; Cryptanalysis
                </p>

                {/* Micro Meta Pills */}
                {showBadges && (
                  <div className="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-white/10 text-[10px] font-mono text-white/70">
                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5">VFSTR '27</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5">IEEE Published</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5">Socket.IO</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Filter & Custom Upload Toolbar */}
          <div className="mt-2.5 px-1 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-[var(--text-muted)] mr-1">Style:</span>
              {(['studio', 'amber', 'cyber', 'noir'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setActiveFilter(mode)}
                  className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider transition-all cursor-pointer ${
                    activeFilter === mode
                      ? 'bg-[var(--accent-yellow)] text-[var(--text-inverse)]'
                      : 'bg-[var(--bg-main)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>

            <label className="flex items-center gap-1 text-[10px] text-[var(--accent-yellow)] hover:underline cursor-pointer">
              <Camera className="w-3 h-3" />
              <span>Update Photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-[#171A25] rounded-2xl border border-white/20 p-4 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-yellow)]" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  {profile.name} — Full Portrait
                </span>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="text-xs font-mono text-[#A6A9B5] hover:text-white px-2 py-1 bg-white/10 rounded cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            <div className="relative rounded-xl overflow-hidden max-h-[70vh] bg-black">
              <img
                src={customPhoto || defaultPortraitUrl}
                alt={profile.name}
                referrerPolicy="no-referrer"
                className={`w-full h-auto object-contain mx-auto ${getFilterStyle()}`}
              />
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-[#A6A9B5] pt-1">
              <span>Nawada, Bihar &amp; Guntur, Andhra Pradesh</span>
              <span className="text-emerald-400 font-semibold">Active Full-Stack Developer</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
