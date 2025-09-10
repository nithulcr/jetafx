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
            title: "Global Trading Community",
            text: "Thousands of traders from across the globe connect with best FX every day. Whether you're new to trading or an experienced.",
            icon: (
                <svg width="25" height="25" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1393_35088)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.74023 1.45801C4.74023 1.16793 4.625 0.889728 4.41988 0.68461C4.21476 0.479492 3.93656 0.364258 3.64648 0.364258C3.3564 0.364258 3.0782 0.479492 2.87309 0.68461C2.66797 0.889728 2.55273 1.16793 2.55273 1.45801V6.78092C1.94898 6.78092 1.39044 6.98509 0.979193 7.39488C0.570859 7.80613 0.365234 8.36467 0.365234 8.96842V13.3434C0.365234 13.9472 0.569401 14.5057 0.979193 14.9155C1.39044 15.3268 1.94898 15.5309 2.55273 15.5309V19.1768C2.55273 19.4668 2.66797 19.745 2.87309 19.9502C3.0782 20.1553 3.3564 20.2705 3.64648 20.2705C3.93656 20.2705 4.21476 20.1553 4.41988 19.9502C4.625 19.745 4.74023 19.4668 4.74023 19.1768V15.5309C5.34398 15.5309 5.90253 15.3268 6.31378 14.9155C6.72211 14.5072 6.92773 13.9472 6.92773 13.3434V8.96842C6.92773 8.36467 6.72357 7.80613 6.31378 7.39488C5.90253 6.98509 5.34398 6.78092 4.74023 6.78092V1.45801ZM10.5736 28.8018C9.96982 28.8018 9.41128 28.5976 9.00003 28.1878C8.7985 27.9793 8.64045 27.7328 8.53504 27.4627C8.42964 27.1925 8.379 26.9041 8.38607 26.6143V20.0518C8.38607 19.448 8.59023 18.8895 9.00003 18.4782C9.40982 18.067 9.96982 17.8643 10.5736 17.8643V14.2184C10.5736 13.9283 10.6888 13.6501 10.8939 13.445C11.099 13.2399 11.3772 13.1247 11.6673 13.1247C11.9574 13.1247 12.2356 13.2399 12.4407 13.445C12.6458 13.6501 12.7611 13.9283 12.7611 14.2184V17.8643C13.3648 17.8643 13.9234 18.0684 14.3346 18.4782C14.7444 18.8895 14.9486 19.448 14.9486 20.0518V26.6143C14.9486 27.218 14.7444 27.7765 14.3346 28.1878C13.9234 28.5961 13.3648 28.8018 12.7611 28.8018V33.5413C12.7611 33.8314 12.6458 34.1096 12.4407 34.3147C12.2356 34.5199 11.9574 34.6351 11.6673 34.6351C11.3772 34.6351 11.099 34.5199 10.8939 34.3147C10.6888 34.1096 10.5736 33.8314 10.5736 33.5413V28.8018ZM18.9181 17.1657C19.3265 16.7574 19.8865 16.5518 20.4902 16.5518H22.6777C23.2815 16.5518 23.84 16.7559 24.2513 17.1657C24.6611 17.577 24.8652 18.1355 24.8652 18.7393V24.5726C24.8652 25.1763 24.6611 25.7349 24.2513 26.1461C23.84 26.5545 23.2815 26.7601 22.6777 26.7601V31.8643C22.6777 32.1543 22.5625 32.4325 22.3574 32.6377C22.1523 32.8428 21.8741 32.958 21.584 32.958C21.2939 32.958 21.0157 32.8428 20.8106 32.6377C20.6055 32.4325 20.4902 32.1543 20.4902 31.8643V26.7601C19.8865 26.7601 19.3279 26.5559 18.9167 26.1461C18.7152 25.9376 18.5571 25.6911 18.4517 25.421C18.3463 25.1509 18.2957 24.8625 18.3027 24.5726V18.7393C18.3027 18.1355 18.5069 17.577 18.9167 17.1657M30.3704 4.03926C30.2678 3.91617 30.1393 3.81714 29.9942 3.74918C29.849 3.68122 29.6907 3.646 29.5304 3.646C29.3702 3.646 29.2118 3.68122 29.0667 3.74918C28.9215 3.81714 28.7931 3.91617 28.6904 4.03926L24.3154 9.28926C24.1824 9.44895 24.0977 9.64323 24.0711 9.84935C24.0445 10.0555 24.0772 10.2649 24.1653 10.4531C24.2535 10.6413 24.3934 10.8005 24.5688 10.9121C24.7441 11.0236 24.9476 11.0829 25.1554 11.083H28.0721V27.4893C28.0721 27.876 28.2258 28.247 28.4992 28.5205C28.7727 28.7939 29.1437 28.9476 29.5304 28.9476C29.9172 28.9476 30.2881 28.7939 30.5616 28.5205C30.8351 28.247 30.9888 27.876 30.9888 27.4893V11.083H33.9054C34.1133 11.0829 34.3168 11.0236 34.4921 10.9121C34.6675 10.8005 34.8074 10.6413 34.8955 10.4531C34.9837 10.2649 35.0164 10.0555 34.9898 9.84935C34.9632 9.64323 34.8785 9.44895 34.7454 9.28926L30.3704 4.03926Z" fill="#FFD700" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1393_35088">
                            <rect width="35" height="35" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            ),
        },
        {
            title: "Always-On Support",
            text: "Trading never stops, and neither do we. Our team's here five days a week with dedicated guidance—from platform help to strategy.",
            icon: (
                <svg width="25" height="25" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1393_35116)">
                        <path d="M15.8572 9.24983C15.6854 8.76171 15.3663 8.33893 14.9441 8.03981C14.5218 7.7407 14.0171 7.57998 13.4997 7.57983H11.5622C11.0125 7.58138 10.4828 7.78563 10.0744 8.15347C9.66596 8.52131 9.4076 9.02689 9.34877 9.57338C9.28994 10.1199 9.43478 10.6688 9.75554 11.1152C10.0763 11.5615 10.5505 11.8738 11.0872 11.9923L14.0322 12.6373C14.6348 12.7689 15.1675 13.1185 15.5279 13.619C15.8883 14.1196 16.0509 14.7357 15.9846 15.3489C15.9182 15.9621 15.6275 16.5291 15.1683 16.9409C14.7092 17.3528 14.114 17.5803 13.4972 17.5798H11.8297C11.3128 17.5801 10.8086 17.4201 10.3864 17.1219C9.9642 16.8237 9.64481 16.402 9.47218 15.9148M12.6672 7.57983V5.07983M12.6672 20.0798V17.5798M17.4347 33.7473V20.6223C17.4347 19.7935 17.7639 18.9987 18.35 18.4126C18.936 17.8266 19.7309 17.4973 20.5597 17.4973C21.3885 17.4973 22.1833 17.8266 22.7694 18.4126C23.3554 18.9987 23.6847 19.7935 23.6847 20.6223V27.4973H28.6847C30.0108 27.4973 31.2825 28.0241 32.2202 28.9618C33.1579 29.8995 33.6847 31.1712 33.6847 32.4973V33.7473" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.6697 23.9099C10.3631 23.9096 8.11165 23.2051 6.21625 21.8907C4.32084 20.5763 2.87186 18.7146 2.06303 16.5545C1.25421 14.3944 1.12408 12.0389 1.69006 9.80287C2.25604 7.56683 3.49115 5.55686 5.23024 4.04169C6.96934 2.52652 9.12954 1.57836 11.422 1.32399C13.7145 1.06961 16.03 1.52115 18.059 2.61822C20.0879 3.71529 21.7336 5.40562 22.776 7.46319C23.8184 9.52077 24.2078 11.8475 23.8922 14.1324" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1393_35116">
                            <rect width="35" height="35" fill="white" transform="translate(0.0117188)" />
                        </clipPath>
                    </defs>
                </svg>

            ),
        },
        {
            title: "Performance-Driven Platforms",
            text: "Trade smarter with platform built for lightning-fast execution, stability, and seamless user experience.",
            icon: (
                <svg width="25" height="25" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.625 6.12533L20.7917 0.291992V4.66699H10.5833V7.58366H20.7917V11.9587M6.20833 9.04199L0.375 14.8753L6.20833 20.7087V16.3337H16.4167V13.417H6.20833V9.04199Z" fill="#FFD700" />
                </svg>

            ),
        },
        {
            title: "Learning & Growth",
            text: "Access exclusive tutorials, webinars, and market insights. Whether you're starting out or scaling up, our resources help you track.",
            icon: (
                <svg width="25" height="25" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.4917 0.989961C17.1587 0.888763 17.8372 0.888763 18.5042 0.989961C19.2552 1.10663 19.9771 1.39684 21.1875 1.88246L31.673 6.11163C32.4809 6.43829 33.1313 6.70079 33.6125 6.94288C34.0748 7.17913 34.5371 7.47225 34.7748 7.93454C34.9367 8.24809 35.0169 8.5908 35.0169 8.9335V20.6002C35.0169 20.7936 34.9401 20.979 34.8033 21.1158C34.6666 21.2525 34.4811 21.3293 34.2877 21.3293C34.0944 21.3293 33.9089 21.2525 33.7721 21.1158C33.6354 20.979 33.5586 20.7936 33.5586 20.6002V10.946C33.0861 11.1823 32.4517 11.4375 31.6773 11.751L30.6448 12.1666V20.5958C30.6448 23.3958 28.8365 25.4083 26.3865 26.6916C23.9365 27.975 20.699 28.6166 17.5198 28.6166C14.3407 28.6166 11.1177 27.9793 8.66775 26.6916C6.20316 25.4083 4.39483 23.3812 4.39483 20.5958V12.1666L3.36087 11.7495C2.55295 11.4229 1.90254 11.1604 1.42129 10.9168C0.958995 10.682 0.498162 10.3889 0.258995 9.92517C0.100334 9.61608 0.0175781 9.27364 0.0175781 8.92621C0.0175781 8.57878 0.100334 8.23634 0.258995 7.92725C0.496704 7.46642 0.958995 7.17329 1.42129 6.9385C1.89962 6.69496 2.5515 6.431 3.36087 6.10579L13.8317 1.87663C15.0377 1.38954 15.7567 1.09934 16.515 0.982669L16.4917 0.989961ZM18.2709 2.42934C17.7538 2.34936 17.2275 2.34936 16.7105 2.42934C16.1461 2.51684 15.5905 2.73559 14.2605 3.27079L3.90629 7.44163C3.05608 7.78434 2.46545 8.02496 2.0542 8.23496C1.6167 8.45809 1.5365 8.57475 1.52629 8.59371C1.47332 8.6968 1.44569 8.81104 1.44569 8.92694C1.44569 9.04284 1.47332 9.15708 1.52629 9.26017C1.5365 9.27913 1.6167 9.39725 2.0542 9.61892C2.46837 9.83038 3.059 10.071 3.90629 10.4123L14.2605 14.5831C15.5832 15.1168 16.1417 15.337 16.7105 15.4245C17.2275 15.5045 17.7538 15.5045 18.2709 15.4245C18.8352 15.337 19.3909 15.1183 20.7209 14.5845L31.075 10.4137C31.9252 10.071 32.5173 9.83038 32.9271 9.62038C33.3646 9.39725 33.4448 9.28059 33.455 9.26163C33.508 9.15854 33.5356 9.0443 33.5356 8.9284C33.5356 8.8125 33.508 8.69826 33.455 8.59517C33.4448 8.57621 33.3646 8.45954 32.9271 8.23642C32.513 8.02496 31.9209 7.78579 31.075 7.44309L20.7209 3.27225C19.3982 2.7385 18.8396 2.51975 18.2709 2.43225V2.42934ZM21.173 15.9773L29.1646 12.7543V20.6002C29.1646 22.6564 27.8696 24.2752 25.6792 25.4127C23.4917 26.556 20.5167 27.1627 17.498 27.1627C14.4792 27.1627 11.5042 26.5516 9.3167 25.4127C7.1292 24.2723 5.83129 22.6564 5.83129 20.6002V12.7689L13.8084 15.9918C15.0144 16.4789 15.7334 16.7691 16.4917 16.8858C17.1567 16.9879 17.8348 16.9879 18.5042 16.8858C19.2552 16.7691 19.9771 16.4789 21.1875 15.9933L21.173 15.9773Z" fill="#FFD700" />
                </svg>

            ),
        },
    ];
