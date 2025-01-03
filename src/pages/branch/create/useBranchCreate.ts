import {
  BranchCreatePayload,
  branchCreateSchema,
} from '@/schemas/branch/branchCreateSchema'
import { branchCreateService } from '@/services/branch/branch-create.service.ts'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const useBranchCreate = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BranchCreatePayload>({
    resolver: zodResolver(branchCreateSchema),
  })

  const onSubmit = async (data: BranchCreatePayload) => {
    const id = toast.loading('Criando filial...')
    try {
      await branchCreateService(data)
      toast.update(id, {
        render: 'Filial criada com sucesso',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      })
      navigate('/administracao/filiais')
    } catch (error: any) {
      toast.update(id, {
        render:
          error.response?.data?.message ??
          'Ocorreu um erro ao criar a filial. Por favor, tente novamente mais tarde',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      })
    }
  }

  return {
    register,
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  }
}
