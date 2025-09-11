'use client';
import React from 'react';
import { useRef, useEffect } from "react";
import Heading from '@/Components/Heading';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Jetafx feature list
const POSITIVE_FEATURES = [
    "Clients from 80+ countries with dedicated 24/5 support",
    "Forex, Commodities, Indices, and more from one account",
    "Modern, stable platforms designed for fast execution",
    "learning resources for beginners and experienced traders",
    "Support for manual and strategy-driven trading.",
];

// Others drawbacks list
const NEGATIVE_FEATURES = [
    "Limited asset selection that restricts opportunities",
    "Hidden conditions and unclear pricing",
    "Outdated tools that slow decision-making",
    "Generic support without personalized guidance",
    "Barriers for beginners to start confidently",
];




import { usePathname } from 'next/navigation';

export default function WhyUs() {

    const pathname = usePathname();

     const WhyUsRef = useRef<HTMLDivElement | null>(null);
useEffect(() => {
        if (!WhyUsRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(".gma-heading", {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.out",
                stagger: 0.2, // staggers animation by 0.2 seconds per element
                scrollTrigger: {
                    trigger: WhyUsRef.current,
                    start: "top 80%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                },
            });
        }, WhyUsRef);

        return () => ctx.revert();
    }, [pathname]);







    return (
        <section className="py-14 lg:py-22  whyus-section relative">
            <span className="border_shape3"></span>
            <div className='max-w-[1460px] mx-auto px-6'>
                <Heading
                    badgeText="Why Us"
                    title="What Makes Us Stand Out in the Industry"
                    subtitle="At Jeta FX, we focus on more than just execution speed we combine transparency & technology, "
                    maxWidthClass="max-w-[640px]"
                />
                <div ref={WhyUsRef} className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mt-10 lg:mt-20 mx-auto ">

                    {/* Jetafx */}
                    <div className="flex-1 gma-heading">
                        <div className="flex items-center gap-2 mb-8 h-4 mx-auto w-fit">
                            <span className="text-2xl tracking-tight flex items-center gap-2">
                               Jeta FX Advantage
                            </span>
                        </div>
                        <ul className="space-y-8 site-card2 w-full">
                            {POSITIVE_FEATURES.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-[#bac3f0] text-[17px] font-[200]">
                                    <span className="inline-block w-[18px] h-[18px]">
                                        <svg width="25" height="24" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.75097 9.32325L3.16797 10.9062L7.91797 15.6562L15.834 7.73925L14.251 6.15625L7.91797 12.4893L4.75097 9.32325Z" fill="#8AA5FF" />
                                        </svg>

                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Others */}
                    <div className=" flex-1 gma-heading">
                        <div className="flex items-center gap-2 mb-8 h-4 mx-auto w-fit">
                            <span className="text-2xl tracking-tight flex items-center gap-2">
                               What Others Miss
                            </span>
                        </div>
                        <ul className="space-y-8 site-card2 w-full ">
                            {NEGATIVE_FEATURES.map((item, idx) => (
                                <li key={idx} className="font-[200] flex items-center gap-3 text-[#bac3f0] text-[17px]">
                                    <span className="inline-block w-[18px] h-[18px]">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.49994 0.09375L5.99994 4.59375L10.4999 0.09375L11.9139 1.50775L7.41394 6.00775L11.9139 10.5077L10.4999 11.9218L5.99994 7.42175L1.49994 11.9218L0.0859375 10.5077L4.58594 6.00775L0.0859375 1.50775L1.49994 0.09375Z" fill="#8AA5FF" />
                                        </svg>


                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
