'use client'

import { useEffect } from 'react'
import Lenis, { LenisOptions } from '@studio-freight/lenis'

// Extend LenisOptions to allow smooth and smoothTouch
interface CustomLenisOptions extends LenisOptions {
  smooth?: boolean
  smoothTouch?: boolean
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -6 * t)),
      smooth: true,
      smoothTouch: true,
    } as CustomLenisOptions)

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
