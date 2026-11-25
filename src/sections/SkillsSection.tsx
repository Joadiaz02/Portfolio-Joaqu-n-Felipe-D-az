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
          </div>
        ) : (
          <p className="empty-note">
            Las habilidades se agregarán cuando estén definidas con ejemplos concretos.
          </p>
        )}
        <div className="language-card">
          <span className="eyebrow">IDIOMAS</span>
          {languages.map((language) => (
            <p key={language.id}>
              <strong>{language.name}:</strong> {language.level}
              {language.certificationReference ? ` · ${language.certificationReference}` : ''}
            </p>
          ))}
        </div>
      </Container>
    </section>
  )
}
