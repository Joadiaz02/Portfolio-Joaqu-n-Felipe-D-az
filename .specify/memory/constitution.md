<!--
Sync Impact Report
Version change: unversioned template -> 1.0.0 (initial adoption; the existing file contained only scaffold placeholders).
Modified principles: none; five core principles defined from the supplied 12 project principles.
Added sections: Restricciones adicionales; Flujo de desarrollo y calidad.
Removed sections: none.
Follow-up TODOs: confirm the original ratification date.
-->
# Constitución del Proyecto — Portfolio Personal

## Core Principles

### I. Calidad, claridad y simplicidad
El código MUST ser legible, modular y mantenible; usar TypeScript con `strict: true` y evitar `any` salvo justificación concreta. Los componentes MUST tener responsabilidades claras, favorecer reutilización y evitar duplicación. La arquitectura MUST aplicar SOLID cuando aporte valor y evitar complejidad o abstracciones innecesarias. Los nombres MUST describir su propósito.

### II. Arquitectura modular y contenido desacoplado
La estructura MUST separar componentes, páginas, servicios, tipos, utilidades, estilos y datos de manera consistente. El contenido editable del portfolio —proyectos, tecnologías, certificados, formación, experiencia y redes— MUST residir en archivos TypeScript desacoplados de la presentación, evitando datos personales, enlaces y textos hardcodeados en componentes. Las decisiones de arquitectura MUST mantener el alcance adecuado para un portfolio personal.

### III. Experiencia responsive, accesible y coherente
El diseño MUST partir de Mobile First y funcionar sin desbordamientos ni contenido ilegible en móviles, tablets y escritorio. La interfaz MUST usar HTML semántico, jerarquía correcta de encabezados, contraste suficiente, navegación por teclado, foco visible, etiquetas accesibles y texto alternativo descriptivo. MUST apuntar a WCAG 2.2 AA, no depender solo del color y respetar `prefers-reduced-motion`. Los estados interactivos y la jerarquía visual MUST ser claros y consistentes.

### IV. Rendimiento, seguridad y descubribilidad
El portfolio MUST priorizar carga rápida y estabilidad visual, optimizar imágenes y recursos, aplicar carga diferida a contenido no prioritario y evitar dependencias, JavaScript y renderizados innecesarios. Las animaciones SHOULD limitarse a efectos justificados que prioricen `transform` y `opacity`. El código cliente MUST excluir secretos y datos personales no destinados a publicación; el HTML dinámico MUST sanitizarse y los enlaces externos MUST validarse y protegerse cuando corresponda. Cada página MUST definir metadatos adecuados para buscadores y redes; sitemap y robots.txt MUST incluirse cuando corresponda.

### V. Verificación y entrega reproducible
Las funcionalidades MUST cumplir sus criterios de aceptación antes de considerarse terminadas. La lógica reutilizable y los componentes relevantes MUST probarse unitariamente; los flujos críticos MUST contar con pruebas de integración. Los cambios MUST validar enlaces, navegación, filtros, documentos y comportamiento responsive según corresponda. El build de producción MUST finalizar correctamente y el proyecto MUST poder desplegarse en Vercel sin configuración local obligatoria.

## Restricciones adicionales

- El objetivo de calidad es superar 90 en Lighthouse para Performance, Accessibility, Best Practices y SEO; cualquier excepción MUST justificarse según el contexto.
- El sistema visual MUST centralizar colores, tipografías, tamaños, espaciados, sombras, bordes y transiciones mediante variables CSS. El modo oscuro es la apariencia principal.
- Las animaciones MUST ser sutiles, tener un propósito y conservar una experiencia adecuada cuando estén desactivadas.
- Las dependencias MUST mantenerse actualizadas; no se deben incorporar paquetes sin mantenimiento ni bibliotecas completas cuando una alternativa liviana sea suficiente.
- La información sensible MUST no almacenarse en el navegador. Los enlaces externos MUST usar `rel="noopener noreferrer"` cuando aplique.
- El README MUST explicar instalación, desarrollo, compilación y despliegue. La configuración del proyecto y sus instrucciones MUST permitir reproducir el entorno de desarrollo.

## Flujo de desarrollo y calidad

- Los cambios MUST usar control de versiones Git y commits descriptivos; la organización de ramas se aplica cuando el trabajo lo requiera.
- El proyecto MUST configurar herramientas de análisis estático y formateo apropiadas a su stack.
- Cada cambio MUST revisar los principios aplicables y sus criterios de aceptación. Las decisiones técnicas relevantes MUST documentarse.
- La validación MUST ser proporcional al cambio e incluir pruebas y comprobaciones responsive de las áreas afectadas.
- El portfolio MUST representar fielmente la identidad, conocimientos y proyectos del desarrollador. Las decisiones visuales y técnicas MUST favorecer claridad, experiencia, accesibilidad, rendimiento y mantenimiento.

## Governance

Esta constitución gobierna las decisiones de producto, diseño y desarrollo del portfolio. Toda propuesta y revisión MUST comprobar los principios aplicables. Una excepción MUST describir su motivo, alcance y consecuencias en la documentación del cambio. Las enmiendas requieren actualizar este documento y registrar el motivo junto con la revisión.

El versionado usa `MAJOR.MINOR.PATCH`: MAJOR para eliminar o redefinir principios de forma incompatible; MINOR para agregar principios o ampliar materialmente las reglas; PATCH para aclaraciones y correcciones sin cambio semántico. Toda enmienda MUST actualizar la fecha de última modificación. En revisiones, la persona responsable MUST comprobar la conformidad, las excepciones documentadas y la validación exigida por los criterios de aceptación.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): confirmar la fecha original de adopción | **Last Amended**: 2026-11-24
