import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the current year and section navigation', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Navegación del pie' })).toBeInTheDocument()
  })
})
