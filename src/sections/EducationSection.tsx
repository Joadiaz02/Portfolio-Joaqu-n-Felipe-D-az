import { Container } from '../components/layout/Container'
import { SectionHeading } from '../components/layout/SectionHeading'
import { education } from '../data/education'

function formatEducationDate(value: string) {
  const [year, month] = value.split('-').map(Number)
  if (!month) return value

  return new Intl.DateTimeFormat('es-AR', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, 1)))
}

export function EducationSection({ items = education }: { items?: typeof education } = {}) {
  return (
    <section id="education" className="section">
      <Container>
        <SectionHeading eyebrow="05 — FORMACIÓN" title="Formación acádemica" description="" />
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
                    {item.startDate && ` · ${formatEducationDate(item.startDate)}`}
                    {item.endDate && ` — ${formatEducationDate(item.endDate)}`}
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
