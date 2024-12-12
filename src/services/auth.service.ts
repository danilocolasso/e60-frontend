import api, { getCsrfToken } from '@/services/api.ts'
import { User } from '@/types/User'

interface loginData {
  email: string
  password: string
  remember?: boolean
}

export const login = async (data: loginData) => {
  await getCsrfToken()
  return await api.post(
    import.meta.env.VITE_API_URL.replace('/api', '') + '/login',
    data,
  )
}

export const logout = async () => {
  return await api.post('/logout')
}

export const fetchUser = async (): Promise<{ data: User }> => {
  return api.get('/user')
}
