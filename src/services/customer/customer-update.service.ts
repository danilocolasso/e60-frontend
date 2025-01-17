import { CustomerUpdatePayload } from '@/schemas/customer/customerUpdateSchema'
import api from '@/services/api'
import { Customer } from '@/types/customer'

interface CustomerUpdateResponse extends Customer {}

export const customerUpdateService = async (
  payload: CustomerUpdatePayload,
): Promise<CustomerUpdateResponse> => {
  const response = await api.put(`/customers/${payload.id}`, payload)
  return response.data
}
