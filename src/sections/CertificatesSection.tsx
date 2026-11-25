import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { SectionHeading } from '../components/layout/SectionHeading'
import { CertificateCard } from '../components/ui/CertificateCard'
import { certificates } from '../data/certificates'
import type { Credential } from '../types/portfolio'

export function CertificatesSection({ items = certificates }: { items?: Credential[] } = {}) {
  const [selected, setSelected] = useState<Credential | null>(null)
  const opener = useRef<HTMLElement | null>(null)
  const dialog = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (!selected) return
    dialog.current?.focus()
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setSelected(null)
        requestAnimationFrame(() => opener.current?.focus())
      }
      if (event.key === 'Tab' && dialog.current) {
        const controls = [...dialog.current.querySelectorAll<HTMLElement>('button, a[href]')]
        if (!controls.length) {
          event.preventDefault()
          return
        }
        if (event.shiftKey && document.activeElement === controls[0]) {
          event.preventDefault()
          controls.at(-1)?.focus()
        } else if (!event.shiftKey && document.activeElement === controls.at(-1)) {
          event.preventDefault()
          controls[0].focus()
        }
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [selected])
  function close() {
    setSelected(null)
    requestAnimationFrame(() => opener.current?.focus())
  }
  return (
    <section id="certificates" className="section section-alt">
      <Container>
        <SectionHeading
          eyebrow="06 — APRENDIZAJE"
          title="Certificados"
          description="Cursos y credenciales para seguir creciendo."
        />
        {items.length ? (
          <div className="certificate-grid">
            {items.map((item) => (
              <CertificateCard
                key={item.id}
                credential={item}
                onPreview={(credential, trigger) => {
                  opener.current = trigger
                  setSelected(credential)
                }}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>Todavía no hay credenciales para mostrar.</p>
          </div>
        )}
      </Container>
      {selected?.imagePath && (
        <div
          className="dialog-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close()
          }}
        >
          <div
            ref={dialog}
            className="preview-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`Credencial: ${selected.name}`}
            tabIndex={-1}
          >
            <button className="dialog-close" aria-label="Cerrar vista" onClick={close}>
              <X />
            </button>
            <img src={selected.imagePath} alt={selected.imageAlt ?? selected.name} />
          </div>
        </div>
      )}
    </section>
  )
}
