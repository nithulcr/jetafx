"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Heading from '@/components/Heading';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const FEATURES = [
  {
    title: "Fast Payouts",
    text: "Receive your commissions quickly with secure and reliable payment methods.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="#FFD700" strokeWidth="1.5" />
        <path d="M15 7.5V22.5M18.75 11.875C18.75 10.15 17.0712 8.75 15 8.75C12.9288 8.75 11.25 10.15 11.25 11.875C11.25 13.6 12.9288 15 15 15C17.0712 15 18.75 16.4 18.75 18.125C18.75 19.85 17.0712 21.25 15 21.25C12.9288 21.25 11.25 19.85 11.25 18.125" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
      </svg>


    ),
  },
  {
    title: "Attractive Commissions",
    text: "Enjoy competitive rewards designed to grow alongside your referrals.",
    icon: (
      <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.505 10.8055C17.3862 10.8047 17.2718 10.8509 17.187 10.9341C17.1021 11.0173 17.0536 11.1307 17.052 11.2495V14.5675C17.0536 14.6866 17.1023 14.8002 17.1875 14.8834C17.2727 14.9666 17.3874 15.0127 17.5065 15.0115H27.501C27.6201 15.0127 27.7348 14.9666 27.82 14.8834C27.9052 14.8002 27.9539 14.6866 27.9555 14.5675V11.2495C27.9539 11.1304 27.9052 11.0168 27.82 10.9336C27.7348 10.8504 27.6201 10.8043 27.501 10.8055H17.505ZM23.634 0.2515C25.017 0.3175 26.0115 0.5905 26.6415 1.1695C27.264 1.7425 27.5835 2.572 27.6465 3.67V6.8155C27.6433 7.08338 27.534 7.33905 27.3424 7.52636C27.1509 7.71367 26.8929 7.8173 26.625 7.8145C26.4922 7.81609 26.3605 7.7915 26.2372 7.74215C26.1139 7.69281 26.0016 7.61966 25.9066 7.52689C25.8116 7.43412 25.7358 7.32355 25.6835 7.20149C25.6313 7.07943 25.6036 6.94827 25.602 6.8155L25.6035 3.727C25.5705 3.157 25.434 2.803 25.239 2.623C25.05 2.449 24.474 2.293 23.5845 2.248H3.9705C3.165 2.278 2.6415 2.431 2.388 2.6485C2.193 2.815 2.046 3.274 2.0445 4.0675L2.04 21.7225C2.115 22.4935 2.2845 23.008 2.502 23.2645C2.667 23.4595 3.1785 23.6545 3.9315 23.7505H23.6055C24.5265 23.7685 25.0695 23.6305 25.2525 23.446C25.455 23.2405 25.602 22.7005 25.602 21.817V18.7495C25.602 18.199 26.0595 17.7505 26.625 17.7505C27.189 17.7505 27.6465 18.199 27.6465 18.7495V21.817C27.6465 23.167 27.3705 24.1765 26.724 24.832C26.058 25.507 24.999 25.777 23.5845 25.747L3.81 25.7425C2.4645 25.5865 1.5 25.2175 0.9255 24.538C0.405 23.923 0.1155 23.0455 0 21.8185V4.066C0.003 2.752 0.318 1.7635 1.041 1.1455C1.704 0.5755 2.661 0.298 3.9315 0.25L23.634 0.2515ZM27.501 8.8075C28.881 8.8075 30 9.901 30 11.2495V14.5675C30 15.916 28.881 17.0095 27.501 17.0095H17.5065C16.1265 17.0095 15.0075 15.9145 15.0075 14.5675V11.2495C15.0075 9.901 16.1265 8.8075 17.5065 8.8075H27.501ZM20.0055 11.7175C19.3155 11.7175 18.756 12.2575 18.756 12.922C18.756 13.5865 19.3155 14.1265 20.0055 14.1265C20.6955 14.1265 21.255 13.5865 21.255 12.922C21.255 12.2575 20.6955 11.716 20.0055 11.716" fill="#FFD700" />
      </svg>


    ),
  },
  {
    title: "Tier Based Growth",
    text: "Unlock higher benefits as your partnership activity expands.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 14.985C30 6.7125 23.28 0 15 0C6.72 0 0 6.7125 0 14.985C0 19.5413 2.07 23.6475 5.31 26.4037C5.34 26.4337 5.37 26.4338 5.37 26.4638C5.64 26.6738 5.91 26.8837 6.21 27.0937C6.36 27.1837 6.48 27.3019 6.63 27.4219C9.10988 29.1005 12.0354 29.9984 15.03 30C18.0246 29.9984 20.9501 29.1005 23.43 27.4219C23.58 27.3319 23.7 27.2138 23.85 27.1219C24.12 26.9138 24.42 26.7038 24.69 26.4938C24.72 26.4638 24.75 26.4637 24.75 26.4337C27.93 23.6456 30 19.5413 30 14.985ZM15 28.1119C12.18 28.1119 9.6 27.2119 7.47 25.7137C7.5 25.4737 7.56 25.2356 7.62 24.9956C7.79935 24.3454 8.0615 23.7209 8.4 23.1375C8.73 22.5675 9.12 22.0575 9.6 21.6075C10.05 21.1575 10.59 20.7394 11.13 20.4094C11.7 20.0794 12.3 19.8394 12.96 19.6594C13.6253 19.4812 14.3112 19.391 15 19.3913C17.0452 19.3758 19.0154 20.1603 20.49 21.5775C21.18 22.2675 21.72 23.0769 22.11 24.0056C22.32 24.5456 22.47 25.115 22.56 25.7137C20.346 27.2703 17.7064 28.1076 15 28.1119ZM10.41 14.2369C10.1462 13.6315 10.0133 12.9772 10.02 12.3169C10.02 11.6587 10.14 10.9987 10.41 10.3988C10.68 9.79875 11.04 9.26062 11.49 8.81062C11.94 8.36062 12.48 8.0025 13.08 7.7325C13.68 7.4625 14.34 7.3425 15 7.3425C15.69 7.3425 16.32 7.4625 16.92 7.7325C17.52 8.0025 18.06 8.3625 18.51 8.81062C18.96 9.26062 19.32 9.80062 19.59 10.3988C19.86 10.9987 19.98 11.6587 19.98 12.3169C19.98 13.0069 19.86 13.6369 19.59 14.235C19.3309 14.8269 18.9648 15.366 18.51 15.825C18.0508 16.2791 17.5118 16.6446 16.92 16.9031C15.6801 17.4116 14.2899 17.4116 13.05 16.9031C12.4582 16.6446 11.9192 16.2791 11.46 15.825C11.0048 15.3725 10.6475 14.8332 10.41 14.2369ZM24.33 24.1856C24.33 24.1256 24.3 24.0956 24.3 24.0356C24.0055 23.0968 23.5706 22.208 23.01 21.3994C22.449 20.5848 21.7601 19.8662 20.97 19.2712C20.3664 18.817 19.712 18.4344 19.02 18.1313C19.3333 17.9216 19.6248 17.681 19.89 17.4131C20.3373 16.9716 20.7301 16.4781 21.06 15.9431C21.7267 14.8525 22.07 13.595 22.05 12.3169C22.0598 11.3709 21.876 10.4329 21.51 9.56062C21.1491 8.71997 20.6296 7.9567 19.98 7.3125C19.3298 6.67697 18.5667 6.16827 17.73 5.8125C16.8564 5.4466 15.9171 5.26346 14.97 5.27437C14.0228 5.26406 13.0835 5.44783 12.21 5.81438C11.3641 6.1658 10.5985 6.68573 9.96 7.3425C9.32115 7.98932 8.812 8.75242 8.46 9.59062C8.09396 10.4629 7.91019 11.4009 7.92 12.3469C7.92 13.0069 8.01 13.6362 8.19 14.235C8.37 14.865 8.61 15.435 8.94 15.9731C9.24 16.5131 9.66 16.9931 10.11 17.4431C10.38 17.7131 10.68 17.9525 11.01 18.1612C10.3149 18.4707 9.66012 18.8636 9.06 19.3313C8.28 19.9313 7.59 20.6494 7.02 21.4294C6.45426 22.2349 6.01893 23.1246 5.73 24.0656C5.7 24.1256 5.7 24.1856 5.7 24.2156C3.33 21.8175 1.86 18.5813 1.86 14.985C1.86 7.7625 7.77 1.85812 15 1.85812C22.23 1.85812 28.14 7.7625 28.14 14.985C28.1361 18.4349 26.7662 21.7429 24.33 24.1856Z" fill="#FFD700" />
      </svg>


    ),
  },

];
import { usePathname } from 'next/navigation';

