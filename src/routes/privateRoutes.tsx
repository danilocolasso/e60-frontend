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
    path: '/administracao/usuarios',
    Component: lazy(() => import('@/pages/User/List')),
  },
  {
    path: '/administracao/usuarios/:id',
    Component: lazy(() => import('@/pages/User/Show')),
  },
  {
    path: '/perfil',
    Component: lazy(() => import('@/pages/User/Profile')),
  },
]
