"use client";
import React, { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from "gsap";

import Header from '@/Marquee.tsx/Header';
import AccountProcess from '@/Marquee.tsx/AccountProcess';

import FAQ from '@/Marquee.tsx/FAQ';
import Footer from '@/Marquee.tsx/Footer';
import Image from 'next/image';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const MARKET_CARDS: Record<string, Array<{
  iconColor: string;
  value: string;
  image: string;
  percent: string;
  percentColor: string;
}>> = {
  forex: [
    {
      iconColor: "#FF9421",
      value: "$117383.005",
      image: "/market-graph.png",
      percent: "+0.59%",
      percentColor: "#FFD700",
    },
    {
      iconColor: "#FFF",
      value: "$6585.64",
      image: "/market-graph.png",
      percent: "+0.66%",
      percentColor: "#FFD700",
    },
  ],
  commodities: [
    {
      iconColor: "#FF9421",
      value: "$9128.33",
      image: "/market-graph.png",
      percent: "-1.05%",
      percentColor: "#FF5050",
    },
    {
      iconColor: "#FFF",
      value: "$592.44",
      image: "/market-graph.png",
      percent: "+0.19%",
      percentColor: "#FFD700",
    },
  ],
  indices: [
    {
      iconColor: "#FF9421",
      value: "$45721.82",
      image: "/market-graph.png",
      percent: "+1.79%",
      percentColor: "#FFD700",
    },
    {
      iconColor: "#FFF",
      value: "$3728.58",
      image: "/market-graph.png",
      percent: "-0.34%",
      percentColor: "#FF5050",
    },
  ],
  equities: [
    {
      iconColor: "#FF9421",
      value: "$6383.25",
      image: "/market-graph.png",
      percent: "+0.08%",
      percentColor: "#FFD700",
    },
    {
      iconColor: "#FFF",
      value: "$321.66",
      image: "/market-graph.png",
      percent: "-0.11%",
      percentColor: "#FF5050",
    },
  ],
  stocks: [
    {
      iconColor: "#FF9421",
      value: "$75183.95",
      image: "/market-graph.png",
      percent: "+2.11%",
      percentColor: "#FFD700",
    },
    {
      iconColor: "#FFF",
      value: "$5123.01",
      image: "/market-graph.png",
      percent: "+0.92%",
      percentColor: "#FFD700",
    },
    
  ],
  crypto: [
    {
      iconColor: "#FF9421",
      value: "$75183.95",
      image: "/market-graph.png",
      percent: "+2.11%",
      percentColor: "#FFD700",
    },
    {
      iconColor: "#FFF",
      value: "$5123.01",
      image: "/market-graph.png",
      percent: "+0.92%",
      percentColor: "#FFD700",
    },
    
  ]
};

const TABS = [
  {
    key: "forex",
    label: "Forex",
    heroTitle: "Forex",
    heroDesc:
      "Trade top commodities like gold, silver, and crude oil. Diversify portfolios, hedge risks, and capture global market opportunities easily.",
    sectionTitle: "What is Foreign Exchange Trading (ForexTrading)?",
    bodyText:
      `Forex (FX) stands for foreign exchange and refers to the global currency market. Forex trading involves speculating on the price movement of one currency against another. Currencies are traded in pairs, where traders buy one currency while simultaneously selling another. For instance, in a EUR/USD trade, buying EUR means selling USD.

The forex market is one of the world’s largest financial markets, operating five days a week. Just like other trading platforms, investors aim to profit by capitalizing on currency price movements. Participants in this market range from independent retail traders to major financial organizations. To engage in forex trading, you must open an account with a licensed broker, granting you access to global currency markets from your home country whether you’re in the Philippines, Thailand, or anywhere else.

Access Jetafx Limited’s wide range of forex pairs through CFDs and explore countless trading opportunities. With a trusted forex broker like Jetafx Limited, you can trade major, minor, and exotic currency pairs, including popular choices such as EUR/USD, GBP/USD, and USD/JPY. Maximize your forex trading potential by using leverage, enabling you to control larger positions with a smaller capital investment.`
  },
  {
    key: "commodities",
    label: "Commodities",
    heroTitle: "Commodities",
    heroDesc: "Trade gold, silver, oil, and more with tight spreads and ultra-fast execution.",
    sectionTitle: "What Are Commodities?",
    bodyText:
      `Commodities are essential raw materials that are bought and sold in global markets. They are categorized into two main types: hard and soft commodities. Hard commodities include natural resources like gold, silver, oil, or natural gas, which are extracted or mined. Soft commodities, however, consist of agricultural goods or livestock such as coffee, soybeans, cotton, and sugar.

      With a Bullsouq live trading account, traders from regions like the Philippines, Thailand, and other parts of the world can start trading commodities through Contracts for Differences (CFDs). `
  },
    {
    key: "equities",
    label: "Equities",
    heroTitle: "Equities",
    heroDesc: "Equities are shares of ownership in a company, giving investors a stake in its profits, assets, and growth potential.",
    sectionTitle: "What is Equities ?",
    bodyText:
      `Shares represent fractional ownership in a company and collectively form what is known as “stocks,” which is why the terms shares and stocks are often used interchangeably in finance.
      
      The process of buying and selling these shares is called stock trading. By participating in stock trading, individuals can invest in some of the world’s largest companies, including Tesla, Apple, Alphabet, Meta, and more.
      
      With Vantage, you can trade equities of major U.S. companies commission-free, no matter where you are—from Thailand, the Philippines, or beyond.`
  },
  {
    key: "indices",
    label: "Indices",
    heroTitle: "Indices",
    heroDesc: "Trade global indices like S&P 500, NASDAQ, and FTSE. Capture market trends, diversify exposure, and benefit from high liquidity.",
    sectionTitle: "WHAT ARE INDICES IN TRADING?",
    bodyText:
    `An index measures the performance of a group of securities or assets. These indices can be categorized based on factors such as asset class, industry, market capitalization, geographical location, and more.
    
    By trading indices through Contracts for Difference (CFDs), traders can take advantage of the price movements—whether up or down—of a diverse range of assets. Whether you’re in India, the Philippines, or elsewhere, trading indices gives you the opportunity to tap into global market dynamics.
    
    Trading stock market indices CFDs offers more diversification compared to individual stock trading, as indices represent a specific segment of the stock market, providing a snapshot of that sector’s performance.
    
    Indices also serve as benchmarks for comparing individual securities or portfolios, enabling investors to monitor market trends and make more informed trading decisions.`
  },

  {
    key: "stocks",
    label: "Stocks",
    heroTitle: "Stocks",
    heroDesc: "Trade leading global stocks like Apple, Tesla, and Amazon. Access growth opportunities, diversify portfolios, and react quickly to market trends.",
    sectionTitle: "What is Stock Trading?",
    bodyText:
    `Stock trading involves buying and selling shares of publicly listed companies to profit from price movements. When you purchase a stock, you own a fraction of that company, entitling you to a portion of its assets and earnings.
    
    The stock market operates during specific hours, typically aligning with the business hours of the country where the exchange is located. Participants range from individual retail investors to large institutional traders. To engage in stock trading, you need to open an account with a licensed broker, granting you access to global stock markets from your home country—whether you’re in the Philippines, Thailand, or elsewhere.
    
    Access Bullsouq’s wide range of stocks through our platform and explore numerous trading opportunities. With a trusted broker like Bullsouq, you can trade major stocks, including popular choices such as AAPL (Apple), TSLA (Tesla), and AMZN (Amazon). Maximize your stock trading potential by using leverage, enabling you to control larger positions with a smaller capital investment.`
  },

  {
    key: "crypto",
    label: "Crypto",
    heroTitle: "Crypto",
    heroDesc: "Cryptocurrency is a digital currency secured by cryptography, enabling secure, decentralized, and borderless transactions.",
    sectionTitle: "What is Cryptocurrency Trading?",
    bodyText:
    `What is Cryptocurrency Trading? Cryptocurrency trading involves speculating on the price movements of digital currencies like Bitcoin (BTC), Ethereum (ETH), and others. Traders buy one cryptocurrency while simultaneously selling another, aiming to profit from fluctuations in their exchange rates. For example, in a BTC/USD trade, buying BTC means selling USD.
    
    The cryptocurrency market operates 24/7, providing continuous trading opportunities. Participants range from individual retail traders to large financial institutions. To engage in cryptocurrency trading, you need to open an account with a licensed broker, granting you access to global crypto markets from your home country—whether you’re in the Philippines, Thailand, or elsewhere.
    
    Access Bullsouqs wide range of cryptocurrency pairs through CFDs and explore numerous trading opportunities. With a trusted broker like Bullsouq, you can trade major cryptocurrencies, including popular choices such as BTC/USD, ETH/USD, and LTC/USD. Maximize your crypto trading potential by using leverage, enabling you to control larger positions with a smaller capital investment.`
  },
];

export default function MarketsPageTabs() {
 const [activeTab, setActiveTab] = useState("forex");
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  const activeTabConfig = TABS.find(tab => tab.key === activeTab);

  // Animate all fade-up elements inside containerRef on scroll
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const fadeUps = containerRef.current!.querySelectorAll(".fade-up");
      gsap.fromTo(
        fadeUps,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.08 }
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
  }, [pathname, activeTab]);

  return (
    <div>
      <Header />
      <section ref={containerRef} className="min-h-screen lg:py-22 py-14 markets-section relative">
        <div className="max-w-[1460px] mx-auto  px-6 pt-20 markets-container relative z-1">
          {/* Hero Section */}
          <div className="md:min-h-[200px] min-h-[150px] text-center lg:mb-10 fade-up">
            <h1 className="fade-up hero-heading text-4xl md:text-5xl lg:text-7xl max-w-[1000px] mx-auto font-bold mb-4 leading-tight">
              {activeTabConfig?.heroTitle}
            </h1>
            <p className="max-w-2xl mx-auto text-[#E6ECFF] opacity-70 fade-up">
              {activeTabConfig?.heroDesc}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-col items-center mt-6 md:mt-10 mb-8">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
              {TABS.map(tab => (
                <button
                  key={tab.key}
                  className={`px-5 py-3 rounded-full fade-up transition cursor-pointer min-w-[120px] md:min-w-[150px] market-tab ${activeTab === tab.key
                    ? "active-market-tab"
                    : ""
                    }`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section Content */}
          <div>
            <section>
              <h2 className="text-2xl lg:text-4xl mb-6 md:mb-16 font-medium fade-up">
                {activeTabConfig?.sectionTitle}
              </h2>
              <div className="grid  lg:grid-cols-2 gap-5 md:gap-10 fade-up">
                <p
                  className="flex-1 text-[#E6ECFF] opacity-70"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {activeTabConfig?.bodyText}
                </p>
                <div className="grid grid-cols-2 items-start gap-4 lg:gap-10 w-full">
                  {MARKET_CARDS[activeTab]?.map((card, idx) => (
                    <div
                      key={idx}
                       className={`market-card rounded-2xl md:rounded-4xl flex flex-col items-center gap-2 justify-between border border-gray-700 max-w-[370px] ${idx === 1 ? 'lg:mt-24 border-0' : ''}`}
                    >
                      <div className="pt-6 pb-3 px-3 md:p-6">
                        <span
                          className="block w-8 h-8 rounded"
                          style={{ background: card.iconColor }}
                        ></span>
                      </div>
                      <h5 className="font-medium text-lg md:text-2xl md:p-6 p-2">{card.value}</h5>
                      <Image src={card.image} alt="logo icon" className="w-full" width={150} height={150} />
                      <h5
                        className="font-medium text-2xl pt-0 p-6"
                        style={{ color: card.percentColor }}
                      >
                        {card.percent}
                      </h5>
                    </div>
                  ))}
                </div>

              </div>
            </section>
          </div>
        </div>
      </section>
      <AccountProcess />

      <FAQ />
      <Footer />
    </div>
  );
}
