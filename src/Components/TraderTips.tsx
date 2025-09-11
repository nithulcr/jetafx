"use client";
import React, { useRef, useEffect, ReactNode } from "react";
import Image from "next/image";
import Heading from '@/Components/Heading';
import AnimatedButton from "./AnimatedButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TradingPlatformSection() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            const fadeUps = containerRef.current!.querySelectorAll(".fade-up");
            gsap.fromTo(
                fadeUps,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Refresh ScrollTrigger after images load
            const imgs = containerRef.current!.querySelectorAll("img");
            imgs.forEach(img => {
                if (!img.complete) {
                    img.addEventListener("load", () => {
                        ScrollTrigger.refresh();
                    });
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative px-6 py-14 lg:py-22">
            <div className="max-w-[1400px] w-full mx-auto">
                <Heading
                    badgeText="Trader tips"
                    title="Powerful Trading Platforms for Every Trader"
                    subtitle="Open the trade account which is best for you"
                    maxWidthClass=""
                />
                <div className="flex flex-col lg:flex-row items-center gap-12 mt-8 lg:mt-12">
                    {/* Platform Logo */}
                    <div className="fade-up flex-1 flex items-center justify-center">
                        <Image
                            src="/tips-img.png" // replace with your logo path
                            alt="MetaTrader 5 Logo"
                            width={300}
                            height={300}
                            className="object-contain w-full max-w-[500px]"
                        />
                    </div>

                    {/* Platform Details */}
                    <div className="fade-up flex-1 flex flex-col items-start justify-center">
                        <div className="fade-up bg-black/30 rounded-2xl mb-8 shadow-lg w-full max-w-lg">
                            <h2 className="font-deefault text-xl mb-4 text-white">
                                MetaTrader 5 (MT5) with Jeta FX
                            </h2>
                            <p className="mb-6 text-[#E6ECFF] opacity-70">
                                Open the account that fits your trading style and experience the advantages of MetaTrader 5&nbsp;(MT5)&nbsp;— one of the world&apos;s most trusted trading platforms. With MT5 at Jeta FX, you get:
                            </p>
                            <ul className="list-none space-y-3 text-[#E6ECFF] opacity-70 fw-200 mb-3">
                                <li className="flex items-center gap-2">
                                    <CheckSVG />
                                    Extensive Technical Indicators
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckSVG />
                                    Automated Trading with Expert Advisors
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckSVG />
                                    Optimized Performance
                                </li>
                            </ul>
                            <AnimatedButton href="" label="Start Trading on MT5 with Jeta FX" className="white-btn w-fit mt-5 lg:mt-10 fade-up" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Download Buttons */}
            <div className="w-full flex flex-col gap-4 mt-12 fade-up px-6">
                <div className="max-w-[800px] mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-6">
                    <DownloadBtn icon="windows" label="Download for Windows" />
                    <DownloadBtn icon="android" label="Download for Android" />
                    <DownloadBtn icon="apple" label="Download for Mac" />
                    <DownloadBtn icon="google-play" label="Download from Playstore" />
                    <DownloadBtn icon="chrome" label="Download from Chrome" />
                </div>
            </div>
        </section>
    );
}

// -- Re-usable Check SVG icon (no JSX namespace needed) --
function CheckSVG() {
    return (
        <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.74999 9.3448L3.16699 10.9278L7.91699 15.6778L15.833 7.7608L14.25 6.1778L7.91699 12.5108L4.74999 9.3448Z" fill="#8AA5FF" />
        </svg>
    );
}

// Platform Download Button with Icon
function DownloadBtn({ icon, label }: { icon: string; label: string }) {
    // Use ReactNode here, never JSX.Element
    const icons: Record<string, ReactNode> = {
        windows: (
            <svg width="25" height="25" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3391 3.00781L0 4.89344V16.8153H14.3391V3.00781ZM0 30.1766L14.3391 32.2175V18.1847H0V30.1766ZM15.9206 18.3641L15.9775 32.3159L35 35V18.3641H15.9206ZM35 0L16.0344 2.72125V16.7519H35V0Z" fill="#A1B8FE" />
            </svg>
        ),
        android: (
            <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.8386 4.40271L23.2386 1.87688C23.2565 1.84451 23.2678 1.80893 23.272 1.77218C23.2761 1.73543 23.273 1.69821 23.2628 1.66267C23.2526 1.62712 23.2354 1.59393 23.2124 1.565C23.1893 1.53608 23.1608 1.51197 23.1285 1.49406C23.0961 1.47616 23.0605 1.4648 23.0238 1.46064C22.987 1.45649 22.9498 1.45961 22.9142 1.46983C22.8787 1.48006 22.8455 1.49718 22.8166 1.52023C22.7877 1.54328 22.7636 1.5718 22.7456 1.60417L21.3311 4.15625C20.1235 3.62671 18.8193 3.35331 17.5007 3.35331C16.1822 3.35331 14.878 3.62671 13.6704 4.15625L12.2559 1.60417C12.2197 1.53842 12.1589 1.48972 12.0868 1.4688C12.0148 1.44788 11.9373 1.45644 11.8716 1.4926C11.8058 1.52877 11.7571 1.58957 11.7362 1.66163C11.7153 1.7337 11.7239 1.81112 11.76 1.87688L13.16 4.40271C11.8284 5.0602 10.7033 6.0714 9.90797 7.32561C9.11265 8.57981 8.67774 10.0287 8.65085 11.5135H26.3506C26.3235 10.0284 25.8881 8.5793 25.0923 7.32506C24.2964 6.07083 23.1708 5.0598 21.8386 4.40271ZM13.4167 8.27458C13.2704 8.27458 13.1274 8.23118 13.0058 8.14987C12.8841 8.06857 12.7894 7.95301 12.7335 7.81782C12.6775 7.68263 12.663 7.53389 12.6916 7.39043C12.7203 7.24696 12.7908 7.11522 12.8944 7.01188C12.9979 6.90853 13.1298 6.83823 13.2733 6.80986C13.4169 6.7815 13.5656 6.79635 13.7006 6.85253C13.8357 6.90872 13.9511 7.00371 14.0322 7.1255C14.1132 7.24728 14.1564 7.39037 14.1561 7.53667C14.1557 7.73251 14.0776 7.9202 13.939 8.05854C13.8004 8.19689 13.6125 8.27458 13.4167 8.27458ZM21.5863 8.27458C21.44 8.27458 21.297 8.23118 21.1753 8.14987C21.0537 8.06857 20.959 7.95301 20.903 7.81782C20.8471 7.68263 20.8326 7.53389 20.8612 7.39043C20.8899 7.24696 20.9604 7.11522 21.064 7.01188C21.1675 6.90853 21.2994 6.83823 21.4429 6.80986C21.5864 6.7815 21.7352 6.79635 21.8702 6.85253C22.0053 6.90872 22.1207 7.00371 22.2017 7.1255C22.2828 7.24728 22.3259 7.39037 22.3256 7.53667C22.3253 7.73251 22.2472 7.9202 22.1086 8.05854C21.97 8.19689 21.7821 8.27458 21.5863 8.27458ZM8.64794 25.041C8.64755 25.3226 8.70275 25.6015 8.81037 25.8617C8.91798 26.1218 9.0759 26.3582 9.27506 26.5572C9.47422 26.7563 9.71071 26.914 9.97096 27.0215C10.2312 27.1289 10.5101 27.1839 10.7917 27.1833H12.2106V31.5583C12.2106 32.0845 12.4197 32.5892 12.7918 32.9613C13.1638 33.3334 13.6685 33.5424 14.1947 33.5424C14.7209 33.5424 15.2256 33.3334 15.5977 32.9613C15.9697 32.5892 16.1788 32.0845 16.1788 31.5583V27.1833H18.8242V31.5583C18.8242 32.0843 19.0331 32.5888 19.4051 32.9608C19.777 33.3327 20.2815 33.5417 20.8075 33.5417C21.3335 33.5417 21.838 33.3327 22.2099 32.9608C22.5819 32.5888 22.7909 32.0843 22.7909 31.5583V27.1833H24.2113C24.4925 27.1835 24.7709 27.1283 25.0308 27.0208C25.2906 26.9132 25.5267 26.7556 25.7255 26.5567C25.9243 26.3579 26.082 26.1218 26.1895 25.862C26.2971 25.6022 26.3523 25.3237 26.3521 25.0425V12.2135H8.64794V25.041ZM5.92523 11.8723C5.66465 11.8723 5.40663 11.9236 5.1659 12.0234C4.92518 12.1232 4.70647 12.2694 4.52228 12.4537C4.3381 12.638 4.19203 12.8568 4.09245 13.0976C3.99286 13.3384 3.9417 13.5965 3.9419 13.8571V22.1244C3.9419 22.3848 3.9932 22.6427 4.09287 22.8834C4.19254 23.124 4.33863 23.3426 4.5228 23.5268C4.70697 23.711 4.92561 23.8571 5.16624 23.9567C5.40687 24.0564 5.66477 24.1077 5.92523 24.1077C6.18568 24.1077 6.44359 24.0564 6.68422 23.9567C6.92485 23.8571 7.14349 23.711 7.32766 23.5268C7.51183 23.3426 7.65792 23.124 7.75759 22.8834C7.85726 22.6427 7.90856 22.3848 7.90856 22.1244V13.8571C7.90856 13.5966 7.85726 13.3387 7.75759 13.0981C7.65792 12.8575 7.51183 12.6388 7.32766 12.4547C7.14349 12.2705 6.92485 12.1244 6.68422 12.0247C6.44359 11.9251 6.18568 11.8738 5.92523 11.8738M29.0719 11.8738C28.8113 11.8738 28.5533 11.9251 28.3126 12.0249C28.0718 12.1246 27.8531 12.2708 27.669 12.4552C27.4848 12.6395 27.3387 12.8583 27.2391 13.0991C27.1395 13.3399 27.0884 13.598 27.0886 13.8585V22.1258C27.0886 22.3863 27.1399 22.6442 27.2395 22.8848C27.3392 23.1255 27.4853 23.3441 27.6695 23.5283C27.8536 23.7124 28.0723 23.8585 28.3129 23.9582C28.5535 24.0579 28.8114 24.1092 29.0719 24.1092C29.3324 24.1092 29.5903 24.0579 29.8309 23.9582C30.0715 23.8585 30.2902 23.7124 30.4743 23.5283C30.6585 23.3441 30.8046 23.1255 30.9043 22.8848C31.0039 22.6442 31.0552 22.3863 31.0552 22.1258V13.8571C31.0552 13.3311 30.8463 12.8266 30.4743 12.4547C30.1024 12.0827 29.5979 11.8738 29.0719 11.8738Z" fill="#A1B8FE" />
            </svg>

        ),
        apple: (
            <svg width="22" height="22" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8646 25.575C17.4355 26.9604 15.875 26.7417 14.373 26.0854C12.7834 25.4146 11.325 25.3854 9.64795 26.0854C7.54795 26.9896 6.43962 26.7271 5.18545 25.575C-1.93121 18.2396 -0.881214 7.06875 7.19795 6.66042C9.1667 6.7625 10.5375 7.73958 11.6896 7.82708C13.4105 7.47708 15.0584 6.47083 16.8959 6.60208C19.098 6.77708 20.7605 7.65208 21.8542 9.22708C17.3042 11.9542 18.3834 17.9479 22.5542 19.625C21.723 21.8125 20.6438 23.9854 18.85 25.5896L18.8646 25.575ZM11.5438 6.57292C11.325 3.32083 13.9646 0.6375 16.998 0.375C17.4209 4.1375 13.5855 6.9375 11.5438 6.57292Z" fill="#A1B8FE" />
            </svg>
        ),
        "google-play": (
            <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.28125 4.06666V30.9319C3.28143 30.9902 3.29881 31.0471 3.33122 31.0956C3.36363 31.144 3.40962 31.1818 3.46343 31.2042C3.51723 31.2266 3.57646 31.2327 3.63367 31.2215C3.69089 31.2104 3.74355 31.1827 3.78506 31.1418L17.7734 17.5L3.78506 3.8568C3.74355 3.81587 3.69089 3.78812 3.63367 3.77701C3.57646 3.76589 3.51723 3.77192 3.46343 3.79433C3.40962 3.81675 3.36363 3.85455 3.33122 3.90299C3.29881 3.95144 3.28143 4.00837 3.28125 4.06666ZM23.6387 11.8945L6.09902 2.23121L6.08809 2.22506C5.78594 2.06099 5.49883 2.46978 5.74629 2.70767L19.4954 15.8545L23.6387 11.8945ZM5.74766 32.2922C5.49883 32.5301 5.78594 32.9389 6.08945 32.7749L6.10039 32.7687L23.6387 23.1054L19.4954 19.144L5.74766 32.2922ZM30.7193 15.791L25.8214 13.0935L21.216 17.5L25.8214 21.9044L30.7193 19.2089C32.0517 18.4727 32.0517 16.5272 30.7193 15.791Z" fill="#A1B8FE" />
            </svg>
        ),
        chrome: (
            <svg width="32" height="32" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3309 31.7377C7.80192 30.291 2.9165 24.4664 2.9165 17.5C2.9165 14.8429 3.62671 12.3521 4.86921 10.2054L11.1153 21.0248C11.8171 22.2965 12.8828 23.3296 14.1757 23.9916C15.4686 24.6537 16.9298 24.9145 18.3719 24.7406L14.3309 31.7377ZM17.4998 32.0833L23.7517 21.2552C24.4325 20.1209 24.792 18.8229 24.7915 17.5C24.7936 15.9219 24.2817 14.3861 23.3332 13.125H31.4153C31.8592 14.5408 32.0844 16.0162 32.0832 17.5C32.0832 25.5543 25.5542 32.0833 17.4998 32.0833ZM21.2507 19.7531C20.8585 20.406 20.3027 20.9452 19.6383 21.3174C18.9738 21.6896 18.2237 21.8819 17.4621 21.8752C16.7005 21.8686 15.9539 21.6633 15.296 21.2796C14.6381 20.8959 14.0918 20.3471 13.7111 19.6875L13.6688 19.6146C13.2995 18.9453 13.112 18.1911 13.1249 17.4268C13.1378 16.6626 13.3507 15.9151 13.7424 15.2587C14.1341 14.6024 14.691 14.0601 15.3574 13.6859C16.0239 13.3117 16.7768 13.1187 17.5411 13.126C18.3054 13.1333 19.0545 13.3407 19.7137 13.7276C20.3729 14.1145 20.9193 14.6673 21.2983 15.331C21.6774 15.9947 21.876 16.7462 21.8743 17.5105C21.8725 18.2749 21.6706 19.0254 21.2886 19.6875L21.2507 19.7531ZM6.75484 7.64018C8.11923 6.14932 9.77944 4.95927 11.6295 4.14597C13.4796 3.33267 15.4789 2.91398 17.4998 2.91664C20.0602 2.91619 22.5755 3.58982 24.7929 4.8698C27.0104 6.14978 28.8517 7.99098 30.1319 10.2083H17.4998C16.0714 10.2078 14.6743 10.6269 13.482 11.4135C12.2897 12.2001 11.3546 13.3195 10.793 14.6329L6.75484 7.64018Z" fill="#A1B8FE" />
            </svg>
        ),
    };
    return (
        <button className="fade-up flex items-center px-8 py-4 rounded-xl site-card cursor-pointer">
            <span className="flex items-center gap-3">{icons[icon] ?? null}{label}</span>
        </button>
    );
}
