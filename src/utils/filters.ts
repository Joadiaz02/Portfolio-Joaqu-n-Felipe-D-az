import type { Credential } from '../types/portfolio'

export interface CredentialFilters {
  type: string
  issuer: string
  year: string
}

export function filterCredentials(
  credentials: Credential[],
  filters: CredentialFilters,
): Credential[] {
  return credentials.filter(
    (item) =>
      (!filters.type || item.type === filters.type) &&
      (!filters.issuer || item.issuer === filters.issuer) &&
      (!filters.year || item.issuedAt?.startsWith(filters.year) === true),
  )
}
