"use client";
import React, { useRef, useEffect} from "react";
import Image from "next/image";
import Heading from '@/components/Heading';
import AnimatedButton from "./AnimatedButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EarnMoreSection() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            const fadeUps = containerRef.current!.querySelectorAll(".fade-up");
            gsap.fromTo(
                fadeUps,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Refresh ScrollTrigger after images load
            const imgs = containerRef.current!.querySelectorAll("img");
            imgs.forEach(img => {
                if (!img.complete) {
                    img.addEventListener("load", () => {
                        ScrollTrigger.refresh();
                    });
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative px-6 pt-14 lg:pt-22 pb-10 lg:pb-16 earn-more">
            <div className="max-w-[1400px] w-full mx-auto">
                <Heading
                    badgeText="Refer to earn more"
                    title="Earn by Referring Traders with Jeta FX"
                    subtitle="Join the Jeta FX Partnership Program and grow your income by introducing new clients to one of the world’s most trusted trading platforms — MetaTrader 5 (MT5). "
                    maxWidthClass=""
                />
                <div className="flex flex-col lg:flex-row items-center gap-12 mt-8 lg:mt-12">
                    {/* Platform Logo */}
                    <div className="fade-up flex-1 flex items-center justify-center">
                        <Image
                            src="/earnmore-img.png" // replace with your logo path
                            alt="MetaTrader 5 Logo"
                            width={300}
                            height={300}
                            className="object-contain w-full max-w-[500px]"
                        />
                    </div>

                    {/* Platform Details */}
                    <div className="fade-up flex-1 flex flex-col items-start justify-center">
                        <div className="fade-up bg-black/30 rounded-2xl  mb-8 shadow-lg w-full max-w-xl">
                            <h2 className="font-deefault text-2xl mb-4 text-white">
                               Partnership Benefits
                            </h2>
                            
                            <ul className="list-none space-y-3 text-[#E6ECFF] opacity-70 fw-200 mb-3">
                                <li className="flex items-center gap-2">
                                    <CheckSVG />
                                  Competitive Revenue Share – Earn commissions on your referred clients’ trading activity.
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckSVG />
                                   Fast Payouts & Clear Reporting – Access your earnings in real time through a dedicated partner dashboard.
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckSVG />
                                   Marketing & Support Tools – Gain access to ready-to-use promotional materials and personalized assistance to help you succeed.
                                </li>
                            </ul>
                            <AnimatedButton href="" label="Start Partnering with Jeta FX Today" className="white-btn w-fit mt-5 lg:mt-10 fade-up" />
                        </div>
                    </div>
                </div>
            </div>

          
        </section>
    );
}

// -- Re-usable Check SVG icon (no JSX namespace needed) --
function CheckSVG() {
    return (
        <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.74999 9.3448L3.16699 10.9278L7.91699 15.6778L15.833 7.7608L14.25 6.1778L7.91699 12.5108L4.74999 9.3448Z" fill="#8AA5FF" />
        </svg>
    );
}


