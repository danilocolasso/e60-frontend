import { z } from 'zod'

export const branchUpdateSchema = z.object({
  id: z.number(),
  name: z.string().min(3),
  phone: z.string().min(3),
  type: z.string().min(3),
  administered_by: z.string().min(3),
  is_advance_voucher: z.boolean(),
  is_active: z.boolean(),
  // TODO map the remaining fields
})

export type BranchUpdatePayload = z.infer<typeof branchUpdateSchema>
