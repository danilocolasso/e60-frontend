import { useAuth } from '@/contexts/AuthContext.tsx'
import { login } from '@/services/authService.ts'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
  const { setUser } = useAuth()
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await login(credentials)
      setUser(response.data.user)
      navigate('/')
    } catch (error) {
      console.log(error)
      // TODO Handle login error
    }
  }

  return {
    credentials,
    setCredentials,
    handleSubmit,
  }
}
