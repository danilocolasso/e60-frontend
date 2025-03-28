import api from '@/services/api'

export interface RoomDeletePayload {
  id: number
}

export interface RoomDeleteResponse {
  message: string
}

export const roomDeleteService = async (
  payload: RoomDeletePayload,
): Promise<RoomDeleteResponse> => {
  const response = await api.delete(`/rooms/${payload.id}`)
  return response.data
}
