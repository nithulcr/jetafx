"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from '@/Components/Heading';
gsap.registerPlugin(ScrollTrigger);

const faqsAccount = [
  {
    question: "What types of trading accounts does Jetafx offer?",
    answer:
      "Jetafx offers multiple account types including Pro, Premium, Zero, and Scalp accounts, designed to suit traders of all experience levels.",
  },
  {
    question: "What is the minimum deposit required to open an account?",
    answer:
      "You can start trading with Jetafx with as little as $50, depending on the account type.",
  },
  {
    question: "What is the difference between the account types?",
    answer:
      "Pro Account: For experienced traders, with advanced features and customizable lot sizes. Premium Account: Ideal for retail traders, with tight spreads and fast execution. Zero Account: Commission-free trading with ultra-competitive spreads. Scalp Account: Designed for high-frequency scalpers with ultra-fast execution.",
  },
  {
    question: "Does Jetafx provide a demo account?",
    answer:
      "Yes. Jetafx offers a free demo account where you can practice trading with virtual funds before switching to a live account.",
  },
  {
    question: "What currencies can I use to fund my account?",
    answer:
      "Accounts can be funded in multiple base currencies including USD, EUR, and GBP for convenience.",
  },
  {
    question: "How is leverage structured across different accounts?",
    answer:
      "Leverage depends on your account type and region. Jetafx provides flexible leverage, allowing you to manage risk and position sizes effectively.",
  },
  {
    question: "Are there any inactivity or maintenance fees?",
    answer:
      "No. Jetafx does not charge hidden inactivity or maintenance fees, ensuring transparency at all times.",
  },
  {
    question: "How can I upgrade my account type?",
    answer:
      "You can request an account upgrade through the Jetafx client portal or by contacting customer support.",
  },
  {
    question: "What risk management tools are included in Jetafx accounts?",
    answer:
      "All accounts support stop-loss orders, take-profit orders, margin alerts, and customizable lot sizes to help traders manage risk effectively.",
  },
  {
    question: "Can beginners and professionals both use Jetafx accounts?",
    answer:
      "Yes. Jetafx account options are tailored for all levels—beginners benefit from user-friendly features and education, while professionals enjoy advanced tools, tight spreads, and deep liquidity.",
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

                    {faqsAccount.map((faq, idx) => (
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
