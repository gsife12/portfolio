// Resolves a public/ asset path against Vite's base URL.
// Needed because GitHub Pages serves the site from /portfolio/ not /.
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}/${path.replace(/^\//, '')}`
}
