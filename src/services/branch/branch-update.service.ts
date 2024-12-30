import { BranchUpdatePayload } from '@/schemas/branch/branchUpdateSchema'
import api from '@/services/api'
import { Branch } from '@/types/Branch'

interface BranchUpdateResponse extends Branch {}

export const branchUpdateService = async (
  payload: BranchUpdatePayload,
): Promise<BranchUpdateResponse> => {
  const response = await api.put(`/branches/${payload.id}`, payload)
  return response.data
}
