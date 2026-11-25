import type { Project } from '../types/portfolio'

export const projects: Project[] = [
  {
    id: 'sala-de-juegos',
    name: 'Sala de Juegos',
    projectType: 'Aplicación web',
    description:
      'Plataforma para jugar minijuegos, guardar puntajes y conversar con otros usuarios.',
    features: [
      'Ahorcado, Mayor o Menor, Preguntados y Sopa de Letras',
      'Registro, autenticación y resultados por juego',
      'Chat en tiempo real',
    ],
    technologies: ['Angular 21', 'TypeScript', 'Supabase', 'Bootstrap'],
    demoUrl: 'https://programacion-4-sala-de-juegos-joaqu.vercel.app/',
    repositoryUrl:
      'https://github.com/Joadiaz02/Programacion_4_Sala_de_juegos_Joaquin_Felipe_Diaz_Primer_parcial',
    evidence: [
      'README del repositorio Programacion_4_Sala_de_juegos_Joaquin_Felipe_Diaz_Primer_parcial',
    ],
  },
  {
    id: 'tp-2',
    name: 'Instabook',
    projectType: 'Aplicación web full-stack',
    description:
      'Red social para publicar contenido, interactuar con otros perfiles y administrar usuarios.',
    features: [
      'Crear publicaciones, comentar y dar Me gusta',
      'Ver perfiles y cargar imágenes',
      'Administración de usuarios por roles',
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'SCSS',
      'NestJS',
      'MongoDB Atlas',
      'Mongoose',
      'Bcrypt',
      'Cloudinary',
    ],
    demoUrl: 'https://joaquin-felipe-diaz-tp-2-git-fd7729-joaquins-projects-397bcb38.vercel.app/',
    repositoryUrl: 'https://github.com/Joadiaz02/JOAQUIN-FELIPE-DIAZ-TP2-PROG4-2026-C1',
    evidence: ['README del repositorio JOAQUIN-FELIPE-DIAZ-TP2-PROG4-2026-C1'],
  },
  {
    id: 'glutn',
    name: 'GLUTN · Especialista en Pastas',
    projectType: 'Aplicación móvil Android',
    description:
      'App para gestionar un restaurante: organiza reservas y mesas, y conecta los pedidos con el personal.',
    features: [
      'Administrar clientes, reservas y mesas',
      'Consultar la carta y gestionar pedidos para mozos, cocina y bar',
      'Gestionar empleados y productos; realizar encuestas',
    ],
    technologies: ['Ionic', 'Angular', 'Capacitor', 'Supabase', 'SCSS', 'HTML'],
    downloadPath: '/documents/glutn.apk',
    evidence: [
      'README local de GLUTN_Especialista_en_pastas-2026-Lucas-ponte',
      'Código y package.json de GLUTN_Especialista_en_pastas-2026-Lucas-ponte',
    ],
  },
]
