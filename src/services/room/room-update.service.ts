import { RoomUpdatePayload } from '@/schemas/room/roomUpdateSchema'
import api from '@/services/api'
import { Room } from '@/types/room'

interface RoomUpdateResponse extends Room {}

export const roomUpdateService = async (
  payload: RoomUpdatePayload,
): Promise<RoomUpdateResponse> => {
  const response = await api.put(`/rooms/${payload.id}`, payload)
  return response.data
}
