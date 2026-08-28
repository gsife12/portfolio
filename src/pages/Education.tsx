import { useSEO } from '../seo'
import { SectionHeading } from '../components/ui/SectionHeading'
import { CertCard } from '../components/sections/education/CertCard'
import { education, certifications } from '../data/education'

export function Education() {
  useSEO({
    title: 'Education',
    description: 'Gideon Sife — B.S. Computer Science at Towson University, AWS Certified Cloud Practitioner, Google AI Essentials.',
    path: '/education',
  })

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Academic & Certifications" className="mb-16">
        Education
      </SectionHeading>

      {/* Degree */}
      <section className="mb-16">
        <article className="rounded-2xl border border-gs-border bg-gs-surface p-8 shadow-card">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="font-display text-h2 text-gs-t1">{education.degree}</h2>
              <p className="mt-1 font-sans text-base font-medium text-gs-t2">{education.minor}</p>
              <p className="mt-1 font-sans text-sm text-gs-t2">
                {education.institution} · {education.location}
              </p>
            </div>
            <span className="rounded-full border border-gs-border px-4 py-1.5 font-sans text-sm font-medium text-gs-t2">
              {education.startDate} – {education.endDate}
            </span>
          </div>

          <div className="mt-8">
            <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-gs-blue">
              Coursework
            </h3>
            <ul className="flex flex-wrap gap-2" role="list">
              {education.coursework.map((course) => (
                <li
                  key={course}
                  className="rounded-md border border-gs-border bg-gs-bg px-3 py-1.5 font-sans text-sm text-gs-t2"
                >
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="mb-8 font-sans text-sm font-semibold uppercase tracking-widest text-gs-blue">
          Certifications
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {certifications.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
