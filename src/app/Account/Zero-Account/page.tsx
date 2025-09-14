"use client";
import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import Heading from '@/Components/Heading';
import Header from '@/Components/Header';
import FAQAccount from '@/Components/FAQAccount';

import Footer from '@/Components/Footer';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const provideItems = [
  {
    label: "Low Spreads",
    description: "Trade Smarter- The greatest method to have close and raw supertight spreads with zero hidden markups is through a completely .",
    icon: (
      <svg width="26" height="26" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.0978 6.33372C19.0978 6.04268 18.9822 5.76355 18.7764 5.55775C18.5706 5.35195 18.2914 5.23633 18.0004 5.23633C17.7093 5.23633 17.4302 5.35195 17.2244 5.55775C17.0186 5.76355 16.903 6.04268 16.903 6.33372V7.01039H16.8286C15.2974 7.01039 14.4078 8.16977 14.2313 9.28539C14.0549 10.3864 14.523 11.7646 15.9303 12.2721L19.3749 13.5131C19.4945 13.5568 19.5397 13.6152 19.563 13.6589C19.5922 13.7173 19.6111 13.8048 19.5922 13.9068C19.58 13.9907 19.5412 14.0685 19.4813 14.1285C19.4449 14.1621 19.3807 14.2029 19.2451 14.2029H16.8286C16.7666 14.2021 16.7053 14.1892 16.6482 14.1647C16.5912 14.1402 16.5395 14.1048 16.4962 14.0604C16.4529 14.016 16.4187 13.9634 16.3957 13.9058C16.3726 13.8482 16.3612 13.7866 16.362 13.7246C16.362 13.4337 16.2464 13.1548 16.0408 12.9491C15.8351 12.7434 15.5561 12.6279 15.2653 12.6279C14.9744 12.6279 14.6955 12.7434 14.4898 12.9491C14.2842 13.1548 14.1686 13.4337 14.1686 13.7246C14.1686 15.1916 15.3499 16.3977 16.8286 16.3977H16.9395V17.2712C16.9395 17.5623 17.0551 17.8414 17.2609 18.0472C17.4667 18.253 17.7458 18.3686 18.0369 18.3686C18.3279 18.3686 18.607 18.253 18.8128 18.0472C19.0186 17.8414 19.1342 17.5623 19.1342 17.2712V16.3977H19.2451C22.1092 16.3977 22.783 12.4091 20.1186 11.4481L16.6755 10.2085C16.6261 10.1935 16.5804 10.1685 16.541 10.1351C16.5016 10.1018 16.4695 10.0608 16.4465 10.0146C16.391 9.89485 16.3736 9.76092 16.397 9.63102C16.4127 9.50782 16.4674 9.39286 16.553 9.30289C16.6055 9.25039 16.6828 9.20518 16.8286 9.20518H19.1722C19.4201 9.20518 19.6374 9.40935 19.6374 9.68352C19.6374 9.97456 19.753 10.2537 19.9588 10.4595C20.1646 10.6653 20.4437 10.7809 20.7348 10.7809C21.0258 10.7809 21.3049 10.6653 21.5107 10.4595C21.7165 10.2537 21.8322 9.97456 21.8322 9.68352C21.8322 8.21643 20.6509 7.01039 19.1722 7.01039H19.0978V6.33372ZM14.2561 19.4558C12.9976 19.4558 12.0365 19.7562 11.2476 20.2491C10.5184 20.7041 9.98612 21.2991 9.56029 21.7746L9.51508 21.8256C9.05425 22.3389 8.69987 22.721 8.24196 23.001C7.81612 23.2621 7.243 23.4662 6.333 23.4662C6.18887 23.4658 6.0461 23.4939 5.91287 23.5489C5.77964 23.6039 5.65859 23.6847 5.55668 23.7866C5.45477 23.8885 5.374 24.0095 5.31903 24.1428C5.26405 24.276 5.23595 24.4188 5.23633 24.5629V29.6671C5.23633 30.2737 5.72779 30.7637 6.333 30.7637H20.1901C22.7334 30.7637 25.1863 29.3929 26.9028 28.1621C27.9324 27.4182 28.8996 26.5915 29.7947 25.6902L29.8005 25.6843C30.3313 25.2468 30.6609 24.681 30.744 24.0554C30.8286 23.4196 30.642 22.8158 30.3065 22.3491C29.9308 21.8234 29.3645 21.4651 28.7284 21.3507C28.0924 21.2363 27.4368 21.3748 26.9013 21.7366C26.6136 21.9408 26.3321 22.143 26.057 22.3433C25.2242 22.9471 24.4207 23.5304 23.5588 24.0189C22.4359 24.6562 21.3378 25.0573 20.1901 25.0573H15.8122C15.5205 25.0573 15.3995 24.9668 15.3572 24.9231C15.328 24.8946 15.3051 24.8602 15.29 24.8223C15.275 24.7843 15.268 24.7437 15.2697 24.7029C15.2678 24.6619 15.2747 24.6209 15.2897 24.5827C15.3048 24.5445 15.3278 24.5099 15.3572 24.4812C15.4009 24.4375 15.5205 24.3471 15.8122 24.3471H18.7317C19.509 24.3471 20.1988 24.1035 20.7063 23.6339C20.9457 23.4132 21.1367 23.1454 21.2673 22.8472C21.398 22.549 21.4654 22.227 21.4654 21.9014C21.4654 21.5759 21.398 21.2539 21.2673 20.9557C21.1367 20.6575 20.9457 20.3896 20.7063 20.1689C20.1988 19.6993 19.509 19.4543 18.7317 19.4543L14.2561 19.4558Z" fill="#FBD00B" />
      </svg>

    ),
  },
  {
    label: "Leverage 1:2000",
    description: "Unleashing full trading power would be 1:2000 leverage. Be a beginner or professional; flexible, tailor-fitted leverage that suits your strategy.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.3548 0.922346C17.2085 0.918052 17.0628 0.94317 16.9264 0.99621C16.79 1.04925 16.6656 1.12913 16.5606 1.23113C16.4556 1.33312 16.3721 1.45515 16.3152 1.58999C16.2582 1.72483 16.2289 1.86972 16.229 2.0161V13.6769C16.229 14.2807 16.719 14.7707 17.3227 14.7707H28.9836C29.1299 14.7707 29.2748 14.7414 29.4097 14.6845C29.5445 14.6275 29.6665 14.5441 29.7685 14.4391C29.8705 14.3341 29.9504 14.2097 30.0034 14.0733C30.0565 13.9368 30.0816 13.7912 30.0773 13.6448C29.9763 10.3026 28.6035 7.12497 26.2391 4.76058C23.8747 2.39619 20.697 1.02336 17.3548 0.922346ZM13.6856 4.14089C13.7978 4.24344 13.8874 4.36824 13.9487 4.50735C14.0099 4.64646 14.0415 4.7968 14.0415 4.9488V13.6769C14.0415 14.5472 14.3872 15.3818 15.0025 15.9971C15.6179 16.6125 16.4525 16.9582 17.3227 16.9582H26.0217C26.1738 16.9581 26.3243 16.9898 26.4635 17.0513C26.6027 17.1127 26.7275 17.2025 26.83 17.3149C26.9326 17.4273 27.0105 17.5598 27.0589 17.7041C27.1073 17.8483 27.125 18.0011 27.111 18.1526C26.8791 20.6351 25.945 23.0002 24.4179 24.9711C22.8908 26.9421 20.834 28.4373 18.4881 29.2819C16.1422 30.1266 13.6042 30.2856 11.1713 29.7404C8.73828 29.1952 6.51089 27.9683 4.74974 26.2034C2.98859 24.4385 1.76653 22.2085 1.22656 19.7743C0.686592 17.3402 0.851048 14.8026 1.70069 12.4585C2.55032 10.1144 4.05 8.0608 6.02422 6.53796C7.99844 5.01511 10.3656 4.08603 12.8485 3.85943C13 3.84558 13.1526 3.86345 13.2968 3.91192C13.4409 3.96038 13.5733 4.03836 13.6856 4.14089Z" fill="#F4CA13" />
      </svg>

    ),
  },
  {
    label: "Completely Markup and Pure Pricing:",
    description: "With zero markup, you can trade without hidden markups with our Zero Account.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M37.6243 2.6875H30.9055V5.375H37.6243V37.625H30.9055V40.3125H37.6243C39.1024 40.3125 40.3118 39.1031 40.3118 37.625V5.375C40.3118 3.89688 39.1024 2.6875 37.6243 2.6875ZM30.9055 27.5738C30.9055 21.3656 25.8262 20.6669 21.7412 20.1025C17.2934 19.4844 14.7805 18.9469 14.7805 15.1172C14.7805 11.9056 18.1534 10.7634 21.029 10.7634C24.1465 10.7634 26.5921 11.9191 28.5137 14.2975L30.6099 12.6044C28.5674 10.0781 25.9605 8.61344 22.843 8.19688V4.03125H20.1555V8.08938C15.2912 8.385 12.093 11.1262 12.093 15.1037C12.093 21.4597 17.2396 22.1719 21.3784 22.7497C25.7455 23.3544 28.218 23.8784 28.218 27.5603C28.218 31.6319 24.0121 32.2366 21.4993 32.2366C16.8902 32.2366 14.9418 30.9466 13.1412 28.7025L11.0449 30.3956C13.4234 33.3384 16.0571 34.6553 20.1555 34.8837V38.9688H22.843V34.8837C27.8552 34.4806 30.9055 31.7528 30.9055 27.5738Z" fill="#F0C81C" />
        <path d="M5.375 5.375H12.0938V2.6875H5.375C3.89688 2.6875 2.6875 3.89688 2.6875 5.375V37.625C2.6875 39.1031 3.89688 40.3125 5.375 40.3125H12.0938V37.625H5.375V5.375Z" fill="#F0C81C" />
      </svg>


    ),
  },
  {
    label: "Spreads From",
    description: "Spreads starting at just $0.03 per 1k lot an excellent example of highly efficient execution on our top FX trading platform.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_14085)">
          <path d="M13.625 26.5293V22.1543H20.1875V26.5293H13.625Z" fill="#FBD00B" />
          <path d="M20.8284 0.279297H9.25C8.08968 0.279297 6.97688 0.740233 6.15641 1.5607C5.33594 2.38118 4.875 3.49397 4.875 4.6543V30.9043C4.875 32.0646 5.33594 33.1774 6.15641 33.9979C6.97688 34.8184 8.08968 35.2793 9.25 35.2793H26.75C27.9103 35.2793 29.0231 34.8184 29.8436 33.9979C30.6641 33.1774 31.125 32.0646 31.125 30.9043V10.5759C31.1249 9.99575 30.8943 9.43944 30.4841 9.0293L22.375 0.920234C21.9649 0.50997 21.4086 0.279421 20.8284 0.279297ZM21.2812 7.93555V3.56055L27.8438 10.123H23.4688C22.8886 10.123 22.3322 9.89258 21.922 9.48234C21.5117 9.07211 21.2812 8.51571 21.2812 7.93555ZM7.0625 19.9668H28.9375V22.1543H22.375V26.5293H28.9375V28.7168H22.375V33.0918H20.1875V28.7168H13.625V33.0918H11.4375V28.7168H7.0625V26.5293H11.4375V22.1543H7.0625V19.9668Z" fill="#FBD00B" />
          <g clipPath="url(#clip1_1_14085)">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.5 9.2793C19.5 10.8706 18.8679 12.3967 17.7426 13.5219C16.6174 14.6472 15.0913 15.2793 13.5 15.2793C11.9087 15.2793 10.3826 14.6472 9.25736 13.5219C8.13214 12.3967 7.5 10.8706 7.5 9.2793C7.5 7.688 8.13214 6.16187 9.25736 5.03666C10.3826 3.91144 11.9087 3.2793 13.5 3.2793C15.0913 3.2793 16.6174 3.91144 17.7426 5.03666C18.8679 6.16187 19.5 7.688 19.5 9.2793ZM14.1429 6.06501C14.1429 5.89451 14.0751 5.731 13.9546 5.61044C13.834 5.48988 13.6705 5.42215 13.5 5.42215C13.3295 5.42215 13.166 5.48988 13.0454 5.61044C12.9249 5.731 12.8571 5.89451 12.8571 6.06501V6.50215C12.4797 6.54276 12.129 6.71629 11.8678 6.99172C11.6065 7.26714 11.4518 7.62651 11.4312 8.00556C11.4106 8.38461 11.5254 8.75864 11.7553 9.06077C11.9851 9.3629 12.3149 9.57343 12.6857 9.65473L13.9491 9.93158C14.0529 9.95371 14.1448 10.0135 14.207 10.0995C14.2692 10.1854 14.2973 10.2914 14.2859 10.3968C14.2744 10.5023 14.2243 10.5998 14.1452 10.6704C14.066 10.7411 13.9635 10.7799 13.8574 10.7793H13.1426C13.054 10.7792 12.9677 10.7518 12.8954 10.7007C12.8231 10.6496 12.7684 10.5773 12.7389 10.4939C12.682 10.333 12.5636 10.2014 12.4097 10.1278C12.2558 10.0543 12.079 10.0449 11.9181 10.1017C11.7573 10.1586 11.6256 10.277 11.5521 10.4309C11.4786 10.5848 11.4692 10.7616 11.526 10.9224C11.7309 11.5002 12.2374 11.9373 12.8571 12.041V12.4936C12.8571 12.6641 12.9249 12.8276 13.0454 12.9482C13.166 13.0687 13.3295 13.1364 13.5 13.1364C13.6705 13.1364 13.834 13.0687 13.9546 12.9482C14.0751 12.8276 14.1429 12.6641 14.1429 12.4936V12.041C14.5352 11.9743 14.8921 11.7732 15.1524 11.4722C15.4128 11.1712 15.5603 10.789 15.5699 10.3912C15.5794 9.99336 15.4503 9.60459 15.2046 9.29149C14.959 8.97839 14.6121 8.76045 14.2234 8.67501L12.9609 8.39901C12.8858 8.38205 12.8195 8.33807 12.7747 8.27544C12.73 8.21281 12.7098 8.1359 12.7181 8.05935C12.7263 7.98281 12.7624 7.91197 12.8195 7.86033C12.8766 7.80869 12.9507 7.77985 13.0277 7.7793H13.8574C13.946 7.77935 14.0323 7.80682 14.1046 7.85792C14.1769 7.90903 14.2316 7.98128 14.2611 8.06473C14.2893 8.14436 14.3328 8.21768 14.3893 8.28048C14.4458 8.34329 14.5141 8.39436 14.5903 8.43077C14.6665 8.46719 14.7491 8.48823 14.8335 8.49271C14.9178 8.49719 15.0022 8.48501 15.0819 8.45687C15.1615 8.42873 15.2348 8.38518 15.2976 8.3287C15.3604 8.27223 15.4115 8.20394 15.4479 8.12773C15.4843 8.05152 15.5054 7.96888 15.5098 7.88454C15.5143 7.80019 15.5021 7.71579 15.474 7.63615C15.372 7.34795 15.1948 7.09226 14.9608 6.89558C14.7267 6.69891 14.4443 6.5684 14.1429 6.51758V6.06501Z" fill="black" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_14085">
            <rect width="35" height="35" fill="white" transform="translate(0.5 0.279297)" />
          </clipPath>
          <clipPath id="clip1_1_14085">
            <rect width="12" height="12" fill="white" transform="translate(7.5 3.2793)" />
          </clipPath>
        </defs>
      </svg>

    ),
  },
  {
    label: "Security",
    description: "Jetafx ensures top-tier security with advanced encryption and strict protocols, keeping your funds and data protected at all.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.4997 24.7913C18.2732 24.7913 19.0151 24.4841 19.5621 23.9371C20.109 23.3901 20.4163 22.6482 20.4163 21.8747C20.4163 21.1011 20.109 20.3593 19.5621 19.8123C19.0151 19.2653 18.2732 18.958 17.4997 18.958C16.7261 18.958 15.9843 19.2653 15.4373 19.8123C14.8903 20.3593 14.583 21.1011 14.583 21.8747C14.583 22.6482 14.8903 23.3901 15.4373 23.9371C15.9843 24.4841 16.7261 24.7913 17.4997 24.7913ZM26.2497 11.6663C27.0232 11.6663 27.7651 11.9736 28.3121 12.5206C28.8591 13.0676 29.1663 13.8095 29.1663 14.583V29.1663C29.1663 29.9399 28.8591 30.6818 28.3121 31.2287C27.7651 31.7757 27.0232 32.083 26.2497 32.083H8.74967C7.97613 32.083 7.23426 31.7757 6.68728 31.2287C6.1403 30.6818 5.83301 29.9399 5.83301 29.1663V14.583C5.83301 13.8095 6.1403 13.0676 6.68728 12.5206C7.23426 11.9736 7.97613 11.6663 8.74967 11.6663H10.208V8.74967C10.208 6.8158 10.9762 4.96114 12.3437 3.59369C13.7111 2.22623 15.5658 1.45801 17.4997 1.45801C18.4572 1.45801 19.4054 1.64661 20.2901 2.01305C21.1747 2.37949 21.9786 2.91659 22.6557 3.59369C23.3328 4.27078 23.8699 5.07461 24.2363 5.95927C24.6027 6.84394 24.7913 7.79212 24.7913 8.74967V11.6663H26.2497ZM17.4997 4.37467C16.3394 4.37467 15.2266 4.83561 14.4061 5.65608C13.5856 6.47655 13.1247 7.58935 13.1247 8.74967V11.6663H21.8747V8.74967C21.8747 7.58935 21.4137 6.47655 20.5933 5.65608C19.7728 4.83561 18.66 4.37467 17.4997 4.37467Z" fill="#FFD700" />
      </svg>

    ),
  },
  {
    label: "Fast Execution",
    description: "Trade with confidence through Jetafx’s lightning-fast order execution, reducing delays and slippage to capture opportunities.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.0913 13.1133C21.0913 13.1133 18.7361 19.7502 17.6175 20.9088C17.0775 21.4533 16.3448 21.7632 15.578 21.7715C14.8112 21.7798 14.072 21.4857 13.5204 20.953C12.9688 20.4203 12.6492 19.6918 12.6307 18.9251C12.6123 18.1585 12.8965 17.4154 13.4219 16.8568C14.5404 15.6974 21.0913 13.1133 21.0913 13.1133Z" stroke="#FFD700" strokeWidth="2" strokeLinejoin="round" />
        <path d="M27.3281 27.748C28.7519 26.3275 29.881 24.6396 30.6506 22.7814C31.4202 20.9232 31.815 18.9312 31.8125 16.9199C31.8125 8.46305 24.9569 1.60742 16.5 1.60742C8.04313 1.60742 1.1875 8.46305 1.1875 16.9199C1.1875 21.1484 2.90104 24.9765 5.67187 27.748M16.5 2.33659V5.25326M27.3245 7.5443L25.0582 9.37961M30.0056 19.2773L27.1641 18.6211M2.99365 19.2773L5.83594 18.6211M5.67552 7.5443L7.94177 9.37961" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    ),
  },

];
const tradingSpecs = [
  { label: "Spreads:", value: "From 0 on Forex and Gold" },
  { label: "Contract Size:", value: "1 lot = 100 000 units" },
  { label: "Trading Instruments *", value: "All Available" },
  { label: "Fifth Decimal:", value: "All Available" },

  { label: "Maximum Leverage:", value: "1:2000" },
  { label: "Execution:", value: "Market Execution" },
  {
    label: "Minimum opening deposit:",
    value: "$0"
  },

];

