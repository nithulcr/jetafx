"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const rafId = useRef<number | null>(null);

  // Animation frame loop
  const raf = (time: number) => {
    if (lenisRef.current) {
      lenisRef.current.raf(time);
      rafId.current = requestAnimationFrame(raf);
    }
  };

  useEffect(() => {
    // Initialize Lenis once
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        duration: 1.6,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -7 * t)),
      });
      rafId.current = requestAnimationFrame(raf);
    }

    // On every pathname (route) change, reset scroll position immediately
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  useEffect(() => {
    // Cleanup on component unmount
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
