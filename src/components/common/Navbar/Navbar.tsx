import { NavbarUser } from '@/components/common/NavbarUser/NavbarUser.tsx'
import { SidebarButton } from '@/components/common/SidebarButton'
import React from 'react'

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <header
      className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 dark:border-white/10 dark:bg-gray-900/75"
      {...props}
    >
      <SidebarButton />
      <div className={'ml-auto'}>
        <NavbarUser />
      </div>
    </header>
  )
}
