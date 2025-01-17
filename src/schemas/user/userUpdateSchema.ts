import { roles } from '@/types/user.ts'
import { z } from 'zod'

export const userUpdateSchema = z
  .object({
    id: z.number(),
    name: z.string().min(3),
    email: z.string().email(),
    username: z.string().min(3),
    password: z.string().min(6).optional().or(z.literal('')),
    password_confirmation: z.string().min(6).optional().or(z.literal('')),
    role: z.enum(Object.keys(roles) as any),
    management_report_show: z.boolean(),
    branches: z.array(z.number()).nonempty(),
  })
  .refine(
    (data) => !data.password || data.password === data.password_confirmation,
    {
      message: 'As senhas não coincidem',
      path: ['password_confirmation'],
    },
  )

export type UserUpdatePayload = z.infer<typeof userUpdateSchema>
