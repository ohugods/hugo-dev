import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFacebookF, FaCode, FaDesktop, FaGithub, FaUser, FaTachometerAlt, FaCogs } from 'react-icons/fa'
import { SiSolana, SiJavascript, SiPython, SiReact, SiNodedotjs } from 'react-icons/si'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

const About = () => {
  const [activeSection, setActiveSection] = useState('about')

  const toggleSection = (sectionId) => {
    setActiveSection(sectionId)
  }

  // Função global para ativar abas da navbar
  useEffect(() => {
    window.activateTab = (tabId) => {
      console.log('Ativando aba:', tabId)
      setActiveSection(tabId)
    }

    return () => {
      delete window.activateTab
    }
  }, [])

  // Garantir que sempre haja uma aba ativa
  useEffect(() => {
    if (!activeSection) {
      setActiveSection('about')
    }
  }, [activeSection])

  const services = [
    {
      title: 'Desenvolvimento Web',
      description: 'Sites e aplicações web modernas e responsivas',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    },
    {
      title: 'Aplicativos Mobile',
      description: 'Apps nativos para iOS e Android',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Automação',
      description: 'Soluções para otimizar processos e workflows',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'E-commerce',
      description: 'Lojas virtuais completas e funcionais',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: 'APIs & Backend',
      description: 'Sistemas robustos e escaláveis',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      title: 'Soluções Personalizadas',
      description: 'Desenvolvimento de sistemas sob medida para necessidades específicas',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
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
        {/* Tab Navigation - Hidden on Mobile */}
        <div className="hidden md:flex justify-center mb-8 overflow-x-auto px-4">
          <div className="bg-white rounded-full p-1 border border-gray-200 inline-flex min-w-max">
            <button
              onClick={() => toggleSection('about')}
              className={`px-3 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap text-sm sm:px-4 sm:text-base ${
                activeSection === 'about'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-black hover:bg-gray-50'
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => toggleSection('services')}
              className={`px-3 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap text-sm sm:px-4 sm:text-base ${
                activeSection === 'services'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-black hover:bg-gray-50'
              }`}
            >
              Serviços
            </button>
            <button
              onClick={() => toggleSection('skills')}
              className={`px-3 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap text-sm sm:px-4 sm:text-base ${
                activeSection === 'skills'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-black hover:bg-gray-50'
              }`}
            >
              Habilidades
            </button>
            <button
              onClick={() => toggleSection('projects')}
              className={`px-3 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap text-sm sm:px-4 sm:text-base ${
                activeSection === 'projects'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-black hover:bg-gray-50'
              }`}
            >
              Projetos
            </button>
            <button
              onClick={() => toggleSection('contact')}
              className={`px-3 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap text-sm sm:px-4 sm:text-base ${
                activeSection === 'contact'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-black hover:bg-gray-50'
              }`}
            >
              Contato
            </button>
          </div>
        </div>

        {/* About Section */}
        <AnimatePresence>
          {activeSection === 'about' && (
          <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              {/* Main About Content */}
              <div className="space-y-20">
                {/* Hero Introduction with Photo */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
                  {/* Text Content */}
                    <div className="order-2 lg:order-1">
                      <h2 className="text-base xs:text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 md:mb-6 leading-tight">
                        <span className="whitespace-nowrap inline-block">
                          <span className="hidden sm:inline">Desenvolvedor </span>Full-Stack
                        </span>
                        <span className="block xs:inline-block xs:ml-2 sm:ml-4 mt-1 xs:mt-0 text-sm xs:text-base sm:text-xl md:text-3xl lg:text-4xl font-medium text-gray-600 whitespace-nowrap">
                          Transformando Ideias em Realidade
                        </span>
                      </h2>
                      <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-6 md:mb-8">
                        Especialista em criar soluções tecnológicas que combinam
                        <span className="font-semibold text-black"> inovação</span>,
                        <span className="font-semibold text-black"> performance</span> e
                        <span className="font-semibold text-black"> experiência excepcional</span>.
                      </p>

                      {/* Quick Info Cards */}
                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="flex items-center bg-white px-3 py-2 rounded-full shadow-md border border-gray-100 text-xs sm:text-sm"
                        >
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="font-medium text-gray-700">Disponível para projetos</span>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="flex items-center bg-white px-3 py-2 rounded-full shadow-md border border-gray-100 text-xs sm:text-sm"
                        >
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
                          <span className="font-medium text-gray-700">Espírito Santo, BR</span>
                        </motion.div>
              </div>
            </div>

                    {/* Photo Section */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="order-1 lg:order-2"
                    >
                      <div className="relative p-4">
                        {/* Floating Elements */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            x: [0, 5, -5, 0],
                            y: [0, -3, 3, 0]
                          }}
                          transition={{
                            duration: 0.6,
                            delay: 1.2,
                            x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                          }}
                          className="absolute top-2 left-2 z-20 hidden sm:block"
                        >
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center shadow-lg">
                            <SiReact className="text-xs text-black" />
                  </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            x: [0, -3, 3, 0],
                            y: [0, 4, -4, 0]
                          }}
                          transition={{
                            duration: 0.6,
                            delay: 1.4,
                            x: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
                            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
                          }}
                          className="absolute top-3 right-3 z-20 hidden sm:block"
                        >
                          <div className="w-7 h-7 bg-gray-300 rounded-full flex items-center justify-center shadow-lg">
                            <SiJavascript className="text-xs text-black" />
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            x: [0, 4, -4, 0],
                            y: [0, -2, 2, 0]
                          }}
                          transition={{
                            duration: 0.6,
                            delay: 1.6,
                            x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
                            y: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
                          }}
                          className="absolute top-1/2 left-1 transform -translate-y-1/2 z-20 hidden sm:block"
                        >
                          <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center shadow-lg">
                            <SiNodedotjs className="text-xs text-white" />
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            x: [0, -2, 2, 0],
                            y: [0, 3, -3, 0]
                          }}
                          transition={{
                            duration: 0.6,
                            delay: 1.8,
                            x: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
                            y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                          }}
                          className="absolute bottom-3 right-2 z-20 hidden sm:block"
                        >
                          <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center shadow-lg">
                            <SiPython className="text-xs text-white" />
                          </div>
                        </motion.div>

                        {/* Main Photo */}
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="relative w-80 h-80 mx-auto z-10"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 rounded-3xl transform rotate-6 opacity-20"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-black rounded-3xl transform -rotate-6 opacity-20"></div>
                          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl border border-gray-200 overflow-hidden">
                            <div className="w-full h-full rounded-2xl overflow-hidden">
                              <img
                                src="/hugo.jpg"
                                alt="Hugo Dalmasio - Full-Stack Developer"
                                className="w-full h-full object-cover object-center"
                              />
                              {/* Overlay with name */}
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                <h3 className="text-xl font-bold text-white mb-1">Hugo Dalmasio</h3>
                                <p className="text-sm text-gray-200">Full-Stack Developer</p>
                                <div className="mt-2 flex justify-center space-x-1">
                                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                                  <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse delay-75"></div>
                                  <div className="w-2 h-2 bg-black rounded-full animate-pulse delay-150"></div>
                                </div>
              </div>
              </div>
            </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Interactive Stats Cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.1 + 0.3,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                        }}
                        className="group relative bg-white p-3 sm:p-4 md:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="relative z-10 text-center">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-1 sm:mb-2 md:mb-3 group-hover:text-blue-600 transition-colors duration-300"
                          >
                  {stat.number}
                          </motion.div>
                          <div className="text-gray-600 text-xs sm:text-sm font-medium uppercase tracking-wide">
                  {stat.label}
                          </div>
                </div>
              </motion.div>
            ))}
                  </div>
                </motion.div>

                {/* Values & Approach Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg"
                >
                  <div className="text-center mb-8 sm:mb-12">
                    <h3 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4">Minha Abordagem</h3>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                      Cada projeto é uma oportunidade de criar algo extraordinário
                    </p>
                </div>

                  <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {/* Value 1 */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-center group"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-200 to-gray-400 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <FaUser className="text-xl sm:text-2xl text-black" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">Foco no Usuário</h4>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Interfaces intuitivas e experiências que encantam. Cada decisão de design é guiada pela perspectiva do usuário final.
                      </p>
                    </motion.div>

                    {/* Value 2 */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-center group"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <FaTachometerAlt className="text-xl sm:text-2xl text-black" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">Performance</h4>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Código otimizado e arquiteturas escaláveis. Performance não é opcional, é essencial para uma boa experiência.
                      </p>
                    </motion.div>

                    {/* Value 3 */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="text-center group"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <FaCogs className="text-xl sm:text-2xl text-black" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">Inovação Contínua</h4>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Sempre aprendendo e evoluindo. A tecnologia avança rápido, e eu também. Cada projeto é uma oportunidade de crescimento.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Contact & Location Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {/* Location Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-black text-lg">Localização</h4>
                        <p className="text-gray-600">Espírito Santo, Brasil</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Contact Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-black text-lg">Contato</h4>
                        <p className="text-gray-600">hugo.devbr@gmail.com</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Timeline Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative"
                >
                  <div className="text-center mb-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="inline-block p-3 bg-gradient-to-r from-black to-gray-800 rounded-full mb-4"
                    >
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
          </motion.div>
                    <h3 className="text-3xl font-bold text-black mb-2">Experiência Profissional</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto"></div>
        </div>

                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-black via-gray-600 to-gray-400"></div>

                    <div className="space-y-8 sm:space-y-12">
                      {/* 2021 - First Contact with Technology */}
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative flex items-start"
                      >
        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10"
                        >
                          <span className="text-white font-bold text-sm">2021</span>
                        </motion.div>
                        <div className="ml-6 sm:ml-8 flex-1 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg p-4 sm:p-6 border-l-4 border-gray-400 hover:shadow-xl transition-all duration-300">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                            <h4 className="text-lg sm:text-xl font-bold text-black">Primeiro Contato com Tecnologia</h4>
                            <span className="px-3 py-1 bg-gray-400 text-white text-xs rounded-full font-medium self-start sm:self-auto">Início</span>
                          </div>
                          <p className="text-gray-600 text-xs sm:text-sm mb-3 font-medium">Curiosidade • Autodidatismo • Lógica de Programação</p>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Minha jornada começou com a curiosidade sobre como as aplicações funcionam.
                            Explorei conceitos básicos de lógica de programação, algoritmos e resolução de problemas.
                            Foi o momento de descoberta que despertou minha paixão pela tecnologia e desenvolvimento.
                          </p>
                        </div>
                      </motion.div>

                      {/* 2022 - Frontend Fundamentals */}
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="relative flex items-start"
                      >
        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10"
                        >
                          <span className="text-white font-bold text-sm">2022</span>
                        </motion.div>
                        <div className="ml-6 sm:ml-8 flex-1 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg p-4 sm:p-6 border-l-4 border-gray-600 hover:shadow-xl transition-all duration-300">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                            <h4 className="text-lg sm:text-xl font-bold text-black">Fundamentos do Frontend</h4>
                            <span className="px-3 py-1 bg-gray-600 text-white text-xs rounded-full font-medium self-start sm:self-auto">Frontend</span>
                          </div>
                          <p className="text-gray-600 text-xs sm:text-sm mb-3 font-medium">HTML • CSS • JavaScript Básico</p>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Iniciei minha jornada aprendendo os fundamentos do desenvolvimento web.
                            Desde estruturas básicas de HTML até manipulação do DOM com JavaScript puro,
                            estabeleci as bases sólidas para minha carreira em tecnologia.
                          </p>
                        </div>
                      </motion.div>

                      {/* 2022 - Advanced Frontend */}
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="relative flex items-start"
                      >
                        <motion.div
              whileHover={{ scale: 1.1 }}
                          className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10"
                        >
                          <span className="text-white font-bold text-sm">2023</span>
                        </motion.div>
                        <div className="ml-6 sm:ml-8 flex-1 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg p-4 sm:p-6 border-l-4 border-gray-500 hover:shadow-xl transition-all duration-300">
                          <h4 className="text-lg sm:text-xl font-bold text-black mb-3">Frontend Avançado & Frameworks</h4>
                          <p className="text-gray-600 text-xs sm:text-sm mb-3 font-medium">React • TypeScript • Tailwind CSS</p>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Evoluí minhas habilidades aprendendo frameworks modernos e ferramentas avançadas.
                            Dominei React para criar interfaces interativas, TypeScript para código mais robusto,
                            e Tailwind CSS para desenvolvimento rápido e consistente de UI.
                          </p>
                        </div>
                      </motion.div>

                      {/* 2023 - Backend Development */}
            <motion.div
                        initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="relative flex items-start"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10"
                        >
                          <span className="text-white font-bold text-sm">2024</span>
                        </motion.div>
                        <div className="ml-6 sm:ml-8 flex-1 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg p-4 sm:p-6 border-l-4 border-gray-700 hover:shadow-xl transition-all duration-300">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                            <h4 className="text-lg sm:text-xl font-bold text-black">Desenvolvimento Backend & APIs</h4>
                            <span className="px-3 py-1 bg-gray-700 text-white text-xs rounded-full font-medium self-start sm:self-auto">Backend</span>
                          </div>
                          <p className="text-gray-600 text-xs sm:text-sm mb-3 font-medium">Node.js • Express • PostgreSQL • REST APIs</p>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Expandí minhas habilidades para o lado servidor, aprendendo Node.js, Express e bancos de dados.
                            Desenvolvi APIs REST robustas, implementei autenticação e segurança,
                            e integrei sistemas complexos com diferentes tecnologias.
                          </p>
                    </div>
                      </motion.div>

                      {/* 2024 - Full Stack Mastery */}
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="relative flex items-start"
                      >
        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10"
                        >
                          <span className="text-white font-bold text-sm">2025</span>
                        </motion.div>
                        <div className="ml-6 sm:ml-8 flex-1 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg p-4 sm:p-6 border-l-4 border-gray-800 hover:shadow-xl transition-all duration-300">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                            <h4 className="text-lg sm:text-xl font-bold text-black">Full Stack Mastery & Projetos Complexos</h4>
                            <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full font-medium self-start sm:self-auto">Full Stack</span>
                          </div>
                          <p className="text-gray-600 text-xs sm:text-sm mb-3 font-medium">Projetos Completos • DevOps • Arquitetura</p>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Solidifiquei minhas habilidades como desenvolvedor full stack, integrando frontend e backend
                            em projetos complexos e escaláveis. Implementei DevOps, arquitetura de microsserviços,
                            e trabalhei em projetos de blockchain e aplicações mobile de ponta a ponta.
                          </p>
                        </div>
                      </motion.div>

                      {/* 2025 - Future Technologies & Innovation */}
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="relative flex items-start"
                      >
        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10"
                        >
                          <span className="text-white font-bold text-sm">2026</span>
                        </motion.div>
                        <div className="ml-6 sm:ml-8 flex-1 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg p-4 sm:p-6 border-l-4 border-gray-900 hover:shadow-xl transition-all duration-300">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                            <h4 className="text-lg sm:text-xl font-bold text-black">Tecnologias Emergentes & Inovação</h4>
                            <span className="px-3 py-1 bg-black text-white text-xs rounded-full font-medium self-start sm:self-auto">Futuro</span>
                          </div>
                          <p className="text-gray-600 text-xs sm:text-sm mb-3 font-medium">IA • Web3 • Edge Computing • Metaverso</p>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Explorando as fronteiras da tecnologia, mergulhando em inteligência artificial,
                            desenvolvimento Web3 avançado, computação de borda e experiências imersivas.
                            Criando soluções inovadoras que antecipam as necessidades do futuro digital.
                          </p>
                    </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Mission & Vision */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="grid md:grid-cols-2 gap-8"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
                      <div className="text-center mb-6">
                        <motion.div
                          className="inline-block p-4 bg-gradient-to-br from-black to-gray-800 rounded-full mb-4"
                        >
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </motion.div>
                        <h3 className="text-2xl font-bold text-black mb-2">Missão</h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-center">
                        Transformar ideias em soluções digitais eficientes e inovadoras que realmente fazem diferença
                        na vida das pessoas e no crescimento dos negócios.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
                      <div className="text-center mb-6">
                        <motion.div
                          className="inline-block p-4 bg-gradient-to-br from-black to-gray-800 rounded-full mb-4"
                        >
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </motion.div>
                        <h3 className="text-2xl font-bold text-black mb-2">Visão</h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-center">
                        Expandir minhas soluções à nível global sempre com
                        inovação e compromisso com resultados excepcionais, aprendendo a cada linha nova.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Certifications */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="relative"
                >
                  <div className="text-center mb-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="inline-block p-3 bg-gradient-to-r from-black to-gray-800 rounded-full mb-4"
                    >
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </motion.div>
                    <h3 className="text-3xl font-bold text-black mb-2">Certificações</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto"></div>
                  </div>

                  <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                    {/* React Developer */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="group relative bg-white rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <motion.div
                          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                        >
                          <FaFacebookF className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-bold text-black text-lg mb-1">React Developer</h4>
                          <p className="text-gray-600 text-sm mb-2">Meta/Facebook</p>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-green-600 text-sm font-medium">Certificado</span>
                            <svg className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* JavaScript Algorithms */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="group relative bg-white rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer"
                      onClick={() => window.open('https://www.freecodecamp.org/certification/hugods/javascript-algorithms-and-data-structures-v8', '_blank')}
                    >
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <motion.div
                          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                        >
                          <FaCode className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-bold text-black text-lg mb-1">JavaScript Algorithms</h4>
                          <p className="text-gray-600 text-sm mb-2">freeCodeCamp</p>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-green-600 text-sm font-medium">Certificado</span>
                            <svg className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Responsive Web Design */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="group relative bg-white rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer"
                      onClick={() => window.open('https://www.freecodecamp.org/certification/hugods/responsive-web-design', '_blank')}
                    >
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <motion.div
                          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                        >
                          <FaDesktop className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-bold text-black text-lg mb-1">Responsive Web Design</h4>
                          <p className="text-gray-600 text-sm mb-2">freeCodeCamp</p>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-green-600 text-sm font-medium">Certificado</span>
                  </div>
                </div>
              </div>
            </motion.div>

                    {/* Solana Developer */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="group relative bg-white rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <motion.div
                          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-900 to-black rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                        >
                          <SiSolana className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-bold text-black text-lg mb-1">Solana Developer</h4>
                          <p className="text-gray-600 text-sm mb-2">Solana Labs</p>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-green-600 text-sm font-medium">Certificado</span>
                            <svg className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Career Essentials in GitHub Professional Certificate */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="group relative bg-white rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer"
                      onClick={() => window.open('https://www.linkedin.com/learning/certificates/134ba26c58cdf5456a3424d040c77d084251ca7e1e83b7579cee8597d63be8a8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BywBHckkGS1CPsXGmMUGpSA%3D%3D', '_blank')}
                    >
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <motion.div
                          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                        >
                          <FaGithub className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-bold text-black text-lg mb-1">Career Essentials in GitHub</h4>
                          <p className="text-gray-600 text-sm mb-2">Professional Certificate</p>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-green-600 text-sm font-medium">Certificado</span>
                            <svg className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
          </motion.div>
          )}
        </AnimatePresence>

        {/* Services Section */}
        <AnimatePresence>
          {activeSection === 'services' && (
              <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
                  Serviços Oferecidos
                </h3>
                <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
                <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
                  Soluções completas e personalizadas para transformar suas ideias em realidade digital,
                  com foco em qualidade, performance e experiência do usuário.
                </p>
                  </div>

              <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
                {services.map((service, index) => (
                  <motion.div
                  key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative p-8 rounded-2xl text-center group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 border ${
                      index % 2 === 0
                        ? 'bg-white border-gray-200 hover:border-gray-400 hover:shadow-2xl hover:shadow-gray-200/50'
                        : 'bg-black border-gray-700 hover:border-gray-500 hover:shadow-2xl hover:shadow-gray-900/50'
                    }`}
                  >
                    {/* Icon Container */}
                    <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 transition-all duration-500 group-hover:scale-110 ${
                      index % 2 === 0
                        ? 'bg-gray-100 text-gray-700 group-hover:bg-gray-200'
                        : 'bg-gray-800 text-gray-300 group-hover:bg-gray-700'
                    }`}>
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                        {service.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h4 className={`font-bold mb-3 text-lg leading-tight transition-colors duration-300 ${
                        index % 2 === 0 ? 'text-gray-900 group-hover:text-black' : 'text-white group-hover:text-gray-100'
                      }`}>
                  {service.title}
                      </h4>
                      <p className={`text-sm leading-relaxed transition-all duration-500 ${
                        index % 2 === 0
                          ? 'text-gray-600 opacity-80 group-hover:opacity-100 group-hover:text-gray-700'
                          : 'text-gray-300 opacity-80 group-hover:opacity-100 group-hover:text-gray-200'
                      }`}>
                        {service.description}
                      </p>
                  </div>

                    {/* Subtle Hover Indicator */}
                    <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-0.5 rounded-full transition-all duration-500 ${
                      index % 2 === 0
                        ? 'bg-gray-400 scale-x-0 group-hover:scale-x-100'
                        : 'bg-gray-500 scale-x-0 group-hover:scale-x-100'
                    }`}></div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
            <button
              onClick={() => {
                setActiveSection('contact')
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-black text-white px-10 py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-black/50"
            >
              Vamos Conversar
            </button>
          </div>
          </motion.div>
          )}
        </AnimatePresence>

        {/* Skills Section */}
        <AnimatePresence>
          {activeSection === 'skills' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <Skills />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Projects Section */}
        <AnimatePresence>
          {activeSection === 'projects' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <Projects />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Section */}
        <AnimatePresence>
          {activeSection === 'contact' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <Contact />
        </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default About