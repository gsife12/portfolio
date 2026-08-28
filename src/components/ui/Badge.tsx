import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'gold' | 'blue'
}

// Gold variant: AWS certification badge. Blue variant: featured label.
export function Badge({ children, variant = 'blue' }: BadgeProps) {
  const styles =
    variant === 'gold'
      ? 'bg-gs-gold/10 border-gs-gold text-gs-gold'
      : 'bg-gs-blue/10 border-gs-blue text-gs-blue'

  return (
    <span
      className={`inline-block rounded-full border px-3 py-0.5 font-sans text-xs font-semibold uppercase tracking-wide ${styles}`}
    >
      {children}
    </span>
  )
}
