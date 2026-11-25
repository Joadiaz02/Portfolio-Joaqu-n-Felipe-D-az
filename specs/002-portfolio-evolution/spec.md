# Feature Specification: Evolución del portfolio personal

**Feature Branch**: `002-portfolio-evolution`

**Created**: 2026-11-24

**Status**: Draft

**Input**: User description: Evolucionar el portfolio existente para completar los datos profesionales verificados, incorporar cinco medios de contacto, explicar servicios para clientes, mejorar legibilidad, presentar credenciales en grilla y organizar tecnologías, prácticas, UX/UI, SAP e inglés sin atribuir conocimientos no respaldados.

## User Scenarios & Testing

### User Story 1 - Contactar o proponer un proyecto (Priority: P1)

Una persona reclutadora, cliente o visitante encuentra los medios de contacto y puede iniciar una conversación directa. Un cliente particular, emprendimiento o negocio entiende que puede presentar una necesidad, conversar sobre una propuesta y solicitar una cotización.

**Why this priority**: Los contactos y la propuesta de servicios permiten continuar una oportunidad profesional fuera del sitio.

**Independent Test**: Abrir la sección Contacto, verificar los cinco destinos y sus nombres accesibles, usar correo y WhatsApp, y confirmar que no hay formulario ficticio.

**Acceptance Scenarios**:

1. **Given** que el visitante está en Contacto, **When** revisa los medios, **Then** encuentra correo, WhatsApp, Instagram, LinkedIn y GitHub con icono, etiqueta y destino correctos.
2. **Given** que el visitante elige WhatsApp, **When** abre el vínculo, **Then** la URL usa el número internacional `5491128657205` sin separadores y puede incluir el mensaje inicial proporcionado.
3. **Given** que un potencial cliente lee la sección, **When** busca cómo presentar una idea, **Then** entiende que puede explicar una necesidad, coordinar una reunión y pedir una cotización sin que se prometan precio o plazo automáticos.
4. **Given** que se presenta una acción de contacto, **When** el visitante la activa con teclado o puntero, **Then** el foco es visible, el nombre accesible describe el destino y el vínculo externo se abre con seguridad.

---

### User Story 2 - Comprender proyectos y experiencia aplicada (Priority: P1)

Un reclutador o cliente revisa Sala de Juegos, Instabook/TP 2 y GLUTN, comprende su objetivo y funcionalidades verificadas, y distingue la participación documentada de los datos desconocidos.

**Why this priority**: Los proyectos muestran evidencia concreta del trabajo y conocimientos aplicados.

**Independent Test**: Revisar las tres tarjetas, comparar descripciones y tecnologías con los README y archivos fuente disponibles, y abrir las demos, repositorios y descargas configurados.

**Acceptance Scenarios**:

1. **Given** que el visitante revisa un proyecto, **When** lee su tarjeta, **Then** encuentra nombre, objetivo, necesidad, funcionalidades, tipo y tecnologías respaldadas por una fuente.
2. **Given** que existe demo, repositorio o APK, **When** se muestra una acción, **Then** lleva al destino correspondiente y el APK existente se descarga.
3. **Given** que un dato o destino no tiene respaldo, **When** se presenta un proyecto, **Then** ese dato se omite en lugar de inferirse por el nombre o la apariencia.
4. **Given** que un proyecto fue grupal, **When** se describe la contribución de Joaquín, **Then** se utiliza únicamente la participación que figure en la documentación del proyecto.

---

### User Story 3 - Leer el portfolio con comodidad (Priority: P1)

Una persona consulta el portfolio en escritorio o móvil, encuentra títulos y contenido con una jerarquía clara y puede leerlos sin bajo contraste ni texto principal demasiado pequeño.

**Why this priority**: La información de contacto, proyectos y perfil debe ser legible y accesible antes de que pueda resultar útil.

**Independent Test**: Revisar las vistas de 320, 375, 768, 1024 y 1440 píxeles, medir tipografía y contraste de los componentes principales, navegar con teclado y activar movimiento reducido.

