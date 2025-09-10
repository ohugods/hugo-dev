import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMobile, FaLeaf } from 'react-icons/fa'
import { SiBlockchaindotcom } from 'react-icons/si'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })


  const projects = [
    {
      title: 'RDO Mobile',
      subtitle: 'Vitória Ambiental S/A',
      description: 'Aplicativo mobile desenvolvido sob medida para a Vitória Ambiental S/A, focado em gestão ambiental, controle de processos e monitoramento em tempo real. Implementado com React Native e integração com APIs customizadas.',
      longDescription: 'O projeto revolucionou a forma como a empresa gerencia seus processos ambientais, proporcionando maior eficiência e controle operacional. O aplicativo permite monitoramento em tempo real, geração de relatórios automáticos e integração com sistemas existentes.',
      technologies: ['React Native', 'Expo Go', 'Node.js', 'MySQL', 'REST APIs'],
      category: 'Mobile Development',
      icon: FaMobile,
      color: '#61DAFB',
      features: [
        'Monitoramento em tempo real',
        'Controle de processos ambientais',
        'Geração de relatórios automáticos',
        'Integração com sistemas existentes',
        'Interface intuitiva e responsiva'
      ]
    },
    {
      title: 'AgroFlow',
      subtitle: 'Gestão Rural Completa',
      description: 'Sistema completo de gestão rural que abrange controle de produção, gestão de recursos, monitoramento de safras e automação de processos agrícolas. Desenvolvido com tecnologias modernas para otimizar operações do campo.',
      longDescription: 'A solução integra múltiplas funcionalidades em uma única plataforma, facilitando a tomada de decisões baseada em dados reais. O sistema oferece controle total sobre produção agrícola, gestão financeira e planejamento estratégico.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Python', 'Docker'],
      category: 'Web Application',
      icon: FaLeaf,
      color: '#4CAF50',
      features: [
        'Controle de produção agrícola',
        'Gestão de recursos e finanças',
        'Monitoramento de safras',
        'Automação de processos',
        'Dashboard analítico'
      ]
    },
    {
      title: 'Tenebris',
      subtitle: 'Web3 Blockchain Solana',
      description: 'Plataforma Web3 inovadora desenvolvida na blockchain Solana, oferecendo soluções descentralizadas com foco em segurança, transparência e eficiência. Integração completa com smart contracts e wallet connections.',
      longDescription: 'Representa o futuro da tecnologia blockchain, combinando inovação com usabilidade. A plataforma oferece funcionalidades avançadas de DeFi, NFTs e transações descentralizadas com baixas taxas e alta velocidade.',
      technologies: ['Solana', 'Web3.js', 'React', 'TypeScript', 'Smart Contracts'],
      category: 'Blockchain',
      icon: SiBlockchaindotcom,
      color: '#14F195',
      features: [
        'Smart contracts na Solana',
        'Integração com wallets',
        'Funcionalidades DeFi',
        'Sistema de NFTs',
        'Transações descentralizadas'
      ]
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Projetos Destacados
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Experiência Profissional Minha trajetória profissional e os projetos que me ajudaram a crescer como desenvolvedor
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden card-hover"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Project Info */}
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <project.icon
                      className="w-8 h-8 mr-3"
                      style={{ color: project.color }}
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-black">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-black mb-3">
                      Principais Funcionalidades:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-black mb-3">
                      Tecnologias Utilizadas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Project Visual */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: project.color + '20' }}
                    >
                      <project.icon
                        className="w-16 h-16"
                        style={{ color: project.color }}
                      />
                    </div>
                    <h4 className="text-xl font-bold text-black mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-black mb-4">
            Interessado em trabalhar juntos?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Vamos discutir como posso ajudar a transformar sua ideia em uma solução digital inovadora
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            Vamos Conversar
          </motion.button>
        </motion.div>
      </div>

    </section>
  )
}

export default Projects