import api from '@/services/api'
import { Room } from '@/types/room'
import { PaginatedPayload } from '@/types/paginated-payload'
import { PaginatedResponse } from '@/types/paginated-response'

export interface RoomListPayload extends PaginatedPayload {}

export interface RoomListResponse extends PaginatedResponse<Room> {}

export const roomListService = async (
  payload: RoomListPayload,
): Promise<RoomListResponse> => {
  const response = await api.get('/rooms', { params: payload })
  return response.data
}
