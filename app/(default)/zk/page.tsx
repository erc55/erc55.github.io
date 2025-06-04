import Image from 'next/image'
// import ERC55Logo from '/public/images/erc55.png'
import ERC55LogoSVG from '/public/images/erc55_logo_white.svg'
import ZKETLogo from '/public/images/ZKET-1.png'
import EFLogo from '/public/images/EF-logo-white.png'
import faqData from '@/components/zk-faq'

export const metadata = {
  title: 'ERC55 - Core Program 2025 Brasil',
  description: 'Core Program 2025 - Brasil. Um programa educacional da Ethereum Foundation, sediado pela primeira vez no Brasil pela ERC55.'
}

export default function ZkPage() {
  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          {/* Hero content */}
          <div className="relative py-[10vh] pb-[10vh]">
            {/* Section header */}
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="h1 mb-6" data-aos="fade-up" data-aos-delay="150">
                Core Program 2025 - Brasil
              </h1>
              <div className="flex flex-col md:flex-row justify-center items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
                <Image
                  src={ZKETLogo}
                  data-aos="fade-down"
                  data-aos-delay="100"
                  alt="ZKET Logo"
                  // height={200}
                  // width={0}
                  style={{ width: 'auto', height: 'clamp(150px, 15vw, 200px)' }}
                  className="object-contain"
                  unoptimized
                />
                <Image
                  src={EFLogo}
                  data-aos="fade-down"
                  data-aos-delay="200"
                  alt="EF Logo"
                  // height={200}
                  // width={0}
                  style={{ width: 'auto', height: 'clamp(100px, 18vw, 130px)' }}
                  className="object-contain"
                  unoptimized
                />
                <Image
                  src={ERC55LogoSVG}
                  data-aos="fade-down"
                  data-aos-delay="300"
                  alt="ERC55 Logo"
                  // height={200}
                  // width={0}
                  style={{ width: 'auto', height: 'clamp(100px,18vw, 130px)' }}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <p className="text-2xl text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="200">
                Um programa educacional da Ethereum Foundation, sediado pela primeira vez no Brasil pela ERC55
              </p>
              <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-6 mb-6 flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="300">
                <svg className="w-6 h-6 text-yellow-500 mb-3" fill="currentColor" viewBox="0 0 20 20">
                  <title>Alerta</title>
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-200 text-lg text-center">
                  Esta página está em constante atualização. Volte aqui para ver os detalhes mais recentes. Detalhes como local e horário dos encontros presenciais estão sujeitos a alterações.
                  <br />
                  Todas as informações que você precisa estão aqui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-16 pt-12">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="h2 mb-4">
                Sobre o Core Program no Brasil
              </h2>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto prose prose-lg prose-invert">
              <div data-aos="fade-up" data-aos-delay="10">
                <p className="text-2xl text-gray-200 mb-8" >
                  A ERC55 tem o prazer de anunciar que o Brasil sediará, pela primeira vez, o Core Program, 
                  um programa educacional intensivo da Ethereum Foundation, desenvolvido pelo ZK Education Team (ZKET).
                </p>

                <h3 className="text-3xl font-bold text-white mb-4">O que é o Core Program?</h3>
                <p className="text-xl text-gray-200 mb-6">
                  O Core Program é uma jornada imersiva de 6 semanas focada em Programmable Cryptography (ProgCrypto), 
                  abrangendo aspectos acadêmicos e técnicos. Ele combina encontros presenciais dinâmicos com um 
                  aprendizado online aprofundado. Mantido pelo ZKET e organizado por comunidades locais convidadas 
                  pela Ethereum Foundation, o programa busca criar um ambiente vibrante onde grupos de estudo podem 
                  se formar, crescer e se sustentar, fortalecendo o ecossistema de aprendizado e colaboração em 
                  criptografia programável.
                </p>

                <h3 className="text-3xl font-bold text-white mb-4">Objetivos no Brasil:</h3>
                <p className="text-xl text-gray-200 mb-4">
                  Nosso objetivo é ir além do aprendizado teórico. Os participantes do Core Program no Brasil 
                  irão:
                </p>
                <ul className="text-xl text-gray-200 mb-6 space-y-3">
                  <li>• Aprofundar-se em conceitos como Zero-Knowledge Proofs (ZKP), Fully Homomorphic Encryption (FHE) e Multiparty Computation (MPC), juntamente com os fundamentos da criptografia moderna.</li>
                  <li>• Contribuir com projetos open-source reais, aplicando o conhecimento adquirido.</li>
                  <li>• Participar de mentorias com especialistas da indústria global e da Ethereum Foundation.</li>
                  <li>• Ter a chance de receber grants para pesquisas futuras e desenvolver suas próprias ideias.</li>
                  <li>• Construir uma comunidade forte e duradoura de entusiastas e desenvolvedores de ProgCrypto no Brasil.</li>
                </ul>

                <div className="bg-purple-600/20 border border-purple-600/30 rounded-lg p-6 mb-8">
                  <p className="text-xl text-gray-200">
                    <strong>Veja os projetos do ano passado:</strong> 
                    <a href="https://github.com/ethereum/zket-core-program/tree/main/2024/contributions" 
                       className="text-purple-400 hover:text-gray-300 ml-2" 
                       target="_blank" rel="noopener noreferrer">
                      Contributions 2024
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-16">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="h2 mb-4" data-aos="fade-up">
                Tópicos e Tecnologias Abordadas
              </h2>
            </div>

            <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              <p className="text-2xl text-gray-200 mb-8">
                O programa fornecerá uma base sólida em criptografia programável, ZKP e cultura open-source. 
                Alguns dos tópicos e tecnologias que serão explorados incluem:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <ul className="text-xl text-gray-200 space-y-3">
                    <li>• Fundamentos de Criptografia Moderna</li>
                    <li>• Zero-Knowledge Proofs (ZKP): Teoria e aplicações</li>
                    <li>• Fully Homomorphic Encryption (FHE)</li>
                    <li>• Multiparty Computation (MPC)</li>
                    <li>• DSLs (Domain Specific Languages) para ZK Programming: Halo, Noir, Cairo, Circom</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-xl text-gray-200 space-y-3">
                    <li>• Protocolos ZK: KZG Commitments, zkSNARKs, Groth16, PLONK, STARK FRI, Halo2</li>
                    <li>• Aplicações Reais: Semaphore, Bandada, TLSNotary, ZKEmail</li>
                    <li>• Cultura Open-Source</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">Resultados Esperados:</h3>
              <ul className="text-xl text-gray-200 space-y-3 mb-6">
                <li>• Publicação de resultados de estudos e pesquisas (blogs, meetups ou papers)</li>
                <li>• Realizar contribuições significativas para o ecossistema open-source</li>
                <li>• Implementar suas próprias ideias e soluções inovadoras em ProgCrypto</li>
              </ul>

              <p className="text-xl text-gray-200">
                Haverá avaliações finais e feedbacks. A Ethereum Foundation considera oportunidades 
                para continuação de pesquisas e contribuições.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-16">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="h2 mb-4" data-aos="fade-up">
                Para Quem é o Programa?
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-2xl text-gray-200 mb-8 text-center" data-aos="fade-up" data-aos-delay="100">
                Estamos buscando indivíduos motivados e dedicados para formar uma turma de alto nível, 
                com 12 a 15 participantes.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Participant Profile */}
                <div data-aos="fade-up" data-aos-delay="200">
                  <h3 className="text-3xl font-bold text-white mb-4">Perfil do Participante:</h3>
                  <p className="text-xl text-gray-200 mb-4">
                    Ideal para quem busca uma imersão profunda e prática em criptografia programável:
                  </p>
                  <ul className="text-xl text-gray-200 space-y-3">
                    <li>• Interesse genuíno em criptografia teórica e aplicada, e blockchain</li>
                    <li>• Estudantes ou pesquisadores nas áreas de criptografia, matemática ou computação</li>
                    <li>• Experiência prévia com programação e blockchain</li>
                    <li>• Grande interesse e disposição para contribuir com projetos open-source ou criar soluções inovadoras</li>
                    <li>• Capacidade de dedicação intensiva durante as 6 semanas (modelo híbrido: presencial + online), com uma estimativa de 12 horas semanais de estudo independente, além das sessões.</li>
                    <li>• Conforto em inglês, pois muitos materiais básicos utilizam o idioma</li>
                  </ul>
                </div>

                {/* Mentor Profile */}
                <div data-aos="fade-up" data-aos-delay="300">
                  <h3 className="text-3xl font-bold text-white mb-4">Perfil do Lead Mentor:</h3>
                  <p className="text-xl text-gray-200 mb-4">
                    Também estamos buscando mentores, sejam pesquisadores ou profissionais da indústria, 
                    com expertise em áreas relacionadas à Criptografia Programável.
                  </p>
                  <ul className="text-xl text-gray-200 space-y-3">
                    <li>• Participar ativamente na semana do seu tema de expertise</li>
                    <li>• Estar junto com a turma, tirar dúvidas, conduzir workshops</li>
                    <li>• Viver intensamente a semana para explorar todas as possibilidades do tema</li>
                    <li>• Encorajamos a todos a participar do programa como participantes, e aplicar para Lead Mentor somente se de fato não for possível participar durante todas as 6 semanas.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-16">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="h2 mb-4" data-aos="fade-up">
                Como Funciona? (Método de Aprendizagem)
              </h2>
            </div>

            <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              <p className="text-2xl text-gray-200 mb-8 text-center">
                O programa adota um modelo de aprendizado híbrido dinâmico, combinando o melhor do 
                autoestudo online com a riqueza dos encontros presenciais.
              </p>

              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Formato Híbrido:</h3>
                  <ul className="text-xl text-gray-200 space-y-4">
                    <li>• <strong>Sessões Online:</strong> Estudos e debates semanais, com horários a serem definidos futuramente</li>
                    <li>• <strong>Encontros Presenciais:</strong> A "magia" do programa acontece nos encontros presenciais, aos <strong>sábados</strong>, de <strong>9h às 18h</strong>, em <strong>São Paulo</strong></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Fases do Programa:</h3>
                  <ul className="text-xl text-gray-200 space-y-4">
                    <li>• <strong>Pré-Programa (2 semanas online):</strong> Conhecer os colegas, discutir a dinâmica do programa e tirar dúvidas iniciais. Esta fase também abordará pré-requisitos técnicos, cultura open-source e conceitos introdutórios.</li>
                    <li>• <strong>Programa Principal (6 semanas híbridas):</strong> Estudo, prática, projetos e contribuições open-source
                      <ul className="mt-3 ml-6 space-y-2">
                        <li>◦ <strong>Estudo e Prática:</strong> Semanas dedicadas ao aprofundamento nos tópicos de ProgCrypto, com componentes práticos de codificação e estudo guiado.</li>
                        <li>◦ <strong>Semana de Projetos/Hackathon:</strong> Uma semana intensiva focada na aplicação do conhecimento adquirido em projetos reais, culminando em um mini hackathon interno.</li>
                        <li>◦ <strong>Contribuição Open-Source:</strong> As últimas semanas são dedicadas a contribuir com projetos open-source relevantes, aplicando as habilidades desenvolvidas.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-8">
                <h3 className="text-3xl font-bold text-white mb-6 text-center">Cronograma (Provisório)</h3>
                <p className="text-xl text-gray-200 mb-6 text-center">
                  <strong>Local:</strong> São Paulo (capital). O local e horário exato serão divulgados em breve.<br />
                  <strong>Duração:</strong> 8 semanas no total (2 semanas de pré-programa online + 6 semanas híbridas)
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-2xl font-semibold text-purple-400 mb-3">Pré-Programa</h4>
                    <ul className="text-xl text-gray-200 space-y-2">
                      <li>• 14/07: Semana 1 (Online)</li>
                      <li>• 21/07: Semana 2 (Online)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold text-purple-400 mb-3">Core Program</h4>
                    <ul className="text-xl text-gray-200 space-y-2">
                      <li>• 27/07: Semana 1 (Híbrido)</li>
                      <li>• 03/08: Semana 2 (Híbrido)</li>
                      <li>• 10/08: Semana 3 (Híbrido)</li>
                      <li>• 17/08: Semana 4 (Híbrido)</li>
                      <li>• 24/08: Semana 5 (Híbrido)</li>
                      <li>• 31/08: Semana 6 (Híbrido)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process Section */}
      <section id="inscricao">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-16">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="h2 mb-4" data-aos="fade-up">
                Processo Seletivo e Datas Importantes
              </h2>
            </div>

            <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              <p className="text-2xl text-gray-200 mb-8 text-center">
                O processo seletivo é composto por duas etapas principais. Certifique-se de respeitar os prazos:
              </p>

              <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-8 mb-8">
                <h3 className="text-3xl font-bold text-white mb-6 text-center">Cronograma de Seleção</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span className="text-xl text-gray-200">Prazo final para preencher o formulário:</span>
                    <span className="text-xl text-purple-400 font-semibold">05 de Julho de 2025</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span className="text-xl text-gray-200">Entrevistas de 30 minutos (online):</span>
                    <span className="text-xl text-purple-400 font-semibold">09 de Junho a 11 de Julho de 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl text-gray-200">Divulgação dos selecionados:</span>
                    <span className="text-xl text-purple-400 font-semibold">Até 13 de Julho de 2025</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-6">Links para Inscrição</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://forms.gle/FPeXVkbeoND337NL8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-xl"
                  >
                    Formulário para Participante
                  </a>
                  <a 
                    href="https://forms.gle/WcGXksZmHGPS6FGb8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg transition-colors text-xl"
                  >
                    Formulário para Lead Mentor
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participants Section */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="h2 mb-8" data-aos="fade-up">
                Participantes
              </h2>
              <div className="bg-gray-800/50 rounded-lg p-8" data-aos="fade-up" data-aos-delay="100">
                <p className="text-lg text-gray-200 italic">
                  Esta seção será preenchida de acordo com a confirmação dos participantes.
                </p>
                <p className="text-lg text-gray-300 mt-4">
                  Foto, nome e mini bio dos confirmados
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-16">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="h2 mb-4" data-aos="fade-up">
                Perguntas Frequentes (Q&A)
              </h2>
            </div>

            <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              <div className="space-y-6">
                {faqData.map((faq) => (
                  <div key={faq.q} className="bg-gray-800/50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-purple-400 mb-3">P. {faq.q}</h3>
                    <p className="text-xl text-gray-200">R. {faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="h2 mb-8" data-aos="fade-up">
                Apoio e Contato
              </h2>
              <p className="text-2xl text-gray-200 mb-8" data-aos="fade-up" data-aos-delay="100">
                Caso tenha dúvidas ou sugestões, envie um e-mail para:
              </p>
              <a 
                href="mailto:erc55jardiminfinito@gmail.com" 
                className="text-purple-400 hover:text-gray-300 text-2xl font-semibold"
                data-aos="fade-up" 
                data-aos-delay="200"
              >
                erc55jardiminfinito@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="h2 mb-6" data-aos="fade-up">
                Junte-se a essa jornada!
              </h2>
              <p className="text-2xl text-gray-200 mb-4" data-aos="fade-up" data-aos-delay="100">
                Junte-se a essa jornada e ajude a construir o futuro da criptografia aplicada no Brasil.
              </p>
              <p className="text-2xl text-purple-400 font-semibold" data-aos="fade-up" data-aos-delay="200">
                É só o começo!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
