import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'project' | 'view'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check for touch device or reduced motion
    const checkTouch = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target as HTMLElement;
      if (!target) return;

      const isProjectCard = target.closest('[data-cursor="project"]');
      const isViewLink = target.closest('[data-cursor="view"]');
      const isInteractive = target.closest('button, a, input, textarea, [role="button"], .cursor-pointer');

      if (isProjectCard) {
        setCursorType('project');
      } else if (isViewLink) {
        setCursorType('view');
      } else if (isInteractive) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth trailing effect
  useEffect(() => {
    if (isTouchDevice) return;

    let animationFrameId: number;
    const updateTrailing = () => {
      setTrailingPos(prev => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.22,
          y: prev.y + dy * 0.22,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrailing);
    };

    animationFrameId = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Small Precision Center Dot */}
      <div
        className="fixed w-2 h-2 bg-[var(--accent-yellow)] rounded-full -translate-x-1/2 -translate-y-1/2 z-50 transition-opacity duration-150"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: cursorType === 'project' || cursorType === 'view' ? 0 : 1,
        }}
      />

      {/* Trailing Outer Ring / Badge */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 flex items-center justify-center font-mono uppercase tracking-widest text-[10px] font-bold ${
          cursorType === 'project'
            ? 'w-16 h-16 bg-[var(--accent-yellow)] text-[var(--text-inverse)] border-[var(--accent-yellow)] scale-100 shadow-lg shadow-[var(--accent-soft)]'
            : cursorType === 'view'
            ? 'w-14 h-14 bg-[var(--text-primary)] text-[var(--text-inverse)] border-[var(--text-primary)] scale-100'
            : cursorType === 'pointer'
            ? 'w-10 h-10 border-[var(--accent-yellow)] bg-[var(--accent-soft)] scale-100'
            : 'w-7 h-7 border-[var(--border-highlight)] bg-transparent'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
        }}
      >
        {cursorType === 'project' && 'OPEN'}
        {cursorType === 'view' && 'VIEW'}
      </div>
    </div>
  );
};
