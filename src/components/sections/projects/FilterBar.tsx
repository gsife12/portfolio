interface Props {
  allTech: string[]
  active: string[]
  onChange: (tech: string[]) => void
}

export function FilterBar({ allTech, active, onChange }: Props) {
  function toggle(tech: string) {
    onChange(
      active.includes(tech)
        ? active.filter((t) => t !== tech)
        : [...active, tech],
    )
  }

  const pillBase =
    'rounded-full border px-4 py-1.5 font-sans text-sm font-medium transition-colors duration-150 cursor-pointer'

  return (
    <div
      role="group"
      aria-label="Filter projects by technology"
      className="flex flex-wrap gap-2"
    >
      <button
        onClick={() => onChange([])}
        className={[
          pillBase,
          active.length === 0
            ? 'border-gs-blue bg-gs-blue text-white'
            : 'border-gs-border text-gs-t2 hover:border-gs-blue hover:text-gs-blue',
        ].join(' ')}
        aria-pressed={active.length === 0}
      >
        All
      </button>

      {allTech.map((tech) => (
        <button
          key={tech}
          onClick={() => toggle(tech)}
          className={[
            pillBase,
            active.includes(tech)
              ? 'border-gs-blue bg-gs-blue text-white'
              : 'border-gs-border text-gs-t2 hover:border-gs-blue hover:text-gs-blue',
          ].join(' ')}
          aria-pressed={active.includes(tech)}
        >
          {tech}
        </button>
      ))}
    </div>
  )
}
