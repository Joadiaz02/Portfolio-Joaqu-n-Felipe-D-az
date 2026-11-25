import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SkillsSection } from './SkillsSection'

describe('SkillsSection', () => {
  it('shows supported qualities and English proficiency', () => {
    render(<SkillsSection />)
    expect(screen.getByText(/Organizaci.n y responsabilidad/)).toBeInTheDocument()
    expect(screen.getByText('Trabajo en equipo')).toBeInTheDocument()
    expect(document.querySelector('.language-card')).toHaveTextContent('B2')
    expect(
      screen.getByRole('heading', { name: 'Diseño de experiencia de usuario (UX)' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Organizo la navegación y las pantallas/)).toBeInTheDocument()
    expect(screen.queryByText(/El CV (dice|menciona|indica|registra)/)).not.toBeInTheDocument()
  })
})
