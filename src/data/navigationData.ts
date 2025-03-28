import { NavigationItem } from '@/types/navigation-item.ts'
import {
  ArrowTrendingUpIcon,
  ArrowUpTrayIcon,
  BookOpenIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  CalendarIcon,
  ChartBarIcon,
  ChartBarSquareIcon,
  ChartPieIcon,
  ChatBubbleLeftIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  DocumentTextIcon,
  FlagIcon,
  GiftIcon,
  HomeIcon,
  InboxIcon,
  PlayIcon,
  PuzzlePieceIcon,
  TagIcon,
  TicketIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/16/solid'

export const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', icon: HomeIcon, current: true },
  { name: 'Clientes', href: '/clientes', icon: UserGroupIcon, current: false },
  { name: 'Reservas', href: '/reservas', icon: CalendarIcon, current: false },
  {
    name: 'Propostas',
    href: '/propostas',
    icon: DocumentTextIcon,
    current: false,
  },
  { name: 'Presentes', href: '/presentes', icon: GiftIcon, current: false },
  { name: 'Horários', href: '/horarios', icon: ClockIcon, current: false },
  { name: 'Salas', href: '/salas', icon: BuildingOfficeIcon, current: false },
  { name: 'Cupons', href: '/cupons', icon: TagIcon, current: false },
  {
    name: 'Workshops',
    href: '#',
    icon: BriefcaseIcon,
    current: false,
    children: [
      { name: 'Workshops', href: '/workshops', icon: BriefcaseIcon },
      {
        name: 'Participantes',
        href: '/workshops/participantes',
        icon: UserGroupIcon,
      },
    ],
  },
  {
    name: 'Financeiro',
    href: '#',
    icon: CreditCardIcon,
    current: false,
    children: [
      { name: 'RPS', href: '/financeiro/rps', icon: DocumentTextIcon },
      {
        name: 'Baixa de título',
        href: '/financeiro/baixa-de-titulo',
        icon: ArrowTrendingUpIcon,
      },
      {
        name: 'Carregar retorno NFe',
        href: '/financeiro/carregar-retorno-nfe',
        icon: ArrowUpTrayIcon,
      },
    ],
  },
  {
    name: 'Administração',
    href: '#',
    icon: Cog6ToothIcon,
    current: false,
    children: [
      { name: 'Desafios', href: '/administracao/desafios', icon: FlagIcon },
      { name: 'Usuários', href: '/administracao/usuarios', icon: UsersIcon },
      {
        name: 'Filiais',
        href: '/administracao/filiais',
        icon: BuildingOfficeIcon,
      },
      {
        name: 'Interessados franquias',
        href: '/administracao/interessados-franquia',
        icon: InboxIcon,
      },
    ],
  },
  {
    name: 'Relatórios',
    href: '#',
    icon: ChartBarIcon,
    current: false,
    children: [
      {
        name: 'Ranking de participantes',
        href: '/relatorios/ranking-de-participantes',
        icon: ArrowTrendingUpIcon,
      },
      {
        name: 'Lista de participantes',
        href: '/relatorios/lista-de-participantes',
        icon: ClipboardDocumentListIcon,
      },
      {
        name: 'Operacional',
        href: '/relatorios/operacional',
        icon: ChartPieIcon,
      },
      {
        name: 'Gerencial',
        href: '/relatorios/gerencial',
        icon: ChartBarSquareIcon,
      },
      {
        name: 'Propostas',
        href: '/relatorios/propostas',
        icon: DocumentTextIcon,
      },
    ],
  },
]

export const userNavigation: NavigationItem[] = [
  { name: 'Editar perfil', href: '/perfil', icon: UserIcon },
]