**Acceptance Scenarios**:

1. **Given** que el visitante abre el portfolio en móvil, **When** lee títulos, cuerpo y tarjetas, **Then** el contenido principal usa al menos 16 px y mantiene un ancho cómodo sin desbordamiento horizontal.
2. **Given** que se presenta texto sobre la paleta oscura, **When** se mide el contraste, **Then** el texto normal alcanza WCAG 2.2 AA (4.5:1) y el texto grande alcanza 3:1.
3. **Given** que el visitante navega con teclado o reduce movimiento, **When** usa las interacciones, **Then** conserva foco visible y una experiencia comprensible sin depender de animaciones.

---

### User Story 4 - Explorar certificados y estudios (Priority: P2)

Un visitante revisa credenciales y formación sin usar filtros, y abre imágenes o fuentes originales únicamente cuando están disponibles.

**Why this priority**: Las credenciales y estudios respaldan el perfil y deben ser fáciles de recorrer.

**Independent Test**: Revisar la grilla en escritorio, tablet y móvil; comprobar las credenciales descritas en el CV, la formación y el comportamiento cuando no existe imagen o vínculo original.

**Acceptance Scenarios**:

1. **Given** que hay credenciales documentadas, **When** se abre la sección, **Then** se presentan como tarjetas con nombre, institución, fecha y tipo disponibles, sin filtros desplegables ni carrusel.
2. **Given** que la vista es de escritorio, tablet o móvil, **When** se distribuyen las tarjetas, **Then** hay dos columnas en escritorio y tablet con espacio suficiente y una columna en móvil.
3. **Given** que una credencial no tiene imagen o enlace público, **When** se muestra su tarjeta, **Then** el texto sigue disponible y no aparece una acción rota ni una imagen rota.
4. **Given** que se amplía una imagen, **When** se abre y cierra la vista, **Then** se puede operar con teclado, cerrar con Escape y devolver el foco al control que la abrió.

---

### User Story 5 - Entender conocimientos, prácticas e intereses (Priority: P2)

Un reclutador conoce tecnologías, frameworks, prácticas, conceptos UX/UI e intereses del desarrollador, diferenciando el trabajo aplicado, conocimientos declarados y temas que desea explorar.

**Why this priority**: La organización por categorías y nivel de respaldo permite interpretar el perfil sin confundir interés con experiencia.

**Independent Test**: Revisar las categorías y estados de conocimiento contra el CV, repositorios, la información proporcionada por el desarrollador y el trabajo implementado en este portfolio.

**Acceptance Scenarios**:

1. **Given** que se listan tecnologías, **When** el visitante las recorre, **Then** están agrupadas en lenguajes, frontend, backend, bases de datos, herramientas, prácticas, UX/UI y SAP.
2. **Given** que una tecnología se utilizó en un proyecto, **When** aparece en la lista, **Then** se diferencia de un conocimiento declarado, estudiado, en aprendizaje o de interés.
3. **Given** que se presenta el ecosistema SAP, **When** se muestran Fiori, SAPUI5, SAP BTP, ABAP o integración empresarial, **Then** se agrupan como temas de interés/exploración y no como dominio o experiencia acreditada.
4. **Given** que se presenta inglés, **When** el visitante consulta el nivel, **Then** ve el nivel B2 y la referencia First For Schools indicada en el CV, sin inventar una nueva certificación.

---

### User Story 6 - Mantener el portfolio sin duplicar datos (Priority: P2)

El desarrollador actualiza contactos, proyectos, tecnologías, credenciales e idiomas en una única fuente de contenido y las secciones reflejan esos cambios de forma coherente.

**Why this priority**: Los datos centralizados reducen errores y permiten mantener la información profesional.

**Independent Test**: Cambiar un registro de prueba en su módulo de contenido y comprobar que todas sus presentaciones relacionadas usan el mismo valor.

**Acceptance Scenarios**:

