import api from '@/services/api'
import { Customer } from '@/types/customer'
import { PaginatedPayload } from '@/types/paginated-payload'
import { PaginatedResponse } from '@/types/paginated-response'

export interface CustomerListPayload extends PaginatedPayload {}

export interface CustomerListResponse extends PaginatedResponse<Customer> {}

export const customerListService = async (
  payload: CustomerListPayload,
): Promise<CustomerListResponse> => {
  const response = await api.get('/customers', { params: payload })
  return response.data
}
