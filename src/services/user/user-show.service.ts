import api from '@/services/api.ts'
import { User } from '@/types/User.ts'

export interface UserShowPayload {
  id: number
}

export interface UserShowResponse extends User {}

export const userShowService = async (
  payload: UserShowPayload,
): Promise<UserShowResponse> => {
  const response = await api.get(`/users/${payload.id}`)
  return response.data
}
