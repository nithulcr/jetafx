"use client";

import React, { useState, useRef, useEffect } from "react";
import AnimatedButton from "./AnimatedButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const [newsletter, setNewsletter] = useState(true);
  const formRef = useRef<HTMLFormElement | null>(null);
  const hero2Ref = useRef<HTMLDivElement | null>(null); // Declare hero2Ref

  useEffect(() => {
    if (!formRef.current) return;
    if (!hero2Ref.current) return;

    const ctx = gsap.context(() => {
      const fadeElements = hero2Ref.current?.querySelectorAll(".fade-up");
      if (fadeElements) {
        gsap.fromTo(
          fadeElements,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
        );
      }

      // Animate each form child with fade-up and slight slide
      gsap.fromTo(
        formRef.current!.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
            // markers: true, // uncomment for debugging
          },
        }
      );
    }, hero2Ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={hero2Ref} className="lg:py-22 py-14 relative contact-section">
      <div className="max-w-[1460px] mx-auto px-6 contact-section-top">
        <div className="text-center mb-10 fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch with Jeta FX
          </h1>
          <p className="text-slate-200 max-w-3xl mx-auto text-[#E6ECFF] opacity-70">
            Our team is here to support you at every step of your trading
            journey. Whether you have questions about accounts, platforms, or
            partnerships, we are just a message away.
          </p>
        </div>
        <form
          ref={formRef}
          className="w-full relative max-w-5xl rounded-2xl p-6 md:p-8 mx-auto flex flex-col gap-6 lg:mt-10 contact-form-card"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { id: "name", label: "Name", placeholder: "jane", type: "text" },
              {
                id: "company",
                label: "Company",
                placeholder: "Jane Smith",
                type: "text",
              },
              {
                id: "email",
                label: "Email",
                placeholder: "jane@demo.com",
                type: "email",
              },
              {
                id: "phone",
                label: "Phone",
                placeholder: "Jane Smith",
                type: "text",
              },
            ].map(({ id, label, placeholder, type }) => (
              <div key={id} className="flex flex-col gap-2">
                <label
                  className="text-[#E6ECFF] opacity-70 font-[200] text-sm mb-1"
                  htmlFor={id}
                >
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  className="rounded-md px-4 py-2 bg-[#1C1E29] text-white focus:outline-none"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="subject"
              className="text-[#E6ECFF] opacity-70 font-[200] text-sm mb-1"
            >
              Subject of Interest
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Trade"
              className="rounded-md px-4 py-2 bg-[#1C1E29] text-white focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-[#E6ECFF] opacity-70 font-[200] text-sm mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="message goes here..."
              className="rounded-md px-4 py-2 bg-[#1C1E29] text-white focus:outline-none resize-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              id="newsletter"
              type="checkbox"
              checked={newsletter}
              onChange={() => setNewsletter(!newsletter)}
              className="accent-blue-500 w-4 h-4"
            />
            <label
              htmlFor="newsletter"
              className="text-[#E6ECFF] opacity-70 text-sm select-none font-[200]"
            >
              Subscribe to Newsletter
            </label>
          </div>
          <AnimatedButton
            href=""
            label="Submit"
            className="w-full md:w-[500px] mx-auto white-btn"
          />
        </form>
      </div>
    </section>
  );
}
