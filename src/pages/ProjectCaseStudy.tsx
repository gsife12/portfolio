import { useParams } from 'react-router-dom'
import { useSEO } from '../seo'
import { getProjectBySlug } from '../data/projects'
import { Tag } from '../components/ui/Tag'
import { NotFound } from './NotFound'
import type { Project } from '../types'

// ── Inner component rendered only when project is known ───────────────────────

function CaseStudyContent({ project }: { project: Project }) {
  useSEO({
    title: project.title,
    description: project.caseStudy.overview,
    path: `/projects/${project.slug}`,
  })

  const { caseStudy: cs } = project
  const isPlaceholder = (s: string) => s.startsWith('{{')

  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mb-12">
        <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-gs-blue">
          Case Study
        </p>
        <h1 className="font-display text-h1 text-gs-t1">{project.title}</h1>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          {!isPlaceholder(cs.liveUrl) && (
            <a
              href={cs.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-gs-blue px-5 py-2.5 font-sans text-sm font-medium text-white no-underline transition-opacity hover:opacity-90"
            >
              Live Site ↗
            </a>
          )}
          {!isPlaceholder(cs.repoUrl) ? (
            <a
              href={cs.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-gs-border px-5 py-2.5 font-sans text-sm font-medium text-gs-t2 no-underline transition-colors hover:border-gs-blue hover:text-gs-blue"
            >
              GitHub ↗
            </a>
          ) : (
            <span className="inline-flex items-center rounded-md border border-dashed border-gs-border px-5 py-2.5 font-sans text-sm text-gs-t2 opacity-50">
              {'{{REPLACE: GitHub repo URL}}'}
            </span>
          )}
        </div>
      </header>

      <SectionBlock heading="Overview">
        <Prose text={cs.overview} />
      </SectionBlock>

      <SectionBlock heading="The Problem">
        <Prose text={cs.problem} />
      </SectionBlock>

      <SectionBlock heading="My Contribution">
        {isPlaceholder(cs.contribution) ? (
          <Placeholder text={cs.contribution} />
        ) : (
          <Prose text={cs.contribution} />
        )}
      </SectionBlock>

      <SectionBlock heading="Key Features">
        <ul className="space-y-3" role="list">
          {cs.features.map((f) => (
            <li key={f} className="flex items-start gap-3 font-sans text-gs-t2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gs-blue" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
      </SectionBlock>

      <SectionBlock heading="Screenshots">
        {cs.screenshots.length > 0 ? (
          <div className="flex flex-col gap-4">
            {cs.screenshots.map((src, i) => (
              <figure key={i} className="overflow-hidden rounded-xl border border-gs-border">
                <img
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        ) : (
          <Placeholder text="{{REPLACE: drop 1280×800 screenshots here — add paths to src/data/projects.ts}}" />
        )}
      </SectionBlock>

      <SectionBlock heading="Technical Challenges">
        {isPlaceholder(cs.challenges) ? (
          <Placeholder text={cs.challenges} />
        ) : (
          <Prose text={cs.challenges} />
        )}
      </SectionBlock>

      <SectionBlock heading="Engineering Decisions">
        {isPlaceholder(cs.decisions) ? (
          <Placeholder text={cs.decisions} />
        ) : (
          <Prose text={cs.decisions} />
        )}
      </SectionBlock>

      <SectionBlock heading="What I Learned">
        {isPlaceholder(cs.learned) ? (
          <Placeholder text={cs.learned} />
        ) : (
          <Prose text={cs.learned} />
        )}
      </SectionBlock>
    </div>
  )
}

// ── Helpers ───────────────────────────────────────────────────────────────────

// Renders a string that may contain \n\n paragraph breaks.
function Prose({ text }: { text: string }) {
  const paras = text.split(/\n\n+/)
  return (
    <div className="space-y-4">
      {paras.map((p, i) => (
        <p key={i} className="font-sans leading-relaxed text-gs-t2">{p}</p>
      ))}
    </div>
  )
}

function SectionBlock({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-gs-border/40 py-10">
      <h2 className="mb-4 font-display text-h3 text-gs-t1">{heading}</h2>
      {children}
    </section>
  )
}

function Placeholder({ text }: { text: string }) {
  return (
    <div className="rounded-xl border-2 border-dashed border-gs-border bg-gs-bg/50 px-6 py-8 text-center">
      <p className="font-sans text-sm text-gs-t2 opacity-70">{text}</p>
    </div>
  )
}

// ── Route component ───────────────────────────────────────────────────────────
// Unknown slug renders 404 rather than crashing on undefined.

export function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProjectBySlug(slug ?? '')

  if (!project) return <NotFound />
  return <CaseStudyContent project={project} />
}
