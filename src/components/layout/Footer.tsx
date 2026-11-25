import { ArrowUpRight } from 'lucide-react'
import { personal } from '../../data/personal'
import { navItems } from './Header'
import { Container } from './Container'
import { SocialLinks } from '../ui/SocialLinks'
import { socialLinks } from '../../data/social-links'

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-main">
          <div>
            <a className="wordmark" href="#home">
              JD<span>.</span>
            </a>
            <p className="muted">
              {personal.fullName} · {personal.professionalTitle}
            </p>
          </div>
          <nav className="footer-nav" aria-label="Navegación del pie">
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <SocialLinks links={socialLinks} variant="compact" />
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {personal.fullName}
          </span>
          <a href="#home">
            Volver arriba <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  )
}
