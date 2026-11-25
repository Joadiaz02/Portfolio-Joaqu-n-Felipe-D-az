import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HeroSection } from './HeroSection'

describe('HeroSection', () => {
  it('presents the confirmed identity and primary actions', () => {
    render(<HeroSection />)
    expect(screen.getByRole('heading', { name: /joaquín díaz/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /explorar proyectos/i })).toHaveAttribute(
      'href',
      '#projects',
    )
    expect(screen.getByRole('img', { name: /retrato de joaquín/i })).toHaveAttribute(
      'src',
      '/images/joaquin-portrait.png',
    )
    expect(document.querySelector('.orbit-core')).not.toBeInTheDocument()
  })
})
