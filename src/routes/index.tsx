import { privateRoutes } from '@/routes/privateRoutes'
import { publicRoutes } from '@/routes/publicRoutes'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext.tsx'

const options = {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
}

export const PrivateRoutes = () => {
  const { isAuthenticated, loading } = useAuth()
  return loading || isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
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
