import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

export const branchRoutes: RouteObject[] = [
  {
    path: '/administracao/filiais',
    Component: lazy(() => import('@/pages/Branch/List')),
  },
  {
    path: '/administracao/filiais/criar',
    Component: lazy(() => import('@/pages/Branch/Create')),
  },
  {
    path: '/administracao/filiais/editar/:id',
    Component: lazy(() => import('@/pages/Branch/Edit')),
  },
  {
    path: '/administracao/filiais/visualizar/:id',
    Component: lazy(() => import('@/pages/Branch/Show')),
  },
]
