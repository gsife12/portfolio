import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  children: ReactNode
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type Props = ButtonProps | AnchorProps

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gs-blue text-white border-transparent hover:opacity-90 focus-visible:ring-2 focus-visible:ring-gs-blue focus-visible:ring-offset-2',
  secondary:
    'bg-transparent text-gs-blue border-gs-blue hover:bg-gs-blue hover:text-white focus-visible:ring-2 focus-visible:ring-gs-blue focus-visible:ring-offset-2',
  ghost:
    'bg-transparent text-gs-t2 border-transparent hover:text-gs-t1 focus-visible:ring-2 focus-visible:ring-gs-blue focus-visible:ring-offset-2',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
}

export function Button({ variant = 'primary', size = 'md', children, ...rest }: Props) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-md border font-sans font-medium',
    'transition-all duration-150 cursor-pointer no-underline',
    variantClasses[variant],
    sizeClasses[size],
  ].join(' ')

  if ('href' in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorProps
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
