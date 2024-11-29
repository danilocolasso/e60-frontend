import { NavigationItem } from '@/types/NavigationItem'
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
  CogIcon,
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
} from '@heroicons/react/24/outline'

export const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', icon: HomeIcon, current: true },
  { name: 'Clientes', href: '/clientes', icon: UserGroupIcon, current: false },
  {
    name: 'e60 Play',
    href: '#',
    icon: PlayIcon,
    current: false,
    children: [
      { name: 'Jogos', href: '/e60-play/jogos', icon: PuzzlePieceIcon },
      { name: 'Jogadores', href: '/e60-play/jogadores', icon: UserGroupIcon },
      { name: 'Sessões', href: '/e60-play/sessoes', icon: ClockIcon },
      {
        name: 'Grupo de Cupons',
        href: '/e60-play/grupo-de-cupons',
        icon: TicketIcon,
      },
      { name: 'Cupons', href: '/e60-play/cupons', icon: TagIcon },
    ],
  },
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
  {
    name: 'Comentários',
    href: '/comentarios',
    icon: ChatBubbleLeftIcon,
    current: false,
  },
  { name: 'Cupons', href: '/cupons', icon: TagIcon, current: false },
  { name: 'Conteúdo', href: '/conteudo', icon: BookOpenIcon, current: false },
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
    icon: CogIcon,
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
        href: '/administracao/interessados-franquias',
        icon: InboxIcon,
      },
      {
        name: 'Desconto progressivo',
        href: '/administracao/desconto-progressivo',
        icon: TagIcon,
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
