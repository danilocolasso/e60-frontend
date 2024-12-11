import { PrivateRoutes } from '@/contexts/PrivateRoutes.tsx'
import { privateRoutes } from '@/routes/privateRoutes.tsx'
import { publicRoutes } from '@/routes/publicRoutes.tsx'
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
