import { Link } from 'react-router-dom'
import { Badge } from '../../ui/Badge'
import { Tag } from '../../ui/Tag'
import { useInView } from '../../../hooks/useInView'
import type { Project } from '../../../types'

interface Props {
  project: Project
  hidden: boolean
}

export function FeaturedProjectCard({ project, hidden }: Props) {
  const { ref, inView } = useInView()
  const { caseStudy: cs } = project

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={[
        'reveal relative overflow-hidden rounded-2xl border border-gs-border bg-gs-surface shadow-card-featured',
        'transition-opacity duration-200',
        inView ? 'visible' : '',
        hidden ? 'opacity-30 pointer-events-none' : '',
      ].join(' ')}
      aria-label={`Featured project: ${project.title}`}
    >
      <div className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-gs-blue" aria-hidden="true" />

      <div className="px-8 py-10 pl-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <Badge variant="blue">Featured Project</Badge>
            <h2 className="mt-3 font-display text-h2 text-gs-t1">{project.title}</h2>
            <p className="mt-2 max-w-2xl font-sans text-base text-gs-t2">{project.description}</p>
          </div>
          {!cs.liveUrl.startsWith('{{') && (
            <a
              href={cs.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-gs-blue/10 px-3 py-1 font-sans text-xs font-medium text-gs-blue no-underline hover:bg-gs-blue hover:text-white"
            >
              Live ↗
            </a>
          )}
        </div>

        <ul className="mt-6 grid gap-2 sm:grid-cols-2" role="list">
          {cs.features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-start gap-2 font-sans text-sm text-gs-t2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gs-blue" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>

        {/* Screenshot slot */}
        <div className="mt-8 overflow-hidden rounded-xl border border-gs-border/50 bg-gs-bg">
          {cs.screenshots[0] ? (
            <img
              src={cs.screenshots[0]}
              alt={`${project.title} screenshot`}
              className="w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex h-48 items-center justify-center sm:h-64">
              <p className="font-sans text-sm text-gs-t2 opacity-60">
                {'{{REPLACE: drop a 1280×800 screenshot here}}'}
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center rounded-md bg-gs-blue px-5 py-2.5 font-sans text-sm font-medium text-white no-underline transition-opacity hover:opacity-90"
          >
            Read Case Study
          </Link>
          {!cs.liveUrl.startsWith('{{') && (
            <a
              href={cs.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-gs-blue px-5 py-2.5 font-sans text-sm font-medium text-gs-blue no-underline transition-colors hover:bg-gs-blue hover:text-white"
            >
              Live Site ↗
            </a>
          )}
          {!cs.repoUrl.startsWith('{{') && (
            <a
              href={cs.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-gs-border px-5 py-2.5 font-sans text-sm font-medium text-gs-t2 no-underline transition-colors hover:border-gs-blue hover:text-gs-blue"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
