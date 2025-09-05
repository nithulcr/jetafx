'use client';


import React from 'react';
import Heading from '@/components/Heading';
import Image from 'next/image';

// Step data as array of objects
const STEPS = [
  {
    icon: (
      <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.583 14.457C13.2371 14.4571 14.021 14.527 14.8691 14.6465C14.5799 15.1822 14.3361 15.7437 14.1328 16.3262C13.6212 16.2665 13.0994 16.2276 12.583 16.2275C10.3434 16.2275 8.05789 16.7764 6.33105 17.4424C5.46793 17.7753 4.7259 18.1445 4.19043 18.502C3.92417 18.6797 3.69186 18.866 3.52051 19.0557C3.3637 19.2293 3.18665 19.483 3.18652 19.79V21.8945H13.751C13.8687 22.5055 14.0406 23.0978 14.2598 23.665H1.41602V19.79C1.41612 18.9999 1.80624 18.2725 2.53027 17.6035C3.25809 16.9312 4.29035 16.3515 5.47461 15.8779C7.84408 14.9305 10.6982 14.457 12.583 14.457ZM24.3076 17.1025C22.7482 17.1026 21.5616 18.2892 21.5615 19.8486C21.5615 21.3087 22.7658 22.4775 24.3076 22.4775C25.7504 22.4775 26.9365 21.2914 26.9365 19.8486C26.9365 18.3068 25.7677 17.1025 24.3076 17.1025ZM12.583 1.33203C13.9974 1.33212 15.3534 1.89441 16.3535 2.89453C17.3536 3.89465 17.9159 5.25067 17.916 6.66504C17.916 8.07953 17.3537 9.43633 16.3535 10.4365C15.3534 11.4365 13.9973 11.9989 12.583 11.999C11.1685 11.999 9.81172 11.4367 8.81152 10.4365C7.81133 9.43633 7.24902 8.07953 7.24902 6.66504C7.24911 5.25075 7.81151 3.89463 8.81152 2.89453C9.81172 1.89434 11.1685 1.33203 12.583 1.33203ZM12.583 3.24902C11.677 3.24902 10.8077 3.60848 10.167 4.24902C9.52632 4.8897 9.1661 5.759 9.16602 6.66504C9.16602 7.5712 9.52624 8.44031 10.167 9.08105C10.8077 9.7218 11.6769 10.082 12.583 10.082C13.489 10.0819 14.3584 9.72173 14.999 9.08105C15.6396 8.44034 15.999 7.57104 15.999 6.66504C15.9989 5.759 15.6397 4.8897 14.999 4.24902C14.3584 3.60835 13.489 3.24911 12.583 3.24902ZM19.3242 18.8184L19.1338 18.6689L17.6885 17.5293L18.9658 15.1885H18.9688L20.7422 15.8809L20.9854 15.9756L21.2021 15.8311C21.3638 15.7233 21.5478 15.6186 21.7617 15.4902C21.9634 15.3692 22.188 15.2294 22.3789 15.0732L22.5156 14.9609L22.5518 14.7871L22.9209 12.999H25.5723L25.7949 14.749L25.8271 14.999L26.0459 15.1221C26.5462 15.4035 26.9672 15.6113 27.2969 15.8311L27.5186 15.9785L27.7637 15.8779L29.4248 15.1963L30.8057 17.5322L29.3652 18.6689L29.1748 18.8184V20.7617L29.3652 20.9121L30.8057 22.0479L29.4248 24.3828L27.7637 23.7031L27.5186 23.6016L27.2969 23.749C26.9672 23.9688 26.5463 24.1775 26.0459 24.459L25.8271 24.582L25.7949 24.832L25.5723 26.582H22.9209L22.5518 24.7939L22.5156 24.6201L22.3789 24.5078L22.2295 24.3936C22.0764 24.2827 21.913 24.1806 21.7617 24.0898C21.5477 23.9614 21.3639 23.8569 21.2021 23.749L20.9854 23.6045L20.7422 23.6992L18.9707 24.3906C18.969 24.3905 18.9674 24.3908 18.9658 24.3906L17.6885 22.0508L19.1338 20.9121L19.3242 20.7617V18.8184Z" fill="#FFD700" stroke="#FFD700" />
      </svg>

    ),
    title: "Sign up",
    desc: "Select the type of account you need and fill out our quick, secure registration form.",
  },
  {
    icon: (
      <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.625 15.75C20.3929 15.75 20.1704 15.8422 20.0063 16.0063C19.8422 16.1704 19.75 16.3929 19.75 16.625C19.75 16.8571 19.8422 17.0796 20.0063 17.2437C20.1704 17.4078 20.3929 17.5 20.625 17.5H24.125C24.3571 17.5 24.5796 17.4078 24.7437 17.2437C24.9078 17.0796 25 16.8571 25 16.625C25 16.3929 24.9078 16.1704 24.7437 16.0063C24.5796 15.8422 24.3571 15.75 24.125 15.75H20.625ZM0.5 4.8125C0.5 3.53615 1.00703 2.31207 1.90955 1.40955C2.81207 0.50703 4.03615 0 5.3125 0H23.6875C24.9639 0 26.1879 0.50703 27.0905 1.40955C27.993 2.31207 28.5 3.53615 28.5 4.8125V16.1875C28.5 17.4639 27.993 18.6879 27.0905 19.5905C26.1879 20.493 24.9639 21 23.6875 21H5.3125C4.03615 21 2.81207 20.493 1.90955 19.5905C1.00703 18.6879 0.5 17.4639 0.5 16.1875V4.8125ZM5.3125 1.75C4.50027 1.75 3.72132 2.07266 3.14699 2.64699C2.57266 3.22132 2.25 4.00027 2.25 4.8125V7H26.75V4.8125C26.75 4.00027 26.4273 3.22132 25.853 2.64699C25.2787 2.07266 24.4997 1.75 23.6875 1.75H5.3125ZM26.75 8.75H2.25V16.1875C2.25 17.878 3.622 19.25 5.3125 19.25H23.6875C24.4997 19.25 25.2787 18.9273 25.853 18.353C26.4273 17.7787 26.75 16.9997 26.75 16.1875V8.75Z" fill="#FFD700" />
      </svg>

    ),
    title: "KYC",
    desc: "Use our streamlined digital process for fast and efficient identity verification.",
  },
  {
    icon: (
      <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.625 15.75C20.3929 15.75 20.1704 15.8422 20.0063 16.0063C19.8422 16.1704 19.75 16.3929 19.75 16.625C19.75 16.8571 19.8422 17.0796 20.0063 17.2437C20.1704 17.4078 20.3929 17.5 20.625 17.5H24.125C24.3571 17.5 24.5796 17.4078 24.7437 17.2437C24.9078 17.0796 25 16.8571 25 16.625C25 16.3929 24.9078 16.1704 24.7437 16.0063C24.5796 15.8422 24.3571 15.75 24.125 15.75H20.625ZM0.5 4.8125C0.5 3.53615 1.00703 2.31207 1.90955 1.40955C2.81207 0.50703 4.03615 0 5.3125 0H23.6875C24.9639 0 26.1879 0.50703 27.0905 1.40955C27.993 2.31207 28.5 3.53615 28.5 4.8125V16.1875C28.5 17.4639 27.993 18.6879 27.0905 19.5905C26.1879 20.493 24.9639 21 23.6875 21H5.3125C4.03615 21 2.81207 20.493 1.90955 19.5905C1.00703 18.6879 0.5 17.4639 0.5 16.1875V4.8125ZM5.3125 1.75C4.50027 1.75 3.72132 2.07266 3.14699 2.64699C2.57266 3.22132 2.25 4.00027 2.25 4.8125V7H26.75V4.8125C26.75 4.00027 26.4273 3.22132 25.853 2.64699C25.2787 2.07266 24.4997 1.75 23.6875 1.75H5.3125ZM26.75 8.75H2.25V16.1875C2.25 17.878 3.622 19.25 5.3125 19.25H23.6875C24.4997 19.25 25.2787 18.9273 25.853 18.353C26.4273 17.7787 26.75 16.9997 26.75 16.1875V8.75Z" fill="#FFD700" />
      </svg>

    ),
    title: "Add Funds",
    desc: "Deposit money into your trading account through multiple convenient payment options.",
  },
  {
    icon: (
      <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1393_2081)">
          <path d="M3.64583 7.51042V1.09375M3.64583 14.8021V19.1771M11.6667 18.5938V14.2188M11.6667 28.0729V33.9062M21.5833 26.0313V31.8646M25.1562 9.98958L29.5312 4.73958M29.5312 4.73958L33.9062 9.98958M29.5312 4.73958V27.4896M6.19792 13.3438C6.19792 14.2188 5.61458 14.8021 4.73958 14.8021H2.55208C1.67708 14.8021 1.09375 14.2188 1.09375 13.3438V8.96875C1.09375 8.09375 1.67708 7.51042 2.55208 7.51042H4.73958C5.61458 7.51042 6.19792 8.09375 6.19792 8.96875V13.3438ZM14.2188 26.6146C14.2188 27.4896 13.6354 28.0729 12.7604 28.0729H10.5729C9.69792 28.0729 9.11458 27.4896 9.11458 26.6146V20.0521C9.11458 19.1771 9.69792 18.5938 10.5729 18.5938H12.7604C13.6354 18.5938 14.2188 19.1771 14.2188 20.0521V26.6146ZM24.1354 24.5729C24.1354 25.4479 23.5521 26.0313 22.6771 26.0313H20.4896C19.6146 26.0313 19.0312 25.4479 19.0312 24.5729V18.7396C19.0312 17.8646 19.6146 17.2813 20.4896 17.2813H22.6771C23.5521 17.2813 24.1354 17.8646 24.1354 18.7396V24.5729Z" stroke="#FFD700" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1393_2081">
            <rect width="35" height="35" fill="white" />
          </clipPath>
        </defs>
      </svg>

    ),
    title: "Start Trading",
    desc: "Begin trading live and explore over 2,200+ available instruments.",
  },
];

