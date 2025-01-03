import api from '@/services/api.ts'
import { PaginatedPayload } from '@/types/paginated-payload.ts'
import { PaginatedResponse } from '@/types/paginated-response.ts'
import { User } from '@/types/user.ts'

export interface UserListPayload extends PaginatedPayload {}

export interface UserListResponse extends PaginatedResponse<User> {}

export const userListService = async (
  payload: UserListPayload,
): Promise<UserListResponse> => {
  const response = await api.get('/users', { params: payload })
  return response.data
}
