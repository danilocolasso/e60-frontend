import { CustomerCreatePayload } from '@/schemas/customer/customerCreateSchema'
import api from '@/services/api'
import { Customer } from '@/types/customer'

interface CustomerCreateResponse extends Customer {}

export const customerCreateService = async (
  payload: CustomerCreatePayload,
): Promise<CustomerCreateResponse> => {
  const response = await api.post('/customers', payload)
  return response.data
}
