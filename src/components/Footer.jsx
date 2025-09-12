import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      // Se for uma aba do About, ativa ela
      if (['#about', '#skills', '#projects', '#contact'].includes(sectionId)) {
        const tabMap = {
          '#about': 'about',
          '#skills': 'skills',
          '#projects': 'projects',
          '#contact': 'contact'
        }
        if (window.activateTab) {
          window.activateTab(tabMap[sectionId])
        }
      }
    }
  }

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container-max py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-8"
        >
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-1"
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Hugo Dalmasio
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Desenvolvedor Full Stack
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformando ideias em soluções digitais inovadoras e eficientes.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1"
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('#home')}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#skills')}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Habilidades
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#projects')}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-1"
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="w-4 h-4 text-gray-400" />
                <a
                  href="mailto:hugo.devbr@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  hugo.devbr@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">
                  Espírito Santo, Brasil
                </span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-1"
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Conecte-se</h4>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/ohugods"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/hugods"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="border-t border-gray-800"
      >
        <div className="container-max py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Hugo Dalmasio. Todos os direitos reservados.
            </div>
            <div className="text-gray-500 text-xs">
              Desenvolvido usando React & Tailwind CSS
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer