import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      title: 'Desenvolvimento Web',
      description: 'Sites e aplicações web modernas e responsivas',
      icon: '🚀'
    },
    {
      title: 'Aplicativos Mobile',
      description: 'Apps nativos para iOS e Android',
      icon: '📱'
    },
    {
      title: 'Automação',
      description: 'Soluções para otimizar processos e workflows',
      icon: '⚡'
    },
    {
      title: 'E-commerce',
      description: 'Lojas virtuais completas e funcionais',
      icon: '🛒'
    },
    {
      title: 'APIs & Backend',
      description: 'Sistemas robustos e escaláveis',
      icon: '🔧'
    },
    {
      title: 'Consultoria',
      description: 'Orientação técnica e planejamento de projetos',
      icon: '💡'
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

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-black text-center mb-4">
            Serviços Oferecidos
          </h3>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Soluções completas para transformar suas ideias em realidade digital.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-6 rounded-xl text-center group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 border ${
                  index % 2 === 0
                    ? 'bg-white border-gray-100 hover:border-black text-gray-800'
                    : 'bg-black border-gray-800 hover:border-gray-600 text-white'
                }`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className={`font-bold mb-2 text-sm leading-tight ${
                  index % 2 === 0 ? 'text-gray-800' : 'text-white'
                }`}>
                  {service.title}
                </h4>
                <p className={`text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  index % 2 === 0 ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Vamos Conversar
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About