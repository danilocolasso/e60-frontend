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
    path: '/administracao/usuarios/criar',
    Component: lazy(() => import('@/pages/User/Create')),
  },
  {
    path: '/administracao/usuarios/editar/:id',
    Component: lazy(() => import('@/pages/User/Edit')),
  },
  {
    path: '/administracao/usuarios/visualizar/:id',
    Component: lazy(() => import('@/pages/User/Show')),
  },
  {
    path: '/perfil',
    Component: lazy(() => import('@/pages/User/Profile')),
  },
]
