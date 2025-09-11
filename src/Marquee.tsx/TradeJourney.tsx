"use client";
import React, { useRef, useEffect } from "react";
import Heading from '@/Marquee.tsx/Heading';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedButton from "./AnimatedButton";
gsap.registerPlugin(ScrollTrigger);

export default function TradeJourney() {
  const tradeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!tradeRef.current) return;

    const ctx = gsap.context(() => {
      const fadeLeftElements = tradeRef.current!.querySelectorAll('.fade-left2');
      const fadeRightElements = tradeRef.current!.querySelectorAll('.fade-right2');

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
    }, tradeRef);

    return () => {
      ctx.revert();

    };
  }, []);

  return (
    <section className="trade-journey-section relative overflow-hidden py-0 lg:py-24">

      {/* <Image
        src="/journey-bg.png"
        alt="journey-bg"
        width={500}
        height={500}
        className="journey-bg w-full opacity-50 absolute lg:relative object-cover pointer-events-none"
      /> */}

      <div className="max-w-[1460px] w-full mx-auto px-6">
        <div ref={tradeRef} className="py-18 lg:py-24 trade-journey-card">
          <Heading
            badgeText="Start Your Trade Journey here!"
            title="Grow Now with Jetafx"
            subtitle="Unlock the power of data to drive smarter decisions and faster growth with our platform."
            maxWidthClass="max-w-[500px]"
          />
          <div className="flex justify-center gap-4 mt-8">
            <div className="shuffle">
              <AnimatedButton href="" label="Get Started Now" className="fade-left2 w-fit" />
            </div>
            <div className="shuffle">
              <AnimatedButton href="" label="Sign In" className="fade-right2 w-fit transparent-btn" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
