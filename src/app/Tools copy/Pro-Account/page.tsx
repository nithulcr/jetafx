"use client";
import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import Heading from '@/Components/Heading';
import AnimatedButton from "@/Components/AnimatedButton";

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProAccountSection() {
  const toolsRef = useRef<HTMLDivElement | null>(null);
  const CheckIcon = () => (
    <svg width="24" height="24" className='flex-none' viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.74999 8.544L3.16699 10.127L7.91699 14.877L15.833 6.96L14.25 5.377L7.91699 11.71L4.74999 8.544Z" fill="#8AA5FF" />
    </svg>
  );

  useEffect(() => {
    if (!toolsRef.current) return;
    const ctx = gsap.context(() => {
      const fadeUps = toolsRef.current!.querySelectorAll(".fade-up");
      gsap.fromTo(
        fadeUps,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12 }
      );
    }, toolsRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header />
      <section ref={toolsRef} className="tools-section other-section pt-14 lg:pt-22 pb-4 lg:pb-10 overflow-hidden relative">
        <div className="max-w-[1460px] px-6 w-full mx-auto pt-20">
          <div className='relative'>
            <div className='fade-up max-w-2xl mx-auto text-center'>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 fade-up">Currency Convertor</h1>
              <p className="fade-up text-slate-200 mb-6 text-[#E6ECFF] opacity-70">
                At Jeta FX, we equip traders with simple, reliable, and powerful tools designed to remove guesswork and bring clarity to your trading.
              </p>
            </div>
            <div className='fade-up mt-8 mb-4 lg:mt-14 lg:mb-8'>
              <Heading
                badgeText="improve trading"
                title="Instant Currency Conversion at Your Command"
                subtitle="Effortlessly access live exchange rates with Jeta FX’s advanced Currency Converter. Whether you’re trading global markets or managing international payments, our tool provides fast and accurate conversions — anytime, anywhere."
                maxWidthClass="max-w-[800px]"
              />
            </div>
          </div>

        </div>
      </section >
      <section className="other-section2 pb-12 relative">
        <div className="max-w-[1460px] px-6 w-full mx-auto">

          <div className="grid lg:grid-cols-2  items-start lg:gap-12 pt-10">
            <div className=" flex-1">

              {/* Features List */}
              <div className="mb-8  max-w-lg">
                <h3 className="text-xl font-default mb-3 text-white">Why Use Jeta FX Currency Converter?</h3>
                <p className='text-[#E6ECFF] opacity-70'>Engineered for precision and ease of use, this tool lets you quickly estimate potential outcomes, helping you manage risks, refine strategies, and make informed trading decisions.</p>
                <ul className="list-none fw-200 mt-5 text-[#E6ECFF] opacity-70 space-y-3">
                  <li className='flex gap-2'>
                    <CheckIcon />

                    Live Market Rates – Access real-time exchange rates for 100+ global currencies.</li>
                  <li className='flex gap-2'>
                    <CheckIcon />

                    Simple & Intuitive – Switch between currencies and get conversions in seconds.</li>
                  <li className='flex gap-2'>
                    <CheckIcon />

                    Built for Traders – Make informed decisions with precise, reliable data.</li>
                  <li className='flex gap-2'>
                    <CheckIcon />

                    Fast & Secure – Enjoy instant, accurate results on a trusted platform.</li>
                </ul>
              </div>

              <div className="mb-8  max-w-lg">
                <h3 className="text-xl font-default mb-3 text-white">How It Works</h3>
                <p className='text-[#E6ECFF] opacity-70'>In today’s fast-moving forex and global markets, timing and accuracy matter. The Jeta FX Currency Converter gives you real-time data to support smarter trading and financial decisions — all in one easy-to-use tool.</p>

                <ul className="list-none fw-200 mt-5 text-[#E6ECFF] opacity-70 space-y-3">
                  <li className='flex gap-2'><CheckIcon />Select the currencies you want to convert.</li>
                  <li className='flex gap-2'><CheckIcon />Enter the amount.</li>
                  <li className='flex gap-2'><CheckIcon />Instantly view accurate conversion results.</li>

                </ul>
              </div>

            </div>

            {/* Right Column: Calculator Form */}
            <div className="w-full flex lg:justify-end">
              <div className="max-w-xl w-full form-sec rounded-2xl p-5 lg:p-10 relative">
                <form className="space-y-5">
                  <FormSelect label="From Currency" options={["Euro", "US Dollars", "GBP", "JPY"]} />
                  <FormInput label="Amount" placeholder="1" />
                  <div className='py-5  w-fit mx-auto'>
                    <svg width="40" height="29" viewBox="0 0 40 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 9.91175L12.6898 2.60158C12.4229 2.33431 12.1059 2.12226 11.757 1.97756C11.408 1.83285 11.034 1.75833 10.6562 1.75825M10.6562 1.75825C9.92025 1.75825 9.18425 2.04192 8.62267 2.6035L1.3125 9.91367M10.6562 1.75825V27.4339M29.3437 1.5225V27.1943M29.3437 27.1943C30.0797 27.1943 30.8158 26.9145 31.3773 26.3529L38.6875 19.0427M29.3437 27.1943C28.6077 27.1943 27.8717 26.9126 27.3102 26.351L20 19.0408" stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>

                  <FormSelect label="To Currency" options={["US Dollars", "Euro", "GBP", "JPY"]} />
                  <FormInput label="Amount" placeholder="1.171" />
                  {/* <AnimatedButton href="" label="Convert" className="white-btn w-full max-w-[300px] mt-6  lg:mt-10 mx-auto" /> */}
                </form>
                {/* Results (mockup) */}
                {/* <div className='grid gap-4 md:grid-cols-2 mt-8'>
                  <div className="flex justify-between items-center flex-col">
                    <p className="  mb-2">Converted Amount</p>
                    <div className="text-2xl font-bold text-white">US$120.50</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section >
      <Footer />
    </>
  );
}

type FormInputProps = {
  label: string;
  placeholder: string;
};
function FormInput({ label, placeholder }: FormInputProps) {
  return (
    <div>
      <label className="block text-md text-white mb-1">{label}</label>
      <input
        className="rounded-xl w-full form-input px-3 py-3 focus:outline-none"
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
}
type FormSelectProps = {
  label: string;
  options: string[];
};
function FormSelect({ label, options }: FormSelectProps) {
  return (
    <div>
      <label className="block text-md text-white mb-1">{label}</label>
      <select className="rounded-xl w-full form-input px-3 py-3 focus:outline-none">
        {options.map(opt => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
