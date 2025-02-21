import { z } from 'zod'

export const customerUpdateSchema = z.object({
  id: z.number(),
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(10),
  cellphone: z.string().min(10).optional().or(z.literal('')),
  document_number: z.string().min(11).max(14),
  birth_date: z.date().nullable(),
  street: z.string().min(6),
  street_number: z.string().min(1),
  neighborhood: z.string().min(3),
  complement: z.string().optional().nullable(),
  city: z.string().min(3),
  state: z.string().min(2).max(2),
  zip_code: z.string().length(9),
  password: z.string().min(6).optional().or(z.literal('')),
  branch_id: z.number(),
  newsletter: z.boolean(),
  is_corporate: z.boolean().optional(),
  contacts: z.array(
    z.object({
      id: z.number().optional().nullable(),
      name: z.string().min(3).or(z.literal('')).optional().nullable(),
      department: z.string().optional().nullable(),
      email: z.union([z.string().email(), z.string().length(0)]).optional().nullable(),
      phone: z.string().optional().nullable(),
    }),
  ).optional(),
})

export type CustomerUpdatePayload = z.infer<typeof customerUpdateSchema>
