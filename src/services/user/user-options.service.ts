import api from '@/services/api'
import { Option } from '@/types/option'

export const userOptionsService = async (): Promise<Option<string>[]> => {
  const response = await api.get('/users/options')
  return response.data
}
