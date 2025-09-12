import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentText, setCurrentText] = useState('')
  const [isHovered, setIsHovered] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

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

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
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

          {/* Mobile CTA Button */}
          <div className="md:hidden">
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
              className="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
            >
              Vamos Conversar
            </motion.button>
          </div>
        </div>

      </div>
    </motion.nav>
  )
}

export default Navigation