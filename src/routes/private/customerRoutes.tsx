import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

export const customerRoutes: RouteObject[] = [
  {
    path: '/clientes',
    Component: lazy(() => import('@/pages/customer/list')),
  },
  {
    path: '/clientes/criar',
    Component: lazy(() => import('@/pages/customer/create')),
  },
  {
    path: '/clientes/editar/:id',
    Component: lazy(() => import('@/pages/customer/edit')),
  },
  {
    path: '/clientes/visualizar/:id',
    Component: lazy(() => import('@/pages/customer/show')),
  },
]
