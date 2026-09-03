export interface Project {
  id: string
  title: string
  description: string
  problem: string
  solution: string
  technologies: string[]
  category: 'cloud' | 'security' | 'support' | 'automation' | 'web'
  status: 'completed' | 'in-progress' | 'planned'
  githubUrl?: string
  demoUrl?: string
  featured: boolean
}

export interface Certification {
  id: string
  name: string
  provider: string
  category: 'cloud' | 'security' | 'itsm' | 'fundamentals'
  status: 'completed' | 'in-progress' | 'planned'
  date?: string
  plannedDate?: string
  credentialUrl?: string
  badgeUrl?: string
  description?: string
}

export interface Skill {
  id: string
  name: string
  category: 'cloud' | 'itsm' | 'security' | 'data-tools' | 'professional'
  level?: 'beginner' | 'intermediate' | 'advanced'
  icon?: string
}

export interface SkillCategory {
  key: Skill['category']
  label: string
}

export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string | 'Present'
  description: string
  highlights: string[]
  technologies: string[]
  focus: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  field?: string
  status: 'completed' | 'in-progress'
  startDate?: string
  endDate?: string
  description?: string
}

export interface Volunteer {
  id: string
  organization: string
  role: string
  year: string
  highlights: string[]
}

export interface SiteConfig {
  name: string
  title: string
  description: string
  location: string
  languages: string
  email: string
  linkedin: string
  github: string
  siteUrl: string
}