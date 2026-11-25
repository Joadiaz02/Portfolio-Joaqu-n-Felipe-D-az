import type { MouseEvent } from 'react'
import type { Credential } from '../../types/portfolio'
import { safeHttpsUrl } from '../../utils/links'

interface Props {
  credential: Credential
  onPreview: (credential: Credential, trigger: HTMLButtonElement) => void
}

export function CertificateCard({ credential, onPreview }: Props) {
  const sourceUrl = safeHttpsUrl(credential.sourceUrl)
  return (
    <article className="certificate-card">
      <span className="eyebrow">{credential.type}</span>
      <h3>{credential.name}</h3>
      <p>
        {credential.issuer}
        {credential.issuedAt && ` · ${credential.issuedAt}`}
      </p>
      {credential.imagePath && (
        <button
          className="text-link"
          onClick={(event: MouseEvent<HTMLButtonElement>) =>
            onPreview(credential, event.currentTarget)
          }
        >
          Ampliar credencial
        </button>
      )}
      {sourceUrl && (
        <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
          Ver original
        </a>
      )}
    </article>
  )
}
