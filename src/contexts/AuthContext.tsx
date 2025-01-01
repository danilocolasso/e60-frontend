import { fetchUser } from '@/services/auth.service.ts'
import { User } from '@/types/User'
import React, { useContext, useEffect, useMemo, useState } from 'react'

interface AuthContextProps {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = React.createContext<AuthContextProps>({
  user: null,
  isAuthenticated: false,
  loading: true,
  setUser: () => {},
})

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const isAuthenticated = Boolean(user)

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        setLoading(true)
        const response = await fetchUser()
        setUser(response.data)
      } catch (error) {
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    initializeAuth()
  }, [])

  const value = useMemo(
    () => ({ user, isAuthenticated, loading, setUser }),
    [user, isAuthenticated, loading],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
