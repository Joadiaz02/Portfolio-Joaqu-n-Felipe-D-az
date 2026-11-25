import { describe, expect, it } from 'vitest'
import { safeHttpsUrl, safeMailtoUrl } from './links'

describe('safe links', () => {
  it('only accepts HTTPS external links and valid mailto destinations', () => {
    expect(safeHttpsUrl('https://example.com')).toBe('https://example.com/')
    expect(safeHttpsUrl('javascript:alert(1)')).toBeUndefined()
    expect(safeHttpsUrl('not a url')).toBeUndefined()
    expect(safeMailtoUrl('mailto:hello@example.com')).toBe('mailto:hello@example.com')
    expect(safeMailtoUrl('mailto:missing-domain')).toBeUndefined()
  })
})
