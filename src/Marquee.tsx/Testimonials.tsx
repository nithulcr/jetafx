'use client';

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from '@/Marquee.tsx/Heading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger);

// Example avatars (replace src paths with your actual assets)
const testimonialsItems = [
    {
        name: "Alex jonas",
        role: "JS Marketing",
        rating: 5.0,
        review: "Exceptional trading conditions and lightning-fast execution.",
        avatar: "/client1.png",
    },
    {
        name: "John Robert",
        role: "SM Strategy",
        rating: 5.0,
        review: "Their market analysis tools have completely changed my trading game.",
        avatar: "/client1.png",
    },
    {
        name: "Maggie Hue",
        role: "BS Growth Ceo",
        rating: 4.8,
        review: "Finally, a broker that actually cares about transparency and client success!",
        avatar: "/client1.png",
    },
    {
        name: "Tappo kao",
        role: "PO Marketing",
        rating: 5.0,
        review: "The platform’s speed and reliability have been a game changer.",
        avatar: "/client1.png",
    },
    {
        name: "jack hamma",
        role: "JK Finance",
        rating: 5.0,
        review: "Excellent spreads, great customer service, and seamless withdrawals.",
        avatar: "/client1.png",
    },
    {
        name: "John Robert",
        role: "JD Strategy",
        rating: 5.0,
        review: "Their educational resources helped me grow from a beginner to a confident.",
        avatar: "/client1.png",
    },
];

export default function Testimonials() {
    const testimonialsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!testimonialsRef.current) return;
        const ctx = gsap.context(() => {
            gsap.from(".gma-heading", {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.out",
                stagger: 0.18,
                scrollTrigger: {
                    trigger: testimonialsRef.current,
                    start: "top 80%",
                    end: "bottom 10%",
                    toggleActions: "play none none reverse",
                },
            });
        }, testimonialsRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="testimonials-section overflow-hidden relative lg:py-20 py-14">
            <span className="border_shape3"></span>
            <div className="max-w-[1460px] mx-auto px-6 flex flex-col items-center justify-center">
                <Heading
                    badgeText="Trusted by Traders Worldwide"
                    title="Loved by traders"
                    subtitle="Here’s what people worldwide are saying about us"
                    maxWidthClass=""
                />
                <div
                    ref={testimonialsRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 lg:mt-16 md:grid hidden"
                >
                    {testimonialsItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="gma-heading rounded-[20px] testimonials-col flex flex-col h-full  "
                        >
                            <p className="mb-4 text-white text-lg leading-relaxed font-medium">&ldquo;{item.review}&rdquo;</p>
                            <div className="flex items-center my-2">
                                <span className="text-[#E6ECFF] text-md opacity-70 mr-2">{item.rating.toFixed(1)}</span>
                                {[...Array(5)].map((star, i) => (
                                    <svg
                                        key={i}
                                        width="16"
                                        height="16"
                                        fill="none"
                                        viewBox="0 0 16 16"
                                        className={`inline-block mr-[2px] `}
                                    >
                                        <polygon
                                            points="8,1 10,6 15,6 11,9 13,14 8,11 3,14 5,9 1,6 6,6"
                                            fill={i < Math.floor(item.rating) ? "#FFD700" : "#fff"}
                                        />

                                    </svg>
                                ))}
                            </div>
                            <div className="flex items-center mt-5">
                                
                                <Image
                                    src={item.avatar}
                                    alt={item.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full mr-3 object-cover border border-[#23243b]"
                                />
                                <div>
                                    <div className="text-white textlg mb-1">{item.name}</div>
                                    <div className="text-[#A4AAC7] text-xs">{item.role}</div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full mt-8 lg:mt-16 md:hidden">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1.2}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1.1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        loop={true}
                        className="pb-8"
                        style={{ paddingBottom: "40px" }}
                    >
                        {testimonialsItems.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="rounded-[20px] testimonials-col flex flex-col h-full  bg-[#18192A] px-6 py-5">
                                    <p className="mb-4 text-white text-lg leading-relaxed font-medium">&ldquo;{item.review}&rdquo;</p>
                                    <div className="flex items-center my-2">
                                        <span className="text-[#E6ECFF] text-md opacity-70 mr-2">{item.rating.toFixed(1)}</span>
                                        {[...Array(5)].map((star, i) => (
                                            <svg
                                                key={i}
                                                width="16"
                                                height="16"
                                                fill="none"
                                                viewBox="0 0 16 16"
                                                className={`inline-block mr-[2px] `}
                                            >
                                                <polygon
                                                    points="8,1 10,6 15,6 11,9 13,14 8,11 3,14 5,9 1,6 6,6"
                                                    fill={i < Math.floor(item.rating) ? "#FFD700" : "#fff"}
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
                                            width={40}
                                            height={40}
                                            className="rounded-full mr-3 object-cover border border-[#23243b]"
                                        />
                                        <div>
                                            <div className="text-white text-lg mb-1">{item.name}</div>
                                            <div className="text-[#A4AAC7] text-xs">{item.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex flex-row items-center justify-center gap-3 lg:mt-6 lg:mt-12">
                    <div className="flex items-center">
                        <Image
                            src="/client1.png"
                            alt="Founder"
                            width={28}
                            height={28}
                            className="rounded-full ml-[-5px]"
                        />
                        <Image
                            src="/ceo.png"
                            alt="Founder"
                            width={28}
                            height={28}
                            className="rounded-full"
                        />

                        <Image
                            src="/client1.png"
                            alt="Founder"
                            width={28}
                            height={28}
                            className="rounded-full  ml-[-5px]"
                        />
                        <Image
                            src="/ceo.png"
                            alt="Founder"
                            width={28}
                            height={28}
                            className="rounded-full  ml-[-5px]"
                        />
                    </div>
                    <span className="text-[#E6ECFF] text-sm opacity-70">Join <span className="font-medium">15,725+</span>other loving traders.</span>
                </div>
            </div>
        </section>
    );
}
