import { PrivateRoutes } from '@/contexts/PrivateRoutes'
import { privateRoutes } from '@/routes/privateRoutes'
import { publicRoutes } from '@/routes/publicRoutes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const options = {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
}

const router = createBrowserRouter(
  [
    ...publicRoutes,
    {
      element: <PrivateRoutes />,
      children: privateRoutes,
    },
  ],
  options,
)

export function Routes() {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  )
}
