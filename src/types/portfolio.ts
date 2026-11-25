export interface PersonalProfile {
  fullName: string
  professionalTitle: string
  summary: string
  about?: string[]
  interests?: string[]
  portraitPath?: string
  availability?: { status: string; label: string }
}

export interface Project {
  id: string
  name: string
  description: string
  projectType: string
  features: string[]
  technologies: string[]
  demoUrl?: string
  repositoryUrl?: string
  downloadPath?: string
  evidence: string[]
}
export type TechnologyCategory =
  'language' | 'frontend' | 'backend' | 'database' | 'tool' | 'methodology' | 'uxui' | 'sap'

export type KnowledgeStatus =
  'applied' | 'studied' | 'cv_reported' | 'learning' | 'developer_reported' | 'interest'

export interface Technology {
  id: string
  name: string
  category: TechnologyCategory
  description?: string
  iconKey?: string
  level?: string
  knowledgeStatus: KnowledgeStatus
  evidence: string[]
}

export type SkillCategory = 'methodology' | 'uxui' | 'complementary'

export interface Skill {
  id: string
  name: string
  description: string
  category: SkillCategory
  knowledgeStatus: KnowledgeStatus
  evidence: string[]
  iconKey?: string
}

export interface Language {
  id: string
  name: string
  level: string
  description?: string
  certificationReference?: string
  evidence: string[]
}
export interface Education {
  id: string
  institution: string
  programOrTitle: string
  status: 'in_progress' | 'completed' | string
  startDate?: string
  endDate?: string
  description?: string
  imagePath?: string
  imageAlt?: string
  evidence: string[]
}
export interface Credential {
  id: string
  name: string
  issuer: string
  type: 'certificate' | 'course' | 'academic_title'
  issuedAt?: string
  imagePath?: string
  imageAlt?: string
  sourceUrl?: string
  credentialId?: string
  evidence: string[]
}
export interface SocialLink {
  id: string
  platform: 'email' | 'whatsapp' | 'instagram' | 'linkedin' | 'github'
  label: string
  detail: string
  url: string
  iconKey: 'mail' | 'whatsapp' | 'instagram' | 'linkedin' | 'github'
  accessibleLabel: string
  visible: boolean
  external: boolean
}
export interface PublicDocument {
  kind: 'cv' | 'certificate' | 'apk'
  publicPath: string
  available: boolean
  label: string
}
