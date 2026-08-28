import { Link } from 'react-router-dom'
import { CloudNode } from '../../graphics/CloudNode'
import { useInView } from '../../../hooks/useInView'

export function AWSBlock() {
  const { ref, inView } = useInView()

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <article
        ref={ref as React.RefObject<HTMLElement>}
        className={`reveal ${inView ? 'visible' : ''} relative overflow-hidden rounded-2xl bg-gs-surface shadow-card`}
        style={{ border: '1px solid var(--color-accent-gold)' }}
      >
        {/* Background glow */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full opacity-10 blur-3xl"
          style={{ background: 'var(--color-accent-gold)' }}
          aria-hidden="true"
        />

        <div className="relative flex flex-col items-start gap-8 p-8 sm:flex-row sm:items-center">
          {/* Icon */}
          <div className="shrink-0">
            <CloudNode className="h-20 w-20 opacity-80" />
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="mb-1 font-sans text-xs font-semibold uppercase tracking-widest text-gs-gold">
              Certification
            </p>
            <h2 className="font-display text-h3 text-gs-t1">
              AWS Certified Cloud Practitioner
            </h2>
            <p className="mt-1 font-sans text-sm text-gs-t2">
              CLF-C02 · Amazon Web Services
            </p>
            <p className="mt-3 max-w-lg font-sans text-sm leading-relaxed text-gs-t2">
              Demonstrates foundational knowledge of AWS cloud services, core infrastructure
              concepts, billing, security, and cloud architecture — validated by the leading
              cloud provider.
            </p>
          </div>

          {/* CTA */}
          <div className="shrink-0 flex flex-col gap-3">
            <Link
              to="/education"
              className="rounded-md px-5 py-2.5 text-center font-sans text-sm font-medium no-underline transition-colors hover:opacity-80"
              style={{ background: 'var(--color-accent-gold)', color: '#fff' }}
            >
              View Education
            </Link>
            <a
              href="https://www.credly.com/badges/3a90f47c-8951-40dc-9226-6ce0c06c8990"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border px-5 py-2.5 text-center font-sans text-sm font-medium no-underline transition-colors"
              style={{ borderColor: 'var(--color-accent-gold)', color: 'var(--color-accent-gold)' }}
            >
              Verify ↗
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}
