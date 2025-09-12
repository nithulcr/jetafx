"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from '@/Components/Heading';
gsap.registerPlugin(ScrollTrigger);

const faqsPlatform = [
{
    question: "What trading platform does Jetafx use?",
    answer:
      "Jetafx provides access to the MetaTrader 5 (MT5) platform, one of the most advanced and trusted trading platforms in the industry.",
  },
  {
    question: "What markets can I trade on MT5 with Jetafx?",
    answer:
      "On MT5, you can trade forex, commodities, indices, stocks, ETFs, futures, and cryptocurrencies all from a single account.",
  },
  {
    question: "Is MT5 available on mobile?",
    answer:
      "Yes. Jetafx offers a powerful mobile trading app for both iOS and Android, giving you access to your account anywhere.",
  },
  {
    question: "How do I download MT5?",
    answer:
      "You can download MT5 directly from the Jetafx website for desktop or from the App Store / Google Play for mobile devices.",
  },
  {
    question: "Can I trade directly from charts on MT5?",
    answer:
      "Yes. MT5 allows one-click trading directly from charts, making execution faster and more efficient.",
  },
  {
    question: "What analytical tools are available in MT5?",
    answer:
      "MT5 comes with 80+ technical indicators, charting tools, timeframes, and advanced order types for in-depth analysis.",
  },
  {
    question: "Can I use automated trading (Expert Advisors) on MT5?",
    answer:
      "Yes. MT5 supports Expert Advisors (EAs), allowing you to automate your strategies using trading algorithms.",
  },
  {
    question: "Does Jetafx MT5 have an economic calendar?",
    answer:
      "Yes. The MT5 platform integrates a real-time economic calendar to keep traders informed of key global events.",
  },
  {
    question: "Can I customize my trading workspace on MT5?",
    answer:
      "Yes. You can personalize charts, indicators, and layouts to match your preferred trading style.",
  },
  {
    question: "Does MT5 support multi-device syncing?",
    answer:
      "Yes. Your trading account and data are accessible across desktop, web, and mobile devices with seamless synchronization.",
  },
  {
    question: "How secure is MT5 trading with Jetafx?",
    answer:
      "MT5 uses encrypted data transmission and advanced security protocols, ensuring safe trading at all times.",
  },
  {
    question: "What order types are available on MT5?",
    answer:
      "MT5 supports market orders, pending orders, stop orders, trailing stops, and take-profit/stop-loss features.",
  },
  {
    question: "Can I set price alerts and notifications on mobile?",
    answer:
      "Yes. The Jetafx mobile app allows you to set custom price alerts, push notifications, and trade confirmations in real time.",
  },
  {
    question: "Do I need a powerful computer to run MT5?",
    answer:
      "No. MT5 is lightweight and works smoothly on most devices, though better performance is achieved with stable internet and modern systems.",
  },
  {
    question: "Can beginners easily use MT5?",
    answer:
      "Yes. While MT5 is a professional-grade platform, it is also user-friendly for beginners, with tutorials, guides, and demo accounts available on Jetafx.",
  },
];

export default function FAQ({ faqs = faqsPlatform }: { faqs?: { question: string; answer: string }[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const faqContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!faqContainer.current) return;
        const qEls = faqContainer.current.querySelectorAll(".faq-fadeup");
        qEls.forEach((el, n) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: "power2.out",
                    delay: n * 0.05,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 95%",
                        end: "top 20%",
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
        <section className="faq-section relative overflow-hidden py-14 lg:py-22">
             <span className='border_shape3'></span>
            <div className="max-w-[1460px] px-6 mx-auto">
                <Heading
                    badgeText="FAQ'S SECTION"
                    title="Some Common FAQ's"
                    subtitle="Get answers to your questions and learn about our platform"
                    maxWidthClass=""
                />

                <div
                    ref={faqContainer}
                    className="faq-container flex flex-col gap-4  rounded-lg max-w-6xl mx-auto mt-8  lg:mt-12"
                >

                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="faq-item  faq-fadeup relative w-full"
                            style={{ opacity: 0, transform: 'translateY(48px)' }} // ensures initial state for GSAP
                        >
                            <button
                                className="w-full text-left  focus:outline-none flex  items-start justify-between cursor-pointer"
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            >
                                <span className="text-[#f6f6fa] text-lg">
                                    {faq.question}
                                </span>
                                <span className="ml-2 flex items-center mt-3">

                                    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
                                        transform: openIndex === idx ? "rotate(180deg)" : "none",
                                        transition: "transform 0.3s ease"
                                    }}>
                                        <path d="M14.9137 2.31295L8.66374 8.56295C8.57664 8.65035 8.47315 8.7197 8.35919 8.76702C8.24524 8.81434 8.12306 8.83869 7.99967 8.83869C7.87628 8.83869 7.75411 8.81434 7.64016 8.76702C7.5262 8.7197 7.42271 8.65035 7.33561 8.56295L1.08561 2.31295C0.90949 2.13683 0.810547 1.89796 0.810547 1.64889C0.810547 1.39982 0.90949 1.16095 1.08561 0.984829C1.26173 0.808709 1.5006 0.709766 1.74967 0.709766C1.99874 0.709766 2.23762 0.808709 2.41374 0.984829L8.00045 6.57155L13.5872 0.984048C13.7633 0.807928 14.0022 0.708984 14.2512 0.708984C14.5003 0.708984 14.7392 0.807928 14.9153 0.984048C15.0914 1.16017 15.1904 1.39904 15.1904 1.64811C15.1904 1.89718 15.0914 2.13605 14.9153 2.31217L14.9137 2.31295Z" fill="white" />
                                    </svg>

                                </span>
                            </button>

                            <div
                                className={`transition-all duration-600 overflow-hidden ${openIndex === idx ? "pb-2" : ""}`}
                                style={{
                                    maxHeight: openIndex === idx ? "200px" : "0px",
                                    opacity: openIndex === idx ? 1 : 0,
                                    transition: "all 0.4s cubic-bezier(.25,.8,.25,1)",
                                    // Direct padding for non-Tailwind projects:
                                    paddingTop: openIndex === idx ? "20px" : "0px",
                                    
                                }}
                            >
                                <div className="opacity-80 text-base mt-1">
                                    {faq.answer}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
