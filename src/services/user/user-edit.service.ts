import api from '@/services/api.ts'
import { User } from '@/types/user.ts'

export interface UserEditPayload {
  id: number
}

export interface UserEditResponse extends User {}

export const userEditService = async (
  payload: UserEditPayload,
): Promise<UserEditResponse> => {
  const response = await api.get(`/users/${payload.id}/edit`)
  return response.data
}
