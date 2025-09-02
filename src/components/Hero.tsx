
import React from 'react';
import Link from "next/link";

import AnimatedButton from "./AnimatedButton";


const Hero = () => {
  return (
    <section className="relative py-20">
      <div className="max-w-[1460px] mx-auto px-6 py-30 text-center">
        <h1 className="text-5xl lg:text-7xl max-w-[1100px] mx-auto font-bold text-white-gradient mb-4 leading-tight">
          World-Class Forex Trading  Where Profits Meet Precision
        </h1>
        <p className="text-lg text-slate-300 mb-8 max-w-[800px] mx-auto">Experience professional-grade trading across forex, commodities, indices, and digital currencies. Advanced analytics, lightning-fast execution, and global market access in one powerful platform.</p>
        <div className="flex justify-center gap-4 mt-8">
          
          <AnimatedButton href="" label="Log in" className="w-fit" />
          <AnimatedButton
            href=""
            label="Sign up"
            className="w-fit transparent-btn"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
