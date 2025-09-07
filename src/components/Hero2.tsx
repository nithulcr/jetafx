"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero2 = () => {


  const hero2Ref = useRef<HTMLElement>(null);

  useEffect(() => {

   

    if (hero2Ref.current) {
      gsap.fromTo(
        hero2Ref.current.querySelectorAll('.fade-up'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
     
     
    }
  }, []);

  
  return (
    <section ref={hero2Ref} className="relative  lg:pb-2 lg:pt-16 lg:pb-6 hero overflow-hidden ">
      <span className='hero-section-span'></span>
      <div className="max-w-[1460px] mx-auto px-6 pt-30 pb-10 lg:pb-20  text-center hero-container hero-container2 relative z-10 ">
        <h1
          className="fade-up hero-heading text-4xl md:text-5xl lg:text-7xl max-w-[1000px] mx-auto font-bold mb-4 leading-tight"
        >
          Secure & Transparent Trading with Jeta FX
        </h1>
        <p className="fade-up lg:text-lg text-md text-slate-300 lg:mb-8 max-w-[800px] mx-auto">
          At Jeta FX, we believe trading should be clear, fair, and accessible for everyone.
        </p>
        <div className="fade-up pt-6">
          <Image src="/about-us-img.png" alt="logo icon" className='w-full max-w-[1000px] mx-auto' width={1000} height={1000} />
        </div>

      </div>


    </section>
  );
};

export default Hero2;
