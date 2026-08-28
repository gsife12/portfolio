# Squad Lynx — case study copy

Drafted from Gideon's own answers. Nothing here is invented; edit any wording
that doesn't sound like you before it ships.

---

## Technical challenges

The hardest part of Squad Lynx was not any single feature — it was the scope.

I designed the app around users, teams, tryouts, and messaging, and each of those
turned out to carry its own data model, its own API surface, and its own edge
cases. Messaging alone touches accounts, permissions, and delivery state.
Building all four as one person meant every problem in one area blocked progress
in the others, and the project stayed perpetually half-finished in four places
instead of complete in one.

I was also learning as I built. Parts of the stack were new to me when I started,
so time that looked like implementation time was really learning time, and I
consistently underestimated how much of it a feature would take.

Both of those are planning problems rather than coding problems, which is the
part I did not expect going in.

---

## Engineering decisions

**Python for the backend.** I chose Python over JavaScript because Python was the
language I was fluent in at the time, and I would rather build a working API in a
language I know than a broken one in a language I am still learning.

Looking back, it held up for a better reason than the one I picked it for. A lot
of what Squad Lynx does around tryouts and recruitment is scheduled and repetitive
work, and Python makes that kind of automation straightforward to write and
maintain.

**A normalized relational schema.** Users, teams, tryouts, and messaging all
reference each other, so I designed the schema with validation and integrity
constraints at the database level rather than trusting the application layer to
enforce them. With a single developer and no test suite in the early stages, the
database being strict was what caught my mistakes.

---

## What I learned

Three things I would do differently, and am doing differently now:

**Define the scope before writing code.** I would cut the first version to one
complete workflow — accounts and team creation — ship it, and add tryouts and
messaging only once the first part was solid. A narrow finished thing beats a
broad unfinished one.

**Build it with other people.** I took on every layer myself: schema, APIs,
testing, tooling. Splitting the work would have moved it faster and given me code
review, which is the thing I most missed working alone.

**Test earlier, with better tooling.** I am bringing AI-assisted testing into the
remaining work rather than validating features by hand. That is directly informed
by what I do at MAIK, where model evaluation and quality assurance are part of
the job.

---

## Note before you publish this

The scope-creep story is the strongest thing in here — it is specific, it is
honest, and it is the kind of judgment recruiters are actually screening for at
your level. Keep it.

Two things to be ready for:

1. **"You said you didn't know JavaScript — but Job Tracker is React and Node."**
   Good question to get. The answer is that you learned it, and Job Tracker is
   the proof. That is a growth story, not a gap.

2. **The project is still unfinished and the site will say so.** That is fine
   while it reads as in progress with a clear plan. It stops being fine if the
   date sits there unchanged for a year. Either narrow it and ship something, or
   move it below the two finished projects.
