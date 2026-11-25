import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SocialLinks } from './SocialLinks'
import type { SocialLink } from '../../types/portfolio'

describe('SocialLinks', () => {
  it('opens configured external destinations safely and omits invalid destinations', () => {
    const links: SocialLink[] = [
      {
        id: 'gh',
        platform: 'github',
        label: 'GitHub',
        detail: '@example',
        url: 'https://github.com/example',
        iconKey: 'github',
        accessibleLabel: 'GitHub',
        visible: true,
        external: true,
      },
      {
        id: 'bad',
        platform: 'linkedin',
        label: 'Unsafe',
        detail: '',
        url: 'javascript:alert(1)',
        iconKey: 'linkedin',
        accessibleLabel: 'Unsafe',
        visible: true,
        external: true,
      },
    ]
    render(<SocialLinks links={links} />)
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'rel',
      'noopener noreferrer',
    )
    expect(screen.queryByRole('link', { name: 'Unsafe' })).not.toBeInTheDocument()
  })
})
