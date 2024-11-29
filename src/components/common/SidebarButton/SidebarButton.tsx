import { useSidebar } from '@/contexts/SidebarContext.tsx'
import { Bars3Icon } from '@heroicons/react/24/outline'
import React from 'react'

interface SidebarButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const SidebarButton: React.FC<SidebarButtonProps> = ({}) => {
  const { setSidebarOpen } = useSidebar()

  return (
    <>
      <button
        type="button"
        onClick={() => setSidebarOpen(true)}
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="size-6" />
      </button>
      <div
        aria-hidden="true"
        className="h-6 w-px bg-gray-900/10 lg:hidden dark:bg-white/20"
      />
    </>
  )
}
