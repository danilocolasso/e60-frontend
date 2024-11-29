import { Text } from '@/components/ui/Text'
import { useAuth } from '@/contexts/AuthContext.tsx'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { userNavigation as navigation } from '@/data/navigationData.ts'

interface NavbarUserProps extends React.HTMLAttributes<HTMLDivElement> {}

export const NavbarUser: React.FC<NavbarUserProps> = ({ ...props }) => {
  const { user } = useAuth()

  return (
    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
      <div className="flex items-center gap-x-4 lg:gap-x-6">
        <Menu as="div" className="relative" {...props}>
          <MenuButton className="-m-1.5 flex items-center p-1.5">
            <img
              alt=""
              src="user.png"
              className="size-8 rounded-full bg-gray-50"
            />
            <span className="hidden lg:flex lg:items-center">
              <Text className={'ml-4 text-sm/6 font-semibold'}>
                {user?.name}
              </Text>
              <ChevronDownIcon
                aria-hidden="true"
                className="ml-2 size-5 text-gray-400"
              />
            </span>
          </MenuButton>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in dark:bg-gray-900 dark:ring-white/10"
          >
            {navigation.map((item) => (
              <MenuItem key={item.name}>
                <a
                  href={item.href}
                  className="flex gap-x-3 items-center px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none dark:text-white dark:data-[focus]:bg-gray-800"
                >
                  {item.icon && <item.icon aria-hidden="true" className="size-4 shrink-0" />}
                  {item.name}
                </a>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </div>
    </div>
  )
}
