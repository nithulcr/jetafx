'use client';

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

interface HeadingProps {
  badgeText: string;
  title: string;
  subtitle: string;
  maxWidthClass?: string; // Tailwind max-width classes as string
}

export default function Heading({
  badgeText,
  title,
  subtitle,
  maxWidthClass = "max-w-[500px]",
}: HeadingProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !badgeRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".gma-heading", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.fromTo(
        badgeRef.current,
        { backgroundPosition: "80% 50%" },
        {
          backgroundPosition: "0% 50%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 50%",
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
      className={`flex flex-col items-center text-center mx-auto ${maxWidthClass}`}
    >
      <div
        ref={badgeRef}
        className="heading-badge mb-3 md:mb-5 shuffle"
      >
        <span>{badgeText}</span>
      </div>
      <h2 className="text-2xl md:text-5xl text-white mb-2 md:mb-4 gma-heading">
        {title}
      </h2>
      <p className="text-[15px] text-gray-300 gma-heading max-w-[700px] mx-auto">{subtitle}</p>
    </div>
  );
}


