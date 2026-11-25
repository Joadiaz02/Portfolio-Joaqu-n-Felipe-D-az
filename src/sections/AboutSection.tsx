import { Container } from '../components/layout/Container'
import { SectionHeading } from '../components/layout/SectionHeading'
import { personal } from '../data/personal'

export function AboutSection() {
  return (
    <section id="about" className="section">
      <Container>
        <SectionHeading
          eyebrow="01 — SOBRE MÍ"
          title=""
          description="Hola mi nombre es Joaquín y soy recibido de la tecnicatura en programación de la Universidad Tecnológica Nacional.

Hace 4 años comencé mi camino en el mundo de la programación, un recorrido en el que fui adquiriendo conocimientos y experiencia trabajando con diferentes tecnologías, frameworks y equipos de trabajo.

A lo largo de este proceso desarrollé proyectos que me permitieron poner en práctica mis habilidades, enfrentar nuevos desafíos y seguir creciendo como desarrollador.

Te invito a conocer mi perfil, explorar las tecnologías con las que trabajo y descubrir algunos de mis proyectos."
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
