import { LoginPayload } from '@/schemas/login/loginSchema'
import api, { getCsrfToken } from '@/services/api'
import { User } from '@/types/User'

export const login = async (data: LoginPayload) => {
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
