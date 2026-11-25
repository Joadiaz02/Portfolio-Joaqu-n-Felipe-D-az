import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProjectsSection } from './ProjectsSection'

describe('ProjectsSection', () => {
  it('renders project records and only the configured project actions', () => {
    render(<ProjectsSection />)
    expect(screen.getByRole('heading', { name: 'Sala de Juegos' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /GLUTN/ })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /ver demo/i })).toHaveLength(2)
    expect(screen.getByRole('link', { name: /descargar apk/i })).toHaveAttribute(
      'href',
      '/documents/glutn.apk',
    )
  })
})
