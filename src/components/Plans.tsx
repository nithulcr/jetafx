'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Heading from '@/components/Heading';
import type { Swiper as SwiperType } from 'swiper';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const plans = [
    {
        label: 'Premium',
        price: '$250',
        subtitle: 'Popular',
        features: [
            'Minimum Deposit: $0',
            'Spreads Start From: 1.2 pips',
            'Swap: Yes (Swap Free Available)',
            'Maximum Leverage: 1:2000',
            'Commission: No',
        ],
        featured: true,
    },
    {
        label: 'Zero',
        price: '$1,000',
        features: [
            'Minimum Deposit: $0',
            'Spreads Start From: 0 (on Forex & Gold)',
            'Swap: Yes (Swap Free Available)',
            'Maximum Leverage: Up to 1:2000',
            'Commission: Applicable',
        ],
    },
    {
        label: 'Scalp',
        price: '$1,000',
        features: [
            'Minimum Deposit: $0',
            'Spreads Start From: 0.1 pips',
            'Swap: Yes (Swap Free Available)',
            'Maximum Leverage: Up to 1:500',
            'Commission: No',
        ],
    },
    {
        label: 'Pro',
        price: '$2,000',
        features: [
            'Minimum Deposit: $100',
            'Spreads Start From: 0.5 pips',
            'Swap: Yes (Swap Free Available)',
            'Maximum Leverage: 1:1000',
            'Commission: No',
        ],
    },
    {
        label: 'Starter',
        price: '$100',
        features: [
            'Minimum Deposit: $50',
            'Spreads Start From: 2.0 pips',
            'Swap: Yes (Swap Free Available)',
            'Maximum Leverage: 1:500',
            'Commission: No',
        ],
    },
    {
        label: 'Starter',
        price: '$100',
        features: [
            'Minimum Deposit: $50',
            'Spreads Start From: 2.0 pips',
            'Swap: Yes (Swap Free Available)',
            'Maximum Leverage: 1:500',
            'Commission: No',
        ],
    },
];

