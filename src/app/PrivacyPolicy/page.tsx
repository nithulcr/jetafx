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
        <div className="max-w-[1300px] mx-auto px-6 pt-6 lg:pt-12 flex flex-col gap-10">

          <div className=''>
            <h5 className='text-3xl  pb-3'>1. ABOUT JETAFX</h5>
            <p className='opacity-50  mt-3'>1.1 JetaFX is a globally operating forex broker that provides innovative trading services through digital platforms. We help traders and introducing brokers achieve their goals by offering a comprehensive range of trading products, competitive trading conditions, and premium customer support. JetaFX is committed to transparency and trust while delivering high-quality trading experiences.</p>
            <p className='opacity-50  mt-3'>1.2 For any questions regarding this Privacy and Security Policy or how we handle personal data, please contact us:</p>
            <p className='opacity-50  mt-3'>Email: support@jetafx.com
              <br></br>Postal Address: [Insert JetaFX Registered Address]</p>


          </div>

          <div className=''>
            <h5 className='text-3xl  pb-3'>2. JETAFX’S COMMITMENT</h5>
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
            <h5 className='text-3xl  pb-3'>3. REASONS FOR COLLECTING PERSONAL INFORMATION</h5>
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
            <h5 className='text-3xl  pb-3'>4. PERSONAL INFORMATION COLLECTED FROM YOU</h5>
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
            <h5 className='text-3xl  pb-3'>5. USE OF PERSONAL INFORMATION</h5>
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
          <div className=''>
            <h5 className='text-3xl  pb-3'>6. DISCLOSURE AND SHARING OF PERSONAL INFORMATION</h5>
            <p className='opacity-50  mt-3'>6.1 JetaFX does not sell or rent personal information. We may share your data with:</p>
            <ul className='mt-3 opacity-50 list-disc pl-5 py-4'>
              <li>Regulators and authorities</li>
              <li>Financial institutions</li>
              <li>Professional service providers</li>
              <li>Designated third parties at your request</li>
              <li>Parties involved in transactions or legal obligations</li>

            </ul>
            <p className='opacity-50  mt-3'>6.2 In case of business reorganization or sale, your data may be shared or transferred to the new entity.</p>


          </div>

          <div className=''>
            <h5 className='text-3xl  pb-3'>7. YOUR RIGHTS</h5>
            <p className='opacity-50  mt-3'>7.1 You are not obligated to provide data, but without it, services may be limited.</p>
            <p className='opacity-50  mt-3'>7.2 You have the right to:</p>

            <ul className='mt-3 opacity-50 list-disc pl-5 py-4'>
              <li>Be informed about data use</li>
              <li>Access your personal data</li>
              <li>Request corrections</li>
              <li>Request erasure (with exceptions)</li>
              <li>Object to processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent</li>
              <li>File complaints with data protection authorities</li>


            </ul>


          </div>
          <div className=''>
            <h5 className='text-3xl  pb-3'>8. UPDATING YOUR INFORMATION</h5>
            <p className='opacity-50  mt-3'>8.1 Contact us at support@jetafx.com to update or review your information</p>
            <p className='opacity-50  mt-3'>8.2 We will comply with your request unless restricted by regulatory or legal requirements.</p>



          </div>
          <div className=''>
            <h5 className='text-3xl  pb-3'>9. ACCESSING YOUR INFORMATION</h5>
            <p className='opacity-50  mt-3'>9.1 You may request a copy of your data, subject to identification and processing</p>
            <p className='opacity-50  mt-3'>9.2 Requests must be made in writing. A fee may be charged.</p>
            <p className='opacity-50  mt-3'>9.3 We may verify identity before releasing data.</p>
            <p className='opacity-50  mt-3'>9.4 We will respond within one month unless extended.</p>
            <p className='opacity-50  mt-3'>9.5 Corrections, deletions, and restrictions will be made if appropriate</p>
            <p className='opacity-50  mt-3'>9.6 Some information may be exempt from access under data protection laws.</p>


          </div>
          <div className=''>
            <h5 className='text-3xl  pb-3'>10. COOKIES AND WEBSITE INFORMATION</h5>
            <p className='opacity-50  mt-3'>10.1 We use cookies and similar tools to collect information about your usage.</p>
            <p className='opacity-50  mt-3'>10.2 Data may be used for personalized advertising by us or third parties.</p>
            <p className='opacity-50  mt-3'>10.3 Cookies are retained until expired or deleted.</p>
            <p className='opacity-50  mt-3'>10.4 You can disable cookies via browser settings, though some functionality may be impaired.</p>
            <p className='opacity-50  mt-3'>10.5 We do not control third-party privacy policies. Always review their policies when accessing their sites.</p>



          </div>
          <div className=''>
            <h5 className='text-3xl  pb-3'>11. CONTENT INFORMATION</h5>
            <p className='opacity-50  mt-3'>11.1 Content you post (e.g. reviews, photos) may be published on our platforms.</p>
            <p className='opacity-50  mt-3'>11.2 This content may be displayed even after account closure unless requested for removal.</p>

          </div>
          <div className=''>
            <h5 className='text-3xl  pb-3'>12. INFORMATION COLLECTED AT OUR PREMISES</h5>
            <p className='opacity-50  mt-3'>12.1 We log visitor information such as time, person visited, and vehicle registration</p>
            <p className='opacity-50  mt-3'>12.2 CCTV surveillance is used for security purposes with visible notices.</p>
            <p className='opacity-50  mt-3'>12.3 Such data is used for legitimate interest in safety and operations.</p>


          </div>
          <div className=''>
            <h5 className='text-3xl  pb-3'>13. STORAGE OF INFORMATION</h5>
            <p className='opacity-50  mt-3'>13.1 Our servers are located in secure data centers. Your data may be transferred and processed outside your country.</p>
            <p className='opacity-50  mt-3'>13.2 Transfers only occur with appropriate protections in place.</p>
            <p className='opacity-50  mt-3'>13.3 Adequacy decisions and standard contractual clauses are used where necessary.</p>
            <p className='opacity-50  mt-3'>13.4 You consent to these transfers by using our services.</p>



          </div>
          <div className=''>
            <h5 className='text-3xl  pb-3'>14. DATA SECURITY</h5>
            <p className='opacity-50  mt-3'>14.1 We implement strong data protection measures including encryption and controlled access.</p>
            <p className='opacity-50  mt-3'>14.2 Access is limited to authorized personnel only</p>
            <p className='opacity-50  mt-3'>14.3 Breach protocols are in place, and you will be notified if necessary.</p>


          </div>
          <div className=''>
            <h5 className='text-3xl  pb-3'>15. RETENTION OF INFORMATION</h5>
            <p className='opacity-50  mt-3'>15.1 Data is retained based on:</p>
            <ul className='mt-3 opacity-50 list-disc pl-5 py-4'>
              <li>Purpose of use</li>
              <li>Legal and regulatory obligations</li>
              <li>Risk assessment</li>


            </ul>
            <p className='opacity-50  mt-3'>15.2 Typically, we keep data for five (5) years.</p>
            <p className='opacity-50  mt-3'>15.3 Data may be retained longer for legal defense purposes.</p>
            <p className='opacity-50  mt-3'>15.4 We may anonymize data for indefinite use where appropriate.</p>



          </div>
          <div className=''>
            <h5 className='text-3xl  pb-3'>16. YOUR CONSENT</h5>
            <p className='opacity-50  mt-3'>16.1 By using our website or services, you agree to the collection and processing of your data as described.</p>
          </div>
          <div className=''>
            <h5 className='text-3xl  pb-3'>17. AMENDMENTS TO POLICY</h5>
            <p className='opacity-50  mt-3'>17.1 We may update this policy periodically. Updates will be published on our website or communicated directly where applicable.</p>
            <p className='opacity-50  mt-3'>17.2 Continued use of our services implies acceptance of updated policies.</p>

          </div>
        </div>



      </section >

      <Footer />
    </div >
  );
};

export default Hero5;
