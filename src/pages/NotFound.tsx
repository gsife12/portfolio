import { Link } from 'react-router-dom'
import { useSEO } from '../seo'

export function NotFound() {
  useSEO({ title: '404 — Page Not Found' })

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-20 text-center">
      <p className="font-sans text-7xl font-bold tabular-nums text-gs-border">404</p>
      <h1 className="mt-4 font-display text-h2 text-gs-t1">
        That page doesn&rsquo;t exist.
      </h1>
      <p className="mt-4 max-w-sm font-sans leading-relaxed text-gs-t2">
        You may have followed an old link or typed the URL incorrectly.
        The work is still here — let me show you around.
      </p>
      <Link
        to="/"
        className="mt-10 inline-flex items-center rounded-md bg-gs-blue px-6 py-3 font-sans font-medium text-white no-underline transition-opacity hover:opacity-90"
      >
        ← Back home
      </Link>
    </div>
  )
}
