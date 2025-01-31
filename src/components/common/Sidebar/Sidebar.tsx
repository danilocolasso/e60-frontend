import { useSidebar } from '@/components/common/Sidebar/useSidebar'
import { SidebarUser } from '@/components/common/SidebarUser'
import {
  Sidebar as SidebarPrimitive,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '@/components/ui/primitives/Sidebar'
import { NavigationItem } from '@/types/navigation-item.ts'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'
import React from 'react'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Sidebar = ({ children, ...props }: SidebarProps) => {
  const { data } = useSidebar()

  return (
    <SidebarPrimitive {...props}>
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
                <Disclosure as="div" className={'group relative'} defaultOpen={item.current}>
                  <DisclosureButton
                    className={'cursor-pointer'}
                    as={SidebarItem}
                  >
                    {item.current && (
                      <motion.span
                        layoutId="current-parent-indicator"
                        className="absolute inset-y-2 -left-4 w-0.5 rounded-full bg-zinc-950 dark:bg-white"
                      />
                    )}
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
    </SidebarPrimitive>
  )
}
