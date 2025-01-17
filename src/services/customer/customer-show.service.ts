import api from '@/services/api.ts'
import { Customer } from '@/types/customer'

interface CustomerShowPayload {
  id: number
}

interface CustomerShowResponse extends Customer {}

export const customerShowService = async (
  payload: CustomerShowPayload,
): Promise<CustomerShowResponse> => {
  const response = await api.get(`/customers/${payload.id}`)
  return response.data
}
