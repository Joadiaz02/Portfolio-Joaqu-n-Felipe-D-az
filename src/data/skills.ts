import type { Skill } from '../types/portfolio'

export const skills: Skill[] = [
  {
    id: 'organization',
    name: 'Organización y responsabilidad',
    description:
      'Priorizo actividades y doy seguimiento a las tareas para cumplir acuerdos y mantener el trabajo ordenado.',
    category: 'complementary',
    knowledgeStatus: 'cv_reported',
    evidence: ['CV: Perfil Profesional'],
  },
  {
    id: 'teamwork',
    name: 'Trabajo en equipo',
    description:
      'Coordino tareas, comparto avances y colaboro con otras personas para alcanzar objetivos comunes.',
    category: 'complementary',
    knowledgeStatus: 'cv_reported',
    evidence: ['CV: Perfil Profesional'],
  },
  {
    id: 'learning',
    name: 'Predisposición para el aprendizaje',
    description:
      'Incorporo nuevas herramientas y formas de trabajo para adaptarme a distintos desafíos.',
    category: 'complementary',
    knowledgeStatus: 'cv_reported',
    evidence: ['CV: Perfil Profesional'],
  },
  {
    id: 'sdd',
    name: 'Planificación basada en requisitos (SDD)',
    description:
      'Aclaro qué necesita el proyecto, planifico sus funciones y divido el trabajo en tareas antes de programar.',
    category: 'methodology',
    knowledgeStatus: 'applied',
    evidence: ['Artefactos de specs/002-portfolio-evolution'],
  },
  {
    id: 'user-stories',
    name: 'Análisis de necesidades y casos de uso',
    description:
      'Defino quién usará el sistema y qué necesita hacer para que sus funciones resuelvan tareas concretas.',
    category: 'methodology',
    knowledgeStatus: 'applied',
    evidence: ['Especificación de este portfolio'],
  },
  {
    id: 'incremental',
    name: 'Desarrollo por etapas y pruebas',
    description:
      'Construyo el producto en partes pequeñas y pruebo sus funciones para detectar errores temprano.',
    category: 'methodology',
    knowledgeStatus: 'applied',
    evidence: ['Implementación y suite de tests de este portfolio'],
  },
  {
    id: 'technical-docs',
    name: 'Documentación de proyectos',
    description:
      'Registro instrucciones y decisiones para que otras personas puedan entender y mantener el proyecto.',
    category: 'methodology',
    knowledgeStatus: 'applied',
    evidence: ['README de repositorios y artefactos Spec Kit'],
  },
  {
    id: 'ux',
    name: 'Diseño de experiencia de usuario (UX)',
    description:
      'Organizo la navegación y las pantallas para que las personas encuentren lo que buscan y completen tareas con facilidad.',
    category: 'uxui',
    knowledgeStatus: 'cv_reported',
    evidence: ['CV: experiencia en La Candelaria'],
  },
  {
    id: 'ui-responsive',
    name: 'Diseño de interfaces adaptables',
    description:
      'Organizo botones y contenido para que la aplicación sea cómoda de usar en celular, tablet o computadora.',
    category: 'uxui',
    knowledgeStatus: 'applied',
    evidence: ['Proyectos Angular y este portfolio'],
  },
  {
    id: 'accessibility',
    name: 'Accesibilidad y organización visual',
    description:
      'Facilito la navegación con teclado y tecnologías de asistencia, y doy un orden claro a la información.',
    category: 'uxui',
    knowledgeStatus: 'applied',
    evidence: ['Implementación de este portfolio'],
  },
  {
    id: 'ux-declared',
    name: 'Organización de contenidos y bocetos',
    description:
      'Ordeno la información y preparo bocetos de pantallas para revisar cómo se usará una idea antes de desarrollarla.',
    category: 'uxui',
    knowledgeStatus: 'developer_reported',
    evidence: ['Información proporcionada para esta feature'],
  },
]
