"use client";
import React, { useRef, useEffect } from "react";
import Heading from '@/components/Heading';
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedButton from "./AnimatedButton";
gsap.registerPlugin(ScrollTrigger);

export default function TradeJourney() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const fadeLeftElements = sectionRef.current!.querySelectorAll('.fade-left');
      const fadeRightElements = sectionRef.current!.querySelectorAll('.fade-right');

      fadeLeftElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -56 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",  // when top of element hits 80% of viewport height
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      fadeRightElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 56 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section className="Commitments-section relative overflow-hidden max-h-[80vh]">
      <span className="border_shape3"></span>
      <Image
        src="/commitments.png"
        alt="commitments-bg"
        width={1000}
        height={1000}
        className="journey-bg w-full  absolute lg:relative object-cover" style={{filter:' hue-rotate(256deg)'}}
      />
      <div className="max-w-[1460px] w-full mx-auto px-6 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-1/2">
        <div ref={sectionRef} className="py-18  Commitments-card">
          <Heading
            badgeText="Our Commitment to Traders"
            title="Jeta FX — Trading with Trust and Technology"
            subtitle="At Jeta FX, we don’t just provide trading platforms — we build long-term relationships. Every tool, feature, and service we offer is designed to give traders clarity, confidence, and support at every step of their journey. From market access to learning resources, our goal is to make trading secure, transparent, and approachable for all."
            maxWidthClass="boldhead"
          />
          
        </div>
      </div>
    </section>
  );
}
