'use client';

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Heading from '@/components/Heading';

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const quote = [ "At Jeta FX, we know traders struggle with trust, withdrawals, and hidden fees. That’s why we built a platform focused on transparency, fast payouts, and true support — so you can trade with confidence, not worry."
];

// Highlighted words in yellow
const highlights = [
    "trust,", "withdrawals,", "and", "hidden", "fees."
];

export default function FoundersNote() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const words = containerRef.current?.querySelectorAll(".scrub-word");
        if (!words) return;

        gsap.fromTo(
            words,
            { height: 0, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                height:1,
                duration: 0.8,
                stagger: 0.08,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 90%",
                    end: "bottom 70%",
                    scrub: 1,
                    toggleActions: 'play reverse play reverse'
                }
            }
        );
        gsap.from('.fade-up', {
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 75%',
                end: 'bottom 0%',
                toggleActions: 'play reverse play reverse'
            },
        });
    }, []);

    function renderSentence(sentence: string) {
        return sentence.split(" ").map((word, i) => (
            <span
                key={i}
                className={`scrub-word inline-block mr-1 transition-all duration-300 ${highlights.includes(word.replace(/[^\w,\.]/g, "")) ? "text-[#FFD700]" : ""
                    }`}
            >
                {word + " "}
            </span>
        ));
    }

    return (
        <section className="founder-section relative lg:py-20 py-14">
            <div className="max-w-[1460px] mx-auto px-6 flex flex-col items-center justify-center">
                <Heading
                    badgeText="FOUNDERS NOTE"
                    title=""
                    subtitle=""
                />
                <div ref={containerRef} className="max-w-4xl text-center mx-auto mb-6">
                    {quote.map((s, idx) => (
                        <span key={idx} className="text-[1.5rem] md:text-[30px]  leading-snug tracking-wide">


                            {renderSentence(s)}


                        </span>
                    ))}
                </div>
                <div className="flex flex-row items-center justify-center gap-3 mt-4 fade-up">
                    <Image
                        src="/ceo.png"
                        alt="Founder"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                    <span className="text-[#E6ECFF] text-md opacity-70">Founder &amp; CEO of Jetafx</span>
                </div>
            </div>
        </section>
    );
}
