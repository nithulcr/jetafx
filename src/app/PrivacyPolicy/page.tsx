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
          Privacy & Security Policy
          </h1>

        </div>
        <div className="max-w-[1300px] mx-auto px-6 pt-5 flex flex-col gap-10">

          <div className=''>
            <h5 className='text-3xl'>1. ABOUT JETAFX</h5>
            <p className='opacity-50  mt-3'>1.1 JetaFX is a globally operating forex broker that provides innovative trading services through digital platforms. We help traders and introducing brokers achieve their goals by offering a comprehensive range of trading products, competitive trading conditions, and premium customer support. JetaFX is committed to transparency and trust while delivering high-quality trading experiences.</p>
            <p className='opacity-50  mt-3'>1.2 For any questions regarding this Privacy and Security Policy or how we handle personal data, please contact us:</p>
            <p className='opacity-50  mt-3'>Email: support@jetafx.com
              <br></br>Postal Address: [Insert JetaFX Registered Address]</p>


          </div>

          <div className=''>
            <h5 className='text-3xl'>2. JETAFX’S COMMITMENT</h5>
            <p className='opacity-50  mt-3'>2.1 JetaFX is committed to safeguarding your personal and financial information. This policy outlines how we collect, use, store, and protect your data while using our websites and applications.</p>
            <p className='opacity-50  mt-3'>2.2 We ensure that all personal information is:`</p>
            <ul className='mt-3 opacity-50 list-disc pl-5'>
              <li>Used lawfully, fairly, and transparently</li>
              <li>Collected for explicit and legitimate purposes.</li>
              <li>Limited to what is necessary.</li>
              <li>Accurate and up-to-date.</li>
              <li>Retained only as long as necessary.</li>
              <li>Protected with appropriate security measures.</li>
              
            </ul>


          </div>

          <div className=''>
            <h5 className='text-3xl'>3. REASONS FOR COLLECTING PERSONAL INFORMATION</h5>
            <p className='opacity-50  mt-3'>3.1 We collect personal data to better understand our clients’ needs and enhance our services.</p>
            <p className='opacity-50  mt-3'>3.2 Purposes include:</p>
            <ul className='mt-3 opacity-50 list-disc pl-5'>
              <li>Identity verification</li>
              <li>Suitability assessments</li>
              <li>Account management</li>
              <li>Service provision</li>
              <li>Regulatory compliance</li>
              <li>Service improvement</li>
              <li>Marketing</li>
              
              
            </ul>


          </div>
          <div className=''>
            <h5 className='text-3xl'>4. PERSONAL INFORMATION COLLECTED FROM YOU</h5>
            <p className='opacity-50  mt-3'>4.1 Information may be collected via application forms, account usage, and communications. This includes:</p>
            <ul className='mt-3 opacity-50 list-disc pl-5 py-4'>
              <li>Name, address, date of birth</li>
              <li>Passport or ID number</li>
              <li>Tax identification number</li>
              <li>Email, phone number</li>
              <li>Employment and income data</li>
              <li>Card details and transaction history</li>

              
              
            </ul>
            <p className='opacity-50  mt-3'>4.2 We may derive and store usage data from our websites/apps such as pages visited, duration, frequency, and referring websites.</p>
            <p className='opacity-50  mt-3'>4.3 By using our services, you consent to processing of your data under applicable laws and regulations.</p>

            <p className='opacity-50  mt-3'>4.4 Failure to provide required data may result in our inability to offer services.</p>

            <p className='opacity-50  mt-3'>4.5 Any interaction (emails, calls, messages) may contain and store your personal data.</p>

            <p className='opacity-50  mt-3'>4.6 We may also collect call metadata and recordings, with prior notification.</p>

            


          </div>

          <div className=''>
            <h5 className='text-3xl'>5. USE OF PERSONAL INFORMATION</h5>
            <p className='opacity-50  mt-3'>5.1 Your data may be used to:</p>
            <ul className='mt-3 opacity-50 list-disc pl-5 py-4'>
              <li>Deliver requested services</li>
              <li>Confirm identity</li>
              <li>Maintain your profile and account</li>
              <li>Send operational updates</li>
              <li>Provide tailored services and marketing (with opt-out options)</li>
              <li>Generate anonymized data</li>

              
              
            </ul>
            <p className='opacity-50  mt-3'>5.2 You consent to these uses.</p>
            <p className='opacity-50  mt-3'>5.3 Marketing communications require your consent if you are not a business customer.</p>

            <p className='opacity-50  mt-3'>5.4 Opt-out options are provided in all marketing messages or via direct request to us</p>

            <p className='opacity-50  mt-3'>5.5 Business clients or existing customers may receive marketing based on legitimate interest</p>

            <p className='opacity-50  mt-3'>5.6 If your data is used for purposes beyond the original intent, we will inform you and explain the legal basis.</p>

            


          </div>
          

        </div>

      </section>

      <Footer />
    </div>
  );
};

export default Hero5;
