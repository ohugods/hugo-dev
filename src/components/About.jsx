import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [currentService, setCurrentService] = useState(0)

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % serviceShowcase.length)
  }

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + serviceShowcase.length) % serviceShowcase.length)
  }

  const serviceShowcase = [
    {
      title: 'Desenvolvimento Web Full Stack',
      description: 'Aplicações web completas e escaláveis com frontend moderno e backend robusto. Incluindo APIs, bancos de dados e interfaces responsivas.',
      icon: '🚀',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
      deliverables: ['Aplicação Web Completa', 'API REST', 'Banco de Dados', 'Interface Responsiva']
    },
    {
      title: 'Aplicativos Mobile',
      description: 'Apps nativos e híbridos para iOS e Android com experiência nativa excepcional, performance otimizada e integração com sistemas.',
      icon: '📱',
      technologies: ['React Native', 'Flutter', 'Expo', 'Firebase'],
      deliverables: ['App iOS & Android', 'Backend API', 'Push Notifications', 'Offline Support']
    },
    {
      title: 'Automação de Processos',
      description: 'Soluções automatizadas que transformam workflows manuais em processos eficientes, reduzindo custos e aumentando produtividade.',
      icon: '⚡',
      technologies: ['Python', 'Node.js', 'Docker', 'AWS'],
      deliverables: ['Sistema Automatizado', 'Dashboards', 'Relatórios', 'Integrações']
    },
    {
      title: 'E-commerce Completo',
      description: 'Lojas virtuais modernas com catálogo inteligente, carrinho avançado, sistema de pagamentos integrado e painel administrativo completo.',
      icon: '🛒',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Vercel'],
      deliverables: ['Loja Virtual', 'Sistema de Pagamento', 'Admin Panel', 'SEO Otimizado']
    },
    {
      title: 'Blockchain & Web3',
      description: 'Desenvolvimento de aplicações descentralizadas, NFTs, DeFi e contratos inteligentes com foco em segurança e performance.',
      icon: '⛓️',
      technologies: ['Solana', 'Web3.js', 'Solidity', 'IPFS'],
      deliverables: ['Smart Contracts', 'DApp', 'NFT Marketplace', 'Wallet Integration']
    },
    {
      title: 'Integração de Sistemas',
      description: 'Conexão perfeita entre sistemas legados e soluções modernas, garantindo fluxo contínuo de dados e sincronização em tempo real.',
      icon: '🔗',
      technologies: ['APIs', 'Webhooks', 'ETL', 'Microservices'],
      deliverables: ['APIs de Integração', 'Sincronização', 'Monitoramento', 'Documentação']
    },
    {
      title: 'Sistemas de Gestão Empresarial',
      description: 'Plataformas completas de gestão com dashboards analíticos, controle de usuários, relatórios avançados e automação de processos.',
      icon: '📊',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      deliverables: ['Plataforma de Gestão', 'Dashboards', 'Sistema de Usuários', 'Relatórios']
    },
    {
      title: 'APIs e Microsserviços',
      description: 'Arquiteturas de APIs escaláveis e sistemas de microsserviços para aplicações modernas e distribuídas.',
      icon: '🔧',
      technologies: ['Node.js', 'Express', 'Docker', 'Kubernetes'],
      deliverables: ['APIs Escaláveis', 'Microsserviços', 'Documentação', 'Testes']
    }
  ]

  const stats = [
    { number: '15+', label: 'Tecnologias Dominadas' },
    { number: '3', label: 'Projetos em Produção' },
    { number: '99%', label: 'Código Testado' },
    { number: '24/7', label: 'Disponibilidade Online' }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-black mb-4">
              Sobre Minha Jornada Profissional
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Minha trajetória na tecnologia começou com a curiosidade de entender como as aplicações funcionam por trás das telas.
              Ao longo dos anos, especializei-me em criar soluções que não apenas resolvem problemas técnicos, mas que
              realmente fazem diferença na rotina das pessoas e empresas.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Trabalhando remotamente, desenvolvi projetos para diversos setores incluindo gestão ambiental, agricultura
              e blockchain. Cada projeto representa um desafio único e uma oportunidade de aprendizado, desde a concepção
              inicial até a implementação e manutenção.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Minha abordagem combina conhecimento técnico sólido com foco em usabilidade e performance.
              Acredito que o verdadeiro valor da tecnologia está em simplificar processos complexos e
              tornar ferramentas poderosas acessíveis a todos.
            </p>

            {/* Location and Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Espírito Santo, Brasil</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-700">hugo.devbr@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm text-center card-hover"
              >
                <div className="text-3xl font-bold text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Service Showcase Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-black text-center mb-4">
            Portfólio de Serviços
          </h3>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Explore a gama completa de serviços especializados. Cada solução é desenvolvida
            com as melhores tecnologias e práticas do mercado para garantir resultados excepcionais.
          </p>

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Buttons */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevService}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
            >
              <FaChevronLeft className="w-5 h-5 text-gray-600" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextService}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
            >
              <FaChevronRight className="w-5 h-5 text-gray-600" />
            </motion.button>

            {/* Service Card */}
            <motion.div
              key={currentService}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden max-w-4xl mx-auto"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Service Info */}
                <div className="p-4 lg:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-3xl">
                      {serviceShowcase[currentService].icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-black leading-tight">
                        {serviceShowcase[currentService].title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-3 leading-snug">
                    {serviceShowcase[currentService].description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {serviceShowcase[currentService].technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-0.5 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-black text-white py-3 px-4 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Solicitar Orçamento
                  </motion.button>
                </div>

                {/* Visual Side */}
                <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 lg:p-6 flex items-center justify-center min-h-[200px]">
                  <div className="text-center">
                    <div className="text-5xl mb-3 opacity-15">
                      {serviceShowcase[currentService].icon}
                    </div>
                    <div className="bg-white/70 backdrop-blur-sm p-2 rounded-lg inline-block">
                      <div className="text-lg font-bold text-gray-800">
                        {currentService + 1} / {serviceShowcase.length}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {serviceShowcase.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentService(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentService
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Additional Services Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-10"
          >
            <h4 className="text-lg font-bold text-black text-center mb-4">
              Todos os Serviços
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {serviceShowcase.map((service, index) => (
                <motion.button
                  key={service.title}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCurrentService(index)}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                    index === currentService
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                  }`}
                >
                  <div className="text-lg mb-1">{service.icon}</div>
                  <div className="font-semibold text-gray-800 text-xs mb-1 line-clamp-2 leading-tight">
                  {service.title}
                  </div>
                </motion.button>
            ))}
          </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About