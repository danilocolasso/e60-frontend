import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

export const userRoutes: RouteObject[] = [
  {
    path: '/administracao/usuarios',
    Component: lazy(() => import('@/pages/user/list')),
  },
  {
    path: '/administracao/usuarios/criar',
    Component: lazy(() => import('@/pages/user/create')),
  },
  {
    path: '/administracao/usuarios/editar/:id',
    Component: lazy(() => import('@/pages/user/edit')),
  },
  {
    path: '/administracao/usuarios/visualizar/:id',
    Component: lazy(() => import('@/pages/user/show')),
  },
  {
    path: '/perfil',
    Component: lazy(() => import('@/pages/user/profile')),
  },
]
