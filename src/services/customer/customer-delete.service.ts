import api from '@/services/api'

export interface CustomerDeletePayload {
  id: number
}

export interface CustomerDeleteResponse {
  message: string
}

export const customerDeleteService = async (
  payload: CustomerDeletePayload,
): Promise<CustomerDeleteResponse> => {
  const response = await api.delete(`/customers/${payload.id}`)
  return response.data
}
