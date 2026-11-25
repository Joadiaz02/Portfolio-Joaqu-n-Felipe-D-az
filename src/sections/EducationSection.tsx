import { Container } from '../components/layout/Container'
import { SectionHeading } from '../components/layout/SectionHeading'
import { education } from '../data/education'

export function EducationSection({ items = education }: { items?: typeof education } = {}) {
  return (
    <section id="education" className="section">
      <Container>
        <SectionHeading
          eyebrow="05 — FORMACIÓN"
          title="Aprender siempre"
          description="Formación académica y aprendizaje continuo."
        />
        {items.length ? (
          <div className="timeline">
            {items.map((item) => (
              <article className="timeline-item" key={item.id}>
                <span className="timeline-dot" />
                <div>
                  <p className="eyebrow">{item.institution}</p>
                  <h3>{item.programOrTitle}</h3>
                  <p className="muted">
                    {item.status === 'in_progress'
                      ? 'En curso'
                      : item.status === 'completed'
                        ? 'Completado'
                        : item.status}
                    {item.startDate && ` · ${item.startDate}`}
                    {item.endDate && ` — ${item.endDate}`}
                  </p>
                  {item.description && <p>{item.description}</p>}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="empty-note">
            La formación se publicará cuando sus datos estén confirmados.
          </p>
        )}
      </Container>
    </section>
  )
}
