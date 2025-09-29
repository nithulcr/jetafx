"use client";
import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';


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
            AML & KYC Summary
          </h1>

        </div>
        <div className="max-w-[1300px] mx-auto px-6 pt-5 flex flex-col gap-10">

          <div className=''>
            <h5 className='text-3xl'>General</h5>
            <p className='opacity-50  mt-3'>In order to ensure the compliance with international trade standards we operate exclusively in accordance with the legislation on combating illicit money laundering and countering terrorism financing. To monitor the accordance with legal requirements and recommendations of FATF, we have established a Compliance department developing Anti-money laundering and Know your customer (AML / KYC) procedures, obligatory for all employees and customers and determining the policy of engagement with any person who intend to become out customer. The Compliance Department ensures that all the operations of the Company are consistent with the international standards to combat money laundering and all the documents provided by the Customer are up-to-date and comply with relevant legal requirements.</p>

          </div>
          <div className=''>
            <h5 className='text-3xl'>AML / KYC rules</h5>
            <p className='mt-3'>As our client you irrevocably agree with the following rules and undertake to observe them:</p>
            <ul className='mt-3 opacity-50 list-disc pl-5'>
              <li>You are obliged to follow AML and KYC requirements as a client. Upon the Company&apos;s request, additional documents and information must be provided. Filling out the respective KYC questionnaire may also be mandatory by the Company&apos;s sole decision. You agree and undertake to follow such requirements.</li>
              <li>Withdrawals of assets are only allowed to accounts belonging to you. Withdrawals to third-party accounts or internal transfers between customers are prohibited.</li>
              <li>The Company has the right and obligation to share your information with financial institutions and law enforcement agencies as required by law, without prior consent. Records of your transactions are held for at least five years.</li>
              <li>You must comply with laws aimed at combating illicit trafficking, financial fraud, money laundering, and legalization of illegal funds. You should avoid participation in illegal financial activities using the Company&aposs services.</li>
              <li>You guarantee legal origin, ownership, and rights to assets transferred to your account. In cases of suspicious transactions, untrusted cash replenishments, or fraudulent actions (including refunds or payment cancellations), the Company may investigate, block or close accounts or trading rooms, suspend operations, and cancel orders guided by applicable law and FATF recommendations.</li>
              <li>The Company may request additional information if withdrawal methods differ from deposit methods. Failure to provide requested information may result in blocking of your trading rooms or accounts during investigations.</li>
              <li>During investigations, the Company can request further identity verification documents, proof of residence, lawful possession, or legal origin of funds. Originals may be requested for review if doubts arise.</li>
              <li>The Company does not provide services to persons or entities located in FATF-blacklisted jurisdictions or citizens/residents of the USA.</li>
              <li>The Company can refuse operations it considers suspicious and use preventive measures (like blocking or closing accounts) without civil liability.</li>
              <li>The Company is not obliged to inform you or others about measures taken to comply with AML/CFT laws, suspicions, refusals of execution, or requests for documentation.</li>
              <li>This document summarizes rights and intentions regarding AML policies but may be supplemented by local AML rules. It is part of any agreement between you and the Company. Non-compliance may lead to agreement termination at the Company&apos;s discretion.</li>
              <li>This anti-money laundering and know your customer policy is an integral part of the agreement. Non-compliance may be grounds for termination at the Company&apos;s sole discretion.</li>
            </ul>

          </div>


        </div>

      </section>

      <Footer />
    </div>
  );
};

export default Hero5;
