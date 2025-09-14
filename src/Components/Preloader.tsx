"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const Preloader = ({
  onComplete,
}: {
  onComplete: () => void;
}) => {
  const [exiting, setExiting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Stay visible 2 seconds, then start exit animation
    const stayTimeout = setTimeout(() => {
      setExiting(true);
      // After slide-out duration (500ms), call onComplete
      const exitTimeout = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(exitTimeout);
    }, 3000);

    return () => clearTimeout(stayTimeout);
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-90 z-50 preloader-section
        animate-pulse
        ${exiting ? "translate-x-full opacity-0 transition-transform duration-500 ease-in-out" : "translate-x-0"}
      `}
    >
      <div className="mb-8 logo-img">
        <Image src="/logo.png" alt="Logo" width={200} height={200} className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-contain" priority />
      </div>
    </div>
  );
};

export default Preloader;
