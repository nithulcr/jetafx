"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { usePathname } from 'next/navigation';

const Hero3 = () => {
  const pathname = usePathname();


  const Hero3Ref = useRef<HTMLElement>(null);

useEffect(() => {
  if (!Hero3Ref.current) return;

  const ctx = gsap.context(() => {
    const fadeElements = Hero3Ref.current?.querySelectorAll('.fade-up');
    if (fadeElements) {
      gsap.fromTo(
        fadeElements,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
    }
  }, Hero3Ref);

  // Refresh ScrollTrigger on all images inside Hero3Ref, safely
  const images = Hero3Ref.current?.querySelectorAll('img');
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
    <section ref={Hero3Ref} className="relative  lg:pb-2 lg:pt-16 lg:pb-6 hero overflow-hidden ">
      <span className='hero-section-span'></span>
      <div className="max-w-[1460px] mx-auto px-6 pt-30   text-center hero-container hero-container2 relative z-10 ">
        <h1
          className="fade-up hero-heading text-4xl md:text-5xl lg:text-7xl max-w-[1000px] mx-auto font-bold mb-4 leading-tight"
        >
          Trading Platforms Built for Speed and Reliability
        </h1>
        <p className="fade-up lg:text-lg text-md text-slate-300 lg:mb-8 max-w-[800px] mx-auto">
         At Jeta FX, we provide advanced trading platforms designed to keep you connected to global markets at all times. Whether you prefer trading on desktop or mobile,
        </p>
       

      </div>
      <div className="fade-up mt-[-50px] opacity-60">
          <Image src="/platform-bg.png" alt="logo icon" className='w-full max-w-[800px] mx-auto' width={1000} height={1000} />
      </div>
       

    </section>
  );
};

export default Hero3;
