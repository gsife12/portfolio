import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  // Theming is handled by CSS custom properties on [data-theme="dark"]
  // so Tailwind's dark variant is not needed.
  theme: {
    extend: {
      colors: {
        'gs-bg':      'var(--color-bg)',
        'gs-surface': 'var(--color-surface)',
        'gs-t1':      'var(--color-text-1)',
        'gs-t2':      'var(--color-text-2)',
        'gs-blue':    'var(--color-accent-blue)',
        'gs-teal':    'var(--color-accent-teal)',
        'gs-gold':    'var(--color-accent-gold)',
        'gs-border':  'var(--color-border)',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.75rem,6vw,4rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        h1:      ['clamp(2rem,4.5vw,3rem)',  { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        h2:      ['clamp(1.5rem,3vw,2rem)',  { lineHeight: '1.2',  letterSpacing: '-0.015em' }],
        h3:      ['1.25rem',                 { lineHeight: '1.3' }],
        h4:      ['1.0625rem',              { lineHeight: '1.4' }],
      },
      boxShadow: {
        card:     '0 1px 3px rgba(0,0,0,0.06),0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.10)',
        'card-featured': '0 8px 32px rgba(21,88,192,0.10),0 2px 6px rgba(0,0,0,0.05)',
        'card-dark':     '0 1px 4px rgba(0,0,0,0.5)',
        'card-dark-hover': '0 4px 20px rgba(0,0,0,0.6)',
        'card-dark-featured': '0 8px 32px rgba(96,165,250,0.12)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16,1,0.3,1)',
      },
    },
  },
  plugins: [],
}

export default config
