import { UserUpdatePayload } from '@/schemas/user/userUpdateSchema'
import api from '@/services/api'
import { User } from '@/types/user.ts'

export interface UserUpdateResponse extends User {}

export const userUpdateService = async (
  payload: UserUpdatePayload,
): Promise<UserUpdateResponse> => {
  const response = await api.put(`/users/${payload.id}`, payload)
  return response.data
}
