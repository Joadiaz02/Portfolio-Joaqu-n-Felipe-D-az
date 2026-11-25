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
          title="¿Tenes alguna idea en mente?"
          description="Estoy abierto a 
          nuevas oportunidades laborales, 
          proyectos freelance y colaboraciones 
          grupales.

Si también necesitás un sitio web, aplicación o soporte técnico para una plataforma ya existente de tu negocio,
podés contactarme en cualquiera de los canales disponibles debajo. Estoy disponible para
 coordinar una reunión, conversar sobre tus 
 necesidades y evaluar un presupuesto."
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
