import { Container } from '../components/layout/Container'
import { SectionHeading } from '../components/layout/SectionHeading'
import { personal } from '../data/personal'

export function AboutSection() {
  return (
    <section id="about" className="section">
      <Container>
        <SectionHeading
          eyebrow="01 — SOBRE MÍ"
          title="Un poco de contexto"
          description="Una presentación breve, clara y en constante evolución."
        />
        <div className="about-layout">
          <p className="about-lead">{personal.summary}</p>
          <div className="about-copy">
            {personal.about?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <span className="about-note">{personal.fullName}</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