export default function PricingSlider() {
    // Keep track of current slide's index
    const [activeIdx, setActiveIdx] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);
     const PlansRef = useRef<HTMLDivElement>(null);


 useEffect(() => {
        const ctx = gsap.context(() => {

            // Animation for features list staggered
            gsap.from('.plans-fade-up', {
                opacity: 0,
                y: 40,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: PlansRef.current,
                    start: 'top 85%',
                    end: 'bottom 0%',
                    toggleActions: 'play reverse play reverse'
                },
            });
        }, PlansRef);

        return () => {
            ctx.revert();
        };
    }, []);



    return (
        <section  className="plans-section py-12 md:pt-24  md:pb-12 relative overflow-hidden">

            <span className='border_shape3'></span>
            <Heading
                badgeText="Account Type"
                title="Flexible Pricing Plans"
                subtitle="We offer tailored account types to suit every trading style"
            />
            <div  ref={PlansRef} className='mt-12'>
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    speed={1000}
                    spaceBetween={24}
                    //   centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1.1 },
                        600: { slidesPerView: 2.3 },
                        900: { slidesPerView: 3.3 },
                        1200: { slidesPerView: 3.4 },
                    }}
                    onSwiper={swiper => {
                        swiperRef.current = swiper;
                        setActiveIdx(swiper.realIndex);
                    }}
                    onSlideChange={swiper => setActiveIdx(swiper.realIndex)}
                    className="pb-10"
                    style={{ padding: '0 24px' }}
                >
                    {plans.map((plan, i) => {
                        // Compute visible slide indices
                        // With center mode, the active index is the center of the visible slides
                        // For 3.6 slides, the visible are (for example): [activeIdx-1, activeIdx, activeIdx+1, activeIdx+2]
                        // So:
                        // - If i === activeIdx => second slide (main active)
                        // - If i === activeIdx + 1 (with wrap) => third slide (next main)
                        // - Others: faded/partial

                        const total = plans.length;
                        // In loop mode, wrap indices:
                        const prevIdx = (activeIdx - 1 + total) % total;
                        const nextIdx = (activeIdx + 1) % total;
                        const nextNextIdx = (activeIdx + 2) % total;

                        let style = "opacity-50"; // Default: faded
                        if (i === activeIdx) style = " opacity-100 z-20";
                        else if (i === nextIdx) style = "opacity-100 z-10"; // Next to active, highlight less
                        else if (i === prevIdx || i === nextNextIdx) style = ""; // Farther faded

                        return (
                            <SwiperSlide key={i}>
                                <div className={`plans-fade-up plan-card w-full p-7 flex flex-col items-center mx-auto min-h-[440px] ${style}`}>
                                    {/* ...Content... */}
                                    <div className=''>
                                        <div className=" text-lg text-gray-200 mb-3 flex gap-2 items-center">
                                            {plan.label}
                                            {plan.featured && (
                                                <span className="ml-2 text-xs bg-[#FBD00B] text-black px-2 py-0.5 rounded-xl drop-shadow-[0_1px_8px_rgba(99,69,173,0.71)]">Popular</span>
                                            )}
                                        </div>
                                        <div className=" text-3xl mb-5">{plan.price}</div>
                                        <button className=" w-full rounded-lg mb-6 py-3 text-[16px] bg-[#031457] hover:bg-white hover:text-[#000] hover:drop-shadow-[0_8px_40px_rgba(17,0,255,0.5)] transition-all cursor-pointer">
                                            Open an account
                                        </button>
                                        <p className=' text-[#E6ECFF] mb-4 opacity-70'>INITIAL DEPOSIT:</p>
                                        <ul className=" text-left w-full space-y-3 text-[14px]">
                                            {plan.features.map((f, j) => (
                                                <li key={j} className="flex items-center gap-2 text-[#E6ECFF] opacity-70">
                                                    {/* ...SVG... */}
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <div className='px-6 '>
                <div className="text-[#E6ECFF]] mt-8  lg:mt-12 text-sm lg:mb-10 flex justify-center rounded-4xl items-center gap-2 bg-[linear-gradient(180deg,#121426_0%,#000000_100%)] w-fit px-6 py-2 mx-auto">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.4932 13.7754C22.2024 13.5517 21.8641 13.3981 21.5043 13.3264C21.1446 13.2548 20.7732 13.2671 20.4189 13.3623L16.333 14.3018C16.4281 13.9002 16.431 13.4823 16.3416 13.0794C16.2522 12.6766 16.0728 12.2992 15.8167 11.9755C15.5607 11.6519 15.2348 11.3904 14.8633 11.2106C14.4919 11.0308 14.0845 10.9375 13.6719 10.9375H8.7832C8.37265 10.9365 7.96597 11.0168 7.58665 11.1739C7.20733 11.3309 6.8629 11.5616 6.57324 11.8525L4.36426 14.0625H1.5625C1.1481 14.0625 0.750671 14.2271 0.457646 14.5201C0.16462 14.8132 0 15.2106 0 15.625L0 19.5313C0 19.9457 0.16462 20.3431 0.457646 20.6361C0.750671 20.9291 1.1481 21.0938 1.5625 21.0938H11.7188C11.7826 21.0938 11.8463 21.0859 11.9082 21.0703L18.1582 19.5078C18.198 19.4983 18.2369 19.4853 18.2744 19.4688L22.0703 17.8535L22.1133 17.834C22.4781 17.6517 22.7905 17.3795 23.0211 17.0431C23.2516 16.7067 23.3927 16.3172 23.4311 15.9112C23.4695 15.5051 23.4039 15.096 23.2405 14.7224C23.0771 14.3487 22.8212 14.0228 22.4971 13.7754H22.4932ZM1.5625 15.625H3.90625V19.5313H1.5625V15.625ZM21.4287 16.4268L17.7178 18.0068L11.6211 19.5313H5.46875V15.167L7.67871 12.958C7.82328 12.8123 7.99537 12.6968 8.18498 12.6181C8.37459 12.5395 8.57794 12.4993 8.7832 12.5H13.6719C13.9827 12.5 14.2807 12.6235 14.5005 12.8432C14.7203 13.063 14.8438 13.3611 14.8438 13.6719C14.8438 13.9827 14.7203 14.2807 14.5005 14.5005C14.2807 14.7203 13.9827 14.8438 13.6719 14.8438H10.9375C10.7303 14.8438 10.5316 14.9261 10.3851 15.0726C10.2386 15.2191 10.1562 15.4178 10.1562 15.625C10.1562 15.8322 10.2386 16.0309 10.3851 16.1774C10.5316 16.3239 10.7303 16.4063 10.9375 16.4063H14.0625C14.1213 16.4061 14.1799 16.3995 14.2373 16.3867L20.7803 14.8818L20.8105 14.874C21.0103 14.8186 21.2235 14.839 21.4091 14.9312C21.5947 15.0235 21.7396 15.1812 21.816 15.3739C21.8923 15.5666 21.8947 15.7808 21.8227 15.9751C21.7507 16.1695 21.6093 16.3304 21.4258 16.4268H21.4287ZM16.0156 9.375C16.2086 9.37522 16.4014 9.35954 16.5918 9.32813C16.806 9.9644 17.1979 10.526 17.7212 10.9466C18.2445 11.3672 18.8773 11.6292 19.5447 11.7015C20.2122 11.7739 20.8864 11.6536 21.4877 11.355C22.089 11.0563 22.5921 10.5917 22.9377 10.0161C23.2833 9.44053 23.4569 8.77803 23.4379 8.10693C23.4189 7.43584 23.2081 6.78421 22.8305 6.2291C22.4529 5.67399 21.9243 5.2386 21.3071 4.97441C20.6899 4.71022 20.0099 4.62828 19.3477 4.73828C19.1414 4.12524 18.77 3.58099 18.2744 3.16541C17.7787 2.74983 17.178 2.47905 16.5384 2.38285C15.8988 2.28665 15.2451 2.36878 14.6491 2.62018C14.0532 2.87159 13.5381 3.28253 13.1607 3.80778C12.7832 4.33303 12.558 4.95223 12.5097 5.59724C12.4615 6.24225 12.5922 6.88806 12.8873 7.46361C13.1825 8.03915 13.6307 8.52211 14.1826 8.85935C14.7345 9.19658 15.3688 9.37501 16.0156 9.375ZM21.875 8.20313C21.875 8.58942 21.7605 8.96703 21.5458 9.28822C21.3312 9.60941 21.0262 9.85975 20.6693 10.0076C20.3124 10.1554 19.9197 10.1941 19.5408 10.1187C19.162 10.0434 18.814 9.85734 18.5408 9.58419C18.2677 9.31105 18.0816 8.96303 18.0063 8.58416C17.9309 8.20529 17.9696 7.81258 18.1174 7.4557C18.2653 7.09881 18.5156 6.79377 18.8368 6.57916C19.158 6.36455 19.5356 6.25 19.9219 6.25C20.4399 6.25 20.9367 6.45578 21.3029 6.82206C21.6692 7.18834 21.875 7.68513 21.875 8.20313ZM16.0156 3.90625C16.4417 3.90646 16.856 4.046 17.1954 4.30359C17.5348 4.56118 17.7807 4.92269 17.8955 5.33301C17.4954 5.61455 17.1584 5.9765 16.9062 6.39572C16.6539 6.81494 16.492 7.28219 16.4307 7.76758C16.2943 7.79703 16.1552 7.81209 16.0156 7.8125C15.4976 7.8125 15.0008 7.60673 14.6346 7.24044C14.2683 6.87416 14.0625 6.37738 14.0625 5.85938C14.0625 5.34138 14.2683 4.84459 14.6346 4.47831C15.0008 4.11203 15.4976 3.90625 16.0156 3.90625Z" fill="#8AA5FF" />
                    </svg>

                    Jetafx contributes 5% of subscription to the green life
                </div>
            </div>
        </section>
    );
}
