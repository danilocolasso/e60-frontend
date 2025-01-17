import { branchRoutes } from '@/routes/private/branchRoutes'
import { customerRoutes } from '@/routes/private/customerRoutes'
import { userRoutes } from '@/routes/private/userRoutes'
import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

export const privateRoutes: RouteObject[] = [
  {
    path: '/',
    Component: lazy(() => import('@/pages/home')),
  },
  ...userRoutes,
  ...branchRoutes,
  ...customerRoutes,
]
