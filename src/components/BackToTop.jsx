import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const openWhatsApp = () => {
    const phoneNumber = '5527995083280' // Número do Hugo
    const message = 'Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.'
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* WhatsApp Button - Mobile Only */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openWhatsApp}
            className="fixed bottom-8 right-8 z-[9999] w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 flex items-center justify-center border-2 border-white hover:border-green-200 md:hidden"
            aria-label="Conversar no WhatsApp"
          >
            <FaWhatsapp className="w-12 h-12" />
          </motion.button>

          {/* Scroll Up Button - Desktop Only */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[9999] w-12 h-12 bg-black text-white rounded-full shadow-2xl hover:bg-gray-800 transition-all duration-300 items-center justify-center border-2 border-white hover:border-gray-200 hidden md:flex"
            aria-label="Voltar ao topo"
          >
            <FaArrowUp className="w-6 h-6" />
          </motion.button>
        </>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
