import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#010101] text-[#ECECF0] pt-14 pb-7 lg:pb-10 mt-28">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-9 border-b border-[#24222c]">
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold text-white mb-2">Trade global and win bigger with Jetafx!</h2>
            <p className="text-sm opacity-70">
              Start trading smarter. Register with Jeta FX and access global markets with tight spreads, lightning-fast execution, and 24/7 support.
            </p>
          </div>
          <a
            href="#"
            className="inline-block px-6 py-3 rounded-full bg-[#FFD700] text-[#2d2d34] font-semibold text-sm shadow hover:scale-105 transition"
          >
            Get Started Now
          </a>
        </div>

        {/* Main columns */}
        <div className="grid md:grid-cols-3 gap-8 py-10">
          {/* Logo & stats */}
          <div>
            <Image src="/logo.png" alt="Jetafx Logo" width={88} height={28} className="mb-4" />
            <p className="text-sm opacity-70 mb-5">
              We’ve proudly served over <span className="font-semibold text-white">15,000</span> satisfied clients across 80 countries.
              Connect now with our helpful team 24/7 to open your secure account in minutes.
            </p>
          </div>
          {/* Markets */}
          <div>
            <div className="text-base font-semibold mb-4">Markets</div>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Forex</li>
              <li>Indices</li>
              <li>Stocks</li>
              <li>Commodities</li>
              <li>Exchange Futures</li>
            </ul>
          </div>
          {/* Company Information */}
          <div>
            <div className="text-base font-semibold mb-4">Company Information</div>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Office No. 5, Ses Grape Avenue, Rodney Bay, Gros-Islet, Saint Lucia</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer and legal */}
        <div className="text-xs opacity-50 leading-relaxed mb-5 space-y-2">
          <p>
            <strong>Disclaimer:</strong> Jeta FX LTD is a company registered in Saint Lucia with registered address Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia
          </p>
          <p>
            <strong>Risk Warning:</strong> An Investment In Derivatives May Mean Investors May Lose An Amount Even Greater Than Their Original Investment...
          </p>
          <p>
            <strong>Restricted Regions:</strong> Jeta FX LTD Does Not Provide Services For Citizens/Residents Of The United States, Cuba, Iraq, Myanmar, North Korea, Sudan, Russia and Iran...
          </p>
        </div>

        {/* Copyright */}
        <div className="text-xs text-center opacity-60 pt-2 border-t border-[#24222c]">
          Copyright © 2025 Jetafx. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