const AccountProcess = () => {
  return (
    <div className="py-14 lg:py-24 account_process relative">
      <div className="max-w-[1460px] mx-auto px-6">
        <Heading
          badgeText="ACCOUNT PROCESS"
          title="Open Your Account In 4 Easy Steps!"
          subtitle="Open the trade account which is best for you"
          maxWidthClass=""
        />
        <div className=" mt-14 md:mt-24">
          <div className="relative w-fit mx-auto flex justify-center items-center">
            {/* Center Logo */}
            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 w-16 h-16  bg-[#070824] flex items-center justify-center rounded-lg">
              <Image src="/logo-icon.png" alt="logo icon" className='p-[2px] shuffle ' width={50} height={50} />
            </div>
            {/* Grid for steps */}
            <div className="grid grid-cols-2 grid-rows-2 gap-x-12 md:gap-x-16 gap-y-12 w-full max-w-2xl z-10">
              {STEPS.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center lg:p-2">
                  <span className="w-10 h-10 md:w-13 md:h-13 flex items-center justify-center shadow-[inset_0px_2px_4px_rgba(138,165,255,0.5)] p-2 rounded-lg">
                    {step.icon}
                  </span>
                  <div className='mt-4'>
                    <div className="text-xl mb-2">{step.title}</div>
                    <div className="text-xs md:text-sm text-[#E6ECFF] leading-normal">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Lines */}
            <span className="absolute lg:left-[-10%] left-[0] top-1/2 lg:w-[60%] w-[50%] h-[3px] bg-gradient-to-l  from-[#8aa5ff42] to-transparent">
              <span className='animate-move-x point point1 absolute left-50 -translate-x-1/2 top-[.04rem] w-[50px] h-[2px] bg-gradient-to-r  from-[#8AA5FF] to-transparent'></span>
            </span>
            <span className="absolute left-[50%] top-1/2 lg:w-[60%] w-[50%] h-[3px] bg-gradient-to-r  from-[#8aa5ff42] to-transparent">
              <span className='animate-move-x2 point point2 absolute left-50 -translate-x-1/2 top-[.04rem] w-[50px] h-[2px] bg-gradient-to-l  from-[#8AA5FF] to-transparent'></span>
            </span>

            <span className="absolute left-1/2 top-1/2 h-[50%] lg:h-[60%] w-[3px] bg-gradient-to-b from-[#8aa5ff42] to-transparent">
              <span className='animate-move-y point point3 absolute left-1/2  top-1/2 h-[50px] w-[2px] bg-gradient-to-t  from-[#8AA5FF] to-transparent'></span>
            </span>
            <span className="absolute left-1/2 top-[0%] lg:top-[-10%] h-[50%] lg:h-[60%] w-[3px] bg-gradient-to-t from-[#8aa5ff42] to-transparent ">
              <span className='animate-move-y2 point point4 absolute left-1/2  top-1/2 -translate-y-1/2 h-[50px] w-[2px] bg-gradient-to-b  from-[#8AA5FF] to-transparent'></span>
            </span>
            <style jsx>{`
              @keyframes moveX {
                0% { left: 100%; }
                100% { left: 0%; }
              }
                @keyframes moveX2 {
                0% { left: 0%; }
                100% { left: 100%; }
              }
              @keyframes moveY {
                0% { top: 0%; }
                100% { top: 100%; }
              }
                @keyframes moveY2 {
                0% { top: 100%; }
                100% { top: 0%; }
              }
              .animate-move-x {
                animation: moveX 5s linear infinite;
              }
                .animate-move-x2 {
                animation: moveX2 5s linear infinite;
              }
              .animate-move-y {
                animation: moveY 5s linear infinite;
              }
                .animate-move-y2 {
                animation: moveY2 5s linear infinite;
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountProcess;
