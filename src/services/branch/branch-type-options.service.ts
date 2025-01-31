import api from '@/services/api'
import { Option } from '@/types/option'

export const branchTypeOptions = async (): Promise<Option<string>[]> => {
  const response = await api.get('/branches/type/options')
  return response.data
}
