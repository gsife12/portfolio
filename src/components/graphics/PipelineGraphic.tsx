// Hero SVG: Job Tracker application-state pipeline.
// Applied → Phone Screen → Interview → Offer, with a dashed Rejected branch.
// Nodes fade in left-to-right on mount; prefers-reduced-motion skips animation.

import { useEffect, useRef } from 'react'

interface Props {
  className?: string
}

const BLUE = 'var(--color-accent-blue)'
const BLUE_DIM = 'color-mix(in srgb, var(--color-accent-blue) 18%, transparent)'
const T2 = 'var(--color-text-2)'
const BORDER = 'var(--color-border)'
const SURFACE = 'var(--color-surface)'

export function PipelineGraphic({ className = '' }: Props) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const svg = svgRef.current
    if (!svg) return

    const nodes = svg.querySelectorAll<SVGElement>('[data-node]')
    nodes.forEach((node, i) => {
      node.style.opacity = '0'
      node.style.transform = 'translateY(8px)'
      node.style.transition = `opacity 0.4s ease ${i * 80}ms, transform 0.4s ease ${i * 80}ms`
      requestAnimationFrame(() => {
        node.style.opacity = '1'
        node.style.transform = 'none'
      })
    })
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 500 178"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      {/* ── Node 1: Applied ─────────────────────────── */}
      <g data-node>
        <rect x="4" y="64" width="88" height="38" rx="8"
          fill={SURFACE} stroke={BORDER} strokeWidth="1.5" />
        <text x="48" y="88" textAnchor="middle"
          fill={T2} fontSize="12" fontFamily="Inter, sans-serif" fontWeight="500">
          Applied
        </text>
      </g>

      {/* ── Arrow 1 ──────────────────────────────────── */}
      <g data-node>
        <line x1="92" y1="83" x2="112" y2="83" stroke={BORDER} strokeWidth="1.5" />
        <polygon points="112,79 120,83 112,87" fill={BORDER} />
      </g>

      {/* ── Node 2: Phone Screen ─────────────────────── */}
      <g data-node>
        <rect x="120" y="64" width="104" height="38" rx="8"
          fill={SURFACE} stroke={BORDER} strokeWidth="1.5" />
        <text x="172" y="88" textAnchor="middle"
          fill={T2} fontSize="12" fontFamily="Inter, sans-serif" fontWeight="500">
          Phone Screen
        </text>
      </g>

      {/* ── Arrow 2 ──────────────────────────────────── */}
      <g data-node>
        <line x1="224" y1="83" x2="244" y2="83" stroke={BORDER} strokeWidth="1.5" />
        <polygon points="244,79 252,83 244,87" fill={BORDER} />
      </g>

      {/* ── Node 3: Interview ────────────────────────── */}
      <g data-node>
        <rect x="252" y="64" width="96" height="38" rx="8"
          fill={SURFACE} stroke={BLUE} strokeWidth="1.5" />
        <text x="300" y="88" textAnchor="middle"
          fill={BLUE} fontSize="12" fontFamily="Inter, sans-serif" fontWeight="600">
          Interview
        </text>
      </g>

      {/* ── Rejected branch (dashed, downward) ────────── */}
      <g data-node>
        <line x1="300" y1="102" x2="300" y2="136"
          stroke={BORDER} strokeWidth="1.5" strokeDasharray="4 3" />
        <polygon points="296,136 300,144 304,136" fill={BORDER} />
        <rect x="256" y="144" width="88" height="30" rx="7"
          fill={SURFACE} stroke={BORDER} strokeWidth="1.2" />
        <text x="300" y="164" textAnchor="middle"
          fill={T2} fontSize="11" fontFamily="Inter, sans-serif" fontWeight="400">
          Rejected
        </text>
      </g>

      {/* ── Arrow 3 ──────────────────────────────────── */}
      <g data-node>
        <line x1="348" y1="83" x2="368" y2="83" stroke={BLUE} strokeWidth="1.5" />
        <polygon points="368,79 376,83 368,87" fill={BLUE} />
      </g>

      {/* ── Node 4: Offer (featured, larger) ─────────── */}
      <g data-node>
        <rect x="376" y="56" width="108" height="54" rx="8"
          fill={BLUE_DIM} stroke={BLUE} strokeWidth="2" />
        <text x="430" y="87" textAnchor="middle"
          fill={BLUE} fontSize="13" fontFamily="Inter, sans-serif" fontWeight="700">
          Offer
        </text>
      </g>
    </svg>
  )
}
