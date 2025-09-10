import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaMobileAlt,
  FaCloud,
  FaCode,
  FaTools,
  FaServer,
  FaLeaf
} from 'react-icons/fa'
import { SiPostgresql, SiEthereum } from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: 'Frontend',
      icon: FaReact,
      color: '#61DAFB',
      skills: [
        { name: 'React.js', level: 95, description: 'Framework principal para interfaces modernas e escaláveis' },
        { name: 'JavaScript/TypeScript', level: 92, description: 'Linguagens de programação web com tipagem forte' },
        { name: 'Tailwind CSS', level: 90, description: 'Framework CSS utilitário para desenvolvimento rápido' },
        { name: 'Framer Motion', level: 85, description: 'Biblioteca de animações avançadas e performáticas' }
      ]
    },
    {
      title: 'Backend',
      icon: FaServer,
      color: '#339933',
      skills: [
        { name: 'Node.js', level: 90, description: 'Runtime JavaScript para aplicações server-side escaláveis' },
        { name: 'Python', level: 88, description: 'Linguagem versátil para automação e análise de dados' },
        { name: 'REST APIs', level: 92, description: 'Arquitetura de serviços web robusta e segura' },
        { name: 'Express.js', level: 85, description: 'Framework web minimalista e performático' }
      ]
    },
    {
      title: 'Mobile',
      icon: FaMobileAlt,
      color: '#61DAFB',
      skills: [
        { name: 'React Native', level: 90, description: 'Framework cross-platform para iOS e Android' },
        { name: 'Expo Go', level: 88, description: 'Plataforma para desenvolvimento React Native acelerado' },
        { name: 'Mobile UI/UX', level: 85, description: 'Design mobile-first e experiência nativa' }
      ]
    },
    {
      title: 'Banco de Dados',
      icon: FaDatabase,
      color: '#336791',
      skills: [
        { name: 'PostgreSQL', level: 85, description: 'Banco relacional robusto com suporte avançado a JSON' },
        { name: 'MySQL', level: 80, description: 'Sistema de gerenciamento de BD relacional maduro' },
        { name: 'MongoDB', level: 78, description: 'Banco NoSQL orientado a documentos e flexível' }
      ]
    },
    {
      title: 'Blockchain',
      icon: SiEthereum,
      color: '#627EEA',
      skills: [
        { name: 'Solana', level: 80, description: 'Blockchain de alta performance para aplicações Web3' },
        { name: 'Web3.js', level: 75, description: 'Biblioteca JavaScript para interação com blockchain' },
        { name: 'Smart Contracts', level: 78, description: 'Desenvolvimento de contratos inteligentes seguros' }
      ]
    },
    {
      title: 'Ferramentas',
      icon: FaTools,
      color: '#000000',
      skills: [
        { name: 'Git/GitHub', level: 92, description: 'Controle de versão avançado e colaboração em equipe' },
        { name: 'Docker', level: 85, description: 'Containerização e orquestração de aplicações' },
        { name: 'Vite', level: 88, description: 'Build tool moderno e ultra-rápido' },
        { name: 'VS Code', level: 90, description: 'Ambiente de desenvolvimento integrado e extensível' }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Habilidades & Tecnologias
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Tecnologias e ferramentas utilizadas nos projetos desenvolvidos,
            sempre buscando as melhores soluções para cada desafio específico.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                  style={{ backgroundColor: category.color + '20' }}
                >
                  <category.icon
                    className="w-6 h-6"
                    style={{ color: category.color }}
                  />
                </div>
                <h3 className="text-xl font-bold text-black">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
                        className="h-2 rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-black mb-4">
              Sempre Aprendendo
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              A tecnologia evolui rapidamente, e eu me mantenho atualizado com as
              últimas tendências e melhores práticas. Cada projeto é uma oportunidade
              de aprender algo novo e aplicar conhecimentos de forma inovadora.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Next.js', 'TypeScript', 'GraphQL', 'AWS', 'Kubernetes'].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
