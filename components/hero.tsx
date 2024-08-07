import Image from 'next/image'
import ERC55Logo from '/public/images/erc55.png'

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="relative py-[15vh] pb-[20vh]">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="flex justify-center">
              <Image
                src={ERC55Logo}
                data-aos="fade-down"
                data-aos-delay="100"
                alt="ERC55 Logo"
                className="size-10"
                unoptimized
              />
            </div>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">
              Construindo o Jardim Infinito...
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
