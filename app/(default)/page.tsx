export const metadata = {
  title: 'ERC55 - Construindo o Jardim Infinito',
  description: 'Construindo o Jardim Infinito'
}

import Hero from '@/components/hero'
import Values from '@/components/values'
import Newsletter from '@/components/newsletter'
import About from '@/components/about'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Values />
      <Testimonials />
      <Newsletter />
    </>
  )
}
