import { useSEO } from '../seo'
import { SectionHeading } from '../components/ui/SectionHeading'
import { SkillGroup } from '../components/sections/skills/SkillGroup'
import { LayeredStack } from '../components/graphics/LayeredStack'
import { skillGroups } from '../data/skills'

export function Skills() {
  useSEO({
    title: 'Skills',
    description: 'Technical skills of Gideon Sife — Python, JavaScript, Java, REST APIs, MongoDB, AWS, and more.',
    path: '/skills',
  })

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <SectionHeading eyebrow="Technical" className="mb-16">
          Skills
        </SectionHeading>
        <LayeredStack
          className="hidden h-32 w-48 shrink-0 sm:block"
          aria-label="Layered system stack illustration"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <SkillGroup key={group.category} group={group} index={i} />
        ))}
      </div>
    </div>
  )
}
