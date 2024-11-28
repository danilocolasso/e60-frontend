import { SidebarItem } from '@/components/common/SidebarItem/SidebarItem.tsx'
import { NavigationItem } from '@/types/NavigationItem.ts'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react'
import { Cog6ToothIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'

interface SidebarNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  navigation: NavigationItem[]
}

interface SidebarProps extends SidebarNavigationProps {
  sidebarOpen: boolean
  setSidebarOpen: (isOpen: boolean) => void
}

export const SidebarNavigation: React.FC<SidebarNavigationProps> = (
  { navigation },
  props,
) => {
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
        <li className="mt-auto">
          <a
            href="#"
            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-indigo-200 hover:bg-indigo-700 hover:text-white"
          >
            <Cog6ToothIcon
              aria-hidden="true"
              className="size-6 shrink-0 text-indigo-200 group-hover:text-white"
            />
            Settings
          </a>
        </li>
      </ul>
    </nav>
  )
}

export const Sidebar: React.FC<SidebarProps> = (
  { navigation, sidebarOpen, setSidebarOpen },
  props,
) => {
  return (
    <div {...props}>
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className="relative z-50 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="-m-2.5 p-2.5"
                >
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                </button>
              </div>
            </TransitionChild>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4 dark:bg-gray-900">
              <div className="flex h-16 shrink-0 items-center">
                <img
                  alt="Your Company"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=white"
                  className="h-8 w-auto"
                />
              </div>
              <SidebarNavigation navigation={navigation} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4 dark:bg-gray-900">
          <div className="flex h-16 shrink-0 items-center">
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=white"
              className="h-8 w-auto"
            />
          </div>
          <SidebarNavigation navigation={navigation} />
        </div>
      </div>
    </div>
  )
}
