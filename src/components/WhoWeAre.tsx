'use client';

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from '@/components/Heading';

gsap.registerPlugin(ScrollTrigger);


const WhoWeAreItems = [
    {
        label: "15,000+ Global Clients",
        description: "Trusted by traders across 80+ countries, Jeta FX brings together a growing community of professionals and beginners who rely on us.",
        icon: (
            <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.7188 28.4375C31.7188 28.7276 31.6035 29.0058 31.3984 29.2109C31.1933 29.416 30.9151 29.5312 30.625 29.5312H4.375C4.08492 29.5312 3.80672 29.416 3.6016 29.2109C3.39648 29.0058 3.28125 28.7276 3.28125 28.4375C3.28125 28.1474 3.39648 27.8692 3.6016 27.6641C3.80672 27.459 4.08492 27.3438 4.375 27.3438H5.46875V18.5938C5.46875 18.3037 5.58398 18.0255 5.7891 17.8204C5.99422 17.6152 6.27242 17.5 6.5625 17.5H9.84375C10.1338 17.5 10.412 17.6152 10.6171 17.8204C10.8223 18.0255 10.9375 18.3037 10.9375 18.5938V27.3438H13.125V12.0312C13.125 11.7412 13.2402 11.463 13.4454 11.2579C13.6505 11.0527 13.9287 10.9375 14.2188 10.9375H18.5938C18.8838 10.9375 19.162 11.0527 19.3671 11.2579C19.5723 11.463 19.6875 11.7412 19.6875 12.0312V27.3438H21.875V5.46875C21.875 5.17867 21.9902 4.90047 22.1954 4.69535C22.4005 4.49023 22.6787 4.375 22.9688 4.375H28.4375C28.7276 4.375 29.0058 4.49023 29.2109 4.69535C29.416 4.90047 29.5312 5.17867 29.5312 5.46875V27.3438H30.625C30.9151 27.3438 31.1933 27.459 31.3984 27.6641C31.6035 27.8692 31.7188 28.1474 31.7188 28.4375Z" fill="#F9CE0D" />
            </svg>


        ),
    },

    {
        label: "24/5 Client Support",
        description: "Get expert assistance when you need it most. Our support team is available five days a week, guiding you for everything you need.",
        icon: (
            <svg width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 0.84375C8.99129 0.84375 7.02768 1.4394 5.35749 2.55539C3.68731 3.67137 2.38556 5.25756 1.61685 7.11337C0.848151 8.96918 0.647023 11.0113 1.0389 12.9814C1.43079 14.9515 2.39807 16.7612 3.81845 18.1816C5.23883 19.6019 7.0485 20.5692 9.01862 20.9611C10.9887 21.353 13.0308 21.1519 14.8866 20.3832C16.7424 19.6144 18.3286 18.3127 19.4446 16.6425C20.5606 14.9723 21.1563 13.0087 21.1563 11C21.1534 8.30727 20.0825 5.72564 18.1784 3.82159C16.2744 1.91754 13.6927 0.846594 11 0.84375ZM16.4688 11.7812H11C10.7928 11.7812 10.5941 11.6989 10.4476 11.5524C10.3011 11.4059 10.2188 11.2072 10.2188 11V5.53125C10.2188 5.32405 10.3011 5.12534 10.4476 4.97882C10.5941 4.83231 10.7928 4.75 11 4.75C11.2072 4.75 11.4059 4.83231 11.5524 4.97882C11.6989 5.12534 11.7813 5.32405 11.7813 5.53125V10.2188H16.4688C16.676 10.2188 16.8747 10.3011 17.0212 10.4476C17.1677 10.5941 17.25 10.7928 17.25 11C17.25 11.2072 17.1677 11.4059 17.0212 11.5524C16.8747 11.6989 16.676 11.7812 16.4688 11.7812Z" fill="#F0C818" />
            </svg>




        ),
    },

    {
        label: "Fast & Reliable Platforms",
        description: "Experience lightning-speed execution with platforms designed for stability, security, and ease of use. Trade with confidence.",
        icon: (
            <svg width="30" height="30" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.3845 11.7519L6.44699 23.4707C6.33109 23.5944 6.17809 23.677 6.0111 23.7061C5.8441 23.7353 5.67217 23.7093 5.52124 23.6321C5.37031 23.5549 5.24858 23.4308 5.17441 23.2783C5.10024 23.1259 5.07766 22.9535 5.11008 22.7871L6.54172 15.626L0.913789 13.5127C0.792922 13.4675 0.685136 13.393 0.600062 13.296C0.514987 13.199 0.455274 13.0824 0.426257 12.9566C0.39724 12.8309 0.399822 12.6999 0.433773 12.5754C0.467725 12.4509 0.531987 12.3368 0.620821 12.2432L11.5583 0.524407C11.6742 0.400711 11.8272 0.31807 11.9942 0.288955C12.1612 0.259839 12.3331 0.285829 12.4841 0.363002C12.635 0.440175 12.7567 0.564344 12.8309 0.716772C12.9051 0.869199 12.9277 1.04161 12.8952 1.208L11.4597 8.37695L17.0876 10.4873C17.2076 10.5328 17.3145 10.6072 17.3989 10.7038C17.4833 10.8005 17.5426 10.9164 17.5716 11.0414C17.6006 11.1664 17.5983 11.2967 17.565 11.4206C17.5317 11.5445 17.4683 11.6583 17.3806 11.7519H17.3845Z" fill="#FFD700" />
            </svg>


        ),
    },

];

