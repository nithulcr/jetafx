"use client";
import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const Hero5 = () => {
  const Hero5Ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!Hero5Ref.current) return;

    const ctx = gsap.context(() => {
      const fadeElements = Hero5Ref.current!.querySelectorAll('.fade-up'); // non-null assertion here
      if (fadeElements.length) {
        fadeElements.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              delay: 0.2,
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }
    }, Hero5Ref);

    return () => ctx.revert();
  }, []);


  return (
    <div>
      <Header />
      <section
        ref={Hero5Ref}
        className="relative py-14 lg:pt-24 lg:pb-24 hero overflow-hidden"
      >
        <span className='hero-section-span'></span>
        <div className="max-w-[1300px] mx-auto px-6 pt-16 hero-container hero-container2 relative z-10">
          <h1
            className="fade-up hero-heading text-4xl md:text-5xl lg:text-7xl  mx-auto font-bold mb-4 leading-tight"
          >
           Scalping Policy
          </h1>

        </div>
        <div className="max-w-[1300px] mx-auto px-6 pt-5 flex flex-col gap-10">

          <div className=''>
            <h5 className='text-3xl'>Scalping</h5>
            <p className='opacity-50  mt-3'>Scalping is a trading style that traders utilize to benefit from minor price changes during a short period. In Jetafx client agreements, the definition of Scalping transactions is when traders enter and exit positions in less than 180 seconds on Foreign Exchange and Metals trades and within 300 seconds on CFD Contracts (including single name stocks, equity indices, metals, crypto CFDs). “Scalping” strategies are not permitted on our platform for traders. Introducing Brokers will not receive any fees for transactions that are defined as Scalping transactions.</p>

          </div>
          <div className=''>
            <h5 className='text-3xl'>Stale Trading</h5>
            <p className='opacity-50  mt-3'>In order to ensure the stability of the CMV platforms and products, we define 'Stale Trading' as a method traders use where they open and close trades within 10 seconds. CMV considers these trades abusive and does not allow these trades on its platforms and products. Should Stale Trades occur in your account, CMV reserves the right to cancel them immediately.</p>

          </div>
          <div className=''>
            <h5 className='text-3xl'>Idle Prices</h5>
            <p className='opacity-50  mt-3'>We have an agency execution model and automatically cover all client positions with executing brokers and liquidity providers. On rare occasions the aggregated price feed which we provide to clients can become “idle”. We reserve the right to reverse the profit and loss realized from orders where idle stroke happened. We will investigate these cases and notify the client via e-mail or telephone that trades are cancelled. We will always check to ensure that the reversal does not generate an unintended position. If the order is executed and subsequently reversed to open a position, any subsequent order(s) closing this position would also be reversed leaving the net P&L at zero, this way the client will not be disadvantaged by this reversal due to our invalid price delivery.</p>

          </div>

          <div className=''>
            <h5 className='text-3xl'>Misquotes</h5>
            <p className='opacity-50  mt-3'>We have an agency execution model and automatically cover all client positions with executing brokers and liquidity providers. Although we mitigate the risk of invalid price feeds reaching clients through utilizing a price aggregation system which generates a price from multiple liquidity providers (typically in excess of 10 liquidity providers). There are rare occasions where the price can become “skewed”. In such rare instances, if orders are filled at that price, we reserve the right to reverse orders where misquote occurred. We will investigate these cases and notify the client via e-mail or telephone that trades are cancelled. We will always check to ensure that the reversal does not generate an unintended position. If the order is executed and subsequently reversed to open a position, any subsequent order(s) closing this position would also be reversed leaving the net P&L at zero, this way the client will not be disadvantaged by this reversal due to our invalid price delivery.</p>

          </div>

          <div className=''>
            <h5 className='text-3xl'>Stale Quotes and Misquotes Policy</h5>
            <p className='opacity-50  mt-3'>We have an agency execution model and automatically cover all client positions with executing brokers and liquidity providers. Although we mitigate the risk of invalid price feeds reaching clients through utilizing a price aggregation system which generates a price from multiple liquidity providers (typically in excess of 10 liquidity providers). There are rare occasions where the price can become “skewed”. In such rare instances, if orders are filled at that price, we reserve the right to reverse orders where misquote occurred. We will investigate these cases and notify the client via e-mail or telephone that trades are cancelled. We will always check to ensure that the reversal does not generate an unintended position. If the order is executed and subsequently reversed to open a position, any subsequent order(s) closing this position would also be reversed leaving the net P&L at zero, this way the client will not be disadvantaged by this reversal due to our invalid price delivery.</p>

          </div>


        </div>

      </section>

      <Footer />
    </div>
  );
};

export default Hero5;
