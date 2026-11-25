import { ArrowUpRight, Github } from 'lucide-react'
import type { Project } from '../../types/portfolio'
import { Badge } from './Badge'
import { safeHttpsUrl } from '../../utils/links'

export function ProjectCard({ project }: { project: Project }) {
  const demo = safeHttpsUrl(project.demoUrl)
  const repo = safeHttpsUrl(project.repositoryUrl)
  const download = project.downloadPath?.startsWith('/documents/')

  return (
    <article className="project-card">
      <div className="project-top">
        <span className="project-type">{project.projectType}</span>
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <h4 className="project-subheading">Qué podés hacer</h4>
      <ul className="project-features">
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <h4 className="project-subheading">Stack utilizado</h4>
      <div className="project-stack" aria-label={`Tecnologías de ${project.name}`}>
        {project.technologies.map((technology) => (
          <Badge key={technology}>{technology}</Badge>
        ))}
      </div>
      <div className="project-actions">
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            Ver demo <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        )}
        {repo && (
          <a href={repo} target="_blank" rel="noopener noreferrer">
            <Github size={15} aria-hidden="true" /> Código
          </a>
        )}
        {download && (
          <a href={project.downloadPath} download>
            Descargar APK <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}
