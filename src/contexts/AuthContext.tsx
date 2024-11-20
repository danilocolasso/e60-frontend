import { fetchUser } from '@/services/authService.ts'
import React, { useContext, useEffect, useState } from 'react'
import { User } from '@/types/User.ts'

interface AuthContextProps {
  user: User | null
  isAuthenticated: boolean
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = React.createContext<AuthContextProps>({
  user: null,
  isAuthenticated: false,
  setUser: () => {},
})

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = Boolean(user)

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const response = await fetchUser()
        setUser(response.data)
      } catch (error) {
        setUser(null)
      }
    }

    initializeAuth()
  }, [])

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
