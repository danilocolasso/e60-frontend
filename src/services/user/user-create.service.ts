import api from '@/services/api.ts'
import { User } from '@/types/User.ts'

export interface UserCreatePayload extends User {
  password: string
  password_confirmation: string
}

export interface UserCreateResponse extends User {}

export const userCreateService = async (
  payload: UserCreatePayload,
): Promise<UserCreateResponse> => {
  const response = await api.post('/users', payload)
  return response.data
}
