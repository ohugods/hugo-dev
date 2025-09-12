import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentText, setCurrentText] = useState('')
  const [isHovered, setIsHovered] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeTab, setActiveTab] = useState('about')

  const fullText = 'Hugo Dalmasio'
  const shortText = 'HD'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isHovered) {
      // Reset quando hover inicia (apenas se ainda não começou)
      if (currentIndex === 0 && currentText === '') {
        setCurrentText('')
      }

      // Animação para escrever "Hugo Dalmasio"
      if (currentIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setCurrentText(prev => prev + fullText[currentIndex])
          setCurrentIndex(prev => prev + 1)
        }, 80)
        return () => clearTimeout(timeout)
      }
    }
    // Remove o else que resetava para "HD"
  }, [isHovered, currentIndex, fullText])

  // Quando mouse entra, inicia animação apenas se não estiver expandido
  const handleMouseEnter = () => {
    if (!isHovered) {
      setIsHovered(true)
      setCurrentText('')
      setCurrentIndex(0)
    }
    // Se já estiver hovered, não faz nada (mantém estado atual)
  }

  // Quando mouse sai, mantém o estado (não reseta)
  const handleMouseLeave = () => {
    // Não faz nada - mantém o estado atual
  }

  // Clique para voltar ao estado comprimido
  const handleClick = () => {
    if (isHovered && currentIndex >= fullText.length) {
      setIsHovered(false)
      setCurrentText('')
      setCurrentIndex(0)
    }
  }

  const navItems = [
    { name: 'Sobre', tab: 'about' },
    { name: 'Serviços', tab: 'services' },
    { name: 'Habilidades', tab: 'skills' },
    { name: 'Projetos', tab: 'projects' },
    { name: 'Contato', tab: 'contact' }
  ]

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
    setIsMobileMenuOpen(false)
    // Scroll para a seção about e ativar a aba específica
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        if (window.activateTab) {
          window.activateTab(tabId)
        }
      }, 300)
    }
  }

  const scrollToSection = (item) => {
    const element = document.querySelector(item.href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      // Se tem uma aba específica, ativa ela após um pequeno delay
      if (item.tab && window.activateTab) {
        setTimeout(() => {
          window.activateTab(item.tab)
        }, 300)
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`text-xl font-bold text-black select-none ${
              isHovered && currentIndex >= fullText.length ? 'cursor-pointer' : 'cursor-default'
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            {isHovered ? (
              <span className="text-black">
                {currentIndex >= fullText.length ? (
                  // Estado persistido - sem animações
                  fullText
                ) : (
                  // Estado em animação - com cursor piscando
                  <>
                    {currentText}
                    <motion.span
                      className="inline-block ml-0.5"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      |
                    </motion.span>
                  </>
                )}
              </span>
            ) : (
              <span className="text-black">HD</span>
            )}
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.button>
            ))}

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#about')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                  // Ativar aba de contato após delay
                  if (window.activateTab) {
                    setTimeout(() => {
                      window.activateTab('contact')
                    }, 300)
                  }
                }
              }}
              className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Vamos Conversar
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black p-3 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 pt-3 pb-4 space-y-1">
              {/* Mobile Navigation Items */}
              {navItems.map((item) => (
                <button
                  key={item.tab}
                  onClick={() => handleTabClick(item.tab)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors duration-200 text-base ${
                    activeTab === item.tab
                      ? 'bg-black text-white'
                      : 'text-gray-700 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-2 border-t border-gray-200">
                <button
                  onClick={() => handleTabClick('contact')}
                  className="block w-full bg-black text-white px-6 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-lg"
                >
                  Vamos Conversar
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation