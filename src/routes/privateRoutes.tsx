import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

export const privateRoutes: RouteObject[] = [
  {
    path: '/',
    Component: lazy(() => import('@/App')),
  },
  {
    path: '/clientes',
    Component: lazy(() => import('@/pages/Customer')),
  }
]
