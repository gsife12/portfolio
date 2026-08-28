# TODO — Portfolio Placeholders

Every `{{REPLACE: ...}}` that must be filled in before the site is production-ready.

## Required before launch

- [ ] **SITE_URL** — `src/constants.ts` line 3: replace `'{{REPLACE: https://your-domain.com}}'` with your live domain once purchased. One change updates all canonical tags, OG metadata, and Open Graph URLs.

- [ ] **Formspree endpoint** — already wired (`https://formspree.io/f/xljerypn`). No action needed unless you switch services.

## Certifications — verify links

- [ ] **AWS CLF-C02 Credly badge** — `src/data/education.ts` → `credlyUrl` for `aws-ccp`. Also appears in the AWSBlock verify button (`src/components/sections/home/AWSBlock.tsx`).
- [ ] **Google AI Essentials cert URL** — `src/data/education.ts` → `credlyUrl` for `google-ai-essentials`.
- [ ] **Google Prompting Essentials cert URL** — `src/data/education.ts` → `credlyUrl` for `google-prompting`.

## Projects — repo URLs

- [ ] **Job Tracker GitHub repo** — `src/data/projects.ts` → `repoUrl` for `job-tracker`.
- [ ] **Squad Lynx GitHub repo** — `src/data/projects.ts` → `repoUrl` for `squad-lynx`.
- [ ] **Squad Lynx demo link** — `src/data/projects.ts` → `liveUrl` for `squad-lynx`.
- [ ] **Team Web Application GitHub repo** — `src/data/projects.ts` → `repoUrl` for `team-web-application`.

## Project case studies — all three projects

Fill in `src/data/projects.ts` for each project:

### Job Tracker
- [ ] `challenges` — the hardest technical problem you solved
- [ ] `decisions` — key engineering decisions with reasoning (why MongoDB Atlas, why Render, why JWT)
- [ ] `learned` — what this project taught you
- [ ] `screenshots` — add paths like `['/screenshots/job-tracker-1.png']` and drop files in `public/screenshots/`

### Squad Lynx
- [ ] `contribution` — already written generically; confirm or replace with specific details
- [ ] `challenges`
- [ ] `decisions`
- [ ] `learned`
- [ ] `screenshots`

### Team Web Application
- [ ] `contribution` — your specific individual contribution within the team
- [ ] `challenges`
- [ ] `decisions`
- [ ] `learned`
- [ ] `screenshots`

## Site metadata

- [ ] **Domain** — when you buy a domain, update `SITE_URL` in `src/constants.ts` and set it as the canonical in your host's DNS settings.
- [ ] **OG image** — regenerate after any content changes: `npm run generate:og`

## After filling all placeholders

Run a final search before launch:

```bash
grep -r '{{REPLACE' src/ public/
```

The command should return no results.
