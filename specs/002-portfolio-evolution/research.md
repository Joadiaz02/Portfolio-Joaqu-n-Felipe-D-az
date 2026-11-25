# Research: Evolución del portfolio personal

**Date**: 2026-11-24  
**Scope**: Verificar el stack y contenido profesional existente, y elegir la evolución mínima para contacto, proyectos, legibilidad, credenciales y conocimientos.

## Fuentes consultadas

- CV presente en `public/documents/cv.pdf`, texto extraído localmente: B2 (First For Schools), UTN Desarrollo Universitario en Programación, Full Stack Digital House (2022), Ofimática UTN (2015), experiencia y stack.
- README público [Sala de Juegos](https://github.com/Joadiaz02/Programacion_4_Sala_de_juegos_Joaquin_Felipe_Diaz_Primer_parcial): Angular 21, TypeScript, Supabase, Bootstrap; Ahorcado, Mayor o Menor, Preguntados, Sopa de Letras, autenticación, resultados y chat real-time.
- Demo [Sala de Juegos](https://programacion-4-sala-de-juegos-joaqu.vercel.app/) (HTTP 200 durante inspección).
- README público [TP2 / Instabook](https://github.com/Joadiaz02/JOAQUIN-FELIPE-DIAZ-TP2-PROG4-2026-C1): frontend Angular, TypeScript, SCSS, Router, Reactive Forms; backend NestJS, MongoDB Atlas, Mongoose, Bcrypt y Cloudinary; publicaciones, comentarios, me gusta, perfiles y administración.
- Demo [Instabook](https://joaquin-felipe-diaz-tp-2-git-fd7729-joaquins-projects-397bcb38.vercel.app/) (HTTP 200 durante inspección; título real “Instabook”).
- README, `package.json`, código y screenshot local de `../GLUTN_Especialista_en_pastas-2026-Lucas-ponte`: Ionic, Angular 22, Capacitor 8, Supabase; pedidos, menú, reservas, clientes, empleados, mesas, cocina/bar, pago simulado, reportes, lector QR, cámara y módulos; responsables del equipo descritos en README. APK local verificado en `public/documents/glutn.apk`.
- Captura local `../GLUTN_Especialista_en_pastas-2026-Lucas-ponte/images/menu_principal.jpg`; se eligió por ser una pantalla pública del producto sin datos de cliente visibles.
- Especificación existente de `001-professional-portfolio`, tipos, componentes y hojas de estilos del repo actual.

## Decisiones

### Mantener el stack y arquitectura existente

- Mantener React 19, Vite 7, TypeScript estricto, Tailwind CSS 4, Motion, Lucide React, Vitest y Testing Library.
- Mantener la app de una página y contenido estático en `src/data/`.
- No añadir icon packs ni formularios externos. Usar iconos disponibles y un SVG local con marca WhatsApp.

**Rationale**: El stack satisface la UI actual y los nuevos requisitos son contenido y presentación estáticos.

### Centralizar los cinco destinos

- Guardar una única colección con correo, WhatsApp, Instagram, LinkedIn y GitHub; representar `platform`, `label`, `url`, `iconKey`, `external` y `visible`.
- Mantener las mismas acciones en Contacto y, donde ya se usan, el footer; enlaces externos usan HTTPS y `noopener noreferrer`.
- No derivar el email/phone de la versión del CV: esta solicitud provee destinos canónicos nuevos para publicación.

**Rationale**: Una fuente previene URL duplicadas; los destinos son explícitos en la solicitud.

### Asignar estado de conocimiento y evidencia

- `applied`: se observa en repositorio, demo o proyecto documentado.
- `studied`: el estudio está respaldado por una fuente.
- `cv_reported`: figura en el CV disponible sin añadir una afirmación de experiencia.
- `developer_reported`: incluido explícitamente en la descripción de esta feature.
- `learning`: solo si la fuente indica aprendizaje actual.
- `interest`: se reserva para SAP y temas descritos como interés/por explorar.
- Mostrar el estado con texto, no solo color. No mostrar porcentaje o nivel de dominio.

**Rationale**: Evita que una taxonomía amplia parezca un claim de experiencia profesional.

### Reemplazar filtros de credenciales por una grilla

- Mantener dos tarjetas por fila en escritorio y tablet y una en móvil.
- Mantener ampliación de imagen y manejo de foco cuando una imagen exista.
- Mostrar las dos credenciales enumeradas en el CV como tarjetas textuales; no existe material gráfico u original verificable.

**Rationale**: Cumple el nuevo flujo sin perder el comportamiento accesible que sigue siendo útil.

### Mejorar lectura sin alterar la paleta

- Mantener tokens oscuros existentes: contrastes calculados para texto primario 17.16:1, secundario 6.99:1, acento 15.03:1 y texto de botón 14.02:1.
- Aumentar texto de tarjetas y descripciones que actualmente es 13 px; mantener etiquetas pequeñas solo para metadatos secundarios.
- Mantener 16 px como mínimo para cuerpo principal móvil.

**Rationale**: Los pares actuales superan WCAG AA; la mejora principal es jerarquía y tamaño, no sustituir colores.

### Describir proyectos desde sus fuentes

- Sala de Juegos: usar título, juegos, autenticación, resultados y chat que aparecen en README. Link al README y demo.
- Instabook: usar funciones de red social y stack del README. Link al README, frontend y demo cuando aplique.
- GLUTN: usar README local, manifest/package y matriz de responsabilidades; enlazar al APK, no inventar un repositorio remoto no encontrado.
- Las URLs Vercel respondieron HTTP 200 durante la inspección; revalidar antes de publicar.

**Rationale**: El nombre de “TP 2” no revelaba su funcionalidad; la inspección confirmó Instabook.

## Alternativas consideradas

- **Añadir paquete de iconos de marca**: rechazado porque el stack existente cubre el resto y WhatsApp se resuelve con un SVG local pequeño.
- **Mantener filtros como alternativa**: rechazado porque el nuevo requisito pide navegación visual sin filtros.
- **Presentar todos los conceptos SAP como skills**: rechazado; la solicitud establece interés, no dominio ni uso en proyectos.
- **Ocultar credenciales sin scans originales**: rechazado; el CV verifica nombre, institución y año, así que tarjetas textuales son honestas.
- **Cambiar a una solución multipágina o backend**: rechazado, queda fuera de alcance y no se necesita para las acciones directas.

## Resultado

No hay incógnitas técnicas que bloqueen la implementación. Niveles y estados de conocimiento quedan vinculados a evidencia identificada en `data-model.md`; no se necesita otra dependencia.
