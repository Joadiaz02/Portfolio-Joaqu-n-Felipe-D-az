import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'

describe('ProjectCard', () => {
  it('briefly explains each project and shows its stack without screenshots', () => {
    render(<ProjectCard project={projects[2]} />)
    expect(screen.getByText('Aplicación móvil Android')).toBeInTheDocument()
    expect(screen.getByText(/gestionar un restaurante/)).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')[0]).toHaveTextContent(/reservas y mesas/)
    expect(screen.getByText('Ionic')).toBeInTheDocument()
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
    expect(screen.queryByText(/Objetivo:|Desafío:|Participación:/)).not.toBeInTheDocument()
  })

  it('renders the configured project demo using safe external-link attributes', () => {
    render(<ProjectCard project={projects[0]} />)
    const link = screen.getByRole('link', { name: /ver demo/i })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders a download action only for the supplied APK path', () => {
    render(<ProjectCard project={projects[2]} />)
    expect(screen.getByRole('link', { name: /descargar apk/i })).toHaveAttribute(
      'href',
      '/documents/glutn.apk',
    )
  })

  it('omits the APK action when a project has no available path', () => {
    render(<ProjectCard project={{ ...projects[2], downloadPath: undefined }} />)
    expect(screen.queryByRole('link', { name: /descargar apk/i })).not.toBeInTheDocument()
  })
})
