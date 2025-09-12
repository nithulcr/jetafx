"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from '@/Components/Heading';
gsap.registerPlugin(ScrollTrigger);

const faqsPartnership = [
{
    question: "How can I contact Jetafx support?",
    answer:
      "You can reach Jetafx support via live chat, email, or phone. Our team is available directly from the website or through the client portal.",
  },
  {
    question: "What are Jetafx’s support hours?",
    answer:
      "Support is available 24 hours a day, 5 days a week, aligned with global forex trading hours.",
  },
  {
    question: "Does Jetafx provide multilingual support?",
    answer:
      "Yes. Jetafx offers multilingual support to assist traders worldwide in their preferred language.",
  },
  {
    question: "Where is Jetafx’s office located?",
    answer:
      "Jetafx is registered in Saint Lucia, with an office at Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia.",
  },
  {
    question: "Can I speak directly to a Jetafx representative?",
    answer: "Yes. Our live chat and phone support connect you instantly with a customer care agent.",
  },
  {
    question: "How do I verify my identity (KYC)?",
    answer:
      "To complete KYC, upload a valid ID (passport, driver’s license, or national ID) and a proof of address (utility bill or bank statement) through the secure client portal.",
  },
  {
    question: "How long does KYC verification take?",
    answer:
      "Most verifications are completed within 24–48 hours, depending on document accuracy.",
  },
  {
    question: "What should I do if I forget my account password?",
    answer:
      "Click “Forgot Password” on the login page, and follow the instructions to reset your password securely.",
  },
  {
    question: "How do I report a problem with deposits or withdrawals?",
    answer:
      "You can contact our finance support team via email or live chat, and provide transaction details. Issues are usually resolved promptly.",
  },
  {
    question: "How do I make a complaint about a service?",
    answer:
      "Clients can file a complaint through the support portal. Jetafx handles all complaints under a transparent dispute resolution policy.",
  },
  {
    question: "Can Jetafx help me with technical platform issues?",
    answer:
      "Yes. Our support team assists with MT5 setup, mobile app usage, chart settings, and technical troubleshooting.",
  },
  {
    question: "How can I check the status of my support ticket?",
    answer:
      "Log into your Jetafx client portal to view the status of open support requests.",
  },
  {
    question: "Is there a dedicated line for partners or affiliates?",
    answer:
      "Yes. Jetafx provides dedicated support for IBs and affiliates, including commission tracking and payout queries.",
  },
  {
    question: "Can I request a call back from Jetafx support?",
    answer:
      "Yes. You can submit a callback request via the client portal, and a representative will contact you within business hours.",
  },
  {
    question: "How quickly does Jetafx respond to support queries?",
    answer:
      "Most queries are answered within minutes via live chat and within 24 hours by email.",
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

                    {faqsPartnership.map((faq, idx) => (
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
