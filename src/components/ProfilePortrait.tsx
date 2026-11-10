import React, { useState } from 'react';
import { 
  Maximize2, CheckCircle2, Camera, Download, Link, RotateCcw, 
  Github, Sparkles, X, Info, Check, ShieldCheck
} from 'lucide-react';
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
  size = 'md',
  showBadges = true,
}) => {
  const [activeFilter, setActiveFilter] = useState<'studio' | 'amber' | 'cyber' | 'noir'>('studio');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [showCopiedNotice, setShowCopiedNotice] = useState(false);

  // Stored photo preference with permanent fallback hierarchy:
  // 1. Locally uploaded/saved photo (localStorage)
  // 2. profile.avatarUrl from portfolioData
  // 3. Bundled static /profile.jpg in public directory
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    return localStorage.getItem('sven_custom_photo') || null;
  });

  const activePhotoSrc = customPhoto || profile.avatarUrl || '/profile.jpg';

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCustomPhoto(result);
        localStorage.setItem('sven_custom_photo', result);
        setIsSettingsOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyUrl = () => {
    if (imageUrlInput.trim()) {
      setCustomPhoto(imageUrlInput.trim());
      localStorage.setItem('sven_custom_photo', imageUrlInput.trim());
      setImageUrlInput('');
      setIsSettingsOpen(false);
    }
  };

  const handleUseGithubAvatar = () => {
    const githubAvatar = 'https://avatars.githubusercontent.com/u/223609079?v=4';
    setCustomPhoto(githubAvatar);
    localStorage.setItem('sven_custom_photo', githubAvatar);
    setIsSettingsOpen(false);
  };

  const handleResetToDefault = () => {
    localStorage.removeItem('sven_custom_photo');
    setCustomPhoto(null);
    setIsSettingsOpen(false);
  };

  const handleDownloadActivePhoto = () => {
    const link = document.createElement('a');
    link.href = activePhotoSrc;
    link.download = 'profile.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowCopiedNotice(true);
    setTimeout(() => setShowCopiedNotice(false), 3000);
  };

  const getFilterStyle = () => {
    switch (activeFilter) {
      case 'amber':
        return 'sepia-[0.2] saturate-[1.15] contrast-[1.08] hue-rotate-[-8deg]';
      case 'cyber':
        return 'saturate-[1.3] contrast-[1.12] hue-rotate-[12deg]';
      case 'noir':
        return 'grayscale contrast-[1.2] brightness-[0.98]';
      case 'studio':
      default:
        return 'contrast-[1.05] brightness-[1.02] saturate-[1.08]';
    }
  };

  return (
    <>
      <div className={`relative group ${className}`}>
        {/* Cinematic Ambient Glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-[var(--accent-yellow)] via-[#38BDF8] to-[#F59E0B] rounded-3xl opacity-25 group-hover:opacity-40 blur-xl transition-all duration-500 pointer-events-none" />

        {/* Main Card Frame */}
        <div className="relative rounded-2xl bg-[var(--bg-secondary)] border-2 border-[var(--border-highlight)] shadow-2xl overflow-hidden transition-all duration-300 group-hover:border-[var(--accent-yellow)]">
          
          {/* Unobstructed Photo Container */}
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0A0D14]">
            {/* Developer Portrait Image with error fallback */}
            <img
              src={activePhotoSrc}
              alt={`${profile.name} - Software Developer`}
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Graceful fallback to bundled profile.jpg if custom URL fails
                const target = e.currentTarget;
                if (target.src !== window.location.origin + '/profile.jpg') {
                  target.src = '/profile.jpg';
                }
              }}
              className={`w-full h-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.03] ${getFilterStyle()}`}
            />

            {/* Subtle Vignette along edges - keeping face fully bright and visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none" />

            {/* Top Floating Action Strip */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-auto z-10">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-emerald-400 font-semibold shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                <span>Available for Roles</span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIsSettingsOpen(true)}
                  className="w-7 h-7 rounded-full bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/90 hover:text-[var(--accent-yellow)] hover:bg-black/90 transition-all cursor-pointer shadow-lg"
                  title="Photo Settings & Vercel Sync"
                  aria-label="Photo Settings"
                >
                  <Camera className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="w-7 h-7 rounded-full bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/90 hover:text-white hover:bg-black/90 transition-all cursor-pointer shadow-lg"
                  title="Expand Full Portrait"
                  aria-label="Expand Photo"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Minimalist Floating Verified Badge in Bottom Corner */}
            <div className="absolute bottom-3 right-3 pointer-events-auto">
              <span className="px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-[var(--accent-yellow)]/40 text-[10px] font-mono font-bold text-[var(--accent-yellow)] shadow-lg flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[var(--accent-yellow)]" />
                Verified Dev
              </span>
            </div>
          </div>

          {/* Integrated Profile Info Section (Placed below photo to keep face 100% visible) */}
          <div className="p-3.5 sm:p-4 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-[var(--text-primary)] tracking-tight flex items-center gap-1.5">
                  {profile.name}
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-yellow)] fill-[var(--accent-yellow)]/20" />
                </h4>
                <p className="text-[11px] text-[var(--text-secondary)] font-mono">
                  Full-Stack MERN &amp; Cryptanalysis
                </p>
              </div>

              <span className="text-[10px] font-mono font-bold text-[var(--accent-yellow)] bg-[var(--accent-yellow)]/10 px-2 py-1 rounded border border-[var(--accent-yellow)]/30">
                B.Tech CSE
              </span>
            </div>

            {/* Micro Meta Badges */}
            {showBadges && (
              <div className="flex flex-wrap gap-1.5 pt-1 text-[10px] font-mono text-[var(--text-secondary)]">
                <span className="px-2 py-0.5 rounded bg-[var(--bg-main)] border border-[var(--border-subtle)]">VFSTR '27</span>
                <span className="px-2 py-0.5 rounded bg-[var(--bg-main)] border border-[var(--border-subtle)]">IEEE Published</span>
                <span className="px-2 py-0.5 rounded bg-[var(--bg-main)] border border-[var(--border-subtle)]">Socket.IO</span>
              </div>
            )}

            {/* Lighting Style Selector Strip */}
            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono">
              <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Style:</span>
              <div className="flex items-center gap-1">
                {(['studio', 'amber', 'cyber', 'noir'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setActiveFilter(mode)}
                    className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider transition-all cursor-pointer ${
                      activeFilter === mode
                        ? 'bg-[var(--accent-yellow)] text-[var(--text-inverse)] shadow-sm'
                        : 'bg-[var(--bg-main)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Settings & Vercel Sync Modal */}
      {isSettingsOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsSettingsOpen(false)}
        >
          <div
            className="relative max-w-md w-full bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-highlight)] p-5 sm:p-6 shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-[var(--accent-yellow)]" />
                <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
                  Manage Developer Photo
                </h3>
              </div>
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="p-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Live Preview Miniature */}
            <div className="flex items-center gap-4 p-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)]">
              <img
                src={activePhotoSrc}
                alt="Current Preview"
                className="w-16 h-16 rounded-xl object-cover object-[center_20%] border border-[var(--border-highlight)]"
              />
              <div className="flex-1 text-xs">
                <span className="font-bold text-[var(--text-primary)] block">Active Photo Source</span>
                <span className="text-[11px] text-[var(--text-secondary)] font-mono block truncate max-w-[220px]">
                  {customPhoto ? 'Custom Upload / URL' : '/public/profile.jpg (Bundled Asset)'}
                </span>
                <span className="text-[10px] text-emerald-400 font-mono mt-0.5 block">
                  ✓ Always displays clearly on Vercel
                </span>
              </div>
            </div>

            {/* Option 1: Upload from Device */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] block font-bold">
                1. Upload From Computer / Phone
              </label>
              <label className="flex items-center justify-center gap-2 w-full p-3 rounded-xl border-2 border-dashed border-[var(--border-subtle)] hover:border-[var(--accent-yellow)] bg-[var(--bg-main)] text-xs font-mono text-[var(--text-primary)] cursor-pointer transition-all">
                <Camera className="w-4 h-4 text-[var(--accent-yellow)]" />
                <span>Choose Image File...</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Option 2: Image URL */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] block font-bold">
                2. Or Paste Any Image URL (Hosted Link)
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://... (GitHub, Imgur, Cloudinary, etc.)"
                  value={imageUrlInput}
                  onChange={(e) => setImageUrlInput(e.target.value)}
                  className="flex-1 bg-[var(--bg-main)] border border-[var(--border-subtle)] rounded-xl px-3 py-2 text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-yellow)]"
                />
                <button
                  onClick={handleApplyUrl}
                  className="px-4 py-2 bg-[var(--accent-yellow)] text-[var(--text-inverse)] font-bold rounded-xl text-xs font-mono cursor-pointer hover:bg-[var(--accent-hover)] transition-all"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Quick Presets: GitHub & Default */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={handleUseGithubAvatar}
                className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] hover:border-[var(--accent-yellow)] text-[11px] font-mono text-[var(--text-primary)] cursor-pointer transition-all"
              >
                <Github className="w-3.5 h-3.5 text-[var(--accent-yellow)]" />
                <span>GitHub Avatar</span>
              </button>

              <button
                onClick={handleResetToDefault}
                className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] hover:border-[var(--accent-yellow)] text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Default</span>
              </button>
            </div>

            {/* Vercel Permanent Deployment Guide Card */}
            <div className="p-3.5 rounded-xl bg-[var(--accent-yellow)]/10 border border-[var(--accent-yellow)]/20 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[var(--accent-yellow)]">
                <span className="flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  Vercel Deployment Tip
                </span>
                <button
                  onClick={handleDownloadActivePhoto}
                  className="flex items-center gap-1 text-[10px] text-white bg-[var(--accent-yellow)]/30 hover:bg-[var(--accent-yellow)] hover:text-black px-2 py-0.5 rounded cursor-pointer transition-all"
                  title="Download photo as profile.jpg"
                >
                  <Download className="w-3 h-3" />
                  <span>Download profile.jpg</span>
                </button>
              </div>
              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                When you deploy to Vercel, Vercel pulls from your Git repository. The file at <code className="text-[var(--text-primary)] font-bold">public/profile.jpg</code> is bundled with your site and displays automatically!
              </p>
              {showCopiedNotice && (
                <div className="text-[10px] text-emerald-400 font-mono font-bold flex items-center gap-1">
                  <Check className="w-3 h-3" /> Downloaded as profile.jpg! Place this into your public/ folder.
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* High-Resolution Full-Screen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-[#121520] rounded-2xl border border-white/20 p-4 sm:p-5 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-yellow)] animate-pulse" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  {profile.name} — Full Portrait View
                </span>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="text-xs font-mono text-[#A6A9B5] hover:text-white px-2.5 py-1 bg-white/10 hover:bg-white/20 rounded cursor-pointer transition-all"
              >
                Close ✕
              </button>
            </div>

            {/* Uncropped High-Definition Photo */}
            <div className="relative rounded-xl overflow-hidden max-h-[65vh] bg-black flex items-center justify-center border border-white/10">
              <img
                src={activePhotoSrc}
                alt={profile.name}
                referrerPolicy="no-referrer"
                className={`max-h-[65vh] w-auto object-contain mx-auto ${getFilterStyle()}`}
              />
            </div>

            {/* Lightbox Footer Details & Quick Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#A6A9B5] pt-1">
              <span>{profile.presentAddress || 'VFSTR University, Guntur, AP'}</span>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-semibold">Active Full-Stack Developer</span>
                <button
                  onClick={() => {
                    setIsLightboxOpen(false);
                    setIsSettingsOpen(true);
                  }}
                  className="text-[10px] text-[var(--accent-yellow)] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Camera className="w-3 h-3" />
                  <span>Change</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
