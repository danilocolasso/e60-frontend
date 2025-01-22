import api from '@/services/api'

interface CustomerCnpjConsultResponse {
  name: string
  street: string
  street_number: string
  neighborhood: string
  zip_code: string
  city: string
  state: string
  phone: string
}

export interface CustomerCnpjConsultPayload {
  cnpj: string
}

export const customerCnpjConsult = async (
  payload: CustomerCnpjConsultPayload,
): Promise<CustomerCnpjConsultResponse> => {
  const response = await api.get(`/customer/cnpj/${payload.cnpj}`)
  return response.data
}
