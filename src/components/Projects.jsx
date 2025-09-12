import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMobile, FaLeaf, FaShoppingCart, FaCalculator, FaCode, FaRobot, FaGamepad, FaCloud, FaDesktop, FaLaptop, FaPalette, FaMusic, FaCamera, FaGlobe, FaRocket } from 'react-icons/fa'
import { SiBlockchaindotcom } from 'react-icons/si'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Função para gerar números aleatórios variados para as tecnologias extras
  const getRandomExtraCount = (index) => {
    const variations = [1, 2, 3, 4, 5, 6, 7, 8]
    return variations[index % variations.length]
  }


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
      year: 2025,
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
      year: 2025,
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
      year: 2024,
      features: [
        'Smart contracts na Solana',
        'Integração com wallets',
        'Funcionalidades DeFi',
        'Sistema de NFTs',
        'Transações descentralizadas'
      ]
    }
  ]

  const additionalProjects = [
    {
      title: 'Foeger',
      subtitle: 'Materiais de Construção',
      description: 'Site institucional completo para empresa de materiais de construção, com catálogo de produtos, calculadora de materiais e sistema de pedidos online.',
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'JavaScript'],
      category: 'E-commerce',
      icon: FaShoppingCart,
      color: '#059669',
      year: 2022
    },
    {
      title: 'Faz De Conta',
      subtitle: 'Hotelzinho Infantil',
      description: 'Site encantador para hotel temático infantil, com reservas online, galeria de fotos, informações sobre atividades e contato direto.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Framer Motion'],
      category: 'Hospitalidade',
      icon: FaGlobe,
      color: '#EC4899',
      year: 2025
    },
    {
      title: 'Tensni',
      subtitle: 'Dashboard de Bots',
      description: 'Dashboard administrativo para gerenciamento de bots automáticos da plataforma Tenebris, com monitoramento em tempo real e controles avançados.',
      technologies: ['React', 'TypeScript', 'Solana Web3.js', 'Node.js', 'WebSockets'],
      category: 'Blockchain',
      icon: FaDesktop,
      color: '#627EEA',
      year: 2024
    },
    {
      title: 'AgroTech Solutions',
      subtitle: 'Plataforma Agrícola',
      description: 'Sistema integrado para gestão agrícola com monitoramento IoT, análise de dados e recomendações inteligentes para otimização de colheitas.',
      technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'TensorFlow'],
      category: 'AgroTech',
      icon: FaLeaf,
      color: '#4CAF50',
      year: 2023
    },
    {
      title: 'EcoShop',
      subtitle: 'E-commerce Sustentável',
      description: 'Plataforma de e-commerce focada em produtos ecológicos com sistema de recomendações inteligentes.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'E-commerce',
      icon: FaShoppingCart,
      color: '#10B981'
    },
    {
      title: 'FinCalc Pro',
      subtitle: 'Calculadora Financeira',
      description: 'Aplicativo web avançado para cálculos financeiros, investimentos e planejamento orçamentário.',
      technologies: ['React', 'TypeScript', 'Chart.js', 'PWA'],
      category: 'Financeiro',
      icon: FaCalculator,
      color: '#3B82F6'
    },
    {
      title: 'CodeReview AI',
      subtitle: 'Assistente de Revisão',
      description: 'Ferramenta de IA para análise automática de código, sugestões de melhorias e detecção de bugs.',
      technologies: ['Python', 'OpenAI API', 'React', 'FastAPI'],
      category: 'IA & ML',
      icon: FaRobot,
      color: '#8B5CF6'
    },
    {
      title: 'Pixel Quest',
      subtitle: 'Jogo Indie 2D',
      description: 'Jogo de aventura pixel art desenvolvido com foco em gameplay inovador e narrativa envolvente.',
      technologies: ['Unity', 'C#', 'Blender', 'Photoshop'],
      category: 'Games',
      icon: FaGamepad,
      color: '#EF4444'
    },
    {
      title: 'CloudSync',
      subtitle: 'Sincronização na Nuvem',
      description: 'Sistema de backup e sincronização automática de arquivos com criptografia end-to-end.',
      technologies: ['React', 'AWS S3', 'Node.js', 'WebSockets'],
      category: 'Cloud',
      icon: FaCloud,
      color: '#06B6D4'
    },
    {
      title: 'TaskFlow',
      subtitle: 'Gerenciamento de Tarefas',
      description: 'Aplicativo desktop para gestão de projetos ágeis com integração com ferramentas populares.',
      technologies: ['Electron', 'React', 'SQLite', 'Trello API'],
      category: 'Desktop',
      icon: FaDesktop,
      color: '#F59E0B'
    },
    {
      title: 'Portfolio CMS',
      subtitle: 'Sistema de Portfólio',
      description: 'CMS personalizado para criação e gerenciamento de portfólios profissionais com temas customizáveis.',
      technologies: ['Next.js', 'Sanity CMS', 'Tailwind', 'Vercel'],
      category: 'CMS',
      icon: FaCode,
      color: '#000000'
    },
    {
      title: 'Smart Home Hub',
      subtitle: 'Automação Residencial',
      description: 'Central de controle para dispositivos IoT com interface intuitiva e automações inteligentes.',
      technologies: ['React Native', 'MQTT', 'Raspberry Pi', 'Node.js'],
      category: 'IoT',
      icon: FaLaptop,
      color: '#7C3AED'
    },
    {
      title: 'Artisan Gallery',
      subtitle: 'Galeria Digital de Arte',
      description: 'Plataforma para artistas independentes venderem suas obras com sistema de leilões virtuais.',
      technologies: ['React', 'Stripe', 'Firebase', 'Framer Motion'],
      category: 'Arte & Design',
      icon: FaPalette,
      color: '#EC4899'
    },
    {
      title: 'TuneStream',
      subtitle: 'Streaming de Música',
      description: 'Aplicativo de streaming musical com recursos de descoberta e playlists personalizadas por IA.',
      technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
      category: 'Música',
      icon: FaMusic,
      color: '#F97316'
    },
    {
      title: 'PhotoPro Studio',
      subtitle: 'Editor de Imagens',
      description: 'Editor de fotos profissional com ferramentas avançadas de manipulação e filtros customizáveis.',
      technologies: ['React', 'Canvas API', 'WebGL', 'TypeScript'],
      category: 'Fotografia',
      icon: FaCamera,
      color: '#6366F1'
    },
    {
      title: 'GlobalConnect',
      subtitle: 'Rede Social Global',
      description: 'Plataforma de rede social com foco em conexões profissionais e culturais internacionais.',
      technologies: ['React', 'GraphQL', 'PostgreSQL', 'Redis'],
      category: 'Social',
      icon: FaGlobe,
      color: '#059669'
    },
    {
      title: 'DevOps Dashboard',
      subtitle: 'Monitoramento de Infraestrutura',
      description: 'Dashboard completo para monitoramento de aplicações e infraestrutura com alertas inteligentes.',
      technologies: ['React', 'Prometheus', 'Grafana', 'Kubernetes'],
      category: 'DevOps',
      icon: FaRocket,
      color: '#DC2626'
    },
    {
      title: 'CryptoTracker',
      subtitle: 'Carteira de Criptomoedas',
      description: 'Aplicativo para rastreamento de investimentos em criptomoedas com análise de mercado em tempo real.',
      technologies: ['React Native', 'Web3.js', 'CoinGecko API', 'Firebase'],
      category: 'Fintech',
      icon: SiBlockchaindotcom,
      color: '#627EEA'
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

                  <div className="mb-4 flex gap-2 flex-wrap">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {project.year}
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

        {/* More Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              Mais Projetos
            </h3>
            <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Uma seleção diversificada de projetos que demonstram versatilidade técnica e criatividade em diferentes áreas de desenvolvimento.
            </p>
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="p-4">
                  <div className="flex items-center justify-center mb-3">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: project.color + '20' }}
                    >
                      <project.icon
                        className="w-6 h-6"
                        style={{ color: project.color }}
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <h4 className="text-sm font-bold text-black mb-1 group-hover:text-gray-700 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-gray-500 mb-2">
                      {project.subtitle}
                    </p>
                    <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium mb-2">
                      {project.category}
                    </span>
                    <p className="text-xs text-gray-600 leading-tight mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {project.technologies.slice(0, 2).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-50 text-gray-500 px-2 py-0.5 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="text-gray-400 text-xs">
                          +{getRandomExtraCount(index)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Card especial com "+" */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.8 + additionalProjects.length * 0.1,
                type: "spring",
                stiffness: 200
              }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer border-2 border-dashed border-blue-300"
            >
              <div className="p-4 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white font-bold text-3xl">+</span>
                  </div>
                  <h4 className="text-sm font-bold text-blue-700 mb-2">
                    Mais Projetos
                  </h4>
                  <p className="text-xs text-blue-600">
                    Em desenvolvimento
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

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
            onClick={() => {
              if (window.activateTab) {
                window.activateTab('contact')
              } else {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            }}
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