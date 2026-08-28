import { useState, useMemo } from 'react'
import { useSEO } from '../seo'
import { SectionHeading } from '../components/ui/SectionHeading'
import { FilterBar } from '../components/sections/projects/FilterBar'
import { FeaturedProjectCard } from '../components/sections/projects/FeaturedProjectCard'
import { ProjectCard } from '../components/sections/projects/ProjectCard'
import { projects } from '../data/projects'

// Collect all unique tech tags across all projects, sorted alphabetically
const allTech = [...new Set(projects.flatMap((p) => p.tech))].sort()

const featured = projects.find((p) => p.featured)!
const rest = projects.filter((p) => !p.featured)

function matchesTech(tech: string[], active: string[]): boolean {
  if (active.length === 0) return true
  return active.some((t) => tech.includes(t))
}

export function Projects() {
  useSEO({
    title: 'Projects',
    description: 'Software projects by Gideon Sife — Job Tracker, Squad Lynx, Team Web Application.',
    path: '/projects',
  })

  const [activeTech, setActiveTech] = useState<string[]>([])

  const featuredHidden = useMemo(
    () => !matchesTech(featured.tech, activeTech),
    [activeTech],
  )

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="Work">Projects</SectionHeading>
      </div>

      <FilterBar allTech={allTech} active={activeTech} onChange={setActiveTech} />

      <div className="mt-10 flex flex-col gap-8">
        <FeaturedProjectCard project={featured} hidden={featuredHidden} />

        <div className="grid gap-6 sm:grid-cols-2">
          {rest.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              hidden={!matchesTech(project.tech, activeTech)}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
