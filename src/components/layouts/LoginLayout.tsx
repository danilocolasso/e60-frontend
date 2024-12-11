import React from 'react'

interface LoginLayoutProps {
  children: React.ReactNode
}

export const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          alt="Escape 60'"
          src="/logo.svg"
          className="mx-auto h-12 w-auto dark:hidden"
        />
        <img
          alt="Escape 60'"
          src="/logo-white.svg"
          className="mx-auto hidden h-12 w-auto dark:flex"
        />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="px-6 py-12 sm:rounded-lg sm:px-12 lg:bg-white lg:shadow-sm lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
          {children}
        </div>
      </div>
    </div>
  )
}
