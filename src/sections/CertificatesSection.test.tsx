import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { waitFor } from '@testing-library/react'
import { CertificatesSection } from './CertificatesSection'
import type { Credential } from '../types/portfolio'

describe('CertificatesSection', () => {
  it('shows credentials without filter controls', () => {
    const items: Credential[] = [
      { id: 'one', name: 'Curso de prueba', issuer: 'UTN', type: 'course', evidence: ['CV'] },
    ]
    render(<CertificatesSection items={items} />)
    expect(screen.getByText('Curso de prueba')).toBeInTheDocument()
    expect(screen.queryByRole('combobox')).not.toBeInTheDocument()
  })
  it('restores focus after Escape closes the preview', async () => {
    const user = userEvent.setup()
    const items: Credential[] = [
      {
        id: 'one',
        name: 'Curso de prueba',
        issuer: 'UTN',
        type: 'course',
        imagePath: '/documents/certificates/course.jpg',
        evidence: ['CV'],
      },
    ]
    render(<CertificatesSection items={items} />)
    const opener = screen.getByRole('button', { name: 'Ampliar credencial' })
    await user.click(opener)
    expect(screen.getByRole('dialog', { name: 'Credencial: Curso de prueba' })).toHaveFocus()
    await user.keyboard('{Escape}')
    await waitFor(() => expect(opener).toHaveFocus())
  })
})
