export const metadata = {
  title: 'ERC55 - Construindo o Jardim Infinito',
  description: 'Construindo o Jardim Infinito'
}

import Hero from '@/components/hero'
import Values from '@/components/values'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}
