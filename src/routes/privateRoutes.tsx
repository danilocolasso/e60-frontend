import { branchRoutes } from '@/routes/private/branchRoutes'
import { customerRoutes } from '@/routes/private/customerRoutes'
import { userRoutes } from '@/routes/private/userRoutes'
import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { couponRoutes } from '@/routes/private/couponRoutes.tsx'

export const privateRoutes: RouteObject[] = [
  {
    path: '/',
    Component: lazy(() => import('@/pages/home')),
  },
  ...userRoutes,
  ...branchRoutes,
  ...customerRoutes,
  ...couponRoutes,
]
