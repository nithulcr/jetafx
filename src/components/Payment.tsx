"use client";
import React, { useEffect, useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from '@/components/Heading';
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);



export default function Payment() {
    const paymentContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!paymentContainer.current) return;
        const qEls = paymentContainer.current.querySelectorAll(".payment-fadeup");
        qEls.forEach((el, n) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 48 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    delay: n * 0.1,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <section className="payment-section relative overflow-hidden py-14 lg:py-22">
            <div className="max-w-[1460px] px-6 mx-auto">
                <Heading
                    badgeText="Quick and wasy way deposits and withdrawls"
                    title="No Limits. No commission. No Delays."
                    subtitle=""
                    maxWidthClass=""
                />
                <div ref={paymentContainer}>
                    <div

                        className="payment-container relative p-6 lg:p-10 grid md:grid-cols-2 gap-8 payment-fadeup rounded-lg max-w-6xl mx-auto mt-6  lg:mt-10"
                    >
                        <div className="py-4">
                            <h4 className="text-2xl mb-3">Payment & Withdrawal systems</h4>
                            <p>Take control of your trading journey with real- time insights, advance tools, and strategic expertise that put you ahead in the ever-evolving world of Forex.</p>
                        </div>
                        <div className="">
                            <Image
                                src="/payment-icon.png"
                                alt="Payment icon"
                                width={1000}
                                height={1000}
                                className="w-full max-w-[300px] mx-auto"
                            />

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
