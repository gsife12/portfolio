import { useInView } from '../../../hooks/useInView'
import type { SkillGroup as SkillGroupType } from '../../../types'

interface Props {
  group: SkillGroupType
  index: number
}

export function SkillGroup({ group, index }: Props) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${inView ? 'visible' : ''} rounded-2xl border border-gs-border bg-gs-surface p-7 shadow-card`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <h3 className="mb-4 font-display text-h4 text-gs-t1">{group.category}</h3>
      <ul className="flex flex-wrap gap-2" role="list">
        {group.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-gs-border bg-gs-bg px-3 py-1.5 font-sans text-sm text-gs-t2"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}
