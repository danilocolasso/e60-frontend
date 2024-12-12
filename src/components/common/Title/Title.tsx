import clsx from 'clsx'
import React from 'react'

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  divider?: boolean
}

export const Title: React.FC<TitleProps> = ({
  divider = true,
  className,
  children,
  ...props
}) => {
  return (
    <>
      <h1
        className={clsx(
          className,
          'text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white',
        )}
        {...props}
      >
        {children}
      </h1>
      {divider && (
        <hr
          className={
            'my-6 w-full border-t border-zinc-950/10 dark:border-white/10'
          }
        />
      )}
    </>
  )
}
