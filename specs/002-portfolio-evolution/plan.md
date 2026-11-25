# Implementation Plan: Evolución del portfolio personal

**Branch**: `002-portfolio-evolution` | **Date**: 2026-11-24 | **Spec**: [spec.md](spec.md)

**Input**: Requisitos de contacto, presentación comercial, proyectos, legibilidad, certificados, tecnologías y perfil profesional definidos en `spec.md`.

## Summary

Evolucionar el portfolio React/Vite existente sin reemplazar su identidad ni stack. Centralizar cinco contactos y sus iconos/destinos, ampliar las descripciones con fuentes verificadas, ofrecer una invitación comercial directa, mejorar la escala tipográfica, cambiar certificados a una grilla de dos columnas y representar conocimientos con estado/evidencia. Añadir el nivel de inglés B2 respaldado por el CV. Mantener sin dependencia nueva el sistema actual: Lucide React para iconos compatibles y un SVG local dedicado para WhatsApp.

## Technical Context

**Language/Version**: TypeScript 5.9, strict mode; React 19.

**Primary Dependencies**: React 19, Vite 7, Tailwind CSS 4, Motion 12, Lucide React; no dependencia nueva prevista.

**Storage**: Contenido estático versionado en módulos TypeScript; documentos y capturas públicas bajo `public/`.

**Testing**: Vitest 4, jsdom, React Testing Library, user-event, ESLint 9, Prettier 3; build incluye `tsc -b` antes de Vite.

**Target Platform**: Navegadores modernos de escritorio y móvil; 320 px como ancho mínimo.

**Project Type**: Aplicación web estática de una página, sin router ni backend.

**Performance Goals**: Mantener el bundle y el costo de medios acotados; preservar Lighthouse >90 para Performance, Accessibility, Best Practices y SEO en producción móvil/escritorio.

**Constraints**: Conservar modo oscuro y sistema visual, navegación, movimiento reducido y acciones existentes. No publicar hechos no respaldados; no añadir dependencias, backend o formulario.

**Scale/Scope**: Tres proyectos, cinco medios de contacto, dos credenciales textuales del CV, una formación, tecnologías en ocho categorías e idioma inglés. No se mostrar?n im?genes en las tarjetas de proyecto; la prioridad es explicar brevemente la utilidad, las funciones y el stack.

## Constitution Check

**Antes de investigación: PASS.** La propuesta mantiene React/Vite/TypeScript, datos desacoplados, CSS tokens, contenido estático, enlaces validados y componentes pequeños. No se amplía la arquitectura con backend ni dependencias.

**Después del diseño: PASS.** Los tipos incorporan estado/evidencia, las tarjetas dependen de datos centralizados, WhatsApp usa un recurso local, los certificados conservan diálogo y retorno de foco, y la prueba manual cubre responsividad/contraste.

## Research Summary

- El README de Sala de Juegos respalda Angular 21, TypeScript, Supabase, Bootstrap y cuatro juegos, autenticación, resultados y chat en tiempo real.
- El README de TP2 identifica Instabook, detalla Angular/TypeScript/SCSS, NestJS, MongoDB/Mongoose, Cloudinary y las funciones de red social.
- El README y código fuente local de GLUTN respaldan Ionic, Angular, Capacitor, Supabase, módulos de restaurante y la matriz de contribuciones; no se encontró un repositorio público enlazable.
- El CV existente respalda UTN, dos credenciales y la referencia de inglés B2/First For Schools. No hay imágenes ni verificadores externos para las credenciales.
- La lista SAP se expresa como interés/temas por explorar; los otros estados son aplicado en fuentes de proyecto, registrado en CV, declarado por el desarrollador o en aprendizaje solo cuando una fuente lo indica.
- Los contrastes actuales del tema oscuro superan AA para pares primarios, muted y accent medidos. La legibilidad débil proviene sobre todo de tamaños secundarios pequeños, que se ajustarán sin cambiar la paleta.

## Architecture and File Changes

