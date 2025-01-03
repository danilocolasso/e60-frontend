import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

export const branchRoutes: RouteObject[] = [
  {
    path: '/administracao/filiais',
    Component: lazy(() => import('@/pages/branch/list')),
  },
  {
    path: '/administracao/filiais/criar',
    Component: lazy(() => import('@/pages/branch/create')),
  },
  {
    path: '/administracao/filiais/editar/:id',
    Component: lazy(() => import('@/pages/branch/edit')),
  },
  {
    path: '/administracao/filiais/visualizar/:id',
    Component: lazy(() => import('@/pages/branch/show')),
  },
]
