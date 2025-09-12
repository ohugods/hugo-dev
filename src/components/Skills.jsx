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
  FaLeaf,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  FaPalette,
  FaSyncAlt
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
        { name: 'React.js', level: 97, description: 'Framework principal para interfaces modernas e escaláveis' },
        { name: 'JavaScript/TypeScript', level: 95, description: 'Linguagens de programação web com tipagem forte' },
        { name: 'Tailwind CSS', level: 93, description: 'Framework CSS utilitário para desenvolvimento rápido' },
        { name: 'Framer Motion', level: 88, description: 'Biblioteca de animações avançadas e performáticas' }
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
        { name: 'React Native', level: 93, description: 'Framework cross-platform para iOS e Android' },
        { name: 'Expo Go', level: 90, description: 'Plataforma para desenvolvimento React Native acelerado' },
        { name: 'Mobile UI/UX', level: 88, description: 'Design mobile-first e experiência nativa' }
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
        { name: 'Smart Contracts', level: 70, description: 'Desenvolvimento de contratos inteligentes seguros' }
      ]
    },
    {
      title: 'Ferramentas',
      icon: FaTools,
      color: '#000000',
      skills: [
        { name: 'Git/GitHub', level: 95, description: 'Controle de versão avançado e colaboração em equipe' },
        { name: 'Docker', level: 88, description: 'Containerização e orquestração de aplicações' },
        { name: 'Vite', level: 90, description: 'Build tool moderno e ultra-rápido' },
        { name: 'VS Code', level: 93, description: 'Ambiente de desenvolvimento integrado e extensível' }
      ]
    },
    {
      title: 'Infraestrutura',
      icon: FaLeaf,
      color: '#059669',
      skills: [
        { name: 'Nginx/Apache', level: 82, description: 'Servidores web de alta performance e configuração avançada' },
        { name: 'Redis/Memcached', level: 80, description: 'Sistemas de cache para otimização de performance' },
        { name: 'RabbitMQ/Kafka', level: 78, description: 'Mensageria assíncrona para sistemas distribuídos' },
        { name: 'Elasticsearch', level: 75, description: 'Busca e analytics em tempo real para big data' },
        { name: 'Prometheus/Grafana', level: 76, description: 'Monitoramento e observabilidade de sistemas' },
        { name: 'OAuth 2.0/SAML', level: 80, description: 'Autenticação e autorização enterprise' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: FaCloud,
      color: '#3B82F6',
      skills: [
        { name: 'AWS/GCP/Azure', level: 45, description: 'Serviços de nuvem para infraestrutura escalável' },
        { name: 'Docker/Kubernetes', level: 78, description: 'Containerização e orquestração de aplicações' },
        { name: 'CI/CD Pipelines', level: 88, description: 'Automação de deploy e integração contínua' },
        { name: 'Terraform/Ansible', level: 82, description: 'Infraestrutura como código e automação' },
        { name: 'Monitoring', level: 85, description: 'Observabilidade e alertas de sistemas' },
        { name: 'Load Balancing', level: 80, description: 'Distribuição de carga e alta disponibilidade' }
      ]
    },
    {
      title: 'APIs & Integrações',
      icon: FaRocket,
      color: '#7C3AED',
      skills: [
        { name: 'REST/GraphQL APIs', level: 92, description: 'Desenvolvimento de APIs modernas e escaláveis' },
        { name: 'Microserviços', level: 85, description: 'Arquitetura distribuída e comunicação entre serviços' },
        { name: 'Webhooks', level: 88, description: 'Integração assíncrona e automação de processos' },
        { name: 'API Gateway', level: 82, description: 'Gerenciamento e segurança de APIs' },
        { name: 'OAuth/JWT', level: 90, description: 'Autenticação e autorização segura' },
        { name: 'Rate Limiting', level: 80, description: 'Controle de uso e proteção contra abuso' }
      ]
    },
    {
      title: 'Metodologias',
      icon: FaSyncAlt,
      color: '#059669',
      skills: [
        { name: 'Agile/Scrum', level: 95, description: 'Metodologias ágeis para desenvolvimento iterativo e colaborativo' },
        { name: 'Kanban', level: 92, description: 'Gestão visual de fluxo de trabalho e produtividade' },
        { name: 'TDD/BDD', level: 90, description: 'Desenvolvimento orientado por testes e comportamento' },
        { name: 'Design Thinking', level: 88, description: 'Abordagem centrada no usuário para solução de problemas' },
        { name: 'Lean Startup', level: 85, description: 'Metodologia para validação rápida de ideias e MVPs' },
        { name: 'XP (Extreme Programming)', level: 83, description: 'Práticas de programação extrema para qualidade de código' }
      ]
    },
    {
      title: 'DevOps & CI/CD',
      icon: FaRocket,
      color: '#DC2626',
      skills: [
        { name: 'GitHub Actions', level: 84, description: 'Automação de pipelines CI/CD e workflows' },
        { name: 'Vercel/Netlify', level: 88, description: 'Deploy automatizado e hospedagem de aplicações web' },
        { name: 'AWS Services', level: 78, description: 'Serviços de nuvem para escalabilidade e infraestrutura' },
        { name: 'Monitoramento', level: 76, description: 'Ferramentas de observabilidade e análise de performance' }
      ]
    },
    {
      title: 'Qualidade & Testes',
      icon: FaShieldAlt,
      color: '#EA580C',
      skills: [
        { name: 'Jest/React Testing', level: 85, description: 'Testes unitários e de componentes com Jest' },
        { name: 'Cypress/E2E', level: 82, description: 'Testes end-to-end automatizados' },
        { name: 'Testing Library', level: 88, description: 'Testes acessíveis e focados no usuário' },
        { name: 'Code Quality', level: 86, description: 'Linting, formatação e análise estática de código' }
      ]
    },
    {
      title: 'Performance',
      icon: FaChartLine,
      color: '#0891B2',
      skills: [
        { name: 'Core Web Vitals', level: 83, description: 'Otimização de métricas essenciais de performance web' },
        { name: 'Bundle Optimization', level: 85, description: 'Otimização de pacotes e carregamento de recursos' },
        { name: 'SEO Técnico', level: 78, description: 'Otimização para motores de busca e acessibilidade' },
        { name: 'Lazy Loading', level: 87, description: 'Carregamento sob demanda para melhor performance' }
      ]
    },
    {
      title: 'Design & UX',
      icon: FaPalette,
      color: '#EC4899',
      skills: [
        { name: 'UI/UX Design', level: 95, description: 'Princípios de design de interface e experiência do usuário' },
        { name: 'Design Systems', level: 92, description: 'Criação e manutenção de sistemas de design consistentes' },
        { name: 'Acessibilidade', level: 90, description: 'Implementação de WCAG e melhores práticas de acessibilidade' },
        { name: 'Responsive Design', level: 95, description: 'Design adaptável para todos os dispositivos e tamanhos' },
        { name: 'Prototyping', level: 88, description: 'Criação de protótipos interativos e validação de conceitos' },
        { name: 'User Research', level: 87, description: 'Pesquisa de usuários e análise de comportamento' }
      ]
    },
    {
      title: 'Segurança',
      icon: FaShieldAlt,
      color: '#7C2D12',
      skills: [
        { name: 'OWASP Top 10', level: 78, description: 'Conhecimento das principais vulnerabilidades web' },
        { name: 'Autenticação JWT', level: 85, description: 'Implementação segura de autenticação e autorização' },
        { name: 'HTTPS/SSL', level: 82, description: 'Configuração de conexões seguras e certificados' },
        { name: 'Data Validation', level: 87, description: 'Validação e sanitização de dados de entrada' }
      ]
    },
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

        {/* Original Technical Skills Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-6 sm:mb-8 md:mb-12">
          {skillCategories.slice(0, 9).map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-3 sm:mb-4 md:mb-6">
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mr-2 sm:mr-3 md:mr-4"
                  style={{ backgroundColor: category.color + '20' }}
                >
                  <category.icon
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    style={{ color: category.color }}
                  />
                </div>
                <h3 className="text-sm sm:text-base md:text-xl font-bold text-black">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs sm:text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
                        className="h-1.5 sm:h-2 rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1 hidden sm:block">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="bg-white p-8 rounded-xl shadow-sm"
        >
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            Competências Profissionais
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {skillCategories.slice(9).map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="border-l-4 pl-4"
                style={{ borderColor: category.color + '40' }}
              >
                <h4 className="text-lg font-bold text-black mb-3 flex items-center">
                  <category.icon
                    className="w-5 h-5 mr-2"
                    style={{ color: category.color }}
                  />
                  {category.title}
                </h4>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center justify-between py-1"
                    >
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded">
                        {skill.level}%
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills Section - Different Format */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">
                Soft Skills & Competências Pessoais
              </h3>
              <p className="text-gray-600 text-sm max-w-2xl mx-auto">
                Habilidades interpessoais e comportamentais essenciais para o sucesso profissional
                e colaboração efetiva em equipes multidisciplinares.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {[
                {
                  name: 'Comunicação',
                  description: 'Capacidade de transmitir ideias de forma clara, objetiva e adaptada ao público',
                  icon: '💬'
                },
                {
                  name: 'Autonomia',
                  description: 'Capacidade de trabalhar de forma independente e tomar decisões próprias',
                  icon: '🚀'
                },
                {
                  name: 'Análise de Dados',
                  description: 'Habilidade para interpretar dados, identificar padrões e extrair insights valiosos',
                  icon: '📊'
                },
                {
                  name: 'Resolução de Problemas',
                  description: 'Análise crítica, pensamento lógico e soluções criativas para desafios complexos',
                  icon: '🧠'
                },
                {
                  name: 'Debugging',
                  description: 'Identificação e correção eficiente de bugs e problemas no código',
                  icon: '🔧'
                },
                {
                  name: 'Otimização de Código',
                  description: 'Melhoria contínua da performance e eficiência dos sistemas desenvolvidos',
                  icon: '⚡'
                },
                {
                  name: 'Trabalho em Equipe',
                  description: 'Colaboração efetiva, respeito às dinâmicas e contribuição para o sucesso coletivo',
                  icon: '🤝'
                },
                {
                  name: 'Versionamento',
                  description: 'Gerenciamento profissional de código-fonte e colaboração em projetos',
                  icon: '📝'
                },
                {
                  name: 'Adaptabilidade',
                  description: 'Capacidade de se ajustar rapidamente a mudanças e novos ambientes de trabalho',
                  icon: '🔄'
                },
                {
                  name: 'Pensamento Crítico',
                  description: 'Análise objetiva de situações e tomada de decisões fundamentadas',
                  icon: '🔍'
                },
                {
                  name: 'Aprendizado Contínuo',
                  description: 'Busca constante por conhecimento e desenvolvimento profissional',
                  icon: '📚'
                },
                {
                  name: 'Orientação a Resultados',
                  description: 'Foco em metas, qualidade de entrega e impacto dos resultados',
                  icon: '🎯'
                }
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="text-center">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h4 className="text-sm font-bold text-black mb-3">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-gray-600 leading-tight">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

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
              {[
                'Next.js', 'TypeScript', 'GraphQL', 'AWS', 'Kubernetes',
                'Figma', 'Jest', 'Cypress', 'Docker Compose', 'Redis',
                'Web3.js', 'Three.js', 'PWA', 'Microfrontends',
                'Symfony', 'CodeIgniter', 'WordPress', 'RabbitMQ', 'Kafka',
                'Prometheus', 'Grafana', 'Elasticsearch', 'Kibana', 'Nginx',
                'Apache', 'OAuth 2.0', 'SAML', 'Memcached', 'PostgreSQL',
                'MariaDB', 'SQLite', 'MongoDB Atlas', 'Firebase', 'Supabase'
              ].map((tech, index) => (
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
