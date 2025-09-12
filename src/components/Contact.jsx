import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp, FaCheck, FaExclamationTriangle } from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})

  const [submitStatus, setSubmitStatus] = useState(null) // null, 'success', 'error'


  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Nome deve ter pelo menos 2 caracteres'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Assunto é obrigatório'
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Assunto deve ter pelo menos 5 caracteres'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    // Criar email usando mailto (sempre funciona)
    const subject = encodeURIComponent(`Portfolio - ${formData.subject}`)
    const body = encodeURIComponent(`
Nome: ${formData.name}
Email: ${formData.email}

Assunto: ${formData.subject}

Mensagem:
${formData.message}

---
Enviado através do formulário do portfolio
    `.trim())

    const mailtoLink = `mailto:hugo.devbr@gmail.com?subject=${subject}&body=${body}`

    // Abrir cliente de email
    window.location.href = mailtoLink

    // Mostrar mensagem de sucesso
    setSubmitStatus('success')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })


  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'hugo.devbr@gmail.com',
      link: 'mailto:hugo.devbr@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Localização',
      value: 'Espírito Santo, Brasil',
      link: null
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/hugods',
      link: 'https://linkedin.com/in/hugods'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: 'ohugods',
      link: 'https://github.com/ohugods'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Vamos discutir seu projeto e como posso ajudar a transformar suas ideias em realidade
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                Vamos Conversar
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Estou sempre aberto a novas oportunidades e projetos interessantes.
                Se você tem uma ideia ou projeto em mente, adoraria ouvir sobre isso!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className={`flex items-center p-4 bg-gray-50 rounded-lg card-hover ${
                    info.link ? 'cursor-pointer hover:bg-blue-50 border-2 border-transparent hover:border-blue-200' : ''
                  }`}
                  onClick={() => info.link && window.open(info.link, '_blank', 'noopener,noreferrer')}
                >
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">
                      {info.title}
                    </h4>
                    <p className={`${
                      info.link ? 'text-gray-700 font-medium' : 'text-gray-600'
                    }`}>
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-black text-white p-6 rounded-lg"
            >
              <h4 className="text-lg font-semibold mb-3">
                Resposta Rápida
              </h4>
              <p className="text-gray-300 mb-4">
                Para projetos urgentes ou consultas rápidas, você pode me contatar diretamente:
              </p>
              <a
                href="https://wa.me/5527995083280"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <FaWhatsapp className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-black mb-6">
              Resposta Rápida
            </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
                >
                  <FaCheck className="w-5 h-5" />
                  <span>Email preparado! Seu cliente de email foi aberto com a mensagem.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
                >
                  <FaExclamationTriangle className="w-5 h-5" />
                  <span>Erro ao abrir cliente de email. Verifique se você tem um cliente de email configurado.</span>
                </motion.div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                      errors.name
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent'
                    }`}
                    placeholder="Seu nome completo"
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-600 flex items-center space-x-1"
                    >
                      <FaExclamationTriangle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                      errors.email
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent'
                    }`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-600 flex items-center space-x-1"
                    >
                      <FaExclamationTriangle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </motion.p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                    errors.subject
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                      : 'border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent'
                  }`}
                  placeholder="Sobre o que você gostaria de conversar?"
                />
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-600 flex items-center space-x-1"
                  >
                    <FaExclamationTriangle className="w-3 h-3" />
                    <span>{errors.subject}</span>
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 resize-none ${
                    errors.message
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                      : 'border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent'
                  }`}
                  placeholder="Conte-me mais sobre seu projeto ou ideia..."
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-600 flex items-center space-x-1"
                  >
                    <FaExclamationTriangle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </motion.p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
      </div>
    </section>
  )
}

export default Contact