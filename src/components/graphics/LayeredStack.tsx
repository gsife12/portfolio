// Skills section graphic: perspective stack of three system layers.
// Static, no animation.

interface Props {
  className?: string
}

export function LayeredStack({ className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 200 140"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      {/* Bottom layer — Data */}
      <polygon
        points="20,110 100,90 180,110 100,130"
        fill="color-mix(in srgb, var(--color-accent-teal) 15%, transparent)"
        stroke="var(--color-accent-teal)"
        strokeWidth="1.5"
      />
      <text x="100" y="115" textAnchor="middle"
        fill="var(--color-accent-teal)" fontSize="10"
        fontFamily="Inter, sans-serif" fontWeight="600">
        Data
      </text>

      {/* Middle layer — Backend */}
      <polygon
        points="20,80 100,60 180,80 100,100"
        fill="color-mix(in srgb, var(--color-accent-blue) 12%, transparent)"
        stroke="var(--color-accent-blue)"
        strokeWidth="1.5"
      />
      <text x="100" y="85" textAnchor="middle"
        fill="var(--color-accent-blue)" fontSize="10"
        fontFamily="Inter, sans-serif" fontWeight="600">
        Backend
      </text>

      {/* Top layer — Frontend */}
      <polygon
        points="20,50 100,30 180,50 100,70"
        fill="color-mix(in srgb, var(--color-border) 20%, transparent)"
        stroke="var(--color-border)"
        strokeWidth="1.5"
      />
      <text x="100" y="55" textAnchor="middle"
        fill="var(--color-text-1)" fontSize="10"
        fontFamily="Inter, sans-serif" fontWeight="600">
        Frontend
      </text>
    </svg>
  )
}
