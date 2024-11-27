import api, { getCsrfToken } from '@/services/api.ts'
import { User } from '@/types/User.ts'

interface loginData {
  email: string
  password: string
}

export const login = async (data: loginData, setUser: (user: User) => void) => {
  await getCsrfToken()
  await api
    .post(import.meta.env.VITE_API_URL.replace('/api', '') + '/login', data)
    .then((response) => setUser(response.data))
}

export const logout = async (setUser: (user: null) => void) => {
  await api.post('/logout')
  setUser(null)
}

export const fetchUser = async (): Promise<{ data: User }> => {
  return api.get('/user')
}
