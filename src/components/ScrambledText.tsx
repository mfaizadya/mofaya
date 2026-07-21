import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import './ScrambledText.css';

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

interface ScrambledTextProps {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export function ScrambledText({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:',
  className = '',
  style = {},
  children,
}: ScrambledTextProps) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const charsRef = useRef<Element[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    const text = root?.querySelector('span');
    if (!root || !text) return;

    const split = SplitText.create(text, { type: 'chars', charsClass: 'char' });
    charsRef.current = split.chars;

    charsRef.current.forEach((char) => {
      gsap.set(char, {
        display: 'inline-block',
        attr: { 'data-content': char.innerHTML },
      });
    });

    const handleMove = (event: PointerEvent) => {
      charsRef.current.forEach((char) => {
        const { left, top, width, height } = char.getBoundingClientRect();
        const distance = Math.hypot(
          event.clientX - (left + width / 2),
          event.clientY - (top + height / 2),
        );

        if (distance < radius) {
          gsap.to(char, {
            overwrite: true,
            duration: duration * (1 - distance / radius),
            scrambleText: {
              text: char.getAttribute('data-content') ?? '',
              chars: scrambleChars,
              speed,
            },
            ease: 'none',
          });
        }
      });
    };

    root.addEventListener('pointermove', handleMove);
    return () => {
      root.removeEventListener('pointermove', handleMove);
      split.revert();
    };
  }, [radius, duration, speed, scrambleChars]);

  return (
    <span ref={rootRef} className={`scrambled-text ${className}`} style={style}>
      <span>{children}</span>
    </span>
  );
}
