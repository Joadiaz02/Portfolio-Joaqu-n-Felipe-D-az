import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import type { ReactNode } from 'react'
import type { SocialLink } from '../../types/portfolio'
import { safeHttpsUrl, safeMailtoUrl } from '../../utils/links'

function SocialIcon({ link }: { link: SocialLink }) {
  const icons: Record<Exclude<SocialLink['iconKey'], 'whatsapp'>, ReactNode> = {
    mail: <Mail size={22} aria-hidden="true" />,
    instagram: <Instagram size={22} aria-hidden="true" />,
    linkedin: <Linkedin size={22} aria-hidden="true" />,
    github: <Github size={22} aria-hidden="true" />,
  }

  if (link.iconKey === 'whatsapp') {
    return (
      <img className="social-icon-whatsapp" src="/icons/whatsapp.svg" alt="" aria-hidden="true" />
    )
  }
  return icons[link.iconKey]
}

export function SocialLinks({
  links,
  variant = 'compact',
}: {
  links: SocialLink[]
  variant?: 'compact' | 'cards'
}) {
  return (
    <div className={`social-links social-links-${variant}`}>
      {links
        .filter((link) => link.visible)
        .map((link) => {
          const href = link.platform === 'email' ? safeMailtoUrl(link.url) : safeHttpsUrl(link.url)
          if (!href) return null

          return (
            <a
              key={link.id}
              href={href}
              aria-label={link.accessibleLabel}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              <span className="social-icon">
                <SocialIcon link={link} />
              </span>
              <span className="social-link-copy">
                <span className="social-link-name">{link.label}</span>
                <span className="social-link-detail">{link.detail}</span>
              </span>
            </a>
          )
        })}
    </div>
  )
}