const cardClass =
    "inline-block rounded-full px-6 py-3 mx-2 my-2 marquee-btn text-white/90 text-sm  whitespace-nowrap";


export default function WhoWeAre() {
    const perfomanceRef = useRef<HTMLDivElement | null>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!perfomanceRef.current) return;
        if (marqueeRef.current) {
            const el = marqueeRef.current;
            el.innerHTML += el.innerHTML; // duplicate items for smooth infinite scroll
        }
        const ctx = gsap.context(() => {
            gsap.from(".fade-WhoWeAre", {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.out",

                scrollTrigger: {
                    trigger: perfomanceRef.current,
                    start: "top 80%",
                    end: "bottom 10%",
                    toggleActions: "play none none none",

                },
            });
        }, perfomanceRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="WhoWeAre-section relative lg:pt-26 lg:pb-20 py-14">
            <span className="border_shape3"></span>
            <span className="whoweare-section-span"></span>

            <div className="max-w-[1460px] mx-auto px-6 flex flex-col items-center justify-center WhoWeAre-container">
                <div className="WhoWeAre-heading relative">
                    <Heading
                        badgeText="About us"
                        title="Who We Are"
                        subtitle="At Jeta FX, we connect traders worldwide with advanced tools, real-time access to global markets, and platforms built for performance. Whether you’re just starting or an experienced trader, we’re here to help you trade smarter and faster."
                        maxWidthClass="mx-w-[1000px]"
                    />
                </div>

                <div ref={perfomanceRef} className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 lg:mt-12 ">
                    {WhoWeAreItems.map((item, idx) => (
                        <div key={idx} className="site-card fade-WhoWeAre">
                            <div className="flex items-center md:items-start md:flex-col gap-4 md:gap-0 mb-3 md:mb-0">
                                <span className="site-card-span shuffle inline-block p-2 w-13 h-13 flex content-center justify-items-center">{item.icon}</span>
                                <h4 className="text-lg lg:text-2xl text-white my-2 lg:pt-2">{item.label}</h4>
                            </div>
                            <p className="text-[#E6ECFF] opacity-70">{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>
            <div className="marquee2 w-full overflow-hidden relative text-white mt-6 md:mt-16 s-fade-up">
                <div
                    ref={marqueeRef}
                    className="flex whitespace-nowrap animate-marquee font-semibold text-4xl md:text-5xl lg:text-7xl"
                >
                    <span className="px-6">
                        Forex
                    </span>
                    <span className="px-6">
                        Indices
                    </span>
                    <span className="px-6">
                        Stocks
                    </span>
                    <span className="px-6">
                        Commdities
                    </span>
                    <span className="px-6">
                        Exchange Futures
                    </span>
                </div>
            </div>

        </section>
    );
}