1. **Given** que se actualiza un contacto, **When** se muestra en Contacto y footer, **Then** se conserva una sola URL canónica y sus atributos de acceso siguen correctos.
2. **Given** que se modifica un proyecto, tecnología, credencial o idioma, **When** se renderiza la sección correspondiente, **Then** no se mantiene una copia desactualizada en otro componente.

## Casos de uso

1. **Contacto directo**: visitante → elige medio → abre destino configurado.
2. **Consulta comercial**: potencial cliente → entiende qué proponer → inicia conversación por WhatsApp o correo para explicar necesidad, coordinar reunión o solicitar cotización.
3. **Evaluación de proyecto**: reclutador → compara objetivo, funcionalidades y stack → abre demo o repositorio.
4. **Consulta de credencial**: visitante → revisa tarjeta → abre imagen o fuente disponible.
5. **Exploración del perfil técnico**: visitante → selecciona categoría → distingue práctica aplicada de conocimiento declarado o interés.

### Edge Cases

- El enlace de una red deja de responder, no usa HTTPS o no coincide con el medio declarado; no se debe publicar como acción válida.
- El CV, APK, certificado o imagen no existe en el build; no se debe mostrar una acción de descarga/visualización.
- Un proyecto carece de captura, repositorio, participación confirmada o algún dato descriptivo; se debe omitir solo ese dato.
- Hay muchas tarjetas de certificados; deben agregarse filas sin carrusel ni controles de filtrado.
- Un viewport de 320 px o una cadena larga aparece en una tarjeta; no debe crear scroll horizontal.
- El visitante usa solo teclado, lector de pantalla o movimiento reducido; todas las acciones siguen disponibles.
- El usuario cierra la ampliación de certificado con Escape; el foco vuelve al control que abrió la imagen.
- SAP se presenta como interés; no debe mezclarse con tecnologías aplicadas.

## Requirements

### Functional Requirements

