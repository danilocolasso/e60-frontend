import { SidebarNavigation } from '@/components/common/SidebarNavigation'
import { useSidebar } from '@/contexts/SidebarContext'
import { navigation } from '@/data/navigationData.ts'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { sidebarOpen, setSidebarOpen } = useSidebar()

  return (
    <aside {...props} className={'scrollbar'}>
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
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4 dark:bg-gray-900">
              <div className="flex h-16 shrink-0 items-center">
                <img
                  alt="Escape 60'"
                  src="logo-white.svg"
                  className="h-8 w-auto"
                />
              </div>
              <SidebarNavigation navigation={navigation} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4 dark:bg-gray-900">
          <div className="flex h-16 shrink-0 items-center">
            <img alt="Escape 60'" src="logo-white.svg" className="h-8 w-auto" />
          </div>
          <SidebarNavigation navigation={navigation} />
        </div>
      </div>
    </aside>
  )
}
