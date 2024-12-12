import { Avatar } from '@/components/ui/primitives/Avatar'
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/ui/primitives/Dropdown'
import { SidebarItem } from '@/components/ui/primitives/Sidebar'
import { useAuth } from '@/contexts/AuthContext'
import { userNavigation } from '@/data/navigationData'
import { logout } from '@/services/auth.service'
import { NavigationItem } from '@/types/NavigationItem'
import {
  ArrowRightStartOnRectangleIcon,
  ChevronUpIcon,
} from '@heroicons/react/16/solid'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

interface SidebarUserProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarUser = ({ children, ...props }: SidebarUserProps) => {
  const { user, setUser } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      setUser(null)
      navigate('/login')
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao fazer logout. Por favor, tente novamente mais tarde',
      )
    }
  }

  const getInitials = (name: string | undefined) =>
    name &&
    name
      .split(' ')
      .filter((word) => word && word.length > 3)
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join('')

  return (
    <Dropdown {...props}>
      <DropdownButton as={SidebarItem}>
        <span className="flex min-w-0 items-center gap-3">
          <Avatar
            initials={getInitials(user?.name)}
            className="size-10 bg-[#FF0000] text-white"
            alt=""
          />
          <span className="hidden min-w-0 lg:block">
            <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
              {user?.name}
            </span>
            <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
              {user?.email}
            </span>
          </span>
        </span>
        <ChevronUpIcon className={'hidden lg:block'} />
      </DropdownButton>
      <DropdownMenu className="min-w-64" anchor="top start">
        {userNavigation.map((item: NavigationItem) => (
          <DropdownItem key={item.name} href={item.href}>
            {item.icon && <item.icon />}
            <DropdownLabel>{item.name}</DropdownLabel>
          </DropdownItem>
        ))}
        <DropdownDivider />
        <DropdownItem onClick={handleLogout}>
          <ArrowRightStartOnRectangleIcon />
          <DropdownLabel>Logout</DropdownLabel>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
