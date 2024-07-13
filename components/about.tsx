export default function About() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Sobre o projeto</h1>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 items-center">
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Missão</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Nós organizamos encontros mensais para o público brasileiro focado nos temas mais recentes ao redor
                    de Blockchain, Ethereum, e cryptoeconomia. O grande foco é o público de desenvolvedor, mas podemos
                    abrir excessões para temas teóricos. Fazemos isso de maneira not-for-profit, com uma curadoria que
                    coloca a qualidade do conteúdo como prioridade máxima.
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              ></div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16 text-right">
                  <h3 className="h3 mb-3">Visão</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    A nossa visão é manter o Brasil e seus desenvolvedores como protagonistas na inovação tecnológica e
                    cultural que estamos passando com web3, com foco no ângulo técnico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
