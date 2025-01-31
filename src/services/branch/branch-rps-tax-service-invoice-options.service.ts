import api from '@/services/api'
import { Option } from '@/types/option'

export const branchRpsTaxServiceInvoiceOptionsService = async (): Promise<
  Option<string>[]
> => {
  const response = await api.get('/branches/rps-tax-service-invoice/options')
  return response.data
}
