import api from '@/services/api'
import { Option } from '@/types/option'

export const addressStateOptionsService = async (): Promise<Option<string>[]> => {
  const response = await api.get('/address/states/options')
  return response.data
}
