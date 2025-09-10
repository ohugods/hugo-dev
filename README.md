# Hugo Dalmasio - Developer

Portfolio profissional de Hugo Dalmasio, Full Stack Developer com 4 anos de experiência em desenvolvimento de soluções digitais.

## 🚀 Sobre o Projeto

Este é um site de apresentação profissional desenvolvido com React e Tailwind CSS, apresentando habilidades, projetos e informações de contato de forma moderna e responsiva.

## ✨ Características

- **Design Moderno**: Interface limpa e profissional em preto e branco (branco como cor principal)
- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- **Animações Suaves**: Implementadas com Framer Motion e ScrollReveal
- **SPA (Single Page Application)**: Navegação fluida entre seções
- **Performance Otimizada**: Desenvolvido com Vite para carregamento rápido

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca JavaScript para interfaces
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **React Icons** - Ícones para as tecnologias
- **React Intersection Observer** - Detecção de elementos visíveis

### Build Tools
- **Vite** - Build tool e dev server
- **PostCSS** - Processamento CSS
- **Autoprefixer** - Prefixos CSS automáticos

## 📱 Seções do Site

1. **Hero** - Apresentação inicial com efeito de digitação e elementos flutuantes
2. **Sobre** - Informações pessoais, estatísticas e serviços oferecidos
3. **Experiência** - Timeline profissional com detalhes de carreira
4. **Habilidades** - Grid organizado de tecnologias por categoria
5. **Projetos** - Projetos destacados com detalhes técnicos
6. **Contato** - Formulário funcional com validação e informações

## 🎯 Funcionalidades Implementadas

### Navegação
- Menu fixo no topo com efeito de blur
- Navegação suave entre seções
- Menu responsivo para mobile com animações
- Indicador de seção ativa

### Hero Section
- Efeito de digitação no título
- Botões de call-to-action com efeitos hover avançados
- Indicador de scroll animado e clicável
- Elementos flutuantes animados em background
- Padrão de fundo sutil

### Seção Sobre
- Informações pessoais detalhadas sobre trajetória profissional
- Estatísticas técnicas realistas (15+ tecnologias, 3 projetos em produção)
- Serviços oferecidos com ícones
- Layout responsivo otimizado

### Seção Competências
- Grade organizada de competências profissionais
- Foco em habilidades demonstráveis através dos projetos
- Abordagem profissional sem timeline falsa
- Call-to-action para contato personalizado

### Seção Habilidades
- Grid organizado por categoria de tecnologias
- Barras de progresso animadas mostrando nível de experiência
- Tecnologias baseadas nos projetos desenvolvidos
- Seção "Sempre Aprendendo" com tecnologias emergentes

### Seção Projetos
- 3 projetos destacados com cards interativos
- Detalhes técnicos completos de cada projeto
- Botões funcionais "Ver Demo" e "Código" com modais explicativos
- Layout responsivo com grid adaptativo

### Seção Contato
- Formulário funcional com validação em tempo real
- Feedback visual para erros e sucesso
- Animações de loading no botão de envio
- Informações de contato organizadas
- Links diretos para redes sociais e WhatsApp
- Mensagens de status animadas

### Recursos Adicionais
- **Botão "Voltar ao Topo"**: Aparece automaticamente no scroll
- **ScrollReveal Component**: Sistema de animações consistente
- **Modais Interativos**: Para demonstrações e acesso ao código
- **Responsive Design**: Otimizado para todos os dispositivos
- **Performance Otimizada**: Carregamento rápido e eficiente

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- NPM

### Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd hugo-dev
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter
- `npm run deploy` - Build + commit + push para GitHub Pages

## 🚀 Deploy no GitHub Pages

### Passos para Deploy:

1. **Crie um repositório público no GitHub** com o nome `hugo-dev`

2. **Configure o remote do Git**:
   ```bash
   git remote add origin https://github.com/ohugods/hugo-dev.git
   ```

3. **Faça o primeiro push**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

4. **Configure GitHub Pages**:
   - Vá em Settings > Pages no seu repositório
   - Selecione "Deploy from a branch"
   - Escolha a branch `main` e pasta `/ (root)`
   - Clique em Save

5. **Para atualizações futuras**:
   ```bash
   npm run deploy
   ```

### URL do Site
Após a configuração, seu site estará disponível em:
```
https://ohugods.github.io/hugo-dev/
```

## 📁 Estrutura do Projeto

```
hugo-dev/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── BackToTop.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── Navigation.jsx
│   │   ├── Projects.jsx
│   │   ├── ScrollReveal.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── vite.svg
├── node_modules/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
└── README.md
```

## 🎯 Melhorias Implementadas

### ✅ Concluídas
- ✅ **Seção de Competências Profissionais** - Abordagem profissional sem timeline falsa
- ✅ **Seção de Habilidades Completa** - Grade organizada com barras de progresso
- ✅ **Botões Funcionais nos Projetos** - Modais interativos para demo e código
- ✅ **Conteúdos Diversificados** - Textos únicos entre seções
- ✅ **Estatísticas Realistas** - Métricas técnicas demonstráveis
- ✅ **Dependências Atualizadas** - Versões mais recentes das bibliotecas
- ✅ **README Atualizado** - Documentação alinhada com implementação

### 🔄 Melhorias Futuras (Opcionais)
- 🔄 **Implementar tema escuro/claro** - Toggle para mudança de tema
- 🔄 **Adicionar filtros para projetos** - Sistema de categorização
- 🔄 **Seção de blog** - Artigos e posts técnicos
- 🔄 **Analytics avançado** - Métricas detalhadas de visitantes

## 👨‍💻 Autor

**Hugo Dalmasio**
- Email: hugo.devbr@gmail.com
- LinkedIn: [hugods](https://linkedin.com/in/hugods)
- GitHub: [ohugods](https://github.com/ohugods)

---

Desenvolvido com ❤️ usando React e Tailwind CSS
