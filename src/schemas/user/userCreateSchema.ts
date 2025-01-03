import { roles } from '@/types/user.ts'
import { z } from 'zod'

export const userCreateSchema = z
  .object({
    name: z.string().min(3),
    email: z.string().email(),
    username: z.string().min(3),
    password: z.string().min(6),
    password_confirmation: z.string().min(6),
    role: z.enum(Object.keys(roles) as any),
    management_report_show: z.coerce.boolean(),
    branches: z.array(z.number()).nonempty(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'As senhas não coincidem',
    path: ['password_confirmation'],
  })

export type UserCreatePayload = z.infer<typeof userCreateSchema>
