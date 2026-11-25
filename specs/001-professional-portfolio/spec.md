# Feature Specification: Portfolio profesional personal

**Feature Branch**: `001-professional-portfolio`

**Created**: 2026-11-24

**Status**: Draft

**Input**: User description: Portfolio web profesional de Joaquín Felipe Díaz para presentar su perfil, proyectos, tecnologías, formación, certificados y medios de contacto, con requisitos de diseño, accesibilidad, rendimiento y publicación descritos en el documento adjunto.

## Clarifications

### Session 2026-11-24

- Q: ¿En qué dispositivos debe superarse el objetivo de más de 90 puntos de Lighthouse: en móvil y escritorio, solo en móvil o solo en escritorio? → A: En móvil y escritorio.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Conocer el perfil y navegar el portfolio (Priority: P1)

Una persona reclutadora o visitante llega al portfolio, comprende quién es Joaquín y qué tipo de desarrollador es, y puede recorrer las secciones principales desde una navegación clara en escritorio o móvil.

**Why this priority**: La presentación del perfil y la navegación son el propósito central del portfolio y permiten descubrir el resto del contenido.

**Independent Test**: Abrir el sitio en una pantalla móvil y otra de escritorio, recorrer las secciones principales con navegación y teclado, y comprobar que el perfil se entiende sin información no confirmada.

**Acceptance Scenarios**:

1. **Given** que una persona abre el portfolio, **When** llega a la primera sección, **Then** ve el nombre, la presentación profesional y accesos para conocer proyectos y contactar.
2. **Given** que una persona navega en escritorio o móvil, **When** selecciona una sección desde el menú, **Then** llega a ella, identifica la sección activa y puede seguir navegando con teclado.
3. **Given** que una persona consulta el portfolio desde 320 px de ancho o más, **When** recorre las secciones, **Then** el contenido sigue legible y no aparece desplazamiento horizontal involuntario.

---

### User Story 2 - Evaluar proyectos y conocimientos (Priority: P1)

Una persona interesada revisa los proyectos y las tecnologías relacionadas para valorar la experiencia práctica y el perfil técnico del desarrollador.

**Why this priority**: Los proyectos y conocimientos aportan evidencia concreta para las decisiones de selección o colaboración.

**Independent Test**: Revisar las tarjetas de proyecto y los grupos de tecnologías, abrir los destinos configurados y comprobar que la información incompleta no se presenta como un hecho.

**Acceptance Scenarios**:

1. **Given** que hay proyectos publicados, **When** la persona visita la sección de proyectos, **Then** cada proyecto muestra su nombre, descripción y tecnologías verificadas, con demo, repositorio o descarga solo si el destino está disponible.
2. **Given** que hay tecnologías confirmadas, **When** la persona las consulta, **Then** las encuentra agrupadas por categoría y no ve niveles de dominio inventados ni porcentajes arbitrarios.
3. **Given** que faltan datos de un proyecto o un enlace, **When** se presenta el portfolio, **Then** esos datos no se inventan y las acciones no configuradas no aparecen como enlaces funcionales.
4. **Given** que el desarrollador confirma o corrige información personal o de un proyecto, **When** se actualiza el contenido, **Then** la información correspondiente cambia sin duplicarse de forma inconsistente entre secciones.

---

### User Story 3 - Consultar formación y credenciales (Priority: P2)

Una persona visitante consulta la formación académica, cursos y certificados del desarrollador y acota los resultados para encontrar una credencial concreta.

**Why this priority**: Las credenciales complementan la evaluación del perfil y los filtros ayudan a revisar colecciones extensas.

**Independent Test**: Usar los filtros por tipo, institución y fecha individualmente y combinados; abrir una credencial y revisar el estado vacío.

**Acceptance Scenarios**:

1. **Given** que existen credenciales verificadas, **When** la persona aplica uno o más filtros, **Then** solo se muestran resultados que cumplen todos los filtros activos y se informa cuántos hay.
2. **Given** que los filtros no producen coincidencias, **When** se actualizan los resultados, **Then** se muestra un mensaje de estado vacío y una opción para limpiar los filtros.
3. **Given** que una credencial incluye una imagen o un enlace original, **When** la persona la consulta, **Then** puede ampliar la imagen mediante un control accesible o abrir el destino original si está disponible.
4. **Given** que una carrera está en curso, **When** se presenta la formación, **Then** su estado no se confunde con un título obtenido.

---

### User Story 4 - Acceder al CV y contactar (Priority: P2)

Una persona interesada obtiene el CV y utiliza los medios de contacto profesional que Joaquín haya configurado.

**Why this priority**: El CV y el contacto permiten continuar una oportunidad profesional fuera del portfolio.

**Independent Test**: Abrir o descargar el CV disponible y activar cada enlace de contacto configurado, verificando que los datos ausentes no generan acciones rotas.

**Acceptance Scenarios**:

