import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

export const customerRoutes: RouteObject[] = [
  {
    path: '/clientes',
    Component: lazy(() => import('@/pages/Customer/List')),
  },
  {
    path: '/clientes/criar',
    Component: lazy(() => import('@/pages/Customer/Create')),
  },
  {
    path: '/clientes/editar/:id',
    Component: lazy(() => import('@/pages/Customer/Edit')),
  },
  {
    path: '/clientes/visualizar/:id',
    Component: lazy(() => import('@/pages/Customer/Show')),
  },
]
