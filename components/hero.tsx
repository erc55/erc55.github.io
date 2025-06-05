import Image from 'next/image'
// import ERC55Logo from '/public/images/erc55.png'
import ERC55LogoSVG from '/public/images/erc55_logo_white.svg'

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative py-[0vh] pb-[20vh]">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="flex justify-center">
              <Image
                src={ERC55LogoSVG}
                data-aos="fade-down"
                data-aos-delay="100"
                alt="ERC55 Logo"
                height={500}
                width={500}
                unoptimized
                className='p-10'
              />
            </div>
            <h2 className="text-2xl md:text-3xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">
              Construindo o Jardim Infinito...
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
