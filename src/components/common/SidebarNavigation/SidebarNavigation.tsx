import { SidebarItem } from '@/components/common/SidebarItem'
import { NavigationItem } from '@/types/NavigationItem.ts'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import React from 'react'

export interface SidebarNavigationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  navigation: NavigationItem[]
}

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  navigation,
  ...props
}) => {
  return (
    <nav className="flex flex-1 flex-col" {...props}>
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {navigation.map((item) => (
              <SidebarItem key={item.name} {...item} />
            ))}
          </ul>
        </li>
        <SidebarItem
          className={'mt-auto'}
          name="Settings"
          href="#"
          icon={Cog6ToothIcon}
        />
      </ul>
    </nav>
  )
}
