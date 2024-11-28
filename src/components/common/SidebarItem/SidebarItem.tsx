import { NavigationItem } from '@/types/NavigationItem.ts'
import { classNames } from '@/util/classNames.ts'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { Link } from '@/components/ui/Link'

export interface SidebarItemProps extends NavigationItem {}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  name,
  href,
  icon: Icon,
  current,
  children,
  ...props
}) => {
  return (
    <li {...props}>
      {!children ? (
        <Link
          href={href}
          className={classNames(
            current
              ? 'bg-indigo-700 dark:bg-gray-800'
              : 'hover:bg-indigo-700 hover:text-white dark:hover:bg-gray-800',
            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-indigo-200 dark:text-gray-400',
          )}
        >
          {Icon && <Icon aria-hidden="true" className="size-6 shrink-0" />}
          {name}
        </Link>
      ) : (
        <Disclosure as="div">
          <DisclosureButton
            className={classNames(
              current
                ? 'bg-indigo-700 text-white dark:bg-gray-800'
                : 'hover:bg-indigo-700 hover:text-white dark:hover:bg-gray-800',
              'group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-indigo-200 dark:text-gray-400',
            )}
          >
            {Icon && <Icon aria-hidden="true" className="size-6 shrink-0" />}
            {name}
            <ChevronRightIcon
              aria-hidden="true"
              className="ml-auto size-5 shrink-0 group-data-[open]:rotate-90 group-data-[open]:text-white"
            />
          </DisclosureButton>
          <DisclosurePanel as="ul" className="mt-1 px-2">
            {children.map((child) => (
              <li key={child.name}>
                <DisclosureButton
                  as={Link}
                  href={child.href}
                  className={classNames(
                    child.current
                      ? 'bg-indigo-700 text-white dark:bg-gray-800'
                      : 'hover:bg-indigo-700 hover:text-white dark:hover:bg-gray-800',
                    'group flex gap-x-3 rounded-md p-2 py-2 pl-9 pr-2 text-sm/6 font-semibold text-indigo-200 dark:text-gray-400',
                  )}
                >
                  {child.icon && (
                    <child.icon
                      aria-hidden="true"
                      className="size-6 shrink-0"
                    />
                  )}
                  {child.name}
                </DisclosureButton>
              </li>
            ))}
          </DisclosurePanel>
        </Disclosure>
      )}
    </li>
  )
}
