import { useState } from 'react'
import { Button } from '../../ui/Button'
import { useInView } from '../../../hooks/useInView'
import { FORMSPREE_ENDPOINT } from '../../../constants'

type Status = 'idle' | 'sending' | 'success' | 'error'

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

function validate(name: string, email: string, message: string): FormErrors {
  const errors: FormErrors = {}
  if (!name.trim() || name.trim().length < 2) errors.name = 'Name must be at least 2 characters.'
  if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid email address.'
  if (!message.trim() || message.trim().length < 10) errors.message = 'Message must be at least 10 characters.'
  return errors
}

export function ContactCTA() {
  const { ref, inView } = useInView()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [touched, setTouched] = useState({ name: false, email: false, message: false })
  const [status, setStatus] = useState<Status>('idle')

  const errors = validate(name, email, message)
  const hasErrors = Object.keys(errors).length > 0

  const fieldClass = (field: keyof FormErrors) =>
    [
      'w-full rounded-md border bg-gs-bg px-4 py-3 font-sans text-sm text-gs-t1 placeholder-gs-t2/50',
      'transition-colors duration-150 outline-none',
      touched[field] && errors[field]
        ? 'border-red-500 focus:border-red-500'
        : 'border-gs-border focus:border-gs-blue',
    ].join(' ')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    if (hasErrors) return

    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
        setTouched({ name: false, email: false, message: false })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`reveal ${inView ? 'visible' : ''} border-t border-gs-border/30`}
      id="contact"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left: heading + email fallback */}
          <div>
            <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-gs-blue">
              Get in Touch
            </p>
            <h2 className="font-display text-h2 text-gs-t1">Let&rsquo;s connect.</h2>
            <p className="mt-4 max-w-sm font-sans leading-relaxed text-gs-t2">
              I&rsquo;m open to early-career software engineering, AI engineering, cloud, and
              full-stack roles in Maryland, greater DC, or remote. Send a message or
              reach me directly.
            </p>
          </div>

          {/* Right: form */}
          <div>
            {status === 'success' ? (
              <div className="flex h-full items-center justify-center rounded-2xl border border-gs-border bg-gs-surface p-12 text-center">
                <div>
                  <p className="font-display text-h3 text-gs-t1">Thanks for reaching out.</p>
                  <p className="mt-2 font-sans text-sm text-gs-t2">I&rsquo;ll get back to you shortly.</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setStatus('idle')}
                    className="mt-6"
                  >
                    Send another message
                  </Button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5 rounded-2xl border border-gs-border bg-gs-surface p-8"
              >
                <div>
                  <label htmlFor="name" className="mb-1.5 block font-sans text-sm font-medium text-gs-t1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                    placeholder="Your name"
                    autoComplete="name"
                    aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
                    aria-invalid={touched.name && !!errors.name}
                    className={fieldClass('name')}
                  />
                  {touched.name && errors.name && (
                    <p id="name-error" role="alert" className="mt-1.5 font-sans text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block font-sans text-sm font-medium text-gs-t1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                    placeholder="you@example.com"
                    autoComplete="email"
                    aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                    aria-invalid={touched.email && !!errors.email}
                    className={fieldClass('email')}
                  />
                  {touched.email && errors.email && (
                    <p id="email-error" role="alert" className="mt-1.5 font-sans text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block font-sans text-sm font-medium text-gs-t1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                    placeholder="What's on your mind?"
                    aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
                    aria-invalid={touched.message && !!errors.message}
                    className={`${fieldClass('message')} resize-none`}
                  />
                  {touched.message && errors.message && (
                    <p id="message-error" role="alert" className="mt-1.5 font-sans text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === 'error' && (
                  <p role="alert" className="font-sans text-sm text-red-500">
                    Something went wrong. Try again or use the email icon above.
                  </p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={status === 'sending'}
                  className="w-full justify-center"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
