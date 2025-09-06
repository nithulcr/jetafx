'use client';

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from '@/components/Heading';

gsap.registerPlugin(ScrollTrigger);


const provideItems = [
    {
        label: "Forex",
        description: "Unlock the world’s largest financial market with 24/5 access. Trade major, minor, and exotic currency pairs with tight spreads.",
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.7085 15.9759C14.398 15.1155 13.3335 14.2259 13.3335 12.8405C13.3335 11.2509 14.8064 10.1426 17.271 10.1426C19.8668 10.1426 20.8293 11.3822 20.9168 13.2051H24.1397C24.0376 10.6967 22.5064 8.39258 19.4585 7.64883V4.45508H15.0835V7.60508C12.2543 8.21758 9.9793 10.0551 9.9793 12.8697C9.9793 16.2384 12.7647 17.9155 16.8335 18.8926C20.4793 19.7676 21.2085 21.0509 21.2085 22.4072C21.2085 23.4134 20.4939 25.0176 17.271 25.0176C14.2668 25.0176 13.0855 23.6759 12.9251 21.9551H9.7168C9.8918 25.1488 12.2835 26.9426 15.0835 27.5405V30.7051H19.4585V27.5697C22.3022 27.0301 24.5626 25.3822 24.5626 22.3926C24.5626 18.2509 21.0189 16.8363 17.7085 15.9759Z" fill="#FBD00B" />
            </svg>
        ),
    },
    {
        label: "Commodities",
        description: "Diversify your portfolio with gold, oil, natural gas, and more. Hedge inflation and capture opportunities in global price movements.",
        icon: (
            <svg width="36" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26 24.5801H33V33.5801H26V24.5801Z" stroke="#FFD700" strokeLinejoin="round" />
                <path d="M25 24.5801H34M25 33.5801H34M25 29.0801H26M33 29.0801H34M28.6607 29.0523C29.0185 28.5823 29.2945 27.9326 29.4435 27.5801C29.7045 27.9326 30.271 28.8171 30.45 29.2873C30.6735 29.8748 30.1145 30.5801 29.4435 30.5801C28.7725 30.5801 28.2135 29.6401 28.6607 29.0523Z" stroke="#FFD700" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M20 25.5801C24.4267 25.5801 28 23.8658 28 21.2944V5.00865C28 3.29436 24.4444 1.58008 20 1.58008C15.5556 1.58008 12 3.29436 12 5.00865V11.0086C14.08 11.8486 15.8578 13.2544 17.12 15.0372C17.9911 15.2018 18.9511 15.2927 20 15.2927C22.3289 15.2927 24.2667 14.8452 25.6533 14.1166C25.8502 14.0123 26.0418 13.899 26.2276 13.7772V16.1429C26.2276 16.5458 25.8951 17.1715 24.8018 17.7475C23.7422 18.3046 22.1173 18.7144 20.0018 18.7144C19.5787 18.7144 19.1757 18.6989 18.7929 18.6681C18.9351 19.2315 19.0299 19.8086 19.0773 20.3995C19.3772 20.4155 19.6853 20.4235 20.0018 20.4235C22.3307 20.4235 24.2684 19.9761 25.6551 19.2475C25.852 19.1432 26.0436 19.0299 26.2293 18.9081V21.2738C26.2293 21.6784 25.9644 22.2784 24.8231 22.8715C23.6996 23.4544 22.0142 23.8452 20.0053 23.8452C19.5964 23.8452 19.2006 23.8292 18.8178 23.7972C18.6811 24.367 18.4974 24.9254 18.2684 25.4669C18.8279 25.5275 19.4062 25.5578 20.0036 25.5578L20 25.5801ZM24.8 12.6201C25.8933 12.0441 26.2258 11.4184 26.2258 11.0155V8.64979C26.0421 8.77094 25.8507 8.88408 25.6516 8.98922C24.2684 9.71779 22.3271 10.1652 19.9982 10.1652C17.6693 10.1652 15.7316 9.71779 14.3449 8.98922C14.148 8.88489 13.9564 8.77162 13.7707 8.64979V11.0155C13.7707 11.4184 14.1031 12.0441 15.1964 12.6184C16.256 13.1755 17.8809 13.5852 19.9964 13.5852C22.112 13.5852 23.7298 13.1755 24.7964 12.6184L24.8 12.6201ZM13.7778 5.86579C13.7778 5.37208 14 4.89722 14.4142 4.60751C14.64 4.44979 14.8853 4.29208 15.0791 4.20636C15.5644 3.99036 17.9947 3.29265 20.0036 3.29265C22.0124 3.29265 23.7547 3.68179 24.928 4.20636C25.1484 4.30408 25.392 4.45665 25.6071 4.60751C26.0178 4.89379 26.2293 5.36522 26.2293 5.85379V5.86408C26.2293 6.26694 25.8969 6.89265 24.8036 7.46865C23.744 8.02579 22.1191 8.43551 20.0036 8.43551C17.888 8.43551 16.2702 8.02408 15.2036 7.46865C14.1102 6.89436 13.7778 6.26694 13.7778 5.86579Z" fill="#FFD700" />
                <path fillRule="evenodd" clipRule="evenodd" d="M16 21.5801C16 26.0067 12.4267 29.5801 8 29.5801C3.57333 29.5801 0 26.0067 0 21.5801C0 17.1534 3.57333 13.5801 8 13.5801C12.4267 13.5801 16 17.1534 16 21.5801ZM14.2222 21.5801C14.2222 25.0112 11.4311 27.8023 8 27.8023C4.56889 27.8023 1.77778 25.0112 1.77778 21.5801C1.77778 18.149 4.56889 15.3579 8 15.3579C11.4311 15.3579 14.2222 18.149 14.2222 21.5801Z" fill="#FFD700" />
            </svg>

        ),
    },
    {
        label: "Stocks",
        description: "Access leading global companies like Apple, Tesla, and Amazon through CFDs. Trade with competitive pricing and profit.",
        icon: (
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.64648 17.4999C3.64648 10.9695 3.64648 7.70284 5.67503 5.67429C7.70357 3.64575 10.9688 3.64575 17.5007 3.64575C24.0311 3.64575 27.2977 3.64575 29.3263 5.67429C31.3548 7.70284 31.3548 10.968 31.3548 17.4999C31.3548 24.0303 31.3548 27.297 29.3263 29.3255C27.2977 31.3541 24.0325 31.3541 17.5007 31.3541C10.9702 31.3541 7.70357 31.3541 5.67503 29.3255C3.64648 27.297 3.64648 24.0318 3.64648 17.4999Z" stroke="#FFD700" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M3.64648 21.1458H4.43253C5.12086 21.1458 5.46503 21.1458 5.76544 21.0015C6.0644 20.8585 6.27878 20.5887 6.70898 20.0506L8.75065 17.5L10.9382 21.1458L13.1257 16.0417L16.7715 23.3333L21.8757 13.125L24.7923 18.2292L26.9798 16.0417L29.0871 19.2033C29.4546 19.7546 29.6384 20.0302 29.9067 20.1965C29.9602 20.2295 30.0156 20.2592 30.0729 20.2854C30.3617 20.4167 30.6927 20.4167 31.3548 20.4167" stroke="#FFD700" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M21.875 3.64575V8.02075M21.875 31.3541V21.1458" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.8763 14.5832C22.6817 14.5832 23.3346 13.9303 23.3346 13.1248C23.3346 12.3194 22.6817 11.6665 21.8763 11.6665C21.0709 11.6665 20.418 12.3194 20.418 13.1248C20.418 13.9303 21.0709 14.5832 21.8763 14.5832Z" stroke="#FFD700" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>


        ),
    },
    {
        label: "Indices",
        description: "Trade top indices including the S&P 500, NASDAQ, and FTSE 100. Benefit from low spreads, high leverage.",
        icon: (
            <svg width="36" height="36" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.87435 0.692627H6.24935V19.651H1.87435V0.692627ZM9.16601 9.44263H13.541V19.651H9.16601V9.44263ZM23.7493 6.52596H28.1243V19.651H23.7493V6.52596ZM16.4577 3.60929H20.8327V19.651H16.4577V3.60929ZM0.416016 21.1093H29.5827V24.026H0.416016V21.1093Z" fill="#FFD700" />
            </svg>

        ),
    },
    {
        label: "Equities",
        description: "Invest in top global firms with equity CFDs. Capture opportunities in both rising and falling markets, all from one platform.",
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1393_2456)">
                    <path d="M27.8443 6.32813H24.8795C24.4252 6.32844 23.9851 6.48685 23.6347 6.77617C23.2844 7.0655 23.0456 7.46771 22.9594 7.91383C22.8732 8.35994 22.9449 8.82216 23.1622 9.2212C23.3795 9.62023 23.7289 9.93123 24.1504 10.1008L27.1604 11.3054C27.5819 11.475 27.9313 11.786 28.1486 12.1851C28.3659 12.5841 28.4376 13.0463 28.3514 13.4924C28.2651 13.9385 28.0264 14.3408 27.676 14.6301C27.3257 14.9194 26.8856 15.0778 26.4312 15.0781H25.6568M25.6568 6.32813V5.23438" stroke="#FBD00B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M26.7935 19.3815C28.4125 19.1689 29.9398 18.5074 31.2026 17.472C32.4654 16.4366 33.4133 15.0686 33.9391 13.5226C34.4649 11.9766 34.5477 10.3143 34.1781 8.72367C33.8084 7.13306 33.0011 5.67761 31.8475 4.52188C30.6938 3.36616 29.2398 2.55627 27.6499 2.18381C26.0599 1.81134 24.3975 1.89116 22.8505 2.41423C21.3036 2.9373 19.9338 3.88276 18.8962 5.1437C17.8586 6.40463 17.1944 7.93073 16.9789 9.54943M23.4685 23.8294C23.4685 20.9286 22.3161 18.1466 20.2649 16.0955C18.2138 14.0443 15.4318 12.8919 12.531 12.8919M3.78095 17.2669C2.89435 18.461 2.26059 19.8234 1.91842 21.2707C1.57624 22.7181 1.53284 24.22 1.79086 25.6847C2.04888 27.1494 2.60291 28.5461 3.41908 29.7894C4.23524 31.0327 5.29639 32.0965 6.53766 32.9157C7.77893 33.7349 9.17424 34.2924 10.6383 34.5541C12.1023 34.8157 13.6044 34.776 15.0526 34.4374C16.5008 34.0988 17.8647 33.4685 19.061 32.5848C20.2572 31.7012 21.2607 30.5828 22.0101 29.2982" stroke="#FBD00B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.625 23.8281C14.2052 23.8281 14.7616 23.5977 15.1718 23.1874C15.582 22.7772 15.8125 22.2208 15.8125 21.6406C15.8125 21.0605 15.582 20.5041 15.1718 20.0938C14.7616 19.6836 14.2052 19.4531 13.625 19.4531H10.3438V28.2031H13.625C14.2052 28.2031 14.7616 27.9727 15.1718 27.5624C15.582 27.1522 15.8125 26.5958 15.8125 26.0156C15.8125 25.4355 15.582 24.8791 15.1718 24.4688C14.7616 24.0586 14.2052 23.8281 13.625 23.8281ZM13.625 23.8281H10.3438M12.5313 19.4531V17.2656M12.5313 28.2031V30.3906M1.59375 7.42188L4.875 12.8906L10.3438 9.60938" stroke="#FBD00B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.4422 2.17188C10.4173 2.90976 8.69047 4.29182 7.52685 6.10588C6.36322 7.91995 5.8271 10.0658 6.00077 12.214M34.4062 29.2969L31.1249 23.8281L25.6562 27.1094" stroke="#FBD00B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.5586 34.5489C25.583 33.8112 27.3095 32.4296 28.473 30.6161C29.6366 28.8026 30.1731 26.6575 30.0001 24.5098" stroke="#FBD00B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1393_2456">
                        <rect width="35" height="35" fill="white" transform="translate(0.5 0.859375)" />
                    </clipPath>
                </defs>
            </svg>

        ),
    },
    {
        label: "Crypto",
        description: "Trade leading digital assets like Bitcoin, Ethereum, and more. ",
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1393_2473)">
                    <path d="M18.0007 34.401C22.2552 34.401 26.3354 32.7109 29.3438 29.7025C32.3522 26.6941 34.0423 22.6138 34.0423 18.3593C34.0423 14.1048 32.3522 10.0245 29.3438 7.01612C26.3354 4.00773 22.2552 2.31763 18.0007 2.31763C13.7461 2.31763 9.66588 4.00773 6.65748 7.01612C3.64908 10.0245 1.95898 14.1048 1.95898 18.3593C1.95898 22.6138 3.64908 26.6941 6.65748 29.7025C9.66588 32.7109 13.7461 34.401 18.0007 34.401Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.4857 15.5694C21.4853 16.3087 21.1916 17.0177 20.6691 17.5407C20.1467 18.0637 19.4381 18.3581 18.6988 18.3592H15.2104V12.7797H18.6988C19.4387 12.7797 20.1483 13.0736 20.6715 13.5968C21.1946 14.12 21.4886 14.8296 21.4886 15.5694M21.4857 21.149C21.4853 21.8886 21.1914 22.5977 20.6686 23.1208C20.1458 23.6438 19.4368 23.9381 18.6973 23.9388H15.209V18.3592H18.6973C19.0637 18.3592 19.4265 18.4314 19.7649 18.5716C20.1034 18.7118 20.4109 18.9173 20.67 19.1764C20.9291 19.4354 21.1345 19.743 21.2747 20.0814C21.4149 20.4199 21.4871 20.7827 21.4871 21.149M17.3017 11.384V12.7797M17.3017 23.9388V25.3345" stroke="#FFD700" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.4857 15.5694C21.4853 16.3087 21.1916 17.0177 20.6691 17.5407C20.1467 18.0637 19.4381 18.3581 18.6988 18.3592H15.2104V12.7797H18.6988C19.4387 12.7797 20.1483 13.0736 20.6715 13.5968C21.1946 14.12 21.4886 14.8296 21.4886 15.5694M21.4857 21.149C21.4853 21.8886 21.1914 22.5977 20.6686 23.1208C20.1458 23.6438 19.4368 23.9381 18.6973 23.9388H15.209V18.3592H18.6973C19.0637 18.3592 19.4265 18.4314 19.7649 18.5716C20.1034 18.7118 20.4109 18.9173 20.67 19.1764C20.9291 19.4354 21.1345 19.743 21.2747 20.0814C21.4149 20.4199 21.4871 20.7827 21.4871 21.149M17.3017 11.384V12.7797M17.3017 23.9388V25.3345" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1393_2473">
                        <rect width="35" height="35" fill="white" transform="translate(0.5 0.859375)" />
                    </clipPath>
                </defs>
            </svg>

        ),
    },
    // Add more items here if needed
];
const marqueeItemsA = [
    "Instant Savings",
    "Flexible Payments",
    "Intelligent Spending",
    "Customizable Plans",
    "Smart Insights",
    "Instant Savings",
    "Flexible Payments",
    "Intelligent Spending",
    "Customizable Plans",
    "Smart Insights",
    "Instant Savings",
    "Flexible Payments",
    "Intelligent Spending",
    "Customizable Plans",
    "Smart Insights",
];

