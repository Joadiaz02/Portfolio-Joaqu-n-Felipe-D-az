import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'

type Props = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>
export function Button({ children, className = '', ...props }: Props) {
  return (
    <a className={`button ${className}`} {...props}>
      {children}
    </a>
  )
}
