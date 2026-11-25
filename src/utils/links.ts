export function safeHttpsUrl(value?: string): string | undefined {
  if (!value) return undefined
  try {
    const parsed = new URL(value)
    return parsed.protocol === 'https:' ? parsed.toString() : undefined
  } catch {
    return undefined
  }
}

export function safeMailtoUrl(value?: string): string | undefined {
  if (!value || !value.startsWith('mailto:')) return undefined
  try {
    const parsed = new URL(value)
    return parsed.protocol === 'mailto:' && parsed.pathname.includes('@') ? value : undefined
  } catch {
    return undefined
  }
}
