import api from '@/services/api'
import { Option } from '@/types/option'

export const branchRpsFormatOptionsService = async (): Promise<
  Option<string>[]
> => {
  const response = await api.get('/branches/rps-format/options')
  return response.data
}
