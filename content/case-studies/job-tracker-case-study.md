# Job Tracker — case study copy

Drafted from Gideon's own answers. Two spots marked `{{VERIFY}}` where I was not
sure of the detail — fix those before it ships.

---

## Technical challenges

Squad Lynx failed by being too broad. Job Tracker ran the opposite way.

The original scope was narrow on purpose: one place to record every job I applied
to, so I could review the whole pipeline weekly instead of digging through my
inbox. That version worked. The challenge came from what happened next — once it
was running, I kept seeing features worth adding, and the app grew well past what
I set out to build.

The largest of those was integrating public APIs from established job listing
services, so I could browse real openings inside the app and apply to them
directly rather than tracking applications I had made somewhere else. That turned
a personal record-keeping tool into something that participates in the actual job
search.

Growing scope after shipping is a different problem from planning it badly up
front. Each addition had to fit a data model I had already designed around a
smaller idea.

---

## Engineering decisions

**Building on what I already knew.** I came into this project with JavaScript,
HTML, and CSS from COSC 484 at Towson, where I built the frontend for a team web
application. That meant I could move quickly on the interface and spend my
learning time on the parts that were new — authentication, file storage, and
deployment.

**Auth and data isolation.** Every user's applications are private, so I designed
protected REST routes with JWT authentication and hashed passwords with bcrypt
rather than storing them directly. Tiered access controls limit resume uploads
and application counts per account.

**MongoDB Atlas and Render.** {{VERIFY: your reason for choosing MongoDB over a
relational database here — one sentence.}} Render handles the deployment, wired
to automated GitHub deploys so pushing to main ships the change and I am not
deploying by hand.

**Cloudinary for uploads.** Resume files do not belong in the application
database. Cloudinary handles storage and delivery, which keeps the data layer
about data.

---

## What I learned

This was the first project I finished and shipped on my own, and most of what I
learned came from the parts that were new to me rather than the parts I planned.

On the COSC 484 team project I owned the frontend while a teammate handled the
backend and database, so I had never worked the full stack end to end. Job Tracker
forced that. I had to learn MongoDB properly instead of consuming an API someone
else built, and I ran into the gap between an application that works locally and
one that works deployed — {{VERIFY: one sentence on the backend problem on the
deployed site and how you fixed it.}}

If I built it again, the thing I would change is planning: I would decide up front
how far the project is meant to scale, so that features like the job listing API
integration are part of the design rather than something the data model has to
stretch to accommodate.

---

## Two notes before you publish

**1. "I wouldn't do anything differently" is the one answer to avoid.** I know
what you meant — it was a learning project and finishing it was the win. But in
an interview that answer reads as not having reflected. You already gave me the
better version in the same breath: you'd plan the scope and scalability up front.
That's what I wrote. Keep it.

**2. The job listing API integration isn't on your résumé.** You told Claude Code
the résumé is the only source of truth for the site, so right now this feature
either has to come off the case study or go onto the résumé. Put it on the
résumé — integrating third-party APIs into a deployed app is a stronger bullet
than most of what's already in that section. Something like:

> Integrated public job listing APIs to surface live openings in-app, extending
> the tracker from personal record-keeping to direct application submission.

Then it's consistent everywhere and you've improved the résumé at the same time.
