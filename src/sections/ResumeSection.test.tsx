import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ResumeSection } from './ResumeSection'

describe('ResumeSection', () => {
  it('shows view and download actions for the supplied CV', () => {
    render(<ResumeSection />)
    expect(screen.getByRole('link', { name: /ver cv/i })).toHaveAttribute(
      'href',
      '/documents/cv.pdf',
    )
    expect(screen.getByRole('link', { name: /descargar/i })).toHaveAttribute('download')
  })

  it('omits document actions when the CV is unavailable', () => {
    render(<ResumeSection documentList={[]} />)
    expect(screen.queryByRole('link', { name: /ver cv/i })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /descargar/i })).not.toBeInTheDocument()
  })
})
