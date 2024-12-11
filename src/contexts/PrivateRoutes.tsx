import { useAuth } from '@/contexts/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes = () => {
  const { isAuthenticated, loading } = useAuth()
  return loading || isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}
