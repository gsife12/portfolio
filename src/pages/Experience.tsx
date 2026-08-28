import { useSEO } from '../seo'
import { SectionHeading } from '../components/ui/SectionHeading'
import { RoleCard } from '../components/sections/experience/RoleCard'
import { experience } from '../data/experience'

export function Experience() {
  useSEO({
    title: 'Experience',
    description: 'Professional experience of Gideon Sife — Junior AI Software Engineer at MAIK and AI Trainer at Outlier AI.',
    path: '/experience',
  })

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Work History" className="mb-16">
        Experience
      </SectionHeading>

      {/* Timeline container */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div
          className="absolute left-[5.5px] top-2 bottom-2 w-0.5 rounded-full bg-gs-border"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-10">
          {experience.map((role, i) => (
            <RoleCard key={role.id} role={role} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
