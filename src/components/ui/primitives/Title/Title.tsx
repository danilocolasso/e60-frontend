import { Divider } from '@/components/ui/primitives/Divider'
import { Text } from '@/components/ui/primitives/Text'
import clsx from 'clsx'
import React from 'react'

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  divider?: boolean
  subtitle?: string
}

export const Title: React.FC<TitleProps> = ({
  divider = true,
  subtitle,
  className,
  children,
  ...props
}) => {
  return (
    <>
      <h1
        className={clsx(
          className,
          'h-8 flex items-center gap-2 text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white',
        )}
        {...props}
      >
        {children}
        {subtitle && (
          <>
            <Text>-</Text>
            <Text className={'inline'}>{subtitle}</Text>
          </>
        )}
      </h1>
      {divider && <Divider />}
    </>
  )
}
