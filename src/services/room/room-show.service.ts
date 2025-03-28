import api from '@/services/api.ts'
import { Room } from '@/types/room'

interface RoomShowPayload {
  id: number
}

interface RoomShowResponse extends Room {}

export const roomShowService = async (
  payload: RoomShowPayload,
): Promise<RoomShowResponse> => {
  const response = await api.get(`/rooms/${payload.id}`)
  return response.data
}
