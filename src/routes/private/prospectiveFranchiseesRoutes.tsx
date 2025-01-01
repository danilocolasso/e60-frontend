import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

export const prospectiveFranchiseesRoutes: RouteObject[] = [
  {
    path: '/administracao/interessados-franquia',
    Component: lazy(() => import('@/pages/ProspectiveFranchisees/List')),
  },
  {
    path: '/administracao/interessados-franquia/criar',
    Component: lazy(() => import('@/pages/ProspectiveFranchisees/Create')),
  },
  {
    path: '/administracao/interessados-franquia/editar/:id',
    Component: lazy(() => import('@/pages/ProspectiveFranchisees/Edit')),
  },
  {
    path: '/administracao/interessados-franquia/visualizar/:id',
    Component: lazy(() => import('@/pages/ProspectiveFranchisees/Show')),
  },
]
