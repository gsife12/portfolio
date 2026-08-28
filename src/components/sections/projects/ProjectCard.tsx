import { Link } from 'react-router-dom'
import { Tag } from '../../ui/Tag'
import { useInView } from '../../../hooks/useInView'
import type { Project } from '../../../types'

interface Props {
  project: Project
  hidden: boolean
  index: number
}

export function ProjectCard({ project, hidden, index }: Props) {
  const { ref, inView } = useInView()
  const { caseStudy: cs } = project

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={[
        'reveal flex flex-col rounded-2xl border border-gs-border bg-gs-surface shadow-card',
        'transition-all duration-200 hover:shadow-card-hover',
        inView ? 'visible' : '',
        hidden ? 'opacity-30 pointer-events-none' : '',
      ].join(' ')}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-h3 text-gs-t1">{project.title}</h3>
        <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-gs-t2">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to={`/projects/${project.slug}`}
            className="font-sans text-sm font-medium text-gs-blue no-underline hover:underline"
          >
            Case Study →
          </Link>
          {!cs.liveUrl.startsWith('{{') && (
            <a
              href={cs.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-medium text-gs-t2 no-underline transition-colors hover:text-gs-blue"
            >
              Live ↗
            </a>
          )}
          {!cs.repoUrl.startsWith('{{') && (
            <a
              href={cs.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-medium text-gs-t2 no-underline transition-colors hover:text-gs-blue"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
