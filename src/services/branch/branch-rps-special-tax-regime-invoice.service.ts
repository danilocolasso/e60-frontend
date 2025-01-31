import api from '@/services/api'
import { Option } from '@/types/option'

export const branchRpsSpecialTaxRegimeInvoiceOptionsService = async (): Promise<
  Option<string>[]
> => {
  const response = await api.get(
    '/branches/rps-special-tax-regime-invoice/options',
  )
  return response.data
}
