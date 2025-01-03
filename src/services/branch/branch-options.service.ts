import api from '@/services/api.ts'
import { Option } from '@/types/option.ts'

export const branchOptionsService = async (): Promise<Option<number>[]> => {
  const response = await api.get('/branches/options')
  return response.data
}