```text
src/
├── App.tsx                              # conservar composición; agregar idioma dentro de Habilidades
├── components/
│   ├── layout/Header.tsx                # navegación existente; no agregar página
│   └── ui/
│       ├── CertificateCard.tsx          # tarjeta textual e imagen opcional
│       ├── ProjectCard.tsx              # objetivo, características, stack y enlaces
│       ├── SocialLinks.tsx              # cinco iconos y enlaces centrales
│       └── TechnologyBadge.tsx           # estado/evidencia accesible
├── data/
│   ├── certificates.ts                  # dos credenciales del CV
│   ├── education.ts                     # programa UTN completado
│   ├── languages.ts                     # inglés B2 según CV
│   ├── personal.ts                      # conservar nombre, no duplicar contacto
│   ├── projects.ts                      # datos respaldados por README/CV
│   ├── skills.ts                        # prácticas y UX/UI con estado
│   ├── social-links.ts                  # cinco destinos únicos
│   └── technologies.ts                  # categorías y estado/evidencia
├── sections/
│   ├── CertificatesSection.tsx          # grilla; retirar filtros
│   ├── ContactSection.tsx               # mensaje comercial y CTA correo/WhatsApp
│   ├── ProjectsSection.tsx              # tres proyectos y repos/demos
│   ├── SkillsSection.tsx                # idioma complementario y prácticas UX/UI
│   └── TechnologiesSection.tsx          # ocho categorías con estados
├── types/portfolio.ts                   # ampliar modelos existentes
└── styles/globals.css                   # escala de lectura y grilla de certificados

public/icons/whatsapp.svg                # icono vectorial local
```

**Structure Decision**: La app compone una sola página en `src/App.tsx`. Los datos y tipos existentes se amplían; no se crean páginas, servicios ni estado de servidor. Se mantiene el logo de WhatsApp como SVG local para no incorporar una biblioteca de marcas ni depender de un CDN.

## Implementation Phases

1. **Datos y tipos**: ampliar `Project`, `Technology`, `SocialLink`; agregar estado/evidencia, modelo `Language`, y registrar contactos, proyectos, credenciales, formación e inglés respaldados.
2. **Contacto comercial**: conectar cinco iconos con etiquetas y destinos seguros; sumar mensaje de propuesta y CTAs de WhatsApp/correo.
3. **Proyectos y conocimientos**: actualizar tarjetas con funcionalidad verificada y enlaces de repositorio; organizar tecnologías/metodologías/UX/UI/SAP por estado.
4. **Credenciales y lectura**: retirar filtros de la vista, configurar grilla 2/2/1, mantener ampliación y retorno de foco, mejorar tamaños secundarios y móvil.
5. **Validación**: pruebas de destinos, contenido, omisión de acciones, estado de conocimientos, grilla/responsive manual, contraste, build, tests y lint.

## Test Plan

- Unit tests de validación/canonicalización de mailto, WhatsApp y HTTPS.
- Tests RTL de los cinco enlaces, accesible names, `target`/`rel`, ausencia de formulario y CTAs comerciales.
- Tests de proyectos: datos de tres fuentes, tecnologías, repositorio y APK; ausencia de acciones incompletas.
- Tests de tecnologías: todas las categorías, estados diferenciales y SAP como interés; inglés B2 desde datos.
- Tests de credenciales: datos, orden, sin filtros, sin imagen/URL rota, teclado, Escape y retorno de foco.
- Revisar layout a 320, 375, 768, 1024 y 1440 px, overflow y contraste token/componente con WCAG 2.2 AA.
- Ejecutar `npm run test`, `npm run lint` y `npm run build`.
- Verificar respuesta/archivos de todos los destinos de demo, repositorios públicos y documentos locales. Lighthouse queda condicionado a deployment accesible.

## Risks and Mitigations

- **CV reemplazado o actualizado**: se usa el archivo presente y su nivel textual; actualizar si el desarrollador proporciona uno nuevo.
- **SAP puede interpretarse como habilidad**: etiquetar como interés/temas por explorar y no usar nivel.
- **GLUTN es trabajo grupal**: mostrar la participación que asigna el README, no reclamar el producto completo.
- **Credenciales sin imagen externa**: conservar tarjetas textuales y no inventar botones.
- **No hay repositorio Git del portfolio ni deployment configurado**: los checks Lighthouse de producción y la URL canónica son una dependencia operativa separada.

## Complexity Tracking

Sin desviaciones de la constitución. No se agregan dependencias.