export default function ZeroAccountPage() {
  const accounts2Ref = useRef<HTMLDivElement | null>(null);
  const accountsRef = useRef<HTMLDivElement | null>(null);
  const accounts3Ref = useRef<HTMLDivElement | null>(null);

  const CheckIcon = () => (
    <svg width="24" height="24" className='flex-none' viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.74999 8.544L3.16699 10.127L7.91699 14.877L15.833 6.96L14.25 5.377L7.91699 11.71L4.74999 8.544Z" fill="#8AA5FF" />
    </svg>
  );

  useEffect(() => {
    if (!accountsRef.current) return;
    if (!accounts2Ref.current) return;
    if (!accounts3Ref.current) return;

    const ctxAccounts2 = gsap.context(() => {
      const fadeUps = accounts2Ref.current!.querySelectorAll(".fade-up");
      gsap.fromTo(
        fadeUps,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12 }
      );
    }, accounts2Ref);
    const ctxAccounts = gsap.context(() => {
      gsap.from(".fade-up2", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2, // staggers animation by 0.2 seconds per element
        scrollTrigger: {
          trigger: accountsRef.current,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, accountsRef);
    const ctxAccounts3 = gsap.context(() => {
      gsap.from(".fade-up4", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2, // staggers animation by 0.2 seconds per element
        scrollTrigger: {
          trigger: accounts3Ref.current,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, accounts3Ref);
    return () => {
      ctxAccounts2.revert();
      ctxAccounts3.revert();

      ctxAccounts.revert();
    };
  }, []);

  return (
    <>
      <Header />
      <section ref={accounts2Ref} className="tools-section other-section pt-14 lg:pt-22 pb-4 lg:pb-10 overflow-hidden relative">
        <div className="max-w-[1460px] px-6 w-full mx-auto pt-20">
          <div className='relative'>
            <div className='fade-up max-w-2xl mx-auto text-center'>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 fade-up">Join a reliable forex platform with secure trading.</h1>
              <p className="fade-up text-slate-200 mb-6 text-[#E6ECFF] opacity-70">
                Our Premium account provides retail traders unrestricted access to tight spreads via MT5 and Webtrader platforms. An ideal choice for experienced day traders seeking more flexibility and features for executing trades swiftly based on live market opportunities.
              </p>
            </div>
            <div className='fade-up mt-14 mb-4 lg:mt-24 lg:mb-8'>
              <Heading
                badgeText="Zero Account-free demo"
                title="A new trader-exclusive bonus and reward"
                subtitle=""
                maxWidthClass="max-w-[800px]"
              />
            </div>
            <div ref={accountsRef} className="fade-up grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6 lg:mt-10 ">
              {provideItems.map((item, idx) => (
                <div key={idx} className="provide-col fade-up2">
                  <div className="flex items-center md:items-start md:flex-col gap-4 md:gap-0 mb-3 md:mb-0">
                    <span className="provide-col-span shuffle inline-block p-2">{item.icon}</span>
                    <h4 className="text-xl lg:text-2xl text-white my-3">{item.label}</h4>
                  </div>
                  <p className="text-[#E6ECFF] opacity-70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section >
      <section ref={accounts3Ref} className="other-section3 py-14 lg:py-22 relative">
        <div className="max-w-[1460px] px-6 w-full mx-auto">
          <h4 className='text-2xl lg:text-4xl text-center mb-6 lg:mb-10 fade-up4'>Account Details</h4>
          <div className="w-full max-w-3xl mx-auto ">
            <div className="w-full  rounded-2xl site-card p-5 sm:p-16 fade-up4">
              <div

                className={`flex fade-up4 items-center justify-between py-4 lg:px-9 px-4 gap-3 border-t border-t-[#fbd00b4d] border-b  border-b-[var(--yellow)] rounded-3xl`}
              >
                <span
                  className={`text-md lg:text-lg text-[var(--yellow)] `}
                >
                  Trading Platform
                </span>
                <span
                  className={`text-sm lg:text-md fw-200  text-right text-[var(--yellow)] `}
                >
                  MetaTrader 5, Webtrader and Mobile Trading
                </span>
              </div>
              <div className="divide-y2 mt-4">

                {tradingSpecs.map((spec, idx) => (
                  <div
                    key={spec.label}
                    className={`flex items-center fade-up4 justify-between py-4 border-b gap-3  border-b-[#404040] rounded-xl lg:px-9 px-4`}
                  >
                    <span
                      className={`text-md lg:text-lg`}
                    >
                      {spec.label}
                    </span>
                    <span
                      className={`text-sm  text-right`}
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section >
      <FAQAccount />

      <Footer />
    </>
  );
}

