"use client";
import React, { useLayoutEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import gsap from "gsap";
import AnimatedButton from "./AnimatedButton";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSecondGrid from "./HeroSecondGrid";
import Marquee from "./Marquee";

gsap.registerPlugin(ScrollTrigger);

import { usePathname } from 'next/navigation';

const Hero = () => {
  const pathname = usePathname();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const countRefs = useRef<HTMLSpanElement[]>([]);

  // Memoized callback to collect count spans, avoid duplicates
  const setCountRef = useCallback((el: HTMLSpanElement | null) => {
    if (el && !countRefs.current.includes(el)) {
      countRefs.current.push(el);
    }
  }, []);

  useLayoutEffect(() => {

    if (!sectionRef.current) return;
    const section = sectionRef.current;

    // Reset countRefs early before animations
    countRefs.current = [];

    const ctx = gsap.context(() => {
      // Reset initial styles for animated elements
      gsap.set(".blurry-card", { clearProps: "all" });
      gsap.set(".blurry-card", { opacity: 0, x: 60, y: 20 });
      gsap.set(".s-fade-up", { opacity: 0, y: 20 });
      gsap.set(".fade-up", { opacity: 0, y: 40 });
      gsap.set(".fade-left", { opacity: 0, x: -56 });
      gsap.set(".fade-right", { opacity: 0, x: 56 });

      const tl = gsap.timeline();

      // Animate split heading
      if (headingRef.current) {
        const words = headingRef.current.querySelectorAll("span");
        tl.from(words, {
          opacity: 0,
          y: 60,
          stagger: 0.05,
          duration: 0.5,
          ease: "power4.out",
        });
      }

      // Animate counts
      countRefs.current.forEach((ref) => {
        if (ref.dataset?.target) {
          const target = parseFloat(ref.dataset.target);
          if (!isNaN(target)) {
            const obj = { value: 0 };
            gsap.to(obj, {
              value: target,
              duration: 1.5,
              ease: "power1.out",
              scrollTrigger: {
                trigger: section.querySelector(".hero-second-grid"),
                start: "top 75%",
                once: true,
              },
              onUpdate: () => {
                ref.innerText = obj.value.toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                });
              },
            });
          }
        }
      });

      // Timeline fade animations
      tl.fromTo(
        section.querySelectorAll(".fade-up"),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 },
        "-=0.6"
      );
      tl.fromTo(
        section.querySelectorAll(".fade-left"),
        { opacity: 0, x: -56 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", delay: 0.3 },
        "<"
      );
      tl.fromTo(
        section.querySelectorAll(".fade-right"),
        { opacity: 0, x: 56 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", delay: 0.3 },
        "<"
      );

      gsap.to(".blurry-card", {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: section.querySelector(".hero-second-grid"),
          start: "top 85%",
          end: "top 20%",
          toggleActions: "play none none reverse",
           markers: true,
        },
      });

      gsap.to(".s-fade-up", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.3,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: section.querySelector(".hero-second-grid"),
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Refresh ScrollTrigger after images load
      const imgs = section.querySelectorAll("img");
      imgs.forEach((img) => {
        if (!img.complete) {
          img.addEventListener("load", () => {
            ScrollTrigger.refresh();
          }, { once: true });
        }
      });
    }, sectionRef);

    // Refresh after setup with RAF and also nudge scroll to re-trigger ScrollTrigger (fixes SPA navigation bugs)
    requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
      // Small scroll nudge:
      window.scrollTo(window.pageXOffset, window.pageYOffset - 1);
      window.scrollTo(window.pageXOffset, window.pageYOffset);
    });

    // Window load event to refresh ScrollTrigger if not already fired
    const onLoad = () => ScrollTrigger.refresh(true);
    window.addEventListener("load", onLoad);

    return () => {
      ctx.revert();
      window.removeEventListener("load", onLoad);
    };
  }, [pathname]);

  const heading = "World-Class Forex Trading Where Profits Meet Precision";
  const splitHeading = heading.split(" ").map((word, i) => (
    <span key={i} className="inline-block mr-2">
      {word}
    </span>
  ));
  return (
    <section ref={sectionRef} className="relative lg:pb-2 lg:pt-20 lg:pb-6 hero overflow-hidden">
      <div className="max-w-[1460px] mx-auto px-6 pt-24 pb-10 lg:pb-20 lg:pt-30 text-center hero-container relative z-10 ">
        <h1
          ref={headingRef}
          className="hero-heading text-4xl md:text-5xl lg:text-7xl max-w-[1100px] mx-auto font-bold mb-4 leading-tight"
        >
          {splitHeading}
        </h1>
        <p className="fade-up lg:text-lg text-md text-slate-300 mb-8 max-w-[800px] mx-auto">
          Experience professional-grade trading across forex, commodities, indices, and digital currencies. Advanced analytics, lightning-fast execution, and global market access in one powerful platform.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <div className='shuffle'> <AnimatedButton href="https://my.jetafx.com/en/auth/sign-in" label="Log in" className="fade-left w-fit" /></div>
          <div className='shuffle'><AnimatedButton href="https://my.jetafx.com/en/auth/sign-up" label="Sign up" className="fade-right w-fit transparent-btn" /></div>
        </div>
      </div>
      <div className="max-w-[1460px] hero-second-grid mx-auto px-6 py-6 flex gap-6 bg-transparent">
        {/* Why Choose Us Card */}
        <div className="relative blurry-card blurry-card1 ">
          <span></span>
          <h3 className="text-xl mb-3 s-fade-up">Why Choose Us</h3>
          <p className="text-slate-400 text-[15px] leading-normal mb-5 s-fade-up">
            Discover 2,200+ global markets including forex pairs, leading stocks, and commodities — all in one powerful platform built for growth and opportunity.
          </p>
          <div className="flex flex-col gap-2 relative max-w-[300px] mx-auto s-fade-up">
            <div className="choose-btn-card flex items-center gap-2 px-2 py-2 rounded-xl bg-[#16171A] w-fit min-w-[150px] border border-[#232324]">
              <Image src="/favicon_img.png" alt="Logo" width={30} height={30} />
              <span className="font-medium text-sm">Best Support</span>
            </div>
            <div className="choose-btn-card z-1 flex items-center gap-2 px-2 py-2 rounded-xl bg-[#16171A] w-fit min-w-[150px] mx-auto mt-[-18px] border border-[#232324]">
              <Image src="/user.png" alt="Logo" className="rounded-full object-cover" width={30} height={30} />
              <span className="font-medium text-sm">Top Traders</span>
            </div>
            <div className="choose-btn-card flex items-center gap-2 px-2 py-2 rounded-xl bg-[#16171A] w-fit min-w-[150px] self-end mt-[-18px] border border-[#232324]">
              <Image src="/earnings.png" alt="Logo" width={30} height={30} />
              <span className="font-medium text-sm">Best Earnings</span>
            </div>
          </div>
        </div>
        {/* Fast, Reliable Execution Card */}
        <div className="relative blurry-card blurry-card2 flex flex-col justify-between">
          <h3 className="text-xl mb-3 s-fade-up">Fast, Reliable Execution</h3>
          <p className="text-slate-400 text-[15px] leading-normal mb-6 max-w-2xl s-fade-up">
            Take advantage of ultra-fast execution and live market depth. Trade in real time with infrastructure that keeps you aligned with every move.
          </p>
          <div className='blurry-card2-values relative md:block hidden s-fade-up'>
            <div className='absolute-line'>
              <span></span>
            </div>
            <div className='absolute-line-button'>
              <span className='dot-span'></span>
              <span ref={setCountRef} data-target="1917.44" className="count-number absolute-line-mark w-fit bg-white text-black font-semibold px-3 py-1 rounded-full shadow text-xs">0</span>
            </div>
            <div className='grid grid-cols-3'>
              <div className='relative'>
                <span className='green-line'></span>
              </div>
              <div className='trade_rate_img_container relative'>
                <Image src="/trade_rate.png" alt="trade rate" className="trade_rate_img" width={300} height={300} />
                <div className=" count-number absolute left-[58%] top-[70%] bg-white pl-4 pr-1 py-1.5 rounded-full text-black font-bold text-xs flex items-center gap-1"
                  style={{ transform: "translate(-50%, -50%)" }}>
                  <span className='pr-1'>$<span ref={setCountRef} data-target="10" className="count-number">0</span>.00 </span>
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.4375 13.2629C0.4375 5.99387 6.32981 0.101562 13.5988 0.101562C20.8678 0.101562 26.7601 5.99387 26.7601 13.2629C26.7601 20.5318 20.8678 26.4241 13.5988 26.4241C6.32981 26.4241 0.4375 20.5318 0.4375 13.2629Z" fill="#01321F" />
                    <path d="M9.40458 10.3983C8.63201 10.3983 8.00619 9.77252 8.00619 8.99995C8.00619 8.22738 8.63201 7.60156 9.40458 7.60156H17.7949C18.5675 7.60156 19.1933 8.22738 19.1933 8.99995V17.3903C19.1933 18.1628 18.5675 18.7887 17.7949 18.7887C17.0223 18.7887 16.3965 18.1628 16.3965 17.3903V12.3758L10.393 18.3793C9.8468 18.9255 8.9617 18.9255 8.4155 18.3793C7.86931 17.8331 7.86931 16.9481 8.4155 16.4019L14.419 10.3983H9.40458Z" fill="white" />
                  </svg>
                </div>
              </div>
              <div className="relative flex flex-end">
                <div className="flex gap-2 min-w-[110px] ml-auto items-end relative">
                  <div className="bg-white text-black py-1 px-6 rounded-lg flex flex-col items-center min-w-[85px]">
                    <span className="text-[12px] text-gray-800">Amount</span>
                    <span className="font-semibold text-sm">
                      $<span ref={setCountRef} data-target="10" className="count-number">0</span>
                    </span>
                  </div>
                  <div className="bg-[#232325] text-white/80 py-1 px-6 rounded-lg flex flex-col items-center min-w-[85px]">
                    <span className="text-[12px] text-gray-300">Duration</span>
                    <span className="font-semibold text-sm">
                      <span ref={setCountRef} data-target="1" className="count-number">0</span> min
                    </span>
                  </div>
                </div>
                <span className='trade_rate_span'></span>
              </div>
            </div>
          </div>
          <Image src="/rate-graph.png" alt="rate graph" className="w-full md:hidden s-fade-up" width={300} height={300} />
        </div>
      </div>

      <Marquee />
      <HeroSecondGrid setCountRef={setCountRef} />
    </section>
  );
};

export default Hero;
