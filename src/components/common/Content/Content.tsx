import React from 'react'

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Content: React.FC<ContentProps> = ({ children, ...props }) => {
  return (
    <main className="flex-1 flex overflow-y-auto" {...props}>
      <div className="flex-1 flex flex-col lg:m-4 px-4 py-4 sm:px-6 lg:px-8 lg:rounded-md lg:bg-white lg:p-10 lg:shadow-sm lg:ring-1 lg:ring-slate-950/5 dark:lg:bg-gray-700/10 dark:lg:ring-white/10">
        {children}
      </div>
    </main>
  )
}
