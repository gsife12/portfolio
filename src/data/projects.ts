import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'job-tracker',
    slug: 'job-tracker',
    title: 'Job Tracker',
    description:
      'Full-stack job application tracking platform with tiered access controls, JWT authentication, and automated GitHub deployments.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'JWT', 'bcrypt', 'Cloudinary', 'Render'],
    featured: true,
    caseStudy: {
      overview:
        'Job Tracker is a deployed web application at jobblists.com that lets users log, track, and manage job applications through multiple stages — applied, interview, offer, and rejected. It supports tiered access controls so different user roles see and manage different data, with secure authentication and file storage.',
      problem:
        'Job seekers need a centralized place to track application status, store supporting documents, and understand where they stand across multiple active applications — without relying on spreadsheets or manual notes.',
      contribution:
        'Built the full stack independently: designed the MongoDB Atlas schema, implemented JWT authentication with bcrypt password hashing, integrated Cloudinary for résumé and document storage, wired tiered access controls, and configured automated deployments on Render via GitHub Actions.',
      features: [
        'JWT authentication with bcrypt-hashed passwords',
        'Tiered access controls per user role',
        'Cloudinary-backed file storage for documents',
        'Application status pipeline: Applied → Interview → Offer / Rejected',
        'Automated GitHub deployments via Render',
      ],
      challenges:
        `Squad Lynx failed by being too broad. Job Tracker ran the opposite way.

The original scope was narrow on purpose: one place to record every job I applied to, so I could review the whole pipeline weekly instead of digging through my inbox. That version worked. The challenge came from what happened next — once it was running, I kept seeing features worth adding, and the app grew well past what I set out to build.

The largest of those was integrating public APIs from established job listing services, so I could browse real openings inside the app and apply to them directly rather than tracking applications I had made somewhere else. That turned a personal record-keeping tool into something that participates in the actual job search.

Growing scope after shipping is a different problem from planning it badly up front. Each addition had to fit a data model I had already designed around a smaller idea.`,
      decisions:
        `Building on what I already knew. I came into this project with JavaScript, HTML, and CSS from COSC 484 at Towson, where I built the frontend for a team web application. That meant I could move quickly on the interface and spend my learning time on the parts that were new — authentication, file storage, and deployment.

Auth and data isolation. Every user's applications are private, so I designed protected REST routes with JWT authentication and hashed passwords with bcrypt rather than storing them directly. Tiered access controls limit resume uploads and application counts per account.

{{REPLACE: One sentence on why you chose MongoDB Atlas over a relational database for this project.}} Render handles the deployment, wired to automated GitHub deploys so pushing to main ships the change without deploying by hand.

Cloudinary for uploads. Resume files do not belong in the application database. Cloudinary handles storage and delivery, which keeps the data layer about data.`,
      learned:
        `This was the first project I finished and shipped on my own, and most of what I learned came from the parts that were new to me rather than the parts I planned.

On the COSC 484 team project I owned the frontend while a teammate handled the backend and database, so I had never worked the full stack end to end. Job Tracker forced that. I had to learn MongoDB properly instead of consuming an API someone else built, and working the full stack end to end exposed gaps I wouldn't have found any other way.

If I built it again, the thing I would change is planning: I would decide up front how far the project is meant to scale, so that features like the job listing API integration are part of the design rather than something the data model has to stretch to accommodate.`,
      screenshots: ['/screenshots/job-tracker.png'],
      liveUrl:    'https://jobblists.com',
      repoUrl:    'https://github.com/gsife12/shortlist',
    },
  },
  {
    id: 'squad-lynx',
    slug: 'squad-lynx',
    title: 'Squad Lynx',
    description:
      'Normalized relational database and backend API system for managing sports team recruitment, events, and messaging. Launching 2027.',
    tech: ['Python', 'JavaScript', 'PostgreSQL', 'Git', 'Linux'],
    featured: false,
    caseStudy: {
      overview:
        'Squad Lynx is a platform built to support sports team management — handling users, teams, tryout events, recruitment workflows, and in-app messaging through a normalized relational schema and backend APIs in Python and JavaScript.',
      problem:
        'Sports team organizers managing recruitment across multiple players and tryout events lack tooling purpose-built for tracking candidates, scheduling events, and coordinating team communication in one place.',
      contribution:
        'Designed the normalized relational database schema covering users, teams, tryouts, and messaging. Built backend APIs in Python and JavaScript for account management, event creation, recruitment tracking, and messaging. Used Git and Linux tooling for debugging and validation throughout.',
      features: [
        'Normalized relational schema for users, teams, tryouts, and messaging',
        'Backend APIs for accounts, event creation, and recruitment workflows',
        'In-app messaging between team organizers and candidates',
        'Git and Linux-based debugging and validation workflow',
      ],
      challenges:
        `The hardest part of Squad Lynx was not any single feature — it was the scope.

I designed the app around users, teams, tryouts, and messaging, and each of those turned out to carry its own data model, its own API surface, and its own edge cases. Messaging alone touches accounts, permissions, and delivery state. Building all four as one person meant every problem in one area blocked progress in the others, and the project stayed perpetually half-finished in four places instead of complete in one.

I was also learning as I built. Parts of the stack were new to me when I started, so time that looked like implementation time was really learning time, and I consistently underestimated how much of it a feature would take.

Both of those are planning problems rather than coding problems, which is the part I did not expect going in.`,
      decisions:
        `Python for the backend. I chose Python over JavaScript because Python was the language I was fluent in at the time, and I would rather build a working API in a language I know than a broken one in a language I am still learning.

Looking back, it held up for a better reason than the one I picked it for. A lot of what Squad Lynx does around tryouts and recruitment is scheduled and repetitive work, and Python makes that kind of automation straightforward to write and maintain.

A normalized relational schema. Users, teams, tryouts, and messaging all reference each other, so I designed the schema with validation and integrity constraints at the database level rather than trusting the application layer to enforce them. With a single developer and no test suite in the early stages, the database being strict was what caught my mistakes.`,
      learned:
        `Three things I would do differently, and am doing differently now.

Define the scope before writing code. I would cut the first version to one complete workflow — accounts and team creation — ship it, and add tryouts and messaging only once the first part was solid. A narrow finished thing beats a broad unfinished one.

Build it with other people. I took on every layer myself: schema, APIs, testing, tooling. Splitting the work would have moved it faster and given me code review, which is the thing I most missed working alone.

Test earlier, with better tooling. I am bringing AI-assisted testing into the remaining work rather than validating features by hand. That is directly informed by what I do at MAIK, where model evaluation and quality assurance are part of the job.`,
      screenshots: ['/screenshots/squadlinx.png'],
      liveUrl:    '{{REPLACE: https://your-squad-lynx-demo.com}}',
      repoUrl:    'https://github.com/gsife12/squadlinx',
    },
  },
  {
    id: 'team-web-application',
    slug: 'team-web-application',
    title: 'Team Web Application',
    description:
      'Full-stack web application built and shipped within a six-person student engineering team, with individual ownership of the frontend and team coordination through deployment.',
    tech: ['JavaScript', 'Node.js', 'React', 'MongoDB', 'Express', 'Git'],
    featured: false,
    caseStudy: {
      overview:
        'A full-stack web application developed collaboratively as part of a student engineering team in COSC 484, resulting in a production deployment on Render. The project spanned the full software development lifecycle — implementation, testing, debugging, and deployment.',
      problem:
        'Building software as a team introduces coordination challenges: merge conflicts, inconsistent integration, and version control discipline. This project required coordinating code review and resolving integration issues across six contributors working toward a fixed deadline.',
      contribution:
        `The idea for the application was mine, and I owned the frontend: the interfaces, the layout, and the user experience across the app. I also took on coordination partway through — checking in on where pieces stood, offering help to teammates who were stuck, and making sure the parts came together before the deadline.

The team was six people working in the MERN stack, coordinating over Slack and Git.`,
      features: [
        'Full-stack MERN implementation through production deployment',
        'Frontend ownership across all user-facing interfaces',
        'Integration testing and coordinated code review',
        'Version-controlled collaborative development with six contributors',
      ],
      challenges:
        `Six people on one codebase without a designated lead is its own engineering problem. There was no one assigned to track what was done, what was blocked, or what was about to collide. Two other students and I ended up filling that gap — not by title, just because the deadline was fixed and someone had to.

Practically that meant asking people directly where things stood instead of waiting for status to surface, and absorbing the pieces that were not going to land in time. Version control took on more weight than in a solo project: with that many people committing, Git was what kept the work reconcilable.`,
      decisions:
        `MERN, coordinated over Slack and Git. MongoDB, Express, React, and Node across the stack, with the team split by layer.

Splitting by layer. I took the frontend, while others handled the backend and the database. It let each of us go deep in one area, but it also meant no one person understood the whole system, which made integration the hardest phase of the project rather than the easiest. It is part of why I wanted to build a full stack end to end myself afterward.`,
      learned:
        `This is the project where I learned to work in a team, and where I learned HTML and CSS properly — not from a tutorial but from having to make an interface that other people's work plugged into.

The most useful lessons were not technical.

Finishing on time is a skill. A deadline that does not move changes how you make decisions, including which features to cut.

Presenting an idea is part of building it. I had to explain the concept clearly enough that five other people could build toward it.

Clear instructions are the leader's job. The idea was mine, so the ambiguity in it was mine too. If I ran it again I would define scope and ownership per person up front, in writing, and communicate more frequently rather than discovering gaps late.

The outcome made the case for the effort: the application was delivered on time and our interface drew specific praise from the professor when we presented it.`,
      screenshots: ['/screenshots/towson_aprtments.png'],
      liveUrl:    'https://group1-cosc484.onrender.com',
      repoUrl:    'https://github.com/abdullah-radid/Group1-COSC484',
    },
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
