import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

export const couponRoutes: RouteObject[] = [
  {
    path: '/cupons',
    Component: lazy(() => import('@/pages/coupon/list')),
  },
  {
    path: '/cupons/criar',
    Component: lazy(() => import('@/pages/coupon/create')),
  },
  {
    path: '/cupons/editar/:id',
    Component: lazy(() => import('@/pages/coupon/edit')),
  },
  {
    path: '/cupons/visualizar/:id',
    Component: lazy(() => import('@/pages/coupon/show')),
  },
]
