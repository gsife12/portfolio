import { useInView } from '../../../hooks/useInView'
import type { RoleExperience } from '../../../types'

interface Props {
  role: RoleExperience
  index: number
}

export function RoleCard({ role, index }: Props) {
  const { ref, inView } = useInView()

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`reveal ${inView ? 'visible' : ''} relative pl-8`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-gs-blue bg-gs-bg"
        aria-hidden="true"
      />

      <div className="rounded-2xl border border-gs-border bg-gs-surface p-8 shadow-card transition-shadow hover:shadow-card-hover">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-h3 text-gs-t1">{role.title}</h3>
            <p className="mt-1 font-sans text-sm font-medium text-gs-t2">
              {role.company} · {role.location}
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-gs-border px-3 py-1 font-sans text-xs font-medium text-gs-t2">
            {role.startDate} – {role.endDate}
          </span>
        </div>

        <ul className="mt-5 space-y-2.5" role="list">
          {role.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 font-sans text-sm leading-relaxed text-gs-t2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gs-blue" aria-hidden="true" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
