import React, { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const fullText = 'Full Stack Developer'
  const [currentIndex, setCurrentIndex] = useState(0)

  // Mouse interaction system
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState([])
  const [isHoveringHero, setIsHoveringHero] = useState(false)
  const [isHoveringButton, setIsHoveringButton] = useState(false)
  const heroRef = useRef(null)

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setMousePosition({ x: e.clientX, y: e.clientY })

        // Create interactive particles
        const grayTones = ['#374151', '#4B5563', '#6B7280', '#9CA3AF', '#D1D5DB']
        const newParticle = {
          id: Date.now() + Math.random(),
          x: x,
          y: y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 100,
          size: Math.random() * 4 + 2,
          color: grayTones[Math.floor(Math.random() * grayTones.length)]
        }

        setParticles(prev => [...prev.slice(-15), newParticle])
      }
    }

    const handleMouseEnter = () => {
      setIsHoveringHero(true)
    }

    const handleMouseLeave = () => {
      setIsHoveringHero(false)
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove)
      heroElement.addEventListener('mouseenter', handleMouseEnter)
      heroElement.addEventListener('mouseleave', handleMouseLeave)
      return () => {
        heroElement.removeEventListener('mousemove', handleMouseMove)
        heroElement.removeEventListener('mouseenter', handleMouseEnter)
        heroElement.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  // Particle animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.vx,
        y: particle.y + particle.vy,
        vx: particle.vx * 0.98,
        vy: particle.vy * 0.98,
        life: particle.life - 1
      })).filter(particle => particle.life > 0))
    }, 16)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden"
      style={{ cursor: (isHoveringHero || isHoveringButton) ? 'none' : 'auto' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #000 2px, transparent 2px), radial-gradient(circle at 75% 75%, #000 2px, transparent 2px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Custom Cursor */}
      <motion.div
        className="fixed w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          backgroundColor: isHoveringButton ? '#ffffff' : '#000000',
        }}
        animate={{
          scale: (isHoveringHero || isHoveringButton) ? [0, 1.2, 1] : 0,
          opacity: (isHoveringHero || isHoveringButton) ? 1 : 0,
          backgroundColor: isHoveringButton ? '#ffffff' : '#000000'
        }}
        transition={{
          scale: { duration: 0.3, ease: "easeOut" },
          opacity: { duration: 0.2 },
          backgroundColor: { duration: 0.3, ease: "easeOut" }
        }}
      />

      {/* Interactive Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
          }}
          animate={{
            scale: [1, 1.5, 0],
            opacity: [1, 0.8, 0]
          }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      ))}

      {/* Floating Elements - Hidden on small screens */}
      <div className="hidden sm:block">
        <motion.div
          className="absolute top-20 left-4 sm:left-10 w-4 h-4 bg-black rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-4 sm:right-20 w-6 h-6 bg-gray-400 rounded-full opacity-10"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 left-4 sm:left-20 w-3 h-3 bg-black rounded-full opacity-15"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 360, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container-max text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-6">
          {/* Greeting */}
          <ScrollReveal direction="up" delay={0.1}>
            <motion.h2
              className="text-lg text-gray-600 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              Olá, eu sou
            </motion.h2>
          </ScrollReveal>

          {/* Name */}
          <ScrollReveal direction="up" delay={0.2}>
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-black"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Hugo Dalmasio
            </motion.h1>
          </ScrollReveal>

          {/* Title with typing effect */}
          <ScrollReveal direction="up" delay={0.4}>
            <motion.div
              className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-medium"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-black">{currentText}</span>
              <motion.span
                className="inline-block"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.div>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal direction="up" delay={0.6}>
            <motion.p
              className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed"
              whileHover={{ scale: 1.01 }}
            >
              Transformando ideias em soluções digitais inovadoras através de código limpo e tecnologias modernas.
              Especialista em desenvolvimento web e mobile com foco em experiência do usuário.
            </motion.p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal direction="up" delay={0.8}>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
              whileHover={{ scale: 1.01 }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                onMouseEnter={() => setIsHoveringButton(true)}
                onMouseLeave={() => setIsHoveringButton(false)}
                className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 relative overflow-hidden group"
                style={{ cursor: 'none' }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Ver Projetos</span>
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                onMouseEnter={() => setIsHoveringButton(true)}
                onMouseLeave={() => setIsHoveringButton(false)}
                className="px-8 py-3 border-2 border-black text-black rounded-lg font-medium hover:bg-black hover:text-white transition-all duration-200 relative overflow-hidden group"
                style={{ cursor: 'none' }}
              >
                <motion.span
                  className="absolute inset-0 bg-black"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
                <button
                  onClick={() => {
                    if (window.activateTab) {
                      document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
                      setTimeout(() => window.activateTab('contact'), 300)
                    } else {
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  onMouseEnter={() => setIsHoveringButton(true)}
                  onMouseLeave={() => setIsHoveringButton(false)}
                  className="relative z-10 group-hover:text-white hover:underline transition-all duration-300"
                  style={{ cursor: 'none' }}
                >
                  Entre em Contato
                </button>
              </motion.button>
            </motion.div>
          </ScrollReveal>

          {/* Scroll indicator */}
          <ScrollReveal direction="up" delay={1.2}>
            <motion.div
              className="absolute bottom+20 left-1/2 transform -translate-x-1/2"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
                style={{ cursor: 'none' }}
                onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
                onMouseEnter={() => setIsHoveringButton(true)}
                onMouseLeave={() => setIsHoveringButton(false)}
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                />
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>

    </section>
  )
}

export default Hero