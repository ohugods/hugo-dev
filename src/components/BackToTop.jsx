import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={openWhatsApp}
          className="fixed bottom-8 right-8 z-[9999] w-16 h-16 sm:w-18 sm:h-18 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 flex items-center justify-center border-2 border-white hover:border-green-200"
          aria-label="Conversar no WhatsApp"
        >
          <FaWhatsapp className="w-10 h-10 sm:w-12 sm:h-12" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