- **FR-001**: La sección Contacto MUST mostrar correo, WhatsApp, Instagram, LinkedIn y GitHub con iconos reconocibles, nombres visibles y etiquetas accesibles.
- **FR-002**: Correo MUST usar `mailto:joacodiaz437@gmail.com`; WhatsApp MUST usar `https://wa.me/5491128657205` y puede incluir un mensaje inicial codificado; Instagram MUST enlazar `https://www.instagram.com/diaz.joa_/`; LinkedIn MUST enlazar `https://www.linkedin.com/in/joaquin-felipe-diaz-8018b4239/`; GitHub MUST enlazar `https://github.com/Joadiaz02`.
- **FR-003**: Los vínculos externos MUST validarse, abrirse en una nueva pestaña cuando corresponde y usar `rel="noopener noreferrer"`; correo y WhatsApp pueden abrir su aplicación o cliente directamente.
- **FR-004**: Contacto MUST explicar la posibilidad de proponer desarrollos para personas, emprendimientos y negocios, describir el proceso de presentar una idea, explicar la necesidad, coordinar una reunión y pedir cotización, y ofrecer WhatsApp/correo como acciones directas.
- **FR-005**: Contacto MUST NOT simular el envío de mensajes ni prometer precio, fecha o resultado antes de conversar.
- **FR-006**: La escala tipográfica MUST conservar la identidad oscura y acentos existentes, dar mayor jerarquía a títulos y mantener lectura cómoda; el texto principal móvil MUST ser de al menos 16 px.
- **FR-007**: Texto normal MUST alcanzar contraste mínimo 4.5:1 y texto grande 3:1 conforme a WCAG 2.2 AA; foco interactivo MUST permanecer visible.
- **FR-008**: Certificados MUST mostrarse en tarjetas en una grilla sin filtros como navegación principal, sin carrusel obligatorio ni filtros desplegables.
- **FR-009**: La grilla de certificados MUST usar dos columnas en escritorio y tablet y una en móvil; la tarjeta MUST omitir imágenes y acciones no disponibles.
- **FR-010**: Una imagen de certificado disponible MUST poder ampliarse mediante control accesible, cierre con Escape y retorno de foco al control iniciador.
- **FR-011**: Cada tarjeta de proyecto MUST mostrar nombre, tipo, descripción, objetivo/necesidad, funcionalidades verificadas y stack tecnológico verificado; rol, imagen, demo, repositorio y descarga solo se muestran cuando estén disponibles y confirmados.
- **FR-012**: Sala de Juegos MUST describirse como el proyecto académico de Programación IV documentado en su README; la información visible puede incluir Ahorcado, Mayor o Menor, Preguntados, Sopa de Letras, autenticación, resultados y chat en tiempo real respaldados por el README.
- **FR-013**: TP 2 MUST identificarse como Instabook, aplicación/red social documentada en su README; la información visible puede incluir publicaciones, perfiles, autenticación, comentarios, reacciones, administración y stack Angular/NestJS/MongoDB/Cloudinary cuando se respalde en documentación.
- **FR-014**: GLUTN MUST identificarse como aplicación móvil Android de gestión de restaurante desarrollada con Ionic, Angular, Capacitor y Supabase, y describir funciones respaldadas por su README/implementación; MUST incluir el APK disponible y el repositorio solo si se confirma un enlace público.
- **FR-015**: Los datos personales, vínculos, proyectos, tecnologías, formación, credenciales, idiomas y niveles MUST residir en módulos de contenido tipados separados de la presentación y no duplicarse entre secciones.
- **FR-016**: Las tecnologías MUST agruparse en lenguajes, frontend, backend, bases de datos, herramientas, metodologías/prácticas, UX/UI y SAP.
- **FR-017**: Los registros técnicos MUST diferenciar como mínimo aplicación comprobada, conocimiento declarado/estudiado, aprendizaje actual e interés; no se asignarán niveles de dominio sin fuente explícita.
- **FR-018**: La categoría de metodologías MUST poder mostrar Spec-Driven Development, User Stories, casos de uso, criterios de aceptación, descomposición de requisitos, documentación técnica, trabajo con ramas, desarrollo incremental y testing, sin atribuir aplicación no comprobada.
- **FR-019**: La categoría UX/UI MUST poder mostrar UX, UI, responsive design, arquitectura de información, jerarquía visual, wireframes, prototipado, accesibilidad y diseño centrado en el usuario con estado de respaldo; MUST NOT incluir Figma como experiencia acreditada sin confirmación.
- **FR-020**: La categoría SAP MUST presentar SAP, SAP Fiori, SAPUI5, SAP BTP, ABAP e integración empresarial como interés/temas por explorar, no como experiencia práctica ni dominio.
- **FR-021**: El portfolio MUST mostrar inglés B2 y la referencia “First For Schools” conforme al CV disponible, sin inventar otra certificación.
- **FR-022**: El portfolio MUST mantener las secciones y acciones existentes, comportamiento de movimiento reducido, navegación por teclado, metadatos y enlaces actuales que no contradigan esta especificación.

### Requisitos no funcionales

- **NFR-001**: Mantener React 19, Vite, TypeScript estricto, Tailwind CSS, Motion y Lucide React; no agregar dependencias salvo necesidad documentada.
- **NFR-002**: La experiencia MUST funcionar en 320, 375, 768, 1024 y 1440 px sin desplazamiento horizontal involuntario.
- **NFR-003**: Mantener WCAG 2.2 AA para contraste, teclado, nombres accesibles y foco visible; respetar `prefers-reduced-motion`.
- **NFR-004**: Imágenes e iconos MUST optimizarse y cargarse con costo proporcional; el cambio no debe añadir una carga o animación innecesaria.
- **NFR-005**: El sitio publicado MUST conservar el objetivo Lighthouse superior a 90 en Performance, Accessibility, Best Practices y SEO en escritorio y móvil.
- **NFR-006**: Los cambios MUST superar build, pruebas existentes, lint, revisión de destinos, navegación y disponibilidad de documentos.

### Reglas de negocio

