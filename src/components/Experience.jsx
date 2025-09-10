import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const competencies = [
    {
      icon: FaCode,
      title: 'Desenvolvimento Full Stack',
      description: 'Experiência sólida em desenvolvimento end-to-end, desde interfaces responsivas até APIs robustas e integração de sistemas.',
      skills: ['React', 'Node.js', 'Python', 'PostgreSQL', 'REST APIs']
    },
    {
      icon: FaRocket,
      title: 'Automação & Inovação',
      description: 'Especializado em criar soluções automatizadas que otimizam processos e aumentam a eficiência operacional.',
      skills: ['Process Automation', 'Workflow Optimization', 'API Integration', 'System Architecture']
    },
    {
      icon: FaUsers,
      title: 'Projetos Personalizados',
      description: 'Desenvolvimento de soluções sob medida para diversos setores, sempre focando nas necessidades específicas do cliente.',
      skills: ['Custom Solutions', 'Client Collaboration', 'Agile Development', 'Quality Assurance']
    },
    {
      icon: FaLightbulb,
      title: 'Soluções Inovadoras',
      description: 'Paixão por transformar ideias complexas em aplicações funcionais e intuitivas, com foco em experiência do usuário.',
      skills: ['UI/UX Design', 'Mobile Development', 'Web Applications', 'Problem Solving']
    }
  ]

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Competências Profissionais
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Focando em entregar soluções de alta qualidade através de tecnologias modernas
            e metodologias ágeis. Cada projeto é uma oportunidade de demonstrar expertise técnica
            e compromisso com resultados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {competencies.map((competency, index) => (
            <motion.div
              key={competency.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                  <competency.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black">
                  {competency.title}
                </h3>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {competency.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {competency.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-black text-white p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-4">
            Vamos Conversar Sobre Seu Projeto
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Cada desafio é único e merece uma solução personalizada.
            Adoraria conhecer mais sobre seu projeto e discutir como podemos
            trabalhar juntos para alcançar seus objetivos.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Iniciar Conversa
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
