"use client";
import React, { useEffect, useRef } from 'react';
import Link from "next/link";
import Image from 'next/image';
import gsap from "gsap";
import AnimatedButton from "./AnimatedButton";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const countRefs = useRef<HTMLSpanElement[]>([]);
  countRefs.current = []; // Reset refs every render

  // Only add SPAN nodes to countRefs
  const setCountRef = (el: HTMLSpanElement | null) => {
    if (el) countRefs.current.push(el);
  };

  useEffect(() => {
    // GSAP Counter Logic
    countRefs.current.forEach(ref => {
      if (ref && ref.dataset && ref.dataset.target) {
        const target = parseFloat(ref.dataset.target);
        if (!isNaN(target)) {
          const obj = { value: 0 };
          gsap.to(obj, {
            value: target,
            duration: 1.5,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: sectionRef.current?.querySelector('.hero-second-grid') as Element,
              start: "top 75%",
              once: true,
            },
            onUpdate: () => {
              ref.innerText = obj.value.toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2
              });
            }
          });
        }
      }
    });

    // --- Your Other GSAP Animations Here (unchanged) ---
    // Animate split heading
    if (headingRef.current) {
      const t = gsap.timeline();
      const words = headingRef.current.querySelectorAll('span');
      t.from(words, {
        opacity: 0,
        y: 60,
        stagger: 0.08,
        duration: 0.9,
        ease: "power4.out"
      });
    }

    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.fade-up'),
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.9, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.fade-left'),
        { opacity: 0, x: -56 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", delay: 0.35 }
      );
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.fade-right'),
        { opacity: 0, x: 56 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", delay: 0.35 }
      );
      gsap.fromTo(
        ".blurry-card",
        { opacity: 0, x: 120, y: 20 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.20,
          scrollTrigger: {
            trigger: sectionRef.current?.querySelector('.hero-second-grid') as Element,
            start: "top 75%",
            end: "top 20%",

            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        ".s-fade-up",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          stagger: 0.20,
          scrollTrigger: {
            trigger: sectionRef.current?.querySelector('.hero-second-grid') as Element,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const heading = "World-Class Forex Trading Where Profits Meet Precision";
  const splitHeading = heading.split(' ').map((word, i) => (
    <span key={i} className="inline-block mr-2">{word}</span>
  ));

  return (
    <section ref={sectionRef} className="relative py-20 hero overflow-hidden">
      <div className="max-w-[1460px] mx-auto px-6 py-10 lg:pb-20 lg:pt-30 text-center hero-container relative z-10 min-h-[85vh] content-center">
        <h1
          ref={headingRef}
          className="hero-heading text-3xl lg:text-7xl max-w-[1100px] mx-auto font-bold mb-4 leading-tight"
        >
          {splitHeading}
        </h1>
        <p className="fade-up lg:text-lg text-md text-slate-300 mb-8 max-w-[800px] mx-auto">
          Experience professional-grade trading across forex, commodities, indices, and digital currencies. Advanced analytics, lightning-fast execution, and global market access in one powerful platform.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <AnimatedButton href="" label="Log in" className="fade-left w-fit" />
          <AnimatedButton href="" label="Sign up" className="fade-right w-fit transparent-btn" />
        </div>
      </div>
      <div className="max-w-[1460px] hero-second-grid mx-auto px-6 py-6 flex gap-6 bg-transparent">
        {/* Why Choose Us Card */}
        <div className="relative blurry-card blurry-card1">
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
              <span ref={setCountRef} data-target="1917.44" className="count-number shuffle absolute-line-mark w-fit bg-white text-black font-semibold px-3 py-1 rounded-full shadow text-xs">0</span>
            </div>
            <div className='grid grid-cols-3'>
              <div className='relative'>
                <span className='green-line'></span>
              </div>
              <div className='trade_rate_img_container relative'>
                <Image src="/trade_rate.png" alt="trade rate" className="trade_rate_img" width={300} height={300} />
                <div className="shuffle count-number absolute left-[58%] top-[70%] bg-white px-3 py-1.5 rounded-full text-black font-bold text-xs flex items-center gap-1"
                  style={{ transform: "translate(-50%, -50%)" }}>
                  $<span ref={setCountRef} data-target="10" className="count-number">0</span>.00
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.4375 13.2629C0.4375 5.99387 6.32981 0.101562 13.5988 0.101562C20.8678 0.101562 26.7601 5.99387 26.7601 13.2629C26.7601 20.5318 20.8678 26.4241 13.5988 26.4241C6.32981 26.4241 0.4375 20.5318 0.4375 13.2629Z" fill="#01321F" />
                    <path d="M9.40458 10.3983C8.63201 10.3983 8.00619 9.77252 8.00619 8.99995C8.00619 8.22738 8.63201 7.60156 9.40458 7.60156H17.7949C18.5675 7.60156 19.1933 8.22738 19.1933 8.99995V17.3903C19.1933 18.1628 18.5675 18.7887 17.7949 18.7887C17.0223 18.7887 16.3965 18.1628 16.3965 17.3903V12.3758L10.393 18.3793C9.8468 18.9255 8.9617 18.9255 8.4155 18.3793C7.86931 17.8331 7.86931 16.9481 8.4155 16.4019L14.419 10.3983H9.40458Z" fill="white" />
                  </svg>
                </div>
              </div>
              <div className="relative flex flex-end">
                <div className="flex gap-2 min-w-[110px] ml-auto items-end relative">
                  <div className="bg-white text-black py-1 px-6 rounded-lg flex flex-col items-center min-w-[85px] shuffle">
                    <span className="text-[12px] text-gray-800">Amount</span>
                    <span className="font-semibold text-sm">
                      $<span ref={setCountRef} data-target="10" className="count-number">0</span>
                    </span>
                  </div>
                  <div className="bg-[#232325] text-white/80 py-1 px-6 rounded-lg flex flex-col items-center min-w-[85px] shuffle">
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
      <div className="max-w-[1460px] hero-second-grid mx-auto px-6 py-6 flex gap-6 bg-transparent">
        {/* Why Choose Us Card */}
        <div className="relative blurry-card blurry-card-left blurry-card3 grid grid-cols-2">
          <div>
            <h3 className="text-xl mb-3 s-fade-up">Trade Anywhere</h3>
            <p className="text-slate-400 text-[15px] leading-normal mb-5 s-fade-up">
              Our MT5 platform is available on:
            </p>
            <div className="flex  gap-2 relative  max-w-[300px] s-fade-up flex-wrap bg-[#0D0E14] p-4 rounded-xl border border-[#1F1F24]">
              <div className="choose-btn-card flex items-center gap-2 px-3 py-2 rounded-lg bg-[#11131A] w-fit min-w-[100px]">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.33464 6.23372C2.33464 5.59572 2.3353 5.15106 2.38064 4.81506C2.42464 4.48839 2.50464 4.31639 2.6273 4.19306C2.75064 4.07039 2.9233 3.99039 3.2493 3.94639C3.5853 3.90039 4.02997 3.90039 4.66797 3.90039H11.3346C11.9726 3.90039 12.4173 3.90106 12.7533 3.94639C13.08 3.99039 13.252 4.07039 13.3753 4.19306C13.498 4.31639 13.5786 4.48906 13.622 4.81506C13.6673 5.15106 13.668 5.59572 13.668 6.23372V11.9004H2.33464V6.23372ZM2.44597 11.9004C2.01597 11.9004 1.66797 12.2484 1.66797 12.6784C1.66797 13.3531 2.21464 13.9004 2.88997 13.9004H13.1126C13.7873 13.9004 14.3346 13.3537 14.3346 12.6784C14.3346 12.2484 13.9866 11.9004 13.5566 11.9004H2.44597Z" stroke="#A1B8FE" />
                </svg>

                <span className="font-medium text-sm">Desktop</span>
              </div>
              <div className="choose-btn-card flex items-center gap-2 px-3 py-2 rounded-lg bg-[#11131A] w-fit min-w-[100px] ">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.1535 1.76758H4.84685C4.4286 1.7927 4.03715 1.98184 3.75754 2.2939C3.47793 2.60597 3.33275 3.01575 3.35352 3.43424V13.3476C3.33275 13.7661 3.47793 14.1759 3.75754 14.4879C4.03715 14.8 4.4286 14.9891 4.84685 15.0142H11.1535C11.5718 14.9891 11.9632 14.8 12.2428 14.4879C12.5224 14.1759 12.6676 13.7661 12.6469 13.3476V3.43424C12.6676 3.01575 12.5224 2.60597 12.2428 2.2939C11.9632 1.98184 11.5718 1.7927 11.1535 1.76758ZM11.9802 13.3476C12.0007 13.5893 11.9256 13.8294 11.7711 14.0164C11.6165 14.2034 11.3948 14.3223 11.1535 14.3476H4.84685C4.60559 14.3223 4.38387 14.2034 4.22931 14.0164C4.07475 13.8294 3.99967 13.5893 4.02019 13.3476V3.43424C3.99967 3.19253 4.07475 2.9524 4.22931 2.76543C4.38387 2.57846 4.60559 2.45955 4.84685 2.43424H5.86685V2.77424C5.86685 2.95106 5.93709 3.12063 6.06212 3.24565C6.18714 3.37067 6.35671 3.44091 6.53352 3.44091H9.46685C9.64366 3.44091 9.81323 3.37067 9.93826 3.24565C10.0633 3.12063 10.1335 2.95106 10.1335 2.77424V2.43424H11.1535C11.3948 2.45955 11.6165 2.57846 11.7711 2.76543C11.9256 2.9524 12.0007 3.19253 11.9802 3.43424V13.3476Z" fill="#A1B8FE" />
                  <path d="M6.66536 13.0124H9.33203C9.42044 13.0124 9.50522 12.9773 9.56773 12.9147C9.63025 12.8522 9.66536 12.7674 9.66536 12.679C9.66536 12.5906 9.63025 12.5058 9.56773 12.4433C9.50522 12.3808 9.42044 12.3457 9.33203 12.3457H6.66536C6.57696 12.3457 6.49217 12.3808 6.42966 12.4433C6.36715 12.5058 6.33203 12.5906 6.33203 12.679C6.33203 12.7674 6.36715 12.8522 6.42966 12.9147C6.49217 12.9773 6.57696 13.0124 6.66536 13.0124Z" fill="#A1B8FE" />
                </svg>


                <span className="font-medium text-sm">Mobile</span>
              </div>
              <div className="choose-btn-card flex items-center gap-2 px-3 py-2 rounded-lg bg-[#11131A] w-fit min-w-[100px] ">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.01398 14.3568C11.419 14.3568 14.1673 11.5951 14.1673 8.17677C14.1673 4.77177 11.419 2.02344 8.01398 2.02344M8.01398 14.3568C4.59565 14.3568 1.83398 11.5951 1.83398 8.17677C1.83398 4.77177 4.59565 2.02344 8.01398 2.02344M8.01398 14.3568V2.02344M13.3513 5.10677H2.65398M13.3856 11.1984H2.61965M1.86732 8.1901H14.134" stroke="#A1B8FE" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.00602 14.3568C9.70868 14.3568 11.0827 11.5951 11.0827 8.17677C11.0827 4.77177 9.70868 2.02344 8.00602 2.02344C6.29668 2.02344 4.91602 4.77177 4.91602 8.17677C4.91602 11.5951 6.29668 14.3568 8.00602 14.3568Z" stroke="#A1B8FE" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>


                <span className="font-medium text-sm">Web Trader</span>
              </div>
            </div>
            <p className="text-slate-400 text-[15px] leading-normal mt-5 s-fade-up">
              Download the platform to Trade well, Earn well
            </p>
          </div>
          <div className="flex flex-col  gap-2 relative s-fade-up  bg-[#0D0E14] p-4 rounded-xl border border-[#1F1F24]">
            <p className="text-[16px] leading-normal mb-3 s-fade-up flex justify-between items-center">
              See Growth
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.354 10.3541C13.3076 10.4006 13.2524 10.4375 13.1917 10.4627C13.131 10.4878 13.066 10.5008 13.0003 10.5008C12.9346 10.5008 12.8695 10.4878 12.8088 10.4627C12.7481 10.4375 12.693 10.4006 12.6465 10.3541L8.00028 5.70727L3.35403 10.3541C3.26021 10.448 3.13296 10.5007 3.00028 10.5007C2.8676 10.5007 2.74035 10.448 2.64653 10.3541C2.55271 10.2603 2.5 10.1331 2.5 10.0004C2.5 9.86771 2.55271 9.74046 2.64653 9.64664L7.64653 4.64664C7.69296 4.60015 7.74811 4.56328 7.80881 4.53811C7.86951 4.51295 7.93457 4.5 8.00028 4.5C8.06599 4.5 8.13105 4.51295 8.19175 4.53811C8.25245 4.56328 8.30759 4.60015 8.35403 4.64664L13.354 9.64664C13.4005 9.69308 13.4374 9.74822 13.4626 9.80892C13.4877 9.86962 13.5007 9.93469 13.5007 10.0004C13.5007 10.0661 13.4877 10.1312 13.4626 10.1919C13.4374 10.2526 13.4005 10.3077 13.354 10.3541Z" fill="#A1B8FE" />
              </svg>

            </p>
            <div className="space-y-4 text-gray-300 text-md">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.1875 0.8125H1.8125C1.51413 0.8125 1.22798 0.931026 1.017 1.142C0.806026 1.35298 0.6875 1.63913 0.6875 1.9375V12.0625C0.6875 12.3609 0.806026 12.647 1.017 12.858C1.22798 13.069 1.51413 13.1875 1.8125 13.1875H14.1875C14.4859 13.1875 14.772 13.069 14.983 12.858C15.194 12.647 15.3125 12.3609 15.3125 12.0625V1.9375C15.3125 1.63913 15.194 1.35298 14.983 1.142C14.772 0.931026 14.4859 0.8125 14.1875 0.8125ZM13.4605 4.02297L6.71047 10.773C6.65823 10.8253 6.59619 10.8668 6.5279 10.8951C6.45962 10.9234 6.38642 10.9379 6.3125 10.9379C6.23858 10.9379 6.16538 10.9234 6.0971 10.8951C6.02881 10.8668 5.96677 10.8253 5.91453 10.773L3.10203 7.96047C2.99648 7.85492 2.93719 7.71177 2.93719 7.5625C2.93719 7.41323 2.99648 7.27008 3.10203 7.16453C3.20758 7.05898 3.35073 6.99969 3.5 6.99969C3.64927 6.99969 3.79242 7.05898 3.89797 7.16453L6.3125 9.57977L12.6645 3.22703C12.7701 3.12148 12.9132 3.06219 13.0625 3.06219C13.2118 3.06219 13.3549 3.12148 13.4605 3.22703C13.566 3.33258 13.6253 3.47573 13.6253 3.625C13.6253 3.77427 13.566 3.91742 13.4605 4.02297Z" fill="white" />
                </svg>

                <span className="text-[#727377]">Ultra-Low Spreads</span>
              </div>

              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.1875 0.8125H1.8125C1.51413 0.8125 1.22798 0.931026 1.017 1.142C0.806026 1.35298 0.6875 1.63913 0.6875 1.9375V12.0625C0.6875 12.3609 0.806026 12.647 1.017 12.858C1.22798 13.069 1.51413 13.1875 1.8125 13.1875H14.1875C14.4859 13.1875 14.772 13.069 14.983 12.858C15.194 12.647 15.3125 12.3609 15.3125 12.0625V1.9375C15.3125 1.63913 15.194 1.35298 14.983 1.142C14.772 0.931026 14.4859 0.8125 14.1875 0.8125ZM13.4605 4.02297L6.71047 10.773C6.65823 10.8253 6.59619 10.8668 6.5279 10.8951C6.45962 10.9234 6.38642 10.9379 6.3125 10.9379C6.23858 10.9379 6.16538 10.9234 6.0971 10.8951C6.02881 10.8668 5.96677 10.8253 5.91453 10.773L3.10203 7.96047C2.99648 7.85492 2.93719 7.71177 2.93719 7.5625C2.93719 7.41323 2.99648 7.27008 3.10203 7.16453C3.20758 7.05898 3.35073 6.99969 3.5 6.99969C3.64927 6.99969 3.79242 7.05898 3.89797 7.16453L6.3125 9.57977L12.6645 3.22703C12.7701 3.12148 12.9132 3.06219 13.0625 3.06219C13.2118 3.06219 13.3549 3.12148 13.4605 3.22703C13.566 3.33258 13.6253 3.47573 13.6253 3.625C13.6253 3.77427 13.566 3.91742 13.4605 4.02297Z" fill="white" />
                </svg>

                <span className="text-[#727377]">A-Book Broker Model</span>
              </div>

              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.1875 0.8125H1.8125C1.51413 0.8125 1.22798 0.931026 1.017 1.142C0.806026 1.35298 0.6875 1.63913 0.6875 1.9375V12.0625C0.6875 12.3609 0.806026 12.647 1.017 12.858C1.22798 13.069 1.51413 13.1875 1.8125 13.1875H14.1875C14.4859 13.1875 14.772 13.069 14.983 12.858C15.194 12.647 15.3125 12.3609 15.3125 12.0625V1.9375C15.3125 1.63913 15.194 1.35298 14.983 1.142C14.772 0.931026 14.4859 0.8125 14.1875 0.8125ZM13.4605 4.02297L6.71047 10.773C6.65823 10.8253 6.59619 10.8668 6.5279 10.8951C6.45962 10.9234 6.38642 10.9379 6.3125 10.9379C6.23858 10.9379 6.16538 10.9234 6.0971 10.8951C6.02881 10.8668 5.96677 10.8253 5.91453 10.773L3.10203 7.96047C2.99648 7.85492 2.93719 7.71177 2.93719 7.5625C2.93719 7.41323 2.99648 7.27008 3.10203 7.16453C3.20758 7.05898 3.35073 6.99969 3.5 6.99969C3.64927 6.99969 3.79242 7.05898 3.89797 7.16453L6.3125 9.57977L12.6645 3.22703C12.7701 3.12148 12.9132 3.06219 13.0625 3.06219C13.2118 3.06219 13.3549 3.12148 13.4605 3.22703C13.566 3.33258 13.6253 3.47573 13.6253 3.625C13.6253 3.77427 13.566 3.91742 13.4605 4.02297Z" fill="white" />
                </svg>

                <span className="text-[#727377]">Deep Liquidity Access</span>
              </div>

              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.1875 0.8125H1.8125C1.51413 0.8125 1.22798 0.931026 1.017 1.142C0.806026 1.35298 0.6875 1.63913 0.6875 1.9375V12.0625C0.6875 12.3609 0.806026 12.647 1.017 12.858C1.22798 13.069 1.51413 13.1875 1.8125 13.1875H14.1875C14.4859 13.1875 14.772 13.069 14.983 12.858C15.194 12.647 15.3125 12.3609 15.3125 12.0625V1.9375C15.3125 1.63913 15.194 1.35298 14.983 1.142C14.772 0.931026 14.4859 0.8125 14.1875 0.8125ZM13.4605 4.02297L6.71047 10.773C6.65823 10.8253 6.59619 10.8668 6.5279 10.8951C6.45962 10.9234 6.38642 10.9379 6.3125 10.9379C6.23858 10.9379 6.16538 10.9234 6.0971 10.8951C6.02881 10.8668 5.96677 10.8253 5.91453 10.773L3.10203 7.96047C2.99648 7.85492 2.93719 7.71177 2.93719 7.5625C2.93719 7.41323 2.99648 7.27008 3.10203 7.16453C3.20758 7.05898 3.35073 6.99969 3.5 6.99969C3.64927 6.99969 3.79242 7.05898 3.89797 7.16453L6.3125 9.57977L12.6645 3.22703C12.7701 3.12148 12.9132 3.06219 13.0625 3.06219C13.2118 3.06219 13.3549 3.12148 13.4605 3.22703C13.566 3.33258 13.6253 3.47573 13.6253 3.625C13.6253 3.77427 13.566 3.91742 13.4605 4.02297Z" fill="white" />
                </svg>

                <span className="text-[#727377]">MT5 Multi-Platform</span>
              </div>

              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.1875 0.8125H1.8125C1.51413 0.8125 1.22798 0.931026 1.017 1.142C0.806026 1.35298 0.6875 1.63913 0.6875 1.9375V12.0625C0.6875 12.3609 0.806026 12.647 1.017 12.858C1.22798 13.069 1.51413 13.1875 1.8125 13.1875H14.1875C14.4859 13.1875 14.772 13.069 14.983 12.858C15.194 12.647 15.3125 12.3609 15.3125 12.0625V1.9375C15.3125 1.63913 15.194 1.35298 14.983 1.142C14.772 0.931026 14.4859 0.8125 14.1875 0.8125ZM13.4605 4.02297L6.71047 10.773C6.65823 10.8253 6.59619 10.8668 6.5279 10.8951C6.45962 10.9234 6.38642 10.9379 6.3125 10.9379C6.23858 10.9379 6.16538 10.9234 6.0971 10.8951C6.02881 10.8668 5.96677 10.8253 5.91453 10.773L3.10203 7.96047C2.99648 7.85492 2.93719 7.71177 2.93719 7.5625C2.93719 7.41323 2.99648 7.27008 3.10203 7.16453C3.20758 7.05898 3.35073 6.99969 3.5 6.99969C3.64927 6.99969 3.79242 7.05898 3.89797 7.16453L6.3125 9.57977L12.6645 3.22703C12.7701 3.12148 12.9132 3.06219 13.0625 3.06219C13.2118 3.06219 13.3549 3.12148 13.4605 3.22703C13.566 3.33258 13.6253 3.47573 13.6253 3.625C13.6253 3.77427 13.566 3.91742 13.4605 4.02297Z" fill="white" />
                </svg>

                <span className="text-[#727377]">Secure Trading Environment</span>
              </div>
            </div>

          </div>
        </div>
        {/* Fast, Reliable Execution Card */}
        <div className="relative blurry-card blurry-card-left blurry-card4 flex flex-col">
          <h3 className="text-xl mb-3 s-fade-up">Your Efforts Matters</h3>
          <p className="text-slate-400 text-[15px] leading-normal mb-6 max-w-2xl s-fade-up">
            Earn more Profit with targeted strategies and smarter tools.
          </p>
          <div className="flex  gap-2 relative s-fade-up flex-wrap bg-[#0D0E14] p-4 rounded-xl border border-[#1F1F24]">
            <div className="choose-btn-card w-full flex items-center gap-2 px-3 py-3 rounded-lg bg-[#11131A] w-fit min-w-[100px]">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5.89062C7.50555 5.89062 7.0222 6.03725 6.61107 6.31195C6.19995 6.58665 5.87952 6.9771 5.6903 7.43392C5.50108 7.89073 5.45157 8.3934 5.54804 8.87835C5.6445 9.3633 5.8826 9.80876 6.23223 10.1584C6.58186 10.508 7.02732 10.7461 7.51227 10.8426C7.99723 10.9391 8.49989 10.8895 8.95671 10.7003C9.41352 10.5111 9.80397 10.1907 10.0787 9.77955C10.3534 9.36843 10.5 8.88508 10.5 8.39062C10.5 7.72758 10.2366 7.0917 9.76777 6.62286C9.29893 6.15402 8.66304 5.89062 8 5.89062ZM8 9.89062C7.70333 9.89062 7.41332 9.80265 7.16664 9.63783C6.91997 9.47301 6.72771 9.23874 6.61418 8.96465C6.50065 8.69056 6.47094 8.38896 6.52882 8.09799C6.5867 7.80702 6.72956 7.53974 6.93934 7.32996C7.14912 7.12019 7.41639 6.97732 7.70736 6.91945C7.99834 6.86157 8.29994 6.89127 8.57403 7.00481C8.84811 7.11834 9.08238 7.3106 9.2472 7.55727C9.41203 7.80394 9.5 8.09395 9.5 8.39062C9.5 8.78845 9.34196 9.16998 9.06066 9.45129C8.77936 9.73259 8.39782 9.89062 8 9.89062ZM15 3.89062H1C0.867392 3.89062 0.740215 3.9433 0.646447 4.03707C0.552678 4.13084 0.5 4.25802 0.5 4.39062V12.3906C0.5 12.5232 0.552678 12.6504 0.646447 12.7442C0.740215 12.8379 0.867392 12.8906 1 12.8906H15C15.1326 12.8906 15.2598 12.8379 15.3536 12.7442C15.4473 12.6504 15.5 12.5232 15.5 12.3906V4.39062C15.5 4.25802 15.4473 4.13084 15.3536 4.03707C15.2598 3.9433 15.1326 3.89062 15 3.89062ZM12.1031 11.8906H3.89687C3.729 11.3229 3.42175 10.8062 3.00311 10.3875C2.58447 9.96887 2.06775 9.66162 1.5 9.49375V7.2875C2.06775 7.11963 2.58447 6.81238 3.00311 6.39374C3.42175 5.9751 3.729 5.45837 3.89687 4.89062H12.1031C12.271 5.45837 12.5782 5.9751 12.9969 6.39374C13.4155 6.81238 13.9323 7.11963 14.5 7.2875V9.49375C13.9323 9.66162 13.4155 9.96887 12.9969 10.3875C12.5782 10.8062 12.271 11.3229 12.1031 11.8906ZM14.5 6.22625C13.9003 5.96837 13.4223 5.49035 13.1644 4.89062H14.5V6.22625ZM2.83562 4.89062C2.57774 5.49035 2.09973 5.96837 1.5 6.22625V4.89062H2.83562ZM1.5 10.555C2.09973 10.8129 2.57774 11.2909 2.83562 11.8906H1.5V10.555ZM13.1644 11.8906C13.4223 11.2909 13.9003 10.8129 14.5 10.555V11.8906H13.1644Z" fill="#A1B8FE" />
              </svg>


              <span className="font-medium text-sm">Funds held in segregated accounts</span>
            </div>
            <div className="choose-btn-card w-full flex items-center gap-2 px-3 py-3 rounded-lg bg-[#11131A] w-fit min-w-[100px] ">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 12.8906H13.5V2.89062C13.5 2.75802 13.4473 2.63084 13.3536 2.53707C13.2598 2.4433 13.1326 2.39062 13 2.39062H9.5C9.36739 2.39062 9.24021 2.4433 9.14645 2.53707C9.05268 2.63084 9 2.75802 9 2.89062V5.39062H6C5.86739 5.39062 5.74021 5.4433 5.64645 5.53707C5.55268 5.63084 5.5 5.75802 5.5 5.89062V8.39062H3C2.86739 8.39062 2.74021 8.4433 2.64645 8.53707C2.55268 8.63084 2.5 8.75802 2.5 8.89062V12.8906H2C1.86739 12.8906 1.74021 12.9433 1.64645 13.0371C1.55268 13.1308 1.5 13.258 1.5 13.3906C1.5 13.5232 1.55268 13.6504 1.64645 13.7442C1.74021 13.8379 1.86739 13.8906 2 13.8906H14C14.1326 13.8906 14.2598 13.8379 14.3536 13.7442C14.4473 13.6504 14.5 13.5232 14.5 13.3906C14.5 13.258 14.4473 13.1308 14.3536 13.0371C14.2598 12.9433 14.1326 12.8906 14 12.8906ZM10 3.39062H12.5V12.8906H10V3.39062ZM6.5 6.39062H9V12.8906H6.5V6.39062ZM3.5 9.39062H5.5V12.8906H3.5V9.39062Z" fill="#A1B8FE" />
              </svg>



              <span className="font-medium text-sm">Strong data encryption</span>
            </div>
            <div className="choose-btn-card w-full flex items-center gap-2 px-3 py-3 rounded-lg bg-[#11131A] w-fit min-w-[100px] ">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1.89062C6.71442 1.89063 5.45772 2.27184 4.3888 2.98607C3.31988 3.7003 2.48676 4.71546 1.99479 5.90318C1.50282 7.0909 1.37409 8.39784 1.6249 9.65871C1.8757 10.9196 2.49477 12.0778 3.40381 12.9868C4.31285 13.8959 5.47104 14.5149 6.73192 14.7657C7.99279 15.0165 9.29973 14.8878 10.4874 14.3958C11.6752 13.9039 12.6903 13.0708 13.4046 12.0018C14.1188 10.9329 14.5 9.6762 14.5 8.39062C14.4982 6.66728 13.8128 5.01503 12.5942 3.79644C11.3756 2.57785 9.72335 1.89244 8 1.89062ZM8 13.8906C6.91221 13.8906 5.84884 13.5681 4.94437 12.9637C4.0399 12.3594 3.33495 11.5004 2.91867 10.4954C2.50238 9.49039 2.39347 8.38452 2.60568 7.31763C2.8179 6.25073 3.34173 5.27073 4.11092 4.50154C4.8801 3.73235 5.86011 3.20852 6.92701 2.99631C7.9939 2.78409 9.09977 2.89301 10.1048 3.30929C11.1098 3.72557 11.9687 4.43052 12.5731 5.33499C13.1774 6.23946 13.5 7.30283 13.5 8.39062C13.4983 9.84881 12.9184 11.2468 11.8873 12.2779C10.8562 13.309 9.45819 13.889 8 13.8906ZM12 8.39062C12 8.52323 11.9473 8.65041 11.8536 8.74418C11.7598 8.83795 11.6326 8.89062 11.5 8.89062H8C7.86739 8.89062 7.74022 8.83795 7.64645 8.74418C7.55268 8.65041 7.5 8.52323 7.5 8.39062V4.89062C7.5 4.75802 7.55268 4.63084 7.64645 4.53707C7.74022 4.4433 7.86739 4.39062 8 4.39062C8.13261 4.39062 8.25979 4.4433 8.35356 4.53707C8.44732 4.63084 8.5 4.75802 8.5 4.89062V7.89062H11.5C11.6326 7.89062 11.7598 7.9433 11.8536 8.03707C11.9473 8.13084 12 8.25802 12 8.39062Z" fill="#A1B8FE" />
              </svg>



              <span className="font-medium text-sm">Long-term trust</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
