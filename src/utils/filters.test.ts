import { describe, expect, it } from 'vitest'
import { filterCredentials } from './filters'
import type { Credential } from '../types/portfolio'

const records: Credential[] = [
  {
    id: 'a',
    name: 'React',
    issuer: 'UTN',
    type: 'course',
    issuedAt: '2025-04',
    evidence: ['test'],
  },
  {
    id: 'b',
    name: 'Web',
    issuer: 'Otra',
    type: 'certificate',
    issuedAt: '2024-11',
    evidence: ['test'],
  },
]

describe('filterCredentials', () => {
  it('combines type, issuer, and year with AND semantics', () => {
    expect(filterCredentials(records, { type: 'course', issuer: 'UTN', year: '2025' })).toEqual([
      records[0],
    ])
    expect(filterCredentials(records, { type: 'course', issuer: 'UTN', year: '2024' })).toEqual([])
  })
  it('returns all entries when filters are cleared', () => {
    expect(filterCredentials(records, { type: '', issuer: '', year: '' })).toEqual(records)
  })
})
