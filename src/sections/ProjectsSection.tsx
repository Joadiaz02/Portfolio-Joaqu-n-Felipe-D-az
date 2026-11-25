import { Container } from '../components/layout/Container'
import { SectionHeading } from '../components/layout/SectionHeading'
import { ProjectCard } from '../components/ui/ProjectCard'
import { projects } from '../data/projects'

export function ProjectsSection() {
  return (
    <section id="projects" className="section section-alt">
      <Container>
        <SectionHeading
          eyebrow="02 — TRABAJO SELECCIONADO"
          title="Proyectos"
          description="Una selección de proyectos y experimentos en los que participé."
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}
