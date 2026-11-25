import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TechnologyBadge } from './TechnologyBadge'
import type { Technology } from '../../types/portfolio'

describe('TechnologyBadge', () => {
  it('shows only the technology name', () => {
    const technology: Technology = {
      id: 'sap',
      name: 'SAP Fiori',
      category: 'sap',
      knowledgeStatus: 'interest',
      evidence: ['Interés declarado'],
    }
    render(<TechnologyBadge technology={technology} />)
    expect(screen.getByText('SAP Fiori')).toBeInTheDocument()
    expect(screen.queryByText('De interés')).not.toBeInTheDocument()
    expect(screen.queryByText(/%/)).not.toBeInTheDocument()
  })
})
