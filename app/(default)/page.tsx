export const metadata = {
  title: 'ERC55 - Construindo o Jardim Infinito',
  description: 'Construindo o Jardim Infinito'
}

import Hero from '@/components/hero'
import NoticeBanner from '@/components/notice-banner'
import Values from '@/components/values'
import About from '@/components/about'
import Meetups from '@/components/meetups'

export default function Home() {
  return (
    <>
      <NoticeBanner />
      <Hero />
      <About />
      <Values />
      <Meetups />
    </>
  )
}
