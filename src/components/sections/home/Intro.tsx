import { useInView } from '../../../hooks/useInView'

export function Intro() {
  const { ref, inView } = useInView()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`reveal ${inView ? 'visible' : ''} border-y border-gs-border/30 bg-gs-surface`}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="font-sans text-lg leading-relaxed text-gs-t2">
            I design and build software with maintainable object-oriented architecture,
            clean REST APIs, and reliable SQL and NoSQL database schemas. My work spans
            the full development lifecycle — from initial implementation and testing
            through deployment, documentation, and root-cause debugging. I use Git-based
            CI/CD workflows to ship quickly and roll back safely. Whether I&rsquo;m building
            a backend service, designing a database schema, or wiring up a frontend to
            an API, I focus on systems that are practical, readable, and built to last.
          </p>
        </div>
      </div>
    </section>
  )
}
