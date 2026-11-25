import { ArrowDownToLine, ArrowUpRight, FileText } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { documents } from '../data/documents'
import { Button } from '../components/ui/Button'

export function ResumeSection({
  documentList = documents,
}: { documentList?: typeof documents } = {}) {
  const cv = documentList.find((document) => document.kind === 'cv' && document.available)
  return (
    <section id="resume" className="section resume-section">
      <Container>
        <div className="resume-panel">
          <div className="resume-icon">
            <FileText size={25} />
          </div>
          <div className="resume-copy">
            <p className="eyebrow">07 — PARA DESCARGAR</p>
            <h2>Mi recorrido, en una página.</h2>
            <p className="muted">Consultá el CV para conocer más sobre mi perfil.</p>
          </div>
          {cv && (
            <div className="resume-actions">
              <Button
                className="button button-secondary"
                href={cv.publicPath}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver CV <ArrowUpRight size={16} />
              </Button>
              <Button href={cv.publicPath} download>
                Descargar <ArrowDownToLine size={16} />
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
