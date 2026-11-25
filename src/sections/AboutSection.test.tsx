import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AboutSection } from './AboutSection'

describe('AboutSection', () => {
  it('renders the available profile summary without requiring optional details', () => {
    render(<AboutSection />)
    expect(
      screen.getByText('Portfolio profesional · Proyectos, formación y contacto'),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Un poco de contexto' })).toBeInTheDocument()
  })
})
