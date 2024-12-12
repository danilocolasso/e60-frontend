import { SidebarUser } from '@/components/common/SidebarUser'
import {
  Sidebar as SidebarUi,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '@/components/ui/Sidebar'
import { navigation } from '@/data/navigationData.ts'
import { NavigationItem } from '@/types/NavigationItem.ts'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import React from 'react'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Sidebar = ({ children, ...props }: SidebarProps) => {
  const data = navigation.map((item: NavigationItem) => ({
    ...item,
    current: item.href === location.pathname,
    children: item.children?.map((child: NavigationItem) => ({
      ...child,
      current: child.href === location.pathname,
    })),
  }))

  return (
    <SidebarUi {...props}>
      <SidebarHeader>
        <img
          src={'/logo.svg'}
          className={'h-8 dark:hidden'}
          alt={'Company Logo'}
        />
        <img
          src={'/logo-white.svg'}
          className={'hidden h-8 dark:block'}
          alt={'Company Logo'}
        />
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          {data.map((item: NavigationItem) => (
            <div key={item.name}>
              {item.children ? (
                <Disclosure as="div" className={'group'}>
                  <DisclosureButton
                    className={'cursor-pointer'}
                    as={SidebarItem}
                  >
                    {item.icon && <item.icon />}
                    {item.name}
                    <ChevronRightIcon
                      aria-hidden="true"
                      className="ml-auto size-5 shrink-0 group-data-[open]:rotate-90 group-data-[open]:text-white"
                    />
                  </DisclosureButton>
                  <DisclosurePanel
                    as="ul"
                    className={
                      'ml-2 border-l-2 border-black/10 pl-2 dark:border-white/10'
                    }
                  >
                    {item.children.map((child: NavigationItem) => (
                      <SidebarItem
                        key={child.name}
                        href={child.href}
                        current={child.current}
                      >
                        {child.icon && <child.icon />}
                        <SidebarLabel>{child.name}</SidebarLabel>
                      </SidebarItem>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              ) : (
                <SidebarItem
                  key={item.name}
                  href={item.href}
                  current={item.current}
                >
                  {item.icon && <item.icon />}
                  <SidebarLabel>{item.name}</SidebarLabel>
                </SidebarItem>
              )}
            </div>
          ))}
        </SidebarSection>
        <SidebarSpacer />
      </SidebarBody>
      <SidebarFooter className="max-lg:hidden">
        <SidebarUser />
      </SidebarFooter>
    </SidebarUi>
  )
}
