export interface Technology {
  name: string
  icon: string
  description: string
  level: 'Iniciante' | 'Intermediário' | 'Avançado' | 'Expert'
  category?: 'frontend' | 'backend' | 'database' | 'devops' | 'design'
}

export interface Project {
  id: string
  name: string
  description: string
  status?: string
  tech: string[]
  featured: boolean
  stats: {
    stars: number
    forks: number
  }
  year: string
  url?: string
  githubUrl?: string
  image?: string
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  current?: boolean
  description: string
  tech: string[]
  achievements?: string[]
}

export interface Contact {
  email: string
  whatsapp?: string
  github: string
  linkedin?: string
  twitter?: string
  instagram?: string
}

export interface Location {
  city: string
  state: string
  country: string
  timezone: string
  availableForRemote: boolean
  temperature?: string
}

export interface Profile {
  name: string
  title: string
  tagline: string
  about: string[]
  contact: Contact
  location: Location
} 