export const metadata = {
  title: 'ERC55 - Construindo o Jardim Infinito',
  description: 'Construindo o Jardim Infinito'
}

import Hero from '@/components/hero'
import Values from '@/components/values'
import About from '@/components/about'
import Meetups from '@/components/meetups'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Values />
      <Meetups />
    </>
  )
}
