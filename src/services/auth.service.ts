import { LoginPayload } from '@/schemas/auth/loginSchema'
import api, { getCsrfToken } from '@/services/api'
import { User } from '@/types/user.ts'

export const login = async (data: LoginPayload) => {
  await getCsrfToken()
  return await api.post('/login', data)
}

export const logout = async () => {
  return await api.post('/logout')
}

export const fetchUser = async (): Promise<{ data: User }> => {
  return api.get('/user')
}