1. **Given** que el CV está disponible, **When** la persona elige verlo o descargarlo, **Then** el documento se abre o descarga correctamente.
2. **Given** que el CV no está disponible, **When** la persona visita su sección, **Then** no se muestran botones que conduzcan a un error.
3. **Given** que existen enlaces de correo o redes configurados, **When** la persona usa una acción de contacto, **Then** se abre el destino correspondiente; los destinos no configurados no aparecen como funcionales.
4. **Given** que no existe un servicio real para procesar mensajes, **When** la persona busca contactar, **Then** se ofrecen enlaces directos disponibles y no se simula el envío de un formulario.

---

### User Story 5 - Consultar una experiencia accesible, rápida y confiable (Priority: P1)

Cualquier visitante utiliza el portfolio con distintos tamaños de pantalla, teclado, tecnologías de asistencia o preferencia por movimiento reducido y encuentra contenido que carga de forma fluida.

**Why this priority**: La accesibilidad, legibilidad y estabilidad son necesarias para que las demás funciones estén disponibles para todas las personas.

**Independent Test**: Recorrer las interacciones con teclado y lector de pantalla, comprobar contraste y foco, activar movimiento reducido y medir una versión de producción con Lighthouse.

**Acceptance Scenarios**:

1. **Given** que la persona navega sin ratón, **When** usa los controles del sitio, **Then** puede identificar el foco y completar la navegación y las acciones disponibles.
2. **Given** que una persona prefiere movimiento reducido, **When** consulta el sitio, **Then** las animaciones se reducen o se desactivan sin ocultar información ni impedir el uso.
3. **Given** que una persona abre certificados o contenido ampliado, **When** se muestra un diálogo, **Then** puede operarlo con teclado, cerrar con Escape y conservar una gestión de foco comprensible.
4. **Given** que se mide la versión de producción, **When** se ejecuta Lighthouse en móvil y escritorio, **Then** Performance, Accessibility, Best Practices y SEO obtienen más de 90 puntos cada una.
5. **Given** que una página se comparte o indexa, **When** aparece en resultados o vistas previas, **Then** presenta título, descripción y metadatos pertinentes.
6. **Given** que el portfolio está listo para publicarse, **When** se siguen las instrucciones del proyecto, **Then** se puede validar y publicar en el alojamiento previsto sin pasos locales no documentados.
7. **Given** que se publica información o se enlaza un destino externo, **When** se revisa el contenido, **Then** no se exponen secretos ni datos personales no destinados a publicación y los destinos externos se verifican.

### Edge Cases

- Un archivo de CV, certificado o APK falta o deja de estar disponible; no debe ofrecerse una acción rota.
- Una colección de certificados queda vacía después de combinar filtros; se debe comunicar el resultado y permitir restablecerlos.
- No se han proporcionado enlaces de redes, repositorios, demos o credenciales; no deben inventarse ni mostrarse como funcionales.
- Un contenido extenso, una imagen grande o un viewport estrecho no debe provocar solapamientos ni scroll horizontal involuntario.
- La preferencia de movimiento reducido está activa; ninguna animación debe ser necesaria para entender el contenido o completar una acción.
- Una ventana de certificado se cierra con Escape; el foco debe volver al control que la abrió.
- El año cambia; el footer debe reflejar el año vigente.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: El portfolio MUST presentar el nombre, perfil profesional y una descripción basada únicamente en información confirmada por el desarrollador.
- **FR-002**: El portfolio MUST ofrecer navegación a las secciones de inicio, perfil, proyectos, tecnologías, certificados y contacto, con una alternativa usable en pantallas móviles.
- **FR-003**: El portfolio MUST presentar proyectos con nombre, descripción, propósito y tecnologías verificadas, junto con las acciones externas disponibles.
- **FR-004**: El portfolio MUST presentar tecnologías agrupadas por categoría y no asignar porcentajes arbitrarios al dominio.
- **FR-005**: El portfolio MUST presentar cualidades personales con descripciones concretas y sin afirmaciones exageradas.
- **FR-006**: El portfolio MUST presentar formación indicando institución, título o carrera, estado y fechas disponibles, sin presentar estudios en curso como títulos obtenidos.
- **FR-007**: El portfolio MUST permitir consultar certificados, cursos y títulos, y filtrar resultados por tipo, institución y fecha, incluidos filtros combinados.
- **FR-008**: La sección de credenciales MUST informar el número de resultados, ofrecer un estado vacío y permitir limpiar los filtros.
- **FR-009**: Cuando haya imágenes o enlaces originales de credenciales, el portfolio MUST ofrecer su consulta de forma accesible.
- **FR-010**: El portfolio MUST ofrecer acciones para visualizar y descargar el CV cuando el documento esté disponible, y ocultarlas si no lo está.
- **FR-011**: El portfolio MUST ofrecer contacto por correo y redes configuradas, y MUST omitir destinos ausentes o no verificados.
- **FR-012**: El portfolio MUST ofrecer demo, repositorio o descarga de un proyecto solo cuando el destino esté disponible y verificado. Los destinos de referencia iniciales son Sala de Juegos (`https://programacion-4-sala-de-juegos-joaqu.vercel.app/`), TP 2 (`https://joaquin-felipe-diaz-tp-2-git-fd7729-joaquins-projects-397bcb38.vercel.app/`) y GLUTN (descarga Android pendiente de ubicación pública estable).
- **FR-013**: El portfolio MUST permitir identificar autor, enlaces de secciones y redes configuradas desde el pie de página; el año mostrado MUST corresponder al año vigente.
- **FR-014**: La información personal, proyectos, tecnologías, habilidades, formación, credenciales y enlaces MUST poder actualizarse sin reescribir el contenido visual de cada sección.
- **FR-015**: El portfolio MUST adaptarse a móvil, tablet y escritorio desde 320 px de ancho, sin pérdida de contenido ni desplazamiento horizontal involuntario.
- **FR-016**: Las interacciones MUST ser operables mediante teclado, mostrar foco visible, usar nombres comprensibles y ofrecer texto alternativo cuando las imágenes aporten información.
- **FR-017**: Los diálogos de ampliación MUST gestionar el foco, permitir cierre con Escape y evitar controles interactivos anidados.
- **FR-018**: El portfolio MUST respetar la preferencia de movimiento reducido; las animaciones MUST ser breves, sutiles, no bloquear acciones y no causar saltos de layout.
- **FR-019**: El portfolio MUST ofrecer títulos y descripciones de página adecuados, metadatos para compartir, icono del sitio y directivas de indexación apropiadas.
- **FR-020**: El portfolio MUST evitar exponer secretos o información personal que no esté destinada a publicación, validar enlaces externos y proteger la apertura de destinos externos cuando corresponda.
- **FR-021**: El portfolio MUST ser publicable en Vercel y el proyecto MUST incluir instrucciones reproducibles de instalación, ejecución, validación y publicación.
- **FR-022**: La versión publicada MUST superar 90 puntos en Performance, Accessibility, Best Practices y SEO de Lighthouse tanto en móvil como en escritorio.
- **FR-023**: La experiencia de contacto MUST usar destinos directos disponibles y MUST NOT simular el envío de mensajes sin un servicio real.
- **FR-024**: La interfaz MUST usar modo oscuro como apariencia principal, jerarquía tipográfica clara, contraste suficiente y un sistema visual consistente.

