import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

export const roomRoutes: RouteObject[] = [
  {
    path: '/salas',
    Component: lazy(() => import('@/pages/room/list')),
  },
  {
    path: '/salas/criar',
    Component: lazy(() => import('@/pages/room/create')),
  },
  {
    path: '/salas/editar/:id',
    Component: lazy(() => import('@/pages/room/edit')),
  },
  {
    path: '/salas/visualizar/:id',
    Component: lazy(() => import('@/pages/room/show')),
  },
]
