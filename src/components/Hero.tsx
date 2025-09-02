
import React from 'react';
import Link from "next/link";
import Image from 'next/image';

import AnimatedButton from "./AnimatedButton";


const Hero = () => {
  return (
    <section className="relative py-20 hero">
      <div className="max-w-[1460px] mx-auto px-6 py-10 lg:py-30 text-center hero-container relative">
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
      <div className="max-w-[1460px] hero-second-grid mx-auto px-6 py-6 flex gap-6 bg-transparent">
        {/* Why Choose Us Card */}
        <div className="relative blurry-card blurry-card1   transition-all">
          <h3 className="text-xl mb-3">Why Choose Us</h3>
          <p className="text-slate-400 text-[15px] leading-normal mb-5">
            Discover 2,200+ global markets including forex pairs, leading stocks, and commodities — all in one powerful platform built for growth and opportunity.
          </p>
          {/* Badge Stack */}
          <div className="flex flex-col gap-2 relative max-w-[300px] mx-auto">
            <div className="flex items-center gap-2 px-2 py-2 rounded-xl bg-[#16171A] w-fit min-w-[150px]  border border-[#232324]">
              <Image src="/favicon_img.png" alt="Logo" className="" width={30} height={30} />
              <span className="font-medium text-sm">Best Support</span>
            </div>
            <div className="z-1 flex items-center gap-2 px-2 py-2 rounded-xl bg-[#16171A] w-fit min-w-[150px] mx-auto mt-[-18px] border border-[#232324]">
              <Image src="/user.png" alt="Logo" className=" rounded-full object-cover" width={30} height={30} />
              <span className="font-medium text-sm">Top Traders</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-2 rounded-xl bg-[#16171A] w-fit min-w-[150px] self-end mt-[-18px] border border-[#232324]">
              <Image src="/earnings.png" alt="Logo" className="" width={30} height={30} />
              <span className="font-medium text-sm">Best Earnings</span>
            </div>
          </div>
        </div>

        {/* Fast, Reliable Execution Card */}
        <div className="relative blurry-card blurry-card2    transition-all flex flex-col justify-between">
          <h3 className="text-xl mb-3">Fast, Reliable Execution</h3>
          <p className="text-slate-400 text-[15px] leading-normal mb-6 max-w-2xl">
            Take advantage of ultra-fast execution and live market depth. Trade in real time with infrastructure that keeps you aligned with every move.
          </p>
          <div className='blurry-card2-values relative md:block hidden'>
            <div className='absolute-line'>
              <span></span>
            </div>
            <div className='absolute-line-button'>
              <span></span>
              <div className="absolute-line-mark w-fit bg-white text-black font-semibold px-3 py-1 rounded-full shadow text-xs">
                1917.44
              </div>
            </div>

            <div className='grid grid-cols-3'>

              <div className='relative'>
                <span className='green-line'></span>
              </div>
              <div className='trade_rate_img_container relative'>
                <Image src="/trade_rate.png" alt="trade rate" className="trade_rate_img" width={300} height={300} />
                <div
                  className="absolute left-[58%] top-[70%] bg-white px-3 py-1.5 rounded-full shadow text-black font-bold text-xs flex items-center gap-1 border border-[#32FF65]"
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  $10.00
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.4375 13.2629C0.4375 5.99387 6.32981 0.101562 13.5988 0.101562C20.8678 0.101562 26.7601 5.99387 26.7601 13.2629C26.7601 20.5318 20.8678 26.4241 13.5988 26.4241C6.32981 26.4241 0.4375 20.5318 0.4375 13.2629Z" fill="#01321F" />
                    <path d="M9.40458 10.3983C8.63201 10.3983 8.00619 9.77252 8.00619 8.99995C8.00619 8.22738 8.63201 7.60156 9.40458 7.60156H17.7949C18.5675 7.60156 19.1933 8.22738 19.1933 8.99995V17.3903C19.1933 18.1628 18.5675 18.7887 17.7949 18.7887C17.0223 18.7887 16.3965 18.1628 16.3965 17.3903V12.3758L10.393 18.3793C9.8468 18.9255 8.9617 18.9255 8.4155 18.3793C7.86931 17.8331 7.86931 16.9481 8.4155 16.4019L14.419 10.3983H9.40458Z" fill="white" />
                  </svg>

                </div>

              </div>
              <div className="relative flex flex-end">
                <div className="flex gap-2 min-w-[110px] ml-auto items-end relative">
                  <div className="bg-white text-black py-1 px-4 rounded-lg flex flex-col items-center min-w-[85px]">
                    
                    <span className="text-[10px] text-gray-600">Amount</span>
                    <span className="font-bold text-sm">$10</span>
                  </div>
                  <div className="bg-[#232325] text-white/80 py-1 px-4 rounded-lg flex flex-col items-center min-w-[85px]">
                   
                    <span className="text-[10px] text-gray-300">Duration</span>
                     <span className="font-bold text-sm">1 min</span>
                  </div>
                  
                </div>
                <span className='trade_rate_span'></span>
              </div>


            </div>
          </div>
          <Image src="/rate-graph.png" alt="rate graph" className="w-full md:hidden" width={300} height={300} />

        </div>
      </div>

    </section>
  );
};

export default Hero;
