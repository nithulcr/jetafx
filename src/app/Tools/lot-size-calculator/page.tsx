"use client";
import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import Heading from '@/Components/Heading';
import AnimatedButton from "@/Components/AnimatedButton";

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LotSizeCalculatorSection() {
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 fade-up">Lot Size Calculator</h1>
              <p className="fade-up text-slate-200 mb-6 text-[#E6ECFF] opacity-70">
                At Jeta FX, we equip traders with simple, reliable, and powerful tools designed to remove guesswork and bring clarity to your trading.
              </p>
            </div>
            <div className='fade-up mt-8 mb-4 lg:mt-14 lg:mb-8'>
              <Heading
                badgeText="improve trading"
                title="Calculate Your Ideal Trade Size with Confidence"
                subtitle="The Jeta FX Lot Size Calculator is a must-have tool for traders who value precision and control."
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
                <h3 className="text-xl font-default mb-3 text-white">Why Traders Use the Jeta FX Lot Size Calculator</h3>
                <ul className="list-none fw-200 mt-5 text-[#E6ECFF] opacity-70 space-y-3">
                  <li className='flex gap-2'>
                    <CheckIcon />
                    Pro-Level Risk Management – Align your trade size with your account balance and risk tolerance.</li>
                  <li className='flex gap-2'>
                    <CheckIcon />

                    Instant, Accurate Results – Get real-time lot size calculations based on your inputs.</li>
                  <li className='flex gap-2'>
                    <CheckIcon />

                    Flexible Pair Support – Works with all major and minor forex pairs.</li>
                  <li className='flex gap-2'>
                    <CheckIcon />

                    Simple & Fast – Designed for traders of all levels, with a clean and intuitive interface.</li>
                </ul>
              </div>

              <div className="mb-8  max-w-lg">
                <h3 className="text-xl font-default mb-3 text-white">How It Works</h3>
                <ul className="list-none fw-200 mt-5 text-[#E6ECFF] opacity-70 space-y-3">
                  <li className='flex gap-2'><CheckIcon />Enter your account balance</li>
                  <li className='flex gap-2'><CheckIcon />Set your risk percentage per trade</li>
                  <li className='flex gap-2'><CheckIcon />Input your stop-loss (in pips)</li>
                  <li className='flex gap-2'><CheckIcon />Instantly view your optimal lot size</li>

                </ul>
                <p className='text-[#E6ECFF] opacity-70'>No complex math — just clear, accurate results in seconds.</p>
              </div>
              <div className="mb-8 max-w-lg">
                <h3 className="text-xl font-default mb-3 text-white">Trade Smarter. Stay Consistent.</h3>
                <p className='text-[#E6ECFF] opacity-70'>In forex trading, position sizing is key to long-term success. The Jeta FX Lot Size Calculator helps you manage risk responsibly, stay consistent, and make informed decisions with every trade.</p>

              </div>
            </div>

            {/* Right Column: Calculator Form */}
            <div className="w-full flex lg:justify-end">
              <div className="max-w-xl w-full form-sec rounded-2xl p-5 lg:p-10 relative">
                <form className="space-y-5">
                  <FormSelect label="Instrument" options={["EUR/USD", "GBP/USD", "USD/JPY"]} />
                  <FormSelect label="Deposit currency" options={["US Dollars", "Euro"]} />
                  <FormInput label="Stop loss (pips)" placeholder="200" />
                  <FormInput label="Account Balance" placeholder="10000" />
                  <FormInput label="EUR/USD 1 Pip Size" placeholder="0.0001" />
                  <FormInput label="Risk Percentage" placeholder="2" />
                  <FormInput label="Contract size (Units per Lot)" placeholder="100000" />
                  <AnimatedButton href="" label="Calculate" className="white-btn w-full max-w-[300px] mt-6  lg:mt-10 mx-auto" />
                </form>
                {/* Results (mockup) */}
                <div className='grid gap-4 md:grid-cols-2 mt-8'>
                  <div className="flex justify-between items-center flex-col">
                    <p className="  mb-2">Lots (trade size)</p>
                    <div className="text-2xl font-bold text-white">1</div>
                  </div>
                  <div className="flex justify-between items-center flex-col">
                    <p className="mb-2">Units (trade size)</p>
                    <div className="text-2xl font-bold text-white">100,000</div>
                  </div>
                </div>
                <div className="flex justify-between items-center flex-col text-center mt-8 max-w-[300px] mx-auto">
                  <p className="  mb-3">Money at risk</p>
                  <div className="text-2xl font-bold text-white mb-3">US$2,000.00</div>
                  <p className="  underline">View EUR/USD Live ChartView EUR/USD Historical Chart</p>

                </div>
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
