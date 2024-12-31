import { Divider } from '@/components/ui/primitives/Divider'
import clsx from 'clsx'
import React from 'react'

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  divider?: boolean
}

export const Content = ({
  children,
  className,
  divider = true,
  ...props
}: ContentProps) => {
  return (
    <>
      {divider && <Divider />}
      <div
        {...props}
        className={clsx(
          'flex flex-1 flex-col justify-between gap-4',
          className,
        )}
      >
        {children}
      </div>
    </>
  )
}
