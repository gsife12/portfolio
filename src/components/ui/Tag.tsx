interface TagProps {
  children: string
}

// Teal accent — used for technology labels only.
export function Tag({ children }: TagProps) {
  return (
    <span className="inline-block rounded-full border border-gs-teal px-3 py-0.5 font-sans text-xs font-medium text-gs-teal">
      {children}
    </span>
  )
}
