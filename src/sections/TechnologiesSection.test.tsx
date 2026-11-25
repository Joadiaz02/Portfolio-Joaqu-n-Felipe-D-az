import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TechnologiesSection } from './TechnologiesSection'

describe('TechnologiesSection', () => {
  it('shows eight categories without knowledge-status labels', () => {
    render(<TechnologiesSection />)
    const expectedGroups = [
      'Lenguajes',
      'Frontend',
      'Backend',
      'Datos',
      'Herramientas',
      'Metodologías y prácticas',
      'UX / UI',
      'SAP',
    ]
    for (const name of expectedGroups) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    const sapHeading = screen.getByRole('heading', { name: 'SAP' })
    const sapGroup = sapHeading.closest('.tech-group')
    expect(sapGroup).not.toBeNull()
    expect(within(sapGroup as HTMLElement).getByText('SAP Fiori')).toBeInTheDocument()
    expect(screen.queryByText('Aplicado')).not.toBeInTheDocument()
    expect(screen.queryByText('Declarado en CV')).not.toBeInTheDocument()
    expect(screen.queryByText('De interés')).not.toBeInTheDocument()
  })
})
