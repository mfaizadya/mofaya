import React, { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ContentRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: number;
}

export const ContentReveal: React.FC<ContentRevealProps> = ({
  children,
  className = '',
  delay = 0,
  y = 36,
  blur = 8,
}) => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const tween = gsap.fromTo(
      el,
      {
        opacity: 0,
        y,
        filter: `blur(${blur}px)`,
        scale: 0.97,
        willChange: 'opacity, transform, filter',
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        scale: 1,
        duration: 0.65,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, y, blur]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
};

export default ContentReveal;
