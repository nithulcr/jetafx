"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { usePathname } from 'next/navigation';

const Hero2 = () => {
  const pathname = usePathname();


  const hero2Ref = useRef<HTMLElement>(null);

useEffect(() => {
  if (!hero2Ref.current) return;

  const ctx = gsap.context(() => {
    const fadeElements = hero2Ref.current?.querySelectorAll('.fade-up');
    if (fadeElements) {
      gsap.fromTo(
        fadeElements,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
    }
  }, hero2Ref);

  // Refresh ScrollTrigger on all images inside hero2Ref, safely
  const images = hero2Ref.current?.querySelectorAll('img');
  images?.forEach((img) => {
    if (!img.complete) {
      img.addEventListener('load', () => {
        ScrollTrigger.refresh();
      });
    }
  });

  return () => ctx.revert();
}, []);



  
  return (
    <section ref={hero2Ref} className="relative   lg:pt-16  hero">
      <span className='hero-section-span'></span>
      <div className="max-w-[1460px] mx-auto px-6 pt-30 pb-10 lg:pb-10  text-center hero-container hero-container3 relative z-10 ">
        <h1
          className="fade-up hero-heading text-4xl md:text-5xl lg:text-7xl max-w-[1000px] mx-auto font-bold mb-4 leading-tight"
        >
          Grow Together with Jeta FX Partnerships
        </h1>
        <p className="fade-up lg:text-lg text-md text-slate-300 lg:mb-8 max-w-[800px] mx-auto">
         At Jeta FX, we believe in building relationships that create value for everyone.
        </p>
        <div className="fade-up pt-6">
          <Image src="/partnership-bg.png" alt="logo icon" className='w-full max-w-[1000px] mx-auto' width={1000} height={1000} />
        </div>

      </div>


    </section>
  );
};

export default Hero2;
