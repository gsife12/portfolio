import { Badge } from '../../ui/Badge'
import { Tag } from '../../ui/Tag'
import { Button } from '../../ui/Button'
import { useInView } from '../../../hooks/useInView'
import { projects } from '../../../data/projects'
import { asset } from '../../../utils/asset'

const jobTracker = projects.find((p) => p.slug === 'job-tracker')!

export function FeaturedProject() {
  const { ref, inView } = useInView()

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="mb-8 font-sans text-sm font-semibold uppercase tracking-widest text-gs-blue">
        Featured Project
      </p>

      <article
        ref={ref as React.RefObject<HTMLElement>}
        className={`reveal ${inView ? 'visible' : ''} relative overflow-hidden rounded-2xl border border-gs-border bg-gs-surface shadow-card-featured`}
        aria-label={`Featured project: ${jobTracker.title}`}
      >
        {/* Left accent border */}
        <div className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-gs-blue" aria-hidden="true" />

        <div className="px-8 py-10 pl-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <Badge variant="blue">Featured Project</Badge>
              <h2 className="mt-3 font-display text-h2 text-gs-t1">{jobTracker.title}</h2>
              <p className="mt-2 max-w-2xl font-sans text-base text-gs-t2">
                {jobTracker.description}
              </p>
            </div>
            <a
              href={jobTracker.caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-gs-blue/10 px-3 py-1 font-sans text-xs font-medium text-gs-blue no-underline hover:bg-gs-blue hover:text-white"
            >
              Live ↗
            </a>
          </div>

          {/* Key features */}
          <ul className="mt-6 grid gap-2 sm:grid-cols-2" role="list">
            {jobTracker.caseStudy.features.slice(0, 4).map((f) => (
              <li key={f} className="flex items-start gap-2 font-sans text-sm text-gs-t2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gs-blue" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {jobTracker.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          {/* Screenshot */}
          <div className="mt-8 overflow-hidden rounded-xl border border-gs-border/50 bg-gs-bg">
            {jobTracker.caseStudy.screenshots[0] ? (
              <img
                src={asset(jobTracker.caseStudy.screenshots[0])}
                alt="Job Tracker application screenshot"
                className="w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="flex h-48 items-center justify-center sm:h-64">
                <p className="font-sans text-sm text-gs-t2 opacity-60">
                  Screenshot coming soon
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={`/projects/${jobTracker.slug}`} variant="primary">
              Read Case Study
            </Button>
            <Button
              href={jobTracker.caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              Live Site ↗
            </Button>
          </div>
        </div>
      </article>
    </section>
  )
}
