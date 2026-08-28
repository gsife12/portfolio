export interface RoleExperience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string | 'Present'
  bullets: string[]
}

export interface CaseStudy {
  overview: string
  problem: string
  contribution: string
  features: string[]
  challenges: string
  decisions: string
  learned: string
  screenshots: string[]
  liveUrl: string
  repoUrl: string
}

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  tech: string[]
  featured: boolean
  caseStudy: CaseStudy
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface Certification {
  id: string
  name: string
  code?: string
  issuer: string
  credlyUrl: string
  featured: boolean
  inProgress?: boolean
}

export interface Education {
  degree: string
  minor: string
  institution: string
  location: string
  startDate: string
  endDate: string
  coursework: string[]
}