### Key Entities *(include if data involved)*

- **Perfil profesional**: identidad, presentación, intereses y datos profesionales confirmados.
- **Proyecto**: nombre, propósito, descripción, categoría, tecnologías, participación confirmada y destinos disponibles.
- **Tecnología**: nombre, categoría, representación y descripción opcional; nivel solo si existe autoevaluación real.
- **Habilidad**: nombre, descripción concreta e icono opcional.
- **Formación**: institución, carrera o título, estado académico, fechas y descripción opcional.
- **Credencial**: nombre, institución emisora, tipo, fecha, imagen, enlace original e identificador cuando existan.
- **Medio de contacto**: tipo y destino verificado de correo o red social.
- **Documento descargable**: tipo (CV, certificado o APK), disponibilidad y destino.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: En una revisión con cinco personas del público objetivo, al menos cuatro identifican el perfil profesional y encuentran la sección de proyectos en menos de 60 segundos.
- **SC-002**: En móvil de 320 px, tablet y escritorio, el 100% de las secciones y acciones principales pueden consultarse sin scroll horizontal involuntario.
- **SC-003**: En mediciones de producción en móvil y escritorio, Performance, Accessibility, Best Practices y SEO superan 90 puntos cada una.
- **SC-004**: El 100% de las combinaciones de filtros probadas devuelve solo credenciales que cumplen todos los criterios seleccionados, y el estado vacío permite restablecer los filtros.
- **SC-005**: El 100% de los enlaces y documentos publicados apunta a un destino verificado; no hay enlaces funcionales para datos ausentes.
- **SC-006**: Una revisión de accesibilidad confirma que el 100% de las acciones principales puede operarse con teclado y que foco, nombres y estados se comunican de manera comprensible.
- **SC-007**: El CV disponible puede abrirse y descargarse correctamente en las plataformas probadas; cuando no está disponible no se presentan acciones rotas.

## Assumptions

- El portfolio es una experiencia pública de presentación profesional y no requiere cuentas, autenticación, backend, base de datos ni panel administrativo.
- Los visitantes principales son reclutadores, empresas, equipos técnicos, desarrolladores y potenciales clientes que pueden disponer de poco tiempo.
- El documento original es la fuente de requisitos del producto; los datos personales, credenciales, niveles, participaciones y descripciones deben verificarse antes de publicarse.
- Los demos indicados se consideran destinos iniciales sujetos a verificación. Los repositorios, URLs sociales, correo, CV, APK, certificados, imagen personal y datos académicos se incorporarán solo cuando se proporcionen o confirmen.
- La experiencia puede implementarse como un portfolio de una página con secciones navegables; no se requiere dividir la presentación en páginas independientes.
- El objetivo Lighthouse se mide en una versión de producción, tanto en móvil como en escritorio, y puede variar por condiciones externas de medición.
- El portfolio se publicará en Vercel; el repositorio será alojado en GitHub según el flujo del proyecto.