export default function GrowWithUsMatrix() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const fadeUps = containerRef.current!.querySelectorAll(
        ".feature-left, .feature-right"
      );
      gsap.from(fadeUps, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
          // markers: true, // uncomment for debugging
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [pathname]);

  return (
    <section className="grow-section lg:pt-22 pt-14 lg:pb-10 pb-4 overflow-hidden relative md:min-h-[460px] lg:min-h-screen">
      <div className="px-6 absolute left-1/2 md:top-[40px] top-0  -translate-x-1/2  pointer-events-none z-0 w-full md:h-full opacity-50 md:opacity-100">
        <Image
          src="/globe2.png"
          alt="Founder"
          width={200}
          height={200}
          className="rounded-full w-full  h-full  h-full object-contain"
        />
      </div>
      {/* <span className="border_shape3"></span> */}
      <div className="max-w-[1460px] mx-auto px-6 relative z-2">
        <Heading
          badgeText="Grow with us"
          title="Join One of the Fastest Growing Partner Programs Today"
          subtitle=""
          maxWidthClass=""
        />
      </div>
      <div
        ref={containerRef}
        className="max-w-[1460px]  z-2 mx-auto relative flex flex-col items-center justify-center py-6 px-6"
      >

        <div className="relative w-full h-full grid md:grid-cols-3 gap-6 md:gap-8 mx-auto">
          <FeatureCard {...FEATURES[0]} />
          <FeatureCard {...FEATURES[1]} />
          <FeatureCard {...FEATURES[2]} />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, text }: FeatureCardProps) {
  return (
    <div className="site-card md:min-h-[200px] content-center backdrop-blur-md border border-[#222446] shadow-lg p-6 rounded-xl  text-white flex flex-col">
      <div className="flex items-center gap-2">
        <span className="shuffle inline-block p-2 w-10 h-10 flex content-center justify-items-center">{icon}</span>
        <div className="my-2 text-xl">{title}</div>
      </div>
      <p className="md:text-md mt-2 text-[#E6ECFF] opacity-80">{text}</p>
    </div>
  );
}
