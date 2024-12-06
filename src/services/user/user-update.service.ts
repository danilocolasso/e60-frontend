import api from '@/services/api.ts'
import { User } from '@/types/User.ts'

export interface UserUpdatePayload extends User {
  password?: string
  password_confirmation?: string
}

export interface UserUpdateResponse extends User {}

export const userUpdateService = async (
  payload: UserUpdatePayload,
): Promise<UserUpdateResponse> => {
  const response = await api.put(`/users/${payload.id}`, payload)
  return response.data
}
