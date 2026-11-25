import { ArrowUpRight } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { SectionHeading } from '../components/layout/SectionHeading'
import { SocialLinks } from '../components/ui/SocialLinks'
import { socialLinks } from '../data/social-links'

export function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <Container>
        <SectionHeading
          eyebrow="07 — CONTACTO"
          title="¿Hacemos algo bueno?"
          description="Estoy abierto a propuestas para clientes particulares, restaurantes de servicio rápido, sistemas de gestión para negocios y emprendimientos. Podés compartir una idea, contarme qué necesitás, coordinar una reunión o solicitar un presupuesto."
        />
        <SocialLinks links={socialLinks} variant="cards" />
        <div className="contact-bottom">
          <p className="contact-note">Cada proyecto empieza con una conversación.</p>
          <a className="contact-back" href="#home">
            Volver arriba <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  )
}
