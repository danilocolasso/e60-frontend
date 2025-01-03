import { BranchCreatePayload } from '@/schemas/branch/branchCreateSchema'
import api from '@/services/api'
import { Branch } from '@/types/branch.ts'

interface BranchCreateResponse extends Branch {}

export const branchCreateService = async (
  payload: BranchCreatePayload,
): Promise<BranchCreateResponse> => {
  const response = await api.post('/branches', payload)
  return response.data
}
