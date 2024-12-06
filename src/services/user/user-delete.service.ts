import api from '@/services/api.ts'

export interface UserDeletePayload {
  id: number
}

export interface UserDeleteResponse {
  message: string
}

export const userDeleteService = async (
  payload: UserDeletePayload,
): Promise<UserDeleteResponse> => {
  const response = await api.delete(`/users/${payload.id}`)
  return response.data
}
