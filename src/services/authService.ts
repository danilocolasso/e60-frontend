import api, { getCsrfToken } from '@/services/api.ts'
import { User } from '@/types/User.ts'

interface loginData {
  email: string
  password: string
}

export const login = async (data: loginData, setUser: (user: User) => void) => {
  await getCsrfToken()
  const response = api.post('/login', data)
  const userResponse: { data: User } = await fetchUser()
  setUser(userResponse.data)

  return response
}

export const logout = async (setUser: (user: null) => void) => {
  await api.post('/logout')
  setUser(null)
}

export const fetchUser = async (): Promise<{ data: User }> => {
  return api.get('/user')
}
