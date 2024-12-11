import clsx from 'clsx'
import type React from 'react'
import { Button } from '../Button/Button.tsx'

interface PaginationPageProps extends React.HTMLAttributes<HTMLButtonElement> {
  current?: boolean
}

export function Pagination({
  'aria-label': ariaLabel = 'Page navigation',
  className,
  ...props
}: React.ComponentPropsWithoutRef<'nav'>) {
  return <nav aria-label={ariaLabel} {...props} className={clsx(className, 'flex gap-x-2')} />
}

export function PaginationFirst({
  onClick,
  className,
  children = 'First',
}: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <span className={clsx(className, 'grow-0')}>
      <Button {...(!onClick ? { disabled: true } : { onClick })} plain aria-label="First page">
        {children}
      </Button>
    </span>
  )
}

export function PaginationLast({
  onClick,
  className,
  children = 'Last',
}: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <span className={clsx(className, 'grow-0')}>
      <Button {...(!onClick ? { disabled: true } : { onClick })} plain aria-label="Last page">
        {children}
      </Button>
    </span>
  )
}

export function PaginationPrevious({
  onClick,
  className,
  children = 'Previous',
}: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <span className={clsx(className, 'grow basis-0')}>
      <Button {...(!onClick ? { disabled: true } : { onClick })} plain aria-label="Previous page">
        <svg className="stroke-current" data-slot="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M2.75 8H13.25M2.75 8L5.25 5.5M2.75 8L5.25 10.5"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {children}
      </Button>
    </span>
  )
}

export function PaginationNext({
  onClick,
  className,
  children = 'Next',
}: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <span className={clsx(className, 'flex grow basis-0 justify-end')}>
      <Button {...(!onClick ? { disabled: true } : { onClick })} plain aria-label="Next page">
        {children}
        <svg className="stroke-current" data-slot="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M13.25 8L2.75 8M13.25 8L10.75 10.5M13.25 8L10.75 5.5"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </span>
  )
}

export function PaginationList({ className, ...props }: React.ComponentPropsWithoutRef<'span'>) {
  return <span {...props} className={clsx(className, 'hidden items-baseline gap-x-2 sm:flex')} />
}

export function PaginationPage({
  onClick,
  className,
  current = false,
  children,
}: React.PropsWithChildren<PaginationPageProps>) {
  return (
    <Button
      onClick={onClick}
      plain
      aria-label={`Page ${children}`}
      aria-current={current ? 'page' : undefined}
      className={clsx(
        className,
        'min-w-[2.25rem] before:absolute before:-inset-px before:rounded-lg',
        current && 'before:bg-zinc-950/5 dark:before:bg-white/10'
      )}
    >
      <span className="-mx-0.5">{children}</span>
    </Button>
  )
}

export function PaginationGap({
  className,
  children = <>&hellip;</>,
  ...props
}: React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      aria-hidden="true"
      {...props}
      className={clsx(
        className,
        'w-[2.25rem] select-none text-center text-sm/6 font-semibold text-zinc-950 dark:text-white'
      )}
    >
      {children}
    </span>
  )
}
