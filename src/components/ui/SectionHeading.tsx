import type { ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'

interface SectionHeadingProps {
  as?: 'h1' | 'h2' | 'h3'
  children: ReactNode
  eyebrow?: string
  className?: string
}

export function SectionHeading({
  as: Tag = 'h2',
  children,
  eyebrow,
  className = '',
}: SectionHeadingProps) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${inView ? 'visible' : ''} ${className}`}
    >
      {eyebrow && (
        <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-widest text-gs-blue">
          {eyebrow}
        </p>
      )}
      <Tag className="font-display text-h2 text-gs-t1">{children}</Tag>
      <div className="mt-4 h-0.5 w-12 rounded-full bg-gs-blue" />
    </div>
  )
}
