import api from '@/services/api'
import { Option } from '@/types/option'

export const branchRpsSimplesNationalOptantOptionsService = async (): Promise<
  Option<string>[]
> => {
  const response = await api.get('/branches/rps-simples-national-optant/options')
  return response.data
}
