import { RoomCreatePayload } from '@/schemas/room/roomCreateSchema'
import api from '@/services/api'
import { Room } from '@/types/room'

interface RoomCreateResponse extends Room {}

export const roomCreateService = async (
  payload: RoomCreatePayload,
): Promise<RoomCreateResponse> => {
  const response = await api.post('/rooms', payload)
  return response.data
}
