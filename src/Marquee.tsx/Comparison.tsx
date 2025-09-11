'use client';
import React from 'react';
import { useRef, useEffect } from "react";
import Heading from '@/Marquee.tsx/Heading';
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Jetafx feature list
const POSITIVE_FEATURES = [
    "Effortless global collaboration",
    "Highly scalable & flexible solutions",
    "Advanced dashboard control",
    "Built-in data-driven analytics",
    "Latest automation solutions",
];

// Others drawbacks list
const NEGATIVE_FEATURES = [
    "Limited global collaboration",
    "Rigid and non-scalable options",
    "Basic dashboard functionalities",
    "Lack of advanced analytics",
    "Outdated and complex interfaces",
];




export default function Comparison() {

    const comparisonRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (!comparisonRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(".gma-heading", {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.out",
                stagger: 0.2, // staggers animation by 0.2 seconds per element
                scrollTrigger: {
                    trigger: comparisonRef.current,
                    start: "top 80%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                },
            });
        }, comparisonRef);

        return () => ctx.revert();
    }, []);







    return (
        <section className="py-14 lg:py-24  comparison-section relative">
            <span className="border_shape3"></span>
            <div className='max-w-[1460px] mx-auto px-6'>
                <Heading
                    badgeText="Comparison"
                    title="Why Jeta fx Stands Out"
                    subtitle="See how we compare against others in performance, growth"
                    maxWidthClass=""
                />
                <div ref={comparisonRef} className="flex flex-col md:flex-row gap-8 w-full max-w-4xl mt-10 lg:mt-20 mx-auto ">

                    {/* Jetafx */}
                    <div className="flex-1 gma-heading">
                        <div className="flex items-center gap-2 mb-8 h-4 mx-auto w-fit">
                            <Image
                                src="/logo.png"
                                alt="logo"
                                width={100}
                                height={100}
                                className=""
                            />
                        </div>
                        <ul className="space-y-6 site-card2 w-full">
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
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.7884 16.1152C21.8875 16.2871 21.9144 16.4912 21.8633 16.6829C21.8121 16.8746 21.6871 17.0382 21.5156 17.138L12.5156 22.388C12.4009 22.4548 12.2706 22.4901 12.1378 22.4901C12.0051 22.4901 11.8747 22.4548 11.76 22.388L2.76 17.138C2.59096 17.0364 2.46874 16.8723 2.41978 16.6813C2.37083 16.4903 2.39909 16.2876 2.49844 16.1173C2.59779 15.9469 2.76024 15.8225 2.95062 15.7711C3.141 15.7196 3.34398 15.7452 3.51562 15.8423L12.1406 20.872L20.7656 15.8423C20.9375 15.7433 21.1417 15.7164 21.3334 15.7675C21.5251 15.8186 21.6887 15.9436 21.7884 16.1152ZM20.7656 11.3423L12.1406 16.372L3.51562 11.3423C3.34485 11.2573 3.1481 11.2406 2.96541 11.2955C2.78272 11.3504 2.62783 11.4729 2.53226 11.638C2.43668 11.8031 2.40762 11.9984 2.45097 12.1842C2.49433 12.37 2.60685 12.5322 2.76562 12.638L11.7656 17.888C11.8803 17.9548 12.0107 17.9901 12.1434 17.9901C12.2762 17.9901 12.4066 17.9548 12.5212 17.888L21.5212 12.638C21.6077 12.5891 21.6836 12.5235 21.7444 12.445C21.8053 12.3665 21.85 12.2768 21.876 12.1809C21.9019 12.085 21.9085 11.9849 21.8954 11.8865C21.8823 11.788 21.8498 11.6932 21.7998 11.6074C21.7498 11.5216 21.6832 11.4466 21.6039 11.3867C21.5247 11.3269 21.4343 11.2833 21.3381 11.2587C21.2419 11.234 21.1418 11.2287 21.0435 11.2431C20.9452 11.2575 20.8508 11.2912 20.7656 11.3423ZM2.39062 7.49016C2.39092 7.3588 2.42572 7.22982 2.49153 7.11613C2.55734 7.00244 2.65186 6.90803 2.76562 6.84235L11.7656 1.59235C11.8803 1.52547 12.0107 1.49023 12.1434 1.49023C12.2762 1.49023 12.4066 1.52547 12.5212 1.59235L21.5212 6.84235C21.6345 6.9084 21.7284 7.00297 21.7937 7.11663C21.859 7.2303 21.8933 7.35908 21.8933 7.49016C21.8933 7.62124 21.859 7.75002 21.7937 7.86369C21.7284 7.97735 21.6345 8.07192 21.5212 8.13797L12.5212 13.388C12.4066 13.4548 12.2762 13.4901 12.1434 13.4901C12.0107 13.4901 11.8803 13.4548 11.7656 13.388L2.76562 8.13797C2.65186 8.07229 2.55734 7.97788 2.49153 7.86419C2.42572 7.7505 2.39092 7.62152 2.39062 7.49016ZM4.62937 7.49016L12.1406 11.872L19.6519 7.49016L12.1406 3.10828L4.62937 7.49016Z" fill="white" />
                                </svg>

                                Others
                            </span>
                        </div>
                        <ul className="space-y-6 site-card2 w-full ">
                            {NEGATIVE_FEATURES.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-[#bac3f0] text-[17px] font-[200]">
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
