import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('portfolio accessibility foundations', () => {
  it('provides a skip link, named navigation, and main landmark', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Saltar al contenido/ })).toHaveAttribute(
      'href',
      '#main',
    )
    expect(screen.getByRole('navigation', { name: /Navegaci.n principal/ })).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
  it('shows the configured contact channels as active links', () => {
    render(<App />)
    expect(document.querySelectorAll('.social-links-cards a')).toHaveLength(5)
    expect(document.querySelectorAll('.social-links-compact a')).toHaveLength(5)
  })
})
