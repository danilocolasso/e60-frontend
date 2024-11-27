import { useAuth } from '@/contexts/AuthContext.tsx'
import { fetchUser, login } from '@/services/authService.ts'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
  const { setUser } = useAuth()
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(credentials, setUser)
      // const userResponse = await fetchUser()
      // setUser(userResponse.data)
      // navigate('/dashboard')
      // setCredentials({ email: '', password: '' }) // TODO - remove this line
    } catch (error) {
      console.log(error)
      // Handle login error
    }
  }

  return {
    credentials,
    setCredentials,
    handleSubmit,
  }
}
