import React, { useState } from 'react';
import { ArrowRight, Calendar, Clock, BookOpen, X, Sparkles } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogSectionProps {
  posts: BlogPost[];
}

export const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 lg:py-32 bg-[var(--bg-main)] relative border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[var(--accent-yellow)]" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-[var(--accent-yellow)] font-bold">
                Writings &amp; Notes
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Thoughts on Craft,<br />
              <span className="text-[var(--text-secondary)]">Systems &amp; Engineering.</span>
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] max-w-md leading-relaxed">
            Essays and field notes on building scalable software, designing humane digital products, and navigating the frontier of creative technology.
          </p>
        </div>

        {/* Editorial Articles List matching Dribbble Reference */}
        <div className="divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="py-8 sm:py-10 group flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer transition-all duration-200 hover:bg-[var(--card-hover)] px-3 sm:px-6 rounded-xl"
              data-cursor="view"
            >
              {/* Left Date & Category */}
              <div className="md:w-64 shrink-0 flex md:flex-col items-center md:items-start justify-between gap-2">
                <span className="text-xs font-mono text-[var(--accent-yellow)] font-bold">
                  {post.formattedDate}
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              {/* Center Title & Excerpt */}
              <div className="flex-1 space-y-1.5 pr-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] line-clamp-1">
                  {post.excerpt}
                </p>
              </div>

              {/* Right Arrow & Read Time */}
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-xs font-mono text-[var(--text-muted)] hidden sm:inline-block">
                  {post.readTime}
                </span>
                <div className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] group-hover:bg-[var(--accent-yellow)] text-[var(--text-secondary)] group-hover:text-[var(--text-inverse)] flex items-center justify-center transition-all border border-[var(--border-subtle)]">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[var(--bg-deep)]/90 backdrop-blur-xl animate-fade-in">
          <div 
            className="w-full max-w-3xl bg-[var(--bg-main)] border border-[var(--border-subtle)] rounded-2xl shadow-2xl p-6 sm:p-10 max-h-[85vh] overflow-y-auto space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-secondary)]">
                <span className="text-[var(--accent-yellow)] font-bold">{selectedPost.formattedDate}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-2 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--accent-yellow)] text-[var(--text-primary)] hover:text-[var(--text-inverse)] transition-colors focus:outline-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full bg-[var(--accent-soft)] text-[var(--accent-yellow)] text-xs font-mono border border-[var(--accent-border)] font-bold">
                {selectedPost.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                {selectedPost.title}
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed pt-2">
              {selectedPost.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-[var(--border-subtle)] flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2.5 rounded-lg bg-[var(--accent-yellow)] hover:bg-[var(--accent-hover)] text-[var(--text-inverse)] font-bold text-xs cursor-pointer"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
