import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, ShieldCheck } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = testimonials[currentIndex] || testimonials[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[var(--bg-main)] relative overflow-hidden border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-12">
          <span className="w-4 h-[1px] bg-[var(--accent-yellow)]" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-[var(--accent-yellow)] font-bold">
            Social Proof &amp; Endorsements
          </span>
        </div>

        {/* Large Editorial Quotation Card from Dribbble Reference */}
        <div className="bg-[var(--card-surface)] border border-[var(--border-subtle)] rounded-2xl p-8 sm:p-12 lg:p-16 relative shadow-lg">
          
          {/* Subtle Ambient Quote Mark */}
          <Quote className="w-16 h-16 text-[var(--accent-yellow)]/20 absolute top-8 right-8 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Client Avatar (3 Cols) */}
            <div className="lg:col-span-3 flex flex-col items-center sm:items-start">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-[var(--border-subtle)] shadow-xl bg-[var(--bg-deep)]">
                <img
                  src={current.avatar}
                  alt={current.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-[var(--accent-yellow)]/10 mix-blend-color" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mt-4">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--accent-yellow)] text-[var(--accent-yellow)]" />
                ))}
              </div>
            </div>

            {/* Right: Quote Text & Signature (9 Cols) */}
            <div className="lg:col-span-9 space-y-6">
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-[var(--text-primary)] leading-relaxed italic">
                "{current.quote}"
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[var(--border-subtle)]">
                <div>
                  <h4 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                    {current.name}
                    <ShieldCheck className="w-4 h-4 text-[var(--accent-yellow)]" />
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-mono">
                    {current.role} @ <span className="text-[var(--text-primary)] font-semibold">{current.company}</span>
                  </p>
                </div>

                {/* Slider Controls matching Dribbble Reference */}
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5 mr-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          currentIndex === idx
                            ? 'w-8 bg-[var(--accent-yellow)]'
                            : 'w-2 bg-[var(--border-medium)] hover:bg-[var(--accent-yellow)]'
                        }`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full bg-[var(--bg-main)] hover:bg-[var(--accent-yellow)] text-[var(--text-primary)] hover:text-[var(--text-inverse)] flex items-center justify-center transition-colors border border-[var(--border-subtle)] cursor-pointer focus:outline-none"
                    aria-label="Previous testimonial"
                    data-cursor="view"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-[var(--bg-main)] hover:bg-[var(--accent-yellow)] text-[var(--text-primary)] hover:text-[var(--text-inverse)] flex items-center justify-center transition-colors border border-[var(--border-subtle)] cursor-pointer focus:outline-none"
                    aria-label="Next testimonial"
                    data-cursor="view"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
