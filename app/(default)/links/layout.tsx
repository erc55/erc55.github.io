'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import FloatingEthereumLogos from '@/components/floating-ethereum-logos'

export default function LinksLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
      easing: 'ease-out-sine'
    })
  })

  return (
    <>
      <FloatingEthereumLogos />
      <main className="grow z-0">{children}</main>
    </>
  )
} 