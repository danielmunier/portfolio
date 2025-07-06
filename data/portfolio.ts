import { Technology, Project, Experience, Profile } from '@/types'

export const profile: Profile = {
  name: "Daniel Munier",
  title: "Desenvolvedor Fullstack",
  tagline: "Fullstack Developer",
  about: [
    "Em busca em oportunidades no mercado de desenvolvimento ou afins para contribuir com soluções escaláveis e de alta qualidade utilizando as tecnologias que o mercado precisa.",

  ],
  contact: {
    email: "idanielmunier@email.com",
    whatsapp: "+55 (21) 99999-9999",
    github: "https://github.com/danielmunier",
    linkedin: "https://linkedin.com/in/daniel-munier",
    twitter: "https://twitter.com/danielmunier",
    instagram: "https://instagram.com/danielmunier"
  },
  location: {
    city: "Rio de Janeiro",
    state: "RJ",
    country: "Brasil",
    timezone: "GMT-3",
    availableForRemote: true,
    temperature: "24°C"
  }
}

export const technologies: Technology[] = [
  {
    name: "Next.js",
    icon: "▲",
    description: "Framework",
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
    name: "React",
    icon: "⚛",
    description: "UI Library",
    level: "Expert",
    category: "frontend"
  },
  {
    name: "TypeScript",
    icon: "TS",
    description: "Typed JavaScript",
    level: "Avançado",
    category: "frontend"
  },
  {
    name: "Python",
    icon: "🐍",
    description: "Programming Language",
    level: "Avançado",
    category: "backend"
  },
  {
    name: "Prisma",
    icon: "🗄️",
    description: "Database ORM",
    level: "Avançado",
    category: "database"
  }
]

export const projects: Project[] = [
  {
    id: "example",
    name: "Example Project",
    description: "Um projeto de exemplo para demonstrar minhas habilidades.",
    status: "novo",
    tech: ["Next.js", "TypeScript", "OpenAI"],
    featured: true,
    stats: { stars: 124, forks: 23 },
    year: "2024",
    url: "https://example.com",
    githubUrl: "https://github.com/danielmunier/example"
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
  },
  {
    id: "api-service",
    name: "API Service",
    description: "Serviço de API RESTful com autenticação JWT.",
    status: "finalizado",
    tech: ["Node.js", "Express", "PostgreSQL"],
    featured: false,
    stats: { stars: 45, forks: 8 },
    year: "2024",
    url: "https://api.example.com",
    githubUrl: "https://github.com/danielmunier/api-service"
  }
]

export const experiences: Experience[] = [
  {
    id: "techcorp",
    title: "Frontend Developer",
    company: "Example",
    period: "2022 - Presente",
    current: true,
    description: "Desenvolvo aplicações React modernas, implementando arquiteturas escaláveis e trabalhando em equipe ágil.",
    tech: ["React", "Next.js", "TypeScript"],
    achievements: [
      "Melhorou a performance das aplicações em 40%",
      "Participou do desenvolvimento de 3 aplicações web",
      "Implementou testes automatizados"
    ]
  },
  {
    id: "startup",
    title: "Fullstack Developer",
    company: "Example",
    period: "2020 - 2022",
    current: false,
    description: "Desenvolvi aplicações web completas usando React, Node.js e PostgreSQL. Trabalhei em equipe ágil e participei de todas as etapas do desenvolvimento.",
    tech: ["React", "Node.js", "PostgreSQL", "Docker"],
    achievements: [
      "Desenvolveu 3 aplicações web completas",
      "Implementou CI/CD com Docker",
      "Reduziu tempo de deploy em 60%"
    ]
  }
] 