import api from '@/services/api'
import { Room } from '@/types/room'

export interface RoomEditPayload {
  id: number
}

export interface RoomEditResponse extends Room {}

export const roomEditService = async (
  payload: RoomEditPayload,
): Promise<RoomEditResponse> => {
  const response = await api.get(`/rooms/${payload.id}/edit`)
  return response.data
}
