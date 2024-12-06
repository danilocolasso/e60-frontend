import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

export const privateRoutes: RouteObject[] = [
  {
    path: '/',
    Component: lazy(() => import('@/pages/Home')),
  },
  {
    path: '/clientes',
    Component: lazy(() => import('@/pages/Customer')),
  },
  {
    path: '/usuarios',
    Component: lazy(() => import('@/pages/User/List')),
  },
  {
    path: '/perfil',
    Component: lazy(() => import('@/pages/User/Profile')),
  }
]
