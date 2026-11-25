import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { EducationSection } from './EducationSection'

describe('EducationSection', () => {
  it('shows the completed secondary-school degree and dates', () => {
    render(<EducationSection />)
    expect(screen.getByText('Bertrand Russell')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Bachiller en Ciencias Sociales' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Completado · marzo de 2015 — noviembre de 2020')).toBeInTheDocument()
  })

  it('shows the university start date and omits the CV explanation', () => {
    render(<EducationSection />)
    expect(screen.getByText('Completado · agosto de 2023 — noviembre de 2026')).toBeInTheDocument()
    expect(screen.queryByText(/El CV indica/)).not.toBeInTheDocument()
  })

  it('labels current studies as in progress rather than awarded', () => {
    render(
      <EducationSection
        items={[
          {
            id: 'current',
            institution: 'Universidad',
            programOrTitle: 'Carrera de prueba',
            status: 'in_progress',
            evidence: ['CV'],
            startDate: '2024-03',
          },
        ]}
      />,
    )
    expect(screen.getByText('En curso · marzo de 2024')).toBeInTheDocument()
    expect(screen.queryByText('Completado')).not.toBeInTheDocument()
  })
})
