import Image from "next/image";
import AnimatedButton from "./AnimatedButton";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-[#010101] relative lg:pt-26 pt-14 pb-7 lg:pb-10">
       {/* <span className='border_shape3'></span> */}
      <div className="max-w-[1460px] mx-auto px-6">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-9 border-b border-[#24222c]">
          <div className="max-w-[700px]">
            <h2 className="text-xl lg:text-3xl  text-white mb-5">Trade global and win bigger with Jetafx!</h2>
            <p className="text-md opacity-70">
              Start trading smarter. Register with Jeta FX and access global markets with tight spreads, lightning-fast execution, and 24/7 support.
            </p>
          </div>
          <AnimatedButton  href="https://my.jetafx.com/en/auth/sign-up" label="Get Started Now" className="fade-left w-fit" />
        </div>

        {/* Main columns */}
        <div className="grid md:grid-cols-5 max-w-[1100px] lg:gap-24 gap-6 py-10">
          {/* Logo & stats */}
          <div className="col-span-2">
            <Image src="/logo.png" alt="Jetafx Logo" width={88} height={28} className="mb-4" />
            <p className="text-sm opacity-70 mb-5 max-w-[500px]">
              We’ve proudly served over 15,000 satisfied clients across 80 countries.
              Connect now with our helpful team 24/7 to open your secure account in minutes.
            </p>
          </div>
          {/* Markets */}
          <div className="col-span-1">
            <div className="text-base mb-4">Markets</div>
            <ul className="space-y-2 text-sm opacity-50">
              <li><Link href="/Markets?tab=forex">Forex</Link></li>
              <li><Link href="/Markets?tab=commodities">Commodities</Link></li>
              <li><Link href="/Markets?tab=equities">Eqities</Link></li>

              <li><Link href="/Markets?tab=indices">Indices</Link></li>
              <li><Link href="/Markets?tab=stocks">Stocks</Link></li>
              <li><Link href="/Markets?tab=crypto">Crypto</Link></li>
            </ul>
          </div>
          {/* Company Information */}
          <div className="col-span-2 max-w-[340px]">
            <div className="text-base mb-4">Company Information</div>
            <ul className="space-y-2 text-sm opacity-50">
              <li>Office No. 5, Ses Grape Avenue, Rodney Bay, Gros-Islet, Saint Lucia</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer and legal */}
        <div className="text-sm text-[#bcbcbc] leading-relaxed mb-5 mt-4 space-y-2">
          <p>
            <strong className="text-white">Disclaimer:</strong> Jeta FX LTD is a company registered in Saint Lucia with registered address Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia
          </p>
          <p>
            <strong className="text-white">Risk Warning:</strong>  An Investment In Derivatives May Mean Investors May Lose An Amount Even Greater Than Their Original Investment. Anyone Wishing To Invest In Any Of The Products Mentioned In www.jetafx.com .Com Should Seek Their Own Financial Or Professional Advice. Trading Of Securities, Forex, Stock Market, Commodities, options and futures may not be suitable for everyone and involves the risk of losing part or all of your money. Trading in the financial markets has large potential rewards but also large potential risks. You Must Be Aware Of The Risks And Be Willing To Accept Them In Order To Invest In The Markets. Dont Invest And Trade With Money Which You Cant Afford To Lose. Forex trading is not allowed in some countries. Before Investing Your Money, make sure whether your country is allowing this or not. You Are Strongly Advised To Obtain Independent Financial, Legal And Tax Advice Before Proceeding With Any Currency Or Spot Metals Trade. Nothing In This Site Should Be Read Or Construed As Constituting Advice On The Part Of Jeta FX LTD Or Any Of Its Affiliates, Directors, Officers Or Employees.
          </p>
          <p>
            <strong className="text-white">Restricted Regions:</strong>  Jeta FX LTD Does Not Provide Services For Citizens/Residents Of The United States, Cuba, Iraq, Myanmar, North Korea, Sudan, Russia and Iran. The Services Of Jeta FX LTDAre Not Intended For Distribution To, Or Use By, Any Person In Any Country Or Jurisdiction Where Such Distribution Or Use Would Be Contrary To Local Law Or Regulation.
          </p>
          <div className="flex items-center gap-1 py-3 flex-wrap">
            <Link href="/LegalDocuments" className="underline">Legal Documents & Restricted Regions</Link>
            <span>|</span>
            <Link href="/AML&KYC" className="underline">AML & KYC</Link>
            <span>|</span>
            <Link href="/ScalpingPolicy" className="underline">Scalping Policy</Link>
            <span>|</span>
            <Link href="https://drive.google.com/file/d/1HnHuQzHShNNpwx8TG5457d1Ot2Jk4e5g/view" target="__blank" className="underline">Terms and Conditions</Link>
            <span>|</span>
            <Link href="/PrivacyPolicy" className="underline">Privacy & Security Policy</Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-md text-center opacity-60 pt-8 ">
          Copyright © 2025 Jetafx. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
