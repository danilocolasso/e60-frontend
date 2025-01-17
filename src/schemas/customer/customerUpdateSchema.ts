import { z } from 'zod'

export const customerUpdateSchema = z.object({
  id: z.number(),
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(10),
  document_number: z.string().min(11).max(14),
  birth_date: z.date(),
  street: z.string().min(6),
  street_number: z.string().min(1),
  neighborhood: z.string().min(3),
  complement: z.string().optional(),
  city: z.string().min(3),
  state: z.string().min(2).max(2),
  zip_code: z.string().min(8),
  username: z.string().min(3),
  password: z.string().min(6).optional().or(z.literal('')),
  branch_id: z.number(),
  newsletter: z.boolean(),
  is_corporate: z.boolean(),
})

export type CustomerUpdatePayload = z.infer<typeof customerUpdateSchema>
