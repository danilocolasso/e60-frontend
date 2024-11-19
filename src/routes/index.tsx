import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: lazy(() => import('@/App.tsx')),
    },
    {
      path: '/login',
      Component: lazy(() => import('@/App.tsx')),
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
)

export function Routes() {
  return <RouterProvider router={router}  future={{v7_startTransition: true}}/>
}
