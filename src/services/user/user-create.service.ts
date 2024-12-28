import { UserCreatePayload } from '@/schemas/user/userCreateSchema'
import api from '@/services/api'
import { User } from '@/types/User'

export interface UserCreateResponse extends User {}

export const userCreateService = async (
  payload: UserCreatePayload,
): Promise<UserCreateResponse> => {
  const response = await api.post('/users', payload)
  return response.data
}
