// Education / AWS block graphic: minimal cloud silhouette with upward connector.
// Gold stroke, transparent fill — purely decorative.

interface Props {
  className?: string
}

export function CloudNode({ className = '' }: Props) {
  // Cloud outline as a single path: two arcs on top, flat bottom.
  // Drawn at 120×80 viewport.
  const cloudPath = [
    'M 24,58',           // bottom-left corner
    'L 24,48',           // up left side
    'A 16,16 0 0,1 40,32', // left bump arc
    'A 20,20 0 0,1 80,28', // right (larger) bump arc
    'A 14,14 0 0,1 96,48', // right side arc
    'L 96,58',           // down right side
    'Z',                 // close (flat bottom)
  ].join(' ')

  return (
    <svg
      viewBox="0 0 120 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      {/* Upward connector */}
      <line
        x1="60" y1="74" x2="60" y2="60"
        stroke="var(--color-accent-gold)"
        strokeWidth="1.5"
      />
      {/* Small circle at top of connector */}
      <circle cx="60" cy="58" r="3"
        fill="var(--color-accent-gold)"
        stroke="none"
      />

      {/* Cloud silhouette */}
      <path
        d={cloudPath}
        fill="color-mix(in srgb, var(--color-accent-gold) 8%, transparent)"
        stroke="var(--color-accent-gold)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}
