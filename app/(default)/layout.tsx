'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import FloatingEthereumLogos from '@/components/floating-ethereum-logos'
import Footer from '@/components/ui/footer'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine'
    })
  })

  return (
    <>
      <FloatingEthereumLogos />

      <main className="grow">{children}</main>

      <Footer />
    </>
  )
}
