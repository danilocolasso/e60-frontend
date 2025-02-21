import { z } from 'zod'

export const branchUpdateSchema = z.object({
  id: z.number(),
  rps_id: z.coerce.number().optional(),
  admin_user_id: z.preprocess(
    (value) => (!value ? null : value),
    z.coerce.number().nullable(),
  ),
  type: z.string(),
  state: z.string().optional(),
  name: z.string(),
  phone: z.string().max(20).optional().nullable(),
  address: z.string(),
  zip_code: z.string().min(8).max(9).optional(),
  pagseguro: z
    .object({
      email: z.string().email().optional().nullable(),
      token: z.string().optional().nullable(),
      client_id: z.string().optional().nullable(),
      client_secret: z.string().optional().nullable(),
    })
    .optional(),
  paypal: z
    .object({
      user: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
      signature: z.string().optional().nullable(),
    })
    .optional(),
  enotas: z
    .object({
      api_key: z.string().optional().nullable(),
      company_id: z.string().optional().nullable(),
    })
    .optional(),
  giftcard_person_limit: z.coerce.number().min(1),
  giftcard_value_per_person: z.coerce.number().min(0),
  is_advance_voucher: z.boolean(),
  is_active: z.boolean(),
  proposal_text: z.string().optional().nullable(),
})

export type BranchUpdatePayload = z.infer<typeof branchUpdateSchema>
