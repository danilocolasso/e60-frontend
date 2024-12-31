import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

export const privateRoutes: RouteObject[] = [
  {
    path: '/',
    Component: lazy(() => import('@/pages/Home')),
  },
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
