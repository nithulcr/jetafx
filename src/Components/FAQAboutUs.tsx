"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from '@/Components/Heading';
gsap.registerPlugin(ScrollTrigger);

const faqsAboutUs = [
    {
        question: "What is Jetafx?",
        answer:
            "Jetafx is a global forex and CFD broker offering access to over 40,000 instruments across six asset classes, including forex, indices, commodities, stocks, ETFs, and cryptocurrencies.",
    },
    {
        question: "Where is Jetafx headquartered?",
        answer:
            "Jetafx is headquartered in Rodney Bay, Gros-Islet, Saint Lucia, and serves clients worldwide.",
    },
    {
        question: "How long has Jetafx been in the market?",
        answer:
            "Jetafx has established itself as a trusted trading partner by focusing on transparency, competitive pricing, and cutting-edge technology.",
    },
    {
        question: "What makes Jetafx a trusted broker?",
        answer:
            "We operate under strict compliance, keep client funds in segregated accounts, and provide transparent trading conditions with no hidden fees.",
    },
    {
        question: "How many clients does Jetafx serve globally?",
        answer:
            "Jetafx proudly serves over 15,000 clients across 80+ countries, offering multilingual support and personalized service.",
    },
    {
        question: "What is Jetafx’s mission?",
        answer:
            "Our mission is to make global trading accessible, secure, and transparent, empowering traders at every level to succeed in financial markets.",
    },
    {
        question: "What values guide Jetafx’s business?",
        answer:
            "Jetafx is built on the values of trust, transparency, innovation, and client-first service.",
    },
    {
        question: "Does Jetafx support beginner traders?",
        answer:
            "Yes. Jetafx provides free educational resources, webinars, and demo accounts to help beginners learn before moving to live markets.",
    },
    {
        question: "How does Jetafx ensure fair trading conditions?",
        answer:
            "We provide ultra-tight spreads, fast execution, no dealing desk intervention, and full pricing transparency across all instruments.",
    },
    {
        question: "Why should traders choose Jetafx over competitors?",
        answer:
            "Traders choose Jetafx because we combine competitive pricing, powerful MT5 platforms, global market access, insured funds, and unmatched client support under one roof.",
    },
];

export default function FAQ() {
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

                    {faqsAboutUs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="faq-item  faq-fadeup relative w-full"
                            style={{ opacity: 0, transform: 'translateY(48px)' }} // ensures initial state for GSAP
                        >
                            <button
                                className="w-full text-left  focus:outline-none flex items-start justify-between cursor-pointer"
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
