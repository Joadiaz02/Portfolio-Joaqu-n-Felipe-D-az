import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { CertificateCard } from './CertificateCard'
import type { Credential } from '../../types/portfolio'

describe('CertificateCard', () => {
  it('renders a text-only credential without an empty preview action', () => {
    const credential: Credential = {
      id: 'course',
      name: 'Curso',
      issuer: 'UTN',
      type: 'course',
      evidence: ['CV'],
    }
    render(<CertificateCard credential={credential} onPreview={vi.fn()} />)
    expect(screen.getByRole('heading', { name: 'Curso' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /ampliar/i })).not.toBeInTheDocument()
  })
  it('only renders a verified HTTPS source link', () => {
    const credential: Credential = {
      id: 'course',
      name: 'Curso',
      issuer: 'UTN',
      type: 'course',
      sourceUrl: 'https://example.com/certificate',
      evidence: ['CV'],
    }
    render(<CertificateCard credential={credential} onPreview={vi.fn()} />)
    expect(screen.getByRole('link', { name: 'Ver original' })).toHaveAttribute(
      'rel',
      'noopener noreferrer',
    )
  })
})