const marqueeItemsB = [
    "Real-Time Reports",
    "Custom Plans",
    "Dedicated Support",
    "24/7 Support",
    "Secure Transactions",
    "Real-Time Reports",
    "Custom Plans",
    "Dedicated Support",
    "24/7 Support",
    "Secure Transactions",
    "Real-Time Reports",
    "Custom Plans",
    "Dedicated Support",
    "24/7 Support",
    "Secure Transactions",
];
const cardClass =
    "inline-block rounded-full px-6 py-3 mx-2 my-2 marquee-btn text-white/90 text-sm  whitespace-nowrap";

    
export default function Provide() {
    const provideRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (!provideRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(".gma-heading", {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.out",
                stagger: 0.2, // staggers animation by 0.2 seconds per element
                scrollTrigger: {
                    trigger: provideRef.current,
                    start: "top 80%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                },
            });
        }, provideRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="provide-section relative lg:py-20 py-14">
            <div className="max-w-[1460px] mx-auto px-6 flex flex-col items-center justify-center">
                <Heading
                    badgeText="We Provide"
                    title="Trade Global Markets with Competitive Pricing & Full Market Access"
                    subtitle="Step into the world of trading with Jeta FX — your all-in-one gateway to forex, commodities, stocks, indices, equities, and crypto markets. Enjoy transparent pricing, low spreads, and fast execution designed to give you an edge in every trade."
                    maxWidthClass="max-w-[900px]"
                />

                <div ref={provideRef} className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 lg:mt-16 ">
                    {provideItems.map((item, idx) => (
                        <div key={idx} className="provide-col gma-heading">
                            <div className="flex items-center md:items-start md:flex-col gap-4 md:gap-0 mb-3 md:mb-0">
                                <span className="provide-col-span shuffle inline-block p-2">{item.icon}</span>
                                <h4 className="text-xl lg:text-2xl text-white my-2">{item.label}</h4>
                            </div>
                            <p className="text-[#E6ECFF] opacity-70">{item.description}</p>
                        </div>
                    ))}
                </div>


            </div>
            <div className="marquee-double z-10 relative overflow-hidden w-full mt-20">
                {/* Top Marquee: left to right */}
                <div className="w-full flex items-center">
                    <div className="marquee-ltr flex items-center whitespace-nowrap animate-marquee-ltr">
                        {marqueeItemsA.concat(marqueeItemsA).map((item, idx) => (
                            <span key={"ltr-" + idx} className={cardClass}>
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Bottom Marquee: right to left */}
                <div className="w-full flex items-center mt-2">
                    <div className="marquee-track marquee-rtl flex items-center whitespace-nowrap">
                        {[...marqueeItemsB, ...marqueeItemsB, ...marqueeItemsB].map((item, idx) => (
                            <span key={"rtl-" + idx} className={cardClass}>
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Custom CSS */}
                <style jsx>{`
          .marquee-track {
            min-width: 200%; /* Ensures duplicate content covers scroll area */
            will-change: transform;
          }
          .marquee-ltr {
            animation: marqueeLTR 80s linear infinite;
          }
          .marquee-rtl {
            animation: marqueeRTL 80s linear infinite;
          }
          @keyframes marqueeLTR {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }
          @keyframes marqueeRTL {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

        `}</style>
            </div>
        </section>
    );
}
