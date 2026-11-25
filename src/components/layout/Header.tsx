import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '../../hooks/useActiveSection'

export const navItems = [
  ['home', 'Inicio'],
  ['about', 'Perfil'],
  ['projects', 'Proyectos'],
  ['technologies', 'Tecnologías'],
  ['skills', 'Habilidades'],
  ['education', 'Formación'],
  ['certificates', 'Certificados'],
  ['resume', 'CV'],
  ['contact', 'Contacto'],
] as const
const ids = navItems.map(([id]) => id)

export function Header() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection([...ids])
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="wordmark"
          href="#home"
          onClick={() => setOpen(false)}
          aria-label="Joaquín Díaz, inicio"
        >
          JD<span>.</span>
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="primary-navigation"
          className={open ? 'nav-links is-open' : 'nav-links'}
          aria-label="Navegación principal"
        >
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? 'location' : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
