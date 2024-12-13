import { roles } from '@/types/User'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const userCreateSchema = z
  .object({
    name: z.string().min(3),
    email: z.string().email(),
    username: z.string().min(3),
    password: z.string().min(6),
    password_confirmation: z.string().min(6),
    role: z.enum(Object.keys(roles) as any),
    management_report_show: z.string(),
    branches: z.array(z.number()).nonempty(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'As senhas não coincidem',
    path: ['password_confirmation'],
  })

type userCreateFormData = z.infer<typeof userCreateSchema>

export const useUserCreate = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<userCreateFormData>({
    resolver: zodResolver(userCreateSchema),
  })

  const onSubmit = async (data: userCreateFormData) => {
    console.log(data)
  }

  return {
    register,
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  }
}
