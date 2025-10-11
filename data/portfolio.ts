import { Technology, Project, Experience, Profile } from '@/types'

export const profile: Profile = {
  name: "Daniel M. Munier",
  title: "Desenvolvedor Fullstack",
  tagline: "Desenvolvedor com busca em oportunidades no mercado de desenvolvimento",
  about: [
    "Desenvolvedor com busca em oportunidades no mercado de desenvolvimento ou afins para contribuir com soluções escaláveis e de alta qualidade utilizando as tecnologias que o mercado precisa.",
    "Atualmente cursando Bacharel em Ciência da Computação, em formação."
  ],
  contact: {
    email: "idanielmunier@gmail.com",
    github: "https://github.com/danielmunier",
    linkedin: "https://linkedin.com/in/daniel-munier",
    twitter: "https://twitter.com/danielmunier"
  },
  location: {
    city: "São Gonçalo",
    state: "RJ",
    country: "Brasil",
    timezone: "GMT-3",
    availableForRemote: true,
    temperature: "24°C"
  }
}

export const technologies: Technology[] = [
  {
    name: "TypeScript",
    icon: "TS",
    description: "Linguagem de Programação",
    level: "Avançado",
    category: "frontend"
  },
  {
    name: "JavaScript",
    icon: "JS",
    description: "Linguagem de Programação",
    level: "Avançado",
    category: "frontend"
  },
  {
    name: "Python",
    icon: "🐍",
    description: "Linguagem de Programação",
    level: "Avançado",
    category: "backend"
  },
  {
    name: "React",
    icon: "⚛",
    description: "Biblioteca Frontend",
    level: "Avançado",
    category: "frontend"
  },
  {
    name: "Next.js",
    icon: "▲",
    description: "Framework React",
    level: "Avançado",
    category: "frontend"
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    description: "Framework CSS",
    level: "Avançado",
    category: "frontend"
  },
  {
    name: "Node.js",
    icon: "⬢",
    description: "Runtime JavaScript",
    level: "Avançado",
    category: "backend"
  },
  {
    name: "Docker",
    icon: "🐳",
    description: "Containerização",
    level: "Intermediário",
    category: "devops"
  },
  {
    name: "Git",
    icon: "📝",
    description: "Controle de Versão",
    level: "Avançado",
    category: "devops"
  },
  {
    name: "GitHub",
    icon: "🐙",
    description: "Plataforma de Código",
    level: "Avançado",
    category: "devops"
  },
  {
    name: "CI/CD",
    icon: "🔄",
    description: "Integração Contínua",
    level: "Intermediário",
    category: "devops"
  },
  {
    name: "NestJS",
    icon: "🏗️",
    description: "Framework Node.js",
    level: "Intermediário",
    category: "backend"
  },
  {
    name: "Prisma",
    icon: "🗄️",
    description: "ORM de Banco de Dados",
    level: "Intermediário",
    category: "database"
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    description: "Banco de Dados",
    level: "Intermediário",
    category: "database"
  }
]

export const projects: Project[] = [
  {
    id: "pochibot",
    name: "Pochi Bot",
    description: "Bot para Discord que auxilia na administração de comunidades com criação de tickets, gerenciamento de mensagens, automação de tarefas e integração com APIs. Desenvolvido com NodeJS e Python em microserviços.",
    status: "finalizado",
    tech: ["Node.js", "Python", "Docker", "CI/CD"],
    featured: true,
    stats: { stars: 0, forks: 0 },
    year: "2024",
    url: "https://pochibot.com",
    githubUrl: "https://github.com/danielmunier/pochibot"
  },
  {
    id: "portfolio",
    name: "Portfolio",
    description: "Meu portfólio pessoal construído com Next.js e TypeScript.",
    status: "em desenvolvimento",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    stats: { stars: 0, forks: 0 },
    year: "2025",
    url: "https://danielmunier.com.br",
    githubUrl: "https://github.com/danielmunier/portfolio"
  }
]

export const experiences: Experience[] = [
  {
    id: "startup-tech",
    title: "Desenvolvedor FullStack",
    company: "Startup de Tecnologia",
    period: "2025",
    current: true,
    description: "Atuei no desenvolvimento fullstack de uma plataforma de pesquisas, coletamos e analisamos respostas para aprimorar eventos e produtos. Participei da implementação de features essenciais, garantindo desempenho, segurança e escalabilidade.",
    tech: ["Next.js", "Tailwind CSS", "NestJS", "Prisma", "PostgreSQL", "Docker"],
    achievements: [
      "Vivencia com Next.js, Tailwind CSS, NestJS, Prisma, PostgreSQL e Docker",
      "Implementação de features essenciais para a plataforma",
      "Garantia de desempenho, segurança e escalabilidade"
    ]
  },
  {
    id: "pochibot",
    title: "Desenvolvedor Backend",
    company: "Pochi Bot",
    period: "2024",
    current: false,
    description: "Aplicação feita para auxiliar na administração de comunidades da plataforma Discord com a criação de tickets, gerenciamento de mensagens dos membros, automação de tarefas e integração com API's. Feito com NodeJS e Python em microserviços.",
    tech: ["Node.js", "Python", "Docker", "CI/CD"],
    achievements: [
      "Desenvolvi do zero até a hospedagem em VPS",
      "Implementei práticas de CI/CD para entrega contínua",
      "Implementei com princípios da Clean Architecture, separando em camadas distintas para facilitar a manutenção"
    ]
  }
] 