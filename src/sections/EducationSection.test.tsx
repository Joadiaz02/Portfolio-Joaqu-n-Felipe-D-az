import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { EducationSection } from './EducationSection'

describe('EducationSection', () => {
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
    expect(screen.getByText('En curso · 2024-03')).toBeInTheDocument()
    expect(screen.queryByText('Completado')).not.toBeInTheDocument()
  })
})
