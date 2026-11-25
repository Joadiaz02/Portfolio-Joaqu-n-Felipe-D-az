import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ContactSection } from './ContactSection'

describe('ContactSection', () => {
  it('shows the commercial invitation and configured channels without a fake form', () => {
    render(<ContactSection />)
    expect(screen.getByText(/restaurantes de servicio r.pido/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Enviar correo/ })).toHaveAttribute(
      'href',
      expect.stringContaining('mailto:'),
    )
    expect(screen.getByRole('link', { name: /WhatsApp/ })).toHaveAttribute(
      'href',
      expect.stringContaining('wa.me'),
    )
    expect(screen.getByRole('link', { name: /Instagram/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /LinkedIn/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /GitHub/ })).toBeInTheDocument()
    expect(screen.queryByRole('form')).not.toBeInTheDocument()
  })
})
