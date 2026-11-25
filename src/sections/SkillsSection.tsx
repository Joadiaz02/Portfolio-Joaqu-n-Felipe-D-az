import { Container } from '../components/layout/Container'
import { SectionHeading } from '../components/layout/SectionHeading'
import { languages } from '../data/languages'
import { skills } from '../data/skills'

export function SkillsSection() {
  return (
    <section id="skills" className="section section-alt">
      <Container>
        <SectionHeading
          eyebrow="04 — CÓMO TRABAJO"
          title="Habilidades"
          description="Cualidades respaldadas por experiencias concretas."
        />
        {skills.length ? (
          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.id}>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </article>
            ))}
            {languages.map((language) => (
              <article className="skill-card language-card" key={language.id}>
                <span className="skill-index">IDIOMA</span>
                <h3>{language.name}</h3>
                <p>
                  Nivel {language.level}
                  {language.certificationReference && ` · ${language.certificationReference}`}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <p className="empty-note">
            Las habilidades se agregarán cuando estén definidas con ejemplos concretos.
          </p>
        )}
      </Container>
    </section>
  )
}
