import { Container } from '../components/layout/Container'
import { SectionHeading } from '../components/layout/SectionHeading'
import { TechnologyBadge } from '../components/ui/TechnologyBadge'
import { technologies } from '../data/technologies'

const labels = {
  language: 'Lenguajes',
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Datos',
  tool: 'Herramientas',
  methodology: 'Metodologías y prácticas',
  uxui: 'UX / UI',
  sap: 'SAP',
}
export function TechnologiesSection() {
  const categories = [...new Set(technologies.map((item) => item.category))]
  return (
    <section id="technologies" className="section">
      <Container>
        <SectionHeading
          eyebrow="03 — CAJA DE HERRAMIENTAS"
          title="Tecnologías"
          description="Tecnologías agrupadas por área y con el estado de conocimiento indicado de forma explícita."
        />
        {categories.length ? (
          <div className="tech-groups">
            {categories.map((category) => (
              <div className="tech-group" key={category}>
                <h3>{labels[category]}</h3>
                <div className="technology-list">
                  {technologies
                    .filter((item) => item.category === category)
                    .map((technology) => (
                      <TechnologyBadge key={technology.id} technology={technology} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty-note">
            La lista de tecnologías se actualizará con información confirmada.
          </p>
        )}
      </Container>
    </section>
  )
}
