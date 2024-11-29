import { NavigationItem } from '@/types/NavigationItem.ts'
import {
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

export const navigation: NavigationItem[] = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  {
    name: 'Team',
    href: '#',
    icon: UsersIcon,
    current: false,
    children: [
      { name: 'Engineering', href: '#', icon: BellIcon },
      { name: 'Human Resources', href: '#' },
      { name: 'Customer Success', href: '#' },
    ],
  },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]

export const userNavigation: NavigationItem[] = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]
