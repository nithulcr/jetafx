"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from "gsap";
import AnimatedButton from "./AnimatedButton";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const countRefs = useRef<HTMLSpanElement[]>([]);
  countRefs.current = []; // Reset refs every render

  // Only add SPAN nodes to countRefs
  const setCountRef = (el: HTMLSpanElement | null) => {
    if (el) countRefs.current.push(el);
  };

  useEffect(() => {
    
    if (marqueeRef.current) {
      const el = marqueeRef.current;
      el.innerHTML += el.innerHTML; // duplicate items for smooth infinite scroll
    }
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
        duration: 0.8,
        ease: "power4.out"
      });
    }

    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.fade-up'),
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.fade-left'),
        { opacity: 0, x: -56 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", delay: 0.3 }
      );
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.fade-right'),
        { opacity: 0, x: 56 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", delay: 0.3 }
      );
      gsap.fromTo(
        ".blurry-card",
        { opacity: 0, x: 120, y: 20 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: .6,
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
          duration: .6,
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
    <section ref={sectionRef} className="relative py-12 lg:pt-20 lg:pb-10 hero overflow-hidden">
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
         <div className='shuffle'> <AnimatedButton href="" label="Log in" className="fade-left w-fit" /></div>
          <div className='shuffle'><AnimatedButton href="" label="Sign up" className="fade-right w-fit transparent-btn" /></div>
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
      <div className="marquee w-full overflow-hidden text-white py-8 s-fade-up">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap animate-marquee"
        >
          {/* Item 1 */}
          <div className="flex items-center gap-2 px-6">
            <span className="flex items-center gap-2">
              <span className="bg-[#0091BA] text-white text-xs w-7 h-7 flex items-center justify-center font-bold px-2 py-1 rounded-full">
                100
              </span>
              <span className="text-white">
                US 100 Cash CFD · 23,707.5
              </span>
              <span className="text-[#F23645]">-87.5 (-0.37%)</span>
            </span>
          </div>

          {/* Divider */}
          <span className="bg-white h-[30px] w-[1px] mx-2"></span>

          {/* Item 2 */}
          <div className="flex items-center gap-2 px-6">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_1455_2176" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="8" y="0" width="17" height="16">
                <g clipPath="url(#clip0_1455_2176)">
                  <path d="M24.5105 8C24.4712 6.08204 23.7439 4.24209 22.4613 2.81553C21.1787 1.38898 19.4262 0.470811 17.5232 0.228393C15.6202 -0.0140261 13.6934 0.435447 12.0942 1.49488C10.4949 2.55432 9.32953 4.15317 8.81055 6C11.3593 6.07538 13.783 7.12154 15.586 8.92456C17.389 10.7276 18.4352 13.1513 18.5105 15.7C20.2202 15.2586 21.7358 14.264 22.8211 12.8712C23.9064 11.4784 24.5004 9.76568 24.5105 8Z" fill="black" />
                </g>
              </mask>
              <g mask="url(#mask0_1455_2176)">
                <rect x="8.50977" width="16" height="16" rx="8" fill="#F2F2F2" />
                <g clipPath="url(#clip1_1455_2176)">
                  <g clipPath="url(#clip2_1455_2176)">
                    <path d="M8.50977 0H18.2875V9.77778H8.50977V0Z" fill="#1E88E9" />
                    <path d="M18.2875 0V3.55556H24.5098V0H18.2875ZM18.2875 6.22222V9.77778H24.5098V6.22222H18.2875ZM8.50977 12.4444V16H24.5098V12.4444H8.50977Z" fill="#EF5350" />
                    <path d="M18.2875 3.55556V6.22222H24.5098V3.55556H18.2875ZM8.50977 9.77778V12.4444H24.5098V9.77778H8.50977Z" fill="#F8F9FD" />
                    <path d="M10.6607 1.08444C10.6674 1.07139 10.6776 1.06043 10.6902 1.05279C10.7027 1.04514 10.7171 1.04109 10.7318 1.04109C10.7465 1.04109 10.7609 1.04514 10.7734 1.05279C10.786 1.06043 10.7962 1.07139 10.8029 1.08444L11.0429 1.71556C11.0518 1.75111 11.0873 1.76889 11.114 1.76889L11.7896 1.80444C11.8607 1.80444 11.8873 1.89333 11.834 1.94667L11.3007 2.36444C11.2891 2.37572 11.2812 2.39026 11.278 2.40613C11.2748 2.422 11.2765 2.43846 11.2829 2.45333L11.4607 3.09333C11.4661 3.10956 11.4662 3.1271 11.4609 3.14338C11.4556 3.15965 11.4452 3.17379 11.4313 3.18374C11.4174 3.19368 11.4006 3.1989 11.3835 3.19863C11.3664 3.19836 11.3498 3.19261 11.3362 3.18222L10.7762 2.81778C10.7631 2.80899 10.7476 2.8043 10.7318 2.8043C10.716 2.8043 10.7005 2.80899 10.6873 2.81778L10.1273 3.18222C10.1137 3.19261 10.0972 3.19836 10.0801 3.19863C10.063 3.1989 10.0462 3.19368 10.0323 3.18374C10.0184 3.17379 10.008 3.15965 10.0027 3.14338C9.99742 3.1271 9.99749 3.10956 10.0029 3.09333L10.1807 2.44444C10.186 2.42869 10.1863 2.41167 10.1816 2.39574C10.1768 2.37981 10.1671 2.36576 10.154 2.35556L9.62957 1.94667C9.61701 1.9366 9.60779 1.92298 9.60309 1.90759C9.59839 1.8922 9.59845 1.87575 9.60325 1.86039C9.60805 1.84503 9.61737 1.83147 9.63 1.82149C9.64262 1.81151 9.65796 1.80557 9.67401 1.80444L10.3496 1.76889C10.3762 1.76889 10.4118 1.75111 10.4207 1.71556L10.6607 1.09333V1.08444ZM10.6607 3.75111C10.6674 3.73805 10.6776 3.7271 10.6902 3.71945C10.7027 3.71181 10.7171 3.70776 10.7318 3.70776C10.7465 3.70776 10.7609 3.71181 10.7734 3.71945C10.786 3.7271 10.7962 3.73805 10.8029 3.75111L11.0429 4.38222C11.0518 4.41778 11.0873 4.43555 11.114 4.43555L11.7896 4.47111C11.8607 4.47111 11.8873 4.56 11.834 4.61333L11.3007 5.03111C11.2891 5.04239 11.2812 5.05692 11.278 5.07279C11.2748 5.08866 11.2765 5.10512 11.2829 5.12L11.4607 5.76C11.4661 5.77623 11.4662 5.79377 11.4609 5.81004C11.4556 5.82631 11.4452 5.84046 11.4313 5.85041C11.4174 5.86035 11.4006 5.86557 11.3835 5.8653C11.3664 5.86502 11.3498 5.85927 11.3362 5.84889L10.7762 5.48444C10.7631 5.47565 10.7476 5.47096 10.7318 5.47096C10.716 5.47096 10.7005 5.47565 10.6873 5.48444L10.1273 5.84889C10.1137 5.85927 10.0972 5.86502 10.0801 5.8653C10.063 5.86557 10.0462 5.86035 10.0323 5.85041C10.0184 5.84046 10.008 5.82631 10.0027 5.81004C9.99742 5.79377 9.99749 5.77623 10.0029 5.76L10.1807 5.11111C10.186 5.09536 10.1863 5.07834 10.1816 5.0624C10.1768 5.04647 10.1671 5.03243 10.154 5.02222L9.62957 4.61333C9.61701 4.60327 9.60779 4.58965 9.60309 4.57426C9.59839 4.55886 9.59845 4.54241 9.60325 4.52705C9.60805 4.51169 9.61737 4.49814 9.63 4.48816C9.64262 4.47818 9.65796 4.47224 9.67401 4.47111L10.3496 4.43555C10.3762 4.43555 10.4118 4.41778 10.4207 4.38222L10.6607 3.76V3.75111ZM10.6607 6.41778C10.6674 6.40472 10.6776 6.39377 10.6902 6.38612C10.7027 6.37847 10.7171 6.37443 10.7318 6.37443C10.7465 6.37443 10.7609 6.37847 10.7734 6.38612C10.786 6.39377 10.7962 6.40472 10.8029 6.41778L11.0429 7.04889C11.0518 7.08444 11.0873 7.10222 11.114 7.10222L11.7896 7.13778C11.8607 7.13778 11.8873 7.22667 11.834 7.28L11.3007 7.69778C11.2891 7.70906 11.2812 7.72359 11.278 7.73946C11.2748 7.75533 11.2765 7.77179 11.2829 7.78667L11.4607 8.42667C11.4661 8.4429 11.4662 8.46044 11.4609 8.47671C11.4556 8.49298 11.4452 8.50713 11.4313 8.51707C11.4174 8.52702 11.4006 8.53224 11.3835 8.53196C11.3664 8.53169 11.3498 8.52594 11.3362 8.51555L10.7762 8.15111C10.7631 8.14232 10.7476 8.13763 10.7318 8.13763C10.716 8.13763 10.7005 8.14232 10.6873 8.15111L10.1273 8.51555C10.1137 8.52594 10.0972 8.53169 10.0801 8.53196C10.063 8.53224 10.0462 8.52702 10.0323 8.51707C10.0184 8.50713 10.008 8.49298 10.0027 8.47671C9.99742 8.46044 9.99749 8.4429 10.0029 8.42667L10.1807 7.77778C10.186 7.76203 10.1863 7.745 10.1816 7.72907C10.1768 7.71314 10.1671 7.69909 10.154 7.68889L9.62957 7.28C9.61701 7.26993 9.60779 7.25631 9.60309 7.24092C9.59839 7.22553 9.59845 7.20908 9.60325 7.19372C9.60805 7.17836 9.61737 7.1648 9.63 7.15482C9.64262 7.14484 9.65796 7.1389 9.67401 7.13778L10.3496 7.10222C10.3762 7.10222 10.4118 7.08444 10.4207 7.04889L10.6607 6.42667V6.41778ZM13.3273 1.08444C13.3341 1.07139 13.3443 1.06043 13.3568 1.05279C13.3694 1.04514 13.3838 1.04109 13.3985 1.04109C13.4131 1.04109 13.4276 1.04514 13.4401 1.05279C13.4526 1.06043 13.4628 1.07139 13.4696 1.08444L13.7096 1.71556C13.7185 1.75111 13.754 1.76889 13.7807 1.76889L14.4562 1.80444C14.5273 1.80444 14.554 1.89333 14.5007 1.94667L13.9673 2.36444C13.9557 2.37572 13.9478 2.39026 13.9447 2.40613C13.9415 2.422 13.9432 2.43846 13.9496 2.45333L14.1273 3.09333C14.1328 3.10956 14.1328 3.1271 14.1275 3.14338C14.1222 3.15965 14.1119 3.17379 14.098 3.18374C14.084 3.19368 14.0673 3.1989 14.0502 3.19863C14.0331 3.19836 14.0165 3.19261 14.0029 3.18222L13.4429 2.81778C13.4297 2.80899 13.4143 2.8043 13.3985 2.8043C13.3826 2.8043 13.3672 2.80899 13.354 2.81778L12.794 3.18222C12.7804 3.19261 12.7638 3.19836 12.7467 3.19863C12.7296 3.1989 12.7129 3.19368 12.699 3.18374C12.685 3.17379 12.6747 3.15965 12.6694 3.14338C12.6641 3.1271 12.6642 3.10956 12.6696 3.09333L12.8473 2.44444C12.8527 2.42869 12.853 2.41167 12.8482 2.39574C12.8434 2.37981 12.8338 2.36576 12.8207 2.35556L12.2962 1.94667C12.2837 1.9366 12.2745 1.92298 12.2698 1.90759C12.2651 1.8922 12.2651 1.87575 12.2699 1.86039C12.2747 1.84503 12.284 1.83147 12.2967 1.82149C12.3093 1.81151 12.3246 1.80557 12.3407 1.80444L13.0162 1.76889C13.0429 1.76889 13.0785 1.75111 13.0873 1.71556L13.3273 1.09333V1.08444ZM13.3273 3.75111C13.3341 3.73805 13.3443 3.7271 13.3568 3.71945C13.3694 3.71181 13.3838 3.70776 13.3985 3.70776C13.4131 3.70776 13.4276 3.71181 13.4401 3.71945C13.4526 3.7271 13.4628 3.73805 13.4696 3.75111L13.7096 4.38222C13.7185 4.41778 13.754 4.43555 13.7807 4.43555L14.4562 4.47111C14.5273 4.47111 14.554 4.56 14.5007 4.61333L13.9673 5.03111C13.9557 5.04239 13.9478 5.05692 13.9447 5.07279C13.9415 5.08866 13.9432 5.10512 13.9496 5.12L14.1273 5.76C14.1328 5.77623 14.1328 5.79377 14.1275 5.81004C14.1222 5.82631 14.1119 5.84046 14.098 5.85041C14.084 5.86035 14.0673 5.86557 14.0502 5.8653C14.0331 5.86502 14.0165 5.85927 14.0029 5.84889L13.4429 5.48444C13.4297 5.47565 13.4143 5.47096 13.3985 5.47096C13.3826 5.47096 13.3672 5.47565 13.354 5.48444L12.794 5.84889C12.7804 5.85927 12.7638 5.86502 12.7467 5.8653C12.7296 5.86557 12.7129 5.86035 12.699 5.85041C12.685 5.84046 12.6747 5.82631 12.6694 5.81004C12.6641 5.79377 12.6642 5.77623 12.6696 5.76L12.8473 5.11111C12.8527 5.09536 12.853 5.07834 12.8482 5.0624C12.8434 5.04647 12.8338 5.03243 12.8207 5.02222L12.2962 4.61333C12.2837 4.60327 12.2745 4.58965 12.2698 4.57426C12.2651 4.55886 12.2651 4.54241 12.2699 4.52705C12.2747 4.51169 12.284 4.49814 12.2967 4.48816C12.3093 4.47818 12.3246 4.47224 12.3407 4.47111L13.0162 4.43555C13.0429 4.43555 13.0785 4.41778 13.0873 4.38222L13.3273 3.76V3.75111ZM13.3273 6.41778C13.3341 6.40472 13.3443 6.39377 13.3568 6.38612C13.3694 6.37847 13.3838 6.37443 13.3985 6.37443C13.4131 6.37443 13.4276 6.37847 13.4401 6.38612C13.4526 6.39377 13.4628 6.40472 13.4696 6.41778L13.7096 7.04889C13.7185 7.08444 13.754 7.10222 13.7807 7.10222L14.4562 7.13778C14.5273 7.13778 14.554 7.22667 14.5007 7.28L13.9673 7.69778C13.9557 7.70906 13.9478 7.72359 13.9447 7.73946C13.9415 7.75533 13.9432 7.77179 13.9496 7.78667L14.1273 8.42667C14.1328 8.4429 14.1328 8.46044 14.1275 8.47671C14.1222 8.49298 14.1119 8.50713 14.098 8.51707C14.084 8.52702 14.0673 8.53224 14.0502 8.53196C14.0331 8.53169 14.0165 8.52594 14.0029 8.51555L13.4429 8.15111C13.4297 8.14232 13.4143 8.13763 13.3985 8.13763C13.3826 8.13763 13.3672 8.14232 13.354 8.15111L12.794 8.51555C12.7804 8.52594 12.7638 8.53169 12.7467 8.53196C12.7296 8.53224 12.7129 8.52702 12.699 8.51707C12.685 8.50713 12.6747 8.49298 12.6694 8.47671C12.6641 8.46044 12.6642 8.4429 12.6696 8.42667L12.8473 7.77778C12.8527 7.76203 12.853 7.745 12.8482 7.72907C12.8434 7.71314 12.8338 7.69909 12.8207 7.68889L12.2962 7.28C12.2837 7.26993 12.2745 7.25631 12.2698 7.24092C12.2651 7.22553 12.2651 7.20908 12.2699 7.19372C12.2747 7.17836 12.284 7.1648 12.2967 7.15482C12.3093 7.14484 12.3246 7.1389 12.3407 7.13778L13.0162 7.10222C13.0429 7.10222 13.0785 7.08444 13.0873 7.04889L13.3273 6.42667V6.41778ZM15.994 1.08444C16.0007 1.07139 16.0109 1.06043 16.0235 1.05279C16.036 1.04514 16.0504 1.04109 16.0651 1.04109C16.0798 1.04109 16.0942 1.04514 16.1068 1.05279C16.1193 1.06043 16.1295 1.07139 16.1362 1.08444L16.3762 1.71556C16.3851 1.75111 16.4207 1.76889 16.4473 1.76889L17.1229 1.80444C17.194 1.80444 17.2207 1.89333 17.1673 1.94667L16.634 2.36444C16.6224 2.37572 16.6145 2.39026 16.6113 2.40613C16.6081 2.422 16.6099 2.43846 16.6162 2.45333L16.794 3.09333C16.7994 3.10956 16.7995 3.1271 16.7942 3.14338C16.7889 3.15965 16.7785 3.17379 16.7646 3.18374C16.7507 3.19368 16.734 3.1989 16.7168 3.19863C16.6997 3.19836 16.6832 3.19261 16.6696 3.18222L16.1096 2.81778C16.0964 2.80899 16.0809 2.8043 16.0651 2.8043C16.0493 2.8043 16.0338 2.80899 16.0207 2.81778L15.4607 3.18222C15.4471 3.19261 15.4305 3.19836 15.4134 3.19863C15.3963 3.1989 15.3796 3.19368 15.3656 3.18374C15.3517 3.17379 15.3413 3.15965 15.336 3.14338C15.3308 3.1271 15.3308 3.10956 15.3362 3.09333L15.514 2.44444C15.5194 2.42869 15.5197 2.41167 15.5149 2.39574C15.5101 2.37981 15.5005 2.36576 15.4873 2.35556L14.9629 1.94667C14.9503 1.9366 14.9411 1.92298 14.9364 1.90759C14.9317 1.8922 14.9318 1.87575 14.9366 1.86039C14.9414 1.84503 14.9507 1.83147 14.9633 1.82149C14.976 1.81151 14.9913 1.80557 15.0073 1.80444L15.6829 1.76889C15.7096 1.76889 15.7451 1.75111 15.754 1.71556L15.994 1.09333V1.08444ZM15.994 3.75111C16.0007 3.73805 16.0109 3.7271 16.0235 3.71945C16.036 3.71181 16.0504 3.70776 16.0651 3.70776C16.0798 3.70776 16.0942 3.71181 16.1068 3.71945C16.1193 3.7271 16.1295 3.73805 16.1362 3.75111L16.3762 4.38222C16.3851 4.41778 16.4207 4.43555 16.4473 4.43555L17.1229 4.47111C17.194 4.47111 17.2207 4.56 17.1673 4.61333L16.634 5.03111C16.6224 5.04239 16.6145 5.05692 16.6113 5.07279C16.6081 5.08866 16.6099 5.10512 16.6162 5.12L16.794 5.76C16.7994 5.77623 16.7995 5.79377 16.7942 5.81004C16.7889 5.82631 16.7785 5.84046 16.7646 5.85041C16.7507 5.86035 16.734 5.86557 16.7168 5.8653C16.6997 5.86502 16.6832 5.85927 16.6696 5.84889L16.1096 5.48444C16.0964 5.47565 16.0809 5.47096 16.0651 5.47096C16.0493 5.47096 16.0338 5.47565 16.0207 5.48444L15.4607 5.84889C15.4471 5.85927 15.4305 5.86502 15.4134 5.8653C15.3963 5.86557 15.3796 5.86035 15.3656 5.85041C15.3517 5.84046 15.3413 5.82631 15.336 5.81004C15.3308 5.79377 15.3308 5.77623 15.3362 5.76L15.514 5.11111C15.5194 5.09536 15.5197 5.07834 15.5149 5.0624C15.5101 5.04647 15.5005 5.03243 15.4873 5.02222L14.9629 4.61333C14.9503 4.60327 14.9411 4.58965 14.9364 4.57426C14.9317 4.55886 14.9318 4.54241 14.9366 4.52705C14.9414 4.51169 14.9507 4.49814 14.9633 4.48816C14.976 4.47818 14.9913 4.47224 15.0073 4.47111L15.6829 4.43555C15.7096 4.43555 15.7451 4.41778 15.754 4.38222L15.994 3.76V3.75111ZM15.994 6.41778C16.0007 6.40472 16.0109 6.39377 16.0235 6.38612C16.036 6.37847 16.0504 6.37443 16.0651 6.37443C16.0798 6.37443 16.0942 6.37847 16.1068 6.38612C16.1193 6.39377 16.1295 6.40472 16.1362 6.41778L16.3762 7.04889C16.3851 7.08444 16.4207 7.10222 16.4473 7.10222L17.1229 7.13778C17.194 7.13778 17.2207 7.22667 17.1673 7.28L16.634 7.69778C16.6224 7.70906 16.6145 7.72359 16.6113 7.73946C16.6081 7.75533 16.6099 7.77179 16.6162 7.78667L16.794 8.42667C16.7994 8.4429 16.7995 8.46044 16.7942 8.47671C16.7889 8.49298 16.7785 8.50713 16.7646 8.51707C16.7507 8.52702 16.734 8.53224 16.7168 8.53196C16.6997 8.53169 16.6832 8.52594 16.6696 8.51555L16.1096 8.15111C16.0964 8.14232 16.0809 8.13763 16.0651 8.13763C16.0493 8.13763 16.0338 8.14232 16.0207 8.15111L15.4607 8.51555C15.4471 8.52594 15.4305 8.53169 15.4134 8.53196C15.3963 8.53224 15.3796 8.52702 15.3656 8.51707C15.3517 8.50713 15.3413 8.49298 15.336 8.47671C15.3308 8.46044 15.3308 8.4429 15.3362 8.42667L15.514 7.77778C15.5194 7.76203 15.5197 7.745 15.5149 7.72907C15.5101 7.71314 15.5005 7.69909 15.4873 7.68889L14.9629 7.28C14.9503 7.26993 14.9411 7.25631 14.9364 7.24092C14.9317 7.22553 14.9318 7.20908 14.9366 7.19372C14.9414 7.17836 14.9507 7.1648 14.9633 7.15482C14.976 7.14484 14.9913 7.1389 15.0073 7.13778L15.6829 7.10222C15.7096 7.10222 15.7451 7.08444 15.754 7.04889L15.994 6.42667V6.41778Z" fill="#F8F9FD" />
                  </g>
                </g>
              </g>
              <g clipPath="url(#clip3_1455_2176)">
                <rect x="0.509766" y="8" width="16" height="16" rx="8" fill="#F2F2F2" />
                <g clipPath="url(#clip4_1455_2176)">
                  <g clipPath="url(#clip5_1455_2176)">
                    <path d="M0.509766 8H16.5098V24H0.509766V8Z" fill="#1565C0" />
                    <path d="M8.46489 9.77778L8.79378 10.7911H9.86044L8.99822 11.4133L9.32711 12.4267L8.46489 11.8044L7.61155 12.4267L7.93155 11.4222L7.07822 10.8H8.14489L8.456 9.77778H8.46489ZM4.10044 11.5911L5.05155 12.0711L5.79822 11.3244L5.63822 12.3733L6.58044 12.8533L5.53155 13.0222L5.36266 14.0711L4.88266 13.1289L3.83378 13.2889L4.58044 12.5422L4.10044 11.5911ZM2.28711 15.9556L3.30044 15.6267V14.56L3.92266 15.4222L4.94489 15.1111L4.32266 15.9644L4.94489 16.8267L3.94044 16.4978L3.31822 17.36V16.2933L2.28711 15.9556ZM4.10044 20.32L4.58044 19.3778L3.83378 18.6222L4.88266 18.7911L5.36266 17.84L5.53155 18.8978L6.58044 19.0578L5.63822 19.5467L5.79822 20.5956L5.05155 19.84L4.10044 20.32ZM8.46489 22.1333L8.136 21.12H7.06933L7.93155 20.4978L7.62044 19.4844L8.47378 20.1067L9.336 19.4844L9.00711 20.4978L9.86933 21.12H8.80266L8.47378 22.1333H8.46489ZM12.8293 20.32L11.8871 19.84L11.1316 20.5956L11.3004 19.5467L10.3493 19.0578L11.4071 18.8978L11.5671 17.84L12.056 18.7911L13.1049 18.6222L12.3493 19.3778L12.8293 20.32ZM14.6427 15.9556L13.6293 16.2844V17.3511L13.0071 16.4889L11.9938 16.8178L12.616 15.9556L11.9938 15.1022L13.0071 15.4222L13.6293 14.5689V15.6356L14.6427 15.9556ZM12.8293 11.5911L12.3493 12.5422L13.1049 13.2889L12.056 13.1289L11.5671 14.0711L11.4071 13.0222L10.3493 12.8533L11.3004 12.3733L11.1316 11.3244L11.8871 12.0711L12.8293 11.5911Z" fill="#FDD835" />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1455_2176">
                  <rect width="16" height="16" fill="white" transform="translate(8.50977)" />
                </clipPath>
                <clipPath id="clip1_1455_2176">
                  <rect width="16" height="16" fill="white" transform="translate(8.50977)" />
                </clipPath>
                <clipPath id="clip2_1455_2176">
                  <rect width="16" height="16" fill="white" transform="translate(8.50977)" />
                </clipPath>
                <clipPath id="clip3_1455_2176">
                  <rect x="0.509766" y="8" width="16" height="16" rx="8" fill="white" />
                </clipPath>
                <clipPath id="clip4_1455_2176">
                  <rect width="16" height="16" fill="white" transform="translate(0.509766 8)" />
                </clipPath>
                <clipPath id="clip5_1455_2176">
                  <rect width="16" height="16" fill="white" transform="translate(0.509766 8)" />
                </clipPath>
              </defs>
            </svg>

            <span className="text-white">EUR to USD · 1.17026</span>
            <span className="text-[#089981]">+0.00538 (+0.46%)</span>
          </div>

          <span className="bg-white h-[30px] w-[1px] mx-2"></span>

          {/* Item 3 */}
          <div className="flex items-center gap-2 px-6">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1393_2811)">
                <g clipPath="url(#clip1_1393_2811)">
                  <g clipPath="url(#clip2_1393_2811)">
                    <path d="M0.529297 0H24.5293V24H0.529297V0Z" fill="#F7931A" />
                    <path d="M17.6437 10.5867C17.8651 9.08933 16.7317 8.292 15.1704 7.74933L15.6771 5.732L14.4424 5.42533L13.9504 7.39333L12.9664 7.15733L13.4664 5.176L12.2331 4.86933L11.7264 6.89333L10.9424 6.708V6.70133L9.2384 6.27467L8.9104 7.592C8.9104 7.592 9.8224 7.80533 9.80907 7.81333C10.3077 7.94133 10.3931 8.26933 10.3784 8.52667L9.80907 10.8373L9.93707 10.88L9.80107 10.8507L8.99573 14.0813C8.9384 14.2307 8.7824 14.4587 8.43173 14.3667C8.4464 14.388 7.54107 14.1533 7.54107 14.1533L6.92773 15.5573L8.53173 15.9573L9.40907 16.184L8.89573 18.2307L10.1291 18.5373L10.6277 16.512L11.6197 16.7693L11.1131 18.7867L12.3464 19.0933L12.8531 17.0467C14.9557 17.4467 16.5397 17.2893 17.2024 15.3853C17.7371 13.852 17.1744 12.976 16.0691 12.3907C16.8744 12.2133 17.4811 11.6787 17.6371 10.5867H17.6437ZM14.8277 14.5373C14.4504 16.0707 11.8691 15.236 11.0344 15.036L11.7117 12.32C12.5464 12.5333 15.2277 12.94 14.8277 14.5307V14.5373ZM15.2064 10.5653C14.8637 11.956 12.7104 11.2507 12.0197 11.0787L12.6331 8.62C13.3304 8.79067 15.5691 9.11867 15.2064 10.5667V10.5653Z" fill="white" />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1393_2811">
                  <rect x="0.529297" width="24" height="24" rx="12" fill="white" />
                </clipPath>
                <clipPath id="clip1_1393_2811">
                  <rect width="24" height="24" fill="white" transform="translate(0.529297)" />
                </clipPath>
                <clipPath id="clip2_1393_2811">
                  <rect width="24" height="24" fill="white" transform="translate(0.529297)" />
                </clipPath>
              </defs>
            </svg>

            <span>Bitcoin 118,088</span>
            <span className="text-[#089981]">+628 (+0.53%)</span>
          </div>

          <span className="bg-white h-[30px] w-[1px] mx-2"></span>

          {/* Item 4 */}
          <div className="flex items-center gap-2 px-6">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1393_2821)">
                <g clipPath="url(#clip1_1393_2821)">
                  <g clipPath="url(#clip2_1393_2821)">
                    <path d="M0.160156 0H24.1602V24H0.160156V0Z" fill="url(#paint0_linear_1393_2821)" />
                    <path d="M12.1193 4.18667V9.6L6.97266 12.1333L12.1193 4.18667Z" fill="#E7F0FF" />
                    <path d="M6.9606 12.1333L6.94727 12.1867L12.1339 15.1333V9.6L6.9606 12.1333Z" fill="#A5B9EE" />
                    <path d="M12.1211 4.18667V9.6L17.3744 12.2L12.1611 4.13333L12.1344 4.17333L12.1211 4.18667Z" fill="#A5B8F0" />
                    <path d="M17.3611 12.1867L12.1611 15.1467H12.1211V9.57333L17.3744 12.1733L17.3611 12.1867Z" fill="#687FCB" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.1595 4L17.4928 12.2L12.1595 15.24L6.82617 12.2L12.1595 4ZM12.0662 4.42667L7.17284 11.9733L12.0662 9.52V4.42667ZM12.0662 9.68L7.10617 12.1867L12.0662 15.0133V9.68ZM12.2395 15.0133V9.68L17.2128 12.1867L12.2395 15.0133ZM17.1462 11.9867L12.2395 9.52V4.42667L17.1462 12V11.9867Z" fill="white" />
                    <path d="M12.1592 19.8667L6.89258 13.0133L12.1592 15.8933L17.4259 13.0133L12.1592 19.8667Z" fill="#A8B9EF" />
                    <path d="M12.1592 15.8933L6.89258 13.0133L12.1592 19.8667V15.8933Z" fill="#E8F1FF" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.82617 13.0667L6.94617 12.96L12.1595 15.8133L17.3728 12.96L17.4928 13.0667L12.1595 20L6.82617 13.0667ZM12.0795 15.9333L7.18617 13.2667L12.0795 19.6267V15.9333ZM12.2395 19.6267V15.9333L17.1328 13.2667L12.2395 19.6267Z" fill="white" />
                  </g>
                </g>
              </g>
              <defs>
                <linearGradient id="paint0_linear_1393_2821" x1="12.1602" y1="0" x2="12.1602" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#465191" />
                  <stop offset="0.36" stopColor="#32498F" />
                  <stop offset="0.7" stopColor="#555E99" />
                  <stop offset="1" stopColor="#4F5795" />
                </linearGradient>
                <clipPath id="clip0_1393_2821">
                  <rect x="0.160156" width="24" height="24" rx="12" fill="white" />
                </clipPath>
                <clipPath id="clip1_1393_2821">
                  <rect width="24" height="24" fill="white" transform="translate(0.160156)" />
                </clipPath>
                <clipPath id="clip2_1393_2821">
                  <rect width="24" height="24" fill="white" transform="translate(0.160156)" />
                </clipPath>
              </defs>
            </svg>

            <span>Ethereum 4,475.3</span>
            <span className="text-[#089981]">+51.1 (+1.16%)</span>
          </div>
          <span className="bg-white h-[30px] w-[1px] mx-2"></span>
        </div>
      </div>
      <div className="max-w-[1460px] hero-second-grid mx-auto px-6 pt-6 flex gap-6 bg-transparent">
        {/* Why Choose Us Card */}
        <div className="relative blurry-card blurry-card-left blurry-card3 grid   md:grid-cols-2">
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
            <p className="text-slate-400 text-[15px] leading-normal mt-5 mb-3 s-fade-up">
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
          <p className="text-slate-400 text-[15px] leading-normal mb-4 max-w-2xl s-fade-up">
            Earn more Profit with targeted strategies and smarter tools.
          </p>
          <div className="flex  gap-2 relative s-fade-up flex-wrap bg-[#0D0E14] p-4 rounded-xl border border-[#1F1F24]">
            <div className="choose-btn-card w-full flex items-center gap-2 px-3 py-3 rounded-lg bg-[#11131A] w-fit min-w-[100px]">
              <svg className="shuffle" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5.89062C7.50555 5.89062 7.0222 6.03725 6.61107 6.31195C6.19995 6.58665 5.87952 6.9771 5.6903 7.43392C5.50108 7.89073 5.45157 8.3934 5.54804 8.87835C5.6445 9.3633 5.8826 9.80876 6.23223 10.1584C6.58186 10.508 7.02732 10.7461 7.51227 10.8426C7.99723 10.9391 8.49989 10.8895 8.95671 10.7003C9.41352 10.5111 9.80397 10.1907 10.0787 9.77955C10.3534 9.36843 10.5 8.88508 10.5 8.39062C10.5 7.72758 10.2366 7.0917 9.76777 6.62286C9.29893 6.15402 8.66304 5.89062 8 5.89062ZM8 9.89062C7.70333 9.89062 7.41332 9.80265 7.16664 9.63783C6.91997 9.47301 6.72771 9.23874 6.61418 8.96465C6.50065 8.69056 6.47094 8.38896 6.52882 8.09799C6.5867 7.80702 6.72956 7.53974 6.93934 7.32996C7.14912 7.12019 7.41639 6.97732 7.70736 6.91945C7.99834 6.86157 8.29994 6.89127 8.57403 7.00481C8.84811 7.11834 9.08238 7.3106 9.2472 7.55727C9.41203 7.80394 9.5 8.09395 9.5 8.39062C9.5 8.78845 9.34196 9.16998 9.06066 9.45129C8.77936 9.73259 8.39782 9.89062 8 9.89062ZM15 3.89062H1C0.867392 3.89062 0.740215 3.9433 0.646447 4.03707C0.552678 4.13084 0.5 4.25802 0.5 4.39062V12.3906C0.5 12.5232 0.552678 12.6504 0.646447 12.7442C0.740215 12.8379 0.867392 12.8906 1 12.8906H15C15.1326 12.8906 15.2598 12.8379 15.3536 12.7442C15.4473 12.6504 15.5 12.5232 15.5 12.3906V4.39062C15.5 4.25802 15.4473 4.13084 15.3536 4.03707C15.2598 3.9433 15.1326 3.89062 15 3.89062ZM12.1031 11.8906H3.89687C3.729 11.3229 3.42175 10.8062 3.00311 10.3875C2.58447 9.96887 2.06775 9.66162 1.5 9.49375V7.2875C2.06775 7.11963 2.58447 6.81238 3.00311 6.39374C3.42175 5.9751 3.729 5.45837 3.89687 4.89062H12.1031C12.271 5.45837 12.5782 5.9751 12.9969 6.39374C13.4155 6.81238 13.9323 7.11963 14.5 7.2875V9.49375C13.9323 9.66162 13.4155 9.96887 12.9969 10.3875C12.5782 10.8062 12.271 11.3229 12.1031 11.8906ZM14.5 6.22625C13.9003 5.96837 13.4223 5.49035 13.1644 4.89062H14.5V6.22625ZM2.83562 4.89062C2.57774 5.49035 2.09973 5.96837 1.5 6.22625V4.89062H2.83562ZM1.5 10.555C2.09973 10.8129 2.57774 11.2909 2.83562 11.8906H1.5V10.555ZM13.1644 11.8906C13.4223 11.2909 13.9003 10.8129 14.5 10.555V11.8906H13.1644Z" fill="#A1B8FE" />
              </svg>


              <span className="font-medium text-sm">Funds held in segregated accounts</span>
            </div>
            <div className="choose-btn-card w-full flex items-center gap-2 px-3 py-3 rounded-lg bg-[#11131A] w-fit min-w-[100px] ">
              <svg className="shuffle" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 12.8906H13.5V2.89062C13.5 2.75802 13.4473 2.63084 13.3536 2.53707C13.2598 2.4433 13.1326 2.39062 13 2.39062H9.5C9.36739 2.39062 9.24021 2.4433 9.14645 2.53707C9.05268 2.63084 9 2.75802 9 2.89062V5.39062H6C5.86739 5.39062 5.74021 5.4433 5.64645 5.53707C5.55268 5.63084 5.5 5.75802 5.5 5.89062V8.39062H3C2.86739 8.39062 2.74021 8.4433 2.64645 8.53707C2.55268 8.63084 2.5 8.75802 2.5 8.89062V12.8906H2C1.86739 12.8906 1.74021 12.9433 1.64645 13.0371C1.55268 13.1308 1.5 13.258 1.5 13.3906C1.5 13.5232 1.55268 13.6504 1.64645 13.7442C1.74021 13.8379 1.86739 13.8906 2 13.8906H14C14.1326 13.8906 14.2598 13.8379 14.3536 13.7442C14.4473 13.6504 14.5 13.5232 14.5 13.3906C14.5 13.258 14.4473 13.1308 14.3536 13.0371C14.2598 12.9433 14.1326 12.8906 14 12.8906ZM10 3.39062H12.5V12.8906H10V3.39062ZM6.5 6.39062H9V12.8906H6.5V6.39062ZM3.5 9.39062H5.5V12.8906H3.5V9.39062Z" fill="#A1B8FE" />
              </svg>



              <span className="font-medium text-sm">Strong data encryption</span>
            </div>
            <div className="choose-btn-card w-full flex items-center gap-2 px-3 py-3 rounded-lg bg-[#11131A] w-fit min-w-[100px] ">
              <svg className="shuffle" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