import { usePathname } from 'next/navigation';

export default function GlobeFeatureMatrix() {
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
    <section className="lg:pb-22 pb-14 lg:pb-10 pb-6 overflow-hidden relative">
      {/* <span className="border_shape3"></span> */}
      <div className="max-w-[1460px] mx-auto px-6">
        <Heading
          badgeText="choosing the best"
          title="Best Forex Broker for Active Traders"
          subtitle="Active traders need more than just access to markets — they need speed, flexibility, and smart tools to stay ahead. At Jeta FX, we provide a complete trading ecosystem that empowers you to seize opportunities across forex, CFDs, and beyond."
          maxWidthClass="max-w-[800px]"
        />
      </div>
      <div
        ref={containerRef}
        className="max-w-[1460px] mx-auto relative flex flex-col items-center justify-center lg:py-10 px-6 mt-0 lg:mt-10"
      >
        {/* Purple glowing globe */}
        <div className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 pointer-events-none z-0 w-full h-full">
          <Image
            src="/globe.png"
            alt="Founder"
            width={200}
            height={200}
            className="rounded-full w-full h-full object-contain"
          />
        </div>

        {/* Vertical line */}
        <div className="md:block hidden absolute top-0 bottom-0 left-1/2 w-[3px] bg-gradient-to-b from-gray-200 via-gray-500 via-[80%] to-black to-[100%] z-10 opacity-40" />

        {/* Cards */}
        <div className="relative w-full h-full grid lg:lg:hiddengrid-cols-2 gap-8 md:gap-0 max-w-[900px] mx-auto">
          {/* Top left */}
          <div className="flex items-start justify-center md:justify-start feature-left relative">
            <FeatureCard {...FEATURES[0]} />
          </div>
          <div className="md:block hidden"></div>
          <div className="md:block hidden"></div>
          {/* Top right */}
          <div className="flex items-start justify-center md:justify-end feature-right relative">
            <FeatureCard {...FEATURES[1]} />
          </div>
          {/* Bottom left */}
          <div className="flex items-end justify-center md:justify-start feature-left relative">
            <FeatureCard {...FEATURES[2]} />
          </div>
          <div className="md:block hidden"></div>
          <div className="md:block hidden"></div>

          {/* Bottom right */}
          <div className="flex items-end justify-center md:justify-end feature-right relative">
            <FeatureCard {...FEATURES[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, text }: FeatureCardProps) {
  return (
    <div className="site-card backdrop-blur-md border border-[#222446] shadow-lg p-6 rounded-xl max-w-[340px] text-white flex flex-col">
      <span className="site-card-span shuffle inline-block p-2 w-10 h-10 flex content-center justify-items-center">{icon}</span>
      <div className="my-2 text-xl">{title}</div>
      <p className="text-sm text-[#E6ECFF] opacity-80">{text}</p>
    </div>
  );
}
