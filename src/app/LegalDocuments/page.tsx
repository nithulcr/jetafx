"use client";
import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);


const legalItemItems = [
  {
    label: "AML Procedures Manual",
    link: "https://mainadmin.jetafx.com/Content/Client/img/document/AML-PROCEDURES-MANUAL.pdf"
  },
  {
    label: "Bonus 20 tnc",
    link: "https://mainadmin.jetafx.com/Content/Client/img/document/bonus-20-tnc%20copy.pdf"
    
  },
  {
    label: "Compliant Handling Procedures ",
    link: "https://mainadmin.jetafx.com/Content/Client/img/document/Compliant-Handling-Procedures.pdf"
   
  },
  {
    label: "Privacy Notice",
    link: "https://mainadmin.jetafx.com/Content/Client/img/document/Privacy-Notice.pdf"
   
  },
  {
    label: "Risk Warning Notice",
    link: "https://mainadmin.jetafx.com/Content/Client/img/document/Risk-Warning-Notice.pdf"
    
  },
  {
    label: "Summary Order Execution Policy",
    link: "https://mainadmin.jetafx.com/Content/Client/img/document/Summary-Order-Execution-Policy%20copy.pdf"
    
  },
  // Add more items here if needed
];
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
        <div className="max-w-[1300px] mx-auto px-6 pt-16 text-center hero-container hero-container2 relative z-10">
          <h1
            className="fade-up hero-heading text-4xl md:text-5xl lg:text-7xl max-w-[1000px] mx-auto font-bold mb-4 leading-tight"
          >
            Legal Documents
          </h1>

        </div>
        <div className="max-w-[1300px] mx-auto px-6 pt-5 flex flex-col items-center justify-center">


          <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 lg:mt-16 w-full">
            {legalItemItems.map((item, idx) => (
              <Link target='__blank' href={item.link} key={idx} className="provide-col w-full">
                <div className="flex items-center md:items-start md:flex-col gap-4 md:gap-0 mb-3 md:mb-0">
                  <span className="inline-block p-2 mx-auto">
                    <svg width="58" height="72" viewBox="0 0 58 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32.5835 25.2501H52.2918L32.5835 5.54175V25.2501ZM7.50016 0.166748H36.1668L57.6668 21.6667V64.6667C57.6668 66.5675 56.9118 68.3903 55.5678 69.7343C54.2237 71.0784 52.4009 71.8334 50.5002 71.8334H7.50016C5.59944 71.8334 3.77657 71.0784 2.43256 69.7343C1.08855 68.3903 0.333496 66.5675 0.333496 64.6667V7.33341C0.333496 5.4327 1.08855 3.60983 2.43256 2.26582C3.77657 0.921805 5.59944 0.166748 7.50016 0.166748ZM25.166 37.5767C26.6352 40.8017 28.4985 43.4534 30.6485 45.2809L32.1177 46.4276C29.0002 47.0009 24.7002 48.0042 20.1493 49.7601L19.7552 49.9034L21.5468 46.1767C23.1593 43.0592 24.3418 40.2284 25.166 37.5767ZM48.386 51.2292C49.031 50.5842 49.3535 49.7601 49.3893 48.8642C49.4968 48.1476 49.3177 47.4667 48.9593 46.8934C47.9202 45.2092 45.2327 44.4209 40.7893 44.4209L36.1668 44.6717L33.0493 42.5934C30.7918 40.7301 28.7493 37.4692 27.316 33.4201L27.4593 32.9184C28.6418 28.1526 29.7527 22.3834 27.3877 20.0184C27.0984 19.7375 26.7562 19.5169 26.381 19.3692C26.0058 19.2216 25.605 19.1499 25.2018 19.1584H24.3418C23.016 19.1584 21.8335 20.5559 21.511 21.9176C20.1852 26.6834 20.9735 29.2992 22.2993 33.6351V33.6709C21.4035 36.8242 20.2568 40.4792 18.4293 44.1701L14.9893 50.6201L11.8002 52.3759C7.50016 55.0634 5.45766 58.0734 5.0635 59.9726C4.92016 60.6534 4.99183 61.2626 5.24266 61.9076L5.35016 62.0868L7.07016 63.1976L8.64683 63.5918C11.5493 63.5918 14.846 60.1876 19.2893 52.5909L19.9343 52.3401C23.6252 51.1576 28.2118 50.3334 34.3752 49.6526C38.066 51.4801 42.4018 52.3042 45.1252 52.3042C46.7018 52.3042 47.7768 51.9101 48.386 51.2292ZM46.9168 48.6851L47.2393 49.0792C47.2035 49.4376 47.096 49.4734 46.9168 49.5451H46.7735L46.0927 49.6167C44.4443 49.6167 41.9002 48.9359 39.2843 47.7892C39.6068 47.4309 39.7502 47.4309 40.1085 47.4309C45.1252 47.4309 46.5585 48.3267 46.9168 48.6851ZM14.0577 53.9167C11.7285 58.1809 9.61433 60.5459 8.00183 61.0834C8.181 59.7217 9.7935 57.3567 12.3377 55.0276L14.0577 53.9167ZM24.8793 29.1559C24.0552 25.9309 24.0193 23.3151 24.6285 21.8101L24.8793 21.3801L25.4168 21.5592C26.026 22.4192 26.0977 23.5659 25.7393 25.5009L25.6318 26.0742L25.0585 29.0126L24.8793 29.1559Z" fill="#EF5350" />
                    </svg>

                  </span>
                  <h4 className="text-xl lg:text-2xl text-white my-2 underline md:text-center w-full">{item.label}</h4>
                </div>
              </Link>
            ))}
          </div>

          <div className='lg:pt-24 pt-14'>
            <h5 className='text-3xl'>Restricted Regions</h5>
            <p className='opacity-50  mt-3'>CMV Capitals LTD does not provide services for citizens/residents of the United States, Cuba, Iraq, Myanmar, North Korea, Sudan. The services of CMV Capitals LTD are not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation</p>

          </div>


        </div>

      </section>

      <Footer />
    </div>
  );
};

export default Hero5;
