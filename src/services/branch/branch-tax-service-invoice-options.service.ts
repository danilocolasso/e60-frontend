import api from '@/services/api'
import { Option } from '@/types/option'

export const branchTaxServiceInvoiceOptionsService = async (): Promise<
  Option<string>[]
> => {
  const response = await api.get('/branches/tax-service-invoice/options')
  return response.data
}
