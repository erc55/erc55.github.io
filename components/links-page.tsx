import Image from 'next/image'
import LinkItem from '@/components/link-item'
import ERC55LogoSVG from '@/public/images/erc55_logo_white.svg'

export default function LinksPage() {
  return (
    <section className="relative min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-16 pb-16">
          
          {/* Header com logo */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-8">
              <Image
                src={ERC55LogoSVG}
                alt="ERC55 Logo"
                height={200}
                width={200}
                className="drop-shadow-lg"
              />
            </div>
            
            <p className="text-xl text-gray-400 mb-8">
              Construindo o Jardim Infinito...
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full"></div>
          </div>

          {/* Todos os links como LinkItem */}
          <div className="space-y-4">
            <LinkItem
              href="/"
              title="Website Principal"
              description="Conheça nossa missão, valores e encontros passados"
            />
            
            <LinkItem
              href="/zk"
              title="Core Program Brasil 2025"
              description="Programa educacional da Ethereum Foundation no Brasil"
            />
            
            <LinkItem
              href="https://www.youtube.com/@ERC55jardiminfinito"
              title="Canal no YouTube"
              description="Assista todos os nossos meetups e apresentações"
              external
            />
            
            <LinkItem
              href="https://github.com/erc55"
              title="GitHub"
              description="Acesse nossos projetos e contribuições open-source"
              external
            />

            <LinkItem
              href="https://twitter.com/ERC55_"
              title="Twitter"
              description="Siga @ERC55_ para atualizações e novidades"
              external
            />

            <LinkItem
              href="https://www.instagram.com/_erc55/"
              title="Instagram"
              description="Siga @_erc55 no Instagram"
              external
            />
            
            <LinkItem
              href="https://discord.gg/WGtRa4yzgA"
              title="Discord"
              description="Entre no nosso Discord"
              external
            />

            <LinkItem
              href="mailto:erc55jardiminfinito@gmail.com"
              title="E-mail Principal"
              description="erc55jardiminfinito@gmail.com"
              external
            />

            <LinkItem
              href="mailto:hi@erc55.xyz"
              title="E-mail Secundário"
              description="hi@erc55.xyz"
              external
            />
          </div>
          
        </div>
      </div>
    </section>
  )
} 