1. Los cinco datos de contacto indicados por el desarrollador son los destinos canónicos; las URLs no se replican en componentes.
2. Un destino ausente, inseguro o no confirmado no se ofrece como acción.
3. No se inventan proyectos, tecnologías utilizadas, contribuciones, estudios, credenciales, imágenes ni niveles.
4. Los estados de interés, aprendizaje, declaración y uso en proyecto se presentan con etiquetas diferentes.
5. No se atribuye a Joaquín todo el trabajo grupal de GLUTN; se respeta la matriz de responsabilidades publicada.
6. Un certificado sin imagen sigue pudiendo mostrarse como información textual verificada.
7. Los archivos descargables solo se enlazan si existen en `public/documents/`.
8. La sección comercial invita a conversar; no representa un presupuesto o reunión automática.
9. Se conserva la identidad visual oscura y se ajusta la jerarquía sin reemplazar el diseño completo.

### Entidades

- **ContactLink**: medio, URL, tipo de destino, icono, etiqueta accesible, visibilidad y condición de apertura externa.
- **Project**: nombre, tipo, descripción, objetivo/necesidad, funciones verificadas, tecnologías, participación, demo, repositorio, descarga e imagen.
- **Technology**: nombre, categoría, descripción, icono opcional, estado de conocimiento y fuente de respaldo.
- **Credential**: nombre, institución, fecha, tipo, imagen y URL de fuente original opcionales.
- **Language**: idioma, nivel respaldado, descripción y referencia/certificación disponible.

## Success Criteria

### Measurable Outcomes

- **SC-001**: Los cinco medios de contacto están visibles y sus destinos coinciden con las URLs definidas en FR-002; cada uno tiene nombre accesible y área interactiva de al menos 44×44 px.
- **SC-002**: En las cinco anchuras definidas (320, 375, 768, 1024, 1440 px), ninguna sección presenta desbordamiento horizontal; certificados presentan una columna en móvil y dos en tablet/escritorio.
- **SC-003**: El texto principal móvil mide al menos 16 px y todas las combinaciones de texto normal/grande cumplen los contrastes WCAG 2.2 AA definidos en FR-007.
- **SC-004**: El mensaje comercial comunica las cuatro acciones (presentar idea, explicar necesidad, coordinar reunión, solicitar cotización) y ambas acciones directas abren WhatsApp/correo sin enviar un formulario.
- **SC-005**: Cada hecho mostrado en las tres tarjetas de proyectos se rastrea al README, fuente del proyecto, CV o dato provisto explícitamente; todos los destinos visibles responden o existen al momento de la validación.
- **SC-006**: Certificados se recorren sin filtros ni carrusel; toda imagen/ampliación disponible se abre por teclado, cierra con Escape y devuelve el foco.
- **SC-007**: Tecnologías, metodologías, UX/UI y SAP se presentan con categoría y estado de respaldo; ningún tema SAP figura como experiencia o dominio.
- **SC-008**: Inglés se presenta como B2 con la referencia textual que figura en el CV y sin agregar certificaciones distintas.
- **SC-009**: `npm run build`, `npm run test` y `npm run lint` finalizan correctamente y Lighthouse supera 90 en las cuatro categorías en producción móvil/escritorio.

## Assumptions

- Los cinco medios de contacto y mensajes escritos en esta solicitud están autorizados para publicarse en el portfolio.
- El PDF `public/documents/cv.pdf` es la fuente vigente disponible; allí se indica inglés B2 (First For Schools), las dos credenciales y la formación UTN.
- La documentación pública y local de los repositorios de Sala de Juegos, TP 2 y GLUTN sirve como respaldo de proyectos; el rol personal se limita a responsabilidades documentadas.
- Las credenciales del CV pueden aparecer como tarjetas textuales aunque no se hayan proporcionado imágenes o verificadores públicos.
- SAP se muestra como interés y temas por explorar hasta que exista una confirmación más detallada de estudio o práctica.
- La apariencia oscura existente y las secciones actuales permanecen; el alcance de esta feature es evolutivo.
- No se añade backend, formulario, cuenta de usuario ni servicio de mensajería.
