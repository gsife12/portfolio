import { useEffect } from 'react'
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from './constants'

interface SEOMeta {
  title?: string
  description?: string
  path?: string
}

export function useSEO({ title, description = SITE_DESCRIPTION, path = '' }: SEOMeta = {}) {
  const fullTitle = title ? `${title} | Gideon Sife` : SITE_TITLE
  const canonicalUrl = `${SITE_URL}${path}`
  const imageUrl = `${SITE_URL}/og-image.png`

  useEffect(() => {
    document.title = fullTitle
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('property', 'og:image', imageUrl)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', imageUrl)
    setCanonical(canonicalUrl)
  }, [fullTitle, description, canonicalUrl, imageUrl])
}

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  const selector = `meta[${attr}="${key}"]`
  let el = document.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function setCanonical(url: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', url)
}
