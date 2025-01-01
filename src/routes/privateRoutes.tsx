import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { userRoutes } from '@/routes/private/userRoutes.tsx'
import { customerRoutes } from '@/routes/private/customerRoutes.tsx'
import { branchRoutes } from '@/routes/private/branchRoutes.tsx'
import { prospectiveFranchiseesRoutes } from '@/routes/private/prospectiveFranchiseesRoutes.tsx'

export const privateRoutes: RouteObject[] = [
  {
    path: '/',
    Component: lazy(() => import('@/pages/Home')),
  },
  ...customerRoutes,
  ...userRoutes,
  ...branchRoutes,
  ...prospectiveFranchiseesRoutes,
]
