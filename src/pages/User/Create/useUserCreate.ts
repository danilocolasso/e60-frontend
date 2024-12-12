import { roles } from '@/types/User'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const userCreateSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'O nome deve ter pelo menos 3 caracteres' }),
    email: z.string().email({ message: 'O email deve ser válido' }),
    username: z.string().min(3, {
      message: 'O nome de usuário deve ter pelo menos 3 caracteres',
    }),
    password: z
      .string()
      .min(6, { message: 'A senha deve ter pelo menos 6 caracteres' }),
    password_confirmation: z.string().min(6, {
      message: 'A confirmação de senha deve ter pelo menos 6 caracteres',
    }),
    role: z.enum(Object.keys(roles) as any),
    management_report_show: z.string(),
    branches: z
      .array(z.number())
      .nonempty({ message: 'Selecione pelo menos uma filial' }),
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
