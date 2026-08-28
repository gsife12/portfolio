/**
 * Generates public/og-image.png (1200×630) from an inline SVG.
 * Run manually: npm run generate:og
 * Runs automatically as part of: npm run build
 *
 * LinkedIn and Slack require a real PNG — SVG og:image tags are ignored.
 */

import { createRequire } from 'module'
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const require = createRequire(import.meta.url)
const sharp = require('sharp')

const __dirname = dirname(fileURLToPath(import.meta.url))
const outPath = resolve(__dirname, '../public/og-image.png')

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1200" height="630" fill="#0B1120"/>

  <!-- Subtle glow -->
  <radialGradient id="glow" cx="80%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#1558C0" stop-opacity="0.25"/>
    <stop offset="100%" stop-color="#0B1120" stop-opacity="0"/>
  </radialGradient>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Left accent bar -->
  <rect x="80" y="180" width="6" height="270" rx="3" fill="#1558C0"/>

  <!-- Name -->
  <text
    x="112" y="310"
    font-family="Georgia, serif"
    font-size="80"
    font-weight="400"
    fill="#EEF2F9"
    letter-spacing="-2"
  >Gideon Sife</text>

  <!-- Title -->
  <text
    x="112" y="370"
    font-family="system-ui, Arial, sans-serif"
    font-size="30"
    font-weight="400"
    fill="#60A5FA"
    letter-spacing="0"
  >Junior AI Software Engineer</text>

  <!-- Subtitle -->
  <text
    x="112" y="415"
    font-family="system-ui, Arial, sans-serif"
    font-size="22"
    font-weight="400"
    fill="#94A3B8"
  >Computer Science · Towson University · Silver Spring, MD</text>

  <!-- Divider -->
  <line x1="112" y1="450" x2="450" y2="450" stroke="#3F6FA0" stroke-width="1"/>

  <!-- Email -->
  <text
    x="112" y="490"
    font-family="system-ui, Arial, sans-serif"
    font-size="20"
    font-weight="400"
    fill="#94A3B8"
  >gsife505@gmail.com</text>

  <!-- Pipeline dots (decorative) -->
  <circle cx="780" cy="280" r="8" fill="none" stroke="#3F6FA0" stroke-width="1.5"/>
  <line x1="788" y1="280" x2="820" y2="280" stroke="#3F6FA0" stroke-width="1.5"/>
  <circle cx="830" cy="280" r="8" fill="none" stroke="#60A5FA" stroke-width="1.5"/>
  <line x1="838" y1="280" x2="870" y2="280" stroke="#60A5FA" stroke-width="1.5"/>
  <circle cx="880" cy="280" r="10" fill="#1558C020" stroke="#60A5FA" stroke-width="2"/>
  <text x="880" y="285" text-anchor="middle" fill="#60A5FA" font-size="9" font-family="Arial">✓</text>
</svg>
`

try {
  await sharp(Buffer.from(svg)).png({ quality: 95 }).toFile(outPath)
  console.log(`✓ OG image generated → public/og-image.png`)
} catch (err) {
  console.error('Failed to generate OG image:', err)
  process.exit(1)
}
