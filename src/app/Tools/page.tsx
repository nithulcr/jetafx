"use client";
import React, { useEffect,  useRef } from 'react';
import gsap from "gsap";
import Heading from '@/components/Heading';
import AnimatedButton from "@/components/AnimatedButton";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProfitCalculatorSection() {
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 fade-up">Profit Calculator</h1>
              <p className="fade-up text-slate-200 mb-6 text-[#E6ECFF] opacity-70">
                At Jeta FX, we equip traders with simple, reliable, and powerful tools designed to remove guesswork and bring clarity to forex trading.
              </p>
            </div>
            <div className='fade-up mt-8 mb-4 lg:mt-14 lg:mb-8'>
              <Heading
                badgeText="improve trading"
                title="Boost Your Trading Confidence with the Jeta FX Profit Calculator"
                subtitle="Take control of your trades and reduce uncertainty with the Jeta FX Profit Calculator a simple yet powerful tool "
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
                <h3 className="text-xl font-default mb-3 text-white">Why Traders Use the Jeta FX Profit Calculator</h3>
                <p className='text-[#E6ECFF] opacity-70'>Engineered for precision and ease of use, this tool lets you quickly estimate potential outcomes, helping you manage risks, refine strategies, and make informed trading decisions.</p>
                <ul className="list-none fw-200 mt-5 text-[#E6ECFF] opacity-70 space-y-3">
                  <li className='flex gap-2'>
                    <CheckIcon />

                    Quick &amp; Accurate Calculations – Instantly calculate your trade’s potential outcome before executing.</li>
                  <li className='flex gap-2'>
                    <CheckIcon />

                    Fast decision-making – See possible results in real time.</li>
                  <li className='flex gap-2'>
                    <CheckIcon />

                    Risk control – Adjust position size, currency pair, and price levels as needed.</li>
                  <li className='flex gap-2'>
                    <CheckIcon />

                    Supports all Major Currencies, Pairs – From beginner-friendly to advanced user options.</li>
                </ul>
              </div>

              <div className="mb-8  max-w-lg">
                <h3 className="text-xl font-default mb-3 text-white">How It Works</h3>
                <ul className="list-none fw-200 mt-5 text-[#E6ECFF] opacity-70 space-y-3">
                  <li className='flex gap-2'><CheckIcon />Select your currency pair.</li>
                  <li className='flex gap-2'><CheckIcon />Enter your trade size (lot size).</li>
                  <li className='flex gap-2'><CheckIcon />Input your entry and exit prices.</li>
                  <li className='flex gap-2'><CheckIcon />Choose your account currency.</li>
                  <li className='flex gap-2'><CheckIcon />Instantly view your estimated profit or loss.</li>



                </ul>
                <p className='text-[#E6ECFF] opacity-70'>No complex formulas — just simple, accurate results.</p>
              </div>
              <div className="mb-8 max-w-lg">
                <h3 className="text-xl font-default mb-3 text-white">Plan Better. Trade Smarter.</h3>
                <p className='text-[#E6ECFF] opacity-70'>In forex trading, precision matters. The Jeta FX Profit Calculator helps you plan every trade with clarity and confidence by showing potential outcomes before you act. Analyze clearly. Execute confidently. Trade responsibly.</p>

              </div>
            </div>

            {/* Right Column: Calculator Form */}
            <div className="w-full flex lg:justify-end">
              <div className="max-w-xl w-full form-sec rounded-2xl p-5 lg:p-10 relative">
                <form className="space-y-5">
                  <FormSelect label="Instrument" options={["EUR/USD", "GBP/USD", "USD/JPY"]} />
                  <FormSelect label="Deposit currency" options={["USD", "EUR", "GBP"]} />
                  <FormSelect label="Buy or Sell" options={["Buy", "Sell"]} />
                  <FormInput label="Lots (Trade Size)" placeholder="1.0" />
                  <FormInput label="Open price" placeholder="e.g. 1.12345" />
                  <FormInput label="Close price" placeholder="e.g. 1.12600" />
                  <FormInput label="EUR/USD 1 Pip Size" placeholder="0.0001" />
                  <AnimatedButton href="" label="Calculate" className="white-btn w-full max-w-[300px] mt-6  lg:mt-10 mx-auto" />

                </form>
                {/* Results (mockup) */}
                <div className='grid gap-4 md:grid-cols-2 mt-8'>
                  <div className="flex justify-between items-center flex-col">
                    <p className="  mb-2">Profit in money</p>
                    <div className="text-2xl font-bold text-white">US$2,000.00</div>
                  </div>
                  <div className="flex justify-between items-center flex-col">
                    <p className="mb-2">Profit in pips</p>
                    <div className="text-2xl font-bold text-white">200</div>
                  </div>
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
