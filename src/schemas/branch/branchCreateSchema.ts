import { z } from 'zod'

export const branchCreateSchema = z.object({
  name: z.string().min(3),
  phone: z.string().min(3),
  type: z.string().min(3),
  administered_by: z.string().min(3),
  is_advance_voucher: z.boolean(),
  is_active: z.boolean(),
  // TODO map the remaining fields
})

export type BranchCreatePayload = z.infer<typeof branchCreateSchema>