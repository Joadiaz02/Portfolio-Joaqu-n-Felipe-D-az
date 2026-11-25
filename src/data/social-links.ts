import type { SocialLink } from '../types/portfolio'

const whatsappMessage = encodeURIComponent(
  'Hola Joaquín, vi tu portfolio y me gustaría hacerte una consulta.',
)

export const socialLinks: SocialLink[] = [
  {
    id: 'email',
    platform: 'email',
    label: 'Correo electrónico',
    detail: 'joacodiaz437@gmail.com',
    url: 'mailto:joacodiaz437@gmail.com',
    iconKey: 'mail',
    accessibleLabel: 'Enviar correo a joacodiaz437@gmail.com',
    visible: true,
    external: false,
  },
  {
    id: 'whatsapp',
    platform: 'whatsapp',
    label: 'WhatsApp',
    detail: 'Iniciar una conversación',
    url: `https://wa.me/5491128657205?text=${whatsappMessage}`,
    iconKey: 'whatsapp',
    accessibleLabel: 'Iniciar una conversación por WhatsApp',
    visible: true,
    external: true,
  },
  {
    id: 'instagram',
    platform: 'instagram',
    label: 'Instagram',
    detail: '@diaz.joa_',
    url: 'https://www.instagram.com/diaz.joa_/',
    iconKey: 'instagram',
    accessibleLabel: 'Instagram de Joaquín Díaz, diaz.joa_',
    visible: true,
    external: true,
  },
  {
    id: 'linkedin',
    platform: 'linkedin',
    label: 'LinkedIn',
    detail: 'Joaquín Felipe Díaz',
    url: 'https://www.linkedin.com/in/joaquin-felipe-diaz-8018b4239/',
    iconKey: 'linkedin',
    accessibleLabel: 'Perfil de LinkedIn de Joaquín Felipe Díaz',
    visible: true,
    external: true,
  },
  {
    id: 'github',
    platform: 'github',
    label: 'GitHub',
    detail: '@Joadiaz02',
    url: 'https://github.com/Joadiaz02',
    iconKey: 'github',
    accessibleLabel: 'Perfil de GitHub de Joaquín Díaz, Joadiaz02',
    visible: true,
    external: true,
  },
]
