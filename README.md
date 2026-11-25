# Portfolio de Joaquín Felipe Díaz

Sitio profesional de una sola página, construido con React, TypeScript y Vite. El contenido editable está centralizado en módulos TypeScript bajo `src/data/`.

## Requisitos y comandos

- Node.js 22.12 o posterior y npm.
- `npm ci` instala dependencias.
- `npm run dev` inicia el servidor local.
- `npm run test`, `npm run lint` y `npm run build` validan tests, estilo y compilación.

El build ejecuta `tsc -b` y genera el sitio estático en `dist/`.

## Contenido

- `src/data/personal.ts`: perfil profesional.
- `src/data/projects.ts`: descripción, objetivo, desafío, funciones, tecnologías y evidencia de proyectos.
- `src/data/technologies.ts` y `src/data/skills.ts`: áreas de conocimiento con estados textuales; SAP se publica como interés.
- `src/data/languages.ts`: idiomas y referencias verificadas.
- `src/data/education.ts` y `src/data/certificates.ts`: formación y credenciales.
- `src/data/social-links.ts`: correo, WhatsApp y perfiles públicos. Los registros indican visibilidad, etiqueta accesible y si el destino es externo.
- `src/data/documents.ts`: registro de archivos públicos.

Las afirmaciones sobre experiencia y estudios deben respaldarse con el CV, documentación de proyecto o información confirmada por Joaquín. No atribuir responsabilidades individuales cuando las fuentes no las detallan. El estado de conocimiento se presenta como texto, no solo por color o nivel numérico.

## Assets públicos

- CV: `public/documents/cv.pdf` → `/documents/cv.pdf`.
- APK de GLUTN: `public/documents/glutn.apk` → `/documents/glutn.apk`.
- Icono WhatsApp: `public/icons/whatsapp.svg` → `/icons/whatsapp.svg`.

Las tarjetas de proyectos describen brevemente la utilidad, las funciones y el stack de cada app; se mantienen sin capturas ni imágenes.

Confirma la existencia de cada archivo antes de marcarlo disponible en `src/data/documents.ts`. Los enlaces externos pasan validación HTTPS y usan `noopener noreferrer` al abrir una pestaña nueva.

## Publicación

La app se puede desplegar en Vercel como sitio estático con `npm run build` y `dist` como salida. Configura el dominio de producción antes de publicar sitemap o robots con URL canónica. Revisa la versión publicada en escritorio y móvil, con teclado y movimiento reducido.
