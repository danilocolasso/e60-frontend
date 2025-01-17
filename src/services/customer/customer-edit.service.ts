import api from '@/services/api'
import { Customer } from '@/types/customer'

export interface CustomerEditPayload {
  id: number
}

export interface CustomerEditResponse extends Customer {}

export const customerEditService = async (
  payload: CustomerEditPayload,
): Promise<CustomerEditResponse> => {
  const response = await api.get(`/customers/${payload.id}/edit`)
  return response.data
}
