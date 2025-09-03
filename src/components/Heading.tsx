'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeadingProps {
  badgeText: string;
  title: string;
  subtitle: string;
}

export default function Heading({ badgeText, title, subtitle }: HeadingProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade + move in whole container
      gsap.from('.gma-heading', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
      });

      // Animate gradient background of badge on scroll
      gsap.fromTo(
        badgeRef.current,
        { backgroundPosition: '80% 50%' },
        {
          backgroundPosition: '0% 50%',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'bottom 50%',
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center text-center max-w-[500px] mx-auto"
    >
      <div
        ref={badgeRef}
        className="heading-badge mb-2 md:mb-4 shuffle"
      >
        <span>{badgeText}</span>
      </div>
      <h2 className="text-3xl md:text-5xl text-white mb-1 md:mb-3 gma-heading">
        {title}
      </h2>
      <p className="text-md text-gray-300 gma-heading">{subtitle}</p>
    </div>
  );
}
