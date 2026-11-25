import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { personal } from '../data/personal'
import { Container } from '../components/layout/Container'

export function HeroSection() {
  return (
    <section id="home" className="hero section">
      <Container>
        <div className="hero-content">
          <p className="eyebrow">
            <span className="status-dot" /> PORTFOLIO PERSONAL · 2026
          </p>
          <h1>
            Hola, soy
            <br />
            <span>Joaquín Díaz.</span>
          </h1>
          <p className="hero-role">{personal.professionalTitle}</p>
          <p className="hero-summary">{personal.summary}</p>
          <div className="hero-actions">
            <a className="button" href="#projects">
              Explorar proyectos <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="text-link" href="#contact">
              Hablemos <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-aside">
          <img
            className="hero-portrait"
            src="/images/joaquin-portrait.png"
            alt="Retrato de Joaquín con líneas azules pintadas en el rostro"
            width="1179"
            height="1334"
            fetchPriority="high"
          />
        </div>
        <div className="hero-index">
          <span>01 / 09</span>
          <span>
            Deslizá para descubrir <ArrowDown size={14} />
          </span>
        </div>
      </Container>
    </section>
  )
}
