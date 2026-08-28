import { useInView } from '../../../hooks/useInView'
import { Badge } from '../../ui/Badge'
import { CloudNode } from '../../graphics/CloudNode'
import type { Certification } from '../../../types'

interface Props {
  cert: Certification
  index: number
}

export function CertCard({ cert, index }: Props) {
  const { ref, inView } = useInView()

  if (cert.featured) {
    return (
      <article
        ref={ref as React.RefObject<HTMLElement>}
        className={`reveal ${inView ? 'visible' : ''} relative overflow-hidden rounded-2xl p-8 shadow-card`}
        style={{
          border: '1px solid var(--color-accent-gold)',
          background: 'var(--color-surface)',
          transitionDelay: `${index * 80}ms`,
        }}
      >
        <div
          className="pointer-events-none absolute right-4 top-4 opacity-20"
          aria-hidden="true"
        >
          <CloudNode className="h-24 w-24" />
        </div>

        <Badge variant="gold">AWS Certified</Badge>
        <h3 className="mt-3 font-display text-h3 text-gs-t1">{cert.name}</h3>
        {cert.code && (
          <p className="mt-1 font-sans text-sm font-medium text-gs-t2">
            {cert.code} · {cert.issuer}
          </p>
        )}

        {!cert.credlyUrl.startsWith('{{') ? (
          <a
            href={cert.credlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-md px-5 py-2.5 font-sans text-sm font-medium text-white no-underline transition-opacity hover:opacity-80"
            style={{ background: 'var(--color-accent-gold)' }}
          >
            Verify on Credly ↗
          </a>
        ) : (
          <span className="mt-6 inline-block rounded-md border px-5 py-2.5 font-sans text-sm font-medium"
            style={{ borderColor: 'var(--color-accent-gold)', color: 'var(--color-accent-gold)' }}>
            {'{{REPLACE: add Credly badge URL}}'}
          </span>
        )}
      </article>
    )
  }

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`reveal ${inView ? 'visible' : ''} rounded-2xl border bg-gs-surface p-6 shadow-card ${cert.inProgress ? 'border-dashed border-gs-border' : 'border-gs-border'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="mb-1 flex items-center justify-between gap-2">
        <p className="font-sans text-xs font-semibold uppercase tracking-wide text-gs-t2">
          {cert.issuer}
        </p>
        {cert.inProgress && (
          <span className="rounded-full border border-gs-blue px-2 py-0.5 font-sans text-xs font-medium text-gs-blue">
            In Progress
          </span>
        )}
      </div>
      <h3 className="font-display text-h4 text-gs-t1">{cert.name}</h3>

      {cert.inProgress ? (
        <p className="mt-4 font-sans text-xs text-gs-t2 opacity-60">Exam in preparation</p>
      ) : !cert.credlyUrl.startsWith('{{') ? (
        <a
          href={cert.credlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-sans text-sm font-medium text-gs-blue no-underline hover:underline"
        >
          Verify ↗
        </a>
      ) : (
        <p className="mt-4 font-sans text-xs text-gs-t2 opacity-60">
          {'{{REPLACE: add Credly badge URL}}'}
        </p>
      )}
    </article>
  )
}
