import { Link } from 'react-router-dom'
import { useInView } from '../../../hooks/useInView'
import { experience } from '../../../data/experience'

const current = experience[0]

export function CurrentRole() {
  const { ref, inView } = useInView()

  return (
    <section className="border-t border-gs-border/30 bg-gs-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-8 font-sans text-sm font-semibold uppercase tracking-widest text-gs-blue">
          Currently
        </p>

        <article
          ref={ref as React.RefObject<HTMLElement>}
          className={`reveal ${inView ? 'visible' : ''} flex flex-col gap-6 rounded-2xl border border-gs-border bg-gs-bg p-8 shadow-card sm:flex-row sm:items-start`}
        >
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="font-display text-h3 text-gs-t1">{current.title}</h2>
              <span className="rounded-full bg-gs-blue/10 px-2.5 py-0.5 font-sans text-xs font-semibold text-gs-blue">
                {current.startDate} – {current.endDate}
              </span>
            </div>
            <p className="mt-1 font-sans text-sm font-medium text-gs-t2">
              {current.company} · {current.location}
            </p>

            <ul className="mt-4 space-y-2" role="list">
              {current.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 font-sans text-sm text-gs-t2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gs-blue" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <Link
            to="/experience"
            className="shrink-0 self-start rounded-md border border-gs-border px-4 py-2 font-sans text-sm font-medium text-gs-t2 no-underline transition-colors hover:border-gs-blue hover:text-gs-blue"
          >
            Full timeline →
          </Link>
        </article>
      </div>
    </section>
  )
}
